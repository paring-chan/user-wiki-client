import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import * as Icons from '@material-ui/icons'

const Header = ({setDrawer, drawer}) => {
    return (
        <AppBar>
            <Toolbar style={{paddingRight: 10, paddingLeft: 10}}>
                <Typography color="inherit" to="/" variant="h6" component={Link} style={{textDecoration: 'none'}}>
                    UserWiki
                </Typography>
                <div style={{flexGrow: '1'}}/>
                <IconButton color="inherit" style={{marginRight: 10}} onClick={() => {
                        setDrawer(!drawer)
                }}>
                    <Icons.Menu/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;