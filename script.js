document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.classList.add('container');
  
    document.body.appendChild(container);
  
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
      }
    }
  });  