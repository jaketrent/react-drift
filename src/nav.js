import React from 'react'

import styles from './nav-styles'

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
    return this.props.hasPrevious ? styles.prev : styles.prevHidden
  }
  getNextClassName() {
    return this.props.hasNext ? styles.next : styles.nextHidden
  }
  render() {
    return (
      <div style={styles.root}>
        <button style={this.getPrevClassName()} onClick={this.props.onPrevious}>&#10094;</button>
        <button style={this.getNextClassName()} onClick={this.props.onNext}>&#10095;</button>
      </div>
    )
  }
}
