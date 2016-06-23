function Create_New_Week() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  if ( Mid( data[0][0],1,Len("Week"))  == "Week" ) {
    //Logger.log("OK"); 
    
    logWeek = Mid( data[0][0],Len("Week")+1,Len(data[0][0])); Logger.log(logWeek);
    var NextWeek = parseInt(logWeek) + 1; Logger.log(NextWeek); 
    
    logDay = data[1][0];  Logger.log(logDay);
  
    sheet.insertRows(1,11);
    
    sheet.getRange(1,1).setValue('Week'+NextWeek);
    for (var i=1; i<=5; i++) {
      var date = new Date(logDay);
      var NextDay = (new Date(date.setDate(date.getDate()+8-i))); Logger.log(NextDay);
      sheet.getRange(i*2,1).setValue(NextDay);
    
    }
  }
  
  //for (var i = 0; i < data.length; i++) {
    //Logger.log(data[0][0]);
    //Logger.log(data[1][0]);
  //}
}
