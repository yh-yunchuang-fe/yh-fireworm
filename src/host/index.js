/*
 * @Date: 2019-09-09 16:19:18
 * @Author: denny
 * @LastEditors: denny
 * @LastEditTime: 2019-09-23 10:57:11
 */
export const getEnv = () => {
    let url = window.location.href
    // let envReg = /^(https?\:\/\/)?\w+\-(\w+)/
    let envReg = /^https?\:\/\/?(test\-)?.*\.com\/?(.*)\/h5/

    let regResult = url.match(envReg)

    if (!regResult) return 'development'

    if (!regResult[1]) return 'production'

    return regResult[2]
}

const getProtocal = () => {
    let url = window.location.href

    let protocalReg = /^(.*):\/\//

    let regResult = protocalReg.exec(url)

    if(!!regResult) {return regResult[1]}

    return 'http'
}

function getHostFromUrl() {
    let env = getEnv()
    let protocal = getProtocal()
    let host

    switch (env) {
    case 'production':
        host = `${protocal}://partner-api.yonghuivip.com/`
        break
    case 'testin':
        host = `${protocal}://testin-partner-api.yonghuivip.com/`
        break
    case 'qa2':
        host = `${protocal}://partner-rest-api-qa2.yonghuivip.com/`
        break
    case 'qa3':
        host = `${protocal}://partner-rest-api-qa3.yonghuivip.com/`
        break
    case 't1':
        host = `${protocal}://partner-rest-api-t1.yonghuivip.com/`
        break
    case 'stage':
        host = `${protocal}://partner-rest-api-stage.yonghuivip.com/`
        break
    case 'prelaunch':
        host = `${protocal}://partner-rest-api-pre.yonghuivip.com/`
        break
    case 'performance':
        host = `${protocal}://partner-api-qa.yonghuivip.com/`
        break
    default:
        host = `${protocal}://partner-rest-api-stage.yonghuivip.com/`
        break
    }

    return host
}

export default getHostFromUrl()
