import React from 'react'

export default class Slide extends React.Component {
  static displayName = 'Slide'
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
  }
  render() {
    return (
      <article className="dft__slide" style={this.props.style}>
        <img src={this.props.image} alt={this.props.title} />
        <footer className="dft__slide__footer">
          <h2 className="dft__slide__title">{this.props.title}</h2>
          <div>{this.props.children}</div>
        </footer>
      </article>
    )
  }
}
