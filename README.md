GERADOR DE AVENTURAS ASSIMILADAS

O que tem nesta pasta
  index.html              o site inteiro
  manifest.webmanifest    nome, cores e ícones do app
  sw.js                   faz o app funcionar sem internet
  icons/                  ícones do app

IMPORTANTE: o app só instala quando está em um endereço https (um site).
Abrir o index.html direto do arquivo funciona como página normal, mas
não vira aplicativo.

COMO COLOCAR NO AR (GitHub Pages, grátis)
  1. Crie uma conta em github.com (se ainda não tiver).
  2. Clique em "New repository". Dê um nome, por exemplo: gerador-assimilacao.
     Deixe como Public e crie.
  3. Clique em "uploading an existing file" e arraste TUDO desta pasta
     (index.html, manifest.webmanifest, sw.js e a pasta icons). Confirme em "Commit changes".
  4. Vá em Settings > Pages. Em "Branch", escolha "main" e a pasta "/ (root)". Salve.
  5. Espere 1 a 2 minutos. O endereço aparece na mesma tela, no formato:
     https://SEU-USUARIO.github.io/gerador-assimilacao/
  (Alternativas gratuitas: Netlify Drop, em app.netlify.com/drop, onde basta arrastar a pasta.)

COMO INSTALAR NO CELULAR
  Android (Chrome): abra o endereço, toque nos três pontinhos e escolha
    "Instalar app" ou "Adicionar à tela inicial".
  iPhone (Safari): abra o endereço, toque em Compartilhar e escolha
    "Adicionar à Tela de Início".
  Depois de aberto uma vez com internet, o app funciona offline.

PARA ATUALIZAR UM REPOSITÓRIO QUE JÁ EXISTE (você já publicou antes)
  1. No repositório, clique em "Add file" > "Upload files".
  2. Arraste TUDO desta pasta (index.html, sw.js, manifest.webmanifest e icons).
     Os arquivos com o mesmo nome serão substituídos.
  3. Confirme em "Commit changes" e espere 1 a 2 minutos.
  4. No celular, feche e abra o app duas vezes para ele pegar a versão nova.

PARA ATUALIZAR NO FUTURO
  Troque o index.html no repositório e, no sw.js, aumente o número da versão
  (de 'v13' para 'v14' e assim por diante). Assim os aparelhos baixam a versão nova.

SOBRE OS DADOS
  O diário e suas edições ficam salvos só no aparelho. Para levar do celular
  para o computador (ou fazer backup), use Exportar diário e Importar diário.
  A escrita automática por IA só funciona dentro do Claude; no app instalado
  esse botão não aparece.

ONDE MEXER NO index.html (para editar por conta própria)
  O arquivo tem 4 partes, e o começo de cada uma traz um índice:
    1. CSS (aparência): logo no início, dentro de <style>. Procure por
       "CORES E TEMA" para mudar cores, e por "MAPA DOS RECORTES" para
       trocar o enquadramento das imagens (--p é o foco, --z é o zoom).
    2. HTML: cabeçalho, abas e rodapé, curto, logo depois do CSS.
    3. JavaScript: dentro de <script>. Procure por "DADOS" para textos
       (cartas, tabelas, oráculos), "AMEAÇAS: DADOS" para as ameaças,
       "BARALHO", "DIÁRIO" etc. para o funcionamento de cada aba.
    4. Imagens: no fim do arquivo, em um bloco <style id="imagens">.
       São só dados e não precisam ser editadas.
  Dica: para mudar cartas e ameaças, os editores dentro do próprio site
  ("Editar cartas" e "Editar ameaças") são mais seguros que mexer no código.
  Antes de editar, guarde uma cópia do index.html.
