import {listarProdutos, 
        buscarProdutoId, 
        buscarProdutoNome, 
        produtoFiltrado, 
        buscarProdutoCategoria} from "./produtos";
import {Produto} from "./types";

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