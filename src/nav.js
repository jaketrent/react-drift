import Radium from 'radium'
import React from 'react'

import styles from './nav-styles'

const { func, bool } = React.PropTypes

@Radium
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
  render() {
    return (
      <div style={styles.root}>
        <button key="prev" style={this.getPrevClassName()} onClick={this.props.onPrevious}>&#10094;</button>
        <button key="next" style={styles.next} onClick={this.props.onNext}>&#10095;</button>
      </div>
    )
  }
}
