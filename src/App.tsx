import * as React from 'react';
import './App.css';
import {phraseService} from "./infrastructure/Factory";
import Phrase from "./domain/Phrase";
import PhraseComponent from "./components/Phrase";

interface State {
    phrases: Array<Phrase>
}

export default class App extends React.Component<any, State> {
    state: Readonly<State> = {
        phrases: []
    };

    async componentDidMount() {
        const phrases = await phraseService.getRandomPhrases(5);
        this.setState({phrases});
    }

    public render() {
        const phrases = this.state.phrases.map(phrase => <PhraseComponent key={phrase.id} text={phrase.text}/>)

        return (
            <div className="App">
                <h1>Chuck Norris phrases</h1>
                <div className='phraseContainer'>
                    {phrases}
                </div>
            </div>
        )
    }
}
