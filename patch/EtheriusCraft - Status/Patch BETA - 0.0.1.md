<!-- 
![EtheriusCraft - Status](https://readme-typing-svg.herokuapp.com/?lines=EtheriusCraft+-+Status) 
# ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ``EtheriusCraft - Status``
-->

 ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Micro+5&size=40&pause=1000&color=880EF7&center=true&vCenter=true&width=435&lines=EtheriusCraft+-+Status)](https://git.io/typing-svg)
 ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤㅤㅤㅤ [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Jacquard+12&size=40&pause=1000&color=00F7E4&center=true&vCenter=true&width=435&lines=Patch+-+Beta)](https://git.io/typing-svg)
 ## [0.0.1]

|**Nº**||
|---|---|
|**1º**|[]()|
|**2º**|[]()|
|**3º**|[]()|
|**4º**|[]()|

---

### ⚙️ OTIMIZAÇÃO — Geral
🧠 **[Densuki](https://github.com/Densuki)**:
> Foi modificado e otimizado o mod que adiciona sistema de **Física, Gases, Temperatura, Sede, Sanidade** e **Ar** ao modpack.

- Antigamente muitos cálculos eram feitos no "*Back-End*" do modpack, o que gerava muito lag, principalmente na geração de novas Chunks.
- Por exemplo, a física era constantemente calculada em menos de 1 tick — 20 segundos — o que causava lag de FPS e, se não bastasse isso...
- Havia lag também pelos gases que se comportavam como líquidos.
- Por fim, como "cereja do bolo"...
- era calculado constantemente a geração de novas estruturas, como as novas minas, o que tornava inviável, principalmente em vilas.
	
### 📊 Funcionalidades
💬 **[Densuki](https://github.com/Densuki)**:
> Mas de antemão, preciso expor algumas funcionalidades que existem e mantive, para entendimento geral de todos.	
> Abaixo estará uma tabela informando a respeito, com nome e descrição.

#### Status & Ações

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤTabela Principal de Status</h2></caption>
  <thead>
    <tr>
      <th>Nome do Status</th>
      <th>Descrição</th>
      <th>Como Adquirir</th>
      <th>Efeitos no Jogador</th>
      <th>Como se Livrar</th>
      <th>Dificuldade de Remoção</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>🌡️ Temperatura</strong>
      </td>
      <td>Mede a temperatura corporal do jogador</td>
      <td>Exposição a ambientes quentes/frios</td>
      <td>Afeta regeneração, velocidade, pode levar a efeitos mais graves</td>
      <td>Ir para ambiente com temperatura oposta, usar roupas apropriadas</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>💧 Hidratação</strong>
      </td>
      <td>Nível de água no corpo</td>
      <td>Tempo sem beber água, ambientes quentes, atividades físicas</td>
      <td>Fadiga, visão turva, lentidão, dano se chegar a zero</td>
      <td>Beber água (garrafa, cantil), água purificada é melhor</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🍖 Saturação</strong>
      </td>
      <td>Nível nutricional além da fome</td>
      <td>Comer alimentos de qualidade</td>
      <td>Melhora regeneração, resistência a efeitos negativos</td>
      <td>Comer alimentos nutritivos (carne cozida, etc)</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>😰 Estresse</strong>
      </td>
      <td>Nível de estresse mental</td>
      <td>Combate, quedas, danos, ambientes perigosos</td>
      <td>Tremores, precisão reduzida, pode levar à Insanidade</td>
      <td>Descansar em lugar seguro, tempo sem perigo</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🔥 Insolação (Heat Stroke)</strong>
      </td>
      <td>Superaquecimento extremo</td>
      <td>Temperatura muito alta por tempo prolongado</td>
      <td>Dano contínuo, confusão, náusea/cegueira, possível morte</td>
      <td>Ir para local frio, beber água, remover roupas pesadas</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>❄️ Hipotermia (Hypothermia)</strong>
      </td>
      <td>Resfriamento extremo</td>
      <td>Temperatura muito baixa por tempo prolongado</td>
      <td>Lentidão extrema, dano contínuo, possível Frostbite</td>
      <td>Ir para local quente, fogueiras, roupas quentes, comida quente</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🥶 Congelamento (Frostbite)</strong>
      </td>
      <td>Danos por frio extremo (pode ser permanente)</td>
      <td>Hipotermia avançada em biomas gelados</td>
      <td>Dano permanente de vida máxima (se configurado), lentidão extrema</td>
      <td>Poções de regeneração, Leite (remove efeito), Golden Apple</td>
      <td>🔴<strong>Difícil</strong> | <strong>⚫ Permanente</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>😵‍💫 Desidratação (Dehydration)</strong>
      </td>
      <td>Falta extrema de água</td>
      <td>Hidratação zerada por tempo prolongado</td>
      <td>Dano contínuo, visão turva, lentidão, morte</td>
      <td>Beber água IMEDIATAMENTE, preferencialmente purificada</td>
      <td>🟢 <strong>Fácil</strong> (se tiver água) </td>
    </tr>
    <tr>
      <td>
        <strong>😵 Insanidade (Insanity)</strong>
      </td>
      <td>Colapso mental completo</td>
      <td>Estresse máximo por muito tempo</td>
      <td>Alucinações (mobs falsos), sons assustadores, comportamento aleatório</td>
      <td>Meditação (se tiver mod), tempo em lugar seguro, leite ajuda parcialmente</td>
      <td>🔴 <strong>Difícil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>💨 Asfixia (Suffocation)</strong>
      </td>
      <td>Falta de oxigênio respirável</td>
      <td>Áreas com gases tóxicos, submarino sem ar</td>
      <td>Dano rápido, visão turva, morte em segundos</td>
      <td>Sair da área gasosa, usar respiradores (se tiver mod)</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🔥 Queimadura por Gás (Gas Burns)</strong>
      </td>
      <td>Queimaduras de gases inflamados</td>
      <td>Gases inflamáveis + fonte de ignição</td>
      <td>Dano de fogo, itens podem queimar no inventário</td>
      <td>Água, sair das chamas, Poção de Fire Resistance</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>☠️ Envenenamento por Gás (Gas Poisoning)</strong>
      </td>
      <td>Intoxicação por gases tóxicos</td>
      <td>Exposição a CO2, metano, outros gases nocivos</td>
      <td>Náusea, dano contínuo, fraqueza</td>
      <td>Ar fresco, Poção de Antídoto (se disponível), Leite</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🏔️ Mal da Montanha (Altitude Sickness)</strong>
      </td>
      <td>Problemas em grandes altitudes</td>
      <td>Altitudes acima de Y=128 por tempo prolongado</td>
      <td>Fadiga, falta de ar, dano se muito extremo</td>
      <td>Descer para altitude mais baixa</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🪸 Doença do Mergulhador (Diver's Disease)</strong>
      </td>
      <td>Problemas de descompressão</td>
      <td>Subir rápido de grandes profundidades aquáticas</td>
      <td>Dano, náusea, possível morte súbita</td>
      <td>Subir gradualmente, Poção de Water Breathing ajuda</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>😴 Privação de Sono (Sleep Deprivation)</strong>
      </td>
      <td>Falta de descanso adequado</td>
      <td>Muitos dias sem dormir em uma cama</td>
      <td>Alucinações, lentidão, aumento de estresse</td>
      <td>Dormir em uma cama por noite completa</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>💪 Fadiga por Carga (Load Fatigue)</strong>
      </td>
      <td>Cansanço por carregar peso excessivo</td>
      <td>Inventário muito cheio por tempo prolongado</td>
      <td>Lentidão, aumento do consumo de água/comida</td>
      <td>Esvaziar inventário, usar baús/backpacks</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🏜️ Exaustão por Calor (Desert Exhaustion)</strong>
      </td>
      <td>Cansaço extremo em desertos</td>
      <td>Permanência prolongada em biomas desérticos</td>
      <td>Consumo acelerado de água, fadiga, lentidão</td>
      <td>Sair do deserto, beber água frequentemente</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🧊 Lentidão Gélida (Ice Slowness)</strong>
      </td>
      <td>Movimento reduzido em gelo/neve</td>
      <td>Caminhar sobre gelo/neve sem equipamento adequado</td>
      <td>Velocidade reduzida, chance de escorregar</td>
      <td>Botas com tração, sair do gelo</td>
      <td>🟢 <strong>Fácil</strong>
      </td>
    </tr>
  </tbody>
</table>

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤStatus Específicos</h2></caption>
  <thead>
    <tr>
      <th>Nome do Status</th>
      <th>Como Adquirir</th>
      <th>Como se Livrar</th>
      <th>Dificuldade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>⚡ Choque Elétrico</strong>
      </td>
      <td>Exposição a fiação elétrica exposta (mods como GregTech)</td>
      <td>Afastar-se da fonte, Poção de Fire Resistance ajuda</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>☢️ Contaminação Radioativa</strong>
      </td>
      <td>Exposição a materiais radioativos (nuclear do GT/IC2)</td>
      <td>Bebidas descontaminantes, equipamento de hazmat</td>
      <td>🔴 <strong>Difícil</strong>
      </td>
    </tr>
    <tr>
      <td>
        <strong>🧪 Intoxicação Química</strong>
      </td>
      <td>Manuseio de químicos perigosos sem proteção</td>
      <td>Leite, antídotos específicos</td>
      <td>🟡 <strong>Médio</strong>
      </td>
    </tr>
  </tbody>
</table>

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤLegenda de Dificuldade</h2></caption>
  <tr>
    <td>🟢 <strong>Fácil</strong>
    </td>
    <td>Pode ser removido com ações simples ou itens comuns</td>
  </tr>
  <tr>
    <td>🟡 <strong>Médio</strong>
    </td>
    <td>Requer itens específicos ou condições especiais</td>
  </tr>
  <tr>
    <td>🔴 <strong>Difícil</strong>
    </td>
    <td>Requer itens raros, poções especiais ou tem consequências permanentes</td>
  </tr>
  <tr>
    <td>⚫ <strong>Permanente</strong>
    </td>
    <td>Não pode ser completamente removido (dano permanente)</td>
  </tr>
</table>

#### 🛡️ Itens Úteis para Gerenciar Status

<ul>
  <li>
    <strong>Garrafa de Água/Cantil:</strong> Hidratação básica
  </li>
  <li>
    <strong>Água Purificada:</strong> Hidratação melhorada + remove alguns efeitos
  </li>
  <li>
    <strong>Leite:</strong> Remove muitos efeitos negativos (mas não todos)
  </li>
  <li>
    <strong>Poções:</strong> Fire Resistance, Water Breathing, Regeneration são essenciais
  </li>
  <li>
    <strong>Roupas Adequadas:</strong> Capacetes para calor/frio, botas com tração
  </li>
  <li>
    <strong>Golden Apple:</strong> Remove quase todos os efeitos negativos
  </li>
  <li>
    <strong>Comida Quente/Fria:</strong> Ajusta temperatura corporal
  </li>
  <li>
    <strong>Equipamento de Proteção:</strong> Hazmat suit, máscaras de gás
  </li>
</ul>

#### 🎮 Dicas para Sobrevivência

<ol>
  <li>
    <strong>SEMPRE carregue água</strong> - pelo menos 2-3 garrafas
  </li>
  <li>
    <strong>Use roupas adequadas</strong> ao bioma que vai explorar
  </li>
  <li>
    <strong>Durma regularmente</strong> para evitar privação de sono
  </li>
  <li>
    <strong>Em cavernas</strong>, fique atento a poças de gás (visuais)
  </li>
  <li>
    <strong>Tenha leite</strong> no inventário para emergências
  </li>
  <li>
    <strong>Em climas extremos</strong>, construa abrigos temporários
  </li>
  <li>
    <strong>Monitore seus status</strong> na HUD
  </li>
  <li>
    <strong>No servidor / modpack</strong>, sempre use equipamento de proteção ao manusear materiais perigosos
  </li>
</ol>
<p>
  <em>Nota: Alguns status podem variar dependendo da configuração e mods adicionais presentes no modpack.</em>
</p>
	
---

#### Sistemas & Funcionamentos

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSistema de Física</h2></caption>
  <thead>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
      <th>Impacto no Gameplay</th>
      <th>Impacto no Desempenho</th>
      <th>Configuração</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>🪨 Gravidade de Areia/Gravilha</strong>
      </td>
      <td>Blocos afetados por gravidade caem se não tiverem suporte</td>
      <td>Mais realismo, perigo em cavernas, farms diferentes</td>
      <td>🟡 Médio (em colapsos grandes)</td>
      <td>Ativado com "Intervalo de Física" = 12-20</td>
    </tr>
    <tr>
      <td>
        <strong>🧊 Quebra de Gelo Realista</strong>
      </td>
      <td>Gelo quebra em grandes placas se suporte for removido</td>
      <td>Perigo em lagos congelados, mecânicas novas</td>
      <td>🔴 Alto (se "Grande Rachadura no Gelo" estiver ativo)</td>
      <td>"Grande Rachadura no Gelo" está desativado</td>
    </tr>
    <tr>
      <td>
        <strong>🏗️ Estabilidade de Estruturas</strong>
      </td>
      <td>Estruturas mal suportadas podem desmoronar</td>
      <td>Construções requerem planejamento, suportes necessários</td>
      <td>🟡 Médio</td>
      <td>Ativado com limite de blocos</td>
    </tr>
    <tr>
      <td>
        <strong>💧 Fluxo de Água Melhorado</strong>
      </td>
      <td>Água flui mais realisticamente, pode causar erosão</td>
      <td>Farms de água diferentes, cuidado com inundações</td>
      <td>🟢 Baixo</td>
      <td>Ativado</td>
    </tr>
    <tr>
      <td>
        <strong>🔥 Propagação de Fogo</strong>
      </td>
      <td>Fogo se espalha mais realisticamente</td>
      <td>Incêndios perigosos, cuidado com construções</td>
      <td>🟡 Médio (em grandes incêndios)</td>
      <td>Ativado com limites</td>
    </tr>
  </tbody>
</table>

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSistema de Gases</h2></caption>
  <thead>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
      <th>Tipos de Gás</th>
      <th>Perigos</th>
      <th>Configuração</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>💨 Geração Natural</strong>
      </td>
      <td>Gases são gerados naturalmente no mundo</td>
      <td>Metano (pântanos), CO2 (cavernas), Radônio (radioativo)</td>
      <td>Asfixia, explosões, radiação</td>
      <td>"Geração de Gases" está ativo com tick rate alto</td>
    </tr>
    <tr>
      <td>
        <strong>🔥 Gases Inflamáveis</strong>
      </td>
      <td>Alguns gases pegam fogo com fontes de ignição</td>
      <td>Metano, Hidrogênio, Propano</td>
      <td>Explosões, incêndios em larga escala</td>
      <td>"Lista de Ignição" com alguns blocos / itens (possível atualização no **PATCH - BETA 0.0.2**)</td>
    </tr>
    <tr>
      <td>
        <strong>🌫️ Acúmulo em Cavernas</strong>
      </td>
      <td>Gases pesados se acumulam em áreas baixas</td>
      <td>CO2, Radônio, Cloro</td>
      <td>Armadilhas naturais, morte súbita</td>
      <td>"Gases Lentos" ativos</td>
    </tr>
    <tr>
      <td>
        <strong>💨 Vento e Difusão</strong>
      </td>
      <td>Gases se espalham com vento e difusão</td>
      <td>Todos os gases</td>
      <td>Áreas grandes afetadas</td>
      <td>"Como se Estivesse se Espalhando como Água" está desativado para performance</td>
    </tr>
    <tr>
      <td>
        <strong>🎨 Renderização</strong>
      </td>
      <td>Gases podem ser vistos (alguns tipos)</td>
      <td>Fumaça, vapor, névoa tóxica</td>
      <td>Identificação visual de perigo</td>
      <td>"Renderizar o Gás" está desativado para FPS</td>
    </tr>
  </tbody>
</table>

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSistema de Temperatura Corporal</h2></caption>
  <thead>
    <tr>
      <th>Mecânica</th>
      <th>Descrição</th>
      <th>Fatores que Influenciam</th>
      <th>Efeitos</th>
      <th>Configuração</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>🌡️ Temperatura Ambiente</strong>
      </td>
      <td>Temperatura baseada no bioma/altitude</td>
      <td>Bioma, altitude, clima, hora do dia</td>
      <td>Base para cálculos de conforto</td>
      <td>Ativado</td>
    </tr>
    <tr>
      <td>
        <strong>🔥 Blocos Quentes/Frios</strong>
      </td>
      <td>Blocos afetam temperatura local</td>
      <td>Lava, fogo, gelo, neve, certos blocos de mods</td>
      <td>Microclimas, áreas seguras/perigosas</td>
      <td>"Potência de Queda de Temperatura do Bloco" foi configurado para 1.0</td>
    </tr>
    <tr>
      <td>
        <strong>👕 Roupas e Armaduras</strong>
      </td>
      <td>Equipamentos afetam isolamento térmico</td>
      <td>Material da armadura, encantamentos específicos</td>
      <td>Proteção contra extremos</td>
      <td>"Redenrização de Equipamentos" está ativo</td>
    </tr>
    <tr>
      <td>
        <strong>🍲 Comida e Bebida</strong>
      </td>
      <td>Consumíveis ajustam temperatura corporal</td>
      <td>Sopa quente, bebidas geladas, comidas especiais</td>
      <td>Regulação temporária</td>
      <td>Ativado</td>
    </tr>
    <tr>
      <td>
        <strong>🏠 Estruturas e Abrigos</strong>
      </td>
      <td>Construções afetam temperatura interna</td>
      <td>Paredes, tetos, portas, isolamento</td>
      <td>Ambientes controlados</td>
      <td>Ativado</td>
    </tr>
  </tbody>
</table>

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSistema de Hidratação e Água</h2></caption>
  <thead>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
      <th>Mecânicas</th>
      <th>Configuração</th>
      <th>Impacto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>💧 Consumo de Água</strong>
      </td>
      <td>Jogador perde hidratação com o tempo</td>
      <td>Atividades físicas, temperatura, tempo</td>
      <td>Ativado</td>
      <td>🟡 Médio (necessidade constante)</td>
    </tr>
    <tr>
      <td>
        <strong>🏺 Fontes de Água</strong>
      </td>
      <td>Diferentes tipos de água fornecem hidratação diferente</td>
      <td>Água suja, água limpa, água purificada, poções</td>
      <td>Ativado</td>
      <td>🟢 Baixo (variedade)</td>
    </tr>
    <tr>
      <td>
        <strong>⚗️ Purificação de Água</strong>
      </td>
      <td>Sistema para purificar água suja</td>
      <td>Fervura, filtros, produtos químicos</td>
      <td>Ativado</td>
      <td>🟡 Médio (preparação)</td>
    </tr>
    <tr>
      <td>
        <strong>🌊 Água Finita</strong>
      </td>
      <td>Água não se regenera automaticamente</td>
      <td>Ciclo da água realista, conservação necessária</td>
      <td>"Água Finita" ativado</td>
      <td>🔴 Alto (muda farms)</td>
    </tr>
    <tr>
      <td>
        <strong>♨️ Caldeirões</strong>
      </td>
      <td>Caldeirões podem ferver água com blocos quentes</td>
      <td>Purificação, cozimento, sistemas automáticos</td>
      <td>"Blocos de Aquecimento de Caldeirão" com alguns blocos / itens (possível atualização no **PATCH - BETA 0.0.2**)</td>
      <td>🟢 Baixo</td>
    </tr>
  </tbody>
</table> 

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSistema de Saúde e Status Persistentes </h2></caption>
  <thead>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
      <th>Persistência</th>
      <th>Configuração</th>
      <th>Dificuldade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>💀 Status na Morte</strong>
      </td>
      <td>Status persistem após morte do jogador</td>
      <td>Manutenção de condições adquiridas</td>
      <td>"Manter Status Após a Morte" está atualmente desativado, mas posso ativá-lo posteriormente para ser um "desafio"</td>
      <td>🔴 Difícil</td>
    </tr>
    <tr>
      <td>
        <strong>🥶 Danos Permanentes</strong>
      </td>
      <td>Frostbite pode causar dano permanente</td>
      <td>Redução permanente de vida máxima</td>
      <td>"A hipotermia é Permanente" está ativado para fins de desafio, mas posso por um meio de removê-lo</td>
      <td>🔴 Muito Difícil</td>
    </tr>
    <tr>
      <td>
        <strong>🧠 Saúde Mental</strong>
      </td>
      <td>Sistema de sanidade/estresse/insanidade</td>
      <td>Acúmulo progressivo, difícil de reverter</td>
      <td>Ativado</td>
      <td>🟡 Médio-Difícil</td>
    </tr>
    <tr>
      <td>
        <strong>⚖️ Peso e Carga</strong>
      </td>
      <td>Inventário cheio causa fadiga</td>
      <td>Penalidades por sobrecarga</td>
      <td>Ativado</td>
      <td>🟢 Fácil-Medio</td>
    </tr>
    <tr>
      <td>
        <strong>😴 Necessidade de Sono</strong>
      </td>
      <td>Jogador precisa dormir regularmente</td>
      <td>Penalidades progressivas por privação</td>
      <td>Ativado</td>
      <td>🟢 Fácil</td>
    </tr>
  </tbody>
</table> 

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤGeração de Mundo </h2></caption>
  <thead>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
      <th>Impacto na Geração</th>
      <th>Performance</th>
      <th>Configuração</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>⛏️ Minas Abandonadas Melhoradas</strong>
      </td>
      <td>Minas maiores e mais complexas</td>
      <td>Mais loot, mais complexidade, diferentes designs</td>
      <td>🟡 Médio (gera mais estruturas)</td>
      <td>"Habilitar Novas Minas Abandonados" está ativo, mas desativá-las aumenta a performance</td>
    </tr>
    <tr>
      <td>
        <strong>🏘️ Minas em Vilas</strong>
      </td>
      <td>Vilas podem ter minas incorporadas</td>
      <td>Integração vila-mina, loot mais acessível</td>
      <td>🟢 Baixo</td>
      <td>"Habilitar Minas nas Vilas" está desativado por performance, pois gera muito lag de geração de mundo</td>
    </tr>
    <tr>
      <td>
        <strong>💨 Geração de Gases</strong>
      </td>
      <td>Gases gerados durante worldgen</td>
      <td>Poços de gás, áreas perigosas naturais</td>
      <td>🔴 Alto (se muitos gases)</td>
      <td>"Gerar Gases" está ativo com otimizações</td>
    </tr>
    <tr>
      <td>
        <strong>🌋 Características Especiais</strong>
      </td>
      <td>Formações especiais relacionadas a sistemas</td>
      <td>Poços de calor/frio, áreas com atmosfera especial</td>
      <td>🟢 Baixo</td>
      <td>Ativado</td>
    </tr>
  </tbody>
</table> 

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤConfigurações de Interface e UX</h2></caption>
  <thead>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
      <th>Efeito</th>
      <th>Configuração Padrão</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>👁️ Náusea vs Cegueira</strong>
      </td>
      <td>Substitui efeito de náusea por cegueira</td>
      <td>Menos motion sickness, mesma dificuldade</td>
      <td>"Cegueira em vez de Náusea" está ativo</td>
    </tr>
    <tr>
      <td>
        <strong>📊 HUD de Status</strong>
      </td>
      <td>Mostra status na tela do jogador</td>
      <td>Informação em tempo real, customizável</td>
      <td>Ativado</td>
    </tr>
  </tbody>
</table> 

---

<table>
  <caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤLegenda de Impacto</h2></caption>
  <tr>
    <td>🟢 <strong>Baixo Impacto</strong>
    </td>
    <td>Pouco ou nenhum efeito no desempenho</td>
  </tr>
  <tr>
    <td>🟡 <strong>Médio Impacto</strong>
    </td>
    <td>Pode afetar desempenho em certas condições</td>
  </tr>
  <tr>
    <td>🔴 <strong>Alto Impacto</strong>
    </td>
    <td>Significativo impacto no desempenho, requer otimização</td>
  </tr>
  <tr>
    <td>⚫ <strong>Crítico</strong>
    </td>
    <td>Pode causar lag severo ou crashes se mal configurado</td>
  </tr>
</table>
<p>
  <em>Nota: Todas as configurações podem variar conforme versões específicas ou configurações do modpacks.</em>
</p>

---
	
### 🔁 OTIMIZAÇÃO — Mudanças de Configuração
💬 **[Densuki](https://github.com/Densuki)**:
> Essas mudanças existem para:

- **Limitar**: Funcionalidades do modpack, tornando cada mod necessário, evitando a criações desnecessárias / inutilização de recursos.
- **Balancear**: Para fins de progresso e gameplay. Aqui é para dar desafio e fazer o jogador explorar!
- **Remover**: Funcionalidades que atrapalham a gameplay
	
### 🛡 Balanceamento️ — Mudanças de Equilíbrio
💬 **[Densuki](https://github.com/Densuki)**:
> Aqui houveram algumas mudanças para o balanceamento nas quais eu achei necessário para tornar a dinâmica e gameplay acessível e menos lagado.

- **Gases:**\
	✅ Gases ainda existem no mundo\
	✅ Incêndios ainda podem acontecer (se houver fonte de ignição)\
	✅ Atmosferas diferentes em biomas/dimensões\
	✅ Mas: Gases se movem mais devagar\
	✅ Mas: Reação a fontes de calor é mais lenta\
	✅ Mas: Menos gases processados por tick

#### 1. - Física:
**Balance entre performance e resposta**
- **Intervalo de Física = ``12``**
↳ *1.66 atualizações/segundo (bom balance).*

<table>
	<thead>
		<tr>
			<th>Cenários</th> <th>Ação</th> <th>1º Intervalo</th> <th>2º Intervalo</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>1º</td> <th>Quebrando bloco de areia</td> <th>6: Cai quase instantaneamente (0.3s)</td> <th>20: Pode levar até 1 segundo para começar a cair</td>
		</tr>
		<tr>
			<th>2º</td> <th>Colapso de caverna</td> <th>6: Vários blocos caem rapidamente, pode causar lag</td> <th>20: Cai em "ondas" mais espaçadas, menos lag</td>
		</tr>
		<tr>
			<th>3º</td> <th>Estrutura complexa caindo</td> <th>6: Tudo cai de uma vez (muito lag)</td> <th>20: Cai gradualmente (lag distribuído)</td>
		</tr>
	</tbody>
</table>

💬 **[Densuki](https://github.com/Densuki)**:
> Aqui é um parâmetro de análise para dar uma referência.\
> Um dos parâmetros possíveis no meu alinhamento que encontrei nas otimizações...\
> Entre Padrão, Muito maixo e Extremo, escolhi um "meio termo".
	

#### 2. - Gases:
- **Limite de passagem de gás = ``48``**
↳
```yaml
Mais restritivo que 64.
O padrão é -1: Processa TODOS os gases no chunk de uma vez.
Com 64: Processa no máximo 64 gases por passagem por chunk.
É uma redução de lag: Até 80% em chunks muito gasosos.
```

- **Taxa de variação do gás = ``80``**
↳
```yaml
Apenas 0.25 atualizações/segundo.
O padrão é 32: Atualiza gases a cada 1.6 segundos.
Já com 64: Atualiza gases a cada 3.2 segundos...
Aqui já são uma redução de lag de 50% menos processamento.
```

- **Gases lentos = ``true``**\
↳ *Crítico para performance, mas os gases se movem muito devagar em comparação ao "``false``" que os gases se espalham rapidamente (mais cálculos).*

- **Como se estivesse se espalhando como água = ``false``**\
↳ *Menos cálculos, onde os gases se espalham como água (rápido/complexo) em comparação ao "``true``" a difusão é realista (simples/lento).*

- **Renderizar o Gás = ``false``**\
↳ *Sem overhead de render. Ou seja, o gás não se torna visível para fins de otimização.*

---

## Links & Referências

---
