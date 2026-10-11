# CineFlick 🎬

Aplicação mobile de catálogo de filmes desenvolvida em React Native com Expo Router para a disciplina de Programação para Dispositivos Móveis I (Fatec Registro).

---

## 👨‍🎓 Identificação do Aluno
- **Nome:** [Vinícius Freitas Leandro da Silva]
- **RA:** [RA 2991392513031]
- **Disciplina:** Programação para Dispositivos Móveis I
- **Instituição:** Fatec Registro

---

## 📱 Sobre o Aplicativo
O **CineFlick** é um catálogo interativo de filmes concebido para permitir a consulta de títulos, géneros, métricas e sinopses detalhadas, além de contar com sistema dinâmico de favoritos e navegação intuitiva entre ecrãs.

---

## 🛠️ Tecnologias Utilizadas
- **React Native** com **TypeScript**
- **Expo** e **Expo Router** (roteamento baseado em ficheiros via `app/`)
- **Flexbox** e **StyleSheet**
- **Hooks:** `useState` (favoritos) e `useEffect` (simulação de carregamento do catálogo)
- **Componentes Nativos:** `View`, `Text`, `Image`, `Pressable`, `ScrollView`, `FlatList`, `ActivityIndicator`

---

## ✨ Funcionalidades
- **Ecrã Inicial (`index.tsx`):** Boas-vindas, logotipo, descrição e botão interativo para o catálogo.
- **Catálogo (`catalogo.tsx`):** Lista de filmes com `FlatList`, indicador de carregamento via `useEffect` e ícone de atalho para o ecrã Sobre no cabeçalho.
- **Detalhes (`detalhes.tsx`):** Receção de parâmetros dinâmicos via `useLocalSearchParams`, métricas completas, sinopse, poster e opção de favoritar.
- **Sobre (`sobre.tsx`):** Dados institucionais, objetivo da aplicação e identificação da unidade curricular.
- **Componentes Reutilizáveis:**
  - `components/FilmeCard.tsx`: Cartão com props para renderização individual de cada filme na listagem.
  - `components/Botao.tsx`: Botão modular padronizado com props e feedback visual via `Pressable`.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone [https://github.com/zFreitaz/CineFlick.git](https://github.com/zFreitaz/CineFlick.git)
cd CineFlick