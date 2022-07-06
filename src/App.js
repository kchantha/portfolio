import React,{ Component } from 'react';
import Projects from './Projects';

// class RegularClass{}
// class ComponentClass extends Component{}

// const regularClassInsance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInsance',regularClassInsance);
// console.log('componentClassInstance',componentClassInstance);


class App extends Component {
    state={displayBio: false}; //declare state

    toggleDisplayBio=() =>{ //declare method
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <p> My name is Jhon</p>
                <p>I'm looking for someone</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <h1>I live in Cambodia</h1>
                            <p> My favorite</p>
                            <p>Bside coding</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : 
                    <div>
                        <button onClick={this.toggleDisplayBio}>Show More</button>
                    </div>
                }
                <hr/>
                <Projects/>
            </div>
            
            
        )
        
    }
}

export default App;