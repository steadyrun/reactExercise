import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TestComponent extends Component {
    static defaultProps ={
        name : 'null'
    }
    static propTypes = {
        name : PropTypes.string,
        daysSince : PropTypes.number.isRequired     
    }


    render() {
        return (
            <div>
                이것은 기본 컴포넌트다. 이름은 {this.props.name}
                이다!
                나이는 이제 갓 태어난 {this.props.daysSince}
                일차 일뿐!!
            </div>
        )
    }
}
