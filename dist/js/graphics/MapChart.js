google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(drawMapChart);

function drawMapChart() {
    var queryString = encodeURIComponent('SELECT W,sum(T) GROUP BY W');
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryMapeResponse);
}


function handleQueryMapeResponse(response){
   
    var data_tree_map = response.getDataTable();  
        
    var options = {      
        headerHeight: 15,
        fontColor: 'black',
        showTooltip: true,
       showInfoWindow: true,
        showScale: true
      }

      var tree_map_chart = new google.visualization.GeoChart(document.getElementById('map-chart'));
      tree_map_chart.draw(data_tree_map, options);
 
 }