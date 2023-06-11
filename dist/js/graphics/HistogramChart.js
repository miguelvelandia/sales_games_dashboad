google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawHistogramChart);

function drawHistogramChart() {
    var queryString = encodeURIComponent('SELECT A, B');
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryHistogramResponse);
}

function handleQueryHistogramResponse(response){
   
    var data_histogram = response.getDataTable();      
    
    var options = {
        title: 'Dstribución de Ranking de juegos 1-100 ',        
        legend: { position: 'none' },
      };
 
      var histogram_chart = new google.visualization.Histogram(document.getElementById('histogram-chart'));
      histogram_chart.draw(data_histogram, options);
 
 }
 