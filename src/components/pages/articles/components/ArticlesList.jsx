import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getArticlesAction } from "../../../../asyncAction/articles.js"
import { useEffect } from "react";
import Button from "../../../Button.jsx"

const ArticlesList = ()=>{
    const dispatch = useDispatch();
    const articles = useSelector(state=> state.articlesReducer); 
    console.log(articles) 
    useEffect(()=>{
        getArticlesAction(dispatch);
    }, []);   

    return(<>
            <div class="min-vh-100">                
                <NavLink to="create" style={{ textDecoration: 'none'}}>
                        <Button name="Создать" title="создать статью" class="m-3 btn btn-outline-light"/>        
                </NavLink>      
                {         
                    articles.articles[0]?.length > 0 ?       
                    <div class="container">         
                        <div class='col-12 col-lg-12 me-lg-12 mb-2 justify-content-center mb-md-0'>                                       
                            {articles.articles[0].map(article=>                                                    
                                <div class="m-3 p-3 border border-1 border-secondary rounded-3" key={article.article_id}> 
                                    <div class="row p-3">
                                        <div class="col-3">
                                            <p class="text-left text-secondary mb-1 fs-6">
                                                <span title="автор">
                                                    <i class="bi bi-person-circle"></i> {article.author_str}
                                                </span>
                                            </p>
                                            <p class="text-left text-secondary mb-1 fs-6">
                                                <span title="дата создания">
                                                    <i class="bi bi-calendar"></i> {new Date(article.created_on_tz).toLocaleDateString()}  
                                                </span>                                                
                                            </p>                                                                                                               
                                        </div> 
                                        <div class="col-6">
                                            <p class="text-center"> 
                                                    <div class="p-2">
                                                        <NavLink to={`${article.article_id}`} style={{ textDecoration: 'none'}} className="text-white">
                                                            {article.title}
                                                        </NavLink>
                                                    </div>                                       
                                            </p>   
                                        </div>                                                                                                           
                                    </div> 
                                    <div class="row pl-3 pt-3 pr-3 pb-0">
                                        <div class="col-3">
                                                <span title="количество просмотров" class="text-left text-secondary p-3 fs-6">
                                                    <i class="bi bi-eye-fill"></i> {article.count_view}
                                                </span>  
                                                <span title="количество комментариев" class="text-left inline text-secondary fs-6">
                                                    <i class="bi bi-chat-fill"></i> {article.count_comments}
                                                </span>                                             
                                        </div>                                        
                                    </div>                                 
                                </div>)}                           
                        </div>                       
                    </div>
                    :
                    <div></div>
                }
            </div>
            <div class="m-3 p-3"></div>
          </>);
}

export default ArticlesList;