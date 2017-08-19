function makeRequest() {
    console.log('making a request');
    return fetch('https://api.github.com').then(response => {
            return response.json().then(json => {
                console.log('i have the json', json)
                return Promise.resolve(json);
            })
        }
    )
}

function wait() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

export default store =>  next => action => {
    if (action.type !== 'API_CALL') {
        return next(action)
    }
    return wait().then(() => makeRequest().then(response => {
        console.log('and the response is here', response)
        return store.dispatch({
            type: 'RESPONSE',
            payload: response
        });
    },
    error => {
        console.log('shit i got error', error)
    }))

}