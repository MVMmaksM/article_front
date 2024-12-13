import {get} from "../api/fetch";

export const fetchArticles = async (dispatch) => {   
    const api_address = process.env.ARTICLE_API_ADDRESS;

    const responceData = await get("http://localhost:5000/api/v1/articles?offset=0&limit=200");
    dispatch();             
}