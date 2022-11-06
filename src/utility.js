const transformData = (input_data) => {
    let transformed_data_ohlc = [], transformed_data_volume = [];
    for (let value of input_data) {
        let obj_ohlc = {
            x: new Date(value.timestamp),
            y: [parseFloat(value.open), parseFloat(value.high), parseFloat(value.low), parseFloat(value.close)]
        };

        let obj_volume = {
            x: new Date(value.timestamp),
            y: parseFloat(value.volume)
        };

        transformed_data_ohlc = [...transformed_data_ohlc, obj_ohlc];
        transformed_data_volume = [...transformed_data_volume, obj_volume];
    }

    return { ohlc_data: transformed_data_ohlc, volume_data: transformed_data_volume };
}

export default transformData