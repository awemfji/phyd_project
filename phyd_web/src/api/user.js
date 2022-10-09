import request from '@/utils/request'

export default {
    add(user) {
        return request({
            url: '/user',
            method: 'post',
            data: user
        })
    }
}