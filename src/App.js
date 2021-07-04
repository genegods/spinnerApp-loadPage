import React from "react";
import "./App.css";
import TodoApp from "./components/todo/TodoApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";



const App = () => {
  return (  
    
<Provider store={store}>
      <React.Fragment> 
        <TodoApp/>
      </React.Fragment>
</Provider>

  );
};

export default App;
