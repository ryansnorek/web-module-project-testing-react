import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

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

test('renders testShow and no selected Season without errors', ()=>{
    render(<Show show={testShow} selectedSeason={"none"} />);
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null}/>);
    const loading = screen.queryByTestId("loading-container");
    expect(loading).toBeInTheDocument();
});

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={"none"} />);
    const seasons = screen.queryAllByTestId("season-option");
    expect(seasons.length).toBe(2);
});

test('handleSelect is called when an season is selected', () => {
    const fakeHandleSelect = jest.fn();

    render(<Show show={testShow} selectedSeason={"none"} handleSelect={fakeHandleSelect} />);
    
    const select = screen.getByRole("combobox");

    // expect(fakeHandleSelect).toHaveBeenCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={testShow} selectedSeason={"none"} />);

    // Episode does not render

    rerender(<Show show={testShow} selectedSeason={testShow.seasons[0]} />)
    // Does render

});

//5. Test that when an item is selected, the handleSelect function is called. Look at your code to see how to get access to the select Dom element and userEvent reference materials to see how to trigger a selection.

//6. Test that the episode component DOES NOT render when the selectedSeason props is "none" and DOES render the episode component when the selectedSeason prop has a valid season index.