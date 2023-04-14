## Fazer depois:

Express: para criar uma API web que permita que os usuários enviem o link do repositório do GitHub que desejam analisar.
request: para fazer requisições à API do GitHub e obter os dados do repositório.
Jest: para escrever testes automatizados para o seu código.

## Feito em partes:
Arquitetura construída:

##  Transpilador de pseudocódigo para TypeScript

+ Recebe o código em pseudocódigo como entrada
- Realiza análise léxica e sintática
- Gera código TypeScript correspondente
- Verifica a validade do código gerado e compila, se necessário
- Fornece feedback ao usuário
- Integração com o ambiente de desenvolvimento

##  Coleta de dados do repositório do GitHub usando a API do GitHub

Usuário fornece o link do repositório do GitHub
API do GitHub é utilizada para coletar dados do repositório, como arquivos de código, informações de commit, comentários e problemas
Os dados coletados são limpos e transformados, se necessário

## Análise de código
O código-fonte do repositório é analisado para identificar funções personalizadas escritas em pseudocódigo
Expressões regulares e lógica de análise sintática são utilizadas para identificar essas funções personalizadas
Transformação de pseudocódigo em TypeScript

O transpilador é usado para converter funções personalizadas escritas em pseudocódigo para código TypeScript correspondente
Carregamento de dados

O código TypeScript gerado é carregado no sistema do usuário ou em outro sistema de gerenciamento de código

O carregamento pode ser realizado automaticamente pelo sistema ou o usuário pode ser solicitado a fazer o carregamento manualmente

Essa arquitetura visa simplificar o processo de conversão de pseudocódigo para TypeScript e automatizar a análise e transformação de repositórios do GitHub. Isso permite que os desenvolvedores se concentrem em escrever código de alta qualidade, melhorando a produtividade e a eficiência do desenvolvimento de software.


A implementação proposta envolve o uso do GPT-4 em várias etapas do processo de análise e transformação de repositórios do GitHub.

Primeiro, o usuário fornece o link do repositório do GitHub que deseja analisar. O GPT-4 é usado para coletar os dados do repositório, como arquivos de código, informações do commit, comentários e problemas.

Depois que os dados são coletados, o GPT-4 é usado para limpar e transformar os dados. Isso envolve a remoção de caracteres especiais e a formatação do código para torná-lo mais legível.

Em seguida, o código-fonte do repositório é analisado usando expressões regulares e lógica de análise sintática para identificar as funções personalizadas escritas em pseudo código.

Uma vez que as funções personalizadas são identificadas, o GPT-4 é usado para transformar o pseudo código em código TypeScript correspondente usando um transpiler que foi previamente criado. O código gerado é então verificado para validade e compilado, se necessário.

Finalmente, o código TypeScript correspondente é carregado no sistema do usuário ou em outro sistema de gerenciamento de código. Isso pode ser feito automaticamente pelo GPT-4, ou o usuário pode ser solicitado a fazer o carregamento manualmente.

A arquitetura construída também inclui um transpilador de pseudocódigo para TypeScript que recebe o código em pseudocódigo como entrada, realiza análise léxica e sintática, gera código TypeScript correspondente e fornece feedback ao usuário.

A integração com o ambiente de desenvolvimento é outro recurso importante da arquitetura. Com a automação do processo de análise e transformação de repositórios do GitHub, os desenvolvedores podem se concentrar na criação de código de alta qualidade, melhorando a produtividade e a eficiência do desenvolvimento de software.


Transpilador de Pseudocódigo para TypeScript e Análise de Repositórios do GitHub
Este projeto consiste em um transpilador de pseudocódigo para TypeScript e uma ferramenta de análise de repositórios do GitHub, que utiliza a API do GitHub para coletar e processar dados de repositórios.

## Funcionalidades
- Transpilador de pseudocódigo para TypeScript
- Análise de código para identificar funções personalizadas escritas em pseudocódigo
- Coleta de dados do repositório do GitHub usando a API do GitHub
- Limpeza e transformação de dados coletados
- Carregamento de dados gerados no sistema do usuário ou em outro sistema de gerenciamento de código

## Requisitos
- Node.js
npm

## Instalação
Clone o repositório:

git clone https://github.com/seu_usuario/seu_repositorio.git
Entre no diretório do projeto:
cd seu_repositorio

## Instale as dependências do projeto:
npm install

## Uso
Coloque o código em pseudocódigo no arquivo input.txt no diretório do projeto.

## Execute o transpilador:
node transpiler.js

Para usar o transpilador de pseudocódigo para TypeScript e a ferramenta de análise de repositórios do GitHub, siga os passos abaixo:

Transpilador de pseudocódigo para TypeScript

Coloque o código em pseudocódigo que você deseja converter em TypeScript no arquivo input.txt no diretório do projeto.

Abra o terminal, navegue até o diretório do projeto e execute o transpilador com o seguinte comando:

node transpiler.js

O transpilador irá processar o código em pseudocódigo e gerar o código TypeScript correspondente. Verifique o arquivo output.ts no diretório build para ver o código TypeScript gerado.

## Análise de repositórios do GitHub
Abra o arquivo github_analysis.js no diretório do projeto.

Insira o link do repositório do GitHub que você deseja analisar e seu token de acesso pessoal do GitHub na seção apropriada do arquivo

const githubRepositoryURL = "https://github.com/seu_usuario/seu_repositorio.git";
const githubAccessToken = "seu_token_de_acesso_pessoal";

No terminal, navegue até o diretório do projeto e execute o script de análise do GitHub com o seguinte comando:

node github_analysis.js

O script irá coletar e processar os dados do repositório do GitHub especificado e fornecerá informações relevantes sobre o repositório. A saída será exibida no terminal e, se necessário, os dados gerados serão salvos no sistema do usuário ou em outro sistema de gerenciamento de código, conforme definido no script.

Verifique o arquivo output.ts no diretório build para ver o código TypeScript gerado.

Para utilizar a análise de repositórios do GitHub, siga as instruções no arquivo github_analysis.js.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
