import PropTypes from 'prop-types'
import React from 'react'

function Nav(props) {
  return (
    <div>
      <button onClick={props.onPrevious}>&#10094;</button>
      <button onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
}

export default Nav
