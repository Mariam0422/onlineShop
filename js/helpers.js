const withFetch = (url, option = {}) => {
    fetch(url, option)
    .then((resp) => {
        return resp.json();
    })
    .then(data => {
        return data;
    })
}
function tagCreator(tagName, parentTag, value = '') {
    const tag = document.createElement(tagName)
    tag.innerHTML = value
    const parent = document.querySelector(parentTag)
    parent.appendChild(tag)
    return tag
}
export {
    withFetch,
    tagCreator
}