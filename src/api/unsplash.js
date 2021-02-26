import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorisation: "Client-ID VOe8m0UMgCTy5IBDiViPJgbM_aMCyyaXYA0jQt0OdGg",
  },
});
