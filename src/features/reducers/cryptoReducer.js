/* {
    icon: '',
    title: '',
    abbreviatedTitle: '',
    currentValue: 0,
    changeValue: 0,
    changeRate: 0, //(%)
    weeklySimpleChart: ''
}*/

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
        /*case value:
            
            break;*/
    
        default:
            return state;
    }
}
