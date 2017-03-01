import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { colors } from 'variables'

const InputWrapper = styled.div`
  position: relative;
  padding: 1em 0 2em;
  input {
    padding: 0.5em 0;
    background: none;
    border: none;
    border-bottom: 2px solid ${({error, theme}) => error ? theme.colors ? theme.colors.error : colors.error : colors.disabled};
    color: ${({error, theme}) => error ? theme.colors ? theme.colors.error : colors.error : colors.dark};
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
    color: ${({error, theme}) => error ? theme.colors ? theme.colors.error : colors.error : colors.darkSecondary};
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

export const Input = ({
  id,
  type,
  value,
  placeholder,
  errorText,
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
    <span className="error">
      {errorText}
    </span>
  </InputWrapper>

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text'
}
