import React from 'react'
import './component.scss'
import * as d3 from 'd3'
class Root extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  componentDidMount() {
    const _this = this
    let dragInstance = d3.drag()
    const $reactDom = d3.select('rect')
    dragInstance.on('drag', function(d) {
      const { x, y } = d3.event
      _this.setState({
        x,
        y
      })
    })
    $reactDom.on('touchstart', function() {

      // will trigger
      // window.alert('before:' + d3.event.type)
    })
    debugger
    $reactDom.call(dragInstance)
    $reactDom.on('touchstart.t1', function() {
      d3.event.stopPropagation();

      window.alert('touchstart1')
    })
    $reactDom.on('touchstart.t2', function() {
      d3.event.stopPropagation();
      window.alert('touchstart2')
    })
    // $reactDom.on('touchstart touchmove touchend', function() {
    //   window.alert('after:' + d3.event.type)
    // })
  }

  render () {
    const { x, y } = this.state
    return (
      <div className='root-component'>
        <svg width="100%" height="100%" ref={svg => this.svg = svg}>
          <rect x={ x } y={ y } width="50" height="50"/>
      </svg>
      </div>
    )
  }
}

export default Root
