const boxes = document.querySelectorAll('.box')
const image = document.querySelector(".image")

boxes.forEach(box => {
    box.addEventListener("dragover", e =>{
        e.preventDefault()
        box.classList.add('hovered')
        image.style.opacity = 0.5
    })

    box.addEventListener('dragleave', () => {
        box.classList.remove('hovered')
        image.style.opacity = 0.5
    })

    box.addEventListener('drop', ()=>{
        box.appendChild(image)
        image.style.opacity = 1
    })
})