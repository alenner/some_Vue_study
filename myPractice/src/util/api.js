import axios from 'axios'
const baseUrl = '/api'

const myAxios = (options) => {
    return new Promise ((resolve,reject) => {
        let method = options.method || 'GET'
        if ( method === 'GET' ) {
            axios.get(baseUrl + options.url, options.data || {}).then(res => {
                if( res.data.status === 0 ) {
                    alert('数据请求失败')
                } else {
                    resolve(res)
                }
            }).catch(error => {
                reject(error)
                alert('服务器请求错误')
            })
        } else {
            axios.post(
                {
                    url: baseUrl + options.url,
                    data: options.data || {}
                }
            ).then(res => {
                if( res.data.status === 0 ) {
                    alert('数据请求失败')
                } else {
                    resolve(res)
                }
            }).catch(error => {
                reject(error)
                alert('服务器请求错误')
            })
        }
    })
}

export default myAxios