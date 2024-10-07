        const colorPicker = document.getElementById('colorPicker');
        const palette = document.getElementById('palette');


        colorPicker.addEventListener('input', () => {
            const colorValue = colorPicker.value;
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = colorValue;
            colorBox.textContent = colorValue;
            palette.appendChild(colorBox);
        });
    