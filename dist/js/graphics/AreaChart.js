google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAreaChart);

function drawAreaChart() {
    var queryString = encodeURIComponent('SELECT A, SUM(P),SUM(Q),SUM(R) GROUP BY A ORDER BY (SUM(P)+SUM(Q)+SUM(R)) DESC  LIMIT 10');
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryAreaResponse);
}

function handleQueryAreaResponse(response){
   
    var data_area = response.getDataTable();  
    
    var options = {
        title: 'Top 10 juegos- Ventas por paises',
        chartArea:{left:60,top:40,width:'65%',height:'82%'},
        hAxis: {title:'Juegos',  titleTextStyle: {color: '#333'}},
        vAxis: {title: 'Ventas',minValue: 0, titleTextStyle: {color: '#333'}}
      };
 
      var area_chart = new google.visualization.AreaChart(document.getElementById('area-chart'));
      area_chart.draw(data_area, options);
 
 }
 
