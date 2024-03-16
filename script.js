const canvas = document.getElementById('myCanvas')

const defaultScale = 1
const defaultDimesionDivider = 1.5

const ctx = canvas.getContext('2d')
const grid = new Grid()

animate()

function animate(){ 
  
  const minDimension = window.innerWidth <= window.innerHeight ?  window.innerWidth : window.innerHeight

  // use para escalabilidade inversa:
  // const maxDimension = window.innerWidth >= window.innerHeight ?  window.innerWidth : window.innerHeight
  
  canvas.width = Math.floor(minDimension / defaultDimesionDivider) * defaultScale
  canvas.height = Math.floor(minDimension / defaultDimesionDivider) * defaultScale
  grid.draw(ctx)

  requestAnimationFrame(animate)
} 