import { Pedido } from "./types";

import {
    produtos,
    buscarProdutoId,
} from "./produtos"

import { 
    carrinho,
    listarCarrinho,
    calcularValorTotalCarrinho,
} from "./carrinhos"
import { buscarClienteId } from "./clientes";

//Variavel para armazenar todos os pedidos.
export const listaPedidos: Pedido[] = [];

export function finalizarPedidoCarrinho(clienteId: number): Pedido | null {

    const itensDoCliente = carrinho.filter(item => item.clienteId === clienteId);

    if (itensDoCliente.length === 0) {
        console.log(`Cliente Id: ${clienteId} não possui itens no carrinho!`);
        return null;
    };

    const itensPedido = itensDoCliente.map(item => {
        const produto = buscarProdutoId(item.ProdutoId);
        const nomeProduto = produto? produto.nome: "Item não encontrado!";
        return {
            idProduto: item.ProdutoId,
            nomeProduto: nomeProduto,
            quantidadeCarrinho: item.quantidade
        };
    });
    //Atualizar o estoque de produtos após o pedido ser finalizado.
    for (const item of itensPedido){
        const produtoCadastrado = produtos.find(prd => prd.id === item.idProduto);
        if(produtoCadastrado){
            produtoCadastrado.estoque -= item.quantidadeCarrinho;
        }
    }
    //
    const valorTotalPedido = calcularValorTotalCarrinho(clienteId);

    const novoPedido: Pedido = {
        id: Math.floor(Math.random() * 100000), //Serve para criar ID único gerado automáticamente.
        clienteId: clienteId,
        itens: itensPedido,
        TotalPedido: valorTotalPedido,
        dataPedido: new Date() //Serve para registrar a data e hora do lançamento do pedido.
    };

    listaPedidos.push(novoPedido);

    const descricaoItens = novoPedido.itens
    .map(item => `\nId: ${item.idProduto} - Nome: ${item.nomeProduto}, Quantidade: ${item.quantidadeCarrinho}`)
    .join('');

    console.log(`\nCliente Id: ${clienteId} - Registrou Pedido de Nº ${novoPedido.id} finalizado com sucesso!` 
    +
    `\nSegue pedido:`
    +
    `${descricaoItens}`
    +
    `\nRegistro gerado às ${novoPedido.dataPedido.toLocaleString()}`
    +
    `\nValor total do Pedido: R$${valorTotalPedido}\n`
    +
    `\nObrigado pela compra, volte sempre!\n`);
    return novoPedido;
};

// função para consultar todos os pedidos registrados.

export function listarTodosPedidos(): void {
    if (listaPedidos.length === 0) {
    console.log("\nNão há registro de Pedidos!");
    return;
};
    for (const pedido of listaPedidos){
        const itensListaPedido = pedido.itens.map(item => `Id: ${item.idProduto} - ${item.nomeProduto}, quantidade: ${item.quantidadeCarrinho}.`).join('');

        console.log(
            `--------------------------------------------`
            +
            `\nPedido Nº ${pedido.id}:`
            +
            `\nCliente Id: ${pedido.clienteId}`
            +
            `\nProduto: ${itensListaPedido}`
            +
            `\nValor Total Pedido: R$${pedido.TotalPedido}`
            +
            `\nData do Registro do Pedido: ${pedido.dataPedido.toLocaleString()}`
            +
            `\n------------------------------------------\n`
        );
    };
};

//Buscar um Pedido de acordo com o Id do cliente.
export function buscarPedidoPorClienteId(id: number): string | undefined {
    const pedido = listaPedidos.find(pedidos => pedidos.clienteId === id);
    if (!pedido) {
        return "Pedido não encontrado!";
    }
    const descricaoItens = pedido.itens.map(item => `Pedido Nº ${pedido.id}:\nId: ${item.idProduto} - ${item.nomeProduto}, quantidade: ${item.quantidadeCarrinho}`)
    return `${descricaoItens}.\nValor Total Pedido: R$ ${pedido.TotalPedido}\nData do Registro do Pedido: ${pedido.dataPedido.toLocaleString()}`;
};

