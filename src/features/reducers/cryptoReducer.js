const initialState = [
    {
        title: 'Bitcoin',
        currentValue: '42832.75',
        changeRate: '+2.37', //%
        changeStatus: '+'
    },
    {
        title: 'Ethereum',
        currentValue: '3065.64',
        changeRate: '-2.43', //%
        changeStatus: '-'
    },
    {
        title: 'Binance Coin',
        currentValue: '411.8',
        changeRate: '-5.03', //%
        changeStatus: '-'
    },
    {
        title: 'Cardano',
        currentValue: '1.150',
        changeRate: '+0.17', //%
        changeStatus: '+'
    },
    {
        title: 'Solana',
        currentValue: '111.71',
        changeRate: '-5.00', //%
        changeStatus: '-'
    }
]

export default function cryptoReducer(state = initialState, action) {
    switch (action.type) {
        case 'updateCoin':
            return state.map((coin) => {
                if(coin.title === action.payload.title) {
                  coin = {
                      ...coin,
                      currentValue: action.payload.currentValue,
                      changeRate: action.payload.changeRate,
                      changeStatus: action.payload.changeStatus
                    }
                }
                return coin;
            });

        case 'updateMultiCoin':
                return state.map((coin) => {
                    const indx = action.payload.findIndex((item) => item.title === coin.title);
                    if(indx > -1) {
                      coin = {
                          ...coin,
                          currentValue: action.payload[indx].currentValue,
                          changeRate: action.payload[indx].changeRate,
                          changeStatus: action.payload[indx].changeStatus
                        }
                    }
                    return coin;
                });
    
        default:
            return state;
    }
}
