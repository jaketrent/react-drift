import React from 'react'
import styleable from 'react-styleable'

const { func, bool } = React.PropTypes

@styleable(require('./nav.css'))
export default class Nav extends React.Component {
  static propTypes = {
    onPrevious: func.isRequired,
    onNext: func.isRequired,
    hasPrevious: bool,
    hasNext: bool
  }
  getPrevClassName() {
    return this.props.hasPrevious ? this.props.css.prev : this.props.css.prevHidden
  }
  getNextClassName() {
    return this.props.hasNext ? this.props.css.next : this.props.css.nextHidden
  }
  render() {
    return (
      <div className={this.props.css.root}>
        <button className={this.getPrevClassName()} onClick={this.props.onPrevious}>&#10094;</button>
        <button className={this.getNextClassName()} onClick={this.props.onNext}>&#10095;</button>
      </div>
    )
  }
}
