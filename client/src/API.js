import axios from 'axios';

export function getAllIdeas(cb) {
    axios.get(process.env.REACT_APP_API + "/api/ideas").then(resp => {
        cb(resp.data);
    });
}