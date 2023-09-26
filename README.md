# User List

`User List` é uma aplicação web de fácil utilização projetada para gerenciar informações de usuários. Esta aplicação fornece cadastro, listagem, atualização e exclusão de registros de usuário. 

### Tecnologias utilizadas
```bash
React | Styled-Components | Typescript | NodeJS | NestJS | TypeORM | Swagger | PostgreSQL | Docker | Nginx 
```

### Como rodar o projeto:
#### Instale o Docker
https://docs.docker.com/engine/install/ubuntu/

#### Instale o Docker Compose
```bash
$ sudo apt install docker-compose
```

#### Clone o repositorio
```bash
$ git clone git@github.com:ronycastroc/user-list-fullstack.git
```

#### Acesse a pasta
```bash
$ cd user-list-fullstack
```

#### Rode o comando
```bash
$ docker-compose up --build
```
#### Accesse o link
http://localhost

#### Para acessar a documentação com `Swagger`, acesse o link
http://localhost:5000/api

#### Lembre-se, antes de uma nova compilação, exclua os volumes com:
```bash
$ docker-compose down -v
```
