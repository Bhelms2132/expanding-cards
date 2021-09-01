const panels = document.querySelectorAll('.panel')

//--Loops Through Panels--//
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
