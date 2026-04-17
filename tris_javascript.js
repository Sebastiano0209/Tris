// funzioni schermo condiviso

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







// ------------------------------------------------------------------------------------
// menù

let menù=document.getElementById("menù");
let gioco_1=document.getElementById("gioco1");
let gioco_2=document.getElementById("gioco2");
let scelta_1=document.getElementById("scelta1");
let scelta_2=document.getElementById("scelta2");
let titolo_sc=document.getElementById("titolo_sc");

scelta_1.addEventListener("click",function(){
    menù.style.display = "none";
    gioco_1.style.display = "block";
    titolo_sc.style.display = "block";

    // ------------------------------------------------------------------------------------
    // schermo condiviso

    let h1_sc=document.querySelectorAll(".h1_sc");

    let tasto=document.querySelectorAll(".bottone");
    let vis_x=document.querySelectorAll(".visualizzazione_x");
    let vis_o=document.querySelectorAll(".visualizzazione_o");
    let vt = document.getElementById("vittoria");
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
                vis_x[i].style.color="blue";
                tasto[i].disabled = true; 
                controllo_x[i]="x";
                if(Verifica_vittoria_x(controllo_x)==1)
                {
                    vt.textContent="vittoria x";
                    vittoria_x=true;
                }
            }
            else
            {
                    vis_o[i].textContent="o";
                    vis_o[i].style.color="red";
                    tasto[i].disabled = true;
                    controllo_o[i] = "o"; 
                    if(Verifica_vittoria_o(controllo_o)==2)
                    {
                        vt.textContent="vittoria o";
                        vittoria_o=true;
                    } 
            }
            cont++;    
            if(cont % 2 === 0){
                h1_sc[0].textContent = "Turno X";
                h1_sc[0].style.color="blue";
            }           
            else 
            {
                h1_sc[0].textContent = "Turno O";
                h1_sc[0].style.color="red";
            }
        });
    }
});
scelta_2.addEventListener("click",function(){
    menù.style.display = "none";
    gioco_2.style.display = "block";

    // ------------------------------------------------------------------------------------
    // gioco contro il computer
    
    let tasto_cpu=document.querySelectorAll(".bottone_cpu");
    let vis_x_cpu=document.querySelectorAll(".visualizzazione_x_cpu");
    let vis_o_cpu=document.querySelectorAll(".visualizzazione_o_cpu");
    let vit = document.getElementById("vittoria");
    let ncasuale=0;
    let n=0;
    let controllocasuale=[0,0,0,0,0,0,0,0,0];
    let vittoria_x_cpu=false;
    let vittoria_o_cpu=false;
    let controllo_x_cpu=["","","",
                        "","","",
                        "","",""
                        ];
    let controllo_o_cpu=["","","",
                        "","","",
                        "","",""
                        ];


    for(let i=0;i<tasto_cpu.length;i++)
    {
        tasto_cpu[i].addEventListener("click",function(){
            if (controllocasuale[i] === 1) 
            {
                return;
            }
            vis_x_cpu[i].textContent="x";
            tasto_cpu[i].disabled = true;
            controllocasuale[i]=1; 
            controllo_x_cpu[i]="x";
            if(Verifica_vittoria_x(controllo_x_cpu)==1)
            {
                vit.textContent="vittoria x";
                vittoria_x_cpu=true;
                return;
            }
            do{
                n=0;
                ncasuale=Math.floor(Math.random()*9);
                if(controllocasuale[ncasuale]!=0)
                {
                    n=1;
                }
            }while(n==1);
            vis_o_cpu[ncasuale].textContent="o";
            tasto_cpu[ncasuale].disabled = true;
            controllo_o_cpu[ncasuale] = "o"; 
            controllocasuale[ncasuale]=1;
            if(Verifica_vittoria_o(controllo_o_cpu)==2)
            {
                vit.textContent="vittoria o";
                vittoria_o_cpu=true;
                return;
            }    
        });
    }
});