# FrontEnd do Projeto 


# Sobre o projeto

O projeto consiste em uma aplicação com ReactJs, onde de inicio foi criado um hook onde centralizo todas as chamadas as APIs e um componente que valida se o usuário está autorizado a entrar ou não na página principal, caso não, ele retorna a página de login.

Para a parte de autorização e autenticação foi feito um context onde ele envia ao hook useApi a chamada e caso o usuário exista é setado nos states as informações do usuário (token e dados do user). Na página de login, quando inserido os campos necessários, é enviado uma request ao hook onde retorna o status do usuário, caso seja true, ele redireciona para a página home. Em paralelo é feita uma chamada para o context de autorização, para serem setados os valores de usuário e token em state e localstorage respectivamente.

Para a listagem dos itens na página home, foi criado um hook chamado useBeer onde ele recebe o limite de itens a ser mostrado na tela como parâmetro. Dentro do hook há uma função que recebe a página atual e envia pro hook de requisição (useApi) a página atual e o limite de itens, o resultado é colocando dentro de um state onde é retornado no hook para na página home ser mapeado e mostrado em tela.

Para a paginação, foi criado também um hook (usePagination) onde é utilizado dois hooks do react-router-dom  (useLocation e useNavigate), para recupera e alterar as informações da query string. Dentro do meu hook usePagination é criado uma função junto com um pacote chamado query string para recuperar os dados da página atual. Na função eu pego o location e transformo o resultado em um objeto javascript, dentro desse objeto eu pego a página e transformo em um number, retornando-o. Essa função é passada dentro de um state chamado currentPage. Por fim faço o uso do useEffect para observar a página atual e alterar na url. Por fim é retornado do hook o state e a função que altera o mesmo.

Na página home eu faço o uso dos hooks criados para enviar o limite de itens, bem como o uso da páginação. São criadas funções que alteram a página atual e enviam para o hook fazer o processo citado acima. Além disso, foi feito um modal que ao clicar no 'more information' abre mais informações da cerveja clicada.



# Tecnologias utilizadas

## Front End
- Typescript
- Axios
- ReactJs
- query-string
- React-router-dom
- React-icons
- Vite

# Como executar o projeto


## Front End Web
Pré-requisitos: npm / yarn / typeScript

```bash
# clonar repositório
git clone 

# entrar na pasta do projeto 
cd path

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor

Anderson Afonso

Linkedin: https://www.linkedin.com/in/anderson-afonso-94449815b/
GitHub: https://github.com/Ands97
