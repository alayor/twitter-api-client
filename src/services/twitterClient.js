import * as apiRequester from './apiRequester'

export async function getTweets(account, count) {
    return await apiRequester.send(account, count)
}