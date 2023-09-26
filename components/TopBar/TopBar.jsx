import React from 'react';
import { Grid, AppBar, Toolbar, Typography } from '@mui/material';
import './TopBar.css';
import axios from 'axios';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: this.props.view,
            version: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.view !== this.props.view) {
            this.setState({ view: this.props.view });
            axios
                .get('http://localhost:3000/test/info')
                .then((response) => {
                    this.setState({ version: response.data.__v });
                })
                .catch((err) => console.log(err.response));
        }
    }

    render() {
        return ( <
            AppBar className = "cs142-topbar-appBar"
            position = "absolute" >
            <
            Toolbar >
            <
            Grid container direction = "row"
            justify = "space-between"
            alignItems = "center" >
            <
            Typography variant = "h5"
            color = "inherit" >
            kate deng { ' ' } <
            /Typography>{' '} <
            Typography variant = "body1" > version: { this.state.version } < /Typography> {' '} <
            Typography variant = "h5" > { this.state.view } < /Typography> {' '} <
            /Grid>{' '} { ' ' } <
            /Toolbar>{' '} { ' ' } <
            /AppBar>
        );
    }
}

export default TopBar;