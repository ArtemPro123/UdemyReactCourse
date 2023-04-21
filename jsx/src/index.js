//5 Step Process
//Step 1: import React and ReactDOM libraries
import React from 'react';
import  ReactDOM  from 'react-dom/client'; // knows how to integrate components with browser
import App, {message} from './App';
//Step 2: Get a reference to the div with ID root
const el = document.getElementById('root');
//Step 3: Tell React to take control of that element
const root = ReactDOM.createRoot(el);
//Step 5: SHow the component on the screen
root.render(<App />);