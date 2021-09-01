import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET', header = {}) {
  return new Promise((resolve, reject) => {
    let promise;

    if (type === 'GET') {
      promise = axios.get(url, {
        params: data,
      });
    } else {
      promise = axios.post(url, data);
    }

    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
        // message.error("Request Error: " + error.message);
        console.log(`Request Error: ${error.message}`);
      });
  });
}
