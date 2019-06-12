import React, {Component} from 'react';

class DayOfTheWeek extends Component {
    state = {
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","A ug","Sep","Oct","Nov","Dec"],
        years: [2015, 2016, 2017, 2018, 2019],
        dayOfTheWeek: 'ср'
    };

    getDay = React.createRef();
    getMonth = React.createRef();
    getYear = React.createRef();

    switchDayOfTheWeek = () => {
        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        let month = this.state.months.indexOf(this.getMonth.current.value);
        const date = new Date(parseInt(this.getYear.current.value), month, parseInt(this.getDay.current.value));
        this.setState({ dayOfTheWeek: days[date.getDay()] });
    };
    

    render() {
        return (
            <div>
                <select ref={this.getDay} onChange={this.switchDayOfTheWeek}> 
                    {this.state.days.map(day => <option> {day} </option> )}
                </select>

                <select ref={this.getMonth} onChange={this.switchDayOfTheWeek}> 
                    {this.state.months.map(day => <option> {day} </option> )}
                </select>

                <select ref={this.getYear} onChange={this.switchDayOfTheWeek}> 
                    {this.state.years.map(day => <option> {day} </option> )}
                </select>

                <div> { this.state.dayOfTheWeek } </div>
            </div>
            )
    }
}

export default DayOfTheWeek;