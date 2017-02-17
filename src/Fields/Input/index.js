import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

const InputWrapper = styled.div`
  position: relative;
  padding-top: 1em;
  input {
    padding: 0.5em 0;
    background: none;
    border: none;
    border-bottom: 2px solid ${colors.disabled};
    font-size: 1em;
    outline: none;
    width: 100%;
    transition: border 100ms ease-in-out;
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
    color: ${colors.darkSecondary};
    font-size: 0.75em;
  }
`

export const Input = ({
  id,
  type,
  value,
  placeholder,
  ...props
}) =>
  <InputWrapper {...props}>
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
    />
    { type === 'email' ? <span className="mdi mdi-email"></span> : null }
    <label htmlFor={props.id}>{props.label}</label>
  </InputWrapper>

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text'
}
