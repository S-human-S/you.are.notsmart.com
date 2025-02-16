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
function addData(ownname,youname) { 
  const sheet = getSheet('1j_st3Ott1l0dcuoiBdPl8J4IqG9S6nWx8OWFOkc-rsc', 'ちーと');
  sheet.appendRow([ownname,youname]);
}
