var coll = document.getElementsByClassName("Collapsible");
var i;

for(i = 0; i < coll.length; i++)
{
  coll[i].addEventListener("click",function()
  { // Funtions stuff here
    this.classList.toggle("Active");
    var content = this.nextElementSibling;

    if(content.style.maxHeight)
    {
      content.style.maxHeight = null;
    }
    else
    {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
