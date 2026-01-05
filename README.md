# Controle de Estoque

# documentação do meu projeto

é um projeto fullstack prático para controle de estoque, feito para treinar NextJS e NestJS, dois frameworks importantes para desenvolvedores JavaScript para criar um sistema completo e robusto. Os dois utilizam o TypeScript, o que quer dizer mais segurança na aplicação, por usar tipagem, e o NestJS também utiliza conceitos como decoradores que abstraem funcionalidades internas no back end, o que facilita o desenvolvimento e o foco em criar as regras de negócio.

# No Frontend

ele funciona de forma simples, criei 3 áreas

- Início: onde mostra o total de produtos, quantos estão em estoque e a última movimentação feita, obtendo os dados da data
- Produtos: esta área temos um simples formulário contendo informações sobre o nome, categoria, quantidade e preço do produto, o botão de criar e abaixo do formulário temos uma tabela, que informa quais são os dados cadastrados e no final de cada linha duas ações, que seria editar e excluir o produto
- movimentações: esta área mostra a mesma estrutura de formulário e tabela, onde no formulário temos informações sobre o tipo de movimentação (se é entrada ou saída), o produto a ser selecionado, neste caso mostra dentro dele um select do nome do produto, e a quantidade de produtos que vão sair ou entrar e na tabela abaixo vai mostrar as informações do tipo, o produto, quantidade e a data que foi feita a criação da movimentação


## No Backend

primeiro instalei o prisma, ORM muito interessante para simplificar a criação de tabelas no banco de dados
e fiz as configurações de ambiente e criação dos modelos

Model: no banco de dados criei duas tabelas, produtos e movimentações, utilizando o Prisma como ORM para tratar os dados de forma mais simples

Routes:

GET /produtos: Retorna todos os produtos (usado na tabela e no select de movimentações).
POST /produtos: Cria um novo produto.
PUT /produtos/:id: Atualiza os dados (Ação do botão Editar).
DELETE /produtos/:id: Remove o produto (Ação do botão Excluir).

GET /movimentacoes: Retorna o histórico para a tabela.
POST /movimentacoes: Cria a movimentação e dispara a atualização de saldo no produto relacionado.