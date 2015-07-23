import React from 'react'
import styleable from 'react-styleable'

@styleable(require('./slide.css'))
export default class Slide extends React.Component {
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
  }
  render() {
    return (
      <article className={this.props.css.root} style={this.props.style}>
        <img className={this.props.css.image} src={this.props.image} alt={this.props.title} />
        <footer className={this.props.css.footer}>
          <h2 className={this.props.css.title}>{this.props.title}</h2>
          <div className={this.props.css.desc}>{this.props.children}</div>
        </footer>
      </article>
    )
  }
}
