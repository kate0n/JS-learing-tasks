import React, {Component, Fragment} from 'react';

import CyclesV3_4 from './tasks/CyclesV3_4';
import CyclesV2 from './tasks/CyclesV2';
import Form from './tasks/Form';
import Inputs from "./tasks/Inputs";
import Input2 from "./tasks/Input2";
import Input3 from "./tasks/Input3";
import Input4 from "./tasks/Input4";
import UpdateArrById from "./tasks/BasicJs/UpdateArrById";
import SubtractArrays from "./tasks/BasicJs/SubtractArrays";
import ForEach from "./tasks/Arrays/ForEach";
import Map from "./tasks/Arrays/Map";
import Filter from "./tasks/Arrays/Filter";
import Find from "./tasks/Arrays/Find";
import ArrowFunc from "./tasks/ArrowFunc";
import OnSubmit from "./tasks/OnSubmit";
import Table from "./tasks/Table";
import Arr from "./tasks/Arr";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Form/>
                <Inputs/>
                <Input2/>
                <Input3/>
                <Input4/>
                <UpdateArrById/>
                <SubtractArrays/>

                <ForEach/>
                <Map/>
                <Filter/>
                <Find/>

                <ArrowFunc/>
                <OnSubmit/>
                <CyclesV3_4/>
                <CyclesV2/>
                <Table/>
                <Arr/>
            </Fragment>
        );
    }
}

export default App;
