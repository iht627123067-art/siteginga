# Roteiro de Configuração: Página GINGA no Plone

Guia técnico completo para configurar a página da GINGA no Plone CMS, baseado no modelo demonstrativo criado.

---

## 📋 Índice

## 📋 Índice
1. [Contexto IDG e Preparação](#1-contexto-idg-e-preparação)
2. [Estrutura de Conteúdo (Gov.br)](#2-estrutura-de-conteúdo-govbr)
3. [Upload de Recursos](#3-upload-de-recursos)
4. [Criação das Páginas (Editor/Mosaic)](#4-criação-das-páginas-editormosaic)
5. [Configuração Multilíngue](#5-configuração-multilíngue)
6. [Customização Visual (CSS/JS)](#6-customização-visual-cssjs)
7. [Otimização SEO](#7-otimização-seo)
8. [Publicação e Workflow](#8-publicação-e-workflow)

---

## 1. Contexto IDG e Preparação

O ambiente é o **Portal Institucional Padrão (IDG)** executando sobre Plone (geralmente versões 4.3 ou 5). O acesso é focado na interface de edição (**Conteúdo**, **Visão**, **Edição**, **Compor**, **Layout**).

### 1.1 Limitações e Estratégia
- **Sem acesso ao File System/Buildout**: Não é possível instalar add-ons via painel de controle.
- **Foco no Editor**: Toda a configuração será feita via interface web.
- **Uso de "Tema"**: Para conteúdos complexos e páginas de aterrissagem (landing pages), recomenda-se o uso do tipo de conteúdo **"Tema"** em vez de "Página" simples, habilitando o uso de blocos (Mosaic) se disponível.

### 1.2 Configurar Idiomas (se disponível no perfil)
Verifique se o suporte multilíngue já está ativo (comum em portais gov.br). Caso contrário, utilize a estrutura de pastas manuais sugerida abaixo.

---

## 2. Estrutura de Conteúdo (Gov.br)

### 2.1 Hierarquia de Pastas

Crie a seguinte estrutura em **cada idioma**:

```
/[idioma]/ginga/
├── index_html (Página principal "O que é")
├── manifesto/ (Pasta)
│   └── index_html (Página do manifesto com PDF)
├── dimensoes/ (Pasta)
│   ├── index_html (Página de dimensões)
│   ├── governanca (Página)
│   ├── incentivos (Página)
│   ├── normas (Página)
│   ├── gestao-capacidades (Página)
│   └── ambiencia (Página)
├── equipe/ (Pasta)
│   └── index_html (Página da equipe)
├── recursos/ (Pasta)
│   └── index_html (Links externos)
└── assets/ (Pasta para arquivos)
    ├── logos/ (Pasta)
    └── documentos/ (Pasta)
```

### 2.2 Criar Pastas e Itens
1. Navegue até a área desejada (ex: "Assuntos" > "Inovação").
2. Clique em **Conteúdo** (barra superior).
3. **Adicionar item** -> **Pasta** (para a estrutura).
4. **Adicionar item** -> **Tema** (recomendado para a página principal Ginga) ou **Página**.

> **Nota**: O tipo "Tema" permite layouts mais ricos (capa, destaques) típicos do IDG.

---

## 3. Upload de Recursos

### 3.1 Upload de Logos SVG

1. **Navegue até**: `/[idioma]/ginga/assets/logos/`
2. **Add New** → **Image** (Plone aceita SVG como Image)
3. **Upload dos arquivos**:
   - `Símbolo GINGA.svg`
   - `1. Governança.svg`
   - `2. Incentivos.svg`
   - `3. Normas.svg`
   - `4. Gestão de Capacidades.svg`
   - `5. Ambiência.svg`
   - Marcas coloridas da pasta `/marca/`

4. **Para cada arquivo**:
   - Title: Nome descritivo (ex: "Logo GINGA - Governança")
   - Alternative Text: Descrição para acessibilidade
   - **Save**

### 3.2 Upload do Manifesto PDF

1. **Navegue até**: `/[idioma]/ginga/assets/documentos/`
2. **Add New** → **File**
3. **Upload**: `manifesto GINGA.pdf`
4. **Preencha**:
   - Title: "Manifesto GINGA"
   - Description: "Documento oficial do movimento GINGA"
5. **Save**

**Obtenha o link do PDF**:
- Clique no arquivo → copie a URL completa
- Exemplo: `https://seusite.gov.br/pt-br/ginga/assets/documentos/manifesto-ginga.pdf`

---

## 4. Criação das Páginas

### 4.1 Página Principal "O que é a GINGA" (Tipo Tema ou Página)

**Local**: `/pt-br/ginga/`
**Tipo**: Se possível, use **Adicionar item -> Tema**.
**Aba**: Edição (Corpo do Texto) ou Mosaic (HTML Tile).

**Conteúdo HTML no editor visual (Code View)**:

```html
<div class="ginga-hero">
    <div class="hero-content">
        <h1>O que é a GINGA?</h1>
        <p class="lead">A GINGA constitui-se como movimento estruturante que organiza e direciona o ecossistema de inovação governamental brasileiro. Expressa a brasilidade na inovação, enraizada na diversidade do país, reconhecendo que inovar no Brasil exige considerar contextos específicos, desigualdades estruturais e histórias subalternizadas.</p>
        
        <div class="ginga-letters-hero">
            <!-- Letra G -->
            <div onclick="scrollToSection('governanca')" class="ginga-letter g" data-dimension="governanca" title="Governança">
                 <svg class="letter-text letter-vector" viewBox="195 30 46 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M235.28,103.77h-24.1c-19.51,0-35.22-15.8-35.22-35.31s15.71-35.21,35.22-35.21h24.1c2.63,0,4.78,2.15,4.78,4.78v8.1c0,2.63-2.15,4.78-4.78,4.78h-41.75c-1.75,0-3.12,1.46-3.12,3.22,0,.68.19,1.37.58,1.85l22.24,39.8c.49.98,1.56,1.56,2.73,1.56,1.76,0,3.32-1.46,3.32-3.22v-24c0-2.63,2.15-4.78,4.78-4.78h11.22c2.63,0,4.78,2.15,4.78,4.78v28.78c0,2.63-2.15,4.88-4.78,4.88Z" />
                </svg>
                <img src="resolveuid/[UID-icone-governanca]" alt="Governança" class="letter-logo">
            </div>

            <!-- Letra I -->
            <div onclick="scrollToSection('incentivos')" class="ginga-letter i" data-dimension="incentivos" title="Incentivos">
                <svg class="letter-text letter-vector" viewBox="254 15 32 95" xmlns="http://www.w3.org/2000/svg">
                    <path d="M278.13,102.42h-16.75c-3.05,0-5.54-2.49-5.54-5.55v-46.51c0-3.05,2.49-5.55,5.54-5.55h16.75c3.05,0,5.54,2.49,5.54,5.55v46.51c0,3.06-2.49,5.55-5.54,5.55ZM272.47,39.28c-6.11,0-11.09-5.09-11.09-11.2s4.98-11.09,11.09-11.09,11.2,4.98,11.2,11.09-5.09,11.2-11.2,11.2Z" />
                </svg>
                <img src="resolveuid/[UID-icone-incentivos]" alt="Incentivos" class="letter-logo">
            </div>

            <!-- Letra N -->
            <div onclick="scrollToSection('normas')" class="ginga-letter n" data-dimension="normas" title="Normas">
                <svg class="letter-text letter-vector" viewBox="320 30 52 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M365.59,98.99c0,2.64-2.15,4.78-4.78,4.78h-11.22c-2.63,0-4.78-2.15-4.78-4.78v-31.31c0-1.76-1.46-3.22-3.22-3.22h-26.44c-1.75,0-3.22,1.46-3.22,3.22,0,.59.19,1.27.49,1.76l15.71,27.12c.39.68.68,1.56.68,2.44,0,2.64-2.24,4.78-4.88,4.78h-19.22c-2.63,0-4.78-2.15-4.78-4.78v-62.53c0-2.63,2.15-4.78,4.78-4.78.88,0,1.66.19,2.34.58l30.43,17.56c3.02,1.75,3.61,1.85,4.1,1.85,1.75,0,3.22-1.46,3.22-3.22v-10.44c0-2.64,2.15-4.78,4.78-4.78h11.22c2.63,0,4.78,2.15,4.78,4.78v60.97Z" />
                </svg>
                <img src="resolveuid/[UID-icone-normas]" alt="Normas" class="letter-logo">
            </div>

            <!-- Letra G (Gestão) -->
            <div onclick="scrollToSection('gestao')" class="ginga-letter g" data-dimension="gestao" title="Gestão de Capacidades">
                <svg class="letter-text letter-vector" viewBox="395 30 46 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M435.62,103.77h-24.1c-19.51,0-35.21-15.8-35.21-35.31s15.71-35.21,35.21-35.21h24.1c2.64,0,4.78,2.15,4.78,4.78v8.1c0,2.63-2.15,4.78-4.78,4.78h-41.75c-1.76,0-3.12,1.46-3.12,3.22,0,.68.19,1.37.59,1.85l22.24,39.8c.48.98,1.56,1.56,2.73,1.56,1.75,0,3.31-1.46,3.31-3.22v-24c0-2.63,2.15-4.78,4.78-4.78h11.22c2.64,0,4.78,2.15,4.78,4.78v28.78c0,2.63-2.15,4.88-4.78,4.88Z" />
                </svg>
                <img src="resolveuid/[UID-icone-gestao]" alt="Gestão de Capacidades" class="letter-logo">
            </div>

            <!-- Letra A -->
            <div onclick="scrollToSection('ambiencia')" class="ginga-letter a" data-dimension="ambiencia" title="Ambiência">
                <svg class="letter-text letter-vector" viewBox="442 30 65 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M500.98,103.77c-2.64,0-4.78-2.15-4.78-4.78v-36.97c0-1.76-1.37-3.22-3.12-3.22-.58,0-1.07.1-1.56.39l-22.54,12.88c-.97.59-1.56,1.66-1.56,2.44,0,.68.1,1.37.39,1.95l11.71,20.09c.39.68.68,1.46.68,2.44,0,2.64-2.15,4.78-4.78,4.78h-24.88c-2.63,0-4.78-2.15-4.78-4.78,0-.97.19-1.75.58-2.44l36.09-62.53c.78-1.46,2.34-2.34,4.1-2.34s3.42.88,4.2,2.34l36.09,62.43c.39.68.59,1.56.59,2.54,0,2.64-2.15,4.78-4.78,4.78h-21.65Z" />
                </svg>
                <img src="resolveuid/[UID-icone-ambiencia]" alt="Ambiência" class="letter-logo">
            </div>
        </div>
    </div>
    <div class="hero-image">
        <img src="resolveuid/[UID-do-simbolo-ginga]" alt="Símbolo GINGA" />
    </div>
</div>
```

**Como obter o UID da imagem**:
1. Abra a imagem em nova aba
2. A URL terá formato: `/@@images/[UID]/...`
3. Ou use o link helper do Plone ao inserir imagem

### 4.2 Página do Manifesto

**Local**: `/pt-br/ginga/manifesto/`

```html
<div class="manifesto-section">
    <h2>Manifesto GINGA</h2>
    <div class="manifesto-card">
        <p>Conheça os princípios e valores que guiam o movimento GINGA na transformação da inovação governamental brasileira.</p>
        <a href="resolveuid/[UID-do-pdf]" class="btn-primary" target="_blank">Abrir Manifesto (PDF)</a>
    </div>
</div>
```

**Para embed do PDF** (alternativa):
```html
<div class="pdf-embed">
    <iframe src="resolveuid/[UID-do-pdf]" width="100%" height="800px" frameborder="0"></iframe>
</div>
```

### 4.3 Página de Dimensões
**Local**: `/pt-br/ginga/dimensoes/`

**Componente Especial: Pandeiro GINGA**
Para a visualização interativa do pandeiro, use o seguinte bloco HTML dentro da sua página ou tile Mosaic:

```html
<!-- Pandeiro GINGA Wrapper -->
<div class="pandeiro-wrapper">
    <!-- Aro do Pandeiro -->
    <div class="pandeiro-aro"></div>
    
    <!-- Pele do Instrumento -->
    <div class="pandeiro-pele">
        <img src="resolveuid/[UID-do-simbolo-ginga]" alt="Símbolo GINGA" class="pandeiro-symbol">
        <span class="pandeiro-label">GINGA</span>
    </div>

    <!-- Platinelas (Dimensões indicáveis) -->
    <!-- Governança -->
    <button class="platinela platinela-g" onclick="expandDimension('governanca')" aria-label="Ver Governança">
        <span class="platinela-letter">G</span>
    </button>
    
    <!-- Incentivos -->
    <button class="platinela platinela-i" onclick="expandDimension('incentivos')" aria-label="Ver Incentivos">
        <span class="platinela-letter">I</span>
    </button>
    
    <!-- Normas -->
    <button class="platinela platinela-n" onclick="expandDimension('normas')" aria-label="Ver Normas">
        <span class="platinela-letter">N</span>
    </button>
    
    <!-- Gestão -->
    <button class="platinela platinela-g2" onclick="expandDimension('gestao')" aria-label="Ver Gestão">
        <span class="platinela-letter">G</span>
    </button>
    
    <!-- Ambiência -->
    <button class="platinela platinela-a" onclick="expandDimension('ambiencia')" aria-label="Ver Ambiência">
        <span class="platinela-letter">A</span>
    </button>
</div>
```

### 4.4 Página da Equipe
**Local**: `/pt-br/ginga/equipe/`

**Componente Especial: Roda Humana**
Use este bloco para a roda interativa da equipe:

```html
<div class="roda-humana">
    <!-- SVG de Conexão Animada -->
    <svg class="roda-conexoes" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
        <circle cx="250" cy="250" r="200" class="conexao-circulo" />
    </svg>

    <!-- Centro: Propósito -->
    <div class="roda-proposito">
        <p class="proposito-texto">Unidos pela transformação</p>
    </div>

    <!-- Membros (Exemplo para 1 membro, repita para os 8 posicionando com classes roda-pos-1 a 8) -->
    <div class="roda-pessoa roda-pos-1">
        <div class="pessoa-avatar">C</div> <!-- Ou use <img> aqui -->
        <span class="pessoa-nome">Nome</span>
    </div>
    <!-- ... outros membros ... -->
</div>
```

**Template para cada dimensão**:

```html
<div class="dimensao-item" id="governanca">
    <div class="dimensao-header">
        <img src="resolveuid/[UID-icone-governanca]" alt="Governança" class="dimensao-icon" />
        <div class="dimensao-title-group">
            <div class="dimensao-letter g">G</div>
            <h3>Governança</h3>
        </div>
    </div>
    <p class="dimensao-description">
        Coordenação estratégica, clareza de papéis e visão sistêmica. Significa criar espaços coletivos, onde se jogam os corpos e também as energias...
    </p>
    <div class="dimensao-elements">
        <h4>Elementos:</h4>
        <ul>
            <li>Instância(s) de Coordenação</li>
            <li>Fórum Interministerial/Interfederativa</li>
            <li>Laboratórios, Unidades, Hubs</li>
        </ul>
    </div>
</div>
```

**Repita para todas as 5 dimensões**, ajustando:
- ID da div (`id="governanca"`)
- Classe da letra (`dimensao-letter g/i/n/a`)
- Ícone SVG correspondente
- Texto descritivo e elementos

### 4.4 Página da Equipe

**Local**: `/pt-br/ginga/equipe/`

```html
<div class="equipe-section">
    <h2>Quem Somos</h2>
    <p class="subtitle">Equipe DINOV/SEGES dedicada à transformação da inovação governamental</p>
    
    <div class="equipe-grid">
        <div class="equipe-card">
            <div class="equipe-avatar">C</div>
            <h3>Claudia</h3>
            <p>Especialista em Inovação</p>
        </div>
        <!-- Repetir para cada membro -->
    </div>
</div>
```

**Para adicionar fotos reais**:
1. Upload das fotos em `/assets/equipe/`
2. Substituir `<div class="equipe-avatar">` por:
```html
<img src="resolveuid/[UID-foto]" alt="Nome" class="equipe-photo" />
```

### 4.5 Página de Recursos

**Local**: `/pt-br/ginga/recursos/`

```html
<div class="recursos-section">
    <h2>Recursos</h2>
    <div class="recursos-grid">
        <div class="recurso-card">
            <div class="recurso-icon">🗺️</div>
            <h3>Mapa de Registros</h3>
            <p>Explore o mapa de registros da oficina GINGA...</p>
            <a href="https://drive.google.com/file/d/1LiWVxtN4exQxag0lBdE8Hf357j-x34_K/view" target="_blank" class="btn-secondary">Acessar Mapa</a>
        </div>
        
        <div class="recurso-card">
            <div class="recurso-icon">📸</div>
            <h3>Galeria de Fotos</h3>
            <p>Veja os momentos marcantes da oficina GINGA...</p>
            <a href="https://photos.google.com/share/AF1QipOG8jLuaa8rqJHs75WXpqFIuU7jOkA_H28D625weASwlD0JNnirVcfTXATVclqMfA?pli=1&key=em15eVpjSzZwYjBiVU9XLVdsSGpTRGtZVG1yb3RB" target="_blank" class="btn-secondary">Ver Fotos</a>
        </div>
    </div>
</div>
```

---

## 5. Configuração Multilíngue

### 5.1 Traduzir Conteúdo

**Para cada página criada em português**:

1. **Acesse a página**
2. **Translate** → **Add translation**
3. **Selecione idioma** (English ou Español)
4. **Traduza**:
   - Title
   - Description  
   - Todo o conteúdo HTML
5. **Save**

### 5.2 Linkar Traduções Manualmente (se necessário)

Se as traduções não foram linkadas automaticamente:

1. **Acesse**: Site Setup → Languages → Content translation
2. **Manage translations**
3. Selecione páginas relacionadas e linke-as

### 5.3 Seletor de Idiomas

O Plone adiciona automaticamente o seletor de idiomas no topo do site. Para customizar:

1. **Acesse**: Site Setup → Language Settings
2. Configure "Language selector position"

---

## 6. Customização Visual

### 6.1 Adicionar CSS Customizado

**Método 1: Resource Registry (Recomendado para Plone 6)**

1. **Crie arquivo CSS**: `ginga-custom.css` com estilos da página modelo
2. **Upload**:
   - Site Setup → Resource Registries
   - Upload do arquivo CSS
   - Register bundle

**Método 2: Custom CSS no Theming**

1. **Acesse**: Site Setup → Theming
2. **Advanced Settings**
3. **Custom styles**: Cole o CSS do arquivo `pagina_modelo_ginga.css`

**CSS essencial a incluir**:

```css
/* Importar do arquivo pagina_modelo_ginga.css */
/* Import de fontes (Raleway - match com Rawline) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@600;700;800&family=Raleway:wght@400;500;600;700;800;900&display=swap');

/* Variáveis de cores GINGA e Tipografia */
:root {
    --cor-governanca: #13701F;
    --cor-incentivos: #30578F;
    --cor-normas: #B7CEB8;
    --cor-ambiencia: #F6C93E;
    --cor-ginga-amarelo: #ebbe28;
    
    --font-primary: 'Inter', -apple-system, sans-serif;
    --font-display: 'Raleway', 'Inter', sans-serif;
}

/* Estilos das letras com SVG (Vetores) */
.ginga-letter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* ... outros estilos ... */
}

/* Fundo Amarelo Ginga para todas as letras */
.ginga-letter.g, .ginga-letter.i, .ginga-letter.n, .ginga-letter.a {
    background: var(--cor-ginga-amarelo);
}

/* Garantir contraste branco para os vetores svg e texto */
.ginga-letter .letter-text, 
.ginga-letter .letter-vector {
    fill: var(--cor-white);
    color: var(--cor-white);
}

.ginga-letter .letter-vector {
    width: 60%;
    height: 60%;
}
```

### 6.2 Adicionar JavaScript

**Para funcionalidade multilíngue no cliente**:

1. **Crie arquivo**: `ginga-scripts.js` baseado em `pagina_modelo_ginga.js`
2. **Simplifique** para Plone (o seletor de idioma já existe)
3. **Upload**:
   - Site Setup → Resource Registries
   - Register javascript resource

**JavaScript essencial**:

```javascript
// Smooth scroll para dimensões
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animações ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.dimensao-item').forEach(el => observer.observe(el));
```

### 6.3 Customizar Theme (Avançado)

**Para customização completa**:

1. **Crie theme Diazo** customizado
2. **Base**: Theme padrão do Plone
3. **Override**: Templates específicos para GINGA
4. **Deploy**: Via buildout ou theme editor

---

## 7. Otimização SEO

### 7.1 Configurar Metadados por Página

**Para cada página**:

1. **Edit** → **Settings**
2. **Preencha**:
   - **Short name (ID)**: URL amigável (ex: `ginga`, `manifesto`)
   - **Description**: Meta description (150-160 caracteres)
   - **Allow Discussion**: Desmarcar (geralmente)
   - **Exclude from navigation**: Configurar conforme necessário

### 7.2 URLs Amigáveis

**Padrão recomendado**:
```
/pt-br/ginga/
/pt-br/ginga/manifesto
/pt-br/ginga/dimensoes
/pt-br/ginga/equipe
/pt-br/ginga/recursos

/en/ginga/
/en/ginga/manifesto
/en/ginga/dimensions
...
```

### 7.3 Configurar Open Graph e Schema

**Adicionar ao `<head>` via viewlet ou theme**:

```html
<!-- Open Graph -->
<meta property="og:title" content="GINGA - Inovação Governamental" />
<meta property="og:description" content="Movimento estruturante de inovação governamental brasileira" />
<meta property="og:image" content="[URL-logo-ginga]" />
<meta property="og:type" content="website" />

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "name": "GINGA",
  "description": "Movimento estruturante de inovação governamental brasileira",
  "url": "https://seusite.gov.br/ginga"
}
</script>
```

### 7.4 Sitemap e Robots

1. **Sitemap**: Plone gera automaticamente em `/sitemap.xml.gz`
2. **Robots.txt**:
   - Site Setup → Site Settings
   - Enable robots.txt
   - Configure conforme necessário

---

## 8. Publicação e Workflow

### 8.1 Estados de Publicação

**Workflow padrão do Plone**:
- **Private**: Apenas criadores e gerentes
- **Pending**: Aguardando revisão
- **Published**: Público

**Para publicar todas as páginas GINGA**:

1. **Navegue até**: `/pt-br/ginga/`
2. **State** → **Advanced**
3. **Include contained items**: Marcar
4. **Change State to**: Published
5. **Save**

### 8.2 Configurar Página Inicial GINGA

**Para tornar `/ginga` a página padrão ao acessar**:

**Opção 1: Configurar como Default Page**
1. Acesse a pasta pai
2. **Display** → **Select default page**
3. Escolha a página GINGA

**Opção 2: Configurar no Properties (Avançado)**
1. Acesso ZMI (se disponível).
2. Properties → `default_page`.
3. Adicione `ginga`.

**Opção 3: Visão de Coleção/Capa (Mosaic)**
1. Se criou como "Tema", a própria página já serve como capa.
2. Utilize a aba **Compor** para arrastar blocos dinâmicos.

### 8.3 Permissões

**Configurar quem pode editar**:

1. **Acesse**: `/ginga` → **Sharing**
2. **Adicione usuários/grupos**:
   - **Equipe DINOV**: Can edit, Can view
   - **Público**: Can view (após publicação)
3. **Apply to subfolders**: Marcar se necessário

### 8.4 Backup e Versionamento

**Plone mantém histórico automaticamente**:
- **Ver histórico**: History tab em cada página
- **Reverter**: Working Copy → Revert to this version

**Backup manual**:
1. Site Setup → Export/Import
2. Export content → Selecione pasta GINGA
3. Download .zexp file

---

## 9. Checklist Final

### ✅ Pré-lançamento

- [ ] Todas as páginas criadas nos 3 idiomas (PT, EN, ES)
- [ ] Todos os recursos (logos, PDF) foram uploaded
- [ ] Links internos e externos funcionando
- [ ] CSS customizado aplicado e renderizando corretamente
- [ ] JavaScript funcionando (smooth scroll, animações)
- [ ] Navegação multilíngue funcionando
- [ ] Metadados SEO configurados (title, description)
- [ ] URLs amigáveis configurados
- [ ] Testado em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Testado em mobile e tablet
- [ ] Conteúdo revisado e aprovado pela equipe
- [ ] Workflow configurado e páginas publicadas

### ✅ Pós-lançamento

- [ ] Monitorar analytics (se configurado)
- [ ] Coletar feedback da equipe e usuários
- [ ] Ajustar conteúdo conforme necessário
- [ ] Manter atualizado (manifesto, equipe, recursos)
- [ ] Backup regular do conteúdo

---

## 10. Recursos Adicionais

### Documentação Plone

- **Plone 6 Docs**: https://6.docs.plone.org/
- **Theming Guide**: https://6.docs.plone.org/classic-ui/theming.html
- **Multilingual**: https://github.com/plone/plone.app.multilingual

### Suporte Técnico

- **Plone Community**: https://community.plone.org/
- **GitHub Issues**: https://github.com/plone/plone.app.multilingual/issues

### Arquivo de Referência

- **Página modelo HTML**: `pagina_modelo_ginga.html`
- **CSS de referência**: `pagina_modelo_ginga.css`
- **JavaScript de referência**: `pagina_modelo_ginga.js`

---

## 📝 Notas Importantes

> [!IMPORTANT]
> **UID vs Path**: Sempre use `resolveuid/[UID]` para links internos no Plone. Isso garante que links não quebrem se você mover o conteúdo.

> [!TIP]
> **Editor Visual**: Use o editor TinyMCE do Plone no modo "Source" para colar HTML. Alterne para modo visual para ajustes finais.

> [!WARNING]
> **Cache**: Após alterações em CSS/JS, limpe o cache do navegador e do Plone (Site Setup → Caching).

> [!NOTE]
> **Responsividade**: O CSS fornecido já é responsivo. Teste sempre em diferentes dispositivos antes de publicar.

---

**Documento criado em**: Janeiro 2026  
**Versão**: 1.0  
**Autor**: Equipe DINOV/SEGES  
**Plataforma**: Plone 4.3/5 (Padrão IDG/Gov.br)
