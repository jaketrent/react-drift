import React from 'react'

const { object, string } = React.PropTypes

function Slide(props) {
  return (
    <article style={props.style} className="dft__slide">
      <img src={props.image} alt={props.title} />
      <footer className="dft__slide__footer">
        <h2 className="dft__slide__footer__title">{props.title}</h2>
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
