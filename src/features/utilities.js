
export function updateCoins(coins, dispatch) {
    dispatch({type: 'updateMultiCoin', payload: coins});
}