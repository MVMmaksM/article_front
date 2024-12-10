import { addManyCustomersAction } from "../store/customerReducer";
import {get} from "../api/fetch";

export const fetchCustomers = async (dispatch) => {    

    const responceData = await get('http://localhost:5000/api/v1/articles?offset=0&limit=200');
    dispatch(addManyCustomersAction(responceData));             
}