import React from 'react';
import ListItem from './ListItem';


class UlComponent extends React.Component {
    constructor(props) {
        super(props);

       this.state = {
           matches : []
       } 
    }

    componentDidMount(){
        return fetch('http://localhost:3004/matches')
        .then(res=>res.json())
        .then(matches => {
            this.setState({matches})
            
        });
        
    }
    render() {
        
        return (
            
            this.state.matches.map(x=>
            <ListItem
            
            key = {x.id}
            match = {x.match}
            prediction = {x.prediction}
            >               
            </ListItem>)

        );
    }

}

export default UlComponent;