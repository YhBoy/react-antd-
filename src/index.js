import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import List from './pages/admin/product/List'
import { HashRouter as Router,Switch, Route ,Redirect} from 'react-router-dom'
import { mainRoutes } from './routes/index'
import PageNotFound from './pages/PageNotFound'

ReactDOM.render(
  <Router>
      <Switch>
          <Route path='/admin' render = { (routeProps) => <App {...routeProps} />}></Route>
          {
            mainRoutes.map((route)=>{
                 return < Route key = {route.path}  path={route.path} component={route.component} /> 
            })
          }  
          <Redirect to='/404' component={PageNotFound }></Redirect>  
      </Switch>
  </Router>,
  document.getElementById('root')
);

