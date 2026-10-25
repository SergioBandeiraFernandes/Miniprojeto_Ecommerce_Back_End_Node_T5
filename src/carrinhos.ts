import type { Produto } from "./types";

import type { Categoria } from "./types";

import type { Clientes } from "./types";

import type { Box } from "./types";

import {
        listarProdutos, 
        buscarProdutoId, 
        buscarProdutoNome, 
        produtoFiltrado, 
        buscarProdutoCategoria,
        cadastrarProduto,
        atualizarProduto,
        deletarProdutoPorId,
        produtos
        } from "./produtos";
import {
        listarClientes,
        cadastrarClientes,
        buscarClienteId,
        } from "./clientes";

//Variável para o armazenamento dos itens no carrinho.
export const carrinho: Box[] = [];

// Adiciona um produto ao carrinho permitindo vários itens por cliente
export function adicionarAoCarrinho(carrinhoId: number, clienteId: number, produtoId: number, quantidade: number): boolean {
    // Valida se o cliente existe usando a função existente
    const cliente = buscarClienteId(clienteId);
    if (!cliente) {
        console.log("Erro: Cliente não encontrado no sistema.");
        return false;
    }

    // Valida se o produto existe usando a função existente
    const produto = buscarProdutoId(produtoId);
    if (!produto) {
        console.log("Erro: Produto não encontrado no sistema.");
        return false;
    }

    // Valida se há estoque suficiente
    if (produto.estoque < quantidade) {
        console.log(`Erro: Estoque insuficiente. Estoque disponível: ${produto.estoque}`);
        return false;
    }

    // Cria o objeto respeitando exatamente o type Box
    const novoItem: Box = {
        CarrinhoId: carrinhoId,
        clienteId: clienteId,
        ProdutoId: produtoId,
        quantidade: quantidade,
    };

    // Adiciona o item ao carrinho
    carrinho.push(novoItem);
    console.log(`CarrinhoId: ${carrinhoId} tem como seguinte item: Id: ${produto.id} - "${produto.nome}" - quantidade: ${novoItem.quantidade} adicionado com sucesso para o cliente ID - ${clienteId}!. Para esse cliente o carrinho está com: `);
    return true;
};

// Calcula o subtotal de um item específico do carrinho
export function calcularSubtotalItem(item: Box): number {
    const produto = buscarProdutoId(item.ProdutoId);
    if (!produto) return 0;

    return item.quantidade * produto.preco;
};

// Calcular o valor total do carrinho
export function calcularValorTotalCarrinho(clienteId?: number): number {
    let valorTotal = 0;

    for (const item of carrinho) {
        if (clienteId === undefined || item.clienteId === clienteId){
            valorTotal += calcularSubtotalItem(item);
        }
    }
    return valorTotal;
};

//remover um produto do carrinho.
export function deletarProdutoCarrinho(idParaRemoverItemCarrinho: number): void {
    const index = carrinho.findIndex(item => item.ProdutoId === idParaRemoverItemCarrinho);

    if (index !== -1) {
        // Se encontrou o índice, remove o item
        carrinho.splice(index, 1);
        console.log(`Produto ID ${idParaRemoverItemCarrinho} removido com sucesso.`);
    } else {
        // Se não encontrou, apenas avisa no console
        console.log(`Produto com ID ${idParaRemoverItemCarrinho} não encontrado.`);
    }
};

//listar itens que constam no carrinho
export function listarCarrinho(): void {
    if (carrinho.length === 0) {
        console.log("O carrinho está vazio!");
        return;
    }
    for (const item of carrinho){
        const produto = buscarProdutoId(item.ProdutoId);
        const nomeProduto = produto ? produto.nome : "Produto não encontrado";
        const valorTotalCliente = calcularValorTotalCarrinho(item.clienteId);
        
        console.log(`CarrinhoId: ${item.CarrinhoId} tem como seguinte item: Id: ${item.ProdutoId} - "${nomeProduto}", Quantidade: ${item.quantidade} para o Cliente ID - ${item.clienteId}! Para esse cliente o carrinho está com o Valor Total de: R$ ${valorTotalCliente}.`);
    }
};

//alterar a quantidade de um produto no carrinho de um cliente.
export function atualizarQuantidadeCarrinho(clienteId: number, produtoId: number, novaQuantidade: number): boolean {
    //valida se o produto existe no sistema
    const produto = buscarProdutoId(produtoId);
    if (!produto) {
        console.log("Produto não encontrado no sistema.");
        return false;
    }

    //valida se há estoque suficiente para a nova quantidade
    if (produto.estoque < novaQuantidade) {
        console.log(`Estoque insuficiente. Estoque disponível: ${produto.estoque}`);
        return false;
    }

    //procura o item no carrinho correspondente ao cliente e ao produto
    const itemCarrinho = carrinho.find(item => item.clienteId === clienteId && item.ProdutoId === produtoId);

    if (!itemCarrinho) {
        console.log("Produto não encontrado no carrinho para este cliente.");
        return false;
    }

    //atualiza a quantidade do item
    itemCarrinho.quantidade = novaQuantidade;
    console.log(`Quantidade do produto ID ${produtoId} atualizada para ${novaQuantidade} com sucesso para o cliente ID ${clienteId}.`);
    return true;
}