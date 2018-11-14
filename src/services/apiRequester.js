import axios from 'axios'

export async function send(url) {
    const info = {
        method: 'GET',
        url
    }
    try {
        return await axios(info)
    } catch (err) {
        console.log(info)
        console.log(err)
    }
}
