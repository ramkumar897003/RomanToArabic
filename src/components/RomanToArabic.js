import React, { Component } from 'react';
import { Container, TextInput, Heading } from './StyledComponents';

class RomanToArabic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roman: '',
            result: ''
        }
    }

    onChange = (e) => {
        this.setState({ roman: e.target.value });   
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ result: romanToArabic(this.state.roman.toUpperCase()) });
    }

    render() {
        return(
            <Container>
                <Heading>Roman To Arabic Convertor</Heading>
                <form onSubmit={this.onSubmit}>
                    <p>
                        <TextInput 
                            placeholder="Enter Roman Number..." 
                            value={this.state.roman}
                            onChange={this.onChange}
                        />
                    </p>
                    <p>
                        {this.state.result?<Heading>Arabic equivalent: {this.state.result}</Heading>:null}
                    </p>
                </form>
            </Container>
        ) 
    }
}

export const romanToArabic = (roman) => {
    let romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    roman = roman.split('');
    
    let sum = romans[roman[roman.length-1]];
    for(let i = roman.length - 1; i>0; i--) {
        if(romans[roman[i]] > romans[roman[i-1]])
            sum = sum - romans[roman[i-1]];
        else
            sum = sum + romans[roman[i-1]];
    }

    return sum;
}

export default RomanToArabic;