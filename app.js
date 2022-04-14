const btn = document.querySelector("small")

btn.addEventListener('click', randomColorPicker)

function randomColorPicker(){

    const values = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
      ]
    
      function randomColor(){
    
          let color = '#'
          for (let i=0; i<6; i++) {
              const randomNumber = Math.floor(Math.random() * values.length)
              const randomColor = values[randomNumber]
              color += randomColor
          }
          return color
      }
    
      const color1 = randomColor()
      const color2 = randomColor()
    
      console.log(color1, color2);
    
      document.querySelector('body').style.background = `linear-gradient(${color1}, ${color2})`

      document.querySelector('.color-text').textContent = `linear-gradient(${color1}, ${color2})`;
}