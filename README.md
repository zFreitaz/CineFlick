# CineFlick 🎬

Aplicação móvel desenvolvida em **React Native** com **Expo Router** para exploração, consulta e gestão de filmes favoritos. O projeto implementa arquitetura modular por componentes, navegação baseada em ficheiros e gestão de estados locais, desenvolvido no âmbito da unidade curricular de Programação para Dispositivos Móveis I da Fatec Registro.

---

## 📱 Visão Geral da Aplicação

O **CineFlick** oferece uma experiência simples e interativa de catálogo cinematográfico:
- **Ecrã Principal (`index.tsx`):** Apresentação da identidade visual do app com navegação rápida para o acervo.
- **Catálogo Dinâmico (`catalogo.tsx`):** Renderização de listagem vertical com `FlatList`, simulação de carregamento com `ActivityIndicator` e atalho para informações gerais.
- **Detalhes da Obra (`detalhes.tsx`):** Leitura de rotas dinâmicas com parâmetros via `useLocalSearchParams`, exibição de sinopse, classificação, duração e sistema de favoritos em tempo real.
- **Sobre o Projeto (`sobre.tsx`):** Ecrã de contextualização do projeto e documentação da aplicação.

---

## 🧩 Componentes Reutilizáveis

Para assegurar manutenibilidade e reutilização de código, os seguintes componentes foram estruturados em diretório dedicado (`components/`):
- **`FilmeCard.tsx`:** Responsável pela apresentação padronizada de cada título no catálogo, consumindo dados via `props` (`titulo`, `genero`, `ano`, `poster`, etc.).
- **`Botao.tsx`:** Botão reutilizável com tipagem TypeScript estrita, ícones dinâmicos (`Ionicons`) e feedback tátil configurado com `Pressable`.

---

## 🛠️ Tecnologias e Recursos

- **React Native** & **TypeScript**
- **Expo** & **Expo Router**
- **Hooks:** `useState` (gestão do estado de favoritos) e `useEffect` (simulação de requisição/carregamento)
- **Design & Layout:** Flexbox e `StyleSheet`

---

## 🚀 Como Executar

Clone o repositório e instale as dependências locais:

```bash
git clone [https://github.com/zFreitaz/CineFlick.git](https://github.com/zFreitaz/CineFlick.git)
cd CineFlick
npm install