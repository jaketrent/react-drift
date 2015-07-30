import React from 'react'

export default class Frame extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
