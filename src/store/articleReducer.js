const defaultState = {
    articles: []
}

const GET_ARTICLES = "GET_ARTICLES";

export const articleReducer = (state = defaultState, action)=>{
    switch(action.type){   
      case GET_ARTICLES:
        return {...state, articles: [...state.articles, action.payload]}
      default:
        return state
    }
}

export const getArticles = (payload) => ({type: GET_ARTICLES, payload});