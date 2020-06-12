import axios from "axios";

const apiKey = '8ada4d6d451508cf8d5f3359968d1b4e'

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
export default axios.create({
  baseURL: `http://data.fixer.io/api/latest?access_key=${apiKey}`,
});
