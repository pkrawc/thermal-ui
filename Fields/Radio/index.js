import React, { Component, PropTypes } from 'react'
import { Title, Small } from '../../index'
import styled from 'styled-components'

const RadioWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  .radio-title {
    flex: 1;
  }
  .input-value {
    text-align: center;
    padding: 1em;
  }
`

export default class RadioSet extends Component {
  static propTypes = {
    name: PropTypes.string,
    choices: PropTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {
      value: String
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const { values, name } = this.props
    return (
      <RadioWrapper>
        <Title className="radio-title">{name}</Title>
        {
          values.map((value, i) => {
            if (typeof value === 'object') {
              return (
                <div key={`values-${i}`} className="value-group">
                  <Small>{value.title}</Small>
                  {
                    value.values.map((value, i) => (
                      <div key={`value-${i}`} className="input-value">
                        <Small>{value}</Small>
                        <input
                          name={name}
                          type="radio"
                          value={value}
                          checked={this.state.value == value}
                          onChange={this.handleChange}/>
                      </div>
                    ))
                  }
                </div>
              )
            } else {
              return (
                <div key={`value-${i}`} className="input-value">
                  <Small>{value}</Small>
                  <input
                    name={name}
                    type="radio"
                    value={value}
                    checked={this.state.value == value}
                    onChange={this.handleChange}/>
                </div>
              )
            }
          })
        }
      </RadioWrapper>
    )
  }
}
