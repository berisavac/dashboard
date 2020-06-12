import axios from "axios";

const API_KEY = "39fdf4a59e00485183c978a2ecba0cfe";

export default axios.create({
  baseURL: `http://newsapi.org/v2/top-headlines?country=rs&category=business&apiKey=${API_KEY}`,
});
