import React, {Component} from 'react';
import TasksList from './components/TasksList.js';
import './App.css';
import InputForm from "./components/InputForm";
import image from './assets/ic-remove.png';


class App extends Component {
    state = {
        inputText: [
            "buy Milk",
            "do Home Work",
            "Walk with a dog"
        ]
    };
    beforeRenderText;
    image = image;

    keepNewText = (event) => {
        this.beforeRenderText = event.target.value;
    };

    addNewText = () => {
        if (this.beforeRenderText) {
            const copy = this.state.inputText;
            let newText = this.beforeRenderText;
            copy.push(newText);
            this.setState({copy});
            console.log(this.state.inputText);
        }
    };

    delete(event) {
        const id = event.target.id;
        const copy = this.state.inputText;
        copy.splice(id, 1);
        this.setState({copy});
        console.log(event.target);
    }

    render() {
        return (
            <div className="App grid-container">
                <InputForm onChange={(event) => {
                    this.keepNewText(event)
                }} onClick={this.addNewText}/>
                <div className="list-block">
                    {this.state.inputText.map((text, key) => {
                        return <TasksList image={this.image} key={key} id={key} text={text} onClick={(event) => {
                            this.delete(event)
                        }} check={(event) => {
                            if (event.currentTarget.parentNode.parentNode.className === 'task-text') {
                                event.currentTarget.parentNode.parentNode.className = 'task-text green';
                            } else {
                                event.currentTarget.parentNode.parentNode.className = 'task-text';
                            }
                        }}/>
                    })}

                </div>
            </div>
        )
    }
}

export default App;
