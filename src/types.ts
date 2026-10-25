export type Categoria = "TI" | "Linha Marrom" | "Linha Branca";

export type Produto = {
    id: number;
    nome: string;
    categoria: Categoria;
    preco: number;
    estoque: number;
}

export type Clientes = {
    id: number;
    nome: string;
    email: string;
}

export type Box = {
    CarrinhoId: number;
    clienteId: number;
    ProdutoId: number;
    quantidade: number;
}

export type Pedido = {
    id: number;
    clienteId: number;
    itens:  {
        idProduto: number;
        nomeProduto: string;
        quantidadeCarrinho: number;
    }[];
    TotalPedido: number;
    dataPedido: Date;
    }
