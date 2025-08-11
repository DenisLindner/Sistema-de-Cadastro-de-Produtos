/**
 * Ponto de partida para a atividade de construção de um sistema de cadastro.
 *
 * Para executar este ficheiro, você precisa do Node.js e do pacote `prompt-sync`.
 * Instale o `prompt-sync` com o comando: npm install prompt-sync
 */

// Configuração para ler input do utilizador no terminal
const prompt = require('prompt-sync')();

// Array que servirá como nosso "banco de dados" em memória
const produtos = [];

// --- Funções a Serem Desenvolvidas ---
class Produto {
    constructor(nome, preco, qtd) {
      this.nome = nome;
      this.preco = preco;
      this.qtd = qtd;
    }

    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }

    setPreco(preco){
        this.preco = preco;
    }

    getQtd(){
        return this.qtd;
    }

    setQtd(qtd){
        this.qtd = qtd;
    }

    toString(){
        return `\nNome: ${this.nome}\nPreco: ${this.preco}\nQuantidade: ${this.qtd}`;
    }
  }

function existeNome(nome) {
    for(produto of produtos){
        if(produto.getNome() === nome){
            return true;
        }
    }
    return false
}
    

function cadastrarProduto() {
  console.log("\n--- Funcionalidade de Cadastrar Produto ---");
  let nome;
  do{
    do{
    nome = prompt("Insira o Nome do Produto:");
    } while(nome.length === 0);
    if(existeNome(nome) === true){
        console.log("Nome de Produto já cadastrado!");
    }
  } while(existeNome(nome) === true)

  let preco;
  do{
    preco = prompt("Insira o Preco do Produto:");
  } while(preco < 0);

  let qtd;
  do{
    qtd = prompt("Insira a Quantidade do Produto:");
  } while(qtd < 0);

  let produto = new Produto(nome, preco, qtd);
  produtos.push(produto);
  console.log("Produto Cadastrado com Sucesso!");
}

function listarProdutos() {
  console.log("\n--- Funcionalidade de Listar Produtos ---");
  if(produtos.length === 0){
    console.log("Nenhum Produto Cadastrado!");
    return
  }
  console.log("Produtos:");
  for(let produto of produtos){
    console.log(produto.toString());
  }
}

function procurarProduto() {
    let nome;
    do{
      nome = prompt("Insira o Nome do Produto:");
    } while(nome.length === 0);

    for(produto of produtos){
        if(produto.getNome() === nome){
            console.log("Produto Encontrado!");
            console.log(produto.toString());
            return;
        }
    }
    console.log("Nenhum Produto encontrado com esse nome!");
}

function atualizarProduto() {
  console.log("\n--- Funcionalidade de Atualizar Produto ---");
  let nome;
    do{
      nome = prompt("Insira o Nome do Produto:");
    } while(nome.length === 0);

    for(produto of produtos){
        if(produto.getNome() === nome){
            console.log("Produto Encontrado!");
            let preco;
            do{
                preco = prompt("Insira o Novo Preco do Produto:");
            } while(preco < 0);

            let qtd;
            do{
                qtd = prompt("Insira a Nova Quantidade do Produto:");
            } while(qtd < 0);
            produto.setPreco(preco)
            produto.setQtd(qtd)
            console.log("Produto Atualizado com Sucesso!");
            return;
        }
    }
    console.log("Nenhum Produto encontrado com esse nome!");
}

function removerProduto() {
  console.log("\n--- Funcionalidade de Remover Produto ---");
  let nome;
    do{
      nome = prompt("Insira o Nome do Produto que deseja remover:");
    } while(nome.length === 0);

    for(produto of produtos){
        if(produto.getNome() === nome){
            produtos.splice(produtos.indexOf(produto), 1)
            console.log("Produto Removido com Sucesso!");
            return;
        }
    }
    console.log("Nenhum Produto encontrado com esse nome!");
}


// --- Loop Principal do Menu ---

let loop = true;
while (loop) {
  console.log("\n===== Sistema de Cadastro de Produtos =====");
  console.log("1. Cadastrar produto");
  console.log("2. Listar produtos");
  console.log("3. Procurar produto por nome");
  console.log("4. Atualizar produto");
  console.log("5. Remover produto");
  console.log("6. Sair");

  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case '1':
      cadastrarProduto();
      break;
    case '2':
      listarProdutos();
      break;
    case '3':
      procurarProduto();
      break;
    case '4':
      atualizarProduto();
      break;
    case '5':
      removerProduto();
      break;
    case '6':
      console.log("A sair do sistema. Até logo!");
      loop = false;
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

