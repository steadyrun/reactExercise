import React, { Component } from 'react'
import TestComponent from './TestComponent'
export default class App2 extends Component {
    render() {
        return (
            <TestComponent daysSince={2}/>
        )
    }
}
