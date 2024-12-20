import { getArticles } from "../store/articleReducer.js";
import ArticlesApi from "../api/ArticlesApi.js";

export const getArticlesAction = async (dispatch) => {   
    const responceData = await ArticlesApi.getArticles();
    dispatch(getArticles(responceData));             
}