Aqui está um exemplo de um arquivo `docker-compose.yml` que cria um contêiner para o phpMyAdmin e outro para o MySQL:

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: mysql_container
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydatabase
      MYSQL_USER: myuser
      MYSQL_PASSWORD: mypassword
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: phpmyadmin_container
    environment:
      PMA_HOST: mysql
      PMA_PORT: 3306
      PMA_USER: root
      PMA_PASSWORD: rootpassword
    ports:
      - "8080:80"
    depends_on:
      - mysql

volumes:
  mysql_data:
```

### Explicação:

- **version**: Define a versão do Docker Compose.
- **services**: Define os serviços que serão executados.

    - **mysql**:
        - **image**: Especifica a imagem do MySQL.
        - **container_name**: Nome do contêiner para fácil identificação.
        - **environment**: Variáveis de ambiente para configurar o MySQL.
        - **volumes**: Persiste os dados do MySQL em um volume.
        - **ports**: Mapeia a porta 3306 do MySQL no contêiner para a porta 3306 no host.

    - **phpmyadmin**:
        - **image**: Especifica a imagem do phpMyAdmin.
        - **container_name**: Nome do contêiner para fácil identificação.
        - **environment**: Variáveis de ambiente para configurar o phpMyAdmin.
        - **ports**: Mapeia a porta 80 do phpMyAdmin no contêiner para a porta 8080 no host.
        - **depends_on**: Define a dependência do contêiner MySQL para garantir que ele seja iniciado antes do phpMyAdmin.

- **volumes**: Define o volume para persistir os dados do MySQL.

Com esse arquivo, você pode rodar `docker-compose up -d` para iniciar os contêineres. 

O phpMyAdmin ficará acessível em `http://localhost:8080`.