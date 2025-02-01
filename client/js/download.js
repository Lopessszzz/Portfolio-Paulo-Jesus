function downloadResume() {
    const resumeUrl = './client/files/Curriculo-Paulo-Jesus.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'Currículo Paulo Jesus.pdf';
    document.body.appendChild(downloadLink); // Add the link to the document
    downloadLink.click();
    document.body.removeChild(downloadLink); // Remove the link after download
  }