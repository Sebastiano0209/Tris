function Verifica_vittoria_x(controllo_x)
{
    if(controllo_x[0]=="x" && controllo_x[1]=="x" && controllo_x[2]=="x")
    {
        return 1;
    }
    if(controllo_x[0]=="x" && controllo_x[4]=="x" && controllo_x[8]=="x")
    {
        return 1;
    }
    if(controllo_x[0]=="x" && controllo_x[3]=="x" && controllo_x[6]=="x")
    {
        return 1;
    }
    if(controllo_x[3]=="x" && controllo_x[4]=="x" && controllo_x[5]=="x")
    {
        return 1;
    }
    if(controllo_x[6]=="x" && controllo_x[7]=="x" && controllo_x[8]=="x")
    {
        return 1;
    }
    if(controllo_x[1]=="x" && controllo_x[4]=="x" && controllo_x[7]=="x")
    {
        return 1;
    }
    if(controllo_x[2]=="x" && controllo_x[5]=="x" && controllo_x[8]=="x")
    {
        return 1;
    }
    if(controllo_x[2]=="x" && controllo_x[4]=="x" && controllo_x[6]=="x")
    {
        return 1;
    }
    return 0;
}
function Verifica_vittoria_o(controllo_o)
{
    if(controllo_o[0]=="o" && controllo_o[1]=="o" && controllo_o[2]=="o")
    {
        return 2;
    }
    if(controllo_o[0]=="o" && controllo_o[4]=="o" && controllo_o[8]=="o")
    {
        return 2;
    }
    if(controllo_o[0]=="o" && controllo_o[3]=="o" && controllo_o[6]=="o")
    {
        return 2;
    }
    if(controllo_o[3]=="o" && controllo_o[4]=="o" && controllo_o[5]=="o")
    {
        return 2;
    }
    if(controllo_o[6]=="o" && controllo_o[7]=="o" && controllo_o[8]=="o")
    {
        return 2;
    }
    if(controllo_o[1]=="o" && controllo_o[4]=="o" && controllo_o[7]=="o")
    {
        return 2;
    }
    if(controllo_o[2]=="o" && controllo_o[5]=="o" && controllo_o[8]=="o")
    {
        return 2;
    }
    if(controllo_o[2]=="o" && controllo_o[4]=="o" && controllo_o[6]=="o")
    {
        return 2;
    }
    return 0;
}



let tasto=document.querySelectorAll(".bottone");
let vis_x=document.querySelectorAll(".visualizzazione_x");
let vis_o=document.querySelectorAll(".visualizzazione_o");
let cont=0;
let vittoria_x=false;
let vittoria_o=false;
let controllo_x=["","","",
                "","","",
                "","",""
                ];
let controllo_o=["","","",
                "","","",
                "","",""
                ];

for(let i=0;i<tasto.length;i++)
{
    tasto[i].addEventListener("click",function(){
        if(vittoria_x==true)
        {
            return;
        }
        if(vittoria_o==true)
        {
            return;
        }
        if(cont %2===0)
        {
                vis_x[i].textContent="x";
                tasto[i].disabled = true; 
                controllo_x[i]="x";
                if(Verifica_vittoria_x(controllo_x)==1)
                {
                    vittoria_x=true;
                }
        }
        else
        {
                vis_o[i].textContent="o";
                tasto[i].disabled = true;
                controllo_o[i] = "o"; 
                if(Verifica_vittoria_o(controllo_o)==2)
                {
                    vittoria_o=true;
                } 
        }
        cont++;    
    });
}