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
  render() {
    return (
      <div>
        <button onClick={this.props.onPrevious}>&#10094;</button>
        <button onClick={this.props.onNext}>&#10095;</button>
      </div>
    )
  }
}
