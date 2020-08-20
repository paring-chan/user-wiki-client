import React, {Component} from 'react';
import {CardContent, Container, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Axios from "axios";
import InviteLinkGenerator from "../components/bot/InviteLinkGenerator";

class UserInfo extends Component {
    ref = React.createRef()
    state = {
        loading: true,
        user: undefined
    }

    status = {
        online: '온라인',
        idle: '자리비움',
        dnd: '다른 용무중',
        offline: '오프라인'
    }

    async componentDidMount() {
        const data = (await Axios.get('/api/user/' + this.props.match.params.id)).data
        if (data.status === false) {
            this.setState({user: undefined})
        } else {
            this.setState({user: data})
        }
        this.setState({loading: false})
    }

    render() {
        return (
            <div>
                <Container>
                    {
                        this.state.loading ?
                            'Loading...' :
                            this.state.user ?
                                <>
                                    <Grid container justify="center" spacing={1}>
                                        <Grid item xs={2}>
                                            <img width="100%" src={this.state.user.img} alt="profile"/>
                                        </Grid>
                                        <Grid item xs={10} md={6}>
                                            <Card>
                                                <CardActionArea>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                            {this.state.user.name}{this.state.user.isbot ? '[봇]' : null}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            ID: {this.state.user.id}<br/>
                                                            가입일: {this.state.user.date}<br/>
                                                            상태: {this.status[this.state.user.status]}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    {
                                        this.state.user.isbot &&
                                        <InviteLinkGenerator style={{marginTop: 10}} id={this.state.user.id}/>
                                    }
                                </>
                                : '유저가 없습니다.'
                    }
                </Container>
            </div>
        );
    }
}

export default UserInfo;