import PropTypes from 'prop-types'
import Radium from 'radium'
import React from 'react'

import styles from './nav-styles.js'

function getPrevStyles(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden
}

function getNextStyles(props) {
  return props.hasNext ? styles.next : styles.nextHidden
}

function Nav(props) {
  return (
    <div style={styles.root}>
      <button
        key="prev"
        style={getPrevStyles(props)}
        onClick={props.onPrevious}
      >
        &#10094;
      </button>
      <button key="next" style={getNextStyles(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
}

export default Radium(Nav)
