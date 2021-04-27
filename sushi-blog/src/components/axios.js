import axios from 'axios';

const baseURL = 'http://52.231.8.161:8081/sushi';

export const Request = (method, url, head, data) => {
    return axios({
        method: method,
        url: baseURL + url,
        headers: head,
        data: data,
    }).then((e)=>{
        console.log(e);
        return e.data;
    }).catch((err)=>{
        console.log(err);
        return err;
    })
}