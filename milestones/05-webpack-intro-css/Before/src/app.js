import React from 'react'

import Carousel from './carousel.js'
import Frame from './frame.js'
import Nav from './nav.js'
import Slide from './slide.js'

export default class DriftApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.state = {
      showIndex: 0,
      numSlides: 5
    }
  }
  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    })
  }
  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    })
  }
  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    )
  }
  render() {
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          nav={this.renderNav()}
          width={640}
        >
          <Slide image={require('./images/1.jpg')} title="Imperial Mockery">
            In a show of defiance, rebels have again made mockery of the majesty
            that is service to the Empire. These objects were immediately
            removed from the reflecting pool in Coruscant's Central Square when
            found this morning.
          </Slide>
          <Slide image={require('./images/2.jpg')} title="Trooper Initiation">
            In a tradition that predates the Empire, Troopers seen here are made
            to suffer the agony of the limbo line. Such initiation techniques
            are currently under Imperial review.
          </Slide>
          <Slide
            image={require('./images/3.jpg')}
            title="Master and Apprentice"
          >
            Internships work! When determining a career path, it is wise to
            first find someone currently in that line of work. They will likely
            be able to show you what it's really like before you commit your
            future.
          </Slide>
          <Slide image={require('./images/4.jpg')} title="Battle of Coruscant">
            Modelers ran out of the pre-Empire model Star Destroyers in this
            reenactment of the Battle of Coruscant. Various plans for future
            machines of war were used as filler.
          </Slide>
          <Slide
            image={require('./images/5.jpg')}
            title="The Wiles of the Forest"
          >
            After a number of nervous breakdowns, Empire personnel officers are
            investigating the possibility rotating troopers stationed on the
            forest moons of Endor after several rotations.
          </Slide>
        </Carousel>
      </Frame>
    )
  }
}
