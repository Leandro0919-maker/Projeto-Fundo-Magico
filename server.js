// 1. Chamar as ferramentas que instalamos
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const cors = require('cors');

// 2. Configurar nossas ferramentas
dotenv.config(); // Carrega a chave secreta do arquivo .env
const app = express(); // Cria o nosso servidor
app.use(express.json()); // Permite que o servidor entenda os pedidos em JSON
app.use(cors()); // Permite que nosso site fale com este servidor

// 3. Preparar o Gênio (Gemini)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 4. Ensinar o feitiço principal ao nosso Mago
// Ele vai esperar por pedidos no endereço /gerar-fundo
app.post('/gerar-fundo', async (req, res) => {
    try {
        // Pega a descrição que o usuário digitou no site
        const { description } = req.body;
        console.log('Recebi um pedido para criar um fundo sobre:', description);

        // Escolhe o modelo do Gênio que vamos usar
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // A Mágica Acontece Aqui! Este é o pedido que fazemos ao Gênio.
        // É MUITO importante ser claro com o que queremos de volta.
        const prompt = `
            Você é um especialista em criar designs de interface com HTML e CSS.
            Um usuário pediu um fundo com a seguinte descrição: "${description}".

            Sua tarefa é gerar APENAS um código JSON contendo o HTML e o CSS para criar esse fundo.
            O JSON deve ter duas chaves: "code" e "style".
            - Na chave "code", coloque uma única div HTML com a classe "magic-background". Ex: <div class="magic-background"></div>
            - Na chave "style", coloque APENAS o código CSS para estilizar a classe ".magic-background". O CSS deve ocupar 100% da largura e altura (width: 100%; height: 100vh;) e ter a aparência que o usuário pediu. Não coloque a tag <style> ou \`\`\`css.

            Exemplo de resposta para o pedido "fundo do oceano":
            {
                "code": "<div class=\\"magic-background\\"></div>",
                "style": ".magic-background { width: 100%; height: 100vh; background: linear-gradient(to bottom, #00c6ff, #0072ff); }"
            }

            Agora, gere o JSON para o pedido: "${description}".
        `;

        // Envia o pedido para o Gênio
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log('O Gênio respondeu:', text);

        // Limpa a resposta do Gênio para garantir que é um JSON válido
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        
        // Envia a resposta limpa de volta para o nosso site
        res.json(JSON.parse(cleanedText));

    } catch (error) {
        console.error("O Gênio ficou confuso:", error);
        res.status(500).json({ error: 'Não consegui criar a mágica. Tente novamente.' });
    }
});

// 5. Ligar a Torre do Mago
const port = 3000;
app.listen(port, () => {
    console.log(`A Torre do Mago está funcionando na porta ${port}! �`);
});