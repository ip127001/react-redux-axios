import axios from "axios";

export const getData = (res) => {
    console.log('hi');
    return {
        type: 'GET_DATA',
        response: res
    }
}

export const receiveTournamentData = () => {
    return dispatch => {
        let config = {
            headers: {
                'Postman-Token': 'd9327ed6-6d60-434d-960b-68ffeab84e61,e7c53183-98a4-4a0a-91ef-7d1dbcaf8493',
                'X-COSMOS-AUTH': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTM4NTcwNTg2OTkxIiwicGxhdGZvcm1Db2RlIjoiMSIsInBsYXRmb3JtVXNlcklkIjoiNzY1NjExOTgyMjM4NjAyMjgiLCJleHAiOjE1NjE3MjU5NzF9.hxH-gpgxfr7zk4AFvkdZ2UzhoxpXSUC8LJ7t1NUf1nxwrSiK-RN5jSwGuWlvfjLW171ZelviEaWC54YUjdAaHw'
            }
        }
        axios.get('https://app.tryhard.gg/tournament/open', config)
        .then(res => {
            console.log(res);
            dispatch(getData(res.data.response));
        })
    }
}