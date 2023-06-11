google.charts.setOnLoadCallback(loadKpi);

function loadKpi() {
    var queryString = encodeURIComponent('SELECT SUM(T), AVG(E),COUNT(A),AVG(V)');
    var query = new google.visualization.Query ("https://docs.google.com/spreadsheets/d/1D9w9wjrT7gat4UbhMzarFg5Lu4CfdI2S/edit?usp=sharing&headers=1&tq="+queryString);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response){  
    var data_kpi = response.getDataTable();  
    let DataTable=[] 
    data_kpi.Wf.forEach(function(element, i, array) {             
        element.c.forEach(element => DataTable.push(element.v));                  
     })
       
     DataTable[0]=DataTable[0].toLocaleString("co-CO")    
     DataTable[2]=DataTable[2].toLocaleString("co-CO")    
     console.log( DataTable)
     document.getElementById('total_sales').innerHTML="$ "+ DataTable[0]
     document.getElementById('avg_raiting').innerHTML=Math.round(DataTable[1]*100)/100
     document.getElementById('count_games').innerHTML=DataTable[2]
     document.getElementById('critic_rating').innerHTML=Math.round(DataTable[3]*100)/100
     

    
}