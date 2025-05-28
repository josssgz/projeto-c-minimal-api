const GeradorDeMistura = {
 nomes: [
  "Bago de Ouro",
  "Deu na Pinha",
  "Mão de Ferro",
  "Tchê Lasquemo",
  "Pulo do Gato",
  "Guapo Torto",
  "Golada Nervosa",
  "TriNask",
  "Point das Catileia",
  "Fandango Chutado",
  "Bicho Véio",
  "Treme Tcheco",
  "Jacuzao",
  "O Canal",
  "Trago Ligeiro",
  "Sorte de Guri",
  "Bagual Elegante",
  "Piazito do Mal",
  "Nóis Que Voa",
  "Cacetada Mansa",
  "Galo Véio",
  "Só no Cangote",
  "Cacetinho Louco",
  "No Talo",
  "Chucro & Fino",
  "Dois Dedo de Prosa"
],

frases: [
  "Com esse gole aí tu vai só esquentar o motor, ainda não dá pra enroscar direito!",
  "Piá, tá mais pra um chimarrão de comadre do que um trago bão.",
  "Mais sóbrio que o cachorro da vizinhança, mas tá bom pra prosear.",
  "Esse é o nível do piá que não sabe nem se tá na festa ou no velório, só olhando.",
  "Gole bão, mas se abusar fica mais enrolado que baseado de nóia.",
  "Pra começar a abrir o bico e rir das piada que nem tão engraçada!",
  "Cuidado que essa é meio traiçoeira, já começa a te deixar meio tuchado.",
  "Esse é pra começar a soltar a língua, mas o cérebro ficar de férias.",
  "Bah, pra ficar no grau, é hora de meter a boca no mundão!",
  "Cuidado, tchê, que com esse o juízo logo some.",
  "Pra começar a ter perigo, pro papo ficar mais alto e a prosa mais torta.",
  "Agora é hora de começar a fazer cagada e chamar atenção da gurizada.",
  "Se aprume, vai ficar mais perdido que cego em tiroteio!",
  "Vai lembrar nem do próprio nome, mas insistir em pedir mais um trago.",
  "Pra esquecer o nome do teu próprio cachorro.",
  "Faz o peão virar piá, tropeçar na própria sombra.",
  "Pra derrubar o copo, a cadeira e até a moral.",
  "O corpo já não obedece, e a cabeça só pensa em mais uma!",
  "Vai ficar mais loco que gato em saco de farinha, se atipe!",
  "Até o cachorro vai embora se começar a falar depois de beber.",
  "Se tomar esse, o único resgate vai ser o camburão.",
  "Vai ficar do naipe que briga com o espelho e perde.",
  "O juízo vai embora no primeiro gole, e o corpo só acompanha o ritmo.",
  "Pra não saber nem como chegou em casa(se chegar).",
  "Não sabe se vai tá em pé, deitado ou pendurado no poste.",
  "Se beber, vai virar lenda urbana da vila.",
  "Vai virar lenda, mas só porque ninguém vai lembrar depois.",
  "Vai ficar mais molenga que gelatina no sol, nem força pra levantar tem.",
  "Tá tão mole de bebo que se dormir no chão vira churrasco de formiga.",
  "Se continuar nesse ritmo, vai virar lenda — mas daquelas que ninguém quer lembrar, só contar como aviso.",
  "Esse tanto é pra quem quer virar história de botequim e ser lembrado (ou esquecido).",
  "Desse naipe vai virar mito ou desgraça, e às vezes os dois juntos."
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

