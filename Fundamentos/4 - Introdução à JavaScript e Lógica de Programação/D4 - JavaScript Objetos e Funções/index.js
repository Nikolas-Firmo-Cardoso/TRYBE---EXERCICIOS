// Ex1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem vinda, " + (info.personagem))

console.log("------------------------------------------------------")

// Ex2
info.recorrente = "Sim";
console.log(info)

console.log("------------------------------------------------------")

// Ex3
for (let key in info) {
    console.log(key);
}

console.log("------------------------------------------------------")

// Ex4
for (let key in info) {
    console.log(info[key]);
}

console.log("------------------------------------------------------")

// Ex5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

    for (let key in info) {
      if (info.recorrente == info2.recorrente) {
        info.recorrente = "Ambos recorrentes";
        info2.recorrente = " ";
      }
      if(key==="recorrente") {
        console.log(info[key] + info2[key]);
      } else {
        console.log(info[key] + " e " + info2[key]);
      }
    }

