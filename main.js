import p5 from 'p5'

const rects = [
  [60, 20, 80, 20], // A
  [140, 40, 20, 100], // B
  [140, 160, 20, 100], // C
  [60, 260, 80, 20], // D
  [40, 160, 20, 100], // E
  [40, 40, 20, 100], // F
  [60, 140, 80, 20], // G
]

const numbers = {
  0: 0b1111110,
  1: 0b0110000,
  2: 0b1101101,
  3: 0b1111001,
  4: 0b0110011,
  5: 0b1011011,
  6: 0b1011111,
  7: 0b1110000,
  8: 0b1111111,
  9: 0b1111011,
}

const p = new p5(s => {
  s.setup = () => {
    document.querySelector('#input').addEventListener('input', e => {
      const { value } = e.target
      s.sevenSegentDisplay(value)
    })
    s.createCanvas(200, 300)
  }
  s.sevenSegentDisplay = input => {
    if (typeof input === 'number') {
    } else if (typeof input == 'string') {
      s.drawSSD(input)
    } else {
    }
  }

  s.drawSSD = input => {
    if (s.autobinary) input = `0b${input}`
    input = Number(input)

    rects.map((e, i) => {
      if ((input >>> i) % 2 === 0) {
        s.fill(200)
      } else {
        s.fill(250, 0, 0)
      }
      s.rect(...e)
    })
  }
}, document.getElementById('canvas'))
