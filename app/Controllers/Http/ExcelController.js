'use strict'

const XLSX = require('xlsx');
const Helpers = use('Helpers');
const fs = require('fs');
const zlib = require('zlib');
var express = require('express');

class ExcelController {
    async readExcelFile ({ view }) {
        const excelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsm');

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
            
            //console.log(data);
        });

        //return view.render('welcome', { data })
        return data;
    }
    
    async writeToExcelFile ({ view }) {
        const excelFile = Helpers.publicPath('files/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.xlsm');
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
    
    async downloadExcelFile (response) {
        const zipFile = Helpers.publicPath('files/zip/Normal-P10_Return-with-New-Rates-Version-18.0.0-1.zip');

        setTimeout(() => {
            response.sendFile(zipFile);
        }, 500);

        return true;
    }
}

module.exports = ExcelController
