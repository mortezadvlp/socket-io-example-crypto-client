
export function updateCoins(coins, dispatch) {
    /*coins.forEach(coin => {
        dispatch({type: 'updateCoin', payload: coin});
    });*/
    dispatch({type: 'updateMultiCoin', payload: coins});
}