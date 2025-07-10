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
            const response = await fetch("https://leandro0919.app.n8n.cloud/webhook-test/ce946dd2-7d81-4593-a6ed-d0750b58ae5c", { 
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
            
            preview.style.display = 'block';
            preview.innerHTML = result.code;

            let styleTag = document.getElementById('dynamic-style');
            if (!styleTag) styleTag.remove();
            if (result.style) {
                styleTag = document.createElement('style');
                styleTag.id = 'dynamic-style';
                styleTag.textContent = result.style;
                document.head.appendChild(styleTag);
            }

        } catch (error) {
            console.error('Erro ao gerar o background:', error);

        } finally {
            setLoading(false); // Para de carregar
        }

    });

    function setLoading(isLoading) {
        btn.innerHTML = isLoading ? 'Gerando...' : 'Gerar Background';
    }

});
