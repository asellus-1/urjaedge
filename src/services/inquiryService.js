/**
 * Service to submit inquiries to Google Sheets via Google Apps Script Web App
 */

const GOOGLE_SHEETS_ENDPOINT = import.meta.env.VITE_GOOGLE_SHEETS_API_URL || '';

export async function submitInquiryToGoogleSheet(formData, source = 'Website Contact Form') {
  // Always store in localStorage as a backup
  try {
    const existing = JSON.parse(localStorage.getItem('urjaedge_enquiries') || '[]');
    existing.push({
      ...formData,
      source,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('urjaedge_enquiries', JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to save inquiry to localStorage', err);
  }

  // If endpoint is configured, forward to Google Sheets
  if (GOOGLE_SHEETS_ENDPOINT) {
    try {
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          ...formData,
          source
        })
      });
      return { success: true };
    } catch (error) {
      console.warn('Google Sheets sync encountered an issue, saved locally:', error);
      return { success: false, error };
    }
  }

  return { success: true, localOnly: true };
}
