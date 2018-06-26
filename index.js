const axios = require("axios");
let http = 'https://jsonplaceholder.typicode.com/posts';

console.log(require('./data')[0].http);

axios.get(http)
.then(response => {
    console.log(response.status);
    console.log(response.data[0].userId);
    require('./check')(response);
}).catch(e => console.warn(e));

let body = {
    userid: 12,
    name: "nicolas"
};

axios.post('https://jsonplaceholder.typicode.com/posts', body).then(response => {
    console.log(response.status);
}).catch(e => console.warn(e));
