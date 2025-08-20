const carro = {
  marca: "Fiat",
  modelo: "Uno",
  motor: ["1.6", "1.4", "1.0"],
};

// // Converteu para texto JSON
// let texto = JSON.stringify(carro);

// // Colocou o texto no nosso HTML
// document.getElementById("area").innerHTML = texto;

// // Converteu texto em objeto
// let obj = JSON.parse(texto);

// // Pegamos um valor deste objeto
// console.log(obj.motor[2]);

function buscarCep() {
  let input = document.getElementById("cep").value;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://viacep.com.br/ws/" + input + "/json/");
  ajax.send();

  ajax.onload = function () {
    // Converte o texto em objeto
    let obj = JSON.parse(this.responseText);

    // Filtra pelos valores do objeto
    let rua = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;

    return alert(
      `Você mora na ${rua}, da cidade de ${cidade} do estado ${estado}`
    );
  };
}
