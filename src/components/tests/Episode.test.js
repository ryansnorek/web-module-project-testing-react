import React from 'react';
import { render } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "a specific summary statement",
    runtime: 1
}

const testEpisodeWithoutImage = {
    id:1,
    name: "",
    image: null,
    season: 1,
    number: 1,
    summary: "a specific summary statement",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode/>);
});

test("renders the summury test passed as prop", ()=>{
    const { queryByText } = render(<Episode episode={testEpisode}/>);
    const summary = queryByText("a specific summary statement");
    expect(summary).not.toBeNull();
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
});

test("renders default image when image is not defined", ()=>{
    const { getByAltText } = render(<Episode episode={testEpisodeWithoutImage}/>);
    const alt = getByAltText("./stranger_things.png");
    expect(alt).toBeInTheDocument();
})