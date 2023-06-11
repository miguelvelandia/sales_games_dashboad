google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawWaterfallChart);

function drawWaterfallChart() {
    var queryString = encodeURIComponent("SELECT I, AVG(J),AVG(K),AVG(L),AVG(M)  GROUP BY I ORDER BY (AVG(J)+AVG(K)+AVG(L)+AVG(M)) DESC  LIMIT 5");
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryWaterfallResponse);
}

function handleQueryWaterfallResponse(response){
   
    var data_Waterfall = response.getDataTable();     

       var options = {
        legend: 'none',
        title: 'Top 5 - Promedio de 5-2 estrellas por category',
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
            risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
        },
        chartArea: { left: 40, top: 20, width: '100%', height: '75%' },
        
        
    };
 
      var Waterfall_chart = new google.visualization.CandlestickChart(document.getElementById('Waterfall-chart'));
      Waterfall_chart.draw(data_Waterfall, options);
 
 }
 