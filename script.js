const shapes = document.querySelectorAll('.shape');
const inputs = document.querySelector('.inputs');
const inputLabel = document.getElementById('inputLabel');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
const selectedShapeDisplay = document.getElementById('selectedShape');

let currentShape = '';

let backBtn = document.createElement('button');
backBtn.setAttribute("id", 'backBtn');
backBtn.textContent = 'Back';
backBtn.setAttribute("style", "display:none");

backBtn.addEventListener('click', () => {
    shapes.forEach(shape => {
        shape.setAttribute('style', 'display: flex;');
    });

    inputs.setAttribute('style', 'display: none;');
    selectedShapeDisplay.textContent = '';
    inputLabel.textContent = '';
    input1.value = '';
    input2.value = '';
    result.textContent = '';
    backBtn.setAttribute('style', 'display: none;');
});

inputs.append(backBtn);

shapes.forEach(shape => {
    shape.addEventListener('click', () => {
        currentShape = shape.getAttribute('data-shape');

        shapes.forEach(s => {
            if (s !== shape) {
                s.setAttribute('style', 'display: none;');
            }
        });

        inputs.setAttribute('style', 'display: block;');
        selectedShapeDisplay.textContent = `Selected Shape: ${currentShape}`;

        if (currentShape === 'triangle') {
            inputLabel.textContent = 'Enter base and height of the triangle:';
            input2.setAttribute('style', 'display: inline;');
            input1.setAttribute('placeholder', 'Enter base');
            input2.setAttribute('placeholder', 'Enter height');
        } else if (currentShape === 'circle') {
            inputLabel.textContent = 'Enter radius of the circle:';
            input2.setAttribute('style', 'display: none;');
            input1.setAttribute('placeholder', 'Enter radius');
        } else if (currentShape === 'square') {
            inputLabel.textContent = 'Enter side of the square:';
            input2.setAttribute('style', 'display: none;');
            input1.setAttribute('placeholder', 'Enter side');
        }

        input1.value = '';
        input2.value = '';
        result.textContent = '';
        backBtn.setAttribute('style', 'display: block;');
    });
});

calculateBtn.addEventListener('click', () => {
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    let area = 0;

    if (currentShape === 'triangle' && !isNaN(value1) && !isNaN(value2)) {
        area = 0.5 * value1 * value2;
        result.textContent = `The area of the triangle is ${area}`;
    } else if (currentShape === 'circle' && !isNaN(value1)) {
        area = Math.PI * value1 * value1;
        result.textContent = `The area of the circle is ${area.toFixed(2)}`;
    } else if (currentShape === 'square' && !isNaN(value1)) {
        area = value1 * value1;
        result.textContent = `The area of the square is ${area}`;
    } else {
        result.textContent = 'Please enter valid values!';
    }
});
