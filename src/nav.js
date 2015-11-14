import autobind from 'autobind-decorator'
import React from 'react'

import styles from './nav-styles'

const { func, bool } = React.PropTypes

function getPrevStyles(props, state) {
  if (!props.hasPrevious)
    return styles.prevHidden
  else if (state.isHovered.prev)
    return styles.prevHover
  else
    return styles.prev
}

function getNextStyles(props, state) {
  if (!props.hasNext)
    return styles.nextHidden
  else if (state.isHovered.next)
    return styles.nextHover
  else
    return styles.next
}

@autobind
class Nav extends React.Component {
  state = {
    isHovered: {
      prev: false,
      next: false
    }
  }
  toggleHover(side, toggle) {
    this.setState({
      isHovered: {
        ...this.state.isHovered,
        [side]: toggle
      }
    })
  }
  render() {
    const { props, state } = this
    return (
      <div style={styles.root}>
        <button onClick={props.onPrevious}
                onMouseEnter={this.toggleHover.bind(this, 'prev', true)}
                onMouseLeave={this.toggleHover.bind(this, 'prev', false)}
                style={getPrevStyles(props, state)}>&#10094;</button>
        <button onClick={props.onNext}
                onMouseEnter={this.toggleHover.bind(this, 'next', true)}
                onMouseLeave={this.toggleHover.bind(this, 'next', false)}
                style={getNextStyles(props, state)}>&#10095;</button>
      </div>
    )
  }
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav
