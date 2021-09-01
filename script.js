const panels = document.querySelectorAll('.panel')

//--Loops Through Panels--//
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

//Loops through and removes active classes
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}