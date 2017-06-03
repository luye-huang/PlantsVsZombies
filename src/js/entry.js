/**
 * Created by luye on 19/05/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Todo from './todo';
import { Provider } from 'mobx-react';
import store from './store/store';
import Lawn from './components/lawn';
// http://www.tuicool.com/articles/yYnmi26
const routes = (
  <Route component={Entry}>
   
    {/*<Route path="/new" component={New}/>*/}
    
  </Route>
);
export default class Entry extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Provider  {...store}>
        <div>
          <Lawn/>
        </div>
        

      </Provider>
    );
  }
}

ReactDOM.render(<Entry/>, document.getElementById('mainContainer'));