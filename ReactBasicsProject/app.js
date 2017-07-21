import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Scoreboard from './components/Scoreboard';

import './app.css';

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));