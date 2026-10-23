import {listarProdutos, 
        buscarProdutoId, 
        buscarProdutoNome, 
        produtoFiltrado, 
        buscarProdutoCategoria,
        cadastrarProduto,
        atualizarProduto} from "./produtos";
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

