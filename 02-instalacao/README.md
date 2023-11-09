# Instalando Docker no Ubuntu #

>
A seguir é apresentado o passo-a-passo que instala o Docker no Ubuntu. Todos 
os comandos listados devem ser executados no seu terminal.
>
>
Inicie removendo versões anteriores do Docker da seguinte forma:
```
$ sudo apt-get remove docker docker-engine docker.io
```
>
Em seguida atualize o banco de dados de pacotes, digitando:
```
$ sudo apt-get update
```
>
>
Adicione ao sistema a chave GPG oficial do repositório do Docker, digitando:
```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
>
>
Adicione o repositório do Docker às fontes do APT digitando:
```
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
>
>
Atualize o banco de dados de pacotes, para ter acesso aos pacotes do Docker a partir do novo repositório adicionado:
```
$ sudo apt-get update
```
>
>
Por fim, instale o pacote docker-ce:
```
$ sudo apt-get install docker-ce
```
>
>
Verificar se o Docker foi instalado corretamente verificando a sua versão:
```
$ sudo docker version
```
>
Adicione o seu usuário ao grupo docker para executar o Docker sem precisar 
de `sudo`, usando o seguinte comando:
```
$ sudo usermod -aG docker $(whoami)
```

>

