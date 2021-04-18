import React from 'react';
import ListItem from './ListItem';
import {Link, } from 'react-router-dom'


class UlComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: []
        }
        console.log(props);
    }
    onClickHandler = (id) => {
        <Link to='/details/:id' />

    }
    componentDidMount() {
        return fetch('http://localhost:3004/matches')
            .then(res => res.json())
            .then(matches => {
                this.setState({ matches })

            });

    }

    render() {

        return (

            this.state.matches.map(x =>
                <ListItem
                    onClick = {()=>this.onClickHandler}
                    key={x.id}
                    match={x.match}
                    prediction={x.prediction}
                    id = {x.id}
                >
                </ListItem>)

        );
    }

}

export default UlComponent;