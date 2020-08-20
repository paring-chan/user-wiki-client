import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import * as Icons from '@material-ui/icons'

const Sidebar = ({open, setOpen}) => {
    return (
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
            <List>
                <ListItem target="_blank" component="a" href="https://discord.gg/yMX7FdM" button>
                    <ListItemIcon>
                        <Icons.Error/>
                    </ListItemIcon>
                    <ListItemText primary="유저위키 디스코드"/>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;