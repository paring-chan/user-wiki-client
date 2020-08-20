import React, {Component} from 'react';
import {Avatar, Grid, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Axios from "axios";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {withRouter} from "react-router-dom";

class Home extends Component {
    state = {
        results: [],
        open: false,
        loading: true
    }

    render() {
        return (
            <div>
                <Grid justify="center" alignItems="center" container alignContent="center" style={{paddingTop: 100}}>
                    <Grid item xs={10} md={6}>
                        <Typography variant="h4" align="center">
                            UserWiki
                        </Typography><br/>
                        <Autocomplete
                            onChange={(event, value) => {
                                this.props.history.push(`/user/${value.id}`)
                            }}
                            loadingText="로딩중..."
                            noOptionsText="검색 결과 없음"
                            onOpen={() => this.setState({open: true})}
                            onClose={() => this.setState({open: false})}
                            open={this.state.open} renderInput={params =>
                            <TextField color="secondary" onChange={e => this.update(e.target.value)} {...params} variant="outlined"
                                       label="검색어를 입력하세요"/>} options={this.state.results}
                            getOptionLabel={option => option.name} loading={this.state.loading}
                            renderOption={(option) => {
                                return (
                                    <>
                                        <ListItemAvatar>
                                            <Avatar src={option.img}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={option.name}/>
                                    </>
                                )
                            }}/>
                    </Grid>
                </Grid>
            </div>
        );
    }

    async update(val) {
        if (val === '') return
        this.setState({loading: true})
        this.setState({
            results: (await Axios.get('/api/search/' + encodeURIComponent(val))).data
        })
        this.setState({loading: false})
    }
}

export default withRouter(Home)