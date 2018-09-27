import * as React from 'react';
import {shallow, ShallowWrapper} from "enzyme";
import PhraseComponent from './Phrase'

const text = 'some joke'

describe('Phrase', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<PhraseComponent text={text}/>)
    });

    it('displays joke', () => {
        expect(wrapper.contains(text)).toBe(true);
    });

    it('has correct structure', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});