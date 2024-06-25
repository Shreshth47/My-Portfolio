let preloader=document.getElementById("loader")
window.addEventListener("load", ()=>{
    preloader.style.display="none";
})

let menuList = document.getElementById('nav-items');
menuList.style.maxHeight = '0px';

function toggleMenu(){
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '100vh';
    }else{
        menuList.style.maxHeight = '0px';
    }
}

function closeMenu(){
    menuList.style.maxHeight = '0px'
}