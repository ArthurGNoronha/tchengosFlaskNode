Esse projeto mostra como fazer uma comunicação por API'S de dois sistemas diferentes, um em flask e outro em node. O node faz uma requisição para o Flask, processando os dados e retornando um arquivo JSON como resposta.

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
Entre na rota /flask do servidor node(3000/flask)