import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ArtStore from './ArtStore';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
    <ArtStore />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
