import axios from "axios";

const KEY = "AIzaSyBddSIjByjoIkWe42W03v80pXofdW7SxOo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
