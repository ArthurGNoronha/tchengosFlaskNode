Esse projeto mostra como fazer uma comunicação por API'S de dois sistemas diferentes, um em flask e outro em node.
Atualmente o sistema é um gerador de senha, com diferentes opções.
O Node está sendo utilizado para renderizar as páginas e fazer requisições, enquanto o flask está atuando como API para gerar as senhas.
O sistema não foi testado o suficiente, então terá vários erros, basta procurar.
Como acredito que ninguém vá realmente ler isso eu irei falar que tenho uma grande atração pela Kiriko de Overwatch 2 como pode ser tão linda e fabulosa.

Como iniciar:
Criar uma venv (Máquina virtual do python para controlar melhor as bibliotecas) utilizando:
python -m venv venv
.\venv\Scripts\activate
pip install flask

Iniciar o Servidor Flask
cd flaskApp
python app.py
O servidor vai estar disponível em http://127.0.0.1:5000 (Ou localhost:5000)

Iniciar o Servidor Node
Novo terminal
cd nodeApp
node app
O servidor vai estar disponível em http://127.0.0.1:3000 (Ou localhost:3000)

Testando
Entre na rota / do servidor node(3000)