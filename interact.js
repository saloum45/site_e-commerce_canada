let backtop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        backtop.style.opacity = "1";
    } else {
        backtop.style.opacity = "0";
    }
})


// side menu 
let menu_door = document.getElementById('menu-door');
menu_door.addEventListener('click', () => {
    let side_menu = document.getElementById('side-menu');
    if (side_menu.style.marginLeft == '-400px') {
        side_menu.style.marginLeft = "0";
    } else {
        side_menu.style.marginLeft = "-400px";
    }
})

// product sort

let items_d_grid = document.getElementById('items-d-grid');
let items_d_list = document.getElementById('items-d-list');

let list_button = document.querySelectorAll('#list-door');
let grid_button = document.querySelectorAll('#grid-door');

list_button.forEach(element => {
    
    element.addEventListener('click', () => {
        items_d_grid.classList.add('d-none');
        items_d_list.classList.remove('d-none');
    })
})
grid_button.forEach(element => {

    element.addEventListener('click', () => {
        items_d_list.classList.add('d-none');
        items_d_grid.classList.remove('d-none');
    })
})