import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import JukeBox from './pages/JukeBox'
import Users from './pages/Users'
import StatsAndInsights from './pages/StatsAndInsights'
import NowPlaying from './pages/NowPlaying'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import LogOut from './pages/LogOut'
import Settings from './pages/Settings'
import OnboardingModalStepper from './components/OnboardingModalStepper'
import LogIn from './pages/LogIn'

export default function Routes() {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  const openOnBoardingModal = () => {
    if (window.location.href.includes('logIn')) return false
    return open
  }

  return (
    <BrowserRouter>
      <div style={{ filter: openOnBoardingModal() ? 'blur(2px) opacity(33%)' : 'none' }}>
        <OnboardingModalStepper open={openOnBoardingModal()} handleClose={handleClose}/>
        <Route
          render={(props) => (
            <Layout {...props}>
              <Switch>
                <Route path="/" exact component={NowPlaying} />
                <Route path="/logIn" component={LogIn} />
                <Route path="/nowPlaying" exact component={NowPlaying} />
                <Route path="/jukeBox" component={JukeBox} />
                <Route path="/users" component={Users} />
                <Route path="/statsAndInsights" component={StatsAndInsights} />
                <Route path="/settings" component={Settings} />
                <Route path="/logOut" component={LogOut} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          )}
        />
      </div>
    </BrowserRouter>
  )
}
