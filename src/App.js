import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./views/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Toolbar from "@material-ui/core/Toolbar";
import UserInfo from "./views/UserInfo";

function App() {
    const [drawer, setDrawerOpen] = React.useState(false)
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#2f3136'
            },
            secondary: {
                main: '#fff'
            },
            type: 'dark'
        }
    })

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Header setDrawer={setDrawerOpen} drawer={drawer}/>
            <Sidebar open={drawer} setOpen={setDrawerOpen}/>
            <Toolbar style={{marginBottom: 20}}/>
            <Switch>
                <Route exact path="/" component={props => <Home {...props}/>}/>
                <Route path="/user/:id" component={props => <UserInfo {...props}/>}/>
            </Switch>
        </MuiThemeProvider>
    );
}

export default App;