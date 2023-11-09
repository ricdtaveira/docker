# Docker Compose #

## Introdução ##
>
O `Docker Compose` é uma ferramenta para definir e executar 
aplicativos em imagens Docker envolvendo vários contêineres. 
>
>
As informações que descrevem os serviços e redes de um aplicativo 
envolvendo vários contêineres estão contidas em um arquivo YAML, 
chamado `docker-compose.yml`.
>
>
Uma das funções básicas do Docker Compose é o `build` imagens definidas 
em Dockerfiles. 
>
>
No entanto, o Docker Compose é capaz de orquestrar a conteinerização 
e a implantação de vários pacotes de software. 
>
>
Você pode selecionar quais imagens serão usadas para determinados 
serviços, definir variáveis ​​específicas do ambiente, configurar 
conexões de rede e muito mais.
>

## Introdução ao build do Docker Compose ##
>
A construção de uma aplicação usando o Docker Compose envolve a
a definição de um arquivo docker-compose.yaml que cria um fluxo que
automatiza a instalação e configuração de vários contêineres. 
>
>
São recursos que o Docker Compose provê:
1) Vários ambientes isolados em um único host;
2) Preservação dos dados de volume quando contêineres forem criados;
3) Recriação apenas dos contêineres que foram alterados;
4) Movimentação de variáveis ​compartilhadas entre ambientes;
5) Orquestração de vários contêineres que funcionam juntos.
>

## Instalação do Docker Compose ##

>
Após instalar o Docker Engine, execute o comando abaixo: 
>
>
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```
>

>
Aplique permissões ao binário, dessa forma:
>
```
sudo chmod +x /usr/local/bin/docker-compose
```
>
Teste a instalação para verificar o funcionamento:
>
```
$ docker-compose --version
```

