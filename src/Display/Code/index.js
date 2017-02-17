import React from 'react'
import styled from 'styled-components'
import { asCode } from '../../Utils'
import { colors } from 'variables'

const JsxString = (component, counter = 0) => {
  let type = component.type.name;
  let props = component.props;
  let propsString = "";
  for (let key in props) {
    if (key !== "children") {
      let propValue = props[key];
      let value = "";
      if (propValue instanceof Object) {
        value = `{${JSON.stringify(propValue).replace(/['"]+/g, '')}}`;
      } else {
        value = `"${propValue}"`;
      }
      propsString += ` ${key}=${value}`;
    }
  }
  if (props.children) {
    counter += 2;
    var children = JsxString(props.children, counter);
    return `<${type}${propsString}>
${Array(counter).join(" ")}  ${children}
${Array(counter).join(" ")}</${type}>`;
  }
  return `<${type}${propsString} />`;
}

const Pre = styled.pre`
  padding: 1em;
  margin: 0;
  background-color: ${colors.dark};
  border-radius: 4px;
  color: ${colors.light};
  width: 100%;
  overflow-x: auto;
  height: auto;
  code {
    color: white;
    width: 100%;
  }
`

export const Code = ({children, ...rest}) =>
  <Pre {...rest}>
    <code>
      { JsxString(rest.element) }
    </code>
  </Pre>
