// funzioni schermo condiviso
function ApplicaFiltro_Verifica_vittoria_x(tasto,vis_x_o,a,b,c,cella)
{
    tasto[a].style.backgroundColor = "#ffba38";
    tasto[b].style.backgroundColor = "#ffba38";
    tasto[c].style.backgroundColor = "#ffba38";

    cella[a].style.backgroundColor = "#ffba38";
    cella[b].style.backgroundColor = "#ffba38";
    cella[c].style.backgroundColor = "#ffba38";

    tasto[a].style.border = "0";
    tasto[b].style.border = "0";
    tasto[c].style.border = "0";

    vis_x_o[a].style.color = "white";
    vis_x_o[b].style.color = "white";
    vis_x_o[c].style.color = "white";
}
function Verifica_vittoria(controllo, tasto, vis, cella, simbolo, valoreRitorno)
{
    const win = [
        [0,1,2],[0,4,8],[0,3,6],
        [3,4,5],[6,7,8],
        [1,4,7],[2,5,8],[2,4,6]
    ];

    for(let i=0;i<win.length;i++)
    {
        let a = win[i][0];
        let b = win[i][1];
        let c = win[i][2];

        if(controllo[a]==simbolo && controllo[b]==simbolo && controllo[c]==simbolo)
        {
            ApplicaFiltro_Verifica_vittoria_x(tasto,vis,a,b,c,cella);
            return valoreRitorno;
        }
    }

    return 0;
}

//-------------------------------------------------------------------------------------------------------------
//funzione Minimax

function ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,m,controllocasuale)
{
    vis_o_cpu[m].textContent="o";
    vis_o_cpu[m].style.color="red";
    tasto_cpu[m].disabled = true;
    controllo_o_cpu[m] = "o"; 
    controllocasuale[m] = 1;
}
function Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,controllo_x_cpu,controllocasuale,ncasuale,n)
{
    let PosizioniVincenti = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];
    let mossafatta=0;

    for(let posizione of PosizioniVincenti)
    {
        let [a,b,c]= posizione;
        if(controllo_o_cpu[a]=="o" && controllo_o_cpu[b]=="o" && controllo_o_cpu[c]==""  &&  tasto_cpu[c].disabled == false)
        {
            ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,c,controllocasuale);
            //mossafatta=1;
            return;
        }
        if(controllo_o_cpu[a]=="o" && controllo_o_cpu[c]=="o" && controllo_o_cpu[b]=="" &&  tasto_cpu[b].disabled == false)
        {
            ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,b,controllocasuale);
            //mossafatta=1;
            return;
        }
        if(controllo_o_cpu[b]=="o" && controllo_o_cpu[c]=="o" && controllo_o_cpu[a]=="" &&  tasto_cpu[a].disabled == false)
        {
            ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,a,controllocasuale);
            //mossafatta=1; 
            return;
        }
    }
    if (mossafatta==0) 
    {
        for (let posizione of PosizioniVincenti) {
            let [a, b, c] = posizione;

            if (controllo_x_cpu[a]=="x" && controllo_x_cpu[b]=="x" && controllo_o_cpu[c]=="" && controllo_x_cpu[c]=="") 
            { 
                ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,c,controllocasuale);
                //mossafatta=1; 
                return;
            }
            if (controllo_x_cpu[a]=="x" && controllo_x_cpu[c]=="x" && controllo_o_cpu[b]=="" && controllo_x_cpu[b]=="") 
            {  
                ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,b,controllocasuale);
                mossafatta=1; 
                return;
            }
            if (controllo_x_cpu[b]=="x" && controllo_x_cpu[c]=="x" && controllo_o_cpu[a]=="" && controllo_x_cpu[a]=="") 
            { 
                ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,a,controllocasuale);
                //mossafatta=1; 
                return;
            }
        }
    }
    if (mossafatta==0) 
    {
        do{
            n=0;
            ncasuale=Math.floor(Math.random()*9);
            if(controllocasuale[ncasuale]!=0)
            {
                n=1;
            }
        }while(n==1);
        ApplicaFiltro_Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,ncasuale,controllocasuale);
        controllocasuale[ncasuale]=1;
    }
}
//-------------------------------------------------------------------------------------
function Inserimento_x(vis_x,tasto,controllo_x,i)
{
    vis_x[i].textContent="x";
    vis_x[i].style.color="blue";
    tasto[i].disabled = true; 
    controllo_x[i]="x";
}
function Vittoria_x(contatore, h1_sc, sect2_1_sc) 
{
    contatore++;
    h1_sc[0].textContent = "Vittoria X";
    h1_sc[0].style.color = "blue";
    sect2_1_sc.textContent = "Giocatore 1(X): " + contatore;

    h1_sc[0].classList.remove("mostra");
    h1_sc[0].classList.remove("vittoria");
    void h1_sc[0].offsetWidth;
    h1_sc[0].classList.add("vittoria");
    return contatore;
}

function Vittoria_o(contatore, h1_sc, sect2_3_sc) 
{
    contatore++;
    h1_sc[0].textContent = "Vittoria O";
    h1_sc[0].style.color = "red";
    sect2_3_sc.textContent = "Giocatore 2(O): " + contatore;

    h1_sc[0].classList.remove("mostra");
    h1_sc[0].classList.remove("vittoria");
    void h1_sc[0].offsetWidth;
    h1_sc[0].classList.add("vittoria");
    return contatore;
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

let Numerocelle_sc=document.getElementById("Numerocelle_sc");

scelta_1.addEventListener("click",function(){
    menù.style.display = "none";
    Numerocelle_sc.style.display = "block";
    Numerocelle_sc.addEventListener("click",function(){
        gioco_1.style.display = "block";
        titolo_sc.style.display = "block";
    });

    
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
    let cella=document.querySelectorAll(".cella");
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
        h1_sc[0].classList.remove("vittoria");
        for(let j=0;j<9;j++)
        {
            vis_x[j].textContent="";
            vis_o[j].textContent="";

            controllo_x[j]="";
            controllo_o[j]="";
            tasto[j].disabled = false;

            cella[j].style.backgroundColor = "";
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
                Inserimento_x(vis_x,tasto,controllo_x,i);
    
                if(Verifica_vittoria(controllo_x, tasto, vis_x, cella, "x", 1) == 1) {
                    cont_sect2_1_sc = Vittoria_x(cont_sect2_1_sc, h1_sc, sect2_1_sc);
                    vittoria_x = true;
                    n = 1;
                }
                else 
                {
                    h1_sc[0].textContent = "Turno O";
                    h1_sc[0].style.color = "red";
                }
            }
            else
            {
                vis_o[i].textContent="o";
                vis_o[i].style.color="red";
                tasto[i].disabled = true;
                controllo_o[i] = "o"; 
                if(Verifica_vittoria(controllo_o, tasto, vis_o, cella, "o", 2) == 2) 
                {
                    cont_sect2_3_sc = Vittoria_o(cont_sect2_3_sc, h1_sc, sect2_3_sc);
                    vittoria_o = true; 
                    n = 1;
                }
                else 
                {
                    h1_sc[0].textContent = "Turno X";
                    h1_sc[0].style.color = "blue";
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

    let cella=document.querySelectorAll(".cella");
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
        h1_gc[0].classList.remove("vittoria");
        for(let j=0; j<9; j++)
        {
            controllocasuale[j] = 0;

            vis_x_cpu[j].textContent = "";
            vis_o_cpu[j].textContent = "";

            controllo_x_cpu[j] = "";
            controllo_o_cpu[j] = "";

            tasto_cpu[j].disabled = false;

            cella[j].style.backgroundColor = "";
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
            Inserimento_x(vis_x_cpu,tasto_cpu,controllo_x_cpu,i);

            controllocasuale[i]=1; 
            if(Verifica_vittoria(controllo_x_cpu, tasto_cpu, vis_x_cpu, cella, "x", 1) == 1)
            {
                cont_sect2_1_gc = Vittoria_x(cont_sect2_1_gc, h1_gc, sect2_1_gc);
                vittoria_x_cpu = true;
                n_cpu++;
                return;
            }
            h1_gc[0].textContent = "Turno O";
            h1_gc[0].style.color = "red";

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

            Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,controllo_x_cpu,controllocasuale,ncasuale,n);

            if(Verifica_vittoria(controllo_o_cpu, tasto_cpu, vis_o_cpu, cella, "o", 2) == 2)
            {
                cont_sect2_3_gc = Vittoria_o(cont_sect2_3_gc, h1_gc, sect2_3_gc);
                vittoria_o_cpu = true; 
                n_cpu++;
                return;
            }
            h1_gc[0].textContent = "Turno X";
            h1_gc[0].style.color = "blue";
            if(
                tasto_cpu[0].disabled && tasto_cpu[1].disabled && tasto_cpu[2].disabled &&
                tasto_cpu[3].disabled && tasto_cpu[4].disabled && tasto_cpu[5].disabled &&
                tasto_cpu[6].disabled && tasto_cpu[7].disabled && tasto_cpu[8].disabled
            )
            {
                if (vittoria_x_cpu == false && vittoria_o_cpu == false)
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