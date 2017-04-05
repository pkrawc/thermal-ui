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

const oldArray = [{id: 5}, {id: 3}, {id: 12}]
const oldArrayWithIndex = oldArray.map((item, i) => (
  {i: i, o: item}
))
const sortOrder = (a,b) => {
  if (a.o.id === photo_order[a.i]) return 0
  else if (a.o.id < photo_order[a.i]) return 1s
  else return -1
}
const newArray = [...oldArray].sort(sortOrder)
console.log(newArray)
console.log(oldArray)
