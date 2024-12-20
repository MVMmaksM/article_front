import { Routes, Route } from "react-router-dom";
import ArticlesList from "../articles/components/ArticlesList.jsx";
import ArticleDetail from "../articles/components/ArticleDetail.jsx"
import CreateArticle from "../articles/components/CreateArticle.jsx";

const IndexArticle = ()=>{
    return(<Routes>
                <Route path="/" element={<ArticlesList />}/>    
                <Route path="/:article_id" element={<ArticleDetail />}/>
                <Route path="/create" element={<CreateArticle />}/>                  
           </Routes>);
}

export default IndexArticle;