import React from 'react'

import styles from './slide-styles'

export default class Slide extends React.Component {
  static displayName = 'Slide'
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
  }
  render() {
    return (
      <article style={{ ...styles.root, ...this.props.style }}>
        <img src={this.props.image} alt={this.props.title} />
        <footer style={styles.footer}>
          <h2 style={styles.title}>{this.props.title}</h2>
          <div>{this.props.children}</div>
        </footer>
      </article>
    )
  }
}
