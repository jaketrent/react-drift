import React from 'react/addons'

const { number } = React.PropTypes

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
      if (/Nav/.test(child.type.displayName))
        nav = child
    })
    return nav
  }
  renderSlides() {
    var slides = []
    var slideIndex = 0
    React.Children.forEach(this.props.children, (child, i) => {
      if (/Slide/.test(child.type.displayName)) {
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
      <div>
        {this.renderSlides()}
        {this.renderNav()}
      </div>
    )
  }
}
