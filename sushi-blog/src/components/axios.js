import axios from 'axios';

exports const Request = (method, url, head, data) => {
    return({
        method: method,
        url: 'asd' + url,
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