import React from 'react'

import styles from './frame-styles'

export default class Frame extends React.Component {
  render() {
    return (
      <div style={styles.root} id="Frame">
        {this.props.children}
      </div>
    )
  }
}
