import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './asyncAction/customers';
import Button from './components/button.js';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './components/Header.js';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state=> state.cashReducer.cash);
  const customers = useSelector(state=> state.customersReducer.customers);

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

  function About(){
    return <h2>О сайте</h2>;
  }
  function NotFound(){
      return <h2>Ресурс не найден</h2>;
  }
      
  function Main(){
      return (<h2>Test</h2>);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>  
          <Route path="articles" element={<Main/>}/>
        </Route>      
      </Routes> 
    </BrowserRouter>
         
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
