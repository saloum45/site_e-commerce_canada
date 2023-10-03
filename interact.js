let backtop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        backtop.style.opacity="1";
    } else {
        backtop.style.opacity="0";
    }
})


// side menu 
let menu_door=document.getElementById('menu-door');
menu_door.addEventListener('click',()=>{
    let side_menu=document.getElementById('side-menu');
    if (side_menu.style.marginLeft=='-400px') {
        
        side_menu.style.marginLeft="0";
    }else{

        side_menu.style.marginLeft="-400px";
    }
})