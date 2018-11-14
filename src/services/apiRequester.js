import axios from 'axios'

export async function send(account, count) {
    const info = {
        method: 'GET',
        url: `http://localhost:7890/1.1/statuses/user_timeline.json?count=${count}&screen_name=${account}`,
        //https://twitter.com/${user.id}/status/{id_str}
    }
    try {
        return await axios(info)
    } catch (err) {
        console.log(info)
        console.log(err)
    }
}
