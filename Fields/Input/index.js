import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import { colors } from 'variables'
import shortid from 'shortid'

const InputGroup = styled.div`
  position: relative;
  overflow: hidden;
  input {
    padding: 2em 1em 1em;
    background: ${({dark}) => dark ? 'transparent' : '#F9F9F9'};
    border: ${({dark}) => dark ? '2px solid rgba(255,255,255,0.6)' : '2px solid rgba(0,0,0,0.12)'};
    border-radius: 2px;
    font-size: 1em;
    outline: none;
    width: 100%;
    transition: all 100ms ease-in-out;
    &:focus {
      border: 2px solid #137BB5;
      box-shadow: 0 3px 6px rgba(0,0,0,0.12);
      & + label { transform: translateY(-0.25em) scale(0.5); }
    }
    &.input-error {
      border: 2px solid ${colors.error};
      color: ${colors.error};
      & + label {
        color:${colors.error};
        opacity: 0.6;
      }
    }
    & + label {
      position: absolute;
      top: 0.75em;
      left: 1rem;
      font-size: 1.5em;
      transform-origin: top left;
      transform: ${({value, placeholder}) => placeholder ? 'translateY(-0.25em) scale(0.5)' : value.length > 0 ? 'translateY(-0.25em) scale(0.5)' : 'inital'};
      transition: all 100ms ease-in-out;
      color: ${({dark}) => dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)'};
    }
  }
  span.error {
    color: ${colors.error};
    font-size: 0.75em;
  }
`

export default class TextInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel']).isRequired,
    icon: PropTypes.string,
  }
  static defaultProps = {
    label: 'Input',
    type: 'text',
    defaultValue: '',
    onChange: e => null
  }
  constructor(props) {
    super(props)
    this.id = shortid.generate()
    this.state = {value: this.props.defaultValue}
  }
  componentDidMount() {
    if (this.props.autofocus) this.input.focus()
  }
  render() {
    const {
      autofocus,
      defaultValue,
      error,
      errorText,
      label,
      onChange,
      placeholder,
      type,
      ...rest
    } = this.props
    return (
      <InputGroup {...rest} value={this.state.value} placeholder={placeholder}>
        <input
          className={ error ? 'input-error' : '' }
          defaultValue={defaultValue}
          id={this.id}
          onChange={e => {
            this.setState({value: e.target.value}),
            onChange(e.target.value)
          }}
          placeholder={placeholder}
          ref={ input => this.input = input }
          type={type}
          {...rest}
        />
        <label htmlFor={this.id}>{label}</label>
        {error ? <span className="error">Error: {errorText}</span> : null}
      </InputGroup>
    )
  }
}
