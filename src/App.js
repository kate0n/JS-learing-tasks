import React, {Component, Fragment} from 'react';
import Rendering from './tasks/Rendering';
import Attributes from './tasks/Attributes';
import OnCss from './tasks/OnCss';
import Condition from './tasks/Condition';
// import Cycles from './tasks/Cycles';
import Methods from './tasks/Methods';
import States from './tasks/States';
import Form from './tasks/Form';
import CyclesV1 from './tasks/CyclesV1';
import CyclesV2 from './tasks/CyclesV2';
import CyclesV3_1 from './tasks/CyclesV3_1';
import CyclesV3_2 from "./tasks/CyclesV3_2";
import CyclesV3_3 from "./tasks/CyclesV3_3";
import CyclesV3_4 from "./tasks/CyclesV3_4";
import Inputs from "./tasks/Inputs";
import Input2 from "./tasks/Input2";
import Input3 from "./tasks/Input3";
import Input4 from "./tasks/Input4";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Rendering/>
                <Attributes/>
                <OnCss/>
                <Condition/>
                {/*<Cycles />*/}
                <Methods/>
                <States/>
                <Form/>
                <CyclesV1/>
                <CyclesV2/>
                <CyclesV3_1/>
                <CyclesV3_2/>
                <CyclesV3_3/>
                <CyclesV3_4/>
                <Inputs/>
                <Input2/>
                <Input3/>
                <Input4/>
            </Fragment>
        );
    }
}

export default App;
