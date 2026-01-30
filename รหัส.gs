// แก้ไข function doGet เดิม
function doGet(e) {
  // ตรวจสอบว่ามี parameter ชื่อ page ส่งมาหรือไม่ ถ้าไม่มีให้เป็น 'index'
  var page = e.parameter.page || 'index';
  
  // ใช้ createTemplateFromFile เพื่อให้สามารถส่งตัวแปรเข้าไปใน HTML ได้ (เช่น URL ของเว็บ)
  var template = HtmlService.createTemplateFromFile(page);
  
  // ส่งค่า url ปัจจุบันไปให้ HTML ใช้ทำ Link
  template.url = ScriptApp.getService().getUrl();
  
  return template.evaluate()
    .setTitle('Khlongkhwang School')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ฟังก์ชันสำหรับ include ไฟล์ (หากต้องการแยกส่วน header/footer ในอนาคต)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// ฟังก์ชันเดิม เก็บไว้เหมือนเดิม
function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('index')
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'My Canva Design');
}