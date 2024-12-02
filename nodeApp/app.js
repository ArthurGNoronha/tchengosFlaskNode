const express = require('express');
const axios = require('axios'); // Importando o Axios

const app = express();
app.use(express.json()); // Habilitar JSON no Express

app.get('/flask', async (req, res) => {
    try {
        // Fazendo a requisição ao Flask
        const response = await axios.post('http://127.0.0.1:5000/flask', {
            message: 'Essa mensagem foi enviada pelo Node :)'
        });

        res.json(response.data); // Retornando a resposta do Flask para o cliente
    } catch (error) {
        console.error('Erro ao conectar ao Flask:', error.message);
        res.status(500).send('Erro ao se comunicar com o Flask');
    }
});

app.listen(3000, () => {
    console.log('Servidor Node.js rodando em: http://localhost:3000');
});