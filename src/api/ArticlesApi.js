import Fetch from "./Fetch.js";

class ArticlesApi{
    static async getArticles(){
        return await Fetch.get("/api/v1/articles", {offset: 0, limit: 200, is_only_my: true});
    }
}

export default ArticlesApi;