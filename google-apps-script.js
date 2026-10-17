// Google Apps Script to record UrjaEdge contact form inquiries into Google Sheets
// Setup instructions:
// 1. Create a Google Sheet (e.g. named "UrjaEdge Inquiries").
// 2. Click Extensions > Apps Script.
// 3. Paste this code into Code.gs, replace SHEET_NAME if needed.
// 4. Click 'Deploy' > 'New deployment'.
// 5. Select type: 'Web app'.
// 6. Set Description: 'UrjaEdge Inquiries API'.
// 7. Set 'Execute as': 'Me'.
// 8. Set 'Who has access': 'Anyone'.
// 9. Click 'Deploy', authorize permissions, and copy the Web App URL.
// 10. Add the Web App URL into your .env as VITE_GOOGLE_SHEETS_API_URL or config.

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) 
      || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Company',
        'Email',
        'Mobile',
        'Requirement',
        'Brief Details',
        'Source Page / Form'
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#061D30').setFontColor('#FFFFFF');
    }

    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const name = data.name || '';
    const company = data.company || '';
    const email = data.email || '';
    const mobile = data.mobile || '';
    const requirement = data.requirement || '';
    const briefDetails = data.briefDetails || data.details || '';
    const source = data.source || 'Website Contact Form';

    sheet.appendRow([
      timestamp,
      name,
      company,
      email,
      mobile,
      requirement,
      briefDetails,
      source
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Inquiry recorded successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'online', message: 'UrjaEdge Inquiry Webhook is active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
