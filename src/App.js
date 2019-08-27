import React, {Component, Fragment} from 'react';

import CyclesV3_4 from './tasks/Others/CyclesV3_4';
import CyclesV2 from './tasks/Others/CyclesV2';
import Form from './tasks/Form&Inputs/Form';
import Inputs from "./tasks/Form&Inputs/Inputs";
import Input2 from "./tasks/Form&Inputs/Input2";
import Input3 from "./tasks/Form&Inputs/Input3";
import Input4 from "./tasks/Form&Inputs/Input4";
import UpdateArrById from "./tasks/BasicJs/UpdateArrById";
import SubtractArrays from "./tasks/BasicJs/SubtractArrays";
import ForEach from "./tasks/Arrays/ForEach";
import Map from "./tasks/Arrays/Map";
import Filter from "./tasks/Arrays/Filter";
import Find from "./tasks/Arrays/Find";
import ArrowFunc from "./tasks/Others/ArrowFunc";
import OnSubmit from "./tasks/Form&Inputs/OnSubmit";
import Table from "./tasks/Others/Table";
import Arr from "./tasks/Others/Arr";
import Textarea from "./tasks/Form&Inputs/Textarea";
import Checkbox1 from "./tasks/Form&Inputs/Checkbox1";
import Checkbox2 from "./tasks/Form&Inputs/Checkbox2";
import Select from "./tasks/Form&Inputs/Select";
import Select2 from "./tasks/Form&Inputs/Select2";
import Select3 from "./tasks/Form&Inputs/Select3";
import Radio from "./tasks/Form&Inputs/Radio";
import Textarea2 from "./tasks/Form&Inputs/Textarea2";
import SelectDisplayDiv from "./tasks/Form&Inputs/SelectDisplayDiv";
import AddOptionFromInput from "./tasks/Form&Inputs/AddOptionFromInput";
import MakeInputDisabledWithCheckbox from "./tasks/Form&Inputs/MakeInputDisabledWithCheckbox";
import DayOfTheWeek from "./tasks/Form&Inputs/DayOfTheWeek";
import SortingGoods from "./tasks/SortingGoods/SortingGoods";
import PhoneRegExp from "./tasks/PhoneRegExp";


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

                <Textarea/>
                <Checkbox1/>
                <Checkbox2/>
                <Select/>
                <Radio/>

                <Textarea2/>
                <Select2/>
                <Select3/>
                <SelectDisplayDiv/>
                <AddOptionFromInput />
                <MakeInputDisabledWithCheckbox />
                <DayOfTheWeek/>
                <SortingGoods/>
                <PhoneRegExp />

            </Fragment>
        );
    }
}

export default App;
