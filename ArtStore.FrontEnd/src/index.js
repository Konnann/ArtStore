import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArtStore from './ArtStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ArtStore />, document.getElementById('root'));
registerServiceWorker();
