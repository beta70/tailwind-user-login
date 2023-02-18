const toggleProfileMenu = () => {

    const nav = document.querySelector('[data-nav]')
    if (!nav) return
    
    const menuButton = nav.querySelector('[data-profile-button]')
    const menu = nav.querySelector('[data-profile-menu]')
    if (!menuButton || !menu) return

    
    menuButton.addEventListener('click', () => {
        const menuState = menu.getAttribute('data-menu-state')
        
        menu.classList.toggle('hidden')
        menuButton.setAttribute('aria-expanded', menuState === 'closed' ? true : false )
        menu.setAttribute('data-menu-state', menuState === 'closed' ? 'open' : 'closed')

    })
    
}

toggleProfileMenu()