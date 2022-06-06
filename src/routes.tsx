import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import JukeBox from "./pages/JukeBox";
import Users from "./pages/Users";
import StatsAndInsights from "./pages/StatsAndInsights";
import NowPlaying from "./pages/NowPlaying";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import LogOut from "./pages/LogOut";
import Settings from "./pages/Settings";

function Routes() {
  return (
    <BrowserRouter>
      <Route render={(props: any)=>( //fix any
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={NowPlaying}/>
            <Route path="/nowPlaying" exact component={NowPlaying}/>
            <Route path="/jukeBox" component={JukeBox}/>
            <Route path="/users" component={Users}/>
            <Route path="/statsAndInsights" component={StatsAndInsights}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/logOut" component={LogOut}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      )}/>
    </BrowserRouter>
  )
}

export default Routes;
