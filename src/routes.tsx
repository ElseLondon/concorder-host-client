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
import OnboardingModalStepper from "./components/OnboardingModalStepper";


export default function Routes() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <BrowserRouter>
      <div className="AppContainer" style={{ filter: open ? "blur(2px) opacity(33%)" : "none" }}>
        <OnboardingModalStepper open={open} handleClose={handleClose}/>

        <Route render={(props)=>(
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
      </div>
    </BrowserRouter>
  )
}
