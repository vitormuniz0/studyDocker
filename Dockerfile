# Aqui está falando para usar o node na sua versão aplpine que é uma versão basica
FROM node:alpine 

# falando o diretorio dentro da maquina que ele quer trabalhar
WORKDIR /usr/app

# Aqui está falando pra ele copiar todos os arquivos que começam com package e termina com json
COPY package*.json ./

# E vai rodar esse comnado
RUN npm install

# Então depois ele vai copiar todos o restante dos arquivos que sobram na pasta tambem
COPY . .

# A porta que o servidor lá dentro precisar expor para meu servidor acessar
EXPOSE 3000

# Aqui vai o comando que minha aplicação cprecisa rodar para ele dar start/ficar no ar
CMD  ["npm" , "start"]

# comdando para dar um build no docker "docker build -t vitormuniz/firstdockernode ."