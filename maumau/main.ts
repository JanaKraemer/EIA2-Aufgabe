interface Karte {
    Zahl: string;
    Symbol: string;
    Farbe: string

}

let Karte_1: Karte = {
    Zahl: "7",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_2: Karte = {
    Zahl: "8",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_3: Karte = {
    Zahl: "9",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_4: Karte = {
    Zahl: "10",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_5: Karte = {
    Zahl: "Bube",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_6: Karte = {
    Zahl: "Dame",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_7: Karte = {
    Zahl: "König",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_8: Karte = {
    Zahl: "Ass",
    Symbol: "Herz",
    Farbe: "rot",
}

let Karte_9: Karte = {
    Zahl: "7",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_10: Karte = {
    Zahl: "8",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_11: Karte = {
    Zahl: "9",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_12: Karte = {
    Zahl: "10",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_13: Karte = {
    Zahl: "Bube",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_14: Karte = {
    Zahl: "Dame",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_15: Karte = {
    Zahl: "König",
    Symbol: "Karo",
    Farbe: "rot",
}

let Karte_16: Karte = {
    Zahl: "Ass",
    Symbol: "Karo",
    Farbe: "rot",
}


let Karte_17: Karte = {
    Zahl: "7",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_18: Karte = {
    Zahl: "8",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_19: Karte = {
    Zahl: "9",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_20: Karte = {
    Zahl: "10",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_21: Karte = {
    Zahl: "Bube",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_22: Karte = {
    Zahl: "Dame",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_23: Karte = {
    Zahl: "König",
    Symbol: "Piek",
    Farbe: "schwarz",
}

let Karte_24: Karte = {
    Zahl: "Ass",
    Symbol: "Piek",
    Farbe: "schwarz",
}


let Karte_25: Karte = {
    Zahl: "7",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_26: Karte = {
    Zahl: "8",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_27: Karte = {
    Zahl: "9",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_28: Karte = {
    Zahl: "10",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_29: Karte = {
    Zahl: "Bube",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_30: Karte = {
    Zahl: "Dame",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_31: Karte = {
    Zahl: "König",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}

let Karte_32: Karte = {
    Zahl: "Ass",
    Symbol: "Kreuz",
    Farbe: "schwarz",
}
document.addEventListener("DOMContentLoaded", HandAnzahl);

function HandAnzahl(): void {
    let Handkarten: string = prompt("Anzahl der Handkarten:")
    document.getElementById("Spielplan").innerHTML = HandAnzahl + "Karten werden ausgegeben"

}


function ErstelleHandkarten(c: Karte[i])
prodCard = document.createElement('div')
prodCard.innerHTML =

    `<div>
     <p> ${c.Zahl} </p>
     
`