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
// ~modal time~ //
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// // // // // //
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 700,
  width: 600,
  bgcolor: '#000000',
  // boxShadow: 24,
  p: 4,
  color: 'white',
  outline: 0,
};
// 

export default function Routes() {
  // 
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // 

  return (
    <BrowserRouter>
    <div className="AppContainer" style={{ filter: open ? "blur(2px) opacity(33%)" : "none" }}>
      {/*  */}
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </>
      {/*  */}
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
