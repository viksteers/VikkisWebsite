Highcharts.chart('areacontainer', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Greenhouse gases from USA economic activity',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.ssb.no/en/statbank/table/09288/"' +
            'target="_blank">SSB</a>',
        align: 'left'
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Billions and Billions'
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
    },
    plotOptions: {
        series: {
            pointStart: 1999
        },
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: ' USA Ocean transport',
        data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
    }, {
        name: 'USA Households',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

    }, {
        name: 'USA Agriculture and hunting',
        data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
    }, {
        name: 'USA Air transport',
        data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

    }, {
        name: 'USA Construction',
        data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
    }]
});
