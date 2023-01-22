Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Bananas', 'Oranges', 'Strawberries', 'Grapes', 'Blueberries']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Vikki',
        data: [-1, 7, 6, 1, 4]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});