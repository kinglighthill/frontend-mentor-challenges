let checkbox = document.querySelector("input")

checkbox.addEventListener('change', () => {
    let annualPrices = document.querySelectorAll('.annually')    
    let monthlyPrices = document.querySelectorAll('.monthly')
    
    annualPrices.forEach(price => {
        price.classList.toggle('gone')
    })

    monthlyPrices.forEach(price => {
        price.classList.toggle('gone')
    })
})