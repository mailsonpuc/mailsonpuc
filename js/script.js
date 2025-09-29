document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todas as imagens dentro da classe projects-list
    const projectImages = document.querySelectorAll('.projects-list img');

    // Itera sobre cada imagem
    projectImages.forEach(image => {
        // Adiciona um 'ouvinte' de evento de clique para cada imagem
        image.addEventListener('click', (event) => {
            // Previne o comportamento padrão do clique, caso a imagem esteja dentro de um link
            event.preventDefault();

            // Obtém o alt e src da imagem clicada para usar no pop-up
            const altText = event.target.alt;
            const imgSrc = event.target.src;


            if (imgSrc.endsWith('projeto1.png')) {
                console.log("Projeto 1 clicado");
                // Coloque o código específico para o Projeto 1 aqui
                // Mostra o pop-up do SweetAlert2
                Swal.fire({
                    title: altText,
                    html: `
                    <img src="${imgSrc}" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <br><br>
                    <p>
                    API RESTful de distros linux em ASP.NET Core completa, 
                    Backend com arquitetura limpa, integração com Azure SQL e padrões de design aplicados.
                    FrontEnd em vite React + TypeScript.
                    </p>
                    
                    <a href="https://github.com/mailsonpuc/LinuxApi" target="_blank" style="display: inline-block; margin-top: 15px;">
                    <button class="call-to-action">Ver no GitHub</button>
                    </a>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Fechar',
                    confirmButtonAriaLabel: 'Fechar o pop-up'
                });

            }

            else if (imgSrc.endsWith('projeto2.png')) {
                console.log("Projeto 2 clicado");
                // Código para o Projeto 2
                Swal.fire({
                    title: altText,
                    html: `
                    <img src="${imgSrc}" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <br><br>
                    <p>
                     Desenvolvimento de uma aplicação full-stack com front-end em React e back-end em ASP.NET Core. 
                     O projeto inclui um sistema de login e autenticação de usuário usando Identity.
                     Além disso, a aplicação se conecta a uma API externa de filmes para buscar e exibir dados,
                    oferecendo uma experiência completa de visualização.
                    </p>
                    
                    <a href="https://github.com/mailsonpuc/primeFlixReact" target="_blank" style="display: inline-block; margin-top: 15px;">
                    <button class="call-to-action">Ver no GitHub</button>
                    </a>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Fechar',
                    confirmButtonAriaLabel: 'Fechar o pop-up'
                });

            }

            else if (imgSrc.endsWith('projeto3.png')) {
                console.log("Projeto 3 clicado");
                // Código para o Projeto 3
                Swal.fire({
                    title: altText,
                    html: `
                    <img src="${imgSrc}" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <br><br>
                    <p>
                    Desenvolvimento de uma <b>API RESTful</b> em ASP.NET Core para consumir um banco de dados SQLite contendo mais de 7 milhões de registros.
                     A solução implementa a <b>paginação</b> para dividir o grande conjunto de dados em partes menores e mais gerenciáveis.
                    Essa abordagem melhora significativamente o desempenho e a eficiência da aplicação, 
                    permitindo o retorno sequencial de dados de forma otimizada.
                    FrontEnd em React com TypeScript.
                     </p>
                    
                    <a href="https://github.com/mailsonpuc/ApiConsumirSqlite" target="_blank" style="display: inline-block; margin-top: 15px;">
                    <button class="call-to-action">Ver no GitHub</button>
                    </a>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Fechar',
                    confirmButtonAriaLabel: 'Fechar o pop-up'
                });
            }



            else if (imgSrc.endsWith('projeto4.png')) {
                console.log("Projeto 4 clicado");
                // Código para o Projeto 3
                Swal.fire({
                    title: altText,
                    html: `
                    <img src="${imgSrc}" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <br><br>
                     <p>
                    API RESTful de barbearia em ASP.NET Core completa, 
                    Backend com arquitetura limpa, integração com Azure SQL e padrões de design aplicados.
                    </p>
               
                    <a href="https://github.com/mailsonpuc/pmv-sint-2025-1-e5-proj-movext-t1-barberconnect" target="_blank" style="display: inline-block; margin-top: 15px;">
                    <button class="call-to-action">Ver no GitHub</button>
                    </a>`,
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText: 'Fechar',
                    confirmButtonAriaLabel: 'Fechar o pop-up'
                });
            }



        });
    });
});