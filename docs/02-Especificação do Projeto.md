# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi estabelecido com a participação dos usuários por meio de entrevista online com perguntas previamente estipuladas. A partir dessa interação consolidamos os dados coletados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas abaixo.

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Registramos as histórias de usuários no quadro abaixo, diante da informação coletada do dia a dia das personas identificadas para o projeto.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Leila Nascimento         |Assistir os vídeos mais pertinentes ao meu interesse                 |Ter conhecimento na minha área de atuação                                  |
|Leila Nascimento         |Assistir conteúdos em vídeos relacionados com minha área de atuação  |Focar no conteúdo de estudo e não precisar perder tempo em site de buscas  |
|Leila Nascimento         |Realizar uma pesquisa de um vídeo com tema específico                |Localizar categorias específicas e conseguir maior objetividade na pesquisa|
|Leila Nascimento         |Assistir aos vídeos no computador e no celular                       |Ocupar o tempo ocioso                                                      |
|Camila Figueiredo        |Visualizar os vídeos informativos disponíveis no site                |Gosto de estar por dentro do que está acontecendo                          |
|João Paulo               |A tradução dos meus vídeos desejados.                                |Estudos e entretenimento                                                   |
|Nikolas Cardoso          |Fácil e rápido acesso aos links para tradução.                       |Para a entrega mais rápida dos vídeos aos usuários.                        |
|Nicole dos Santos        |Receber notificação dos vídeos para a tradução.                      |Para não me esquecer de traduzir.                                          |
|Samanta Azevedo          |Fácil acesso ao cadastramento do voluntário                          |Para não haver erros e demorar o acesso aos vídeos.                        |
|Felipe Eduardo           |Postar vídeos traduzidos para ficarem disponíveis no site.           |Para o usuário que solicita o link, se entreter com outros vídeos no site  |
|Sérgio Ribeiro de Souza  |Ter acesso a mais vídeos, para aprimorar meu aprendizado.            |Complementar meus estudos                                                  |
|Jaqueline Portes Menezes |Quero ajudar na tradução dos vídeos e praticar libras.               |Colocar em prática o que venho aprendendo.                                 |



## Requisitos

O propósito funcional do projeto é definido por meio dos requisitos funcionais que descrevem ações que o sistema deve estar apto a executar, assim como os requisitos não funcionais que descrevem os atributos que o sistema deve possuir de maneira geral. As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

Descrevemos a seguir os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário tenha acesso aos vídeos anteriormente traduzidos por um voluntário, através da plataforma. | ESSENCIAL | 
|RF-002| Oferecer a possibilidade do usuário deficiente auditivo ou surdo de solicitar a tradução de um vídeo, encaminhando o link do mesmo através de um formulário.| ESSENCIAL|
|RF-003| Permitir que o intérprete escolha um vídeo na plataforma para tradução. | IMPORTANTE |
|RF-004| Viabilizar para o intérprete a opção de escolha do método de tradução dentre os oferecidos pela plataforma, sendo elas: interpretação por libras, vídeo legendado ou      audiodescrição. | IMPORTANTE |
|RF-005| Disponibilizar os vídeos traduzidos separados por categorias personalizadas, para uma melhor interação do usuário. | DESEJÁVEL |
|RF-006| Dispor as solicitações de tradução, separados por categorias personalizadas, para uma melhor interação do voluntário.| DESEJÁVEL |
|RF-007| Apresentar o título dos vídeos em ordem alfabética | DESEJÁVEL |
|RF-008| Notificar o usuário quando sua solicitação for atendida por um voluntário. | DESEJÁVEL |
|RF-009| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um vídeo específico e fácil acesso aos vídeos já viabilizados na           plataforma. | DESEJÁVEL |
|RF-010| Inserir a opção de favoritar os vídeos desejados. | DESEJÁVEL |
|RF-011| O site deve permitir visualizar as informações para contato e dúvidas, dos desenvolvedores do site. | DESEJÁVEL |
|RF-012| O site deve permitir visualizar as informações sobre a origem do projeto e dos desenvolvedores do site. | DESEJÁVEL |
|RF-013| O sistema deve permitir o cadastro de novos usuários (deficiente auditivo, surdo, intérprete voluntário), realizando a validação através de um e-mail de confirmação. | DESEJÁVEL |      
|RF-014| Incluir/Excluir/Alterar nome de usuário em uma tela de manutenção de cadastro.  | DESEJÁVEL |
|RF-015| Deve ser possível ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado. | DESEJÁVEL |

### Requisitos não Funcionais

Apresentamos a seguir os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser multiplataforma, possibilitando seu uso em dispositivos com Windows, Linux e macOS.     |  ESSENCIAL  | 
|RNF-002| O site deve ter bom nível de contraste entre os elementos da tela em conformidade.                         |  DESEJÁVEL  | 
|RNF-003| Site compatível com os principais navegadores do mercado (Google Chrome, Mozilla Firefox, Microsoft Edge). |  ESSENCIAL  | 
|RNF-004| Permitir fácil acesso na internet.                                                                         |  ESSENCIAL  | 
|RNF-005| Permitir a visualização adequada em um Smartphone.                                                         |  ESSENCIAL  | 
|RNF-006| Manutenção do cadastro do usuário (cadastro, alteração e/ou deleção).                                      |  IMPORTANTE | 
|RNF-007| O site deve aparecer no resultado de todas as pesquisas relacionadas a deficientes auditivos e surdos.     |  ESSENCIAL  | 

## Restrições

Apresentamos na tabela abaixo, tópicos consideráveis que limitam a execução do projeto e que se configuram como encargos necessários para seu desenvolvimento.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 06/12/2021. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-End                              |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.                                           |
|04| Dificuldade de encontrar intérpretes voluntários para tradução dos vídeos.                              |
