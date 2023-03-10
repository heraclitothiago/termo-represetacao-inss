const urlData = window.location.search.substring(1).split("&")
    .map(el => {
        const [key, value] = el.split('=')
        return { [key]: decodeURIComponent(value)?.replaceAll('+', ' ') }
    })

const dataClient = Object.assign({}, ...urlData)

function setValue(element, value) {
    element.innerHTML = value
}

for (const key in dataClient) {

    const target = document.querySelectorAll(`[data-${key}]`)

    if (target) target.forEach(el => setValue(el, dataClient[key]))

}

const today = new Date()
const dataHoje = document.querySelectorAll('[data-hoje]')
dataHoje.forEach(el => setValue(el, today.toLocaleDateString()))

