let theme=document.getElementById("theme")
let button=document.getElementById("button");
let content=document.getElementById("content");
function darktheme()
{
    theme.classList.toggle("body");
    button.classList.toggle("button")
    if(button.innerHTML=="Light Mode")
    {
        button.innerHTML="Dark Mode"
        content.innerHTML="Click Dark Mode to get dark theme";
    }
    else
    {
        button.innerHTML="Light Mode";
        content.innerHTML="Click Ligth Mode to get light theme"
}
}