# CineFlick 🎬

Aplicação móvel de catálogo cinematográfico interativo desenvolvida com React Native e Expo Router. O projeto explora componentes modulares com passagem de props, navegação estruturada por rotas, gestão de estados locais e estilização consistente em Flexbox.

---

## 👨‍💻 Desenvolvedor

* **Autor:** Vinícius Freitas Leandro da Silva
* **RA:** 2991392513031
* **Instituição:** Fatec Registro
* **Disciplina:** Programação para Dispositivos Móveis I

---

## 📱 Sobre o CineFlick

O CineFlick é uma solução pensada para centralizar informações sobre filmes de forma intuitiva e dinâmica. O utilizador pode navegar pelo catálogo, consultar sinopses detalhadas, pontuações, tempo de duração e favoritar as suas obras preferidas em tempo real.

### Principais Telas:
* **Início (`index.tsx`):** Ponto de entrada com a identidade visual da aplicação e botão de acesso direto ao catálogo.
* **Catálogo (`catalogo.tsx`):** Apresentação vertical dos títulos via `FlatList`, carregamento assíncrono simulado com `ActivityIndicator` e atalho para o ecrã institucional.
* **Detalhes (`detalhes.tsx`):** Leitura de rotas dinâmicas com parâmetros via `useLocalSearchParams`, métricas completas, sinopse detalhada e botão de favoritar interativo.
* **Sobre (`sobre.tsx`):** Apresentação das informações do projeto, arquitetura e dados da disciplina.

---

## 🧩 Componentes Modulares

* **`components/FilmeCard.tsx`:** Componente responsável pela apresentação padronizada de cada título no catálogo, consumindo dados via props (`titulo`, `genero`, `ano`, `poster`, etc.).
* **`components/Botao.tsx`:** Botão reutilizável com tipagem TypeScript, ícones integrados e feedback tátil configurado com `Pressable`.

---

## 🛠️ Tecnologias Utilizadas

* **React Native com TypeScript**
* **Expo & Expo Router**
* **Hooks do React:** `useState` (favoritos) e `useEffect` (simulação de carregamento e log no terminal)
* **Estilização:** `StyleSheet` e Flexbox

---

## 🚀 Instruções de Execução

Para clonar e executar o projeto localmente:

1. **Clonar o repositório:**
```bash
git clone [https://github.com/zFreitaz/CineFlick.git](https://github.com/zFreitaz/CineFlick.git)
cd CineFlick
```

2. **Instalar as dependências:**
```bash
npm install
```

3. **Iniciar o servidor de desenvolvimento do Expo:**
```bash
npx expo start
```

4. **Executar a aplicação:**
* Abra o app **Expo Go** no celular e escaneie o QR Code exibido no terminal.
* Pressione `a` para emulador Android ou `w` para abrir no navegador web.
