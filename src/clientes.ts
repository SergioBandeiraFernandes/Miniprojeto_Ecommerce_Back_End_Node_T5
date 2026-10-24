import type { Clientes } from "./types";

export const clientes: Clientes[] = [
    {
        id: 1,
        nome: "Sérgio Bandeira Fernandes",
        email: "sergio.bandeira@example.com"
    },
    {
        id: 2,
        nome: "Lucas Bandeira Fernandes",
        email: "lucas.bandeira@example.com"
    },
    {
        id: 3,
        nome: "Peterson Bandeira Fernandes",
        email: "peterson.bandeira@example.com"
    },
    {
        id: 4,
        nome: "Giovanna Dias Fernandes",
        email: "giovanna.dias@example.com"
    },
    {
        id: 5,
        nome: "Sergio Fernandes Oliveira Santos",
        email: "sergio.fernandes@example.com"
    },
    {
        id: 6,
        nome: "Elaine Bandeira Fernandes",
        email: "elaine.bandeira@example.com"
    },
    {
        id: 7,
        nome: "Samuel Bandeira Fernandes",
        email: "samuel.bandeira@example.com"
    },
]

//Listar todos os clientes que tem no sistema.
export function listarClientes(): void {
    for (const cliente of clientes) {
        console.log(`Id: ${cliente.id}, nome: ${cliente.nome}, email: ${cliente.email}`);
    
    }
}

//Busca o cliente por uma ID informada.
export function buscarClienteId(id: number): Clientes | undefined {
    return clientes.find(clientes => clientes.id === id);
}

//Busca o cliente por um e-mail informado.
export function buscarClienteEmail(email: string): Clientes | undefined {
    return clientes.find(clientes => clientes.email === email);
}

//Cadastra um novo cliente. Valida também se o ID ou o e-mail já estão cadastrados.
export function cadastrarClientes(novoCliente: Clientes): boolean {
    const clienteJaCadastradoId = buscarClienteId(novoCliente.id);
    const clienteJaCadastradoEmail = buscarClienteEmail(novoCliente.email);
    if (clienteJaCadastradoId || clienteJaCadastradoEmail) {
        console.log(`O cliente informado já está cadastrado no sistema!`);
        return false;
    }
    clientes.push(novoCliente);
    console.log(`Cliente foi cadastrado com sucesso!`);
    return true;
}