'use strict'

const XLSX = require('xlsx');
const Helpers = use('Helpers');

class ExcelController {
    async index ({ view }) {
        const excelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsm')//'files/IT1_Individual_Resident_Return_Template.xlsx')

        // Read file
        var workbook = XLSX.readFile(excelFile);//,{"bookVBA":true,"password":false});
        var sheet_name_list = workbook.SheetNames;

        // Detecting macros in the workbook
        /*if(!!workbook.vbaraw) return true;
        const sheets = workbook.SheetNames.map((n) => workbook.Sheets[n]);
        return sheets.some((ws) => !!ws && ws['!type']=='macro');*/

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
            
            console.log(data);
        });

        return view.render('welcome', { data })
    }
}

module.exports = ExcelController
