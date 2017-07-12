import httpHandler from '../httpUtils/http-handler'
import uris from '../router/uris'
export default {
  submitLogin (params, success, fail) {
    let formData = ''
    for (let item in params.form) {
      formData += '&' + item + '=' + params.form[item]
    }
    formData = formData.substring(1, formData.length)
    function makeData (originalData) {
      return originalData
    }
    httpHandler.post.bind(this)(uris.api.mobileLogin, formData, success, fail, makeData)
  }
}
