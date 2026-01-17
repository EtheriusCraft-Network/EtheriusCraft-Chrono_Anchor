<!-- 
## ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ💡 Features & Alterações:
# ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ``Otimização & Ajustes``
-->

 ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Micro+5&size=40&pause=1000&color=880EF7&center=true&vCenter=true&width=435&lines=Otimiza%C3%A7%C3%A3o+%26+Ajustes)](https://git.io/typing-svg)
 ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤ ㅤㅤ [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Jacquard+12&size=40&pause=1000&color=00F7E4&center=true&vCenter=true&width=435&lines=Patch+-+Beta)](https://git.io/typing-svg)

# [0.0.1]
|**Nº**|Hyperlinks Interativos|
|---|---|
|**1º**|[Início](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#%EF%B8%8F-otimiza%C3%A7%C3%A3o--geral)|
|**2º**|[Aba - Mods](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-mods)|
|**3º**|[Aba - Alterações](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-altera%C3%A7%C3%B5es)|
|**4º**|[Alerta de Log](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-otimiza%C3%A7%C3%A3o--alerta-de-log-n%C3%A3o-cr%C3%ADtico)|
|**5º**|[Mudanças de Configuração](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-otimiza%C3%A7%C3%A3o--mudan%C3%A7as-de-configura%C3%A7%C3%A3o)|
|**6º**|[Entidades](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-otimiza%C3%A7%C3%A3o--entidades)|
|**7º**|[COMBATE — Escalonamento Dinâmico](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#%EF%B8%8F-combate--escalonamento-din%C3%A2mico)|
|**8º**|[ESCALONAMENTO — Fórmula de Dificuldade](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-escalonamento--f%C3%B3rmula-de-dificuldade)|
|**9º**|[Desafios Para o Jogador](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-impacto--para-o-jogador-desafios)|
|**10º**|[Vantagens Para o Jogador](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-impacto--para-o-jogador-vantagens)|
|**11º**|[Impacto Para as Entidades](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#%EF%B8%8F-impacto--para-as-entidades-zombies)|
|**12º**|[Tabela de Evolução](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#-%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4-tabela-de-evolu%C3%A7%C3%A3o-do-zombie)|
|**13º**|[Galeria do Changelog](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/tree/main/gallery)|

# 🧩 『MODS』

---

## ⚙️ OTIMIZAÇÃO — Geral

🧠 **[Densuki](https://github.com/Densuki)**:
> Mod dedicado exclusivamente à otimização do servidor.

- Reconfigurado para evitar conflitos com o Mekanism
- Ajustes relacionados ao carregamento de:
  - chunks
  - entidades
- 🎯 Objetivo:
  - Carregar o mapa apenas quando necessário
  - Priorizar jogadores e Chunk Loaders controlados
  - Evitar chunks sempre ativos de forma natural

---

### 🛑 OTIMIZAÇÃO — Alerta de Log (não crítico)

#### ⚠️ Mensagem frequente:
```md
Minecraft loaded a new chunk [X Pos, Z Pos] in dimension 0 while populating chunk [X Pos, Z Pos]
```


### 🔧 fixVanillaCascadingWorldgen
- Corrige cascading worldgen no vanilla
- Pode afetar compatibilidade de seeds

💬 **[Densuki](https://github.com/Densuki)**:  
> Não é um erro crítico, mas flooda o console e logs.  
> Mantido para debug (sim, sou contraditório 😅).

---

### 🔁 OTIMIZAÇÃO — Mudanças de Configuração

#### 🛡️ increaseMobArmor
- Aumenta a média de armadura dos mobs
- Balanceamento progressivo

---

#### ⏳ betterRegionalDifficulty
- Substitui a dificuldade regional do vanilla
- Baseada no tempo de jogo do jogador
- Inspirada no Too Many Caves and Wells (TMCW)

💬 **I.A. - Virturoid Lilith**  
> Aumenta a dificuldade progressivamente.  
> Interessante para servidores longos, mas não é puramente otimização.

---

#### 🌍 disableSpawnChunks
> Desativa chunks sempre carregados.

#### Quando descarregados:
- Máquinas de mods param
- Farms automáticos param
- Redstone congela
- Plantações não crescem
- Fornalhas não fundem

#### Jogadores
- Sempre carregam chunks ao redor
- Raio depende do view-distance
- Planejado: 8–16 chunks

#### Chunk Loaders
- Continuam funcionando
- Tempo de uso limitado

💬 **I.A. - Virturoid Lilith**  
> Pode quebrar farms dependentes de spawn chunks.

---

#### 🎨 enableNewButtonAppearance
- Visual moderno (1.14+)
- Remove destaque amarelo ao hover

---

#### 🌿 modernizeTextures
- Atualiza textura da grama alta

---

### 🧠 OTIMIZAÇÃO — Entidades

#### 🧍 optimizeEntityTicking
- Impede ticking de entidades distantes
- Atua como segundo controle de distância

Valores testados:
- 4096 → 64 blocos (padrão)
- 2304 → ~48 blocos (atual)

#### 📊 Comparação

<table>
	<thead>
		<tr>
			<th>🔢 Valor</th> <th>📏 Raio (blocos)</th> <th>🗺️ Área carregada</th> <th>⚙️ Impacto</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>1024</td> <th>32</td> <th>64×64</td> <th>🔴 Muito agressivo</td>
		</tr>
		<tr>
			<th>2048</td> <th>45</td> <th>90×90</td> <th>🟠 Agressivo</td> 		
		</tr>
		<tr>
			<th>4096</td> <th>64</td> <th>128×128</td> <th>🟡 Padrão</td>
		</tr>
		<tr>
			<th>8192</td> <th>90</td> <th>180×180</td> <th>🟢 Moderado</td>
		</tr>
		<tr>
			<th>16384</td> <th>128</td> <th>256×256</td> <th>🔵 Leve</td>
		</tr>
		<tr>
			<th>65536</td> <th>256</td> <th>512×512</td> <th>⚪ Mínima otimização</td>
		</tr>
	</tbody>
</table>

#### ✔️ Efeitos
- Reduz carga do servidor
- Diminui IA ativa
- Evita farms ocultos
- Força uso consciente de chunk loaders

#### ⚠️ Possíveis problemas
- Mobs congelam à distância
- Combates inconsistentes
- Agricultura animal afetada

💬 **[Densuki](https://github.com/Densuki)**:
> Caso 2304 seja agressivo, considerar 16384 ou retorno ao padrão.

---

## ♻ 『ALTERAÇÕES』

---

### ``Combate & Progressão``

### ⚔️ COMBATE — Escalonamento Dinâmico
> O sistema transforma mobs comuns em desafios progressivos.

- A I.A. das entidades foi aprimorada e combinada com outros 2 mods
- Mobs comuns evoluem para **mini-bosses** ao longo do tempo
- Mesmo jogadores end-game continuam enfrentando desafios
- Quests de caça e eliminação tornam-se altamente relevantes
- Dimensões passam a se comportar como:
  - 🗺️ “Dungeons a Céu Aberto”
  - 🌑 Zonas hostis e desoladas
  - 🎮 Experiência RPG de alto risco

💬 **[Densuki](https://github.com/Densuki)**:  
> Boa sorte explorando dungeons ou montando farms 😈  
> Isso também afeta bosses, eventos e entidades avulsas.

---

#### 📐 ESCALONAMENTO — Fórmula de Dificuldade

#### 🧮 Fórmula Base
```md
RD = Fator_Dificuldade_Mundo × (1 + (Tempo_Total_Jogo / 100h))
```

- 📈 RD máximo: **~5.0**
- ⏱️ Atingido após **~400 horas**
- 👤 Escala por **jogador**, não por chunk

📊 Abaixo há uma comparação direta com o sistema vanilla.

---

#### 🔴 IMPACTO — Para o Jogador (Desafios)

❌ Mobs tornam-se tanques  
↳ Zombies com **60+ HP efetivo**
❌ Dano escalonado  
↳ Hits podem remover **5–10 corações**, mesmo com diamante
❌ Encantamentos inimigos  
↳ Fire Aspect, Thorns, etc.
❌ Equipamentos perdidos  
↳ Mobs pegam drops e usam contra você
❌ Noites perigosas eternamente  
↳ Não existe mais “fase fácil” após 100h

---

#### 🟢 IMPACTO — Para o Jogador (Vantagens)

✅ Loot aprimorado  
↳ Equipamentos encantados com maior frequência
✅ Farms mais lucrativas  
↳ XP e drops mais valiosos
✅ Desafio constante  
↳ Nunca se torna trivial
✅ Preparação valorizada  
↳ Poções, buffs e armaduras são essenciais
✅ Cooperação incentivada  
↳ Jogar em grupo faz diferença real

---

#### ⚔️ IMPACTO — Para as Entidades (Zombies)

➕ Variedade tática  
↳ Tanques, DPS e suportes
➕ Comportamentos únicos  
↳ Uso de bows, estratégias diferenciadas
➕ Sobrevivência real  
↳ Não morrem em 1-hit facilmente
➕ Ameaça consistente  
↳ Capazes de matar jogadores descuidados
➕ Escalonamento infinito  
↳ Sempre desafiadores, independente do progresso

---

<table>
	<caption><h2> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ🧟 Tabela de Evolução do Zombie</h2></caption>
	<thead>
		<tr>
			<th>Tempo</th> <th>RD</th> <th>Armadura</th> <th>Arma</th> <th>Encant.</th> <th>Dano</th> <th>Vida</th> <th>Estratégia</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>0–5h</td> <td>0.5–1.0</td> <td>0–15%</td> <td>0–10%</td> <td>Nenhum</td> <td>+0% 🗡</td> <td>20 ❤️</td> <td>Arma básica</td>
		</tr>
		<tr>
			<td>10h</td> <td>1.5</td> <td>25%</td> <td>20%</td> <td>Prot. I</td> <td>+10% 🗡</td> <td>22–26 ❤️</td> <td>Ferro+</td>
		</tr>
		<tr>
			<td>24h</td> <td>2.0</td> <td>40%</td> <td>35%</td> <td>Sharp I</td> <td>+20% 🗡</td> <td>24–32 ❤️</td> <td>Diamante</td>
		</tr>
		<tr> 
			<td>50h</td> <td>2.8</td> <td>60%</td> <td>50%</td> <td>Prot. II</td> <td>+35% 🗡</td> <td>27–38 ❤️</td> <td>Enc. básicos</td>
		</tr>
		<tr> 
			<td>100h</td> <td>3.5</td> <td>75%</td> <td>65%</td> <td>Fire I</td> <td>+50% 🗡</td> <td>30–45 ❤️</td> <td>Full diamante</td>
		</tr>
		<tr>
			<td>200h</td> <td>4.5</td> <td>90%</td> <td>80%</td> <td>Sharp III</td> <td>+75% 🗡</td> <td>35–55 ❤️</td> <td>Poções</td>
		</tr>
		<tr>
			<td>400h+</td> <td>5.0</td> <td>95%+</td> <td>90%+</td> <td>Avançado</td> <td>+100% 🗡</td> <td>40–65 ❤️</td> <td>Estratégias</td>
		</tr>
	</tbody>
</table>

> [!WARNING]
> **Nota:**
> - Isso é apenas um parâmetro baseado no Vanilla com o Zombie...
> - Tenha isso apenas como uma base!
> - Poderá mudar, seja para pior ou melhor de acordo com os futuros Patchs.
> - O objetivo é enriquecer a I.A. das entidades e tornar mais desafiador.

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

- [Retornar pro Início](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/Otimization/Patch%20BETA%20-%200.0.1.md#001)
- [Patch BETA - 0.0.1 | Notes]()

---
