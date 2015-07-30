import Radium from 'radium'

import config from './config-styles'

var pulse = Radium.keyframes({
  '0%': {
    transform: 'scale3d(1, 1, 1)'
  },
  '15%': {
    transform: 'scale3d(1.02, 1.02, 1.02)'
  },
  '30%': {
    transform: 'scale3d(1, 1, 1)'
  }
})

const btn = {
  flex: 1,
  height: config.imageHeight,
  padding: 20,
  verticalAlign: 'top',
  fontSize: 50,
  background: 'transparent',
  color: '#fff',
  textShadow: '1px 1px 3px rgba(0, 0, 0, .6)',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  userSelect: 'none',
  animation: `${pulse} 4s 2s infinite`
}

const prev = {
  ...btn,
  textAlign: 'left'
}

const next = {
  ...btn,
  textAlign: 'right'
}

const hidden = {
  visibility: 'hidden'
}

export default {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex'
  },
  next,
  prev,
  prevHidden: {
    ...prev,
    ...hidden
  },
  nextHidden: {
    ...next,
    ...hidden
  }
}
