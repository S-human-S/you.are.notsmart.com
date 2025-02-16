function doGet(e) {
 let page = e.parameter.page;
 if (!page) {
   page = 'index';
 }
 return HtmlService.createTemplateFromFile(page).evaluate();
}
function getSheet(ssId, ssName){
 const ss = SpreadsheetApp.openById(ssId);
 const sheet = ss.getSheetByName(ssName);
 return sheet;
}
function addData(name,email,message) { 
  const sheet = getSheet('スプレッドシートID', 'シート名');
  sheet.appendRow([name,email,message]);
}
