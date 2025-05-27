const GeradorDeMistura = {
 nomes: [
    "Elixir do Destino",
    "Poção do Corajoso",
    "Mistura Selvagem",
    "Veneno Tropical",
    "Fusão Proibida"
    // adicione frases aqui(apenas substituir) e apaga o comentario pfv

],

frases: [
    "Cuidado: pode causar risadas incontroláveis!",
    "Beba por sua conta e risco.",
    "Perfeita para noites inesquecíveis.",
    "Quem mistura, se arrisca!",
    "Mistura aprovada pelos deuses do bar!"
    // adicione frases aqui(apenas substituir) e apaga o comentario pfv
],

imagens: [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/5.jpeg",
    "img/6.jpeg",
    "img/7.jpeg",
    "img/8.jpeg",
    "img/9.jpeg",
    "img/10.jpeg",
    "img/11.jpeg",
    "img/12.jpeg",
    "img/13.jpeg",
    "img/14.jpeg",
    "img/15.jpeg",
    "img/16.jpeg",
    "img/17.jpeg"
],


  // Método para obter um índice aleatório baseado no tamanho do array
  obterIndiceAleatorio(array) {
    return Math.floor(Math.random() * array.length);
  },

  // Método para puxar um nome aleatório
  obterNomeAleatorio() {
    const indice = this.obterIndiceAleatorio(this.nomes);
    return this.nomes[indice];
  },

  // Método para puxar uma frase aleatória
  obterFraseAleatoria() {
    const indice = this.obterIndiceAleatorio(this.frases);
    return this.frases[indice];
  },

  // Método para puxar uma imagem aleatória
  obterImagemAleatoria() {
    const indice = this.obterIndiceAleatorio(this.imagens);
    return this.imagens[indice];
  }
};

