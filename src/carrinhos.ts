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
        quantidade: quantidade
    };

    // Adiciona o item ao carrinho
    carrinho.push(novoItem);
    console.log(`Id: ${produto.id} - "${produto.nome}" adicionado com sucesso para o cliente ID - ${clienteId}!. Para esse cliente o carrinho está com: `);
    return true;
}

// Calcula o subtotal de um item específico do carrinho
export function calcularSubtotalItem(item: Box): number {
    const produto = buscarProdutoId(item.ProdutoId);
    if (!produto) return 0;

    return item.quantidade * produto.preco;
}

// Calcular o valor total do carrinho
export function calcularValorTotalCarrinho(clienteId?: number): number {
    let valorTotal = 0;

    for (const item of carrinho) {
        if (clienteId === undefined || item.clienteId === clienteId){
            valorTotal += calcularSubtotalItem(item);
        }
    }
    return valorTotal;
}
