function loaddata() {
          
    var qtyArr = [];
    var lvlArr = [];
    $.ajax({
            url: 'cwstats/cwphpprofile.json',
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data) {
                $(data.cwphpprofile).each(function(index, value) {
                    lvlArr.push(value.lvl+' kyu');
                    qtyArr.push(value.qty);
                })
            }
        });
    return [lvlArr, qtyArr];
  }

  function prepareChart() {

    var fulldata = loaddata();
      
    const labels = fulldata[0];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Struktura portfela ukończonych wyzwań programistycznych wg stopnia trudności',
        backgroundColor: ['lightblue', 'yellow', 'rgb(255,255,112)', 'rgb(250,250,250)', 'white'].reverse(),
        borderColor: 'black',
        data: fulldata[1],
        hoverOffset: 4,
        hoverBorderColor: 'red'
      }]
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Struktura portfela ukończonych wyzwań programistycznych wg stopnia trudności',
                  font: {size: '20%'},
                  padding: 15
              },
              legend: {
                  labels: {
                      padding: 15
                  }
              }
          }
      }
    };
    return config; 
    //   setTimeout(function() {new Chart(document.getElementById('difficulty_cake'),config)},60);
  };

function drawChart(myconfig) {
    
    var myChart = new Chart(document.getElementById('difficulty_cake'),myconfig);

}