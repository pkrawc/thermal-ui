import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import shortid from 'shortid'
import { colors } from 'variables'

const CheckBoxWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    display: inline-flex;
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'inital'};
    opacity: ${({disabled}) => disabled ? '0.7' : '1'};
    ${''/* pointer-events: ${({disabled}) => disabled ? 'none' : 'initial'}; */}
  }
  .checkmark {
    margin-right: 1rem;
    height: 2em;
    width: 2em;
    flex: 0 0 auto;
    .filled {
      fill: ${({disabled}) => disabled ? '#404045' : colors.primary};
      opacity: ${({checked}) => checked ? '1' : '0'};
      transform: ${({checked}) => checked ? 'scale(1)' : 'scale(0.1)'};
      transform-origin: center;
      transition: opacity 300ms ease-in-out, transform 100ms ease-in-out 100ms;
    }
    .outline {
      fill: none;
      stroke: #404045;
      stroke-width: 2px;
      stroke-linejoin: round;
    }
  }
  .label {
    line-height: 2em;
    font-size: 1em;
    user-select: none;
  }
`

export default class CheckBox extends Component {
  static propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
  }
  constructor(props) {
    super(props)
    this.id = shortid.generate()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      checked: false
    }
  }
  handleClick(e, disabled) {
    if(!disabled) this.setState({checked: !this.state.checked})
  }
  render() {
    const { label, disabled, checked } = this.props
    return (
      <CheckBoxWrapper checked={this.state.checked} disabled={disabled}>
        <input
          id={this.id}
          type="checkbox"
          ref={input => {this.checkbox = input}}
          checked={this.state.checked}
          disabled={disabled}
          defaultChecked={checked}
        />
        <label htmlFor={this.id} onClick={() => this.handleClick(event, disabled)}>
          <svg className="checkmark" viewBox="0 0 48 48">
            <rect className="outline" x="7" y="7" width="34" height="34" rx="3" ry="3"/>
            <path className="filled" d="M38,6H10a4,4,0,0,0-4,4V38a4,4,0,0,0,4,4H38a4,4,0,0,0,4-4V10A4,4,0,0,0,38,6ZM20,34,10,24l2.83-2.83L20,28.34,35.17,13.17,38,16Z"/>
          </svg>
          <span className="label">{label}</span>
        </label>
      </CheckBoxWrapper>
    )
  }
}
