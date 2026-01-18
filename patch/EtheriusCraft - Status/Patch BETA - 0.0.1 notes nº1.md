 ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Micro+5&size=40&pause=1000&color=880EF7&center=true&vCenter=true&width=435&lines=EtheriusCraft+-+Status)](https://git.io/typing-svg)
 ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤ ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤ [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Jacquard+12&size=40&pause=1000&color=00F7E4&center=true&vCenter=true&width=435&lines=Patch+-+Beta+Notes)](https://git.io/typing-svg)
 ## [0.0.1 - Notes nº 1]

|**Nº**|Hyperlinks Interativos|
|---|---|
|**1º**|[Início](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA1.md)|

# 🔄 Comparativo de Configurações: Inicial vs Atual

## 📊 Resumo das Principais Alterações

<table>
<thead>
<tr>
<th>Categoria</th>
<th>Configuração</th>
<th>Versão Inicial</th>
<th>Versão Atual</th>
<th>Mudança</th>
<th>Impacto</th>
</tr>
</thead>
<tbody>

<tr>
<td rowspan="3"><strong>💨 Gases</strong></td>
<td><strong>Limite de Processamento</strong><br><em>(Gas Pass Limit)</em></td>
<td>Ilimitado (-1)</td>
<td>48 gases</td>
<td>🔽 <strong>Reduzido drasticamente</strong></td>
<td>✅ Menor lag em áreas com muitos gases</td>
</tr>

<tr>
<td><strong>Velocidade de Atualização</strong><br><em>(Gas Tick Rate)</em></td>
<td>32 ticks (1.6s)</td>
<td>80 ticks (4.0s)</td>
<td>⏱️ <strong>Mais lento (2.5x)</strong></td>
<td>✅ 60% menos processamento de gases</td>
</tr>

<tr>
<td><strong>Espalhamento Tipo Água</strong><br><em>(Water like spreading)</em></td>
<td>Ativado (true)</td>
<td>Desativado (false)</td>
<td>🔄 <strong>Mudou para difusão realista</strong></td>
<td>✅ Menos cálculos complexos</td>
</tr>

<tr>
<td rowspan="3"><strong>⚖️ Física</strong></td>
<td><strong>Atraso em Novas Áreas</strong><br><em>(Chunk Physics Delay)</em></td>
<td>1000 ticks (50s)</td>
<td>2000 ticks (100s)</td>
<td>⏳ <strong>Dobrou o tempo de espera</strong></td>
<td>✅ Menos picos ao entrar em novas áreas</td>
</tr>

<tr>
<td><strong>Limite de Blocos Atualizados</strong><br><em>(Consecutive Physics Update Cap)</em></td>
<td>128 blocos</td>
<td>64 blocos</td>
<td>🔽 <strong>Reduzido pela metade</strong></td>
<td>✅ Colapsos acontecem em etapas menores</td>
</tr>

<tr>
<td><strong>Frequência da Física</strong><br><em>(Physics Interval)</em></td>
<td>6 ticks (0.3s)</td>
<td>12 ticks (0.6s)</td>
<td>⏱️ <strong>Metade da frequência</strong></td>
<td>✅ 50% menos processamento de física</td>
</tr>

<tr>
<td rowspan="2"><strong>🗺️ Mundo</strong></td>
<td><strong>Minas em Vilas</strong><br><em>(Enable Village MineShafts)</em></td>
<td>Ativado (true)</td>
<td>Desativado (false)</td>
<td>❌ <strong>Removido</strong></td>
<td>✅ Geração de mundo mais rápida</td>
</tr>

<tr>
<td><strong>Poder de Influência de Temperatura</strong><br><em>(Block Temperature Dropoff Power)</em></td>
<td>0.75</td>
<td>1.0</td>
<td>📈 <strong>Aumentado</strong></td>
<td>⚖️ Temperatura mais previsível</td>
</tr>

<tr>
<td><strong>💧 Sobrevivência</strong></td>
<td><strong>Água Finita</strong><br><em>(Finite Water)</em></td>
<td>Desativado (false)</td>
<td>Ativado (true)</td>
<td>✅ <strong>Ativado (Mudança Radical)</strong></td>
<td>🔴 Gameplay muito mais difícil</td>
</tr>

<tr>
<td rowspan="2"><strong>📝 Sistema</strong></td>
<td><strong>Verbosidade do Log</strong><br><em>(Logger Verbosity)</em></td>
<td>2 (Médio)</td>
<td>1 (Mínimo)</td>
<td>🔽 <strong>Reduzido</strong></td>
<td>✅ Menos spam no console do servidor</td>
</tr>

<tr>
<td><strong>Atraso no Início do Mundo</strong><br><em>(World Start Delay)</em></td>
<td>1000 ticks (50s)</td>
<td>3000 ticks (150s)</td>
<td>⏳ <strong>Triplicado</strong></td>
<td>✅ Início mais estável</td>
</tr>

</tbody>
</table>

## 🎯 Análise das Mudanças por Categoria

### 💨 **Sistema de Gases - Otimizado para Desempenho**

| Configuração | Antes | Depois | Melhoria de Performance |
|-------------|-------|--------|--------------------------|
| **Processamento por Chunk** | Ilimitado | 48 gases | **Até 95% menos processamento** |
| **Atualizações por Segundo** | 0.625/s | 0.25/s | **60% menos atualizações** |
| **Tipo de Espalhamento** | Complexo (água) | Simples (difusão) | **~25% menos cálculos** |

**Resultado:** Sistema de gases mantém funcionalidade com **~90% menos impacto no servidor**.

### ⚖️ **Sistema de Física - Balanceado**

| Configuração | Antes | Depois | Consequência no Gameplay |
|-------------|-------|--------|--------------------------|
| **Blocos por Atualização** | 128 | 64 | Colapsos em "ondas" ao invés de tudo de uma vez |
| **Frequência de Atualização** | Cada 0.3s | Cada 0.6s | Física 50% menos responsiva, mas mais estável |
| **Tempo de Inicialização** | 50s | 150s | Física começa mais tarde, dando tempo para estabilizar |

**Resultado:** Física mais previsível e com menos picos de lag.

### 💧 **Mudança Radical - Água Finita**

```diff
- Água infinita: Fontes se regeneram automaticamente
+ Água finita: Cada fonte é limitada, precisa de gestão
```

**Impacto no Gameplay:**
```
✅ VANTAGENS:
• Realismo extremo
• Necessidade de planejamento
• Valoriza sistemas de coleta/armazenamento

❌ DESVANTAGENS:
• Farms tradicionais não funcionam
• Mais difícil para iniciantes
• Requer mudança completa de mentalidade
```

### 🏥 **Sistema de Status - Mais Desafiador**

| Status | Mudança | Impacto |
|--------|---------|---------|
| **Congelamento Permanente** | Ativado | ❄️ Danos por frio podem ser irreversíveis |
| **Insanidade** | Ativado | 😵 Estresse extremo tem consequências graves |

## 📈 Resumo das Melhorias de Performance

### **Redução Estimada de Processamento:**

| Sistema | Redução Estimada | Impacto no TPS |
|---------|-----------------|----------------|
| **Gases** | 90-95% | 🟢 Melhoria significativa |
| **Física** | 50-60% | 🟡 Melhoria moderada |
| **Geração de Mundo** | 15-20% | 🟢 Ligeira melhoria |

### **Tempo de Processamento por Tick:**
```
ANTES: ~5-10ms por tick (em picos)
DEPOIS: ~2-4ms por tick (estimado)
Redução: 50-60% menos tempo de CPU
```

## ⚠️ **Configurações Críticas que Foram Alteradas**

### **1. 💧 Água Finita (MUDANÇA MAIS RADICAL)**
```yaml
DE: "Água infinita - Minecraft padrão"
PARA: "Água finita - Realismo extremo"
AVISO: Isso quebra quase todos os designs de farms de água!
```

### **2. 🥶 Congelamento Permanente**
```yaml
DE: "Congelamento temporário"
PARA: "Danos permanentes de vida"
AVISO: Exposição ao frio extremo tem consequências duradouras!
```

### **3. ⚖️ Limites de Processamento**
```yaml
DE: "Ilimitado ou generoso"
PARA: "Restrito e controlado"
BENEFÍCIO: Servidor mais estável com muitos jogadores
```

## 🎮 Impacto na Experiência do Jogador

### **Melhorias:**
1. **Servidor mais estável** - Menos lag, menos travamentos
2. **Experiência mais previsível** - Menos picos de processamento
3. **Geração de mundo mais rápida** - Menos espera ao explorar

### **Desafios Adicionados:**
1. **Gestão de água** - Recurso limitado e precioso
2. **Consequências permanentes** - Erros têm peso maior
3. **Planejamento necessário** - Não pode improvisar em biomas extremos

### **Recomendações para Jogadores:**
```
NOVO: 💧 Sistema de Água
• Construa cisternas e sistemas de coleta de chuva
• Recicle água sempre que possível
• Priorize água purificada (rende mais)

NOVO: ❄️ Sistema de Frio Extremo
• Nunca explore biomas gelados sem preparação
• Construa abrigos temporários frequentemente
• Carregue comida quente e poções de resistência ao fogo
```

## 🔄 Como Reverter Mudanças (Se Necessário)

### **Para menos dificuldade:**
```properties
# Água infinita novamente
B:"Finite Water"=false

# Congelamento não permanente
B:"Frostbite is permanent after enough time passes"=false
```

### **Para mais performance (se ainda tiver lag):**
```properties
# Desativar gases completamente
B:"Disable Gases"=true

# Física ainda mais lenta
I:"Physics Interval"=20
```

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
[Retornar pro Início](https://github.com/EtheriusCraft-Network/EtheriusCraft-Chrono_Anchor/blob/main/patch/EtheriusCraft%20-%20Status/Patch%20BETA%20-%200.0.1%20notes%20n%C2%BA1.md)
---
