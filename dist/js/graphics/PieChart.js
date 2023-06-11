google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);

function drawPieChart() {
    var queryString = encodeURIComponent('SELECT O,SUM(T) GROUP BY O');
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryPieResponse);
}

function handleQueryPieResponse(response){
   
   var data_pie = response.getDataTable();  
      
   var options = {
    title: ' % [pago o no pago]',
    fontSize: 12,
    fontName: 'Times-Roman',
    chartArea:{width:'60%',height:'80%'},
    titleTextStyle:{fontName: 'Times-Roman',  fontSize:14,  bold: true, italic: true }
        
  };

      var pie_chart = new google.visualization.PieChart(document.getElementById('pie-chart'));
      pie_chart.draw(data_pie, options);

}

