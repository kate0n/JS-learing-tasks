import React, {Component} from 'react';

import './SortingGoods.css';

export class SortingGoodsContainer extends Component{

    state = {
        tabs: [
            { active: true, name: 'по возрастанию' },
            { active: false, name: 'по рейтингу' },
            { active: false, name: 'по цене'  },
            { active: false, name: 'по наличию'},
        ]
    }

    togglTab(tabIndex) {
        let tabs = this.state.tabs
        tabs[tabIndex].active = true;
        tabs.map((tab, index) => {
          if (index !== tabIndex) {
              tab.active = false
            }
        });
        this.setState( tabs )
      }

    render() {
        return (
            <div>
            <div> {this.props.title} </div> 

                {this.state.tabs.map((tab, index) => 

                <button
                key={index}
                className={(this.props.baseClass) + (tab.active ? this.props.activeClass : '')}
                onClick={ () => this.togglTab(index) }>

                {tab.name}
                </button>
                )}
            </div>
        )
    }
}

export default SortingGoodsContainer;