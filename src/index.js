// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controller from './Controller';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
