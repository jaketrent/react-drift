import PropTypes from 'prop-types'
import React from 'react'

function renderSlides(props) {
  return React.Children.map(props.children, (slide, i) => {
    return React.cloneElement(slide, {
      style: {
        ...slide.props.style,
        width: props.width,
        left: props.width * (i - props.showIndex)
      }
    })
  })
}

function Carousel(props) {
  return (
    <div>
      {renderSlides(props)}
      {props.nav}
    </div>
  )
}

Carousel.propTypes = {
  nav: PropTypes.node.isRequired,
  showIndex: PropTypes.number,
  width: PropTypes.number
}

export default Carousel
