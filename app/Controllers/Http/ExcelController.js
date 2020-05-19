'use strict'

const XLSX = require('xlsx');
const Helpers = use('Helpers');
const fs = require('fs');
const zlib = require('zlib');

class ExcelController {
    async readExcelFile ({ view }) {
        const excelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsm');

        // Read file
        var workbook = XLSX.readFile(excelFile);//,{"bookVBA":true,"password":false});
        var sheet_name_list = workbook.SheetNames;

        var data = [];
        sheet_name_list.forEach(function(y) {
            var worksheet = workbook.Sheets[y];
            var headers = {};
            var z = '';
            for(z in worksheet) {
                if(z[0] === '!') continue;
                //parse out the column, row, and value
                var tt = 0;
                for (var i = 0; i < z.length; i++) {
                    if (!isNaN(z[i])) {
                        tt = i;
                        break;
                    }
                };
                var col = z.substring(0,tt);
                var row = parseInt(z.substring(tt));
                var value = worksheet[z].v;

                //store header names
                if(row == 1 && value) {
                    headers[col] = value;
                    continue;
                }

                if(!data[row]) data[row]={};
                data[row][headers[col]] = value;
            }
            //drop those first two rows which are empty
            data.shift();
            data.shift();
            
            //console.log(data);
        });

        //return view.render('welcome', { data })
        return data;
    }
    
    async writeToExcelFile ({ view }) {
        const excelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsm');
		
		var workbook = XLSX.readFile(excelFile, { bookVBA:true, cellStyles:true, cellHTML:true, bookDeps:true, bookFiles:true });

        // Detecting macros in the workbook
        /*if(!!workbook.vbaraw) return true;
        const sheets = workbook.SheetNames.map((n) => workbook.Sheets[n]);
        return sheets.some((ws) => !!ws && ws['!type']=='macro');*/

		// Exact order of worksheets
		//[ 'Read Me', 'Errors', 'Data', 'ImportCsv', 'Validations', 'ValidationList', 'Macros_Disabled', 'A_Basic_Info', 'B_Employees_Dtls', 'C_Disabled_Employees_Dtls', 'D_Computation_of_Car_Benefit', 'E_Computation_of_Insu_Relief', 'F_Lump_Sum_Payments_Dtls', 'G_Arrears_Dtls_E', 'H_Arrears_Dtls_DE', 'I_Gratuity_Dtls', 'J_FBT_Dtls', 'K_PAYE_Payment_Credits', 'M_Housing_Levy_Dtls', 'N_Tax_Due', 'Sheet1' ]
		
		var basic_info_sheet = workbook.SheetNames[7]; // Basic Info Worksheet
		var worksheet = workbook.Sheets[basic_info_sheet];
		//console.log(basic_info_sheet);
		//console.log(worksheet);

		// Read value in A3 
		var cell = worksheet['A3'].v;
		console.log(cell);
		
		var cell = worksheet['B3'];
		if(!cell) cell = worksheet['B3'] = {t:'s'}; // [ 'b' -> Boolean, 'e' -> Error, 'n' -> Number, 'd' -> Date, 's' -> Text, 'z' -> Stub ]

		// Modify value in B3
		worksheet['B3'].v = 'A12345678Y';

		// Write to new file
		var workbookNew = {};
		workbookNew.SheetNames = workbook.SheetNames;
		workbookNew.Sheets = workbook.Sheets;
		workbookNew.vbaraw = workbook.vbaraw;
		XLSX.writeFile(workbookNew, Helpers.publicPath('files/test.xlsm'), { bookSST:true });

		return true;
    }
    
    async zipExcelFile ({ view }) {
        const excelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsm');
        const zippedExcelFile = Helpers.publicPath('files/zip/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.rar');

        const fileContents = fs.createReadStream(excelFile);
        const writeStream = fs.createWriteStream(zippedExcelFile);
        const zip = zlib.createGzip();

        fileContents.pipe(zip).pipe(writeStream);

        return true;
    }
    
    async unZipExcelFile ({ view }) {
        const zipFile = Helpers.publicPath('files/zip/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.zip');
        const unZippedExcelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsx');

        const fileContents = fs.createReadStream(zipFile);
        const writeStream = fs.createWriteStream(unZippedExcelFile);
        const unzip = zlib.createGunzip();

        fileContents.pipe(unzip).pipe(writeStream).on('finish', (err) => {
            if (err) return reject(err);
            else resolve();
        });

        return true;
    }
    
    async downloadExcelFile ({ request, response }) {
        const zipFile = Helpers.publicPath('files/zip/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.zip');

		response.header('content-type', 'application/zip')
		response.header('content-length', Buffer.byteLength(zipFile))
		response.send(zipFile)
		
		return true;
    }
}

module.exports = ExcelController
