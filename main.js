const element = document.getElementById("invia");
element.addEventListener('click',
function(){
    const km = document.getElementById("chilometri").value;
    let prezzo_biglietto = 0.21*km
    const eta = document.getElementById("eta").value
    if(eta<18){
        prezzo_biglietto= prezzo_biglietto*0.8;
    } else if(eta>65){
        prezzo_biglietto = prezzo_biglietto*0.6;
    }
    prezzo_biglietto = prezzo_biglietto.toFixed(2);
    console.log(prezzo_biglietto)
});


