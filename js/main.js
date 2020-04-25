function showMenuText(el){
    id = el.className.split(" ")[1]
    document.getElementById(id).style.display = "block"
}

function hideMenuText(el){
    id = el.className.split(" ")[1]
    document.getElementById(id).style.display = "none"
}

function updateScrollIndicator(el){
    console.log(window.innerHeight)
    console.log(window.scrollY)
    scrollRatio = window.scrollY / (window.innerHeight * 6);
    document.getElementById("scroll-block").style.marginTop = scrollRatio * 240 + 'px';
}

