const stream = weex.requireModule('stream')
const baseURL = 'http://192.168.50.59:8080'
import responseHandler from './response-handler'
export default {
  get (url, params, success, fail, makeData) {
    return new Promise((resolve, reject) => {
        let paraStr = ''
        for (let p in params) {
          paraStr += '&' + paraStr
        }
        paraStr = paraStr.substring(1,paraStr.length)
        stream.fetch({
            method: 'GET',
            url: `${baseURL}${url}?${paraStr}`,
            type: 'json'
        }, responseHandler.success(success, fail, makeData, this),
            responseHandler.error(fail))
    })
  },
  post (url, params, success, fail, makeData) {
    return new Promise((resolve, reject) => {
        stream.fetch({
                method: 'POST',
                url: `${baseURL}${url}`,
                type: 'json',
                body: params,
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }, responseHandler.success(success, fail, makeData, this),
            responseHandler.error(fail))
    })
  }
}
