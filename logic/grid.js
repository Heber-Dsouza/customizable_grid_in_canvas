class Grid {
  constructor() {
    this.axisX = []
    this.axisY = []
    this.gridDivider = 5
    this.subDivider = 4
    this.maxBorderWidth = 3
    this.minBorderWidth = 1
    this.increaseBorderWidth = true
    this.gridColor = 'black'
    this.subGridColor = 'grey'
  }

  #createLines(initial, final, depth) {
    return divideGrid([initial, final], depth)
  }

  draw(ctx) {
    const currentHeight = ctx.canvas.height
    const currentWidth = ctx.canvas.width

    this.axisX = this.#createLines(0, currentWidth, this.gridDivider)
    this.axisY = this.#createLines(0, currentHeight, this.gridDivider)

    // código para a linha do meio
    // ctx.moveTo(currentWidth / 2, 0)
    // ctx.lineTo(currentWidth / 2, currentHeight);

    this.axisX.forEach((x, i) => {
      ctx.beginPath()
      ctx.lineWidth =
        this.increaseBorderWidth && (i === 0 || i === this.axisX.length - 1)
          ? this.maxBorderWidth
          : this.minBorderWidth
      ctx.strokeStyle =
        i % this.subDivider === 0 ? this.gridColor : this.subGridColor
      ctx.moveTo(x, 0)
      ctx.lineTo(x, currentHeight)
      ctx.stroke()
    })

    this.axisY.forEach((x, i) => {
      ctx.beginPath()
      ctx.lineWidth =
        this.increaseBorderWidth && (i === 0 || i === this.axisY.length - 1)
          ? this.maxBorderWidth
          : this.minBorderWidth
      ctx.strokeStyle =
        i % this.subDivider === 0 ? this.gridColor : this.subGridColor
      ctx.moveTo(0, x)
      ctx.lineTo(currentWidth, x)
      ctx.stroke()
    })
  }
}
