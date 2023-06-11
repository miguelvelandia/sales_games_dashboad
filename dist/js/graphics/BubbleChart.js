google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawbubleChart);

function drawbubleChart() {
    var queryString = encodeURIComponent('SELECT I, AVG(E), SUM(T) GROUP BY I ORDER BY SUM(T) DESC  LIMIT 5');
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryResponsebuble);
}

function handleQueryResponsebuble(response){   
   var data_bubble = response.getDataTable(); 
   
    var options = {
        title: 'Top 5 de paises -  Ventas globales vs Promedio Calificación por Juegos.',
        hAxis: {title: '5_star_ratings'},
        vAxis: {title: 'Global_sales'},
        chartArea:{left:60,top:40,width:'85%',height:'55%'},
        bubble: {
            textStyle: {
              fontSize: 12,
              fontName: 'Times-Roman',
              color: 'white',
              auraColor: 'none',
              bold: true,
              italic: true
            }
        }        
      };
      var bubble_chart = new google.visualization.BubbleChart(document.getElementById('bubble-chart'));
      bubble_chart.draw(data_bubble, options);

}

