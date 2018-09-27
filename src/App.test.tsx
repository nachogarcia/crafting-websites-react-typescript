import * as React from 'react'
import {shallow, ShallowWrapper} from "enzyme";
import App from './App'
import Phrase from './components/Phrase'
import randomPhrases from './tests/fixtures/randomPhrases'
import {phraseService} from "./infrastructure/Factory";

describe('App', () => {
    let wrapper: ShallowWrapper<App>;

    beforeEach(() => {
        phraseService.getRandomPhrases = jest.fn(() => randomPhrases);
        wrapper = shallow(<App />);
    });

    it('gets 5 random phrases on creation', () => {
        expect(phraseService.getRandomPhrases).toHaveBeenCalledWith(5);
    });

    it('shows phrases', () => {
        const phraseComponents = wrapper.find(Phrase);

        randomPhrases.forEach((phrase, index) => {
            const phraseComponent = phraseComponents.at(index);
            expect(phraseComponent.prop('text')).toEqual(phrase.text);
        });
    });
});