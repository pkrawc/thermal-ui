import React, { Component } from 'react'
import styled from 'styled-components'

const months = [
  'january', 'febuary', 'march', 'april',
  'may', 'june', 'july', 'august',
  'september', 'october' 'november', 'december'
]

const DatePickerWrapper = styled.div`

`

function DatePicker(props) {
  return (
    <div className="date-picker"></div>
  )
}

function TimePicker(props) {
  return (
    <div className="time-picker"></div>
  )
}

export default class Picker extends Component {
  render() {
    return (
      {
        (props.type === 'date') ? (
          <DatePicker />
        ) : (props.type === 'time') ? (
          <TimePicker />
        ) : null
      }
    )
  }
}
