import * as apiRequester from './apiRequester'

export async function getTweets(account, count) {
    const request = `http://localhost:7890/1.1/statuses/user_timeline.json?count=${count}&screen_name=${account}`
    const response = await apiRequester.send(request)
    return response ? response.data : []
}

export async function getRetweets(id) {
    const request = `http://localhost:7890/1.1/statuses/retweets/${id}`
    const response = await apiRequester.send(request)

    return response ? response.data : []
}

export function getTweetLink(userId, id) {
    return `https://twitter.com/${userId}/status/${id}`
}