import React from 'react'

const { func, bool } = React.PropTypes

function Nav(props) {
  return (
    <div>
      <button onClick={props.onPrevious}>&#10094;</button>
      <button onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav
