
    const labels2 = ['Basic','Logo', 'Batch', 'Turbo Pascal', 'Assembler', 'C++', 'C#', 'Java', 'PHP', 'Bash', 'JavaScript'];
    const data2 = {
      labels: labels2,
      datasets: [{
        label: '',
        backgroundColor: ['lightblue', 'yellow', 'rgb(255,255,112)', 'rgb(250,250,250)', 'white', 'green', 'purple', 'brown', 'gray', 'orange', 'blue'].reverse(),
        borderColor: 'black',
        data: ['1990', '1994', '1996', '1998', '2002', '2018', '2019', '2020', '2020', '2020', '2021'],
        hoverOffset: 4,
        hoverBorderColor: 'red'
      }]
    };

    const config2 = {
      type: 'line',
      data: data2,
      options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Chronologia zaznajamiania z językami programowania',
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
  

    
    var myChart = new Chart(document.getElementById('chrono_bars'),config2);
