var sidenav = document.querySelector(".sidebar")
{
    function ShowNav()
    {
        sidenav.style.left=0
    }
    function closeNav()
    {
        sidenav.style.left="-60%";
    }
}
function scrollDown() {
    window.scrollBy({
        top: 675, 
        behavior: "smooth"
    });
}
