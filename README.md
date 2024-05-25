Objetivo:
Desenvolver uma aplicação funcional utilizando Python, FastAPI e MongoDB, que consuma APIs de CEP e Pokémon, implemente estratégias de cache e utilize autenticação JWT.

Instruções:

Desenvolvimento da Aplicação:
A aplicação envolve o frontend e backend, o frontend deverá realizar o login no backend do Fastapi, depois exibir uma janela/página simples com um formulário de cadastro, mas o cadastro não será digitado pelo usuário, e sim haverá um input que servirá de busca para a api pokemon para buscar os dados pelo nome ou ID, depois dessa primeira busca no mesmo formulário um campo para buscar o CEP na API do viacep e preencher esses campos, após o formulario esta completo o botão salvar, precisa enviar os dados para o bakend fastapi para cadastrar os dados e exibir uma listagem de "pessoas ficticias" pokemons cadastrados, para atualizar dados é necessario um botão para editar e outro para excluir.
a estrategia de cache é para economizar a requisição as respectivas API caso busque o mesmo CEP ou pokemon

Autenticação:
Implementar um sistema de registro e login utilizando JWT.
Garantir que as rotas de cadastro de dados só sejam acessíveis por usuários autenticados.

Consumo de APIs:
Implementar chamadas às APIs de CEP e Pokémon para obter os dados necessários.
Consumir a API de CEP para obter informações de endereço.
Consumir a API de Pokémon para obter informações sobre um Pokémon específico.

Cadastro de Dados:
Criar uma rota em FastAPI que receba os dados do Pokémon e do endereço via POST.
Armazenar os dados recebidos no MongoDB.

Cache:
Implementar uma estratégia de cache para otimizar as chamadas às APIs externas.
Utilizar uma biblioteca de cache (como aiocache) para armazenar e reutilizar dados (aqui o cache de busca pode ser no frontend ou no backend).

Funcionalidades Mínimas
Sistema de registro e autenticação com JWT.
Consumo das APIs de CEP e Pokémon.
Cadastro de dados de Pokémon e endereço, enviados para uma rota FastAPI autenticada.
Armazenamento dos dados no MongoDB.
Implementação de cache para otimizar chamadas às APIs.

Funcionalidades desenvolvidas até agora:
- Persistência com banco de dados MongoDB
- Autenticação com JWT
