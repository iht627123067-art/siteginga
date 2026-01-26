# Guia de Configuração do Manifesto GINGA no Plone

## 📋 Visão Geral

Este documento fornece instruções detalhadas para configurar o conteúdo do Manifesto GINGA no Plone CMS, permitindo que os visitantes leiam o manifesto diretamente na página.

## 📂 Arquivos Criados

1. **manifesto_ginga_conteudo.html** - Conteúdo HTML completo do manifesto (com estilos inline)
2. **pagina_modelo_ginga.html** - Página modelo atualizada com o manifesto expandido
3. **pagina_modelo_ginga.css** - Estilos CSS atualizados

## 🎯 Opções de Implementação no Plone

### Opção 1: Usar o Editor de Texto Rico (Recomendado para Iniciantes)

1. **Acesse a página GINGA no Plone**
   - Navegue até a seção do Manifesto
   - Clique em "Editar"

2. **Cole o conteúdo HTML**
   - Abra o arquivo `manifesto_ginga_conteudo.html`
   - Copie todo o conteúdo entre `<div class="manifesto-texto">` e `</div>` (final)
   - No editor do Plone, alterne para o modo HTML (botão "<>" ou "Source")
   - Cole o conteúdo copiado

3. **Adicione os estilos CSS**
   - Vá para "Configurações do Site" → "Aparência" → "CSS Customizado"
   - Copie todos os estilos da seção `<style>` do arquivo `manifesto_ginga_conteudo.html`
   - Cole no campo de CSS customizado
   - Salve as alterações

### Opção 2: Criar um Portlet Customizado

1. **Criar o Portlet**
   ```python
   # Em seu produto Plone customizado
   # Crie um novo portlet chamado "ManifestoGingaPortlet"
   ```

2. **Template do Portlet** (`manifesto_ginga.pt`)
   - Use o conteúdo HTML de `manifesto_ginga_conteudo.html`
   - Adapte para a estrutura de templates do Plone (`.pt`)

3. **Registre o Portlet**
   - Configure no `portlets.xml`
   - Adicione à coluna apropriada da página

### Opção 3: Usar um Content Type Customizado

1. **Criar um novo Content Type** via Dexterity:
   - Nome: "Manifesto GINGA"
   - Fields: Title, Body (Rich Text), Download Link

2. **Configurar Viewlet**:
   - Crie um viewlet customizado que renderiza o conteúdo
   - Use os estilos do arquivo CSS

## 🎨 Personalização de Estilos

Os estilos já estão configurados para serem responsivos e se adaptarem a diferentes tamanhos de tela:

### Cores Principais Usadas
- Verde GINGA (Governança): `#13701F`
- Azul (Incentivos): `#30578F`
- Verde Claro (Normas): `#B7CEB8`
- Amarelo (Ambiência): `#F6C93E`

### Breakpoints Responsivos
- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

## 📱 Funcionalidades Multilíngues

O conteúdo já está preparado para três idiomas:

- Português (PT) - padrão
- Inglês (EN)
- Espanhol (ES)

### Implementação no Plone

1. **Habilitar LinguaPlone ou plone.app.multilingual**
   - Configure os idiomas disponíveis

2. **Traduzir o Conteúdo**
   - Para cada idioma, crie uma versão da página
   - Use os atributos `data-pt`, `data-en`, `data-es` do HTML como referência

3. **JavaScript de Troca de Idioma**
   - O arquivo `pagina_modelo_ginga.js` já contém a lógica
   - Certifique-se de incluí-lo nas páginas

## 🔗 Link para Download do PDF

O botão de download está configurado para:
```html
<a href="manifesto GINGA.pdf" class="btn-primary" target="_blank">
    Abrir Manifesto (PDF)
</a>
```

### Configurar no Plone:

1. **Upload do PDF**:
   - Faça upload do arquivo "manifesto GINGA.pdf" para a pasta apropriada
   - Ou use o caminho completo se estiver em outro local

2. **Atualizar o Link**:
   - Se necessário, ajuste o `href` para o caminho correto no Plone
   - Exemplo: `/pt/ginga/recursos/manifesto-ginga.pdf`

## ✅ Checklist de Implementação

- [ ] Conteúdo HTML do manifesto inserido na página
- [ ] Estilos CSS adicionados (inline ou arquivo separado)
- [ ] Responsividade testada em diferentes dispositivos
- [ ] Suporte multilíngue configurado
- [ ] Link do PDF atualizado e funcional
- [ ] Navegação da página testada
- [ ] Conteúdo revisado por stakeholders
- [ ] SEO otimizado (meta tags, headings)
- [ ] Acessibilidade verificada (WCAG 2.1)

## 🎓 Estrutura do Conteúdo

O manifesto está organizado em:

1. **Introdução** - "Por uma Inovação Brasileira"
2. **7 Princípios Fundamentais**:
   - Inovação com Brasilidade
   - Movimento, Não Moldura
   - Cinco Dimensões Integradas
   - Segurança Psicológica e Confiança
   - Regulação que Libera, Não que Prende
   - Evidências sem Rankings
   - Centrado no Cidadão
3. **Chamada para Ação** - "Junte-se ao Movimento"
4. **Assinatura** - DINOV/SEGES

## 🚀 Próximos Passos

1. **Teste a Página Localmente**
   - Abra `pagina_modelo_ginga.html` no navegador
   - Verifique responsividade e interações

2. **Revise o Conteúdo**
   - Valide com a equipe DINOV/SEGES
   - Ajuste textos se necessário

3. **Implemente no Plone**
   - Escolha a opção de implementação mais adequada
   - Siga as instruções desta documentação

4. **Teste no Ambiente de Desenvolvimento**
   - Verifique todos os idiomas
   - Teste em diferentes navegadores
   - Valide acessibilidade

5. **Deploy para Produção**
   - Após aprovação, publique no ambiente de produção
   - Monitore feedback dos usuários

## 📞 Suporte

Para dúvidas ou sugestões sobre a implementação:
- Contato: DINOV/SEGES
- Documentação adicional: Ver `roteiro_configuracao_plone.md`

---

**Última atualização:** 2026-01-17  
**Versão:** 1.0  
**Responsável:** Equipe GINGA
