// Data source: http://api.coindesk.com/v1/bpi/historical/close.json

const getDataForBitcoin = () => {
    axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
    .then(response => {
        console.log(response);
        
    })   
}

getDataForBitcoin();
