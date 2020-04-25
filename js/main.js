let scrollPos = 0
let active = 0
function showMenuText(el){
    let id = el.className.split(" ")[1]
    document.getElementById(id).style.display = "block"
}

function hideMenuText(el){
    let id = el.className.split(" ")[1]
    document.getElementById(id).style.display = "none"
}

function updateScrollIndicator(){
    updateScrollBar()
    whichDivOnScreen()
}

function updateScrollBar(){
    let scrollRatio = window.scrollY / (window.innerHeight * 6);
    document.getElementById("scroll-block").style.marginTop = scrollRatio * 240 + 'px';
}

function whichDivOnScreen(){
    icons = ["glyph-home", "glyph-about", "glyph-timeline", "glyph-skills", "glyph-projects", "glyph-contact"]
    texts = ["menu-text-home", "menu-text-about", "menu-text-timeline", "menu-text-skills", "menu-text-projects", "menu-text-contact"]
    scrollheight = window.scrollY
    windowheight = window.innerHeight
    if (scrollheight <= 0.5* windowheight -2){
        active = 0
    } else if (scrollheight < 1.5* windowheight -2){
        active = 1
    } else if (scrollheight < 2.5* windowheight -2){
        active = 2
    } else if (scrollheight < 3.5* windowheight -2){
        active = 3
    } else if (scrollheight < 4.5* windowheight -2){
        active = 4
    } else {
        active = 5
    }
    for (let i = 0; i < 6; i++){
        if (i == active){
            document.getElementById(icons[i]).style.fontSize = '30px'
            document.getElementById(icons[i]).style.margin = '5px'
            document.getElementById(texts[i]).style.display = 'block'
        } else {
            document.getElementById(icons[i]).style.fontSize = '20px'
            document.getElementById(icons[i]).style.margin = '10px'
            document.getElementById(texts[i]).style.display = 'none'
        }
    }
}




