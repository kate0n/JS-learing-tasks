import React, {Component} from 'react';

class MakeInputDisabledWithCheckbox extends Component {
    state = {
        isDisabled: false,
    };

    turnIsDisabled = () => {
        this.setState({ isDisabled: !this.state.isDisabled })
    };
    
    render() {
        return (
            <div>
                <input placeholder={'placeholder'} disabled={this.state.isDisabled}/>
                <input
                    type={"checkbox"}
                    onClick={this.turnIsDisabled}
                    />
            </div>
            )
    }
}

export default MakeInputDisabledWithCheckbox;