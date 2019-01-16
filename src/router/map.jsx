import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"
class RouterMap extends React.Component{
     render(){
         const {route}=this.props
         const dafaultRoute=<Route path="/" component={()=>{
             return <Redirect to="/？"></Redirect>
         }} exact key={0}></Route>
         return <Switch>
              {
                  route.map((item,index)=>{
                      const Comp=item.component
                      return <Route path={item.path} component={(apirouter)=>{
                          return <Comp route={item.children} {...apirouter}></Comp>
                      }} key={index}></Route>
                  }).concat(dafaultRoute)
              }
         </Switch>
     }
}

export default RouterMap