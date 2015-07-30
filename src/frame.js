import React from 'react'

export default class Frame extends React.Component {
  render() {
    return (
      <div className="dft__frame">
        {this.props.children}
      </div>
    )
  }
}
