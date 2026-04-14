let tasto=document.querySelectorAll(".bottone");
let vis_x=document.querySelectorAll(".visualizzazione_x");
let vis_o=document.querySelectorAll(".visualizzazione_o");
let cont=0;

for(let i=0;i<tasto.length;i++)
{
    tasto[i].addEventListener("click",function(){
        if(cont %2===0)
        {
                vis_x[i].textContent="x";
                tasto[i].disabled = true; 
        }
        else
        {
                vis_o[i].textContent="o";
                tasto[i].disabled = true; 
        }
        cont++;    
    });
}