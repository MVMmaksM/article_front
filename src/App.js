import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './asyncAction/customers';
import Button from './components/button.js';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './components/Header.js';
import Main from "./components/pages/Main.js";
import IndexArticle from "./components/pages/articles/IndexArticle.js";
import Authors from "./components/pages/Authors.js";
import About from "./components/pages/About.js";
import Profile from './components/pages/Profile.js';
import NotFound from './components/pages/Not found.js';
import {store} from "./store/index.js";
import { Provider } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state=> state.cashReducer.cash);
  const customers = useSelector(state=> state.customersReducer.getArticles);

  const addCash =()=>{
    dispatch(addCashAction(100));
  }

  const getCash =()=>{
    dispatch(getCashAction(50));
  }

  const addCustomer = (name)=>{
    const customer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer)=> {
    dispatch(removeCustomerAction(customer.id))
  }  

  return (
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Header/>}>  
                <Route path="/" element={<Main/>}/>
                <Route path='articles/*' element={<IndexArticle />}/>
                <Route path='authors' element={<Authors />}/>
                <Route path='about' element={<About />}/>
                <Route path='profile' element={<Profile />}/>
                <Route path='/*' element={<NotFound />}/>
              </Route>      
            </Routes> 
          </BrowserRouter>
        </Provider>         
  );
}

/*   <div>
            <Button on_click={()=>fetchCustomers(dispatch)} name_button="Test" class_button="btn btn-primary"></Button>
            <button onClick={()=> addCash()} className='btn btn-primary m-2'>Add cash</button>
            <button onClick={()=> getCash()} className='btn btn-primary m-2'>Get cash</button>
            <button onClick={()=> addCustomer(prompt())} className='btn btn-primary m-2'>Add customer</button>
            <button onClick={()=> removeCustomer()} className='btn btn-primary m-2'>Remove customer</button>
            <button onClick={()=> fetchCustomers(dispatch)} className='btn btn-primary m-2'>Get customers from api</button>
            <p type="text" className='m-2'>{cash}</p>
            {
              customers.length > 0 ?          
              <div className='m-2'>            
                {customers.map(customer=>
                  <div key={customer.article_id} onClick={()=>removeCustomer(customer)}>#{customer.article_id} Название: {customer.title} Автор: {customer.author_str}</div>
                )}
              </div>
                :
              <div>
                <p className='m-2'>Клиенты отсутстсуют!</p>
              </div>
            }
          </div>*/

export default App;
