import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work



const title = React.createElement('h1', {}, 'An Awesome Person')
const tagline = React.createElement('p', {}, 'Who is learning React')

const interest_1 = React.createElement('li', {}, 'JavaScript')
const interest_2 = React.createElement('li', {}, 'React')
const interest_3 = React.createElement('li', {}, 'Movies')
const interest_4 = React.createElement('li', {}, 'Ice cream')

const interests = React.createElement('ul', {className: 'my-interests'}, [interest_1, interest_2, interest_3, interest_4])

const meInReact = React.createElement('div', {className: 'me'}, [title, tagline, interests])

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
