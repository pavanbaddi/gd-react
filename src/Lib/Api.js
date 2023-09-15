export function doGet(url) {
    return fetch(url).then((response) => response.json()).catch((error) => {
        console.log("doGet Error", error)
        throw error
    })
}