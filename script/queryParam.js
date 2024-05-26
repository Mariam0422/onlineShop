const setQueryParam = (key, value) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    urlParams.set(key, value)

    return urlParams
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`)
}


const getQueryParam = key => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const paramValue = urlParams.get(key)
    return paramValue
}

export {
    setQueryParam,
    getQueryParam
}