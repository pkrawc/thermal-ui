import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

const InputWrapper = styled.div`
  position: relative;
  padding: 1em 0 2em;
  input {
    padding: 0.5em 0;
    background: none;
    border: none;
    border-bottom: 2px solid ${({error, theme}) => {
      if (error) {
        if (theme.colors) return theme.colors.error
        else return colors.error
      } else {
        if (theme.colors) return theme.colors.disabled
        else return colors.disabled
      }
    }};
    color: ${({error, theme}) => {
      if (error) {
        if (theme.colors) return theme.colors.error
        else return colors.error
      } else {
        if (theme.colors) return theme.colors.dark
        else return colors.dark
      }
    }};
    font-size: 1em;
    outline: none;
    width: 100%;
    transition: all 200ms ease-in-out;
    &:hover {
      border-bottom: 2px solid ${colors.darkSecondary};
    }
    &:focus {
      border-bottom: 2px solid ${colors.darkSecondary};
    }
    &::-webkit-input-placeholder {
       color: ${colors.disabled};
    }
  }
  input + label {
    position: absolute;
    top: 0;
    left: 0;
    color: ${({error, theme}) => {
      if (error) {
        if (theme.colors) return theme.colors.error
        else return colors.error
      } else {
        if (theme.colors) return theme.colors.darkSecondary
        else return colors.darkSecondary
      }
    }};
    font-size: 0.75em;
    transition: all 200ms ease-in-out;
  }
  .error {
    position: absolute;
    bottom: 1em;
    right: 0;
    color: ${({theme}) => theme.colors ? theme.colors.error : colors.error };
    font-size: 0.75em;
    text-align: right;
    visibility: ${({error}) => error ? 'visible' : 'hidden'};
    opacity: ${({error}) => error ? '1' : '0'};
    transition: color 200ms ease-in-out, opacity 200ms ease-in-out;
  }
`

export class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    placeholder: PropTypes.string,
  }
  static defaultProps = {
    type: 'text'
  }
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render() {
   const { id, type, value, placeholder, errorText, ...props } = this.props
    return (
      <InputWrapper {...props}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
        { type === 'email' ? <span className="mdi mdi-email"></span> : null }
        <label htmlFor={props.id}>{props.label}</label>
        <span className="error">
          {errorText}
        </span>
      </InputWrapper>
    )
  }
}
