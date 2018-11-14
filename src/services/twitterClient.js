import * as apiRequester from './apiRequester'

export async function getTweets(account, count) {
    const response = await apiRequester.send(account, count)
    return response.data
}