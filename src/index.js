import React from 'react'
import styleable from 'react-styleable'

@styleable(require('./index.css'))
export default class DriftApp extends React.Component {
  render() {
    return (
      <h1 className={this.props.css.title}>Drift!</h1>
    )
  }
}
