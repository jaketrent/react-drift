import React from 'react'
import styleable from 'react-styleable'
import withDisplayName from 'react-with-display-name'

import css from './slide.css'

@withDisplayName('Slide')
export default class Slide extends React.Component {
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
  }
  static defaultProps = {
    css: {}
  }
  render() {
    return (
      <article className={this.props.css.root} style={this.props.style}>
        <img src={this.props.image} alt={this.props.title} />
        <footer className={this.props.css.footer}>
          <h2 className={this.props.css.title}>{this.props.title}</h2>
          <div>{this.props.children}</div>
        </footer>
      </article>
    )
  }
}
