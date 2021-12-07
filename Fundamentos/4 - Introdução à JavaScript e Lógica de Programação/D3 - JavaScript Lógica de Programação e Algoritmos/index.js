// Ex 1
let n = 5;
let aux = "";
for (var linha = 1; linha <= n; linha++) {
  for (var coluna = 1; coluna <= n; coluna++) {
    aux += "*";
  }
  console.log(aux);
  aux = "";
}

// Ex 2
let asterisco = 5;
let aux2 = '';
for (i=0; i<=asterisco; i++) {
    if (i<asterisco) {
        aux2 += '*';
        console.log(aux2);
    }
}

// Ex 3
let k = 5;
let aux3 = "";
for (var linhx = 1; linhx <= k; linhx++) {
  for (var colunx = 1; colunx <= k; colunx++) {
    aux3 += " "
    if (colunx = k) {
        aux3 += "*"
    }
  }
  console.log(aux3);

}
