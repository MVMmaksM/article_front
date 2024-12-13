import {get} from "../api/fetch";
import { getArticles } from "../store/articleReducer.js";

export const fetchArticles = async (dispatch) => {   
    const api_address = process.env.ARTICLE_API_ADDRESS;

    const responceData = await get("http://localhost:5000/api/v1/articles?offset=0&limit=200&is_only_my=true");
    dispatch(getArticles(responceData));             
}