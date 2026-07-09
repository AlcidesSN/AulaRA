const lessons = {
  1: {
    name: "Aula 1 — Conceitos de RA",
    slides: [
      {
        title: "O que é Realidade Aumentada?",
        html: `
          <p class="intro-text">A <span class="hl">Realidade Aumentada (RA)</span> é uma tecnologia que combina elementos do mundo real com objetos virtuais gerados por computador, em tempo real, por meio da câmera de um dispositivo.</p>
          <div class="info-row"><div class="em">📱</div><div><h4>Sobreposição Digital</h4><p>Informações, imagens e modelos 3D são sobrepostos sobre o ambiente físico visto pela câmera do dispositivo, enriquecendo a percepção do mundo real.</p></div></div>
          <div class="info-row"><div class="em">🌍</div><div><h4>Mundo Real como Base</h4><p>Diferente da Realidade Virtual, o usuário <em>permanece</em> no ambiente físico e recebe apenas camadas de informação digital sobrepostas a ele.</p></div></div>
          <div class="info-row"><div class="em">⚡</div><div><h4>Tempo Real</h4><p>O processamento acontece instantaneamente, sincronizado com o movimento do dispositivo e do usuário, criando a ilusão de que os objetos virtuais existem no espaço físico.</p></div></div>
          <div class="alert-box">💡 <strong>Exemplos do dia a dia:</strong> Filtros do Instagram, GPS com setas sobrepostas na câmera, apps como IKEA Place (exibe móveis na sua sala) e Pokémon GO.</div>
        `
      },
      {
        title: "O que é Realidade Virtual?",
        html: `
          <p class="intro-text">A <span class="hl">Realidade Virtual (RV)</span> cria um ambiente completamente simulado e imersivo, substituindo <em>totalmente</em> o mundo real por um ambiente digital gerado por computador.</p>
          <div class="info-row"><div class="em">🥽</div><div><h4>Imersão Total</h4><p>O usuário usa um headset (óculos VR) que bloqueia completamente o ambiente físico, mergulhando-o num mundo 100% digital com tela para cada olho, criando profundidade estereoscópica.</p></div></div>
          <div class="info-row"><div class="em">🎮</div><div><h4>Interação 3D</h4><p>Controles e sensores de movimento permitem que o usuário interaja com objetos e ambientes virtuais de forma natural e intuitiva — agarrar, arremessar, caminhar.</p></div></div>
          <div class="info-row"><div class="em">🧠</div><div><h4>Sensação de Presença</h4><p>O cérebro processa o ambiente como se fosse real — gerando sensação de presença, profundidade espacial e até reações físicas como medo de altura e tontura de movimento.</p></div></div>
          <div class="two-col">
            <div class="mini-card"><div class="label">Dispositivos populares</div><div class="val">Meta Quest 3, PlayStation VR2, HTC Vive, Valve Index, Apple Vision Pro</div></div>
            <div class="mini-card"><div class="label">Aplicações</div><div class="val">Games imersivos, treinamentos militares, medicina, arquitetura, simuladores de voo</div></div>
          </div>
        `
      },
      {
        title: "O que é Realidade Misturada?",
        html: `
          <p class="intro-text">A <span class="hl">Realidade Misturada (RM)</span> — também chamada de <em>Mixed Reality</em> — é a fusão entre o mundo real e o virtual onde objetos digitais não apenas se sobrepõem ao ambiente físico, mas <strong style="color:#fff">interagem com ele</strong> de forma física e espacialmente consistente.</p>
          <div class="mini-card" style="margin-bottom:14px;">
            <div class="label">📊 O Contínuum de Milgram (1994)</div>
            <div class="continuum">
              <div class="c-node">Mundo Real</div><div class="c-line"></div>
              <div class="c-node hi">RA</div><div class="c-line"></div>
              <div class="c-node hi">RM</div><div class="c-line"></div>
              <div class="c-node">RV</div>
            </div>
            <div class="val" style="margin-top:6px;">A RM ocupa a faixa central — onde real e virtual se fundem e interagem bidirecionalmente.</div>
          </div>
          <div class="info-row"><div class="em">🏠</div><div><h4>Objetos Ancorados no Espaço</h4><p>Um objeto 3D virtual é posicionado sobre uma superfície real (mesa, chão) e <em>permanece lá</em> mesmo quando o usuário se move ao redor dele, respeitando a geometria do ambiente.</p></div></div>
          <div class="info-row"><div class="em">🤝</div><div><h4>Interação Física-Digital</h4><p>O usuário pode manipular objetos virtuais com as mãos, que detectam superfícies físicas — um cubo virtual <em>pousa</em> sobre uma mesa real e não a atravessa.</p></div></div>
          <div class="info-row"><div class="em">👓</div><div><h4>Dispositivos Avançados</h4><p>Microsoft HoloLens e Apple Vision Pro projetam hologramas interativos no espaço físico. Câmeras de profundidade mapeiam o ambiente em tempo real para ancoragem precisa.</p></div></div>
        `
      },
      {
        title: "O que é A-Frame?",
        html: `
          <p class="intro-text"><span class="hl">A-Frame</span> é um framework web open-source desenvolvido pela Mozilla para criar experiências de Realidade Virtual e Aumentada diretamente no navegador, usando apenas HTML — sem precisar aprender WebGL ou Three.js diretamente.</p>
          <div class="code-block">
            <div class="code-titlebar"><div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div><span class="fname">exemplo básico A-Frame</span></div>
            <pre><span class="kw">&lt;html&gt;</span>
  <span class="kw">&lt;head&gt;</span>
    <span class="kw">&lt;script</span> <span class="at">src</span>=<span class="st">"aframe.min.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
  <span class="kw">&lt;/head&gt;</span>
  <span class="kw">&lt;body&gt;</span>
    <span class="kw">&lt;a-scene&gt;</span>
      <span class="kw">&lt;a-box</span> <span class="at">color</span>=<span class="st">"orange"</span> <span class="at">position</span>=<span class="st">"0 1 -3"</span><span class="kw">&gt;&lt;/a-box&gt;</span>
      <span class="kw">&lt;a-sphere</span> <span class="at">color</span>=<span class="st">"white"</span> <span class="at">position</span>=<span class="st">"-2 1 -4"</span><span class="kw">&gt;&lt;/a-sphere&gt;</span>
      <span class="kw">&lt;a-sky</span> <span class="at">color</span>=<span class="st">"#111"</span><span class="kw">&gt;&lt;/a-sky&gt;</span>
    <span class="kw">&lt;/a-scene&gt;</span>
  <span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></pre>
          </div>
          <div class="props-grid">
            <div class="prop-card"><div class="pname">📦 Componentes prontos</div><div class="pdesc">a-box, a-sphere, a-cylinder, a-plane, a-sky, a-light, a-camera, a-text e muito mais.</div></div>
            <div class="prop-card"><div class="pname">🌐 Roda no browser</div><div class="pdesc">Sem instalação. Funciona em qualquer dispositivo com navegador moderno — celular, tablet, desktop.</div></div>
            <div class="prop-card"><div class="pname">🔧 Extensível</div><div class="pdesc">Suporta plugins como AR.js, physics engine, particle systems, gaze controls e outros.</div></div>
            <div class="prop-card"><div class="pname">📐 Sistema ECS</div><div class="pdesc">Entity-Component-System: cada elemento é uma entidade que recebe componentes de comportamento via atributos HTML.</div></div>
          </div>
        `
      },
      {
        title: "O que é AR.js?",
        html: `
          <p class="intro-text"><span class="hl">AR.js</span> é uma biblioteca JavaScript leve e eficiente para Realidade Aumentada na web. Funciona diretamente no navegador — sem instalar apps — e integra nativamente com o A-Frame.</p>
          <div class="info-row"><div class="em">🎯</div><div><h4>Rastreamento por Marcadores (Marker-based)</h4><p>Detecta marcadores físicos impressos — quadrados pretos com padrões internos (Hiro, Kanji, ou customizados). Ao encontrar um, âncora objetos 3D sobre ele com alta precisão. É o modo mais estável e recomendado para iniciantes.</p></div></div>
          <div class="info-row"><div class="em">📍</div><div><h4>Rastreamento por GPS (Location-based)</h4><p>Posiciona conteúdo AR em coordenadas geográficas reais usando latitude/longitude. Ideal para apps de turismo, guias de museus, caças ao tesouro urbanas e visualizações de dados geoespaciais.</p></div></div>
          <div class="info-row"><div class="em">🖼️</div><div><h4>Rastreamento por Imagem (Image-tracking)</h4><p>Reconhece imagens específicas como referência — capa de revista, cartão de visita, logo de produto — e exibe conteúdo 3D sobre elas. Não precisa de marcador quadrado especial.</p></div></div>
          <div class="alert-box">🚀 <strong>Vantagem principal:</strong> AR.js + A-Frame = Realidade Aumentada com apenas HTML! Nenhuma linguagem avançada é necessária. Se você sabe HTML, já consegue criar sua primeira experiência AR.</div>
        `
      }
    ]
  },

  2: {
    name: "Aula 2 — Prática com A-Frame e AR.js",
    slides: [
      {
        title: "Como o AR.js Funciona Internamente",
        html: `
          <p class="intro-text">O AR.js usa a <span class="hl">câmera do dispositivo</span> para capturar o ambiente em tempo real, processa os frames de vídeo buscando marcadores e, ao encontrá-los, calcula posição e orientação exata para renderizar objetos 3D sobre eles.</p>
          <div class="int-steps">
            <div class="int-step"><div class="num">01</div><div><h4>Captura de Vídeo</h4><p>O navegador acessa a câmera via <code style="color:#f97316">getUserMedia()</code> API. O feed de vídeo é exibido como fundo transparente da cena A-Frame, criando o efeito de câmera ao vivo.</p></div></div>
            <div class="int-step"><div class="num">02</div><div><h4>Análise de Frames com ARToolKit</h4><p>O AR.js usa a biblioteca C ARToolKit (compilada para WebAssembly) para analisar cada frame em busca de quadrados pretos com bordas regulares. Opera em até 60fps em dispositivos modernos.</p></div></div>
            <div class="int-step"><div class="num">03</div><div><h4>Cálculo de Pose (Pose Estimation)</h4><p>Ao detectar um marcador, calcula a <em>matriz de transformação</em>: posição 3D (x, y, z) e rotação (pitch, yaw, roll) do marcador em relação à câmera, usando visão computacional.</p></div></div>
            <div class="int-step"><div class="num">04</div><div><h4>Renderização WebGL via A-Frame</h4><p>O A-Frame renderiza o modelo 3D na posição calculada usando WebGL (Three.js por baixo), sincronizado quadro a quadro com o feed da câmera — criando a ilusão de AR.</p></div></div>
          </div>
        `
      },
      {
        title: "Estrutura do Projeto",
        html: `
          <p class="intro-text">O projeto é um único arquivo <span class="hl">index.html</span>. Não precisa de servidor complexo — pode rodar em qualquer hospedagem estática como GitHub Pages, Netlify ou Vercel.</p>
          <div class="file-tree-grid">
            <div class="tree-box">
              <div class="tl">📁 Estrutura de arquivos</div>
              <pre class="tree">meu-projeto-ar/
├── index.html
├── marker.patt
└── modelo.gltf
    (opcional)</pre>
            </div>
            <div class="tree-box">
              <div class="tl">📋 O que cada arquivo faz</div>
              <div style="font-size:12px;color:rgba(255,255,255,.6);line-height:1.9;">
                <span style="color:#f97316;font-family:'JetBrains Mono',monospace">index.html</span> — toda a lógica AR + cena<br>
                <span style="color:#f97316;font-family:'JetBrains Mono',monospace">marker.patt</span> — padrão do marcador custom<br>
                <span style="color:#f97316;font-family:'JetBrains Mono',monospace">modelo.gltf</span> — modelo 3D (opcional)
              </div>
            </div>
          </div>
          <div class="info-row" style="margin-top:12px;"><div class="em">⚠️</div><div><h4>Requisito: HTTPS obrigatório</h4><p>O navegador só permite acesso à câmera em conexões <strong style="color:#fff">HTTPS</strong>. Para testar localmente, use <code style="color:#f97316">localhost</code>. Em produção, use GitHub Pages, Netlify ou Vercel (HTTPS gratuito e automático).</p></div></div>
          <div class="alert-box">🔧 <strong>Dica de desenvolvimento local:</strong> Instale o Node.js e rode <code style="color:#f97316;font-family:'JetBrains Mono',monospace">npx serve .</code> na pasta do projeto, ou use a extensão <em>Live Server</em> do VS Code.</div>
        `
      },
      {
        title: "Importando A-Frame e AR.js via CDN",
        html: `
          <p class="intro-text">Tudo começa com dois arquivos JavaScript importados via <span class="hl">CDN</span> no <code style="color:#f97316">&lt;head&gt;</code> do HTML. Nenhuma instalação ou configuração de projeto necessária.</p>
          <div class="code-block">
            <div class="code-titlebar"><div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div><span class="fname">index.html — &lt;head&gt;</span></div>
            <pre><span class="cm">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="at">lang</span>=<span class="st">"pt-BR"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="at">charset</span>=<span class="st">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span><span class="tx">Meu App AR</span><span class="kw">&lt;/title&gt;</span>

  <span class="cm">&lt;!-- 1. A-Frame: framework de cenas 3D --&gt;</span>
  <span class="kw">&lt;script</span> <span class="at">src</span>=<span class="st">"https://aframe.io/releases/1.4.0/aframe.min.js"</span><span class="kw">&gt;&lt;/script&gt;</span>

  <span class="cm">&lt;!-- 2. AR.js: plugin de RA para A-Frame --&gt;</span>
  <span class="kw">&lt;script</span> <span class="at">src</span>=<span class="st">"https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/head&gt;</span></pre>
          </div>
          <div class="two-col">
            <div class="mini-card"><div class="label">📦 A-Frame v1.4.0</div><div class="val">Framework de cenas 3D. Fornece os componentes <code style="color:#f97316">&lt;a-scene&gt;</code>, <code style="color:#f97316">&lt;a-box&gt;</code>, câmeras, luzes e sistema ECS.</div></div>
            <div class="mini-card"><div class="label">🎯 AR.js (aframe-ar.js)</div><div class="val">Plugin de AR para A-Frame. Adiciona o atributo <code style="color:#f97316">arjs</code> à cena e o componente <code style="color:#f97316">&lt;a-marker&gt;</code> para rastreamento.</div></div>
          </div>
          <div class="alert-box" style="margin-top:12px;">💡 <strong>Ordem importa!</strong> O A-Frame deve ser carregado <em>antes</em> do AR.js. Inverta e o app vai dar erro de referência.</div>
        `
      },
      {
        title: "Criando a Cena AR com Marcador",
        html: `
          <p class="intro-text">A cena AR é definida dentro do <span class="hl">&lt;body&gt;</span>. O atributo <code style="color:#f97316">arjs</code> na <code style="color:#f97316">&lt;a-scene&gt;</code> ativa o modo de Realidade Aumentada com acesso à câmera.</p>
          <div class="code-block">
            <div class="code-titlebar"><div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div><span class="fname">index.html — &lt;body&gt;</span></div>
            <pre><span class="kw">&lt;body&gt;</span>
  <span class="kw">&lt;a-scene</span>
    <span class="at">embedded</span>
    <span class="at">arjs</span>=<span class="st">"sourceType: webcam; debugUIEnabled: false;"</span><span class="kw">&gt;</span>

    <span class="cm">&lt;!-- Marcador padrão 'hiro' do AR.js --&gt;</span>
    <span class="kw">&lt;a-marker</span> <span class="at">preset</span>=<span class="st">"hiro"</span><span class="kw">&gt;</span>

      <span class="cm">&lt;!-- Objeto 3D: aparece sobre o marcador --&gt;</span>
      <span class="kw">&lt;a-box</span>
        <span class="at">color</span>=<span class="st">"#f97316"</span>
        <span class="at">position</span>=<span class="st">"0 0.5 0"</span>
        <span class="at">scale</span>=<span class="st">"1 1 1"</span><span class="kw">&gt;
      &lt;/a-box&gt;</span>

    <span class="kw">&lt;/a-marker&gt;</span>

    <span class="cm">&lt;!-- Câmera AR (obrigatória) --&gt;</span>
    <span class="kw">&lt;a-entity</span> <span class="at">camera</span><span class="kw">&gt;&lt;/a-entity&gt;</span>

  <span class="kw">&lt;/a-scene&gt;</span>
<span class="kw">&lt;/body&gt;</span></pre>
          </div>
          <div class="props-grid">
            <div class="prop-card"><div class="pname">embedded</div><div class="pdesc">Faz a cena ocupar a tela toda, sem controles VR padrão do A-Frame.</div></div>
            <div class="prop-card"><div class="pname">preset="hiro"</div><div class="pdesc">Usa o marcador Hiro padrão — o mais fácil de começar e testar.</div></div>
            <div class="prop-card"><div class="pname">position="0 0.5 0"</div><div class="pdesc">Eleva o cubo 0.5 unidades acima do marcador (eixo Y vertical).</div></div>
            <div class="prop-card"><div class="pname">a-entity camera</div><div class="pdesc">Câmera controlada pelo AR.js — segue a orientação real do dispositivo.</div></div>
          </div>
        `
      },
      {
        title: "Animando o Objeto 3D",
        html: `
          <p class="intro-text">O A-Frame tem suporte nativo a animações via atributo <span class="hl">animation</span>. Vamos fazer nosso cubo girar infinitamente — sem escrever uma linha de JavaScript!</p>
          <div class="code-block">
            <div class="code-titlebar"><div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div><span class="fname">adicionando animação ao a-box</span></div>
            <pre><span class="kw">&lt;a-box</span>
  <span class="at">color</span>=<span class="st">"#f97316"</span>
  <span class="at">position</span>=<span class="st">"0 0.5 0"</span>
  <span class="at">scale</span>=<span class="st">"1 1 1"</span>
  <span class="at">animation</span>=<span class="st">"property: rotation;
              to: 0 360 0;
              loop: true;
              dur: 3000;
              easing: linear"</span><span class="kw">&gt;
&lt;/a-box&gt;</span>

<span class="cm">&lt;!-- Outra animação: pulsação (scale) --&gt;</span>
<span class="kw">&lt;a-sphere</span>
  <span class="at">color</span>=<span class="st">"#fff"</span>
  <span class="at">position</span>=<span class="st">"0 0.5 0"</span>
  <span class="at">radius</span>=<span class="st">"0.5"</span>
  <span class="at">animation</span>=<span class="st">"property: scale;
              to: 1.3 1.3 1.3;
              loop: true;
              dir: alternate;
              dur: 800"</span><span class="kw">&gt;
&lt;/a-sphere&gt;</span></pre>
          </div>
          <div class="props-grid">
            <div class="prop-card"><div class="pname">property</div><div class="pdesc">O que animar: <code style="color:#f97316">rotation</code>, <code style="color:#f97316">position</code>, <code style="color:#f97316">scale</code>, <code style="color:#f97316">color</code>...</div></div>
            <div class="prop-card"><div class="pname">to: 0 360 0</div><div class="pdesc">Valor final. Gira 360° no eixo Y (sentido horário).</div></div>
            <div class="prop-card"><div class="pname">loop: true</div><div class="pdesc">A animação se repete infinitamente ao terminar.</div></div>
            <div class="prop-card"><div class="pname">dur: 3000</div><div class="pdesc">Duração em ms. 3000 = 3 segundos por ciclo completo.</div></div>
            <div class="prop-card"><div class="pname">easing: linear</div><div class="pdesc">Velocidade constante. Outros: <code style="color:#f97316">easeInOut</code>, <code style="color:#f97316">easeIn</code>.</div></div>
            <div class="prop-card"><div class="pname">dir: alternate</div><div class="pdesc">Vai e volta entre os valores — ideal para pulsação.</div></div>
          </div>
        `
      },
      {
        title: "Código HTML Completo",
        html: `
          <p class="intro-text">Aqui está o <span class="hl">código completo</span> do seu primeiro app de Realidade Aumentada. Copie, salve como <code style="color:#f97316">index.html</code> e abra no navegador!</p>
          <div class="code-block">
            <div class="code-titlebar"><div class="dot-r"></div><div class="dot-y"></div><div class="dot-g"></div><span class="fname">index.html — arquivo completo</span></div>
            <pre><span class="cm">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="at">lang</span>=<span class="st">"pt-BR"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> <span class="at">charset</span>=<span class="st">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span><span class="tx">Meu App AR</span><span class="kw">&lt;/title&gt;</span>
  <span class="kw">&lt;style&gt;</span>
    <span class="at">body</span> { <span class="pr">margin</span>: <span class="va">0</span>; <span class="pr">overflow</span>: <span class="va">hidden</span>; }
  <span class="kw">&lt;/style&gt;</span>
  <span class="kw">&lt;script</span>
    <span class="at">src</span>=<span class="st">"https://aframe.io/releases/1.4.0/aframe.min.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
  <span class="kw">&lt;script</span>
    <span class="at">src</span>=<span class="st">"https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"</span><span class="kw">&gt;&lt;/script&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>
  <span class="kw">&lt;a-scene</span>
    <span class="at">embedded</span>
    <span class="at">arjs</span>=<span class="st">"sourceType:webcam; debugUIEnabled:false;"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;a-marker</span> <span class="at">preset</span>=<span class="st">"hiro"</span><span class="kw">&gt;</span>
      <span class="kw">&lt;a-box</span>
        <span class="at">color</span>=<span class="st">"#f97316"</span>
        <span class="at">position</span>=<span class="st">"0 0.5 0"</span>
        <span class="at">animation</span>=<span class="st">"property:rotation;
                    to:0 360 0;
                    loop:true;
                    dur:3000;
                    easing:linear"</span><span class="kw">&gt;
      &lt;/a-box&gt;</span>
    <span class="kw">&lt;/a-marker&gt;</span>

    <span class="kw">&lt;a-entity</span> <span class="at">camera</span><span class="kw">&gt;&lt;/a-entity&gt;</span>
  <span class="kw">&lt;/a-scene&gt;</span>
<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></pre>
          </div>
          <div class="alert-box">✅ <strong>Pronto!</strong> Aponte a câmera para o marcador <em>Hiro</em> (baixe em <code style="color:#f97316">ar-js-org.github.io/AR.js</code> → Examples → Markers) e veja o cubo laranja aparecer e girar em RA!</div>
        `
      },
      {
        title: "Publicando e Testando com QR Code",
        html: `
          <p class="intro-text">Com o código pronto, publique para que qualquer pessoa com smartphone acesse seu app AR — sem instalar nada, direto pelo navegador.</p>
          <div class="steps">
            <div class="step-row step-green"><div class="sn">1</div><div><h4>Criar repositório no GitHub</h4><p>Crie uma conta em github.com, crie um repositório público (ex.: <code style="color:#86efac">meu-app-ar</code>) e faça upload do seu <code style="color:#86efac">index.html</code> direto pela interface web ou via Git.</p></div></div>
            <div class="step-row step-blue"><div class="sn">2</div><div><h4>Ativar GitHub Pages</h4><p>Vá em <em>Settings → Pages → Source: main branch → Save</em>. Em 1-2 minutos seu app terá uma URL pública com HTTPS automático: <code style="color:#93c5fd">seu-usuario.github.io/meu-app-ar</code>.</p></div></div>
            <div class="step-row step-purp"><div class="sn">3</div><div><h4>Gerar o QR Code</h4><p>Use sites como <code style="color:#c4b5fd">qr-code-generator.com</code> para gerar um QR Code com a URL do GitHub Pages. Imprima e cole ao lado do marcador Hiro num cartão ou folha de papel.</p></div></div>
            <div class="step-row step-org"><div class="sn">4</div><div><h4>Testar no smartphone</h4><p>Leia o QR Code → abre a URL no Chrome/Safari → permita câmera → aponte para o marcador Hiro → veja o cubo 3D aparecer girando em AR! Compartilhe o QR Code com seus colegas.</p></div></div>
          </div>
          <div class="alert-box" style="margin-top:14px;">🎓 <strong>Desafio extra:</strong> Troque o <code style="color:#f97316">a-box</code> por <code style="color:#f97316">a-sphere</code> ou <code style="color:#f97316">a-cylinder</code>. Ou carregue um modelo 3D com <code style="color:#f97316">&lt;a-gltf-model src="modelo.gltf"&gt;&lt;/a-gltf-model&gt;</code> — modelos gratuitos em sketchfab.com!</div>
        `
      }
    ]
  }
};

let currentLesson = null;
let currentSlide  = 0;

function openLesson(num) {
  currentLesson = num;
  currentSlide  = 0;
  document.getElementById('viewer').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderSlide();
}

function closeViewer() {
  document.getElementById('viewer').classList.remove('open');
  document.body.style.overflow = '';
  currentLesson = null;
}

function renderSlide() {
  const lesson = lessons[currentLesson];
  const slides = lesson.slides;
  const total  = slides.length;
  const slide  = slides[currentSlide];

  document.getElementById('v-lesson-name').textContent = lesson.name;
  document.getElementById('v-counter').textContent     = (currentSlide + 1) + ' / ' + total;

  const pct = ((currentSlide + 1) / total) * 100;
  document.getElementById('v-progress').style.width = pct + '%';

  document.getElementById('v-body').innerHTML =
    '<div class="v-slide">' +
    '<div class="v-slide-num">Slide ' + String(currentSlide + 1).padStart(2, '0') + '</div>' +
    '<div class="v-slide-title">' + slide.title + '</div>' +
    '<div class="v-divider"></div>' +
    slide.html +
    '</div>';

  document.getElementById('v-body').scrollTop = 0;

  document.getElementById('btn-prev').disabled = currentSlide === 0;
  document.getElementById('btn-next').disabled = currentSlide === total - 1;

  const dotsEl = document.getElementById('dots');
  dotsEl.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.className = 'dot-nav' + (i === currentSlide ? ' active' : '');
    btn.style.width = (i === currentSlide ? '24px' : '8px');
    btn.setAttribute('data-i', i);
    btn.onclick = function() { currentSlide = parseInt(this.getAttribute('data-i')); renderSlide(); };
    dotsEl.appendChild(btn);
  }
}

function navigate(dir) {
  const total = lessons[currentLesson].slides.length;
  const next  = currentSlide + dir;
  if (next < 0 || next >= total) return;
  currentSlide = next;
  renderSlide();
}

document.addEventListener('keydown', function(e) {
  if (!currentLesson) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   navigate(-1);
  if (e.key === 'Escape') closeViewer();
});