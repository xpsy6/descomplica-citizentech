# Descomplica

Protótipo acadêmico CitizenTech para orientar cidadãos sobre direitos, benefícios e serviços públicos. O Brasileirinho organiza informações iniciais, apresenta canais oficiais e encaminha o usuário para páginas governamentais ou pesquisas de atendimento próximo.

## Como executar
1. Extraia o arquivo ZIP.
2. Abra a pasta `Descomplica` no Visual Studio Code.
3. Abra `index.html` no navegador ou utilize a extensão Live Server. Não é necessário instalar dependências.

## Estrutura
- `index.html`: página inicial.
- `css/style.css`: estilos, responsividade e acessibilidade.
- `js/main.js`: dados das orientações, renderização dinâmica dos 10 temas, histórico e favoritos.
- `pages/`: páginas internas de Solução, Impacto e Equipe.
- `img/`: imagens do projeto.

## Tecnologias
HTML5, CSS3 e JavaScript. O protótipo não utiliza APIs externas, backend ou bibliotecas adicionais. O botão de pesquisa monta uma URL pública do Google Search com `encodeURIComponent`. A página do Brasileirinho também contém um formulário demonstrativo com validação no navegador; ele não envia nem armazena dados.

## Funcionalidade principal
O cidadão seleciona um dos dez assuntos. O JavaScript localiza o objeto correspondente no array `perguntasBrasileirinho` e monta a orientação no DOM: resumo, público, documentos, etapas, canais, link oficial e pesquisas externas. O histórico recente utiliza `sessionStorage`; favoritos utilizam `localStorage`.

## Fontes oficiais consultadas
- Carteira de Identidade Nacional: https://www.gov.br/governodigitalfale-conosco/pt-br/identidade/cin/duvidas-frequentes-sobre-a-cin-campanha
- Cadastro Único: https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico
- Disque Social 121: https://www.gov.br/mds/pt-br/canais_atendimento/disque-social-121
- Bolsa Família: https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia
- SUS: https://www.gov.br/saude/pt-br
- SAMU 192: https://www.gov.br/saude/pt-br/composicao/saes/samu-192/samu-192
- Carteira de Trabalho Digital: https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho
- Central Alô Trabalho 158: https://www.gov.br/trabalho-e-emprego/pt-br/noticias-e-conteudo/2023/marco/central-alo-trabalho-158
- Minha Casa, Minha Vida: https://www.gov.br/cidades/pt-br/acesso-a-informacao/perguntas-frequentes/habitacao
- Pé-de-Meia: https://www.gov.br/mec/pt-br/pe-de-meia
- Registro Civil: https://www.registrocivil.org.br/
- Seguro-desemprego: https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego

## Limites e cuidados
O Descomplica é um projeto acadêmico de orientação, não é um canal oficial do governo e não concede benefícios. Regras, documentos, horários, taxas e formas de atendimento podem mudar. O formulário de contato é apenas demonstrativo: não há equipe de atendimento, envio de solicitações ou armazenamento de dados. O prazo de até 48 horas representa uma proposta conceitual de retorno, não uma garantia de atendimento. Não inserir dados pessoais reais no protótipo.

## Acessibilidade
A interface possui estrutura semântica, link para pular ao conteúdo, foco visível, navegação por teclado, ajuste de tamanho de texto, modo de alto contraste e mensagens apresentadas na própria página.

## Uso de IA
A IA foi utilizada como apoio à pesquisa, organização de conteúdo, sugestões de interface e revisão/explicação do código. Os integrantes devem revisar, testar e compreender o código entregue, conforme as regras da atividade.

## Equipe

| Integrante | RM |
|---|---:|
| Leonardo Assis de Sousa | 573122 |
| Hugo Garcia Cestari Dias | 557692 |
| Felipe Misso de Albuquerque | 570640 |
| Luis Felipe Rodrigues Alves | 573752 |
| Guilherme Batista da Silva Guedes | 571120 |

## Vídeo pitch

Link público: [https://youtu.be/Jy6aEjuE1-8](https://youtu.be/Jy6aEjuE1-8).


### Página Impacto
A página apresenta a transformação proposta pelo Descomplica, os públicos beneficiados, a conexão com os ODS 10 e 11 e indicadores que poderão ser acompanhados em futuras evoluções. As imagens são ilustrativas.
