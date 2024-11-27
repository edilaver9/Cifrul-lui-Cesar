function criptareCezar(text, cheie) {
    var rezultat = "";
    console.log("Text original:", text);
    console.log("Cheia:", cheie);
    
    for (let i = 0; i < text.length; i++) {
        let litera = text[i];
        if (litera.match(/[a-zA-Z]/i)) { // Dacă litera este alfabetică
            let codASCII = text.charCodeAt(i);
            console.log("Caractere procesate:", litera, "Cod ASCII:", codASCII);
            
            // pentru majuscule
            if (codASCII >= 65 && codASCII <= 90) {
                litera = String.fromCharCode(((codASCII - 65 + cheie) % 26) + 65);
            }
            // pentru minuscule
            else if (codASCII >= 97 && codASCII <= 122) {
                litera = String.fromCharCode(((codASCII - 97 + cheie) % 26) + 97);
            }
        }
        rezultat += litera;
    }
    console.log("Rezultatul criptat:", rezultat);
    return rezultat;
}

function cripteaza() {
    // Preluăm textul din input-ul HTML
    const text = document.getElementById("text-intrare").value;
    const cheie = parseInt(document.getElementById("cheie-criptare").value);

    console.log("Textul introdus:", text);
    console.log("Cheia introdusă:", cheie);

    // Verificăm dacă cheia este validă
    if (isNaN(cheie)) {
        document.getElementById('rezultat').innerText = "Nu este o cheie validă!";
        return;
    } else {
        console.log("Cheia este validă.");
    }

    // Apelăm funcția de criptare
    const textCriptat = criptareCezar(text, cheie);

    // Afișăm rezultatul criptat în pagina HTML
    document.getElementById("rezultat").innerText = textCriptat;
}
