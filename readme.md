configuração docker(faz no git bash, abre o docker antes)

docker pull mysql:8
docker run -d --name nome_do_server -e MYSQL_ROOT_PASSWORD=senha -p 3306:3306 mysql:8
(nome_do_server é aula e a senha é 1234)

comandos do sql

create database aula
use aula

create table alunos(
    id integer primary key auto_increment,
    nome varchar(200) not null,
    senha varchar(10) not null
)

insert into alunos(id, nome, senha) values (null, "ale", "1234")