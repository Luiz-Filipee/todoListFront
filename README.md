# TodoListApp

TodoListApp é uma aplicação web desenvolvida com Angular para consumir dados da API **ApiTodoList**. Esta aplicação permite que você interaja com sua lista de tarefas de itens de compras de forma intuitiva e visual, facilitando a criação, visualização, atualização e exclusão de tarefas.

## Funcionalidades

- **Criar Tarefa**: Adicione novas tarefas à sua lista de compras.
- **Listar Tarefas**: Visualize todas as tarefas disponíveis.
- **Atualizar Tarefa**: Edite detalhes de uma tarefa existente.
- **Excluir Tarefa**: Remova tarefas da lista.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento de aplicações web.
- **RxJS**: Biblioteca para programação reativa.
- **Bootstrap**: Framework CSS para estilização.
- **API**: Consome a API RESTful `ApiTodoList` desenvolvida em Java com Spring Boot.

## Requisitos

- Node.js (versão 14 ou superior)
- Angular CLI (versão 15 ou superior)

## Instalação

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seuusuario/todolistapp.git
    ```

2. **Navegue para o diretório do projeto:**

    ```bash
    cd todolistapp
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Configure o endpoint da API:**

    Atualize o arquivo `src/environments/environment.ts` com a URL da sua API `ApiTodoList`:

    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:8080' // Substitua pelo URL da sua API
    };
    ```

5. **Inicie a aplicação:**

    ```bash
    ng serve
    ```

6. **Acesse a aplicação:**

    Abra o navegador e vá para `http://localhost:4200`.

## Endpoints da API Consumidos

- **POST /tasks**
  - Adiciona uma nova tarefa.
- **GET /tasks**
  - Obtém uma lista de todas as tarefas.
- **GET /tasks/{id}**
  - Obtém uma tarefa específica.
- **PUT /tasks/{id}**
  - Atualiza uma tarefa existente.
- **DELETE /tasks/{id}**
  - Remove uma tarefa da lista.

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua modificação: `git checkout -b minha-modificacao`.
3. Faça commit das suas alterações: `git commit -am 'Adiciona nova funcionalidade'`.
4. Envie para o repositório remoto: `git push origin minha-modificacao`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida, entre em contato com [seuemail@example.com](mailto:seuemail@example.com).

