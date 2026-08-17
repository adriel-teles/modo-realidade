# 🔵 Modo Realidade 🔴

> **Você consegue enxergar o que normalmente passa despercebido?**

O **Modo Realidade** é uma experiência web interativa de conscientização sobre **discriminação de gênero, machismo, misoginia e preconceitos naturalizados no cotidiano**.

Inspirado metaforicamente no conceito de **Ilusão × Realidade** presente em *Matrix*, o projeto transforma situações comuns em uma experiência de tomada de decisão: o usuário analisa diferentes cenários, escolhe como interpreta ou reage a eles e descobre o quanto consegue identificar comportamentos discriminatórios que muitas vezes são tratados como normais.

🔵 **ILUSÃO** — quando o comportamento problemático é normalizado, ignorado ou não reconhecido.

🔴 **REALIDADE** — quando o usuário identifica o padrão, questiona a situação e reconhece o problema.

---

## 🎯 Objetivo

O objetivo do Modo Realidade é estimular **percepção, reflexão e consciência crítica** sobre situações de discriminação que podem ocorrer em ambientes:

* 🎓 Acadêmicos
* 💼 Profissionais
* 💻 Tecnológicos
* 🤝 De convivência e trabalho em equipe

A proposta não é simplesmente apresentar conceitos, mas colocar o usuário diante de situações e permitir que ele **reflita sobre suas próprias interpretações e decisões**.

---

## 🧠 Como funciona

A experiência segue uma sequência de situações.

Em cada uma delas, o usuário encontra:

1. **Contexto da situação**
2. **Fala ou atitude em foco**
3. **Alternativas de interpretação ou reação**
4. **Análise da escolha**
5. **Conceito relacionado**
6. **Feedback visual**
7. **Atualização da percepção**
8. **Avanço para a próxima situação**

Ao final, o sistema gera um **Diagnóstico Completo**, apresentando o nível de percepção alcançado e os conceitos identificados durante a experiência.

---

## 🔵 A Ilusão e 🔴 a Realidade

A principal mecânica visual do projeto utiliza duas cores como metáfora:

### 🔵 ILUSÃO

Representa a permanência em comportamentos ou interpretações que:

* normalizam situações discriminatórias;
* ignoram determinados padrões;
* culpabilizam a vítima;
* reproduzem estereótipos;
* tratam comportamentos problemáticos como algo "normal".

### 🔴 REALIDADE

Representa a percepção crítica da situação:

* identificação do preconceito;
* reconhecimento de padrões;
* questionamento de comportamentos naturalizados;
* valorização da igualdade;
* tomada de consciência.

A mudança entre azul e vermelho faz parte da própria narrativa da experiência.

---

## 🎮 Experiência interativa

O projeto utiliza elementos de gamificação e interface inspirada em sistemas tecnológicos para transformar o conteúdo educativo em uma experiência interativa.

A intenção é fazer com que o usuário não apenas leia sobre discriminação, mas se pergunte:

> **"O que eu faria nessa situação?"**

Depois da escolha, o sistema apresenta uma explicação sobre o conceito envolvido e mostra como aquela interpretação contribui para a permanência na ilusão ou para a percepção da realidade.

---

## 📊 Diagnóstico Final

Ao terminar as situações, o usuário recebe um diagnóstico personalizado contendo informações como:

* **Percentual de Percepção Real**
* Perfil de percepção
* Situações analisadas
* Conceitos identificados
* Situações classificadas como Ilusão ou Realidade
* Diretrizes de transformação para o cotidiano

O objetivo do diagnóstico não é classificar uma pessoa como "boa" ou "má", mas estimular a **reflexão sobre aquilo que pode passar despercebido no dia a dia**.

---

## ♿ Acessibilidade

O projeto busca tornar a experiência acessível para diferentes usuários.

Entre os recursos previstos/implementados estão:

* Alto contraste
* Redução de animações
* Ajuste de tamanho do texto
* Navegação por teclado
* Foco visual acessível
* Suporte a leitores de tela
* Uso de elementos semânticos
* Comunicação textual dos estados de **ILUSÃO** e **REALIDADE**
* Respeito à preferência `prefers-reduced-motion`

A experiência não deve depender exclusivamente da percepção das cores para transmitir informações.

---

## 🏅 Badge de Percepção

Ao concluir o diagnóstico, o usuário pode gerar um **Badge de Percepção** personalizado contendo informações da experiência realizada.

O Badge pode apresentar:

* Nome ou codinome
* Percentual de Percepção Real
* Quantidade de situações analisadas
* Perfil de percepção
* Conceito de maior destaque
* Identidade visual do Modo Realidade
* QR Code para retornar ao projeto

O objetivo é transformar o resultado individual em uma experiência que também possa ser compartilhada.

---

## 📱 QR Code e compartilhamento

O projeto pode ser acessado diretamente por dispositivos móveis.

O QR Code presente no Badge direciona para:

**https://adriel-teles.github.io/modo-realidade/**

Quando suportado pelo navegador, o projeto também pode utilizar o compartilhamento nativo do dispositivo.

Em navegadores sem suporte ao compartilhamento nativo, o usuário pode utilizar alternativas como:

* Download do Badge
* Cópia do link
* Cópia da síntese da experiência

---

## 🛠️ Tecnologias

O projeto foi desenvolvido utilizando tecnologias web nativas:

* **HTML5**
* **CSS3**
* **JavaScript**
* **HTML5 Canvas**
* **Web Share API**
* **Web Clipboard API**
* **Web Storage API (`localStorage`)**
* **GitHub Pages**

A proposta é manter a aplicação leve e acessível diretamente pelo navegador, sem necessidade de instalação.

---

## 📂 Estrutura do projeto

```text
modo-realidade/
│
├── README.md
├── index.html
├── script.js
└── style.css
```

### `index.html`

Estrutura e conteúdo da aplicação.

### `style.css`

Identidade visual, responsividade, animações e estados da interface.

### `script.js`

Lógica das situações, decisões, pontuação, diagnóstico, acessibilidade e funcionalidades interativas.

---

## 🌐 Acesse o projeto

### ▶️ Experiência online

**https://adriel-teles.github.io/modo-realidade/**

---

## 👥 Público-alvo

O Modo Realidade foi pensado especialmente para:

* Estudantes
* Jovens aprendizes
* Profissionais
* Equipes de trabalho
* Ambientes acadêmicos
* Ambientes de tecnologia
* Pessoas interessadas em conscientização sobre igualdade de gênero

---

## 💡 Por que "Modo Realidade"?

A escolha do nome vem da metáfora:

> **E se aquilo que parece normal não fosse tão normal assim?**

O projeto utiliza a ideia de sair da **ilusão** e enxergar situações que podem estar sendo naturalizadas.

Não se trata de reproduzir a narrativa de *Matrix*, mas de utilizar sua metáfora de **despertar e percepção** para abordar uma questão social real.

---

## 🌱 Impacto esperado

O Modo Realidade busca contribuir para uma mudança simples, mas importante:

**perceber aquilo que antes passava despercebido.**

Acreditamos que reconhecer comportamentos discriminatórios é um passo importante para questioná-los e construir ambientes mais respeitosos e igualitários.

> **Questionar o cotidiano é um exercício contínuo de empatia e responsabilidade social.**

---

## 📚 Fundamentação

As situações e conceitos apresentados no projeto devem ser fundamentados em materiais confiáveis relacionados a:

* Igualdade de gênero
* Discriminação
* Violência de gênero
* Machismo e misoginia
* Preconceitos e vieses inconscientes
* Ambientes acadêmicos e profissionais
* Inclusão e diversidade

As referências utilizadas para construção e atualização do conteúdo devem ser mantidas de forma transparente no projeto.

---

## 🚀 Projeto para concurso

O Modo Realidade foi desenvolvido com foco em **educação, conscientização, interatividade e acessibilidade**.

Mais do que um questionário, a proposta é criar uma experiência na qual o usuário:

**entra no sistema → analisa situações → toma decisões → recebe feedback → identifica padrões → reflete → entende sua percepção.**

### 🔵 Você permanece na ilusão?

### 🔴 Ou está pronto para enxergar a realidade?

---

## 📄 Licença

Projeto desenvolvido para fins educacionais e de conscientização.

Consulte o repositório para informações sobre uso, distribuição e eventuais condições de licença.

---

<p align="center">
  <strong>🔵 ILUSÃO &nbsp; → &nbsp; 👁️ PERCEPÇÃO &nbsp; → &nbsp; 🔴 REALIDADE</strong>
</p>

<p align="center">
  <em>Modo Realidade — enxergar também é uma forma de transformar.</em>
</p>
