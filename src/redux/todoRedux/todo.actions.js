import { LOAD_DATA_REQUEST,
         LOAD_DATA_SUCCESS,
         LOAD_DATA_FAILURE } from "./todo.actionTypes";
import Axios from "axios";


export const loadData = () =>{
    return async (dispatch) =>{
        try{
            dispatch({type: LOAD_DATA_REQUEST})
            let URL = 'https://jsonplaceholder.typicode.com/todos'
            let response = await Axios.get(URL)
            dispatch({type: LOAD_DATA_SUCCESS, payload: response.data})

        }
        catch(error){
            dispatch({type: LOAD_DATA_FAILURE, payload: error})

        }
    }
}






