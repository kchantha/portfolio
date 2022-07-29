import React,{Component} from "react";

class Jokes extends Component{
    state = {joke: {}};

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com11/posts')
        .then(response => response.json())
        .then(json=> this.setState({joke: json}))
        .catch(error => alert(error.message));

    }

    render(){
        const {setup,punchline} = this.state.joke;
        return(
            <dev>
                <h2>Highlighted Joke</h2>
                <p>{setup}<em>{punchline}</em></p>
            </dev>
        )
    }
}

export default Jokes; 