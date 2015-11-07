import config from './config-styles'

const footerHeight = 110

export default {
  root: {
    position: 'absolute',
    top: 0,
    transition: 'all .6s'
  },
  footer: {
    position: 'absolute',
    top: config.imageHeight - footerHeight,
    left: 0,
    width: '100%',
    height: footerHeight,
    padding: 15,
    background: 'rgba(0,0,0,.3)',
    color: '#fff',
    textShadow: '1px 1px 0 rgba(0, 0, 0, .6)',
    fontFamily: '"Helvetica Neue", Helvetica, Aria, sans-serif',
    fontSize: 14,
    lineHeight: '1.4em',
    boxSizing: 'border-box'
  },
  title: {
    margin: '0 0 10px 0'
  }
}
