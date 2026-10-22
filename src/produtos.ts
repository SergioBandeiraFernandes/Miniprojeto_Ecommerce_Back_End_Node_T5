import type { Produto } from "./types";

import type { Categoria } from "./types";


//lista de produtos cadastrados no sistema.
export const produtos: Produto[] = [
    {
        id: 1,
        nome: "Notebook Dell Latitude 5420",
        categoria: "TI",
        preco: 5000,
        estoque: 4
    },
    {
        id: 2,
        nome: "TV Samsung 55 polegadas",
        categoria: "Linha Marrom",
        preco: 2200,
        estoque: 5
    },
    {
        id: 3,
        nome: "Refrigerador Brastemp Frost Free",
        categoria: "Linha Branca",
        preco: 1500,
        estoque: 4
    },
    
]


//tras a lista dos produtos cadastrados no sistema.
export function listarProdutos(): Produto[] {
    for (const produto of produtos) {
        console.log(`Id: ${produto.id}, Descrição: ${produto.nome}, Categoria: ${produto.categoria}, Valor: R$ ${produto.preco},00 , Estoque Disponível: ${produto.estoque} und.`);
    
    }
    return produtos;
}

//busca um produto pelo seu id cadastrado no sistema.
export function buscarProdutoId(id: number): Produto | undefined {
    return produtos.find(produto => produto.id === id);
}


//busca o produto de acordo com uma parte do descritivo/nome do produto.
export function buscarProdutoNome(nome: string): Produto[] {
  const buscarCaracteres = nome.toLowerCase();
  return produtos.filter(produto => produto.nome.toLowerCase().includes(buscarCaracteres));
}

export const produtoFiltrado = buscarProdutoNome("sam");

export function buscarProdutoCategoria(categoria: string): Produto | undefined {
    return produtos.find(produto => produto.categoria === categoria);
}
