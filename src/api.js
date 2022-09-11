import axios from "axios";
const baseUrl = "/api/v1";

export default new (class api {
  fecthStocks = async (key) => {
    return await axios
      .get(baseUrl + "/" + key)
      .then((res) => res.data)
      .catch((err) => {
        throw err?.response?.data;
      });
  };
})();
