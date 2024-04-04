const sidebar = document.querySelector('#sidebar')
const xett1 = document.querySelector('#xett1')
const xett2 = document.querySelector('#xett2')
const sidebarmenu2 = document.querySelector('.sidebar-menu-2')
const sidebarmenu3 = document.querySelector('.sidebar-menu-3')
const sideicon1 = document.querySelector('#sideicon1')
const sideicon2 = document.querySelector('#sideicon2')
const sidebarMenuContent = document.querySelector('#sidebar-menu-content')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
let sideX = 1
let sideY = 1
let sideJ = 1
function navMenuBtn(){
    sideX++
    if(sideX % 2 == 0){
        main.style.display = 'none'
        footer.style.display = 'none'
        sidebar.style.transform = 'translateX(0)' 
        sidebar.style.height = '110vh' 
        sidebar.style.padding = '50px 0' 
        xett1.style.transform = 'rotate(49deg)'
        xett1.style.width = '30px'
        xett1.style.marginBottom = '0px'
        xett2.style.transform = 'rotate(-49deg)'
        xett2.style.width = '30px'
    }else{
        main.style.display = 'block'
        footer.style.display = 'block'
        sidebar.style.transform = 'translateX(-300%)'
        sidebar.style.height = '0px' 
        sidebar.style.padding = ' 0' 
        xett1.style.transform = 'rotate(0)'
        xett1.style.width = '27px'
        xett1.style.marginBottom = '5px'
        xett2.style.transform = 'rotate(0)'
        xett2.style.width = '27px'
    }
}
function sidebarDrop(){
    sideY++
    if(sideY % 2 == 0){
        sidebarmenu2.style.visibility = 'visible'
        sidebarmenu2.style.height = 'auto'
        sidebarmenu2.style.padding = '20px 0 0 10px'
        sidebarmenu2.style.transition = '.4s'
        sidebarmenu3.style.visibility = 'visible'
        sidebarmenu3.style.height = 'auto'
        sideicon1.style.transform = 'rotate(180deg)'
    }else{
        sidebarmenu2.style.visibility = 'hidden'
        sidebarmenu2.style.height = '0'
        sidebarmenu2.style.padding = '0'
        sidebarmenu2.style.transition = '0.0s'
        sidebarmenu3.style.visibility = 'hidden'
        sidebarmenu3.style.height = '0'
        sideicon1.style.transform = 'rotate(0)'
        sidebarMenuContent.style.visibility = 'hidden' 
        sidebarMenuContent.style.height = '0' 
        sidebarMenuContent.style.padding = '0' 
        sidebarMenuContent.style.transition = '0.0s' 
    }
}
function sideBarDropContent(){
    sideJ++
    if(sideJ % 2 == 0){
        sidebarMenuContent.style.visibility = 'visible' 
        sidebarMenuContent.style.height = 'auto' 
        sidebarMenuContent.style.padding = '20px 10px' 
        sidebarMenuContent.style.transition = '.4s' 
        sideicon2.style.transform = 'rotate(180deg)'
    }else{
        sidebarMenuContent.style.visibility = 'hidden' 
        sidebarMenuContent.style.height = '0' 
        sidebarMenuContent.style.padding = '0' 
        sidebarMenuContent.style.transition = '0.0s' 
        sideicon2.style.transform = 'rotate(0)'
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });