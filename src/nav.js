import Radium from 'radium'
import React from 'react'

import styles from './nav-styles'

const { func, bool } = React.PropTypes

function getPrevStyles(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden
}

function getNextStyles(props) {
  return props.hasNext ? styles.next : styles.nextHidden
}

function Nav(props) {
  return (
    <div style={styles.root}>
      <button key="prev" style={getPrevStyles(props)} onClick={props.onPrevious}>&#10094;</button>
      <button key="next" style={getNextStyles(props)} onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Radium(Nav)
