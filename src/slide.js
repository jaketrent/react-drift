import React from 'react'

export default class Slide extends React.Component {
  static displayName = 'Slide'
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
  }
  render() {
    return (
      <article style={this.props.style}>
        <img src={this.props.image} alt={this.props.title} />
        <footer>
          <h2>{this.props.title}</h2>
          <div>{this.props.children}</div>
        </footer>
      </article>
    )
  }
}
