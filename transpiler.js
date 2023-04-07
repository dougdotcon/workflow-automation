const axios = require("axios");

async function getRepoData(repoUrl, accessToken) {
  const apiUrl = `https://api.github.com/repos/${repoUrl}`;
  const headers = {
    "Authorization": `token ${accessToken}`,
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    return response.data;
  } catch (error) {
    console.error("Erro ao acessar a API do GitHub:", error);
    return null;
  }
}

// Definir função para análise léxica
function tokenize(code) {
  // Quebrar o código em tokens
  const tokens = code.split(/(\s+|\(|\)|\{|\}|\[|\]|;)/).filter(token => token.trim());
  return tokens;
}

// Definir função para análise sintática
function parse(tokens) {
  const parsedCode = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const func = parseFunction(token);
    if (func) {
      parsedCode.push(generateFunction(func));
    } else {
      parsedCode.push(token);
    }
  }

  return parsedCode;
}

// Definir sintaxe para funções personalizadas
const FUNCTION_REGEX = /^função\s+(\w+)\s*\(([^)]*)\)\s*\{\s*(.*)\s*\}$/;

// Definir função para análise sintática de funções personalizadas
function parseFunction(code) {
  const match = FUNCTION_REGEX.exec(code);
  if (!match) return null;
  const name = match[1];
  const args = match[2].split(",").map(arg => arg.trim());
  const body = match[3];
  return { name, args, body };
}

// Definir função para gerar código TypeScript de funções personalizadas
function generateFunction({ name, args, body }) {
  const argString = args.join(", ");
  return `function ${name}(${argString}) {\n${body}\n}`;
}

// Definir função principal do transpiler
function transpile(code) {
  const tokens = tokenize(code);
  const parsedTokens = parse(tokens);
  const generatedCode = generate(parsedTokens);

  return generatedCode;
}

function generate(tokens) {
  let generatedCode = "";
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    generatedCode += token;

    // Adicionar espaço após o token, se necessário
    if (i < tokens.length - 1 && !/[\s\(\{\[\]\}\)]/.test(token) && !/[\s\(\{\[]/.test(tokens[i + 1])) {
      generatedCode += " ";
    }
  }
  return generatedCode;
}


// Exemplo de uso do transpiler
const inputCode = `função soma(a, b) { if (a > b) { return a + b; } else { return b - a; } }`;

const transpiledCode = transpile(inputCode);
console.log(transpiledCode);

const fs = require("fs");

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  const transpiledCode = transpile(data);
  fs.writeFile("output.ts", transpiledCode, err => {
    if (err) {
      console.error("Erro ao salvar o arquivo:", err);
      return;
    }
    console.log("Transpilação concluída. Verifique o arquivo output.ts");
  });
});

const repoUrl = "dougdotcon/chatbot-ui"; // Substitua "user/repo" pelo caminho do repositório desejado.
const accessToken = "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"; // Substitua "your_access_token" pelo seu token de acesso pessoal.

(async () => {
  const repoData = await getRepoData(repoUrl, accessToken);
  console.log(repoData);
})();
