document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('.form');
    const btn = document.querySelector('.btn');
    const htmlCode = document.querySelector('.html-code');
    const cssCode = document.querySelector('.css-code');
    const preview = document.querySelector('.preview-area');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const description = document.getElementById('description').value;

        setLoading(true); // Começa carregamento antes de enviar

        try {
           
            const response = await fetch("http://localhost:3000/gerar-fundo", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description })
            });

            if (!response.ok) {
                throw new Error('Erro na resposta do servidor');
            }

            const result = await response.json();
            console.log(result);

            htmlCode.textContent = result.code;
            cssCode.textContent = result.style;
            
            // Aqui aplicamos a mágica na tela
            const previewContainer = document.createElement('div');
            previewContainer.innerHTML = result.code;
            
            const styleTag = document.createElement('style');
            styleTag.textContent = result.style;
            
            preview.innerHTML = ''; // Limpa a pré-visualização anterior
            preview.appendChild(previewContainer);
            preview.appendChild(styleTag);
            preview.style.display = 'block';
            
            // O código abaixo para injetar o estilo no <head> também funciona,
            // mas colocar direto na área de preview é mais contido.
            /*
            let styleTag = document.getElementById('dynamic-style');
            if (styleTag) styleTag.remove();
            if (result.style) {
                styleTag = document.createElement('style');
                styleTag.id = 'dynamic-style';
                styleTag.textContent = result.style;
                document.head.appendChild(styleTag);
            }
            */

        } catch (error) {
            console.error('Erro ao gerar o background:', error);

        } finally {
            setLoading(false); // Para de carregar
        }

    });

    function setLoading(isLoading) {
        btn.disabled = isLoading; // Desativa o botão enquanto gera
        btn.innerHTML = isLoading ? 'Gerando...' : 'Gerar Background';
    }

});