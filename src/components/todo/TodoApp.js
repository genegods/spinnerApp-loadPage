import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {loadData} from '../../redux/todoRedux/todo.actions'
import {TODO_KEY} from '../../redux/todoRedux/todo.reducers'
import SpinnerApp from '../spinner/SpinnerApp'

const TodoApp = () => {

    // initialize dispatch
    let dispatch = useDispatch()

    useEffect(() =>{
        dispatch(loadData())

    }, [])

    // view data from store
    let viewTodo = useSelector((state) =>{
        return state [TODO_KEY]

    })

    
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewTodo)}</pre> */}
           <div className='row mt-3'>
               <div className='col-md-1'></div>
               <div className='col-md-10'>
                   <div className='card text-center'>
                       <div className='card-header'>
                           <h5 className='font-weight-bold'>SPINNER APP/ LOADING PAGE WITH JSON API</h5>
                       </div>


                       <div className='card-body'>
                      {
                          viewTodo.loading === true ? <SpinnerApp/>:
                          <React.Fragment>
                                   {
                               viewTodo.data.map((item) =>{
                                   return(
                                       <div key={item.id}>
                                                       <div className='todoContainer'>
                               <div className='leftContent'>
                                   <ul>
                                       <li>{item.title}</li>
                                   </ul>
                               </div>
                               <div className='rightContent'>
                                   {
                                    item.completed === true ?
                                    <div className='form-check centered'>
                                       <input
                                       type='checkbox'
                                       className='form-check-input bigCheckbox'
                                       checked
                                       />
                                   </div>:
                                   <div className='form-check centered'>
                                   <input
                                   type='checkbox'
                                   className='form-check-input bigCheckbox'
                                   />
                               </div>
                                   }
                               </div>
                           </div>
                                       </div>
                                   )
                               })
                           } 
                          </React.Fragment>
                      }     
                           
                       </div>
                   </div>
               </div>
            </div> 
        </React.Fragment>
            
        
    )
}

export default TodoApp
