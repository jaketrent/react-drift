import React from 'react'

const { object, string } = React.PropTypes

function Slide(props) {
  return (
    <article style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: string.isRequired,
  style: object,
  title: string
}

export default Slide
