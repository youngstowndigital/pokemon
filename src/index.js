import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
    <Provider store={store}>
        <Container>
            <App />
        </Container>
    </Provider>, 
    document.getElementById('app')
);
