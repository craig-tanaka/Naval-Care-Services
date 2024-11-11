const colorModeSliderCont = document.querySelector('.color-mode-slider-cont')

colorModeSliderCont.addEventListener('click', (event) => {
        if (colorModeSliderCont.classList.contains('light')) {
                //switch classlist on body
                document.querySelector('body').classList.remove('light')
                document.querySelector('body').classList.add('dark')
                //switch classlist on colorModeSwitcherContainer
                colorModeSliderCont.classList.remove('light')
                colorModeSliderCont.classList.add('dark')
        } else {
                //switch classlist on body
                document.querySelector('body').classList.remove('dark')
                document.querySelector('body').classList.add('light')
                //switch classlist on colorModeSwitcherContainer
                colorModeSliderCont.classList.remove('dark')
                colorModeSliderCont.classList.add('light')
        }
})