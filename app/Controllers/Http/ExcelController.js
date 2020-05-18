'use strict'

const kue = use('Kue')
const Job = use('App/Jobs/SendMail')

const fs = use('fs');

// Initialize the mock browser variables
const mockBrowser = use('mock-browser').mocks.MockBrowser;
global.window = mockBrowser.createWindow();
global.document = window.document;
global.navigator = window.navigator;
global.HTMLCollection = window.HTMLCollection;
global.getComputedStyle = window.getComputedStyle;

const fileReader = use('filereader');
global.FileReader = fileReader;

const GC = use('@grapecity/spread-sheets');
const GCExcel = use('@grapecity/spread-excelio');

GC.Spread.Sheets.LicenseKey = GCExcel.LicenseKey = "<YOUR KEY HERE>";

const wb = new GC.Spread.Sheets.Workbook();

const excelIO = new GCExcel.IO();

// Excel worksheets
const excelWorksheets = ['Read Me', 'Errors', 'A_Basic_Info', 'B_Profit_Loss_account_Self', 'C_Balance_Sheet', 'D_Stock_Analysis', 'E1_IDA_CA', 'E2_CA_WTA_WDV', 'E2_CA_WTA_SLM', 'E_Summary_of_Capital_Allowance', 'F_Employment_Income', 'G_Partnership_Income', 'H_Estate_Trust_Income', 'I_Computation_of_Car_Benefit', 'J_Computation_of_Mortagage', 'K_Home_Ownership_Saving_Plan', 'L_Computation_of_Insu_Relief', 'M_Details_of_PAYE_Deducted', 'N_Installment_Tax_Credits', 'O_WHT_Credits', 'P_Advance_Tax_Credits', 'Q_IT_Payment_Credits', 'R_DTAA_Credits', 'S_Previous_Years_Losses', 'T_Income_Computation_Self', 'T_Tax_Computation'];

class ExcelController {

  * fillOutExcel(request, response) {
    fillBasicInfo();
	fillOtherSourcesOfIncome();
	fillPartnershipIncome();
    fillEstateTrustIncome();
	fillEmployerProvidedCar();
	fillMortgage();
    fillHomeOwnershipSavingsPlan();
	fillLifeInsurancePolicy();
	fillCommercialVehicle();
    fillForeignCountryIncome();
	fillDisabilityExcemptionCertificate();
	fillWifesIncome();
	
    zipExcel();
	downloadZippedExcel();
	excelGeneratedErrors();
	sendMail();
			
    response.ok()
  }

  * fillBasicInfo(request, response) {
    var sheet = wb.getSheet(2);
	sheet.getCell(2, 1).value(request.basicInfo[0].taxpayerPin);
	sheet.getCell(3, 1).value(request.basicInfo[0].typeOfReturn);
	sheet.getCell(4, 1).value(request.basicInfo[0].returnPeriodFrom);
	sheet.getCell(5, 1).value(request.basicInfo[0].returnPeriodTo);
	sheet.getCell(6, 1).value(request.basicInfo[0].otherSourcesOfIncome);
	sheet.getCell(7, 1).value(request.basicInfo[0].partnershipIncome);
	sheet.getCell(8, 1).value(request.basicInfo[0].estateTrustIncome);
	sheet.getCell(9, 1).value(request.basicInfo[0].employerProvidedCar);
	sheet.getCell(10, 1).value(request.basicInfo[0].mortgage);
	sheet.getCell(11, 1).value(request.basicInfo[0].homeOwnershipSavingsPlan);
	sheet.getCell(12, 1).value(request.basicInfo[0].lifeInsurancePolicy);
	sheet.getCell(13, 1).value(request.basicInfo[0].commercialVehicle);
	sheet.getCell(14, 1).value(request.basicInfo[0].foreignCountryIncome);
	sheet.getCell(15, 1).value(request.basicInfo[0].disabilityExcemptionCertificate);
	sheet.getCell(16, 1).value(request.basicInfo[0].wifesIncome);
			
    response.ok()
  }

  * fillOtherSourcesOfIncome(request, response) {
    var sheet = wb.getSheet(0);
	var rowsToAdd = 0;
	if (invoice.invoiceItems.length > 15) {
		rowsToAdd = invoice.invoiceItems.length - 15;
		sheet.addRows(22, rowsToAdd);
	}

	var rowIndex = 8;
	if (invoice.invoiceItems.length >= 1) {
		for (var i = 0; i < invoice.invoiceItems.length; i++) {
			sheet.getCell(rowIndex, 1).value(invoice.invoiceItems[i].quantity);
			sheet.getCell(rowIndex, 2).value(invoice.invoiceItems[i].details);
			sheet.getCell(rowIndex, 3).value(invoice.invoiceItems[i].unitPrice);
			rowIndex++;
		}
	}
			
    response.ok()
  }

  * fillPartnershipIncome(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillEstateTrustIncome(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillEmployerProvidedCar(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillMortgage(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillHomeOwnershipSavingsPlan(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillLifeInsurancePolicy(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillCommercialVehicle(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillForeignCountryIncome(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillDisabilityExcemptionCertificate(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * fillWifesIncome(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * zipExcel(request, response) {
    excelIO.save(wb.toJSON(), (data) => {
		fs.appendFileSync('Invoice' + new Date().valueOf() + '.xlsx', new Buffer(data), function (err) {
			console.log(err);
		});
		console.log("Export success");
	}, (err) => {
		console.log(err);
	}, { useArrayBuffer: true });
  }

  * downloadZippedExcel(request, response) {
    const file = await Database.table('files').where('id', whatEverId).first()
	response.header('content-type', file.tyle)
	response.header('content-length', Buffer.byteLength(file.contents))
	response.send(file.contents)
    response.ok(users)
  }

  * excelGeneratedErrors(request, response) {
    const users = yield User.paginate(request.input('page', 1), 20)
    response.ok(users)
  }

  * sendMail(request, response) {
    const data = {
      to: 'ewanguba@gmail.com',
      name: 'Evans Wanguba',
      from: 'no-reply@adonis.com',
      subject: 'Tax Return Zipped Excel Workbook'
    }
    const job = kue.dispatch(Job.key, data)
    response.json({ message: 'Mail queue!' })
  }
}

module.exports = ExcelController
