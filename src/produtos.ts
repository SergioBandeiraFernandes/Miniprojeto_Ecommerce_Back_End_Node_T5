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
    {
        id: 4,
        nome: "Fogão Electrolux 4 bocas",
        categoria: "Linha Branca",
        preco: 800,
        estoque: 6
    },
]


//tras a lista dos produtos cadastrados no sistema.
export function listarProdutos(): void {
    for (const produto of produtos) {
        console.log(`Id: ${produto.id}, Descrição: ${produto.nome}, Categoria: ${produto.categoria}, Valor: R$ ${produto.preco},00 , Estoque Disponível: ${produto.estoque} und.`);
    
    }
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

//busca o produto de acordo com a categoria que está pesquisando.
export function buscarProdutoCategoria(categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
}

//cadastrar novos produtos no sistema.
export function cadastrarProduto(produto: Produto): boolean {
    const produtoJaCadastrado = buscarProdutoId(produto.id);
    if (produtoJaCadastrado) {
        console.log(`O produto que está tentando cadastrar já existe no sistema. Por favor, tente novamente!`);
        return false;
    }
    produtos.push(produto);
    console.log(`Produto foi cadastrado com sucesso!`);
    return true;
}

//atualiza o produto cadastrado no sistema.
export function atualizarProduto(id: number, novosDados: Partial<Produto>): Produto | null {
    const index = produtos.findIndex(p => p.id === id);

    if (index === -1) {
        console.log(`Produto com ID ${id} não foi encontrado.`);
        return null;
    }

    // Validação para impedir valor negativo
    if (novosDados.preco !== undefined && novosDados.preco < 0) {
        console.log("\nAtenção: O valor do produto não pode ser negativo.");
        return null;
    }

    // Validação para impedir estoque negativo 
    // (Nota: se no seu tipo Produto o campo se chamar 'quantidade', substitua 'estoque' por 'quantidade')
    if (novosDados.estoque !== undefined && novosDados.estoque < 0) {
        console.log("\nAtenção: O estoque do produto não pode ser negativo.");
        return null;
    }

    // Mescla os dados e força a tipagem com 'as Produto' para satisfazer o TypeScript
    produtos[index] = {
        ...produtos[index],
        ...novosDados,
        id 
    } as Produto;

    console.log(`Produto com ID ${id} atualizado com sucesso.`);
    return produtos[index];
}

//