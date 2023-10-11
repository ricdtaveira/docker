# 1. Introdução #
>
Docker é uma plataforma para executar aplicativos carregados 
na memória em unidades leves chamadas contêineres.
>
## 1.1 Container ## 
>
Um container no contexto do Docker é uma unidade de software
leve e portátil que encapsula uma aplicação alocada em um espaço de
de memória reservado. No conteiner são alocadas as dependências 
e bibliotecas necessárias para que a aplicação possa ser executada de forma consistente em diferentes 
ambientes. 
>
>
O Docker é uma plataforma de código aberto que automatiza o 
processo de criação, implantação e execução desses 
containers
>

## 1.2 Arquitetura do Docker ##
>
Aqui estão os principais componentes e como o Docker gerencia um 
container:

Docker Engine:

O Docker Engine é o núcleo da plataforma Docker. Ele gerencia a criação, 
execução e distribuição dos containers.

Docker Image:

Uma imagem Docker é uma representação leve e autossuficiente de 
uma aplicação, que inclui todo o ambiente de execução, dependências, bibliotecas e código necessários para executar a aplicação.
As imagens são criadas a partir de um arquivo chamado Dockerfile, que contém instruções para construir a imagem camada por camada.
Docker Container:

Um container Docker é uma instância em execução de uma imagem Docker.
Os containers são isolados uns dos outros e do sistema operacional subjacente, garantindo a portabilidade e a consistência da aplicação.
Docker Registry:

É um repositório onde as imagens Docker são armazenadas e compartilhadas, como o Docker Hub ou repositórios privados.
Os usuários podem fazer pull (baixar) e push (enviar) imagens para o registro.
Comandos e Interface do Docker:

O Docker oferece uma interface de linha de comando (CLI) que permite aos usuários interagir com o Docker Engine e gerenciar containers e imagens.
Os comandos incluem a criação, execução, parada, reinicialização, remoção e outras operações em containers e imagens.
Funcionamento básico:

Criação da Imagem:

O desenvolvedor define um Dockerfile descrevendo os passos necessários para construir uma imagem.
Usando o comando docker build, o Docker cria uma imagem a partir do Dockerfile.
Execução do Container:

Usando o comando docker run, o Docker inicia um container a partir da imagem criada.
O container é isolado do ambiente do host e tem seu próprio sistema 
de arquivos, processos e redes.

Interoperabilidade:

Os containers podem se comunicar uns com os outros através de redes 
especificadas. Eles podem ser escalonados horizontalmente para 
lidar com a carga, e os dados podem ser gerenciados de maneira 
eficiente.

Persistência de Dados:

O Docker permite a persistência de dados através de volumes e bind mounts, garantindo que os dados críticos não sejam perdidos ao parar ou remover o container.
Essa é uma visão geral básica de como os containers funcionam sob a gerência do Docker. Eles proporcionam eficiência, portabilidade e isolamento, facilitando a implantação e execução de aplicativos em ambientes diferentes.
>