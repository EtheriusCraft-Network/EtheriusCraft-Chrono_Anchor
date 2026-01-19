<div align="center">
  <a href="#"><img src="https://readme-typing-svg.herokuapp.com?font=Micro+5&size=40&pause=1000&color=880EF7&center=true&vCenter=true&width=435&lines=EtheriusCraft+-+Status" alt="Typing SVG" /></a>
  </br>
  <a href="#"><img src="https://readme-typing-svg.herokuapp.com?font=Jacquard+12&size=40&pause=1000&color=00F7E4&center=true&vCenter=true&width=435&lines=Patch+-+Beta+Notes" alt="Typing SVG" /></a>
  </hr>
</div>
 
 ## [0.0.1 - Notes nº 2]
  
| **Nº** | Hyperlinks Interativos |
|---|---|
| **1º** | [Início](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md) |
| **2º** | [Configurações da Dimensão](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md#config-dimensao) |
| **3º** | [Ideias e Conceitos](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md#config-ideias) |
| **4º** | [Soluções Técnicas](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md#config-solucoes) |
| **5º** | [Dicas para Jogadores](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md#config-dicas) |
| **6º** | [Considerações Finais](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md#config-final) |
  
  ---

<div align="center">
	<h2 id="config-dimensao" align="center"><strong>🏔️ <code>Configuração da Dimensão de Cavernas</code></strong></h2>
</div>
<details id="config-dimensao">
  <summary align="center">
    <a href="#config-dimensao"><img src="https://img.shields.io/badge/↩-Clique para Expandir-2ECC71?style=for-the-badge"></a>
  </summary>
  
  ## 📋 **O que é esta dimensão?**
  Esta é uma dimensão especial do EnviroMine que gera **apenas cavernas**, sem superfície, criando um mundo inteiramente subterrâneo. Perfeita para seu tema "Espaço-Tempo" como uma "dimensão de túneis temporais" ou "labirinto ancestral".
  
  ---
  
  ## 🔧 **Configuração Passo a Passo**
  
  ### **2. 🗺️ Geração do Mundo**
  ```properties
  S:"Cave Dimension Block: Main"=minecraft:stone
  S:"Cave Dimension Block: Scattered 1"=minecraft:gravel  
  S:"Cave Dimension Block: Scattered 2"=minecraft:dirt
  ```
  - **Bloco Principal:** Forma 70-80% da dimensão
  - **Blocos Espalhados:** Adicionam variedade (aparecem aleatoriamente)
  - **Sugestões para tema espaço-tempo:**
    ```properties
    # Tema futurista/espacial:
    S:"Cave Dimension Block: Main"=HardcoreEnderExpansion:end_stone
    S:"Cave Dimension Block: Scattered 1"=galacticraftcore:basic_block:4  # Pedra da lua
    S:"Cave Dimension Block: Scattered 2"=galacticraftcore:basic_block:5  # Pedra de marte
    
    # Tema temporal/ancestral:
    S:"Cave Dimension Block: Main"=chisel:stonebrick:11  # Pedra ancestral
    S:"Cave Dimension Block: Scattered 1"=Railcraft:cube:0  # Pedra abissal
    S:"Cave Dimension Block: Scattered 2"=Thaumcraft:blockCosmeticOpaque:2  # Pedra arcana
    ```
    
  ### **4. 🏰 Estruturas e Features**
  ```properties
  I:Dungeons=8
  I:"Ravine Rarity"=30
  I:"Small Cave Rarity"=7
  ```
  - **Masmorras (8):** Número por chunk (16x16)
    - `1-3` = Poucas (fácil explorar)
    - `4-8` = Moderado (balanceado) ✓
    - `9+` = Muitas (caótico)
  
  - **Raridade de Ravinas (30):** Quanto MAIOR, MENOS frequente
    - `10-20` = Muitas ravinas (perigoso)
    - `30-50` = Balanceado ✓
    - `60+` = Raras (chato)
  
  - **Raridade de Cavernas Pequenas (7):** Quanto MAIOR, MENOS frequente
    - `3-5` = Densidade alta (conectado)
    - `6-10` = Balanceado ✓
    - `15+` = Poucas cavernas
  
  ### **5. 💧 Sistema de Água/Lava**
  ```properties
  B:"Flood Side Caves"=true
  I:"Water/Lava Height"=32
  B:"Lava instead of Water"=false
  ```
  - **Inundar Cavernas Laterais (true):**
    - Cria lagos/ríos em cavernas que tocam "superfície"
    - Mais realismo, mas mais lag com água
    - **Recomendação:** `true` para atmosfera
  
  - **Altura da Água/Lava (32):** Nível Y onde água/lava aparece
    - `10-20` = Mais inundações (difícil)
    - `25-40` = Balanceado ✓
    - `50+` = Pouca água (seco)
  
  - **Lava no Lugar de Água (false):**
    - Se `true`, substitui TODA água por lava
    - **CUIDADO:** Pode tornar a dimensão IMPOSSÍVEL
    - **Recomendação:** `false` (a menos que queira um inferno)
  
  ### **6. ⛏️ Geração de Minérios**
  ```properties
  B:"Fire OreGen event"=true
  ```
  - **Ativado (true):** Outros mods podem adicionar minérios aqui
  - **Desativado (false):** Apenas minérios vanilla
  - **Recomendação:** `true` para enriquecer a dimensão
  - **Importante:** Configure cada mod individualmente para gerar minérios aqui
  
  ### **7. 🚪 Acesso e Mecânicas**
  ```properties
  B:"Disable Elevator Access"=false
  I:"Elevator Height Limit"=10
  B:"Can Respawn in Caves"=false
  ```
  - **Elevadores:** Blocos especiais que teleportam entre níveis
    - `Height Limit=10`: Sobe/desce no máximo 10 blocos
    - Aumente para `20-30` para mais utilidade
  
  - **Renascer em Cavernas (false):**
    - `true` = Renasce nesta dimensão (risco de ficar preso!)
    - `false` = Volta ao mundo normal (seguro) ✓

</details>

---

<div align="center">
	<h2 id="config-ideias" align="center"><strong>🎯 <code>Algumas ideais de configurações</code></strong></h2>
</div>
<details id="config-ideias">
  <summary align="center">
    <a href="#config-ideias"><img src="https://img.shields.io/badge/↩-Clique para Expandir-2ECC71?style=for-the-badge"></a>
  </summary>

  ### **Para OTIMIZAÇÃO (Performance):**
  ```properties
  I:Dungeons=4                 # Metade das masmorras
  I:"Ravine Rarity"=50         # Menos ravinas
  I:"Small Cave Rarity"=10     # Menos cavernas pequenas
  B:"Flood Side Caves"=false   # Sem água para calcular
  B:"Fire OreGen event"=false  # Menos minérios para processar
  ```
  
  ### **Para DESAFIO (Hardcore):**
  ```properties
  I:Dungeons=12                # Muitas masmorras
  I:"Ravine Rarity"=15         # Ravinas frequentes
  B:"Lava instead of Water"=true  # Tudo é lava!
  I:"Water/Lava Height"=15     # Lava em níveis baixos
  B:"Can Respawn in Caves"=true  # Fica preso se morrer!
  ```
  
  ### **Para TEMA "ESPAÇO-TEMPO" (Minha recomendação):**
  ```properties
  # Blocos temáticos
  S:"Cave Dimension Block: Main"=chisel:voidstone:2
  S:"Cave Dimension Block: Scattered 1"=Botania:livingrock
  S:"Cave Dimension Block: Scattered 2"=Thaumcraft:blockCosmeticOpaque:5
  
  # Geração interessante
  I:Dungeons=6
  I:"Ravine Rarity"=25         # Ravinas moderadas
  I:"Small Cave Rarity"=5      # Muitas conexões (labirinto)
  I:"Water/Lava Height"=64     # "Rios temporais" altos
  
  # Mecânicas
  B:"Can Respawn in Caves"=false  # Seguro
  I:"Elevator Height Limit"=25    # Elevadores úteis
  I:"Cave Biome ID"=150           # ID seguro
  ```

</details>

---

<div align="center">
	<h2 id="config-solucoes" align="center"><strong>⚠️ <code>Problemas Comuns e Soluções</code></strong></h2>
</div>
<details id="config-solucoes">
  <summary align="center">
    <a href="#config-solucoes"><img src="https://img.shields.io/badge/↩-Clique para Expandir-2ECC71?style=for-the-badge"></a>
  </summary>

  ### **2. Lag na Dimensão**
  ```yaml
  Sintoma: TPS baixo só nesta dimensão
  Soluções:
    1. Reduzir I:Dungeons para 3-4
    2. B:"Flood Side Caves"=false
    3. Aumentar I:"Ravine Rarity" para 40+
  ```
  
  ### **3. Muito Difícil/Fácil**
  ```yaml
  Muito difícil:
    - Reduzir I:Dungeons
    - B:"Lava instead of Water"=false
    - Aumentar I:"Water/Lava Height"
  
  Muito fácil:
    - Aumentar I:Dungeons
    - Diminuir I:"Water/Lava Height"
    - B:"Can Respawn in Caves"=true (hardcore)
  ```

</details>

---

<div align="center">
	<h2 id="config-dicas" align="center"><strong>🎮 <code>Dicas para Jogadores</code></strong></h2>
</div>
<details id="dimensao-acesso">
	<summary align="center">
		<a href="#dimensao-acesso"><img src="https://img.shields.io/badge/↩-Como Acessar a Dimensão-2ECC71?style=for-the-badge"></a>
	</summary>
	<h3 id="dimensao-metodos-acesso">Métodos de Acesso</h3>
	<h4 id="dimensao-elevadores">Elevadores</h4>
	<p>Construa com blocos específicos.</p>
	<h4 id="dimensao-portais">Portais</h4>
	<p>Use meios alternativos como <code>/warp portais</code>, blocos, rituais, etc.</p>
  <details id="dimensao-sobrevivencia">
  	<summary align="center">
  		<a href="#dimensao-sobrevivencia"><img src="https://img.shields.io/badge/↩-Sobrevivência na Dimensão-2ECC71?style=for-the-badge"></a>
  	</summary>
  	<h3 id="dimensao-vantagens">✅ VANTAGENS</h3>
  	<ul>
  		<li><strong>Mineração concentrada:</strong> Tudo em um lugar, igual um <code>/minerar</code></li>
  		<li><strong>Sem mobs de superfície:</strong> Inicialmente mais seguro</li>
  		<li><strong>Proteção contra intempéries:</strong> Condições climáticas adversas não afetam</li>
  	</ul>
  	<h4 id="dimensao-intemperies">O que são Intempéries?</h4>
  	<p><strong>Intempéries</strong> são as <strong>condições climáticas adversas</strong> - chuva, tempestade, neve, calor extremo, frio extremo.</p>
  	<p>A <strong>proteção contra intempéries</strong> significa que na Dimensão de Cavernas:</p>
  	<h5 id="dimensao-vantagens-intemperies">✅ Vantagens das Cavernas</h5>
  	<ol>
  		<li>Sem chuva/tempestades (é tudo subterrâneo)</li>
  		<li>Temperatura constante (não varia com clima)</li>
  		<li>Sem raios (não atinge construções)</li>
  		<li>Sem neve acumulando</li>
  		<li>Sem vento (que apaga tochas, se configurado)</li>
  	</ol>
  	<h5 id="dimensao-desafios-intemperies">❌ Desafios das Cavernas</h5>
  	<ol>
  		<li>Escuro o tempo todo (precisa de iluminação constante)</li>
  		<li>Possível falta de recursos (madeira, água se não configurado)</li>
  		<li>Espaço limitado (tudo é caverna, sem céu aberto)</li>
  		<li>Mobs spawnando (como em qualquer lugar escuro)</li>
  	</ol>
  	<h3 id="dimensao-desvantagens">❌ DESVANTAGENS</h3>
  	<ul>
  		<li><strong>Sem luz natural:</strong> Muitas tochas, com limitação e perigo de apagamento</li>
  		<li><strong>Fácil de se perder:</strong> Labirinto, boa sorte para se localizar, diferente da <strong><code>Deep Dark</code></strong></li>
  		<li><strong>Recursos limitados:</strong> Somente minérios e mobs agressivos, com adição de um mob "misterioso"</li>
  	</ul>
  	<h3 id="dimensao-equipamento">Equipamento Recomendado</h3>
  	<ul>
  		<li><strong>Muitas tochas/lanternas:</strong> Escuro o tempo todo, com jogabilidade similar a dimensão <strong><code>Deep Dark</code></strong></li>
  		<li><strong>Bússola:</strong> Não funciona bem em cavernas, mas pode ser útil dependendo do item</li>
  		<li><strong>Bloqueadores de spawn:</strong> <strong>Magnum Torch</strong> e outros blocos, máquinas e afins que inibem o spawn de entidades</li>
  		<li><strong>Água potável:</strong> Há água potável para beber, mas será que terá sanidade e fôlego para isso?</li>
  		<li><strong>Equipamento de mergulho:</strong> Se há água, há possibilidades de inundação, seja por mineração quanto o ambiente ao todo!</li>
  	</ul>
  </details>
  <details id="dimensao-elevadores-detalhado">
  	<summary align="center">
  		<a href="#dimensao-elevadores-detalhado"><img src="https://img.shields.io/badge/↩-Funcionamento dos Elevadores-2ECC71?style=for-the-badge"></a>
  	</summary>
  	<h3 id="dimensao-mecanica-elevadores">🏗️ Como Funcionam os Elevadores para a Dimensão</h3>
  	<h4 id="dimensao-mecanica-basica">📌 Mecânica Básica</h4>
  	<p>Os elevadores são <strong>blocos especiais</strong> que permitem viagem vertical entre <strong>níveis de caverna</strong> ou até para <strong>outras dimensões</strong>.</p>
  	<h5 id="dimensao-construir-elevador">Como construir um elevador funcional</h5>
  	<pre><code>Estrutura básica:
        [BLOCO SUPERIOR]
        [BLOCO ELEVADOR]  ← Você fica aqui
        [BLOCO INFERIOR]
  Materiais necessários (exemplos):
  • Elevador de Pedra: stone + redstone + iron
  • Elevador de Obsidian: obsidian + ender pearl
  • Elevador Mágico: blocos especiais de mods</code></pre>
  	<blockquote>
  		<p><strong>💬 <a href="https://github.com/Densuki">Densuki</a>:</strong><br>
  		<em>A receita poderá mudar, mas essa é a receita original</em></p>
  	</blockquote>
  	<h5 id="dimensao-usar-elevador">Como viajar para a Dimensão de Cavernas</h5>
  	<ol>
  		<li><strong>Construa o elevador</strong> com materiais específicos</li>
  		<li><strong>Configure o elevador</strong> (normalmente com interface de GUI)</li>
  		<li><strong>Selecione a dimensão de destino</strong> (ID -2, ID padrão)</li>
  		<li><strong>Ative o elevador</strong> (com redstone ou interação)</li>
  	</ol>
  	<h5 id="dimensao-receitas-elevador">Receitas Exemplos (seguindo padrão do mod)</h5>
  	<pre><code class="language-java">// Elevador Básico para Dimensão -2:
  [Pedra] [Redstone] [Pedra]
  [Ferro] [Ender Pearl] [Ferro]
  [Pedra] [Redstone] [Pedra]
  
  // Elevador Avançado:
  [Obsidian] [Diamond] [Obsidian]
  [Eye of Ender] [Nether Star] [Eye of Ender]
  [Obsidian] [Diamond] [Obsidian]</code></pre>
  	<h4 id="dimensao-limite-altura">📏 Funcionamento do "Elevator Height Limit"</h4>
  	<p>Configuração atual: <code>I:"Elevator Height Limit"=25</code></p>
  	<p>Isso significa:</p>
  	<ul>
  		<li><strong>No Overworld:</strong> Elevador pode te levar <strong>25 blocos para cima/baixo</strong></li>
  		<li><strong>Entre dimensões:</strong> Precisa de elevador <strong>especial</strong> configurado para dimensão -2</li>
  		<li><strong>Na Dimensão -2:</strong> Elevadores funcionam normalmente entre níveis de caverna</li>
  	</ul>
  	<h4 id="dimensao-acesso-desativado">🚫 Se "Disable Elevator Access"=true</h4>
  	<pre><code class="language-properties">B:"Disable Elevator Access"=true</code></pre>
  	<p>Resultado:</p>
  	<ul>
  		<li><strong>Elevadores não funcionam</strong> para entrar/sair da dimensão</li>
  		<li><strong>Apenas outros métodos</strong> funcionam:</li>
  		<ul>
  			<li>Portais de outros mods (se permitido ou limitado)</li>
  			<li>Comandos (<code>/tp</code> se permitido ou não estiver limitado)</li>
  			<li>Itens especiais</li>
  			<li>Estruturas naturais (se configurado)</li>
  		</ul>
  	</ul>
  </details>
  <details id="dimensao-outros-metodos">
  	<summary align="center">
  		<a href="#dimensao-outros-metodos"><img src="https://img.shields.io/badge/↩-Outras Formas de Acesso-2ECC71?style=for-the-badge"></a>
  	</summary>
  	<h3 id="dimensao-metodos-alternativos">🗺️ Outras Formas de Acessar a Dimensão</h3>
  	<h4 id="dimensao-portais-mod">1. 🌀 Portais (se tiver mods compatíveis)</h4>
  	<ul>
  		<li><strong>Dimensional Doors:</strong> Portais aleatórios, se tiver o mod... Mencionado como possibilidade</li>
  		<li><strong>Rituais:</strong> Exclusivo do servidor</li>
  		<li><strong>Máquinas:</strong> Se criado e implementado</li>
  		<li><strong>Items:</strong> Se criado e implementado</li>
  	</ul>
  	<h4 id="dimensao-comandos">2. 🎮 Comandos (útil pro Singleplayer)</h4>
  	<pre><code class="language-mc">/tp @p -2 64 0      # Teleporta para dimensão -2 em Y=64
  /tp @p -2 ~ ~ ~     # Mantém coordenadas X/Z atuais</code></pre>
  	<h4 id="dimensao-itens-magicos">3. 🪄 Itens Mágicos (de outros mods)</h4>
  	<ul>
  		<li><strong>Dislocator</strong> (Draconic Evolution)</li>
  		<li><strong>Warp Book</strong> (Witchery)</li>
  		<li><strong>Dimensional Transceiver</strong> (EnderIO)</li>
  	</ul>
  	<h4 id="dimensao-estruturas-naturais">4. 🏛️ Estruturas Naturais (se configurado)</h4>
  	<ul>
  		<li><strong>Poços sem fundo</strong> que levam à dimensão</li>
  		<li><strong>Portais em masmorras</strong> raras</li>
  		<li><strong>Minas abandonadas</strong> com passagens secretas</li>
  	</ul>
  </details>
  <details id="dimensao-instrucoes">
  	<summary align="center">
  		<a href="#dimensao-instrucoes"><img src="https://img.shields.io/badge/↩-Instruções para Jogadores-2ECC71?style=for-the-badge"></a>
  	</summary>
  	<h3 id="dimensao-guia-acesso">🎮 Para Jogadores (Instruções)</h3>
  	<pre><code>COMO ACESSAR A DIMENSÃO DE MINERAÇÃO:
  
  1. CRAFTE UM ELEVADOR:
     - Materiais: Pedra, Redstone, Ferro, Pérola do Ender
     - Formato: 3x3 com materiais específicos
  
  2. CONSTRUA A ESTRUTURA:
     [PEDRA] [REDSTONE] [PEDRA]
     [FERRO] [ELEVADOR] [FERRO]
     [PEDRA] [REDSTONE] [PEDRA]
  
  3. CONFIGURE O DESTINO:
     - Clique com botão direito no elevador
     - Selecione "Dimensão de Mineração (ID: -2)"
     - Ajuste coordenadas se necessário
  
  4. VIAJE:
     - Pise no elevador
     - Pressione Shift para descer, Space para subir
     - Ou use interface GUI para destino específico
  
  ⚠️ SEGURANÇA:
  • Sempre leve equipamento de mineração
  • A dimensão é toda escura - muitas tochas!
  • Configure ponto de renascimento seguro</code></pre>
  </details>
  <details id="dimensao-problemas-solucoes">
  	<summary align="center">
  		<a href="#dimensao-problemas-solucoes"><img src="https://img.shields.io/badge/↩-Problemas e Soluções-2ECC71?style=for-the-badge"></a>
  	</summary>
  	<h3 id="dimensao-troubleshooting">⚠️ Problemas Comuns e Soluções</h3>
  	<h4 id="dimensao-elevador-nao-funciona">Problema: "Elevador não funciona"</h4>
  	<p><strong>Soluções:</strong></p>
  	<ol>
  		<li>Confira materiais do craft (pode mudar conforme mexemos, mas diferente no Singleplayer)</li>
  		<li>Tente em modo criativo primeiro para testar (se for no Singleplayer)</li>
  		<li>Verifique se precisa de energia (redstone)</li>
  	</ol>
  	<h4 id="dimensao-preso-dimensao">Problema: "Fico preso na dimensão"</h4>
  	<p><strong>Soluções:</strong></p>
  	<ol>
  		<li>Construa elevador de retorno ANTES de ir</li>
  		<li>Tenha itens de teleporte de backup (se permitido no servidor)</li>
  		<li>Combine com amigos para resgate (ótimo para roleplay, algo idêntico será implementado nos Planetas)</li>
  	</ol>
  	<h4 id="dimensao-mobs-elevador">Problema: "Mobs spawnam no elevador"</h4>
  	<p><strong>Soluções:</strong></p>
  	<ol>
  		<li>Ilumine bem a área ao redor</li>
  		<li>Use blocos que impedem spawn (half-slabs, glass ou do Chisel e outros mods que indiquem inibir spawn)</li>
  		<li>Construa em área segura/claimada (não haverá "claim" na dimensão, mas dá pra proteger com o Thaumcraft, Botania e mods de proteção)</li>
  	</ol>
  </details>
</details>

  ---

> [!CAUTION]
> **GALERIA DO CHANGELOG**
> Considere acessar todo o álbum de prints do modpack através da **[Galeria do Modpack](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/tree/main/gallery)**

---

<div align="center">
	<h2 align="center"><strong><code>Desenvolvido por</code></strong></h2>
	<blockquote>
		<p>
			<a href="https://pt.namemc.com/profile/YukiriDensuki.1" target="_blank">
				<img height="32" width="32" alt="YukiriDensuki Head" src="https://mc-heads.net/avatar/YukiriDensuki"/>
			</a>
			<strong><a href="https://github.com/Densuki">  YukiriDensuki</a> | Minecraft Programmer, Illustrator & Modeling 3D</strong>
			</br>
			<a href="https://pt.namemc.com/profile/Athropos" target="_blank">
				<img height="32" width="32" alt="Athropos Head" src="https://mc-heads.net/avatar/Athropos"/>
			</a>
			<strong><a href="https://github.com/RyutaSK">  Athropos</a> | Minecraft Programmer, Story Maker & Quest Maker</strong>
		</p>
	</blockquote>
</div>

<div align="center">
	<h2 align="center"><strong><code>Parceria</code></strong></h2>
	<blockquote>
		<p>
			<!-- <a href="https://pt.namemc.com/profile/SrYthan.1" target="_blank"> -->
			<a href="https://discord.gg/8frSM4m" target="_blank">
				<img height="32" width="32" alt="SrYthan Head" src="https://mc-heads.net/avatar/SrYthan"/>
			</a>
			<strong><a href="https://github.com/SrYthan">  yThan</a> | <ins>Dono da TotalCraft</ins></strong>
			</br>
			<strong><a href="https://discord.gg/8frSM4m" target="_blank">TotalCraft Discord</a></strong>
		</p>
	</blockquote>
</div>

---

> [!IMPORTANT]
> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤAtenciosamente, Equipe ***EtheriusCraft — Network ©***.

---

## Links & Referências

- [Retornar pro Início](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA2.md)

---
