function submitForm() {
  const form = document.getElementById("freightForm");
  const formData = new FormData(form);

  // Collect form data into an HTML table
  let emailBody = `
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr><th>Field</th><th>Value</th></tr>
          ${Array.from(formData.entries()).map(([key, value]) => {
              if (key === "attachments") {
                  const files = form.elements[key].files;
                  return `<tr><td>${key}</td><td>${Array.from(files).map(file => file.name).join(", ")}</td></tr>`;
              }
              return `<tr><td>${key}</td><td>${value}</td></tr>`;
          }).join("")}
      </table>
  `;

  const subject = "Import Freight Enquiry Form Submission";
  const mailtoLink = `mailto:cusservice@intimelogistics.in?cc=hari@intimelogistics.in,support@intimelogistics.in&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  // Open mail client with the prepared mailto link
  window.location.href = mailtoLink;

  alert("Note: Attachments cannot be sent through the mailto link. Please attach them manually.");
}
