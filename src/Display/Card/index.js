import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { colors, shadows, media } from 'variables'
import { Title } from '../../Typography'
import { Button } from '../../General'

const CardWrapper = styled.div`
  background-color: ${colors.light};
  border-radius: 4px;
  box-shadow: ${shadows.medium};
  padding: 0 1em 1em;
  .action-area {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    margin-bottom: -1em;
    button:not(:last-of-type) {
      margin-left: 1em;
    }
    button {
      margin-bottom: 1em;
    }
  }
  .media {
    position: relative;
    transform: translateX(-1em);
    width: calc(100% + 2em);
    img {
      display: block;
      width: 100%;
      border-radius: ${({title}) => title ? '0' : '4px 4px 0 0'};
    }
  }
`

export function Card({
  actions,
  children,
  title,
  media,
  mediaBackground
}) {
  return (
    <CardWrapper title={title}>
      { title ? <Title color={colors.darkSecondary}>{title}</Title> : null }
      <div className="media">
        {
          media.type === 'video' ? (
            <video src={media.url}>
              <p>
                Your browser doesn't support HTML5 video, get a better browser.
              </p>
            </video>
          ) : (
            <img src={media.url} alt={title}/>
          )
        }
      </div>
      { children }
      <div className="action-area">
        {
          actions ? Array.isArray(actions) ?
          actions.map((action, i)=> <Button key={`card-${i}`} onClick={action.action}>{action.text}</Button>) :
          <Button onClick={actions.action}>{actions.text}</Button> :
          null
        }
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  actions: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  title: PropTypes.string,
  media: PropTypes.object,
  mediaBackground: PropTypes.bool
}
