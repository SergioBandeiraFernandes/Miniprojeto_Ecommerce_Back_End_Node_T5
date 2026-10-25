import {Produto} from "./types";

import { Box } from './types';

import {
        listarProdutos, 
        buscarProdutoId, 
        buscarProdutoNome, 
        produtoFiltrado, 
        buscarProdutoCategoria,
        cadastrarProduto,
        atualizarProduto,
        deletarProdutoPorId
        } from "./produtos";

import {
        listarClientes,
        cadastrarClientes,
        buscarClienteId,
        } from "./clientes";

import {
        adicionarAoCarrinho,
        calcularValorTotalCarrinho,
        deletarProdutoCarrinho,
        listarCarrinho,
        atualizarQuantidadeCarrinho,
        } from "./carrinhos";

import {finalizarPedidoCarrinho,
        listarTodosPedidos,
        buscarPedidoPorClienteId,
        } from "./pedidos";




console.log("------Sistema de Gerenciamento de Ecommerce------");

console.log("\nSegue a lista dos produtos que temos em estoque:");
listarProdutos(); // vai trazer todos os produtos cadastrados no estoque do sistema.

console.log("\n O produto buscado pelo seu Id é:");
const produtoId = buscarProdutoId(3); //vai trazer o produto que possui o Id escolhido, nesse caso o Id 3.
    if (produtoId !== undefined) {
        console.log(produtoId);
    }

console.log("\n O produto buscado pela seguinte descrição é: ");
console.log(produtoFiltrado);

console.log("\n O produto buscado de acordo com sua categoria é: ");
console.log(buscarProdutoCategoria("Linha Branca"));

//Informa se o produto que está sendo cadastrado já existe ou não no sistema. Logo em seguida, traz a lista de produtos atualizada.
console.log("\nO produto que está sendo cadastrado tem o seguinte status: ");
const NovoProduto = cadastrarProduto({
    id: 5,
    nome: "Celular Motorola G84",
    categoria: "TI",
    preco: 2500,
    estoque: 8
});
//console.log(NovoProduto ? "Produto cadastrado com sucesso!" : "Produto já cadastrado no sistema.");
console.log("\nSendo assim, segue a lista atualizada de produtos cadastrados no sistema:");
listarProdutos(); 

//Atualizar o produto que já está cadastrado no sistema.
const resultado = atualizarProduto(1, { 
    preco: 1250, 
    estoque: 1
});

console.log("\nProduto Atualizado:", resultado);
console.log("\n -------- Lista do Estoque Atualizada --------\n");
listarProdutos(); // Lista atualizada após a atualização do produto.

// Remover um produto do sistema através do id informado.
console.log("\n-------------- Execução de Remoção de Produto do Estoque --------------\n");
deletarProdutoPorId(3);
console.log("\n -------- Lista do Estoque Atualizada --------\n");
listarProdutos();

//até aqui foi execução do código referente ao arquivo produtos.ts.

//------------------------------------------------------------------------------

//Inicio de execução do código  referente ao arquivo clientes.ts

//Listar os cliente que tem no banco de daods.
console.log("\n ------------- Lista de Clientes no Sistema -------------\n");
listarClientes();

//Cadastrar novo cliente.
console.log("\n------ Cadastrando novo cliente no sistema ------ \n");
console.log("\nO cliente que está sendo cadastrado tem o seguinte status: ");
const novoCliente = cadastrarClientes({
    id: 8,
    nome: "Giovanna Dias Fernandes",
    email: "giovanna.dias@example.com"
});

console.log("\nSendo assim, segue a lista atualizada de clientes cadastrados no sistema:");
listarClientes();

//buscar um cliente pelo id.
console.log("\n O cliente buscado pelo seu Id é:");
const clienteBuscado = buscarClienteId(5); 
    if (clienteBuscado !== undefined) {
        console.log(clienteBuscado);
    }

//até aqui foi execução do código referente ao arquivo clientes.ts

//----------------------------------------------------------------

//Inicio de execução do código  referente ao arquivo carrinhos.ts

//Adicionando item ao carrinho.
console.log("\n------ Carrinho ------ \n");
console.log("\nO carrinho tem os seguintes itens: ");

// 1. Adiciona o primeiro produto para o cliente 1 (Sérgio)
adicionarAoCarrinho(1, 1, 5, 3);
//1º indice é Id do carrinho
//2º indice é Id Cliente
//3º indice é Id Produto
//4º indice é quantidade
//Exibe o valor total do carrinho do cliente 1:
const totalCliente1 = calcularValorTotalCarrinho(1);
console.log(`Valor total de R$ ${totalCliente1}\n`);


// 2. Adiciona um primeiro produto para o mesmo cliente 2:
adicionarAoCarrinho(2, 2, 4, 3);

//Exibe o valor total do carrinho do cliente 2:
const totalCliente2 = calcularValorTotalCarrinho(2);
console.log(`Valor total de R$ ${totalCliente2}\n`);

//Removendo item do carrinho.
console.log("\n--- Removendo item do carrinho ---\n");
deletarProdutoCarrinho(5);

//Atualizar quantidade de um produto referente a um cliente.
console.log("\n------ Atualizando a quantidade do produto no carrinho: -----")
atualizarQuantidadeCarrinho(2, 4, 1);
//1º indice - Cliente;
//2º indice - Id do produto;
//3º indice - quantidade atualizada.

//mostrar itens carrinho atualizado
console.log("\n------ Atualizando carrinho ------")
console.log("\nO carrinho teve os seguintes itens atualizados:");
listarCarrinho();

//até aqui foi execução do código referente ao arquivo carrinhos.ts

//----------------------------------------------------------------

//Inicio de execução do código referente ao arquivo pedidos.ts

//Finalizar Pedido do cliente
console.log("\n---- Status do Pedido -----\n")
finalizarPedidoCarrinho(2);

//Consultar todos os Pedidos que foram registrados.
console.log("-------------------- Registro de Pedidos -------------------------");
console.log("\nSeguem os Registro de Pedidos:\n");
listarTodosPedidos();

//Consultar o Pedido de acordo com o Id do Cliente.
console.log("Pedido do cliente informado é: ")
console.log(buscarPedidoPorClienteId(2));