Projeto Fundo Mágico ✨
Bem-vindo ao Fundo Mágico! Esta é uma aplicação web que utiliza o poder da Inteligência Artificial do Google (Gemini) para gerar fundos (backgrounds) em CSS a partir de uma simples descrição em texto. Diga o que você imagina, e a aplicação criará uma pré-visualização e o código correspondente para você usar em seus próprios projetos.

📸 Demonstração
(Dica: Grave um GIF rápido da tela mostrando o app em funcionamento e substitua o link acima para que todos vejam seu projeto em ação!)

🚀 Funcionalidades
Interface Simples: Um campo de texto para você descrever o fundo dos seus sonhos.

Geração por IA: Utiliza o modelo Gemini do Google para interpretar seu pedido e gerar o código.

Pré-visualização em Tempo Real: Veja o resultado do fundo gerado diretamente na página.

Código Pronto para Uso: Copie facilmente os trechos de HTML e CSS gerados para implementar onde quiser.

Feedback Visual: O botão de geração informa ao usuário quando a mágica está acontecendo.

🛠️ Tecnologias Utilizadas
Este projeto é dividido em duas partes principais:

Frontend (O que você vê no navegador)
HTML5

CSS3

JavaScript (Vanilla)

Backend (O "Servidor Mágico")
Node.js

Express.js

Google Generative AI

Dotenv para gerenciamento de chaves de API.

CORS para permitir a comunicação entre o frontend e o backend.

⚙️ Instalação e Execução
Para executar este projeto em sua máquina local, siga os passos abaixo.

Pré-requisitos
Você precisa ter o Node.js instalado (que já vem com o npm).

Você precisa de uma chave de API do Google Gemini, que pode ser obtida no Google AI Studio.

Passo a Passo
Clone o repositório (ou simplesmente baixe os arquivos em uma pasta):

git clone https://github.com/seu-usuario/projeto-fundo-magico.git

Navegue até a pasta do projeto:

cd projeto-fundo-magico

Instale as dependências do servidor:

npm install

Crie o arquivo de ambiente:
Na pasta principal do projeto, crie um arquivo chamado .env.

Adicione sua chave de API:
Dentro do arquivo .env, adicione sua chave da API do Gemini no seguinte formato:

GEMINI_API_KEY=SUA_CHAVE_DE_API_SECRETA_VAI_AQUI

Inicie o servidor backend:

node server.js

Se tudo estiver correto, você verá a mensagem: A Torre do Mago está funcionando na porta 3000! ✨
Deixe este terminal rodando!

Abra a aplicação no navegador:
Encontre o arquivo index.html na pasta do projeto e abra-o com um duplo clique. Ele será executado no seu navegador padrão.

🖼️ Como Usar
Com o servidor rodando e o index.html aberto:

No campo de texto, descreva o fundo que você deseja (Ex: "céu noturno com estrelas cadentes", "gradiente com as cores do outono", "padrão de bolinhas coloridas").

Clique no botão "Gerar Background".

Aguarde um instante enquanto a IA processa o pedido.

Pronto! O fundo aparecerá na área de pré-visualização e os códigos estarão disponíveis para você copiar.

📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.