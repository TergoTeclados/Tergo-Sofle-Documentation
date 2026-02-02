# Trechos Compartilhados

Esta pasta contém trechos de conteúdo que são reutilizados em múltiplos manuais.

## Como usar

Para usar estes trechos nos seus arquivos `.mdx`, importe-os no topo do arquivo e use como componentes:

```mdx
import Inclinadores from './_shared/inclinadores.md';
import LayoutTeclado from './_shared/layout_teclado.md';

# Meu Manual

<Inclinadores />

<LayoutTeclado />
```

## Arquivos disponíveis

- `inclinadores.md` - Seção sobre como encaixar inclinadores
- `layout_teclado.md` - Seção sobre configuração de layout do teclado
- `padrao_internacional_ansi_padrao.md` - Padrão internacional para versão padrão
- `padrao_internacional_ansi_wireless.md` - Padrão internacional para versão wireless
- `padrao_abnt2.md` - Padrão ABNT2
- `camadas_teclas.md` - Seção sobre camadas de teclas (sem imagem - adicione a imagem específica após o import)
- `modo_basico_adepto.md` - Seção sobre modo básico e adepto
- `funcionalidades_modo_adepto.md` - Funcionalidades do modo adepto
- `como_digitar.md` - Seção sobre como digitar com ergonomia
- `contato.md` - Seção de contato
- `testar_mal_contato_placa.md` - Seção sobre como testar mal contato da placa controladora

## Componentes React disponíveis

### YouTubeVideo

Componente para exibir vídeos do YouTube de forma reutilizável. Pode ser usado em qualquer arquivo `.mdx`:

```mdx
import YouTubeVideo from '@site/src/components/YouTubeVideo';

# Meu Manual

<YouTubeVideo 
  videoId="jODsPcJ7b0g" 
  title="Tutorial de Montagem"
  embed={true}
  showLink={true}
/>
```

**Propriedades:**
- `videoId` (obrigatório): ID do vídeo do YouTube (ex: "jODsPcJ7b0g" de https://youtu.be/jODsPcJ7b0g)
- `title` (opcional): Título do vídeo
- `embed` (opcional, padrão: `false`): Se `true`, mostra o vídeo embutido. Se `false`, mostra apenas link com ícone
- `showLink` (opcional, padrão: `true`): Se `true`, mostra link de texto abaixo do vídeo/ícone

**Exemplos:**

Vídeo embutido (iframe):
```mdx
<YouTubeVideo videoId="jODsPcJ7b0g" embed={true} title="Tutorial Completo" />
```

Apenas link com ícone:
```mdx
<YouTubeVideo videoId="jODsPcJ7b0g" embed={false} title="Assista o tutorial" />
```

## Nota importante

Para usar imports, os arquivos principais precisam ter extensão `.mdx` ao invés de `.md`.

