# 🚀 MiniProjeto Ecommerce - Back-End (Node.js) - Turma T5

Nome do Projeto: Mini Projeto de Sistema de Gerenciamento de E-commerce com TypeScript.
Nome do Estudante: Sérgio Bandeira Fernandes - Desenvolvedor Back-end (Backend-nodev5-ciclo2)
---

## 📌 Objetivo da aplicação

O objetivo da aplicação é simular o banco de dados de um e-commerce fazendo cadastrado, consulta, remoção e atualização de produtos e clientes, assim como fazendo inclusão e exclusão de itens do carrinho e finalização de Pedidos e atualização do estoque após finalização do Pedido.

---

## ✨ Funcionalidades

- [x] Funcionalidade 1 (ex: apresentação do itens em estoque)
- [x] Funcionalidade 2 (ex: buscar produto por seu ID e categoria)
- [x] Funcionalidade 3 (ex: cadastrar novos produtos - informar se já tem produto cadastrado)
- [x] Funcionalidade 4 (ex: atualização de produtos, seja valor ou quantidade)
- [x] Funcionalidade 5 (ex: remover produtos)
- [x] Funcionalidade 6 (ex: apresentar clientes cadastrados no sistema)
- [x] Funcionalidade 7 (ex: cadastrar novos clientes)
- [x] Funcionalidade 8 (ex: buscar cliente pelo seu ID)
- [x] Funcionalidade 9 (ex: adicionar itens ao carrinhos referenciado seu ID e o ID do Cliente)
- [x] Funcionalidade 10 (ex: Apresentar o valor total do cliente no carrinho)
- [x] Funcionalidade 11 (ex: remover itens do carrinho)
- [x] Funcionalidade 12 (ex: atualizar item no carrinho)
- [x] Funcionalidade 13 (ex: mostrar atualização do carrinho)
- [x] Funcionalidade 14 (ex: Finalizar Pedido do cliente)
- [x] Funcionalidade 15 (ex: consultar todos os Pedidos Registrados)
- [x] Funcionalidade 16 (ex: consultar Pedido através do ID do cliente)
- [x] Funcionalidade 17 (ex: atualizar o estoque após a finalização do Pedido)

---

## 🛠️ Tecnologias Utilizadas
- **Javascript / TypeScript**
- **node.js**
- **git**
- **github**

---

## 📁 Estrutura de Pastas e Arquivos

Miniprojeto_Ecommerce-Back_End_Node_T5
├── 📁 src/
│   ├── carrinho.ts/
│   ├── cliente.ts/
│   ├── main.ts      # Execução conjunta de toda a funcionalidade do projeto (JavasScript / TypeScrip)
│   ├── pedidos.ts   # Execução de Pedidos (JavaScript / TypeScript)
│   ├── produtos.ts  # Execução de Produtos (JavaScript / TypeScript)
│   ├──types.ts      # Criação das tipagens para executar cada arquivo mencionado anteriormente
├── .gitignore       # Arquivos/pastas ignorados pelo Git
├── tsconfig.json    # Configuração para a execução do projeto para TypeScript em JavasScript

---

## ⚙️ Instruções de Compilação

- [git](Verificação se seu dispositivo tem o Git instalado)
- [node.js](Verificar a versão do node)
- [VSCode](Ter na máquina o VS Code instalado)

---

## ⚙️ Instruções de Execução

`` Bash
# 1. Clone este repositorio
$ git clone [https://github.com/SergioBandeiraFernandes/Miniprojeto_Ecommerce_Back_End_Node_T5]

# 2. Acessa a pasta do projeto no terminal
$ cd seu-repositorio

# 3. Instale as dependências
$ npm install

# 4. Execute a aplicação
$ npm start

---

## 💡 Exemplos das Principais Operações

```typescript

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
        quantidade: quantidade,
    };

    // Adiciona o item ao carrinho
    carrinho.push(novoItem);
    console.log(`CarrinhoId: ${carrinhoId} tem como seguinte item: Id: ${produto.id} - "${produto.nome}" - quantidade: ${novoItem.quantidade} adicionado com sucesso para o cliente ID - ${clienteId}!. Para esse cliente o carrinho está com: `);
    return true;
};
`

```typeScript

// função para consultar todos os pedidos registrados.

export function listarTodosPedidos(): void {
    if (listaPedidos.length === 0) {
    console.log("\nNão há registro de Pedidos!");
    return;
};
    for (const pedido of listaPedidos){
        const itensListaPedido = pedido.itens.map(item => `Id: ${item.idProduto} - ${item.nomeProduto}, quantidade: ${item.quantidadeCarrinho}.`).join('');

        console.log(
            `--------------------------------------------`
            +
            `\nPedido Nº ${pedido.id}:`
            +
            `\nCliente Id: ${pedido.clienteId}`
            +
            `\nProduto: ${itensListaPedido}`
            +
            `\nValor Total Pedido: R$${pedido.TotalPedido}`
            +
            `\nData do Registro do Pedido: ${pedido.dataPedido.toLocaleString()}`
            +
            `\n------------------------------------------\n`
        );
    };
};
`
---

## ⚙️ Regras de Negócio Implementadas

### 🛒 Lista do estoque
 - Itens com seus respectivos valores e quantidades
 - Cadastrar, atualizar e remover itens da lista

### 🛒 Lista de clientes
 - Lista com cliente
 - Cadastrar novos clientes

## 🛒 Carrinho
- Inserir e remover itens do carrinho
- Calcular o valor do itens no carrinho referente ao cliente

## 🛒 Pedido
- Finalizar Pedido
- Trazer o valor Total do Pedido referente ao cliente

---








