// funzioni schermo condiviso
function ApplicaFiltro_Verifica_vittoria(tasto, vis_x_o, ultimoIndice, cella, passo,lato) 
{
    for (let k = 0; k < lato; k++) 
    {
        let idx = ultimoIndice - (k * passo);

        tasto[idx].style.backgroundColor = "#ffba38";
        cella[idx].style.backgroundColor = "#ffba38";
        tasto[idx].style.border = "0";
        vis_x_o[idx].style.color = "white";
    }
}
function Verifica_vittoria(controllo, tasto, vis, cella, simbolo, valoreRitorno,lato)
{
    let p = 0;
    let cont = 0; 

    for (let i = 0; i < lato; i++) 
    {
        cont = 0; 
        
        for (let j = p; j < p + lato; j++) 
        { 
            if (controllo[j] === simbolo) 
            {
                cont++;
            } 
            else 
            {
                cont = 0; 
            }

            if (cont === lato) 
            {
                ApplicaFiltro_Verifica_vittoria(tasto, vis, j, cella,1,lato);
                return valoreRitorno;
            }
        }
        p = p + lato; 
    }
    cont = 0;
    for (let i = 0; i < lato; i++) 
    {
        cont = 0; 
        for (let j = i; j < (lato * lato); j = j + lato) 
        {
            if (controllo[j] === simbolo) 
            {
                cont++;
            } 
            else 
            {
                cont = 0; 
            }

            if (cont === lato) 
            {
                ApplicaFiltro_Verifica_vittoria(tasto, vis, j, cella,lato,lato);
                return valoreRitorno;
            }
        }
    }
    cont = 0;
    for (let j = 0; j < (lato * lato); j = j + (lato + 1)) 
    {
        if (controllo[j] == simbolo) 
        {
            cont++;
        } 
        else 
        {
            cont = 0;
        }

        if (cont == lato) 
        {
            ApplicaFiltro_Verifica_vittoria(tasto, vis, j, cella,lato+1,lato);
            return valoreRitorno;
        }
    }
    cont = 0;
    for (let j = (lato - 1); j <= (lato * lato - lato); j = j + (lato - 1)) 
    {
        if (controllo[j] == simbolo) 
        {
            cont++;
        } 
        else 
        {
            cont = 0;
        }

        if (cont == lato) 
        {
            ApplicaFiltro_Verifica_vittoria(tasto, vis, j, cella,lato-1,lato);
            return valoreRitorno;
        }
    }
    return 0;
}

//-------------------------------------------------------------------------------------------------------------
//funzione Minimax

function ApplicaFiltro_Minimax(vis_o_cpu, tasto_cpu, controllo_o_cpu, m, controllocasuale) {
    vis_o_cpu[m].textContent = "o";
    vis_o_cpu[m].style.color = "red";
    tasto_cpu[m].disabled = true;
    controllo_o_cpu[m] = "o";
    controllocasuale[m] = 1;
}

function generaPosizioniVincenti(lati) {
    let vincenti = [];

    for (let i = 0; i < lati; i++) {
        let riga = [];
        for (let j = 0; j < lati; j++) {
            riga.push(i * lati + j);
        }
        vincenti.push(riga);
    }

    for (let i = 0; i < lati; i++) {
        let colonna = [];
        for (let j = 0; j < lati; j++) {
            colonna.push(j * lati + i);
        }
        vincenti.push(colonna);
    }

    let d1 = [], d2 = [];
    for (let i = 0; i < lati; i++) {
        d1.push(i * lati + i);                 
        d2.push(i * lati + (lati - 1 - i));     
    }
    vincenti.push(d1, d2);

    return vincenti;
}

function Minimax(vis_o_cpu, tasto_cpu, controllo_o_cpu, controllo_x_cpu, controllocasuale, ncasuale, n, lati) {
    
    let PosizioniVincenti = generaPosizioniVincenti(lati);
    let totaleCelle = lati * lati;

    function controllaEMuovi(arraySegni, segnoDaCercare) {
        for (let riga_di_PosizioniVincenti of PosizioniVincenti) {
            
            let contaSegni = 0;
            let indiceVuoto = -1;

            for (let indice_di_riga of riga_di_PosizioniVincenti) {
                if (arraySegni[indice_di_riga] === segnoDaCercare) {
                    contaSegni++;
                } 
                else if (controllocasuale[indice_di_riga] === 0) {
                    indiceVuoto = indice_di_riga;
                }
            }

            if (contaSegni === (lati - 1) && indiceVuoto !== -1) {
                ApplicaFiltro_Minimax(vis_o_cpu, tasto_cpu, controllo_o_cpu, indiceVuoto, controllocasuale);
                return true;
            }
        }
        return false; 
    }

    if (controllaEMuovi(controllo_o_cpu, "o") === true) {
        return;
    }

    if (controllaEMuovi(controllo_x_cpu, "x") === true) {
        return;
    }

    let mossaFatta = false;
    let tentativi = 0;

    while (mossaFatta === false && tentativi < 100) {
        let casuale = Math.floor(Math.random() * totaleCelle);

        if (controllocasuale[casuale] === 0) {
            ApplicaFiltro_Minimax(vis_o_cpu, tasto_cpu, controllo_o_cpu, casuale, controllocasuale);
            mossaFatta = true;
        }
        tentativi++;
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
//-------------------------------------------------------------------------------------
function generazione_celle_sc(lati,g) 
{
    let totaleCelle = lati * lati;
    let container = document.getElementById("celle");
    container.innerHTML = "";

    for (let i = 0; i < totaleCelle; i++) 
    {
        let cella = document.createElement("div");
        cella.classList.add("cella");
        let button=document.createElement("button");
        button.classList.add("bottone");

        cella.textContent = "";
        button.textContent = "";

        let vis_x = document.createElement("p");
        vis_x.classList.add("visualizzazione_x");

        let vis_o = document.createElement("p");
        vis_o.classList.add("visualizzazione_o");

        button.appendChild(vis_x);
        button.appendChild(vis_o);

        container.appendChild(cella);
        cella.appendChild(button);
    }
    const gap_sc = 10;
    // 40px = margine orizzontale totale lasciato ai lati della griglia;
    // Math.min(100) mantiene le celle a 100px su schermi grandi, le riduce su quelli stretti
    const cellSize_sc = Math.min(100, Math.floor((window.innerWidth - 40 - gap_sc * (lati - 1)) / lati));
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${lati}, ${cellSize_sc}px)`;
    container.style.gridTemplateRows = `repeat(${lati}, ${cellSize_sc}px)`;
    container.style.gap = `${gap_sc}px`;
    // Aggiorna la variabile CSS usata da .visualizzazione_x/o per scalare il font
    // proporzionalmente alla cella (rapporto originale: 160px font / 100px cella = 1.6)
    container.style.setProperty('--cell-font-size', `${Math.round(cellSize_sc * 1.6)}px`);

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
    let controllo_x = new Array(totaleCelle).fill("");
    let controllo_o = new Array(totaleCelle).fill("");
    
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
        for(let j=0;j<tasto.length;j++)
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
    
                if(Verifica_vittoria(controllo_x, tasto, vis_x, cella, "x", 1,lati) == 1) {
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
                if(Verifica_vittoria(controllo_o, tasto, vis_o, cella, "o", 2,lati) == 2) 
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

            let tutteCelleOccupate = true;

            for (let t = 0; t < tasto.length; t++) 
            {
                if (tasto[t].disabled === false) 
                {
                    tutteCelleOccupate = false;
                    break;
                }
            }
            if (tutteCelleOccupate === true && vittoria_x === false && vittoria_o === false) 
            {
                h1_sc[0].textContent = "Pareggio";
                h1_sc[0].style.color = "black";
                
                cont_sect2_2_sc++; 
                sect2_2_sc.textContent = "Pareggi: " + cont_sect2_2_sc;
            }  
        });
    }
    reset.addEventListener("click",ResetPartita);

    home.addEventListener("click",function(){
        gioco_1.style.display = "none";
        titolo_sc.style.display = "none";
        menù.style.display = "block";
        h1_sc[0].classList.remove("vittoria");
        h1_sc[0].textContent="Turno X";
        h1_sc[0].style.color = "#1a0ce8";
    });
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
let tre_x_tre=document.querySelectorAll(".tre_x_tre_sc")[0];
let quattro_x_quattro_sc=document.querySelectorAll(".quattro_x_quattro_sc")[0];

let Numerocelle_gc=document.getElementById("Numerocelle_gc");
let tre_x_tre_gc=document.querySelectorAll(".tre_x_tre_gc")[0];
let quattro_x_quattro_gc=document.querySelectorAll(".quattro_x_quattro_gc")[0];

scelta_1.addEventListener("click",function(){
    menù.style.display = "none";
    Numerocelle_sc.style.display = "block";
});
tre_x_tre.addEventListener("click",function(){
    Numerocelle_sc.style.display = "none";
    gioco_1.style.display = "block";
    titolo_sc.style.display = "block";
    generazione_celle_sc(3,0);
});
quattro_x_quattro_sc.addEventListener("click",function(){
    Numerocelle_sc.style.display = "none";
    gioco_1.style.display = "block";
    titolo_sc.style.display = "block";
    generazione_celle_sc(4,1);
});
//-----------------------------------------------------------------------------------  
function generazione_celle_gc(lati,g) 
{
    let totaleCelle = lati * lati;
    let container = document.getElementById("celle_gc");
    container.innerHTML = "";

    for (let i = 0; i < totaleCelle; i++) 
    {
        let cella = document.createElement("div");
        cella.classList.add("cella");
        let button=document.createElement("button");
        button.classList.add("bottone_cpu");

        cella.textContent = "";
        button.textContent = "";

        let vis_x = document.createElement("p");
        vis_x.classList.add("visualizzazione_x_cpu");

        let vis_o = document.createElement("p");
        vis_o.classList.add("visualizzazione_o_cpu");

        button.appendChild(vis_x);
        button.appendChild(vis_o);

        container.appendChild(cella);
        cella.appendChild(button);
    }
    const gap_gc = 10;
    // Stessa logica di generazione_celle_sc: cella massimo 100px, ridotta su viewport strette
    const cellSize_gc = Math.min(100, Math.floor((window.innerWidth - 40 - gap_gc * (lati - 1)) / lati));
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${lati}, ${cellSize_gc}px)`;
    container.style.gridTemplateRows = `repeat(${lati}, ${cellSize_gc}px)`;
    container.style.gap = `${gap_gc}px`;
    container.style.setProperty('--cell-font-size', `${Math.round(cellSize_gc * 1.6)}px`);

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
    let controllocasuale= new Array(totaleCelle).fill(0);
    let vittoria_x_cpu=false;
    let vittoria_o_cpu=false;
    let controllo_x_cpu = new Array(totaleCelle).fill("");
    let controllo_o_cpu = new Array(totaleCelle).fill("");
    
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
        for(let j=0; j<tasto_cpu.length; j++)
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
            if(Verifica_vittoria(controllo_x_cpu, tasto_cpu, vis_x_cpu, cella, "x", 1,lati) == 1)
            {
                cont_sect2_1_gc = Vittoria_x(cont_sect2_1_gc, h1_gc, sect2_1_gc);
                vittoria_x_cpu = true;
                n_cpu++;
                return;
            }
            h1_gc[0].textContent = "Turno O";
            h1_gc[0].style.color = "red";

            let caselle_occupate_x = 0;
            for (let j = 0; j < totaleCelle; j++) 
            {
                if (tasto_cpu[j].disabled == true) 
                {
                    caselle_occupate_x++;
                }
            }

            if (caselle_occupate_x == totaleCelle && vittoria_x_cpu == false) 
            {
                h1_gc[0].textContent = "Pareggio";
                h1_gc[0].style.color = "black";
                cont_sect2_2_gc++;
                sect2_2_gc.textContent = "Pareggi: " + cont_sect2_2_gc;
                return;
            }
            setTimeout(function() 
            {

                Minimax(vis_o_cpu,tasto_cpu,controllo_o_cpu,controllo_x_cpu,controllocasuale,ncasuale,n,lati);


                if(Verifica_vittoria(controllo_o_cpu, tasto_cpu, vis_o_cpu, cella, "o", 2,lati) == 2)
                {
                    cont_sect2_3_gc = Vittoria_o(cont_sect2_3_gc, h1_gc, sect2_3_gc);
                    vittoria_o_cpu = true; 
                    n_cpu++;
                    return;
                }
                h1_gc[0].textContent = "Turno X";
                h1_gc[0].style.color = "blue";
                let tutteCelleOccupate = true;

                for (let t = 0; t < tasto_cpu.length; t++) 
                {
                    if (tasto_cpu[t].disabled === false) 
                    {
                        tutteCelleOccupate = false;
                        break;
                    }
                }
                if (tutteCelleOccupate === true && vittoria_x_cpu === false && vittoria_o_cpu === false) 
                {
                    h1_gc[0].textContent = "Pareggio";
                    h1_gc[0].style.color = "black";
                    
                    cont_sect2_2_gc++; 
                    sect2_2_gc.textContent = "Pareggi: " + cont_sect2_2_gc;
                }  
            }, 500);
        });
    }

    reset_gc.addEventListener("click",ResetPartita_gc);
    
    home_gc.addEventListener("click",function(){
        gioco_2.style.display = "none";
        titolo_gc.style.display = "none";
        menù.style.display = "block";
        h1_gc[0].classList.remove("vittoria");
        h1_gc[0].textContent="Turno X";
        h1_gc[0].style.color = "#1a0ce8";
    });
}

scelta_2.addEventListener("click",function(){
    menù.style.display = "none";
    Numerocelle_gc.style.display = "block";
});
tre_x_tre_gc.addEventListener("click",function(){
    Numerocelle_gc.style.display = "none";
    gioco_2.style.display = "block";
    titolo_gc.style.display = "block";
    generazione_celle_gc(3,0);
});
quattro_x_quattro_gc.addEventListener("click",function(){
    Numerocelle_gc.style.display = "none";
    gioco_2.style.display = "block";
    titolo_gc.style.display = "block";
    generazione_celle_gc(4,1);
});