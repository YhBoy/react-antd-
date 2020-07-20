import React from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { adminRoutes } from './routes/index'
import {  Route,Switch,Redirect } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Frame from './components/frame/index'

function App() {
  return (
    <Frame>
        <Switch>
            {
              adminRoutes.map((route)=>{
                return <Route 
                        exact = {route.exact} 
                        key={route.path} 
                        path={route.path} 
                        component={route.component}
                        //  render={
                        //     (routeProps=>{
                        //         return <route.component {...routeProps} />
                        //     })
                        //   }  
                       />
              })
            }

            <Redirect to={adminRoutes[0].path} from='/admin'   />
            <Redirect to='/404' component = { PageNotFound } />
        </Switch>
    </Frame>
  );
}

export default App;
