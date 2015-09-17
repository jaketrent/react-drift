import Radium from 'radium'
import React from 'react/addons'

import styles from './carousel-styles'

const { number } = React.PropTypes

@Radium
export default class Carousel extends React.Component {
  static propTypes = {
    width: number,
    showIndex: number
  }
  static defaultProps = {
    width: 640,
    showIndex: 0
  }
  renderSlides() {
    return React.Children.map(this.props.children, (child, i) => {
      return React.addons.cloneWithProps(child, {
        key: i,
        style: {
          width: this.props.width,
          left: this.props.width * (i++ - this.props.showIndex)
        }
      })
    })
  }
  render() {
    return (
      <div style={styles.root}>
        {this.renderSlides()}
      </div>
    )
  }
}
