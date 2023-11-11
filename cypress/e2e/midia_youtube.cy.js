describe('Script de teste para achar páginas que têm vídeos do YouTube', () => {
  function visitAllPages(URL) {
    // Visita a página atual
    cy.visit(URL);

    // Verifica se há iframes na página antes de tentar filtrar e exibir URLs de vídeos
    cy.get('iframe[src^="https://www.youtube.com/embed/"]').should($iframes => {
      if ($iframes.length > 0) {
        // Filtra e exibe as URLs dos vídeos do YouTube que não possuem as classes "lazyload" e "lazyloaded"
        cy.get('iframe[src^="https://www.youtube.com/embed/"]')
          .filter(':not(.lazyload):not(.lazyloaded)')
          .each($iframe => {
            const youtubeUrl = $iframe.attr('src');
            const videoId = youtubeUrl.match(/embed\/([^\?]+)/)[1];

            cy.log('YouTube URL: ' + youtubeUrl);
            cy.log('Video ID: ' + videoId);
          });
      }
    });

    // Realize as ações necessárias na página atual

    // Busca por links para outras páginas e navega nelas
    cy.get('a[href^="/"]').each($link => {
      const nextPageUrl = $link.attr('href');
      // Verifica se o link é válido (não contém 'javascript:void(0)' e não é uma âncora '#')
      if (nextPageUrl && nextPageUrl !== '#' && !nextPageUrl.startsWith('javascript:void(0)')) {
        // Chamada recursiva para visitar a próxima página após aguardar 20 segundos
        cy.wait(20000).then(() => {
          visitAllPages(nextPageUrl);
        });
      }
    });
  }

  // O bloco "it" deve chamar a função visitAllPages com a URL inicial do site
  it('Mapeando URLs', () => {
    visitAllPages('https://www.ticket.com.br/');
  });
});
