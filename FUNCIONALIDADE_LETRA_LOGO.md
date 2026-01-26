# 🎨 Funcionalidade de Alternância Letra/Logo - GINGA

## 📋 Visão Geral

As letras GINGA na seção hero agora possuem um sistema interativo de alternância entre texto (letras) e ícones (logos das dimensões), criando uma experiência visual dinâmica e moderna.

## ✨ Funcionalidades Implementadas

### 1. **Hover Effect (Efeito ao Passar o Mouse)**
- **Como funciona:** Ao passar o mouse sobre qualquer letra, ela automaticamente se transforma no logo correspondente da dimensão
- **Animação:** Rotação 3D suave com transição de fade
- **Retorno:** Ao tirar o mouse, volta automaticamente para a letra

### 2. **Double-Click Toggle (Duplo Clique para Travar)**
- **Como usar:** Dê um duplo clique em qualquer letra
- **Efeito:** A letra/logo fica travada no modo oposto
  - Se estava mostrando letra → trava no logo
  - Se estava mostrando logo → trava na letra
- **Indicador visual:** Uma pequena bolinha branca aparece no canto inferior direito quando travado
- **Destravar:** Duplo clique novamente para alternar

### 3. **Navegação por Clique**
- **Funcionalidade preservada:** Clicar nas letras continua rolando a página até a seção correspondente
- **Compatibilidade:** Funciona tanto no modo letra quanto no modo logo

## 🎯 Mapeamento de Letras → Logos

| Letra      | Dimensão              | Logo                           |
| ---------- | --------------------- | ------------------------------ |
| **G** (1ª) | Governança            | `1. Governança.svg`            |
| **I**      | Incentivos            | `2. Incentivos.svg`            |
| **N**      | Normas                | `3. Normas.svg`                |
| **G** (2ª) | Gestão de Capacidades | `4. Gestão de Capacidades.svg` |
| **A**      | Ambiência             | `5. Ambiência.svg`             |

## 🎨 Detalhes Técnicos

### Estrutura HTML
Cada letra agora contém dois elementos:
```html
<div class="ginga-letter g" data-dimension="governanca">
    <span class="letter-text">G</span>
    <img src="logo/dimensoes/1. Governança.svg" alt="Governança" class="letter-logo">
</div>
```

### Classes CSS Principais
- `.letter-text` - Estilo da letra
- `.letter-logo` - Estilo do logo
- `.logo-locked` - Modo travado
- `.show-logo-temp` - Exibição temporária do logo (para animações futuras)

### Animações CSS
- **Transição:** 300ms com cubic-bezier
- **Transform:** `rotateY()` para efeito 3D
- **Opacity:** Fade in/out suave
- **Scale:** Leve zoom ao hover

### Filtros para Logos
- **Logos em fundos escuros (G, I, G):** `filter: brightness(0) invert(1)` - ficam brancos
- **Logos em fundos claros (N, A):** `filter: brightness(0) saturate(100%)` - ficam escuros

## 🎭 Estados Visuais

### Estado 1: Normal (Padrão)
- Exibe a letra
- Logo fica escondido e reduzido
- Cor de fundo da dimensão

### Estado 2: Hover
- Letra desaparece com rotação
- Logo aparece com rotação inversa
- Mantém cor de fundo
- Leve elevação (translateY)

### Estado 3: Logo Travado (Double-Click)
- Logo sempre visível
- Letra sempre oculta
- Bolinha indicadora no canto
- Hover aumenta logo ligeiramente

## 🖱️ Interações do Usuário

### Para Usuários Finais:
1. **Explorar:** Passe o mouse sobre as letras para ver os logos
2. **Favoritar:** Dê duplo clique para manter um logo sempre visível
3. **Navegar:** Clique simples para ir à seção da dimensão

### Para Desenvolvedores:
```javascript
// Ativar rotação automática (atualmente comentado)
// Descomente as linhas em initAutoRotation() no arquivo JS

// Eventos personalizados
gingaLetter.addEventListener('dblclick', toggleMode);
gingaLetter.addEventListener('click', scrollToSection);
```

## 📱 Responsividade

### Desktop (> 968px)
- Letras: 60x60px
- Logos: 70% do tamanho da caixa
- Animações completas ativas

### Tablet (640px - 968px)
- Mesmas dimensões mantidas
- Animações simplificadas (opcional)

### Mobile (< 640px)
- Letras: 50x50px
- Logos: 70% do tamanho
- Layout em grid flexível
- Hover substituído por tap em dispositivos touch

## ♿ Acessibilidade

- ✅ `title` attributes com nomes das dimensões
- ✅ `alt` texts em todos os logos
- ✅ Suporte a navegação por teclado
- ✅ Indicadores visuais claros
- ✅ Sem dependência exclusiva de cor
- ✅ Contraste adequado (WCAG AA)

## 🔧 Personalização

### Alterar Velocidade da Animação
```css
.ginga-letter .letter-text,
.ginga-letter .letter-logo {
    transition: all 500ms ease; /* Altere de 300ms para 500ms */
}
```

### Alterar Tamanho dos Logos
```css
.ginga-letter .letter-logo {
    width: 80%; /* Altere de 70% para 80% */
    height: 80%;
}
```

### Ativar Rotação Automática
No arquivo `pagina_modelo_ginga.js`, descomente o código dentro de `initAutoRotation()`:
```javascript
function initAutoRotation() {
    const letters = document.querySelectorAll('.ginga-letter');
    let currentIndex = 0;

    setInterval(() => {
        letters.forEach((letter, index) => {
            if (index === currentIndex && !letter.classList.contains('logo-locked')) {
                letter.classList.add('show-logo-temp');
                setTimeout(() => {
                    letter.classList.remove('show-logo-temp');
                }, 1500);
            }
        });

        currentIndex = (currentIndex + 1) % letters.length;
    }, 3000);
}
```

## 🐛 Troubleshooting

### Os logos não aparecem
- Verifique se os arquivos SVG estão na pasta correta: `logo/dimensoes/`
- Confirme os nomes dos arquivos (com espaços e números)

### Animação não funciona
- Confirme que o arquivo JavaScript está carregando: `pagina_modelo_ginga.js`
- Verifique console do navegador para erros

### Logos aparecem com cor errada
- Ajuste os filtros CSS em `.letter-logo`
- Para fundos escuros: `filter: brightness(0) invert(1)`
- Para fundos claros: `filter: brightness(0) saturate(100%)`

### Duplo clique não trava
- Verifique se `initLetterLogoToggle()` está sendo chamado
- Confirme que não há conflito com outros event listeners

## 🚀 Próximas Melhorias Possíveis

1. **Rotação automática sequencial** (já implementada, precisa descomentar)
2. **Som ao alternar** (feedback sonoro discreto)
3. **Persistência de estado** (salvar preferências no localStorage)
4. **Modo apresentação** (ciclo automático de todas as letras)
5. **Easter eggs** (combinações especiais de letras travadas)
6. **Animações adicionais** (pulse, shake, etc.)

## 📝 Notas para Implementação no Plone

1. Certifique-se de que os caminhos dos logos estão corretos
2. Inclua o arquivo JavaScript na página
3. Teste em diferentes navegadores
4. Valide em dispositivos móveis (touch events)
5. Documente o comportamento para editores de conteúdo

## 📞 Suporte

Para dúvidas técnicas sobre esta funcionalidade:
- **Arquivo HTML:** `pagina_modelo_ginga.html` (linhas 63-98)
- **Arquivo CSS:** `pagina_modelo_ginga.css` (linhas 240-346)
- **Arquivo JS:** `pagina_modelo_ginga.js` (linhas 294-342)

---

**Versão:** 1.0  
**Data:** 2026-01-17  
**Funcionalidade:** Sistema de Alternância Letra/Logo GINGA
