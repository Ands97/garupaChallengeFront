# FrontEnd do Projeto 


# Sobre o projeto

O projeto consiste em uma aplicação com ReactJs, onde de inicio foi criado um hook onde centralizo todas as chamadas as APIs e um componente que valida se o usuário está autorizado a entrar ou não na página principal, caso não ele retorna a página de login.

Para a parte de autorização e autenticação foi feito um context onde ele envia ao hook useApi a chamada e caso o usuário exista é setado nos states as informações do usuário (token e dados do user). Na página de login, quando inserido os campos necessários, é enviado uma request ao hook onde retorna o status do usuário, caso seja true, ele redireciona para a página home. Em paralelo é feita uma chamada para o context de autorização, para serem setados os valores de usuário e token em state e localstorage respectivamente.

Para a requisição dos itens



# EndPoints

Foram feitos inicialmente dois endpoints, o de registro de novo usuário (/api/register) onde no controller faço uma verificação se estou recebendo os campos necessários via corpo da requisção e os salvo em constantes. Apenas o ID usei um identificador chamado UUIDV4.
Logo após é feita uma verificação se o usuário já está cadastrado no banco de dados, se não, faço a criação do mesmo, criptografando com o bcrypt a senha enviada e gerando um token logo após com o jsonwebtoken, passando id, nome e senha, retornando o mesmo.

O segundo endpoint (/api/login) no controller faço a verificação se estou recebendo os campos necessários via corpo da requisição e os salvo em constantes. Faço a busca no banco se o usuário existe e se a senha descriptografada é a mesma cadastrada, caso verdadeiro, é feito o mesmo processo de geração de token do controller de registro de usuário, retornando um status como true e o token gerado.

Os demais endpoints estão protegidos por um middleware, que faz a verificação se na chamada estou recebendo os headers authorization, logo após faço a desestruturação do array que é "criado" após usar o metodo split(). Faço a verificação do token, caso seja válido, ele deixa avançar para a rota seguinte.

Na rota (/api/users) logo após ser authorizazdo pelo middleware, faço uma busca de todos os usuários do banco e os retorno em json.

Na rota (/api/userId/:id) recebo o id por parametro, faço a busca do mesmo no banco, caso exista, retorna o usuário em json.

Na rota ('/api/updateUser/:id') recebo o id por parâmetro para identificar quem vai ser atualizado e o nome, email e senha no corpo da requisição. Fiz várias verificações, onde conforme o que for recebido, ele atualiza a informação no banco. Ex: Caso receba apena o nome, a função atualiza apenas o nome no banco de dados.

Na rota ('/api/deleUser/:id') recebo o id do usuário a ser deletado por parâmetro.

- /api/register => post (Criar novo usuário)
- /api/login => post (Login)
- /api/users => get (Listar todos os usuários)
- /api/userId/:id => get (Buscar um usuário específico)
- /api/updateUser/:id => put (Atualizar um usuário)
- /api/updateUser/:id => delete (Deletar um usuário)


# Tecnologias utilizadas

## Back end
- Typescript
- bcrypt
- express
- jsonwebtoken
- Postgres
- uuidv4
- Sequelize

# Como executar o projeto


## Back end web
Pré-requisitos: npm / yarn / typeScript global /Postgre

```bash
# clonar repositório
git clone 

# entrar na pasta do projeto 
cd path

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Anderson Afonso

Linkedin: https://www.linkedin.com/in/anderson-afonso-94449815b/
GitHub: https://github.com/Ands97
