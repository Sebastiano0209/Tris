// funzioni schermo condiviso

function Verifica_vittoria_x(controllo_x,tasto,vis_x)
{
    if(controllo_x[0]=="x" && controllo_x[1]=="x" && controllo_x[2]=="x")
    {
        tasto[0].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[1].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[2].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[0].style.border = "0";
        tasto[1].style.border = "0";
        tasto[2].style.border = "0";

        vis_x[0].style.color = "white";
        vis_x[1].style.color = "white";
        vis_x[2].style.color = "white";

        return 1;
    }
    if(controllo_x[0]=="x" && controllo_x[4]=="x" && controllo_x[8]=="x")
    {
        tasto[0].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[8].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[0].style.border = "0";
        tasto[4].style.border = "0";
        tasto[8].style.border = "0";

        vis_x[0].style.color = "white";
        vis_x[4].style.color = "white";
        vis_x[8].style.color = "white";
        return 1;   
    }
    if(controllo_x[0]=="x" && controllo_x[3]=="x" && controllo_x[6]=="x")
    {
        tasto[0].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[3].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[6].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[0].style.border = "0";
        tasto[3].style.border = "0";
        tasto[6].style.border = "0";

        vis_x[0].style.color = "white";
        vis_x[3].style.color = "white";
        vis_x[6].style.color = "white";
        return 1;
    }
    if(controllo_x[3]=="x" && controllo_x[4]=="x" && controllo_x[5]=="x")
    {
        tasto[3].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[5].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[3].style.border = "0";
        tasto[4].style.border = "0";
        tasto[5].style.border = "0";

        vis_x[3].style.color = "white";
        vis_x[4].style.color = "white";
        vis_x[5].style.color = "white";
        return 1;
    }
    if(controllo_x[6]=="x" && controllo_x[7]=="x" && controllo_x[8]=="x")
    {
        tasto[6].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[7].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[8].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[6].style.border = "0";
        tasto[7].style.border = "0";
        tasto[8].style.border = "0";

        vis_x[6].style.color = "white";
        vis_x[7].style.color = "white";
        vis_x[8].style.color = "white";
        return 1;
    }
    if(controllo_x[1]=="x" && controllo_x[4]=="x" && controllo_x[7]=="x")
    {
        tasto[1].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[7].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[1].style.border = "0";
        tasto[4].style.border = "0";
        tasto[7].style.border = "0";

        vis_x[1].style.color = "white";
        vis_x[4].style.color = "white";
        vis_x[7].style.color = "white";
        return 1;
    }
    if(controllo_x[2]=="x" && controllo_x[5]=="x" && controllo_x[8]=="x")
    {
        tasto[2].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[5].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[8].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[2].style.border = "0";
        tasto[5].style.border = "0";
        tasto[8].style.border = "0";

        vis_x[2].style.color = "white";
        vis_x[5].style.color = "white";
        vis_x[8].style.color = "white";
        return 1;
    }
    if(controllo_x[2]=="x" && controllo_x[4]=="x" && controllo_x[6]=="x")
    {
        tasto[2].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[6].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[2].style.border = "0";
        tasto[4].style.border = "0";
        tasto[6].style.border = "0";

        vis_x[2].style.color = "white";
        vis_x[4].style.color = "white";
        vis_x[6].style.color = "white";
        return 1;
    }
    return 0;
}

function Verifica_vittoria_o(controllo_o,tasto,vis_o)
{
    if(controllo_o[0]=="o" && controllo_o[1]=="o" && controllo_o[2]=="o")
    {
        tasto[0].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[1].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[2].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[0].style.border = "0";
        tasto[1].style.border = "0";
        tasto[2].style.border = "0";

        vis_o[0].style.color = "white";
        vis_o[1].style.color = "white";
        vis_o[2].style.color = "white";
        return 2;
    }
    if(controllo_o[0]=="o" && controllo_o[4]=="o" && controllo_o[8]=="o")
    {
        tasto[0].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[8].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[0].style.border = "0";
        tasto[4].style.border = "0";
        tasto[8].style.border = "0";

        vis_o[0].style.color = "white";
        vis_o[4].style.color = "white";
        vis_o[8].style.color = "white";
        return 2;
    }
    if(controllo_o[0]=="o" && controllo_o[3]=="o" && controllo_o[6]=="o")
    {
        tasto[0].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[3].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[6].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[0].style.border = "0";
        tasto[3].style.border = "0";
        tasto[6].style.border = "0";

        vis_o[0].style.color = "white";
        vis_o[3].style.color = "white";
        vis_o[6].style.color = "white";
        return 2;
    }
    if(controllo_o[3]=="o" && controllo_o[4]=="o" && controllo_o[5]=="o")
    {
        tasto[3].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[5].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[3].style.border = "0";
        tasto[4].style.border = "0";
        tasto[5].style.border = "0";

        vis_o[3].style.color = "white";
        vis_o[4].style.color = "white";
        vis_o[5].style.color = "white";
        return 2;
    }
    if(controllo_o[6]=="o" && controllo_o[7]=="o" && controllo_o[8]=="o")
    {
        tasto[6].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[7].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[8].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[6].style.border = "0";
        tasto[7].style.border = "0";
        tasto[8].style.border = "0";

        vis_o[6].style.color = "white";
        vis_o[7].style.color = "white";
        vis_o[8].style.color = "white";
        return 2;
    }
    if(controllo_o[1]=="o" && controllo_o[4]=="o" && controllo_o[7]=="o")
    {
        tasto[1].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[7].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[1].style.border = "0";
        tasto[4].style.border = "0";
        tasto[7].style.border = "0";

        vis_o[1].style.color = "white";
        vis_o[4].style.color = "white";
        vis_o[7].style.color = "white";
        return 2;
    }
    if(controllo_o[2]=="o" && controllo_o[5]=="o" && controllo_o[8]=="o")
    {
        tasto[2].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[5].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[8].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[2].style.border = "0";
        tasto[5].style.border = "0";
        tasto[8].style.border = "0";

        vis_o[2].style.color = "white";
        vis_o[5].style.color = "white";
        vis_o[8].style.color = "white";
        return 2;
    }
    if(controllo_o[2]=="o" && controllo_o[4]=="o" && controllo_o[6]=="o")
    {
        tasto[2].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[4].style.backgroundColor = "rgb(37, 255, 17)";
        tasto[6].style.backgroundColor = "rgb(37, 255, 17)";

        tasto[2].style.border = "0";
        tasto[4].style.border = "0";
        tasto[6].style.border = "0";

        vis_o[2].style.color = "white";
        vis_o[4].style.color = "white";
        vis_o[6].style.color = "white";
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
let titolo_gc=document.getElementById("titolo_gc");

scelta_1.addEventListener("click",function(){
    menù.style.display = "none";
    gioco_1.style.display = "block";
    titolo_sc.style.display = "block";
    
    // ------------------------------------------------------------------------------------
    // schermo condiviso

    let h1_sc=document.querySelectorAll(".h1_sc");
    let sect2_1_sc=document.querySelectorAll(".sect2_1_sc")[0];
    let sect2_2_sc=document.querySelectorAll(".sect2_2_sc")[0];
    let sect2_3_sc=document.querySelectorAll(".sect2_3_sc")[0];
    let cont_sect2_1_sc=0;
    let cont_sect2_2_sc=0;
    let cont_sect2_3_sc=0;

    let n=0;
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
    
    let reset= document.getElementById("reset");
    let home= document.getElementById("home");
    
    //-------------------------------------------------------------------------------------
    // funzione reset
    function ResetPartita()
    {
        vittoria_x=false;
        vittoria_o=false;
        cont=0;

        for(let j=0;j<9;j++)
        {
            vis_x[j].textContent="";
            vis_o[j].textContent="";

            controllo_x[j]="";
            controllo_o[j]="";
            tasto[j].disabled = false;

            tasto[j].style.backgroundColor = "";
            vis_x[j].style.backgroundColor = "";
            vis_o[j].style.backgroundColor = "";

            vis_x[j].style.color = "";
            vis_o[j].style.color = "";

            tasto[j].style.border = "";

            tasto[j].style.padding = "";
            vis_x[j].style.padding = "";
            vis_o[j].style.padding = "";
        }

        h1_sc[0].textContent = "Turno X";
        h1_sc[0].style.color = "blue";
    }

    //------------------------------------------------------------

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
                if(Verifica_vittoria_x(controllo_x,tasto,vis_x)==1)
                {
                    vittoria_x=true;
                    cont_sect2_1_sc++;
                    h1_sc[0].textContent = "Vittoria X";
                    h1_sc[0].style.color="blue";
                    sect2_1_sc.textContent="Giocatore 1(X): "+ cont_sect2_1_sc;
                    n=1;
                }
            }
            else
            {
                vis_o[i].textContent="o";
                vis_o[i].style.color="red";
                tasto[i].disabled = true;
                controllo_o[i] = "o"; 
                if(Verifica_vittoria_o(controllo_o,tasto,vis_o)==2)
                {
                    vittoria_o=true;
                    cont_sect2_3_sc++;
                    h1_sc[0].textContent = "Vittoria O";
                    h1_sc[0].style.color="red";
                    sect2_3_sc.textContent="Giocatore 2(O):"+ cont_sect2_3_sc;
                    n=1;
                } 
            }
            cont++;    
            if(n==0)
            {
                if(
                    tasto[0].disabled && tasto[1].disabled && tasto[2].disabled &&
                    tasto[3].disabled && tasto[4].disabled && tasto[5].disabled &&
                    tasto[6].disabled && tasto[7].disabled && tasto[8].disabled
                )
                {
                    h1_sc[0].textContent = "Pareggio";
                    h1_sc[0].style.color = "black";
                    cont_sect2_2_sc++; 
                    sect2_2_sc.textContent = "Pareggi: " + cont_sect2_2_sc;
                }
            }
            else
            {
                n=0;
            }
        });
    }
    reset.addEventListener("click",ResetPartita);

    home.addEventListener("click",function(){
        gioco_1.style.display = "none";
        titolo_sc.style.display = "none";
        menù.style.display = "block";
    });
});
scelta_2.addEventListener("click",function(){
    menù.style.display = "none";
    gioco_2.style.display = "block";
    titolo_gc.style.display = "block";

    // ------------------------------------------------------------------------------------
    // gioco contro il computer
    
    let h1_gc=document.querySelectorAll(".h1_gc");
    let sect2_1_gc=document.querySelectorAll(".sect2_1_gc")[0];
    let sect2_2_gc=document.querySelectorAll(".sect2_2_gc")[0];
    let sect2_3_gc=document.querySelectorAll(".sect2_3_gc")[0];
    let cont_sect2_1_gc=0;
    let cont_sect2_2_gc=0;
    let cont_sect2_3_gc=0;

    let tasto_cpu=document.querySelectorAll(".bottone_cpu");
    let vis_x_cpu=document.querySelectorAll(".visualizzazione_x_cpu");
    let vis_o_cpu=document.querySelectorAll(".visualizzazione_o_cpu");
    let vit = document.getElementById("vittoria");
    let ncasuale=0;
    let n_cpu=0;
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
    
    let reset_gc= document.getElementById("reset_gc");
    let home_gc= document.getElementById("home_gc");

    //-------------------------------------------------------------------------------------
    // funzione reset

    function ResetPartita_gc()
    {
        vittoria_x_cpu = false;
        vittoria_o_cpu = false;

        n_cpu = 0;
        n = 0;

        for(let j=0; j<9; j++)
        {
            controllocasuale[j] = 0;

            vis_x_cpu[j].textContent = "";
            vis_o_cpu[j].textContent = "";

            controllo_x_cpu[j] = "";
            controllo_o_cpu[j] = "";

            tasto_cpu[j].disabled = false;

            tasto_cpu[j].style.backgroundColor = "";
            vis_x_cpu[j].style.backgroundColor = "";
            vis_o_cpu[j].style.backgroundColor = "";

            vis_x_cpu[j].style.color = "";
            vis_o_cpu[j].style.color = "";

            tasto_cpu[j].style.border = "";
            tasto_cpu[j].style.padding = "";
            vis_x_cpu[j].style.padding = "";
            vis_o_cpu[j].style.padding = "";
        }

        h1_gc[0].textContent = "Turno X";
        h1_gc[0].style.color = "blue";
    }


    //------------------------------------------------------------
    for(let i=0;i<tasto_cpu.length;i++)
    {
        tasto_cpu[i].addEventListener("click",function(){
            if (controllocasuale[i] === 1) 
            {
                return;
            }
            vis_x_cpu[i].textContent="x";
            vis_x_cpu[i].style.color="blue";
            tasto_cpu[i].disabled = true;
            controllocasuale[i]=1; 
            controllo_x_cpu[i]="x";
            if(Verifica_vittoria_x(controllo_x_cpu,tasto_cpu,vis_x_cpu)==1)
            {
                vittoria_x_cpu=true;
                cont_sect2_1_gc++;
                h1_gc[0].textContent="Vittoria X";
                h1_gc[0].style.color="blue";
                sect2_1_gc.textContent="Giocatore 1(X): "+ cont_sect2_1_gc;
                n_cpu++;
                return;
            }

            let caselle_occupate = 0;
            for (let j = 0; j < 9; j++) {
                if (tasto_cpu[j].disabled == true) {
                    caselle_occupate++;
                }
            }
            if (caselle_occupate == 9 && vittoria_x_cpu == false) {
                h1_gc[0].textContent = "Pareggio";
                h1_gc[0].style.color = "black";
                
                cont_sect2_2_gc++;
                sect2_2_gc.textContent = "Pareggi: " + cont_sect2_2_gc;
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
            vis_o_cpu[ncasuale].style.color="red";
            tasto_cpu[ncasuale].disabled = true;
            controllo_o_cpu[ncasuale] = "o"; 
            controllocasuale[ncasuale]=1;
            if(Verifica_vittoria_o(controllo_o_cpu,tasto_cpu,vis_o_cpu)==2)
            {
                vittoria_o_cpu=true;
                cont_sect2_3_gc++;
                h1_gc[0].textContent="Vittoria O";
                h1_gc[0].style.color="red";
                sect2_3_gc.textContent="Giocatore 2(O):"+ cont_sect2_3_gc;
                n_cpu++;
                return;
            }
            if(
                tasto_cpu[0].disabled && tasto_cpu[1].disabled && tasto_cpu[2].disabled &&
                tasto_cpu[3].disabled && tasto_cpu[4].disabled && tasto_cpu[5].disabled &&
                tasto_cpu[6].disabled && tasto_cpu[7].disabled && tasto_cpu[8].disabled
            )
            {
                if(!vittoria_x_cpu && !vittoria_o_cpu)
                {
                    h1_gc[0].textContent = "Pareggio";
                    h1_gc[0].style.color = "black";

                    cont_sect2_2_gc++;
                    sect2_2_gc.textContent = "Pareggi: " + cont_sect2_2_gc;

                    return;
                }
            }
        });
    }

    reset_gc.addEventListener("click",ResetPartita_gc);
    
    home_gc.addEventListener("click",function(){
        gioco_2.style.display = "none";
        titolo_gc.style.display = "none";
        menù.style.display = "block";
    });
});