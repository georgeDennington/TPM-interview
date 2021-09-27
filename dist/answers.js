const answers = window.sessionStorage.getItem('answers').split(',');
const reducer = (previousValue, currentValue) => previousValue + currentValue;

const getPoints = (answer) => {
  switch(answer) {
    case 'a':
      return 5;
    case 'b':
      return 10;
    case 'c':
      return 15;

  }
  return 8;
}

const results = answers.map(answer => getPoints(answer));

const drawChart = () => {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'question');
  data.addColumn('number', 'points');
  data.addRows([
    ['Question 1', results[0]],
    ['Question 2', results[1]],
    ['Question 3', results[2]],
    ['Question 4', results[3]],
    ['Question 5', results[4]],
  ]);

  const options = {
    legend: 'none',
    chartArea: {
      height: '100%',
      width: '100%'
    },
  }

  // Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
  chart.draw(data, options);
}

window.addEventListener('load', (event) => {
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  const total = results.reduce(reducer);
  const resultElement = document.getElementById('grade');

  if (total <= 15) {
    resultElement.innerHTML = 'Below average ' + total + ' out of 75'
  }

  if (total > 15 && total <= 50) {
    resultElement.innerHTML = 'Average ' + total + ' out of 75'
  }

  if (total > 50) {
    resultElement.innerHTML = 'Above average ' + total + ' out of 75'
  }
});