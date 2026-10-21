export type Categoria = "TI" | "Linha Marrom" | "Linha Branca";

export type Produtos = {
    id: number;
    nome: string;
    categoria: Categoria;
    preco: number;
    estoque: number;
}