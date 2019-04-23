import React, { Component, Fragment } from 'react';
import Rendering from './tasks/Rendering';
import Attributes from './tasks/Attributes';
import OnCss from './tasks/OnCss';
import Condition from './tasks/Condition';
import Cycles from './tasks/Cycles';
import Methods from './tasks/Methods';
import States from './tasks/States';



class App extends Component {
  render() {
    return (
        <Fragment>
        <Rendering />
        <Attributes />
        <OnCss />
        <Condition />
        <Cycles />
        <Methods />
        <States />
        </Fragment>
    );
  }
}

export default App;
