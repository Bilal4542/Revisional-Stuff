 const hamburger = document.querySelector('.hamburger')
        const navLinks = document.querySelector('.links')

        const showMenu = () => {
            navLinks.classList.add('active')
        }

        hamburger.addEventListener('click', showMenu)