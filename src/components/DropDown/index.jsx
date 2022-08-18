import React from 'react'

import { Ul, Li } from './components'

export default class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.handleClickOutside = this.handleClickOutside.bind(
      this,
    )
  }

  handleClickOutside(event) {
    if (
      this.ref.current &&
      !this.ref.current.contains(event.target)
    ) {
      this.props.onClickOutside &&
        this.props.onClickOutside()
    }
  }

  componentDidMount() {
    document.addEventListener(
      'click',
      this.handleClickOutside,
      true,
    )
  }

  componentWillUnmount() {
    document.removeEventListener(
      'click',
      this.handleClickOutside,
      true,
    )
  }

  handleClick = el => () => {
    this.props.onHandleChange(el)
    this.props.clickOutside()
  }

  render() {
    if (!this.props.show) return null
    return (
      <Ul ref={this.ref}>
        {this.props.ListItems.map(el => (
          <Li key={el} onClick={this.handleClick}>
            {el} theme
          </Li>
        ))}
      </Ul>
    )
  }
}
