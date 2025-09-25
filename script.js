let nome = prompt("Qual é o seu nome?")

let escolhaDeGenero = prompt(`
Olá ${nome}, escolha um gênero de livro:

1. Romance
2. Terror
3. Mistério
4. Aventura
5. Ficção científica
6. Suspense
7. Drama
8. História
9. Poesia
10. Fantasia
`).toLowerCase()

if (escolhaDeGenero == 1 || escolhaDeGenero === "romance") {
    alert("Você pode ler: Orgulho e Preconceito, Dom Casmurro, Anna Kariênina, O Morro dos Ventos Uivantes")
} else if (escolhaDeGenero == 2 || escolhaDeGenero === "terror") {
    alert("Você pode ler: It: A Coisa, O Iluminado, Drácula, Frankenstein")
} else if (escolhaDeGenero == 3 || escolhaDeGenero === "mistério") {
    alert("Você pode ler: Assassinato no Expresso do Oriente, O Nome da Rosa, O Silêncio dos Inocentes, Sherlock Holmes: Um Estudo em Vermelho")
} else if (escolhaDeGenero == 4 || escolhaDeGenero === "aventura") {
    alert("Você pode ler: A Ilha do Tesouro, Robinson Crusoé, Viagem ao Centro da Terra, As Aventuras de Tom Sawyer")
} else if (escolhaDeGenero == 5 || escolhaDeGenero === "ficção científica") {
    alert("Você pode ler: Duna, Neuromancer, Fundação, 1984")
} else if (escolhaDeGenero == 6 || escolhaDeGenero === "suspense") {
    alert("Você pode ler: Garota Exemplar, A Garota no Trem, O Código Da Vinci, Antes de Dormir")
} else if (escolhaDeGenero == 7 || escolhaDeGenero === "drama") {
    alert("Você pode ler: A Menina que Roubava Livros, O Sol é Para Todos, Cem Anos de Solidão, A Montanha Mágica")
} else if (escolhaDeGenero == 8 || escolhaDeGenero === "história") {
    alert("Você pode ler: Sapiens, Armas, Germes e Aço, A Segunda Guerra Mundial, 1491")
} else if (escolhaDeGenero == 9 || escolhaDeGenero === "poesia") {
    alert("Você pode ler: Alguma Poesia, A Rosa do Povo, Mar Absoluto e Outros Poemas, Poemas Escolhidos")
} else if (escolhaDeGenero == 10 || escolhaDeGenero === "fantasia") {
    alert("Você pode ler: O Senhor dos Anéis, Harry Potter e a Pedra Filosofal, As Crônicas de Nárnia, Eragon")
} else {
    alert("Esse gênero não está dentre os listados")
}