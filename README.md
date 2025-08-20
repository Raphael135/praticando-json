# 📖 Documentação: JSON em JavaScript

## 🔹 O que é JSON?

**JSON (JavaScript Object Notation)** é um formato leve de troca de dados.
Ele é usado para enviar e receber informações entre sistemas, principalmente em **APIs**.

👉 É baseado em **texto** e muito parecido com a forma como escrevemos objetos em JavaScript.

Exemplo de um JSON:

```json
{
  "nome": "Ana",
  "idade": 25,
  "profissao": "Desenvolvedora"
}
```

---

## 🔹 Diferença entre **JSON** e **Objeto JavaScript**

No JavaScript, temos os objetos assim:

```js
const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Desenvolvedora"
};
```

O JSON é **sempre texto** (string).
Já o objeto é uma estrutura de dados usada no código.

---

## 🔹 Métodos principais

O JavaScript possui dois métodos nativos para trabalhar com JSON:

### 1. `JSON.stringify()`

Converte um objeto JavaScript em uma string JSON.

```js
const pessoa = {
  nome: "Ana",
  idade: 25
};

const jsonString = JSON.stringify(pessoa);
console.log(jsonString);
// Saída: {"nome":"Ana","idade":25}
```

### 2. `JSON.parse()`

Converte uma string JSON em um objeto JavaScript.

```js
const jsonString = '{"nome":"Ana","idade":25}';

const pessoa = JSON.parse(jsonString);
console.log(pessoa.nome);
// Saída: Ana
```

---

## 🔹 Regras do JSON

1. **Chaves sempre entre aspas duplas** (`" "`).
   ✅ `"nome": "Ana"`
   ❌ `nome: "Ana"`

2. **Strings sempre com aspas duplas**.
   ✅ `"cidade": "São Paulo"`
   ❌ `'cidade': 'São Paulo'`

3. Pode conter:

   * Números: `25`
   * Strings: `"texto"`
   * Booleanos: `true`, `false`
   * Arrays: `[1, 2, 3]`
   * Objetos: `{ "chave": "valor" }`
   * `null`

---

## 🔹 JSON com Arrays

JSON também pode ter listas (arrays):

```json
{
  "usuarios": [
    { "id": 1, "nome": "Ana" },
    { "id": 2, "nome": "Carlos" }
  ]
}
```

No JavaScript:

```js
const dados = `{
  "usuarios": [
    { "id": 1, "nome": "Ana" },
    { "id": 2, "nome": "Carlos" }
  ]
}`;

const obj = JSON.parse(dados);
console.log(obj.usuarios[1].nome);
// Saída: Carlos
```

---

## 🔹 Onde o JSON é usado?

* Comunicação com **APIs** (ex.: buscar dados de um site).
* Armazenamento de configurações.
* Transferência de dados entre sistemas diferentes.

Exemplo usando `fetch`:

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) // converte a resposta em objeto JS
  .then(data => console.log(data));   // usa os dados
```

---

## ✅ Resumindo

* JSON é **texto**, parecido com objetos do JS.
* Use `JSON.stringify()` para converter objeto → texto.
* Use `JSON.parse()` para converter texto → objeto.
* Muito usado em **APIs** e troca de dados.
