import ReactDom from 'react-dom';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

let container = document.getElementById('app');

ReactDom.render(
    <div className="d-flex justify-content-center align-items-center">
        <h1>Cyan Finance is telling y'all hiiii!</h1>
    </div>,
        container
)