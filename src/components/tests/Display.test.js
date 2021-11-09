import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';

const testShow = {
    name: "deuce bigalow",
    summary: "deuce goes to town",
    seasons: [
        {
            name: "deuces wild",
            id: 1,
            episodes: []
        },
        {
            name: "the big deuce",
            id: 2,
            episodes: []
        }
    ],

}

test('Display component renders without errors', ()=>{
    render(<Display/>)
}); 

test('when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data', ()=>{
    const mockHandleClick = jest.fn();
    const mockHandleSelect = jest.fn();
    
    render(<Display show={testShow} handleSelect={mockHandleSelect} handleClick={mockHandleClick}/>)
}); 

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.