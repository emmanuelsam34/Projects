var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new myChart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
                'Current Initiatives',
                'Active Projects',
                'Completed Projects',
                'Archived Projects',
                ],
        datasets: [{ 
        data: [300, 50, 100, 40],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(242, 244, 243)'
        ],
        hoverOffset: 4
        }]
    },
});