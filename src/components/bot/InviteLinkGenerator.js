import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import {CardContent, Grid, Typography} from "@material-ui/core";
import {Checkbox} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class InviteLinkGenerator extends Component {
    flags = {
        CREATE_INSTANT_INVITE: 1,
        KICK_MEMBERS: 2,
        BAN_MEMBERS: 4,
        ADMINISTRATOR: 8,
        MANAGE_CHANNELS: 16,
        MANAGE_GUILD: 32,
        ADD_REACTIONS: 64,
        VIEW_AUDIT_LOG: 128,
        PRIORITY_SPEAKER: 256,
        STREAM: 512,
        VIEW_CHANNEL: 1024,
        SEND_MESSAGES: 2048,
        SEND_TTS_MESSAGES: 4096,
        MANAGE_MESSAGES: 8192,
        EMBED_LINKS: 16384,
        ATTACH_FILES: 32768,
        READ_MESSAGE_HISTORY: 65536,
        MENTION_EVERYONE: 131072,
        USE_EXTERNAL_EMOJIS: 262144,
        VIEW_GUILD_INSIGHTS: 524288,
        CONNECT: 1048576,
        SPEAK: 2097152,
        MUTE_MEMBERS: 4194304,
        DEAFEN_MEMBERS: 8388608,
        MOVE_MEMBERS: 16777216,
        USE_VAD: 33554432,
        CHANGE_NICKNAME: 67108864,
        MANAGE_NICKNAMES: 134217728,
        MANAGE_ROLES: 268435456,
        MANAGE_WEBHOOKS: 536870912,
        MANAGE_EMOJIS: 1073741824
    }

    state = {
        checks: []
    }

    render() {
        const value = this.state.checks.length ? this.state.checks.reduce((acc,cur) => acc | cur) : 0
        return (
            <Card style={this.props.style}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        봇 초대
                    </Typography>
                    <Grid container>
                        {Object.keys(this.flags).chunk(10).map((chunk, i) => (
                            <Grid key={i} item xs={6} md={4}>
                                {chunk.map((item, j) => (
                                    <React.Fragment key={j}>
                                        <FormControlLabel label={item} control={
                                            <Checkbox onChange={() => {
                                                if (this.state.checks.includes(this.flags[item])) {
                                                    this.state.checks.splice(this.state.checks.indexOf(this.flags[item]))
                                                    this.setState({checks: this.state.checks})
                                                } else {
                                                    this.state.checks.push(this.flags[item])
                                                    this.setState({check: this.state.checks})
                                                }
                                            }} checked={this.state.checks.includes(this.flags[item])}/>
                                        }/><br/>
                                    </React.Fragment>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                    퍼미션 값: {value}<br/>
                    초대 링크: <a style={{color: '#fff', textDecoration: 'none'}} target="_blank" href={`https://discord.com/api/oauth2/authorize?client_id=${this.props.id}&scope=bot&permissions=${value}`}>클릭</a>
                </CardContent>
            </Card>
        );
    }
}

export default InviteLinkGenerator;