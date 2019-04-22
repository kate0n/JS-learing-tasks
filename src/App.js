import React, { Component, Fragment } from 'react';
import Rendering from './tasks/Rendering';
import Attributes from './tasks/Attributes';

class App extends Component {
  render() {
    return (
        <Fragment>
        <Rendering />
        <Attributes />
        </Fragment>
    );
  }
}

export default App;
