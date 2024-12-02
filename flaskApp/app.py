from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/flask', methods=['POST'])
def execute():
    data = request.json  # Obter o JSON da requisição

    result = f"pessego: {data['message']}"  # Processar a mensagem
    return jsonify({"result": result})  # Retornar a resposta como JSON

if __name__ == '__main__':
    app.run(port=5000)
