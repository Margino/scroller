// все скроллеры
const scrollers = document.querySelectorAll('.scroller')
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

// юзер хочет анимацию?
if (!reduceMotion.matches) {
    addAnimation()
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)
    })
}
