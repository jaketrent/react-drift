import classnames from 'classnames'
import React from 'react'

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
    return classnames('dft__nav__btn', 'dft__nav__btn--prev', {
      'dft__nav__btn--hidden': !this.props.hasPrevious
    })
  }
  getNextClassName() {
    return classnames('dft__nav__btn', 'dft__nav__btn--next', {
      'dft__nav__btn--hidden': !this.props.hasNext
    })
  }
  render() {
    return (
      <div className="dft__nav">
        <button className={this.getPrevClassName()} onClick={this.props.onPrevious}>&#10094;</button>
        <button className={this.getNextClassName()} onClick={this.props.onNext}>&#10095;</button>
      </div>
    )
  }
}
