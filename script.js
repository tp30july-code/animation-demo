const hill1 = document.getElementById("hill1");
const hill2 = document.getElementById("hill2");
const hill3 = document.getElementById("hill3");
const tree = document.getElementById("tree");
const leaf = document.getElementById("leaf");
const title = document.getElementById("title");

window.addEventListener("scroll" , ()=>{
    let value = window.scrollY;

    title.style.marginTop = value * 1.1 + "px";

    hill1.style.bottom = -value*2+"px";
    hill2.style.left = value * -1.5+"px";
    hill3.style.right = value * -1.5+"px";

    leaf.style.top = value*-1.5+"px";
    leaf.style.left = value * 1.5+"px";

})