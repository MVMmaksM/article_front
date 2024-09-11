import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { addCashAction, getCashAction } from './store/cashReducer';
import { fetchCustomers } from './asyncAction/customers';

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

  return (
      <div>
        <button onClick={()=> addCash()} className='btn btn-primary m-2'>Add cash</button>
        <button onClick={()=> getCash()} className='btn btn-primary m-2'>Get cash</button>
        <button onClick={()=> addCustomer(prompt())} className='btn btn-primary m-2'>Add customer</button>
        <button onClick={()=> removeCustomer()} className='btn btn-primary m-2'>Remove customer</button>
        <button onClick={()=> dispatch(fetchCustomers())} className='btn btn-primary m-2'>Get customers from api</button>
        <p type="text" className='m-2'>{cash}</p>
        {
          customers.length > 0 ?          
          <div className='m-2'>
            {console.log(customers)}
            {customers.map(customer=>
              <div key={customer.id} onClick={()=>removeCustomer(customer)}>{customer.name}</div>
            )}
          </div>
            :
          <div>
            <p className='m-2'>Клиенты отсутстсуют!</p>
          </div>
        }
      </div>
  );
}

export default App;
