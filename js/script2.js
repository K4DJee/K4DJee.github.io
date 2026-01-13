const sideBar = document.querySelector('.sidebar');
var isSideBar = false;
const sideBarBtn = document.querySelector('.sidebar-btn').addEventListener('click', ()=>{
    if(isSideBar === false){
        sideBar.classList.add('active');
        isSideBar = true;
        console.log('sidebar true')
    }
    else if(isSideBar === true){
        sideBar.classList.remove('active');
        isSideBar = false;
        console.log('sidebar false')
    }
});