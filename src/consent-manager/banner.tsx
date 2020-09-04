import React, { PureComponent } from 'react'
import styled from 'react-emotion'
import fontStyles from './font-styles'

const Root = styled<{ backgroundColor: string; textColor: string }, 'div'>('div')`
  ${fontStyles};
  position: relative;
  padding: 8px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  text-align: center;
  font-size: 12px;
  line-height: 1.3;
`

const P = styled('p')`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`

interface Props {
  innerRef: (node: HTMLElement | null) => void
  content: React.ReactNode
  backgroundColor: string
  textColor: string
}

export default class Banner extends PureComponent<Props> {
  static displayName = 'Banner'

  render() {
    const { innerRef, content, backgroundColor, textColor } = this.props

    return (
      <Root innerRef={innerRef} backgroundColor={backgroundColor} textColor={textColor}>
        <P>{content}</P>
      </Root>
    )
  }
}
