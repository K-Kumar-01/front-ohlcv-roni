const API_ENDPOINT = "https://roni-analytics.herokuapp.com";

const OPTIONS_OHLC = {
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: 'OHLC Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
}


const OPTIONS_VOLUME = {
    chart: {
        type: 'bar',
        height: 350
    },
    title: {
        text: 'Volume Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    }
}

export { API_ENDPOINT, OPTIONS_OHLC, OPTIONS_VOLUME };