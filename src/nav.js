import React from 'react'

import css from './nav.css'

const { func, bool } = React.PropTypes

export default class Nav extends React.Component {
  static displayName = 'Nav'
  static propTypes = {
    onPrevious: func.isRequired,
    onNext: func.isRequired,
    hasPrevious: bool,
    hasNext: bool
  }
  getPrevClassName() {
    return this.props.hasPrevious ? css.prev : css.prevHidden
  }
  getNextClassName() {
    return this.props.hasNext ? css.next : css.nextHidden
  }
  render() {
    return (
      <div className={css.root}>
        <button className={this.getPrevClassName()} onClick={this.props.onPrevious}>&#10094;</button>
        <button className={this.getNextClassName()} onClick={this.props.onNext}>&#10095;</button>
      </div>
    )
  }
}
