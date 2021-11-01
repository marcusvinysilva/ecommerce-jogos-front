function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode();        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        window.history.go(0);
     }
     document.body.appendChild(btn);    
}

createButton();


