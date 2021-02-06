const axios = require('axios')

const URL = "https://api.coingecko.com/api/v3/search/trending";

async function getTrendingCoinGecko() {
    return (await axios.get(URL))
        .data.coins.map(tokenInfo => (
            {
                id: tokenInfo.item.id,
                name: tokenInfo.item.name,
                symbol: tokenInfo.item.symbol,
                market_cap_rank: tokenInfo.item.market_cap_rank,

            }
        ));
}


module.exports = {
    getTrendingCoinGecko: getTrendingCoinGecko,
}
// TODO: send notification immediately (use PARSIQ) when an order book is bougth up (maybe price increase percentage with volume?) 