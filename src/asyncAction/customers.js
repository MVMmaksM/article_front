import { addManyCustomersAction } from "../store/customerReducer";
import {get} from "../api/fetch";

export const fetchCustomers = async (dispatch) => {    

    const responceData = await get('https://jsonplaceholder.typicode.com/users');
    dispatch(addManyCustomersAction(responceData));             
}