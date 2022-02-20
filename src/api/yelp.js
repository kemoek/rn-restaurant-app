import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer B6l6hhKj1X5NBgoEp6XjCsIEr_O7Y3LXG3FBsdKiR-UaG4Kto1wNvdCLFeiDUZiq8Mj5RlfqclR7PCdxmY0Flse7hTnvRZhakayRVWO9HFj8U7fURrMYgWvZTtcDYnYx"
    }
});

//yelp.get('/search')