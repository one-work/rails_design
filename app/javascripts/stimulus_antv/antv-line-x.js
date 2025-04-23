import AntvBaseController from './antv-base'

export default class extends AntvBaseController {
  static values = {
    style: { type: Object, default: {} },
    labels: { type: Object, default: {} }
  }

  connect() {
    super.connect()
    this.chart.encode({
      x: 'name',
      y: 'value'
    })
    this.chart.type = 'interval'
    this.chart.axis({
      x: { title: false, animate: true, tick: false, labelFill: 'white' },
      y: { title: false, tickStroke: 'white', labelFill: 'white' }
    })
    this.chart.style('maxWidth', 10)
    this.chart.label({ text: 'value', fill: 'white', dx: 2, textAlign: 'start', formatter: v => `¥${v.toFixed(2)}` })
    this.chart.coordinate({ transform: [{ type: 'transpose' }] })
    this.chart.render()
  }

}
