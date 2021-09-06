hexCode = () => {
    const hexCode = document.getElementById('hex-code');
    let symbols = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let bgColor = "#"
    for (let i = 0; i < 6; i++){
        bgColor = bgColor + symbols[Math.floor(Math.random()*16)]
    }
    hexCode.style.backgroundColor = bgColor
    document.getElementById('code').innerText = bgColor
}

rgb = () => {
    const rgbCode = document.getElementById('rgb-code')
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const bgColor = `rgb(${red},${green},${blue})`
    rgbCode.style.background = bgColor;
    document.getElementById('code').innerText = bgColor
}
rgba = () => {
    const rgbaCode = document.getElementById('rgba-code')
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const opacity = + Math.random().toFixed(1);

    const bgColor = `rgb(${red},${green},${blue}, ${opacity})`
    rgbaCode.style.background = bgColor;
    document.getElementById('code').innerText = bgColor
}