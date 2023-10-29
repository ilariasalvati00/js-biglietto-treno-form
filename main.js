const element = document.getElementById("invia");
element.addEventListener('click',
function(){
    const km = Number(document.getElementById("chilometri").value);
    if (! isNaN(km)){
        let prezzo_biglietto = 0.21*km;
        const eta = document.getElementById("fascia-eta").value;
        let offerta = "Biglietto Standard";
        if(eta == "minorenne"){
            prezzo_biglietto= prezzo_biglietto*0.8;
            offerta = "Biglietto Ridotto Minorenne";
        } else if(eta == "over65"){
            prezzo_biglietto = prezzo_biglietto*0.6;
            offerta = "Biglietto Ridotto Over 65";
        }
        prezzo_biglietto = prezzo_biglietto.toFixed(2);

        let nome = document.getElementById("nome").value;
        document.getElementById("destinazione_nome").innerHTML = nome;

        document.getElementById("offerta").innerHTML = offerta;

        document.getElementById("prezzo").innerHTML = `${prezzo_biglietto}€`;

        document.getElementById("header-biglietto").classList.remove("no-display");
        document.getElementById("biglietto").classList.remove("no-display");


    }
});

const element2 = document.getElementById("annulla")
element2.addEventListener('click', 
function(){
    document.getElementById("chilometri").value = "";
    document.getElementById("fascia-eta").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("destinazione_nome").innerHTML = "";

    document.getElementById("offerta").innerHTML = "";

    document.getElementById("prezzo").innerHTML = "";

    document.getElementById("header-biglietto").classList.add("no-display");
    document.getElementById("biglietto").classList.add("no-display");
})

