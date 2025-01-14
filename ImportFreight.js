function submitForm() {
  const form = document.getElementById('freightForm');
  const formData = new FormData(form);

  const emailBody = `
      Importer Name: ${formData.get('importerName')}
      Contact No: ${formData.get('contactNo')}
      Email ID: ${formData.get('emailId')}
      Supplier Name: ${formData.get('supplierName')}
      Contact Person: ${formData.get('contactPerson')}
      Supplier Contact No: ${formData.get('supplierContactNo')}
      Supplier Email ID: ${formData.get('supplierEmailId')}
      Port of Loading: ${formData.get('portLoading')}
      Port of Destination: ${formData.get('portDestination')}
      Commodity: ${formData.get('commodity')}
      No of Packages: ${formData.get('numPackages')}
      Type of Containers and Weight: ${formData.get('containerInfo')}
      Ex Works Info: ${formData.get('exWorks')}
      Cargo Pickup Address: ${formData.get('cargoAddress')}
      Expected Date of Readiness: ${formData.get('cargoReadinessDate')}
  `;

  window.location.href = `mailto:support@intimelogistics.in?cc=hari@intimelogistics.in&subject=Import Freight Enquiry&body=${encodeURIComponent(emailBody)}`;
}
