import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from "../../../../asyncAction/articles.js"
import { useEffect } from "react";

const ArticlesList = ()=>{
    const dispatch = useDispatch();
    const articles = useSelector(state=> state.articlesReducer);  

    return(<>
            <div class="min-vh-100">                
                <NavLink to="create" style={{ textDecoration: 'none'}}>
                    <button type="button" title="Создать статью" class="m-3 btn btn-outline-light">Создать</button>                    
                </NavLink>  
                <button type="button" onClick={()=> fetchArticles(dispatch)} title="Создать статью" class="m-3 btn btn-outline-light">Получить список</button>              
                {         
                    articles.articles[0]?.length > 0 ?       
                    <div class="container">         
                        <div className='col-12 col-lg-12 me-lg-12 mb-2 justify-content-center mb-md-0'>                                       
                            {articles.articles[0].map(article=>                                                    
                                <div class="m-3 p-3 border border-1 border-secondary rounded-3" key={article.article_id}> 
                                    <p class="text-left">{article.created_on_tz}</p>   
                                    <p class="text-center"> 
                                        <div class="p-2">
                                            <NavLink to={`${article.article_id}`} style={{ textDecoration: 'none'}} className="text-white">
                                                {article.title}
                                            </NavLink>
                                        </div>
                                        <div>
                                            {article.author_str}
                                        </div>
                                    </p>
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