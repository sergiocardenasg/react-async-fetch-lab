// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        peopleInSpace: []
    }
    
    componentDidMount () {
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(data => this.setState({
            peopleInSpace: data.people
        }))
    }
    
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => <h2>{person.name}</h2>)}
            </div>
        )
    }
}
