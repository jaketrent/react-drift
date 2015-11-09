import getDisplayName from 'react-display-name'
import React from 'react/addons'
import styleable from 'react-styleable'

import css from './carousel.css'

const { number } = React.PropTypes

@styleable(css)
export default class Carousel extends React.Component {
  static propTypes = {
    width: number,
    showIndex: number
  }
  static defaultProps = {
    width: 640,
    showIndex: 0
  }
  renderNav() {
    var nav
    React.Children.forEach(this.props.children, (child, i) => {
      if (/Nav/.test(getDisplayName(child.type)))
        nav = child
    })
    return nav
  }
  renderSlides() {
    var slides = []
    var slideIndex = 0
    React.Children.forEach(this.props.children, (child, i) => {
      console.log('child.type.displayName', child.type.displayName)
      if (/Slide/.test(getDisplayName(child.type))) {
        slides.push(React.addons.cloneWithProps(child, {
          key: i,
          style: {
            width: this.props.width,
            left: this.props.width * (slideIndex++ - this.props.showIndex)
          }
        }))
      }
    })
    return slides
  }
  render() {
    return (
      <div className={this.props.css.root}>
        {this.renderSlides()}
        {this.renderNav()}
      </div>
    )
  }
}
