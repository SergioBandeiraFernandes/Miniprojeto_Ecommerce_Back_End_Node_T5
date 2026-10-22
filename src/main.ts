import {produtos} from "./produtos";
import {Produtos} from "./types";

export function listarProdutos(): void {
    for (const produto of produtos) {
        console.log(`Id: ${produto.id}, Descrição: ${produto.nome}, Categoria: ${produto.categoria}, Valor: R$ ${produto.preco}, Estoque Disponível: ${produto.estoque} und.`);
    }
}
console.log(`Segue a lista dos produtos que temos em estoque:`);
listarProdutos();