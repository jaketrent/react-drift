import React from 'react'
import styleable from 'react-styleable'

@styleable(require('./frame.css'))
export default class Frame extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        {this.props.children}
      </div>
    )
  }
}
