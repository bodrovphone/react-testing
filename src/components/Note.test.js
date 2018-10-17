import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Note from './Note';

const props = {note: {text: 'test note'}};

configure({ adapter: new Adapter() })

describe('Note', () => {
    let note = mount(<Note {...props} />); 

    it('renders the note text', () => {
        expect(note.find('p').text()).toEqual(props.note.text);
    });
});