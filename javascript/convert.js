// document.getElementById('downloadPdf').addEventListener('click', function () {
//     const htmlContent = document.querySelector('.main-home').innerHTML;
    
//     console.log(htmlContent)
//     fetch('http://localhost:5500/generate-pdf', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: `html=${encodeURIComponent(htmlContent)}`,
//     })
//     .then(response => response.blob())
//     .then(blob => {
//         const url = window.URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = 'CurriculumVitae.pdf';
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
//     });

//   });

document.getElementById('download-cv').addEventListener('click', function() {
    // Replace 'cv.html' with the URL of your CV page
    const url = '../html/cv.html';

    fetch('/generate-pdf', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    })
    .then(response => response.blob())
    .then(blob => {
        // Create a Blob object for the PDF
        const blobUrl = URL.createObjectURL(blob);

        // Create a download link and trigger the download
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'cv.pdf';
        a.click();
        URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
        console.error('Error generating PDF:', error);
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('DOMContentLoaded event fired');
//     document.getElementById('download-cv').addEventListener('click', function() {
//         const element = document.getElementById('main-cv');
        
//         // Options for pdf generation
//         const pdfOptions = {
//             margin: 10,
//             filename: 'cv.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
//         };

//         // Generate the PDF
//         html2pdf()
//             .from(element)
//             .set(pdfOptions)
//             .outputPdf(function(pdf) {
//                 // Create a Blob object for the PDF
//                 const blob = new Blob([pdf], { type: 'application/pdf' });

//                 // Create a download link and trigger the download
//                 const url = URL.createObjectURL(blob);
//                 const a = document.createElement('a');
//                 a.href = url;
//                 a.download = pdfOptions.filename;
//                 a.click();
//                 URL.revokeObjectURL(url);
//             });
//     });
// });