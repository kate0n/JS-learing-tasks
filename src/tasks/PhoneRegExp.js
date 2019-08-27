import React, {Component, Fragment} from 'react';

class PhoneRegExp extends Component {
    state = {
        number: ''
    }

    getNumber = React.createRef();

    parseNumber = (e) => {
        const regExp = /^[+](7).+(\d{3,5}).+([#]{3}).+([#]{2}).+([#]{2})/g;
        const value =  e.target.value;

        // let numberParsed = value.replace(regExp, '');
        let numberParsed = regExp.exec(value);
        this.setState({number: numberParsed})
    }

    render() {
        return (
            <Fragment>
                <p> ПАРСИНГ ТЕЛЕФОНА ПО МАСКЕ" </p>
                <input
                    placeholder={"89818542015"}
                    value={this.state.number}
                    ref={this.getNumber}
                    onChange={this.parseNumber}/>
                <p> {this.state.number} </p>

            </Fragment>
        )
    }
}

export default PhoneRegExp;

//const phoneRegExp = /89/;
// d
// const phone = 89818542015;

// phone.search(phoneRegExp); //найдет 89
// const result = phone.match(phoneRegExp); //найдет совпаденип,возвращает массив из [совпадение, index, поисковая строка]
// alert(result[0]);
// alert(result.index);
// alert(result.input);

// найдется 8981, + также часть шаблона в скобках станет отдельным элементом массива alert(result[1]);
// const result2 = phone.match(/8(981)/);

// alert('8-981-854-20-15'.replace(/-/g, '') );