import { Routes, Route } from "react-router-dom";
import ArticlesList from "../articles/components/ArticlesList.js";
import ArticleDetail from "../articles/components/ArticleDetail.js"
import CreateArticle from "../articles/components/CreateArticle.js";

const IndexArticle = ()=>{
    return(<Routes>
                <Route path="/" element={<ArticlesList />}/>    
                <Route path="/:article_id" element={<ArticleDetail />}/>
                <Route path="/create" element={<CreateArticle />}/>                  
           </Routes>);
}

export default IndexArticle;