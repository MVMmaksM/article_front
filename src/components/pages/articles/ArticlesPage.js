import { Routes, Route } from "react-router-dom";
import ArticlesList from "../articles/components/ArticlesList.js";
import ArticlesDetail from "../articles/ArticlesDetail.js";

const ArticlesPage = ()=>{
    return(<Routes>
                <Route path="/" element={<ArticlesList />}/>    
                <Route path="/:article_id" element={<ArticlesDetail />}/>               
           </Routes>);
}

export default ArticlesPage;