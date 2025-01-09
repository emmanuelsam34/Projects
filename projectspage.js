document.getElementById('pdf-link').addEventListener('click', function (event) {
    event.preventDefault(); 
    const pdfUrl = this.getAttribute('data-pdf-url'); 
    if (pdfUrl) {
      window.open(pdfUrl, '_blank'); 
    } else {
      console.error('PDF URL is missing.');
    }
  });
  
function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
                'Current Initiatives',
                'Active Projects',
                'Completed Projects',
                'Archived Projects',
                ],
        datasets: [{
        data: [2, 12, 2, 22],
        backgroundColor: [
            'rgb(182, 109, 13)',
            'rgb(163, 50, 11)',
            'rgb(4, 119, 59)',
            'rgb(94, 48, 35)'
        ],
        hoverOffset: 4
        }]
    },
});