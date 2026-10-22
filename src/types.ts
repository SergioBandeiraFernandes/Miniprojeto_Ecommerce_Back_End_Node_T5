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
