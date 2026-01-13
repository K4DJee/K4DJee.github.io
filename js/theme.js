const themeSwitch = document.querySelector('.theme-switcher');
const root = document.documentElement;
const currentTheme = localStorage.getItem('themeColor');
const currentBallsColor = '255,255,255';
function analyzeTheme (){
    if(!currentTheme){
        selectedTheme('dark');
    }
    else if(currentTheme === 'light'){
        selectedTheme('light');
    }
    else if(currentTheme === 'dark'){
        
    }
    else{
        selectedTheme('dark');
    }
}
function selectedTheme (theme){
    if(theme === 'dark'){
        // themeSwitch.style.left = '0';
        themeSwitch.style.transform = 'translateX(41.5px)';
        root.style.setProperty('--theme-bg', '#272121');
        root.style.setProperty('--theme-text', '#ffffff');
        root.style.setProperty('--theme-border', '#ffffff');
        root.style.setProperty('--theme-bg-mini-modal', '#343030');
        localStorage.setItem('themeColor', 'dark');
    }
    else if(theme === 'light'){
        // themeSwitch.style.left = '41.5px';
        themeSwitch.style.transform = 'translateX(41.5px)';
        root.style.setProperty('--theme-bg', '#ffffff');
        root.style.setProperty('--theme-text', '#272121');
        root.style.setProperty('--theme-border', '#272121');
        // root.style.setProperty('--theme-bg-mini-modal', '#a7a7a7');
        root.style.setProperty('--theme-bg-mini-modal', '#dedede');
        localStorage.setItem('themeColor', 'light');
        console.log(localStorage.getItem('themeColor', 'light'));
    }
}
function changeTheme(){
    const currentTheme = localStorage.getItem('themeColor');    
    if(currentTheme === 'light'){
        themeSwitch.style.transform = 'translateX(0)';
        // themeSwitch.style.left = '41.5px';
        root.style.setProperty('--theme-bg', '#272121');
        root.style.setProperty('--theme-text', '#ffffff');
        root.style.setProperty('--theme-border', '#ffffff');
        root.style.setProperty('--theme-bg-mini-modal', '#343030');
        localStorage.setItem('themeColor', 'dark');
        console.log('selected light', localStorage.getItem('themeColor'));
    }
    else if(currentTheme === 'dark'){
        themeSwitch.style.transform = 'translateX(41.5px)';
        // themeSwitch.style.left = '0';
        root.style.setProperty('--theme-bg', '#ffffff');
        root.style.setProperty('--theme-text', '#272121');
        root.style.setProperty('--theme-border', 'black');
        // root.style.setProperty('--theme-bg-mini-modal', '#a7a7a7');
        root.style.setProperty('--theme-bg-mini-modal', '#dedede');
        console.log('selected dark');
        localStorage.setItem('themeColor', 'light');
    }
}
window.onload = analyzeTheme;



