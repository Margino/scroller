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

        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner.children) /*yt */

        scrollerContent.forEach(item => {
            const duplicateItem = item.cloneNode(true)
            duplicateItem.setAttribute('aria-hidden', true)
            scrollerInner.appendChild(duplicateItem)
        })

    })
}
