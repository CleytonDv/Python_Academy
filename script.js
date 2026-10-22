/* ════════════════════════════════════════════
   Python Academy — script.js  v2.0
   Paleta Midnight Tech | Duolingo/Mimo style
   ════════════════════════════════════════════ */

'use strict';

/* ──────────── STATE ──────────── */
const ST = {
  xp: 0,
  level: 1,
  streak: 0,
  completedLessons: new Set(),
  completedDesafios: new Set(),
  moduleProgress: {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},
  lastCheckin: null
};
const XP_PER_LEVEL = 500;
const levelTitles = ['','Iniciante','Aprendiz','Desenvolvedor','Programador','Expert','Mestre Python'];

/* ──────────── CURRICULUM DATA ──────────── */
const MODULES = [
  /* ── BÁSICO ── */
  {
    id:1, icon:'🐍', color:'linear-gradient(135deg,#00e5a0,#2f5fff)',
    title:'Sintaxe e Variáveis', level:'basico', topics:5,
    tag:'Básico', tagCls:'basic',
    desc:'Aprenda as regras fundamentais da linguagem Python e como armazenar dados.',
    topics_list:['Sintaxe básica','Variáveis','Tipos: str, int, float, bool','Conversão de tipos','print() e input()'],
    lessons:[
      {
        title:'O que é Python?', xp:30,
        body:`<p>Python é uma das linguagens de programação mais populares do mundo. Foi criada por Guido van Rossum em 1991 e é conhecida por sua sintaxe limpa e legível, parecida com o inglês.</p>
<h4>Por que Python?</h4>
<p>✅ Fácil de aprender — ideal para iniciantes<br>✅ Muito usado em ciência de dados, IA e automação<br>✅ Grande comunidade e muitas bibliotecas</p>`,
        code:`<span class="sk"># Meu primeiro programa Python!</span>
<span class="sf">print</span>(<span class="ss">"Olá, Mundo!"</span>)
<span class="sf">print</span>(<span class="ss">"Bem-vindo ao Python Academy"</span>)`,
        quiz:{q:'Qual função exibe texto na tela em Python?',opts:['show()','print()','write()','display()'],ans:1}
      },
      {
        title:'Variáveis', xp:40,
        body:`<p>Variáveis são como "caixas" que guardam dados na memória do computador. Em Python você não precisa declarar o tipo — ele é inferido automaticamente.</p>
<h4>Regras de nomenclatura:</h4>
<p>• Use letras, números e underscore (_)<br>• Não comece com número<br>• Evite acentos<br>• Use snake_case (ex: meu_nome)</p>`,
        code:`<span class="sk"># Criando variáveis</span>
<span class="sv">nome</span> = <span class="ss">"Ana Clara"</span>
<span class="sv">idade</span> = <span class="sn">17</span>
<span class="sv">nota</span> = <span class="sn">9.5</span>
<span class="sv">aprovada</span> = <span class="sk">True</span>

<span class="sf">print</span>(<span class="sv">nome</span>, <span class="ss">"tem"</span>, <span class="sv">idade</span>, <span class="ss">"anos"</span>)
<span class="sf">print</span>(<span class="ss">f"Nota: {<span class="sv">nota</span>}"</span>)`,
        quiz:{q:'Qual é a forma correta de criar uma variável em Python?',opts:['var nome = "Ana"','nome = "Ana"','string nome = "Ana"','let nome = "Ana"'],ans:1}
      },
      {
        title:'Tipos de Dados', xp:45,
        body:`<p>Python tem 4 tipos primitivos principais. Entender cada um é essencial para evitar erros.</p>
<h4>Os 4 tipos primitivos:</h4>`,
        code:`<span class="sk"># str — texto</span>
<span class="sv">curso</span> = <span class="ss">"Python Academy"</span>

<span class="sk"># int — número inteiro</span>
<span class="sv">alunos</span> = <span class="sn">35</span>

<span class="sk"># float — número decimal</span>
<span class="sv">media</span> = <span class="sn">8.75</span>

<span class="sk"># bool — verdadeiro ou falso</span>
<span class="sv">aprovado</span> = <span class="sk">True</span>

<span class="sk"># Verificando o tipo</span>
<span class="sf">print</span>(<span class="sf">type</span>(<span class="sv">curso</span>))    <span class="sc"># &lt;class 'str'&gt;</span>
<span class="sf">print</span>(<span class="sf">type</span>(<span class="sv">alunos</span>))   <span class="sc"># &lt;class 'int'&gt;</span>`,
        quiz:{q:'Qual tipo armazena números decimais em Python?',opts:['int','str','float','bool'],ans:2}
      },
      {
        title:'Operadores', xp:50,
        body:`<p>Operadores são usados para realizar cálculos e comparações. Python tem três categorias principais:</p>
<h4>Operadores Matemáticos:</h4>`,
        code:`<span class="sk"># Matemáticos</span>
<span class="sv">a</span>, <span class="sv">b</span> = <span class="sn">10</span>, <span class="sn">3</span>
<span class="sf">print</span>(<span class="sv">a</span> + <span class="sv">b</span>)   <span class="sc"># 13</span>
<span class="sf">print</span>(<span class="sv">a</span> - <span class="sv">b</span>)   <span class="sc"># 7</span>
<span class="sf">print</span>(<span class="sv">a</span> * <span class="sv">b</span>)   <span class="sc"># 30</span>
<span class="sf">print</span>(<span class="sv">a</span> / <span class="sv">b</span>)   <span class="sc"># 3.33</span>
<span class="sf">print</span>(<span class="sv">a</span> // <span class="sv">b</span>)  <span class="sc"># 3  (divisão inteira)</span>
<span class="sf">print</span>(<span class="sv">a</span> % <span class="sv">b</span>)   <span class="sc"># 1  (resto)</span>
<span class="sf">print</span>(<span class="sv">a</span> ** <span class="sv">b</span>)  <span class="sc"># 1000 (potência)</span>

<span class="sk"># Comparação</span>
<span class="sf">print</span>(<span class="sv">a</span> &gt; <span class="sv">b</span>)   <span class="sc"># True</span>
<span class="sf">print</span>(<span class="sv">a</span> == <span class="sv">b</span>)  <span class="sc"># False</span>`,
        quiz:{q:'Qual operador calcula o RESTO de uma divisão em Python?',opts:['/','//','%','**'],ans:2}
      },
      {
        title:'Entrada de Dados', xp:55,
        body:`<p>O <code>input()</code> permite que o usuário forneça dados ao programa. Importante: <strong>input() sempre retorna uma string</strong>, então você precisa converter para outros tipos quando necessário.</p>`,
        code:`<span class="sk"># Recebendo dados do usuário</span>
<span class="sv">nome</span> = <span class="sf">input</span>(<span class="ss">"Digite seu nome: "</span>)
<span class="sv">idade</span> = <span class="sf">int</span>(<span class="sf">input</span>(<span class="ss">"Digite sua idade: "</span>))
<span class="sv">nota</span> = <span class="sf">float</span>(<span class="sf">input</span>(<span class="ss">"Digite sua nota: "</span>))

<span class="sf">print</span>(<span class="ss">f"Olá {<span class="sv">nome</span>}! Você tem {<span class="sv">idade</span>} anos."</span>)
<span class="sf">print</span>(<span class="ss">f"Sua nota foi {<span class="sv">nota</span>:.1f}"</span>)`,
        quiz:{q:'O que input() retorna sempre em Python?',opts:['int','float','str','bool'],ans:2}
      }
    ]
  },
  {
    id:2, icon:'🔀', color:'linear-gradient(135deg,#2f5fff,#7B3FFF)',
    title:'Estruturas de Controle', level:'basico', topics:4,
    tag:'Básico', tagCls:'basic',
    desc:'Tome decisões e repita ações no seu código com if, for e while.',
    topics_list:['if, elif, else','for loop','while loop','break e continue'],
    lessons:[
      {
        title:'if, elif, else', xp:40,
        body:`<p>Estruturas condicionais permitem que o programa tome decisões. Em Python a indentação (4 espaços) é obrigatória para definir blocos!</p>`,
        code:`<span class="sv">nota</span> = <span class="sf">float</span>(<span class="sf">input</span>(<span class="ss">"Sua nota: "</span>))

<span class="sk">if</span> <span class="sv">nota</span> >= <span class="sn">7.0</span>:
    <span class="sf">print</span>(<span class="ss">"✅ Aprovado!"</span>)
<span class="sk">elif</span> <span class="sv">nota</span> >= <span class="sn">5.0</span>:
    <span class="sf">print</span>(<span class="ss">"📋 Recuperação"</span>)
<span class="sk">else</span>:
    <span class="sf">print</span>(<span class="ss">"❌ Reprovado"</span>)`,
        quiz:{q:'Qual palavra-chave é usada para uma condição ALTERNATIVA em Python?',opts:['else if','elseif','elif','otherwise'],ans:2}
      },
      {
        title:'for loop', xp:45,
        body:`<p>O <code>for</code> é ideal quando você sabe quantas vezes quer repetir algo. Use com <code>range()</code> para contar, ou diretamente sobre listas.</p>`,
        code:`<span class="sk"># Contando de 1 a 5</span>
<span class="sk">for</span> <span class="sv">i</span> <span class="sk">in</span> <span class="sf">range</span>(<span class="sn">1</span>, <span class="sn">6</span>):
    <span class="sf">print</span>(<span class="ss">f"Número: {<span class="sv">i</span>}"</span>)

<span class="sk"># Percorrendo uma lista</span>
<span class="sv">alunos</span> = [<span class="ss">"Ana"</span>, <span class="ss">"Bruno"</span>, <span class="ss">"Carla"</span>]
<span class="sk">for</span> <span class="sv">aluno</span> <span class="sk">in</span> <span class="sv">alunos</span>:
    <span class="sf">print</span>(<span class="ss">f"Olá, {<span class="sv">aluno</span>}!"</span>)`,
        quiz:{q:'range(1, 5) gera quais números?',opts:['1,2,3,4,5','1,2,3,4','0,1,2,3,4','2,3,4,5'],ans:1}
      },
      {
        title:'while loop', xp:45,
        body:`<p>O <code>while</code> repete enquanto uma condição for verdadeira. Cuidado com loops infinitos — sempre garanta que a condição se tornará falsa!</p>`,
        code:`<span class="sv">tentativas</span> = <span class="sn">0</span>
<span class="sv">senha</span> = <span class="ss">""</span>

<span class="sk">while</span> <span class="sv">senha</span> != <span class="ss">"python123"</span>:
    <span class="sv">senha</span> = <span class="sf">input</span>(<span class="ss">"Senha: "</span>)
    <span class="sv">tentativas</span> += <span class="sn">1</span>
    <span class="sk">if</span> <span class="sv">tentativas</span> >= <span class="sn">3</span>:
        <span class="sf">print</span>(<span class="ss">"Bloqueado!"</span>)
        <span class="sk">break</span>

<span class="sf">print</span>(<span class="ss">"Acesso liberado!"</span>)`,
        quiz:{q:'Qual comando INTERROMPE um loop imediatamente?',opts:['stop','exit','break','return'],ans:2}
      },
      {
        title:'Listas e Tuplas Básicas', xp:60,
        body:`<p>Listas armazenam múltiplos valores em sequência. São mutáveis (podem ser alteradas). Tuplas são imutáveis.</p>`,
        code:`<span class="sk"># Lista — mutável</span>
<span class="sv">notas</span> = [<span class="sn">8.5</span>, <span class="sn">7.0</span>, <span class="sn">9.2</span>, <span class="sn">6.8</span>]
<span class="sv">notas</span>.<span class="sf">append</span>(<span class="sn">10.0</span>)       <span class="sc"># adiciona</span>
<span class="sv">notas</span>.<span class="sf">remove</span>(<span class="sn">6.8</span>)       <span class="sc"># remove</span>
<span class="sf">print</span>(<span class="sv">notas</span>[<span class="sn">0</span>])           <span class="sc"># 8.5</span>
<span class="sf">print</span>(<span class="sf">len</span>(<span class="sv">notas</span>))         <span class="sc"># tamanho</span>

<span class="sk"># Tupla — imutável</span>
<span class="sv">cores_rgb</span> = (<span class="sn">255</span>, <span class="sn">128</span>, <span class="sn">0</span>)
<span class="sf">print</span>(<span class="sv">cores_rgb</span>[<span class="sn">0</span>])       <span class="sc"># 255</span>`,
        quiz:{q:'Qual método ADICIONA um item ao final de uma lista?',opts:['add()','insert()','append()','push()'],ans:2}
      }
    ]
  },
  {
    id:3, icon:'⚙️', color:'linear-gradient(135deg,#7B3FFF,#00cfff)',
    title:'Funções', level:'basico', topics:4,
    tag:'Básico', tagCls:'basic',
    desc:'Organize seu código em blocos reutilizáveis com def, parâmetros e retorno.',
    topics_list:['Criando funções (def)','Parâmetros e argumentos','Valor de retorno','Escopo de variáveis'],
    lessons:[
      {
        title:'Criando Funções', xp:50,
        body:`<p>Funções são blocos de código reutilizáveis. Evitam repetição e tornam o código mais organizado. Em Python usamos <code>def</code> para criar uma função.</p>`,
        code:`<span class="sk">def</span> <span class="sf">saudacao</span>(<span class="sv">nome</span>):
    <span class="sc">"""Imprime uma saudação personalizada."""</span>
    <span class="sf">print</span>(<span class="ss">f"Olá, {<span class="sv">nome</span>}! Bem-vindo."</span>)

<span class="sk">def</span> <span class="sf">soma</span>(<span class="sv">a</span>, <span class="sv">b</span>):
    <span class="sc">"""Retorna a soma de dois números."""</span>
    <span class="sk">return</span> <span class="sv">a</span> + <span class="sv">b</span>

<span class="sk"># Chamando funções</span>
<span class="sf">saudacao</span>(<span class="ss">"Carlos"</span>)
<span class="sv">resultado</span> = <span class="sf">soma</span>(<span class="sn">5</span>, <span class="sn">3</span>)
<span class="sf">print</span>(<span class="sv">resultado</span>)  <span class="sc"># 8</span>`,
        quiz:{q:'Qual palavra-chave cria uma função em Python?',opts:['function','func','def','create'],ans:2}
      },
      {
        title:'Parâmetros e Argumentos', xp:55,
        body:`<p>Parâmetros com valor padrão são opcionais — se não informados, usam o valor definido. Isso deixa as funções mais flexíveis.</p>`,
        code:`<span class="sk">def</span> <span class="sf">apresentar</span>(<span class="sv">nome</span>, <span class="sv">idade</span>=<span class="sn">18</span>, <span class="sv">curso</span>=<span class="ss">"Python"</span>):
    <span class="sf">print</span>(<span class="ss">f"{<span class="sv">nome</span>}, {<span class="sv">idade</span>} anos, curso: {<span class="sv">curso</span>}"</span>)

<span class="sf">apresentar</span>(<span class="ss">"Ana"</span>)               <span class="sc"># Ana, 18 anos, curso: Python</span>
<span class="sf">apresentar</span>(<span class="ss">"Bruno"</span>, <span class="sn">20</span>)        <span class="sc"># Bruno, 20 anos, curso: Python</span>
<span class="sf">apresentar</span>(<span class="ss">"Carla"</span>, <span class="sn">19</span>, <span class="ss">"JS"</span>)  <span class="sc"># Carla, 19 anos, curso: JS</span>`,
        quiz:{q:'Como chamar apresentar("Ana") sem erro se a função exige nome, idade=18?',opts:['Impossível','apresentar("Ana")','apresentar("Ana",)','apresentar(nome="Ana",idade)'],ans:1}
      },
      {
        title:'Retorno (return)', xp:55,
        body:`<p>O <code>return</code> envia um valor de volta para quem chamou a função. Uma função pode retornar múltiplos valores usando tuplas!</p>`,
        code:`<span class="sk">def</span> <span class="sf">calcular_imc</span>(<span class="sv">peso</span>, <span class="sv">altura</span>):
    <span class="sv">imc</span> = <span class="sv">peso</span> / (<span class="sv">altura</span> ** <span class="sn">2</span>)
    <span class="sk">if</span> <span class="sv">imc</span> < <span class="sn">18.5</span>:
        <span class="sv">status</span> = <span class="ss">"Abaixo do peso"</span>
    <span class="sk">elif</span> <span class="sv">imc</span> < <span class="sn">25</span>:
        <span class="sv">status</span> = <span class="ss">"Normal"</span>
    <span class="sk">else</span>:
        <span class="sv">status</span> = <span class="ss">"Acima do peso"</span>
    <span class="sk">return</span> <span class="sf">round</span>(<span class="sv">imc</span>, <span class="sn">2</span>), <span class="sv">status</span>

<span class="sv">i</span>, <span class="sv">s</span> = <span class="sf">calcular_imc</span>(<span class="sn">70</span>, <span class="sn">1.75</span>)
<span class="sf">print</span>(<span class="ss">f"IMC: {<span class="sv">i</span>} — {<span class="sv">s</span>}"</span>)`,
        quiz:{q:'O que acontece se uma função não tem return?',opts:['Erro','Retorna None','Retorna 0','Retorna ""'],ans:1}
      },
      {
        title:'Escopo de Variáveis', xp:60,
        body:`<p>Variáveis criadas dentro de uma função são <strong>locais</strong> — só existem ali. Variáveis fora são <strong>globais</strong>.</p>`,
        code:`<span class="sv">nome</span> = <span class="ss">"Global"</span>  <span class="sc"># variável global</span>

<span class="sk">def</span> <span class="sf">teste</span>():
    <span class="sv">nome</span> = <span class="ss">"Local"</span>   <span class="sc"># variável local</span>
    <span class="sf">print</span>(<span class="sv">nome</span>)      <span class="sc"># Local</span>

<span class="sf">teste</span>()
<span class="sf">print</span>(<span class="sv">nome</span>)          <span class="sc"># Global</span>

<span class="sk">def</span> <span class="sf">modificar_global</span>():
    <span class="sk">global</span> <span class="sv">nome</span>
    <span class="sv">nome</span> = <span class="ss">"Modificado!"</span>

<span class="sf">modificar_global</span>()
<span class="sf">print</span>(<span class="sv">nome</span>)          <span class="sc"># Modificado!</span>`,
        quiz:{q:'Qual palavra-chave permite modificar uma variável GLOBAL dentro de uma função?',opts:['extern','global','nonlocal','shared'],ans:1}
      }
    ]
  },

  /* ── INTERMEDIÁRIO ── */
  {
    id:4, icon:'📦', color:'linear-gradient(135deg,#ffd060,#ff8c42)',
    title:'Dicionários e Sets', level:'intermediario', topics:4,
    tag:'Intermediário', tagCls:'inter',
    desc:'Estruturas de dados poderosas: dicionários (chave-valor) e conjuntos (únicos).',
    topics_list:['Criando dicionários','Acessando e editando','Sets (conjuntos)','Métodos úteis'],
    lessons:[
      {
        title:'Dicionários', xp:60,
        body:`<p>Dicionários armazenam pares de <strong>chave:valor</strong>. São como uma agenda telefônica — você busca pelo nome (chave) e obtém o número (valor).</p>`,
        code:`<span class="sk"># Criando um dicionário</span>
<span class="sv">aluno</span> = {
    <span class="ss">"nome"</span>: <span class="ss">"Ana"</span>,
    <span class="ss">"idade"</span>: <span class="sn">17</span>,
    <span class="ss">"notas"</span>: [<span class="sn">8.5</span>, <span class="sn">9.0</span>, <span class="sn">7.5</span>],
    <span class="ss">"aprovada"</span>: <span class="sk">True</span>
}

<span class="sf">print</span>(<span class="sv">aluno</span>[<span class="ss">"nome"</span>])          <span class="sc"># Ana</span>
<span class="sv">aluno</span>[<span class="ss">"media"</span>] = <span class="sf">sum</span>(<span class="sv">aluno</span>[<span class="ss">"notas"</span>]) / <span class="sf">len</span>(<span class="sv">aluno</span>[<span class="ss">"notas"</span>])

<span class="sk">for</span> <span class="sv">chave</span>, <span class="sv">valor</span> <span class="sk">in</span> <span class="sv">aluno</span>.<span class="sf">items</span>():
    <span class="sf">print</span>(<span class="ss">f"{<span class="sv">chave</span>}: {<span class="sv">valor</span>}"</span>)`,
        quiz:{q:'Como acessar o valor "idade" no dict aluno?',opts:['aluno.idade','aluno["idade"]','aluno->idade','get(aluno, idade)'],ans:1}
      },
      {
        title:'Métodos de Dicionário', xp:55,
        body:`<p>Os dicionários têm métodos muito úteis para manipulação de dados.</p>`,
        code:`<span class="sv">contatos</span> = {<span class="ss">"Ana"</span>: <span class="ss">"9999-1111"</span>, <span class="ss">"Bruno"</span>: <span class="ss">"9999-2222"</span>}

<span class="sk"># Métodos principais</span>
<span class="sf">print</span>(<span class="sv">contatos</span>.<span class="sf">keys</span>())    <span class="sc"># chaves</span>
<span class="sf">print</span>(<span class="sv">contatos</span>.<span class="sf">values</span>())  <span class="sc"># valores</span>
<span class="sf">print</span>(<span class="sv">contatos</span>.<span class="sf">get</span>(<span class="ss">"Ana"</span>, <span class="ss">"Não encontrado"</span>))

<span class="sk"># Verificar se chave existe</span>
<span class="sk">if</span> <span class="ss">"Bruno"</span> <span class="sk">in</span> <span class="sv">contatos</span>:
    <span class="sf">print</span>(<span class="ss">"Bruno está na lista!"</span>)

<span class="sk"># Remover</span>
<span class="sv">contatos</span>.<span class="sf">pop</span>(<span class="ss">"Bruno"</span>)`,
        quiz:{q:'Qual método retorna TODOS os pares chave-valor de um dict?',opts:['.keys()','values()','items()','pairs()'],ans:2}
      },
      {
        title:'Sets (Conjuntos)', xp:50,
        body:`<p>Sets armazenam valores únicos e não ordenados. São perfeitos para remover duplicatas e operações matemáticas de conjuntos.</p>`,
        code:`<span class="sk"># Removendo duplicatas com set</span>
<span class="sv">nums</span> = [<span class="sn">1</span>,<span class="sn">2</span>,<span class="sn">2</span>,<span class="sn">3</span>,<span class="sn">3</span>,<span class="sn">3</span>]
<span class="sv">unicos</span> = <span class="sf">set</span>(<span class="sv">nums</span>)
<span class="sf">print</span>(<span class="sv">unicos</span>)  <span class="sc"># {1, 2, 3}</span>

<span class="sv">turmaA</span> = {<span class="ss">"Ana"</span>,<span class="ss">"Bruno"</span>,<span class="ss">"Carla"</span>}
<span class="sv">turmaB</span> = {<span class="ss">"Bruno"</span>,<span class="ss">"Diego"</span>,<span class="ss">"Carla"</span>}

<span class="sf">print</span>(<span class="sv">turmaA</span> & <span class="sv">turmaB</span>)  <span class="sc"># Interseção: Bruno, Carla</span>
<span class="sf">print</span>(<span class="sv">turmaA</span> | <span class="sv">turmaB</span>)  <span class="sc"># União</span>
<span class="sf">print</span>(<span class="sv">turmaA</span> - <span class="sv">turmaB</span>)  <span class="sc"># Diferença: Ana</span>`,
        quiz:{q:'Sets permitem valores duplicados?',opts:['Sim','Não','Apenas números','Depende do tipo'],ans:1}
      },
      {
        title:'List Comprehension', xp:70,
        body:`<p>List comprehension é uma forma pythônica e elegante de criar listas. É mais rápida e expressiva que um loop for tradicional.</p>`,
        code:`<span class="sk"># Jeito tradicional</span>
<span class="sv">quadrados</span> = []
<span class="sk">for</span> <span class="sv">i</span> <span class="sk">in</span> <span class="sf">range</span>(<span class="sn">1</span>, <span class="sn">6</span>):
    <span class="sv">quadrados</span>.<span class="sf">append</span>(<span class="sv">i</span>**<span class="sn">2</span>)

<span class="sk"># Jeito pythônico (list comprehension)</span>
<span class="sv">quadrados</span> = [<span class="sv">i</span>**<span class="sn">2</span> <span class="sk">for</span> <span class="sv">i</span> <span class="sk">in</span> <span class="sf">range</span>(<span class="sn">1</span>,<span class="sn">6</span>)]
<span class="sf">print</span>(<span class="sv">quadrados</span>)  <span class="sc"># [1, 4, 9, 16, 25]</span>

<span class="sk"># Com condição</span>
<span class="sv">pares</span> = [<span class="sv">x</span> <span class="sk">for</span> <span class="sv">x</span> <span class="sk">in</span> <span class="sf">range</span>(<span class="sn">20</span>) <span class="sk">if</span> <span class="sv">x</span>%<span class="sn">2</span>==<span class="sn">0</span>]
<span class="sf">print</span>(<span class="sv">pares</span>)      <span class="sc"># [0,2,4,6,8,10,12,14,16,18]</span>`,
        quiz:{q:'O que [x*2 for x in range(3)] retorna?',opts:['[0,1,2]','[2,4,6]','[0,2,4]','[1,2,3]'],ans:2}
      }
    ]
  },
  {
    id:5, icon:'📁', color:'linear-gradient(135deg,#ff8c42,#ffd060)',
    title:'Manipulação de Arquivos', level:'intermediario', topics:3,
    tag:'Intermediário', tagCls:'inter',
    desc:'Leia e escreva arquivos .txt, .csv e .json com Python.',
    topics_list:['Abrindo arquivos (open)','Leitura e escrita','Módulo json','CSV com Python'],
    lessons:[
      {
        title:'Abrindo e Lendo Arquivos', xp:65,
        body:`<p>Python usa <code>open()</code> para trabalhar com arquivos. O <code>with</code> garante que o arquivo seja fechado automaticamente após o uso.</p>`,
        code:`<span class="sk"># Escrevendo</span>
<span class="sk">with</span> <span class="sf">open</span>(<span class="ss">"alunos.txt"</span>, <span class="ss">"w"</span>, <span class="sv">encoding</span>=<span class="ss">"utf-8"</span>) <span class="sk">as</span> <span class="sv">f</span>:
    <span class="sv">f</span>.<span class="sf">write</span>(<span class="ss">"Ana\n"</span>)
    <span class="sv">f</span>.<span class="sf">write</span>(<span class="ss">"Bruno\n"</span>)
    <span class="sv">f</span>.<span class="sf">write</span>(<span class="ss">"Carla\n"</span>)

<span class="sk"># Lendo</span>
<span class="sk">with</span> <span class="sf">open</span>(<span class="ss">"alunos.txt"</span>, <span class="ss">"r"</span>, <span class="sv">encoding</span>=<span class="ss">"utf-8"</span>) <span class="sk">as</span> <span class="sv">f</span>:
    <span class="sv">linhas</span> = <span class="sv">f</span>.<span class="sf">readlines</span>()
    <span class="sk">for</span> <span class="sv">linha</span> <span class="sk">in</span> <span class="sv">linhas</span>:
        <span class="sf">print</span>(<span class="sv">linha</span>.<span class="sf">strip</span>())`,
        quiz:{q:'Qual modo abre um arquivo para ESCRITA do zero?',opts:['"r"','"a"','"w"','"rw"'],ans:2}
      },
      {
        title:'Trabalhando com JSON', xp:70,
        body:`<p>JSON é o formato padrão para troca de dados na internet. Python tem o módulo <code>json</code> nativo para converter entre dicionários e JSON.</p>`,
        code:`<span class="sk">import</span> <span class="sf">json</span>

<span class="sv">aluno</span> = {<span class="ss">"nome"</span>: <span class="ss">"Ana"</span>, <span class="ss">"nota"</span>: <span class="sn">9.5</span>}

<span class="sk"># Salvar JSON</span>
<span class="sk">with</span> <span class="sf">open</span>(<span class="ss">"aluno.json"</span>, <span class="ss">"w"</span>) <span class="sk">as</span> <span class="sv">f</span>:
    <span class="sf">json</span>.<span class="sf">dump</span>(<span class="sv">aluno</span>, <span class="sv">f</span>, <span class="sv">indent</span>=<span class="sn">4</span>)

<span class="sk"># Carregar JSON</span>
<span class="sk">with</span> <span class="sf">open</span>(<span class="ss">"aluno.json"</span>, <span class="ss">"r"</span>) <span class="sk">as</span> <span class="sv">f</span>:
    <span class="sv">dados</span> = <span class="sf">json</span>.<span class="sf">load</span>(<span class="sv">f</span>)

<span class="sf">print</span>(<span class="sv">dados</span>[<span class="ss">"nome"</span>])  <span class="sc"># Ana</span>`,
        quiz:{q:'Qual função salva um dict Python em arquivo JSON?',opts:['json.save()','json.dump()','json.write()','json.export()'],ans:1}
      },
      {
        title:'Exceções (try/except)', xp:75,
        body:`<p>Exceções são erros que ocorrem durante a execução. O bloco <code>try/except</code> evita que o programa "quebre" inesperadamente.</p>`,
        code:`<span class="sk">def</span> <span class="sf">dividir</span>(<span class="sv">a</span>, <span class="sv">b</span>):
    <span class="sk">try</span>:
        <span class="sv">resultado</span> = <span class="sv">a</span> / <span class="sv">b</span>
        <span class="sk">return</span> <span class="sv">resultado</span>
    <span class="sk">except</span> <span class="sf">ZeroDivisionError</span>:
        <span class="sf">print</span>(<span class="ss">"❌ Erro: divisão por zero!"</span>)
        <span class="sk">return</span> <span class="sk">None</span>
    <span class="sk">except</span> <span class="sf">TypeError</span>:
        <span class="sf">print</span>(<span class="ss">"❌ Erro: tipo inválido!"</span>)
        <span class="sk">return</span> <span class="sk">None</span>
    <span class="sk">finally</span>:
        <span class="sf">print</span>(<span class="ss">"Operação concluída."</span>)

<span class="sf">print</span>(<span class="sf">dividir</span>(<span class="sn">10</span>, <span class="sn">2</span>))   <span class="sc"># 5.0</span>
<span class="sf">print</span>(<span class="sf">dividir</span>(<span class="sn">10</span>, <span class="sn">0</span>))   <span class="sc"># Erro</span>`,
        quiz:{q:'O bloco "finally" é executado...',opts:['Só se não houver erro','Só se houver erro','Sempre, independente do que acontecer','Nunca'],ans:2}
      }
    ]
  },
  {
    id:6, icon:'🧩', color:'linear-gradient(135deg,#00cfff,#7B3FFF)',
    title:'Bibliotecas e Módulos', level:'intermediario', topics:3,
    tag:'Intermediário', tagCls:'inter',
    desc:'Use módulos nativos e externos: math, random, datetime e muito mais.',
    topics_list:['Importando módulos','math e random','datetime','Criando seus módulos'],
    lessons:[
      {
        title:'math e random', xp:60,
        body:`<p>Python vem com muitas bibliotecas nativas poderosas. <code>math</code> oferece funções matemáticas avançadas e <code>random</code> gera números aleatórios.</p>`,
        code:`<span class="sk">import</span> <span class="sf">math</span>
<span class="sk">import</span> <span class="sf">random</span>

<span class="sk"># math</span>
<span class="sf">print</span>(<span class="sf">math</span>.<span class="sf">sqrt</span>(<span class="sn">144</span>))    <span class="sc"># 12.0</span>
<span class="sf">print</span>(<span class="sf">math</span>.<span class="sf">pi</span>)           <span class="sc"># 3.14159...</span>
<span class="sf">print</span>(<span class="sf">math</span>.<span class="sf">ceil</span>(<span class="sn">4.3</span>))   <span class="sc"># 5</span>
<span class="sf">print</span>(<span class="sf">math</span>.<span class="sf">floor</span>(<span class="sn">4.9</span>))  <span class="sc"># 4</span>

<span class="sk"># random</span>
<span class="sf">print</span>(<span class="sf">random</span>.<span class="sf">randint</span>(<span class="sn">1</span>, <span class="sn">100</span>))
<span class="sf">print</span>(<span class="sf">random</span>.<span class="sf">choice</span>([<span class="ss">"Ana"</span>, <span class="ss">"Bruno"</span>, <span class="ss">"Carla"</span>]))
<span class="sv">lista</span> = [<span class="sn">1</span>,<span class="sn">2</span>,<span class="sn">3</span>,<span class="sn">4</span>,<span class="sn">5</span>]
<span class="sf">random</span>.<span class="sf">shuffle</span>(<span class="sv">lista</span>)`,
        quiz:{q:'Qual função gera um int aleatório entre 1 e 10?',opts:['random.random()','random.randint(1,10)','random.int(1,10)','math.rand(1,10)'],ans:1}
      },
      {
        title:'datetime', xp:60,
        body:`<p>O módulo <code>datetime</code> permite trabalhar com datas e horas facilmente — essencial para sistemas reais.</p>`,
        code:`<span class="sk">from</span> <span class="sf">datetime</span> <span class="sk">import</span> <span class="sf">datetime</span>, <span class="sf">date</span>

<span class="sv">agora</span> = <span class="sf">datetime</span>.<span class="sf">now</span>()
<span class="sf">print</span>(<span class="sv">agora</span>)

<span class="sf">print</span>(<span class="ss">f"Dia: {<span class="sv">agora</span>.day}/{<span class="sv">agora</span>.month}/{<span class="sv">agora</span>.year}"</span>)
<span class="sf">print</span>(<span class="ss">f"Hora: {<span class="sv">agora</span>.hour}:{<span class="sv">agora</span>.minute}"</span>)

<span class="sk"># Formatando</span>
<span class="sf">print</span>(<span class="sv">agora</span>.<span class="sf">strftime</span>(<span class="ss">"%d/%m/%Y %H:%M"</span>))

<span class="sk"># Diferença entre datas</span>
<span class="sv">nascimento</span> = <span class="sf">date</span>(<span class="sn">2007</span>, <span class="sn">5</span>, <span class="sn">15</span>)
<span class="sv">hoje</span> = <span class="sf">date</span>.<span class="sf">today</span>()
<span class="sv">idade</span> = (<span class="sv">hoje</span> - <span class="sv">nascimento</span>).days // <span class="sn">365</span>
<span class="sf">print</span>(<span class="ss">f"Tem {<span class="sv">idade</span>} anos"</span>)`,
        quiz:{q:'Qual método retorna a data e hora atual?',opts:['datetime.today()','datetime.now()','datetime.current()','time.now()'],ans:1}
      },
      {
        title:'Criando seus Módulos', xp:65,
        body:`<p>Você pode criar seus próprios módulos salvando funções em um arquivo .py e importando onde precisar. Isso é a base da organização de projetos.</p>`,
        code:`<span class="sc"># arquivo: calculadora.py</span>
<span class="sk">def</span> <span class="sf">soma</span>(<span class="sv">a</span>, <span class="sv">b</span>): <span class="sk">return</span> <span class="sv">a</span> + <span class="sv">b</span>
<span class="sk">def</span> <span class="sf">sub</span>(<span class="sv">a</span>, <span class="sv">b</span>):  <span class="sk">return</span> <span class="sv">a</span> - <span class="sv">b</span>
<span class="sk">def</span> <span class="sf">mult</span>(<span class="sv">a</span>, <span class="sv">b</span>): <span class="sk">return</span> <span class="sv">a</span> * <span class="sv">b</span>
<span class="sk">def</span> <span class="sf">div</span>(<span class="sv">a</span>, <span class="sv">b</span>):
    <span class="sk">if</span> <span class="sv">b</span> == <span class="sn">0</span>: <span class="sk">raise</span> <span class="sf">ValueError</span>(<span class="ss">"Divisão por zero!"</span>)
    <span class="sk">return</span> <span class="sv">a</span> / <span class="sv">b</span>

<span class="sc"># arquivo: main.py</span>
<span class="sk">import</span> <span class="sf">calculadora</span>
<span class="sf">print</span>(<span class="sf">calculadora</span>.<span class="sf">soma</span>(<span class="sn">5</span>, <span class="sn">3</span>))   <span class="sc"># 8</span>

<span class="sc"># Ou importando específico</span>
<span class="sk">from</span> <span class="sf">calculadora</span> <span class="sk">import</span> <span class="sf">soma</span>, <span class="sf">mult</span>`,
        quiz:{q:'Como importar APENAS a função soma de um módulo chamado calc?',opts:['import soma from calc','from calc import soma','import calc.soma','require calc.soma'],ans:1}
      }
    ]
  },

  /* ── AVANÇADO ── */
  {
    id:7, icon:'🏛️', color:'linear-gradient(135deg,#ff4d6d,#7B3FFF)',
    title:'Orientação a Objetos (POO)', level:'avancado', topics:5,
    tag:'Avançado', tagCls:'adv',
    desc:'Classes, herança, encapsulamento e polimorfismo — o paradigma da programação moderna.',
    topics_list:['Classes e Objetos','__init__ e atributos','Herança','Encapsulamento','Polimorfismo'],
    lessons:[
      {
        title:'Classes e Objetos', xp:80,
        body:`<p>Uma <strong>classe</strong> é um molde, um <strong>objeto</strong> é o produto criado a partir desse molde. POO organiza o código em entidades do mundo real.</p>`,
        code:`<span class="sk">class</span> <span class="sf">Aluno</span>:
    <span class="sc">"""Representa um aluno da escola."""</span>

    <span class="sv">escola</span> = <span class="ss">"Python Academy"</span>  <span class="sc"># atributo de classe</span>

    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>, <span class="sv">nome</span>, <span class="sv">idade</span>):
        <span class="sk">self</span>.<span class="sv">nome</span> = <span class="sv">nome</span>    <span class="sc"># atributo de instância</span>
        <span class="sk">self</span>.<span class="sv">idade</span> = <span class="sv">idade</span>
        <span class="sk">self</span>.<span class="sv">notas</span> = []

    <span class="sk">def</span> <span class="sf">adicionar_nota</span>(<span class="sk">self</span>, <span class="sv">nota</span>):
        <span class="sk">self</span>.<span class="sv">notas</span>.<span class="sf">append</span>(<span class="sv">nota</span>)

    <span class="sk">def</span> <span class="sf">media</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="sf">sum</span>(<span class="sk">self</span>.<span class="sv">notas</span>) / <span class="sf">len</span>(<span class="sk">self</span>.<span class="sv">notas</span>)

<span class="sv">a</span> = <span class="sf">Aluno</span>(<span class="ss">"Ana"</span>, <span class="sn">17</span>)
<span class="sv">a</span>.<span class="sf">adicionar_nota</span>(<span class="sn">9.0</span>)
<span class="sv">a</span>.<span class="sf">adicionar_nota</span>(<span class="sn">8.5</span>)
<span class="sf">print</span>(<span class="sv">a</span>.<span class="sf">media</span>())  <span class="sc"># 8.75</span>`,
        quiz:{q:'Qual método é chamado automaticamente ao criar um objeto?',opts:['__start__','__new__','__init__','__create__'],ans:2}
      },
      {
        title:'Herança', xp:90,
        body:`<p>Herança permite criar novas classes baseadas em classes existentes, reutilizando e estendendo comportamentos.</p>`,
        code:`<span class="sk">class</span> <span class="sf">Pessoa</span>:
    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>, <span class="sv">nome</span>, <span class="sv">idade</span>):
        <span class="sk">self</span>.<span class="sv">nome</span> = <span class="sv">nome</span>
        <span class="sk">self</span>.<span class="sv">idade</span> = <span class="sv">idade</span>
    <span class="sk">def</span> <span class="sf">apresentar</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="ss">f"Sou {<span class="sk">self</span>.<span class="sv">nome</span>}, {<span class="sk">self</span>.<span class="sv">idade</span>} anos."</span>

<span class="sk">class</span> <span class="sf">Professor</span>(<span class="sf">Pessoa</span>):  <span class="sc"># herda de Pessoa</span>
    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>, <span class="sv">nome</span>, <span class="sv">idade</span>, <span class="sv">disciplina</span>):
        <span class="sf">super</span>().<span class="sf">__init__</span>(<span class="sv">nome</span>, <span class="sv">idade</span>)  <span class="sc"># chama o pai</span>
        <span class="sk">self</span>.<span class="sv">disciplina</span> = <span class="sv">disciplina</span>
    <span class="sk">def</span> <span class="sf">apresentar</span>(<span class="sk">self</span>):  <span class="sc"># sobrescreve</span>
        <span class="sk">return</span> <span class="ss">f"Prof. {<span class="sk">self</span>.<span class="sv">nome</span>} - {<span class="sk">self</span>.<span class="sv">disciplina</span>}"</span>

<span class="sv">p</span> = <span class="sf">Professor</span>(<span class="ss">"Silva"</span>, <span class="sn">35</span>, <span class="ss">"Python"</span>)
<span class="sf">print</span>(<span class="sv">p</span>.<span class="sf">apresentar</span>())`,
        quiz:{q:'Qual função chama o método da classe PAI?',opts:['parent()','base()','super()','inherit()'],ans:2}
      },
      {
        title:'Encapsulamento', xp:85,
        body:`<p>Encapsulamento esconde os detalhes internos de uma classe, expondo apenas o necessário. Em Python, usamos _ e __ para indicar isso.</p>`,
        code:`<span class="sk">class</span> <span class="sf">ContaBancaria</span>:
    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>, <span class="sv">saldo</span>):
        <span class="sk">self</span>.<span class="sv">__saldo</span> = <span class="sv">saldo</span>  <span class="sc"># privado!</span>

    <span class="sk">def</span> <span class="sf">depositar</span>(<span class="sk">self</span>, <span class="sv">valor</span>):
        <span class="sk">if</span> <span class="sv">valor</span> > <span class="sn">0</span>:
            <span class="sk">self</span>.<span class="sv">__saldo</span> += <span class="sv">valor</span>

    <span class="sk">def</span> <span class="sf">sacar</span>(<span class="sk">self</span>, <span class="sv">valor</span>):
        <span class="sk">if</span> <span class="sn">0</span> < <span class="sv">valor</span> <= <span class="sk">self</span>.<span class="sv">__saldo</span>:
            <span class="sk">self</span>.<span class="sv">__saldo</span> -= <span class="sv">valor</span>
        <span class="sk">else</span>:
            <span class="sf">print</span>(<span class="ss">"Saldo insuficiente!"</span>)

    <span class="sk">def</span> <span class="sf">ver_saldo</span>(<span class="sk">self</span>): <span class="sc"># getter</span>
        <span class="sk">return</span> <span class="sk">self</span>.<span class="sv">__saldo</span>`,
        quiz:{q:'Em Python, __variavel (dois underlines) indica um atributo...',opts:['Público','Protegido','Privado','Estático'],ans:2}
      },
      {
        title:'Polimorfismo', xp:90,
        body:`<p>Polimorfismo significa "muitas formas". Permite que diferentes classes implementem o mesmo método de formas distintas.</p>`,
        code:`<span class="sk">class</span> <span class="sf">Animal</span>:
    <span class="sk">def</span> <span class="sf">falar</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="ss">"..."</span>

<span class="sk">class</span> <span class="sf">Cachorro</span>(<span class="sf">Animal</span>):
    <span class="sk">def</span> <span class="sf">falar</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="ss">"Au Au!"</span>

<span class="sk">class</span> <span class="sf">Gato</span>(<span class="sf">Animal</span>):
    <span class="sk">def</span> <span class="sf">falar</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="ss">"Miau!"</span>

<span class="sk">class</span> <span class="sf">Pato</span>(<span class="sf">Animal</span>):
    <span class="sk">def</span> <span class="sf">falar</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="ss">"Quack!"</span>

<span class="sc"># Polimorfismo em ação</span>
<span class="sv">animais</span> = [<span class="sf">Cachorro</span>(), <span class="sf">Gato</span>(), <span class="sf">Pato</span>()]
<span class="sk">for</span> <span class="sv">a</span> <span class="sk">in</span> <span class="sv">animais</span>:
    <span class="sf">print</span>(<span class="sv">a</span>.<span class="sf">falar</span>())`,
        quiz:{q:'Polimorfismo é a capacidade de...',opts:['Criar muitos objetos','O mesmo método funcionar de forma diferente em classes distintas','Herdar de múltiplas classes','Esconder atributos'],ans:1}
      },
      {
        title:'Métodos Especiais (Dunder)', xp:100,
        body:`<p>Métodos com __ (double underscore) permitem que seus objetos se comportem como tipos nativos do Python — você pode somar, comparar, imprimir objetos!</p>`,
        code:`<span class="sk">class</span> <span class="sf">Vetor</span>:
    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>, <span class="sv">x</span>, <span class="sv">y</span>):
        <span class="sk">self</span>.<span class="sv">x</span> = <span class="sv">x</span>
        <span class="sk">self</span>.<span class="sv">y</span> = <span class="sv">y</span>

    <span class="sk">def</span> <span class="sf">__repr__</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="ss">f"Vetor({<span class="sk">self</span>.<span class="sv">x</span>}, {<span class="sk">self</span>.<span class="sv">y</span>})"</span>

    <span class="sk">def</span> <span class="sf">__add__</span>(<span class="sk">self</span>, <span class="sv">outro</span>):
        <span class="sk">return</span> <span class="sf">Vetor</span>(<span class="sk">self</span>.<span class="sv">x</span>+<span class="sv">outro</span>.<span class="sv">x</span>, <span class="sk">self</span>.<span class="sv">y</span>+<span class="sv">outro</span>.<span class="sv">y</span>)

    <span class="sk">def</span> <span class="sf">__len__</span>(<span class="sk">self</span>):
        <span class="sk">return</span> <span class="sf">int</span>((<span class="sk">self</span>.<span class="sv">x</span>**<span class="sn">2</span> + <span class="sk">self</span>.<span class="sv">y</span>**<span class="sn">2</span>)**<span class="sn">0.5</span>)

<span class="sv">v1</span> = <span class="sf">Vetor</span>(<span class="sn">2</span>, <span class="sn">3</span>)
<span class="sv">v2</span> = <span class="sf">Vetor</span>(<span class="sn">1</span>, <span class="sn">4</span>)
<span class="sf">print</span>(<span class="sv">v1</span> + <span class="sv">v2</span>)  <span class="sc"># Vetor(3, 7)</span>`,
        quiz:{q:'Qual método dunder representa o objeto como string ao usar print()?',opts:['__string__','__print__','__repr__','__show__'],ans:2}
      }
    ]
  },
  {
    id:8, icon:'⚡', color:'linear-gradient(135deg,#a855f7,#3b82f6)',
    title:'Programação Avançada', level:'avancado', topics:4,
    tag:'Avançado', tagCls:'adv',
    desc:'Decorators, generators, context managers e expressões lambda.',
    topics_list:['Lambda e map/filter','Generators (yield)','Decoradores','Context Managers'],
    lessons:[
      {
        title:'Lambda, map e filter', xp:90,
        body:`<p>Funções lambda são funções anônimas de uma linha. <code>map()</code> aplica uma função a cada elemento. <code>filter()</code> filtra elementos por uma condição.</p>`,
        code:`<span class="sk"># Lambda</span>
<span class="sv">dobrar</span> = <span class="sk">lambda</span> <span class="sv">x</span>: <span class="sv">x</span> * <span class="sn">2</span>
<span class="sf">print</span>(<span class="sf">dobrar</span>(<span class="sn">5</span>))  <span class="sc"># 10</span>

<span class="sk"># map — aplica função a todos</span>
<span class="sv">nums</span> = [<span class="sn">1</span>, <span class="sn">2</span>, <span class="sn">3</span>, <span class="sn">4</span>, <span class="sn">5</span>]
<span class="sv">dobrados</span> = <span class="sf">list</span>(<span class="sf">map</span>(<span class="sk">lambda</span> <span class="sv">x</span>: <span class="sv">x</span>*<span class="sn">2</span>, <span class="sv">nums</span>))
<span class="sf">print</span>(<span class="sv">dobrados</span>)  <span class="sc"># [2,4,6,8,10]</span>

<span class="sk"># filter — filtra por condição</span>
<span class="sv">pares</span> = <span class="sf">list</span>(<span class="sf">filter</span>(<span class="sk">lambda</span> <span class="sv">x</span>: <span class="sv">x</span>%<span class="sn">2</span>==<span class="sn">0</span>, <span class="sv">nums</span>))
<span class="sf">print</span>(<span class="sv">pares</span>)     <span class="sc"># [2, 4]</span>

<span class="sk"># sorted com lambda</span>
<span class="sv">alunos</span> = [(<span class="ss">"Ana"</span>,<span class="sn">9</span>),(<span class="ss">"Bruno"</span>,<span class="sn">7</span>),(<span class="ss">"Carla"</span>,<span class="sn">10</span>)]
<span class="sv">por_nota</span> = <span class="sf">sorted</span>(<span class="sv">alunos</span>, <span class="sv">key</span>=<span class="sk">lambda</span> <span class="sv">x</span>: <span class="sv">x</span>[<span class="sn">1</span>], <span class="sv">reverse</span>=<span class="sk">True</span>)`,
        quiz:{q:'lambda x: x**2 equivale a qual função?',opts:['def f(x): x**2','def f(x): return x**2','def f(): return x**2','lambda: x**2'],ans:1}
      },
      {
        title:'Generators (yield)', xp:95,
        body:`<p>Generators produzem valores sob demanda, economizando memória. Em vez de criar uma lista inteira, geram um valor por vez com <code>yield</code>.</p>`,
        code:`<span class="sk">def</span> <span class="sf">fibonacci</span>(<span class="sv">n</span>):
    <span class="sc">"""Generator de Fibonacci."""</span>
    <span class="sv">a</span>, <span class="sv">b</span> = <span class="sn">0</span>, <span class="sn">1</span>
    <span class="sk">for</span> <span class="sv">_</span> <span class="sk">in</span> <span class="sf">range</span>(<span class="sv">n</span>):
        <span class="sk">yield</span> <span class="sv">a</span>
        <span class="sv">a</span>, <span class="sv">b</span> = <span class="sv">b</span>, <span class="sv">a</span> + <span class="sv">b</span>

<span class="sk">for</span> <span class="sv">num</span> <span class="sk">in</span> <span class="sf">fibonacci</span>(<span class="sn">10</span>):
    <span class="sf">print</span>(<span class="sv">num</span>, <span class="sv">end</span>=<span class="ss">" "</span>)
<span class="sc"># 0 1 1 2 3 5 8 13 21 34</span>

<span class="sk"># Generator expression (como list comp)</span>
<span class="sv">quadrados_gen</span> = (<span class="sv">x</span>**<span class="sn">2</span> <span class="sk">for</span> <span class="sv">x</span> <span class="sk">in</span> <span class="sf">range</span>(<span class="sn">1000000</span>))
<span class="sf">print</span>(<span class="sf">next</span>(<span class="sv">quadrados_gen</span>))  <span class="sc"># 0</span>`,
        quiz:{q:'Qual palavra-chave transforma uma função em generator?',opts:['return','produce','yield','generate'],ans:2}
      },
      {
        title:'Decoradores', xp:100,
        body:`<p>Decoradores são funções que "envolvem" outras funções, adicionando comportamento sem modificar o código original. Muito usados em frameworks como Flask e Django.</p>`,
        code:`<span class="sk">import</span> <span class="sf">time</span>

<span class="sk">def</span> <span class="sf">medir_tempo</span>(<span class="sv">func</span>):
    <span class="sc">"""Decorador que mede tempo de execução."""</span>
    <span class="sk">def</span> <span class="sf">wrapper</span>(*<span class="sv">args</span>, **<span class="sv">kwargs</span>):
        <span class="sv">inicio</span> = <span class="sf">time</span>.<span class="sf">time</span>()
        <span class="sv">resultado</span> = <span class="sf">func</span>(*<span class="sv">args</span>, **<span class="sv">kwargs</span>)
        <span class="sv">fim</span> = <span class="sf">time</span>.<span class="sf">time</span>()
        <span class="sf">print</span>(<span class="ss">f"{<span class="sv">func</span>.__name__}: {<span class="sv">fim</span>-<span class="sv">inicio</span>:.4f}s"</span>)
        <span class="sk">return</span> <span class="sv">resultado</span>
    <span class="sk">return</span> <span class="sv">wrapper</span>

<span class="so">@</span><span class="sf">medir_tempo</span>
<span class="sk">def</span> <span class="sf">calcular</span>():
    <span class="sk">return</span> <span class="sf">sum</span>(<span class="sf">range</span>(<span class="sn">1_000_000</span>))

<span class="sf">calcular</span>()`,
        quiz:{q:'Como aplicar um decorador "log" a uma função "enviar"?',opts:['log(enviar)','enviar.log()','@log antes de def enviar','import log enviar'],ans:2}
      },
      {
        title:'Type Hints e boas práticas', xp:85,
        body:`<p>Type hints documentam os tipos esperados nas funções. Não são obrigatórios, mas melhoram legibilidade e permitem que ferramentas detectem erros mais cedo.</p>`,
        code:`<span class="sk">from</span> <span class="sf">typing</span> <span class="sk">import</span> <span class="sf">List</span>, <span class="sf">Optional</span>, <span class="sf">Dict</span>

<span class="sk">def</span> <span class="sf">calcular_media</span>(<span class="sv">notas</span>: <span class="sf">List</span>[<span class="sf">float</span>]) -> <span class="sf">float</span>:
    <span class="sc">"""Calcula média de uma lista de notas."""</span>
    <span class="sk">if not</span> <span class="sv">notas</span>:
        <span class="sk">raise</span> <span class="sf">ValueError</span>(<span class="ss">"Lista vazia!"</span>)
    <span class="sk">return</span> <span class="sf">sum</span>(<span class="sv">notas</span>) / <span class="sf">len</span>(<span class="sv">notas</span>)

<span class="sk">def</span> <span class="sf">buscar_aluno</span>(<span class="sv">bd</span>: <span class="sf">Dict</span>, <span class="sv">nome</span>: <span class="sf">str</span>) -> <span class="sf">Optional</span>[<span class="sf">Dict</span>]:
    <span class="sk">return</span> <span class="sv">bd</span>.<span class="sf">get</span>(<span class="sv">nome</span>)

<span class="sc"># PEP 8: boas práticas</span>
<span class="sc"># ✅ nomes em snake_case</span>
<span class="sc"># ✅ constantes em MAIÚSCULAS</span>
<span class="sc"># ✅ classes em PascalCase</span>
<span class="sc"># ✅ docstrings em funções</span>`,
        quiz:{q:'O que -> float indica na definição de uma função?',opts:['Que recebe float','Tipo de retorno','Erro de sintaxe','Variável global'],ans:1}
      }
    ]
  },
  {
    id:9, icon:'🚀', color:'linear-gradient(135deg,#00cfff,#00e5a0)',
    title:'Projetos Práticos', level:'avancado', topics:5,
    tag:'Avançado', tagCls:'adv',
    desc:'Aplique tudo o que aprendeu em projetos reais: cadastro, jogo, automação e sistema escolar.',
    topics_list:['Calculadora OOP','Jogo da Adivinhação','Mini banco de dados','Automação com os','Sistema Escolar'],
    lessons:[
      {
        title:'Calculadora Completa (OOP)', xp:100,
        body:`<p>Vamos criar uma calculadora profissional usando POO, com histórico de operações e tratamento de erros.</p>`,
        code:`<span class="sk">class</span> <span class="sf">Calculadora</span>:
    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>):
        <span class="sk">self</span>.<span class="sv">historico</span> = []

    <span class="sk">def</span> <span class="sf">_registrar</span>(<span class="sk">self</span>, <span class="sv">expr</span>, <span class="sv">res</span>):
        <span class="sk">self</span>.<span class="sv">historico</span>.<span class="sf">append</span>(<span class="ss">f"{<span class="sv">expr</span>} = {<span class="sv">res</span>}"</span>)
        <span class="sk">return</span> <span class="sv">res</span>

    <span class="sk">def</span> <span class="sf">somar</span>(<span class="sk">self</span>, <span class="sv">a</span>, <span class="sv">b</span>):
        <span class="sk">return</span> <span class="sk">self</span>.<span class="sf">_registrar</span>(<span class="ss">f"{<span class="sv">a</span>}+{<span class="sv">b</span>}"</span>, <span class="sv">a</span>+<span class="sv">b</span>)

    <span class="sk">def</span> <span class="sf">dividir</span>(<span class="sk">self</span>, <span class="sv">a</span>, <span class="sv">b</span>):
        <span class="sk">if</span> <span class="sv">b</span> == <span class="sn">0</span>: <span class="sk">raise</span> <span class="sf">ZeroDivisionError</span>()
        <span class="sk">return</span> <span class="sk">self</span>.<span class="sf">_registrar</span>(<span class="ss">f"{<span class="sv">a</span>}/{<span class="sv">b</span>}"</span>, <span class="sv">a</span>/<span class="sv">b</span>)

    <span class="sk">def</span> <span class="sf">ver_historico</span>(<span class="sk">self</span>):
        <span class="sk">for</span> <span class="sv">op</span> <span class="sk">in</span> <span class="sk">self</span>.<span class="sv">historico</span>:
            <span class="sf">print</span>(<span class="sv">op</span>)`,
        quiz:{q:'Por que _registrar usa underscore no início?',opts:['É obrigatório','Indica método privado/interno','É mais rápido','Erro de estilo'],ans:1}
      },
      {
        title:'Jogo da Adivinhação', xp:110,
        body:`<p>Um jogo clássico para praticar lógica, loops e condicionais. Vamos adicionar dificuldades e pontuação!</p>`,
        code:`<span class="sk">import</span> <span class="sf">random</span>

<span class="sk">def</span> <span class="sf">jogar</span>(<span class="sv">dificuldade</span>=<span class="ss">"medio"</span>):
    <span class="sv">limites</span> = {<span class="ss">"facil"</span>: <span class="sn">50</span>, <span class="ss">"medio"</span>: <span class="sn">100</span>, <span class="ss">"dificil"</span>: <span class="sn">500</span>}
    <span class="sv">max_n</span> = <span class="sv">limites</span>.<span class="sf">get</span>(<span class="sv">dificuldade</span>, <span class="sn">100</span>)
    <span class="sv">secreto</span> = <span class="sf">random</span>.<span class="sf">randint</span>(<span class="sn">1</span>, <span class="sv">max_n</span>)
    <span class="sv">tentativas</span> = <span class="sn">0</span>

    <span class="sf">print</span>(<span class="ss">f"🎮 Adivinhe o número (1-{<span class="sv">max_n</span>})"</span>)
    <span class="sk">while</span> <span class="sk">True</span>:
        <span class="sk">try</span>:
            <span class="sv">chute</span> = <span class="sf">int</span>(<span class="sf">input</span>(<span class="ss">"Seu palpite: "</span>))
            <span class="sv">tentativas</span> += <span class="sn">1</span>
            <span class="sk">if</span>   <span class="sv">chute</span> < <span class="sv">secreto</span>: <span class="sf">print</span>(<span class="ss">"📉 Maior!"</span>)
            <span class="sk">elif</span> <span class="sv">chute</span> > <span class="sv">secreto</span>: <span class="sf">print</span>(<span class="ss">"📈 Menor!"</span>)
            <span class="sk">else</span>:
                <span class="sf">print</span>(<span class="ss">f"🏆 Acertou em {<span class="sv">tentativas</span>} tentativas!"</span>)
                <span class="sk">break</span>
        <span class="sk">except</span> <span class="sf">ValueError</span>:
            <span class="sf">print</span>(<span class="ss">"Digite um número válido!"</span>)

<span class="sf">jogar</span>(<span class="ss">"facil"</span>)`,
        quiz:{q:'Qual estrutura torna o jogo continuar até acertar?',opts:['for loop','if-else','while True com break','recursão'],ans:2}
      },
      {
        title:'Sistema Escolar Completo', xp:150,
        body:`<p>O projeto final une tudo: classes, dicionários, arquivos JSON, exceções e um menu interativo!</p>`,
        code:`<span class="sk">import</span> <span class="sf">json</span>

<span class="sk">class</span> <span class="sf">SistemaEscolar</span>:
    <span class="sk">def</span> <span class="sf">__init__</span>(<span class="sk">self</span>):
        <span class="sk">self</span>.<span class="sv">alunos</span>: <span class="sf">dict</span> = {}
        <span class="sk">self</span>.<span class="sf">_carregar</span>()

    <span class="sk">def</span> <span class="sf">cadastrar</span>(<span class="sk">self</span>, <span class="sv">nome</span>, <span class="sv">turma</span>):
        <span class="sk">self</span>.<span class="sv">alunos</span>[<span class="sv">nome</span>] = {<span class="ss">"turma"</span>: <span class="sv">turma</span>, <span class="ss">"notas"</span>: []}
        <span class="sk">self</span>.<span class="sf">_salvar</span>()
        <span class="sf">print</span>(<span class="ss">f"✅ {<span class="sv">nome</span>} cadastrado!"</span>)

    <span class="sk">def</span> <span class="sf">lancar_nota</span>(<span class="sk">self</span>, <span class="sv">nome</span>, <span class="sv">nota</span>):
        <span class="sk">if</span> <span class="sv">nome</span> <span class="sk">not in</span> <span class="sk">self</span>.<span class="sv">alunos</span>:
            <span class="sk">raise</span> <span class="sf">KeyError</span>(<span class="ss">f"{<span class="sv">nome</span>} não encontrado"</span>)
        <span class="sk">self</span>.<span class="sv">alunos</span>[<span class="sv">nome</span>][<span class="ss">"notas"</span>].<span class="sf">append</span>(<span class="sv">nota</span>)
        <span class="sk">self</span>.<span class="sf">_salvar</span>()

    <span class="sk">def</span> <span class="sf">relatorio</span>(<span class="sk">self</span>):
        <span class="sk">for</span> <span class="sv">nm</span>, <span class="sv">dados</span> <span class="sk">in</span> <span class="sk">self</span>.<span class="sv">alunos</span>.<span class="sf">items</span>():
            <span class="sv">notas</span> = <span class="sv">dados</span>[<span class="ss">"notas"</span>]
            <span class="sv">media</span> = <span class="sf">sum</span>(<span class="sv">notas</span>)/<span class="sf">len</span>(<span class="sv">notas</span>) <span class="sk">if</span> <span class="sv">notas</span> <span class="sk">else</span> <span class="sn">0</span>
            <span class="sv">st</span> = <span class="ss">"✅"</span> <span class="sk">if</span> <span class="sv">media</span>>=<span class="sn">7</span> <span class="sk">else</span> <span class="ss">"❌"</span>
            <span class="sf">print</span>(<span class="ss">f"{<span class="sv">st</span>} {<span class="sv">nm</span>}: {<span class="sv">media</span>:.1f}"</span>)

    <span class="sk">def</span> <span class="sf">_salvar</span>(<span class="sk">self</span>):
        <span class="sk">with</span> <span class="sf">open</span>(<span class="ss">"escola.json"</span>,<span class="ss">"w"</span>) <span class="sk">as</span> <span class="sv">f</span>:
            <span class="sf">json</span>.<span class="sf">dump</span>(<span class="sk">self</span>.<span class="sv">alunos</span>,<span class="sv">f</span>,<span class="sv">indent</span>=<span class="sn">2</span>)

    <span class="sk">def</span> <span class="sf">_carregar</span>(<span class="sk">self</span>):
        <span class="sk">try</span>:
            <span class="sk">with</span> <span class="sf">open</span>(<span class="ss">"escola.json"</span>) <span class="sk">as</span> <span class="sv">f</span>:
                <span class="sk">self</span>.<span class="sv">alunos</span> = <span class="sf">json</span>.<span class="sf">load</span>(<span class="sv">f</span>)
        <span class="sk">except</span> <span class="sf">FileNotFoundError</span>:
            <span class="sk">pass</span>`,
        quiz:{q:'Por que _salvar usa underscore?',opts:['Obrigatório em Python','Método interno não chamado diretamente','Mais rápido','Padrão do JSON'],ans:1}
      }
    ]
  }
];
/* ══════════════════════════════════════════════════════
   RUNTIME — navegação, renders, lógica, animações, etc.
   ══════════════════════════════════════════════════════ */

/* ──────────── UTILS ──────────── */
function $(id){ return document.getElementById(id); }
function showToast(msg, type='info'){
  const t=$('toast'); t.textContent=msg;
  t.className='toast t-'+type+' show';
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>t.className='toast',3200);
}
function showXpPopup(xp){
  const p=$('xp-popup'); p.textContent='+'+xp+' XP ⚡';
  p.classList.add('show');
  setTimeout(()=>p.classList.remove('show'),1600);
}
function saveState(){ localStorage.setItem('pa_state',JSON.stringify({
  xp:ST.xp, level:ST.level, streak:ST.streak,
  completedLessons:[...ST.completedLessons],
  completedDesafios:[...ST.completedDesafios],
  moduleProgress:ST.moduleProgress,
  lastCheckin:ST.lastCheckin
}));}
function loadState(){
  try{
    const s=JSON.parse(localStorage.getItem('pa_state')||'null');
    if(!s) return;
    ST.xp=s.xp||0; ST.level=s.level||1; ST.streak=s.streak||0;
    ST.completedLessons=new Set(s.completedLessons||[]);
    ST.completedDesafios=new Set(s.completedDesafios||[]);
    ST.moduleProgress=s.moduleProgress||{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0};
    ST.lastCheckin=s.lastCheckin||null;
  }catch(e){}
}
function gainXP(amount){
  ST.xp+=amount;
  showXpPopup(amount);
  while(ST.xp>=ST.level*XP_PER_LEVEL && ST.level<6){
    ST.level++;
    showToast('🎉 Subiu para Nível '+ST.level+': '+levelTitles[ST.level]+'!','xp');
  }
  updateProfile();
  saveState();
}
function updateProfile(){
  $('xp-cur').textContent=ST.xp;
  const cap=ST.level*XP_PER_LEVEL;
  $('xp-max').textContent=cap;
  $('xp-fill').style.width=(Math.min(ST.xp,cap)/cap*100)+'%';
  $('level-badge').textContent='Nível '+ST.level;
  $('level-title').textContent=levelTitles[ST.level]||'Mestre';
  $('streak-days').textContent=ST.streak;
}

/* ──────────── NAVEGAÇÃO ──────────── */
function navigateTo(section){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const page=$('page-'+section);
  if(page) page.classList.add('active');
  const navBtn=document.querySelector('.nav-item[data-section="'+section+'"]');
  if(navBtn) navBtn.classList.add('active');
  // Close sidebar on mobile
  $('sidebar').classList.remove('open');
  $('sidebar-overlay').classList.remove('show');
  $('hamburger').classList.remove('open');
  window.scrollTo(0,0);
}
window.navigateTo=navigateTo;

/* ──────────── BG CANVAS ──────────── */
function initCanvas(){
  const canvas=$('bg-canvas');
  const ctx=canvas.getContext('2d');
  let W,H,particles=[];
  function resize(){ W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  resize(); window.addEventListener('resize',resize);
  for(let i=0;i<55;i++) particles.push({
    x:Math.random()*1920, y:Math.random()*1080,
    r:Math.random()*1.5+.3,
    vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3,
    o:Math.random()*.4+.05
  });
  function draw(){
    ctx.clearRect(0,0,W,H);
    particles.forEach(p=>{
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(59,111,255,'+p.o+')'; ctx.fill();
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0) p.x=W; if(p.x>W) p.x=0;
      if(p.y<0) p.y=H; if(p.y>H) p.y=0;
    });
    // faint connecting lines
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){
          ctx.beginPath();
          ctx.moveTo(particles[i].x,particles[i].y);
          ctx.lineTo(particles[j].x,particles[j].y);
          ctx.strokeStyle='rgba(59,111,255,'+((.12*(1-d/120)))+')';
          ctx.lineWidth=.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ──────────── HERO CODE TYPEWRITER ──────────── */
function initHeroCode(){
  const lines=[
    {cls:'cm',txt:'# Python Academy — Bem-vindo!'},
    {cls:'ck',txt:'def '},
    {cls:'cf',txt:'calcular_media'},
    {cls:'',txt:'(notas):'},
    {cls:'cm',txt:'\n    # retorna a média da turma'},
    {cls:'',txt:'\n    return '},
    {cls:'cf',txt:'sum'},
    {cls:'',txt:'(notas) / '},
    {cls:'cf',txt:'len'},
    {cls:'',txt:'(notas)'},
    {cls:'',txt:'\n\n'},
    {cls:'sv',txt:'notas'},
    {cls:'',txt:' = ['},
    {cls:'cn',txt:'9.5'},
    {cls:'',txt:', '},
    {cls:'cn',txt:'8.0'},
    {cls:'',txt:', '},
    {cls:'cn',txt:'10.0'},
    {cls:'',txt:']\n'},
    {cls:'cf',txt:'print'},
    {cls:'',txt:'('},
    {cls:'cs',txt:'"Média:"'},
    {cls:'',txt:', '},
    {cls:'cf',txt:'calcular_media'},
    {cls:'',txt:'('},
    {cls:'sv',txt:'notas'},
    {cls:'',txt:'))'},
  ];
  const el=$('hero-code-body'); if(!el) return;
  let i=0, full='';
  function typeNext(){
    if(i>=lines.length){ el.innerHTML=full+'<span class="cc">█</span>'; return; }
    const l=lines[i++];
    const txt=l.txt.replace(/\n/g,'<br>');
    full+= l.cls ? '<span class="'+l.cls+'">'+txt+'</span>' : txt;
    el.innerHTML=full+'<span class="cc">█</span>';
    setTimeout(typeNext, 60+Math.random()*40);
  }
  setTimeout(typeNext,600);
}

/* ──────────── TRAIL MINI (home) ──────────── */
function renderTrailMini(){
  const el=$('trail-mini'); if(!el) return;
  let html='';
  MODULES.forEach((m,idx)=>{
    const done=ST.moduleProgress[m.id]===100;
    const active=!done && (idx===0 || ST.moduleProgress[MODULES[idx-1]?.id]>0);
    if(idx>0) html+=`<div class="tm-connector ${done?'done':''}"></div>`;
    html+=`<div class="tm-node" onclick="navigateTo('modulos')">
      <div class="tm-bubble ${done?'done':active?'active':''}">
        ${done?'✅':m.icon}
      </div>
      <div class="tm-label">${m.title.split(' ').slice(0,2).join(' ')}</div>
    </div>`;
  });
  el.innerHTML=html;
}

/* ──────────── PROGRESS CARDS (home) ──────────── */
function renderHomeProgress(){
  const el=$('home-progress'); if(!el) return;
  const levels=[
    {name:'Básico', mods:MODULES.filter(m=>m.level==='basico')},
    {name:'Intermediário', mods:MODULES.filter(m=>m.level==='intermediario')},
    {name:'Avançado', mods:MODULES.filter(m=>m.level==='avancado')}
  ];
  let html='';
  levels.forEach(lv=>{
    const total=lv.mods.reduce((s,m)=>s+m.lessons.length,0);
    const done=lv.mods.reduce((s,m)=>s+m.lessons.filter((_,li)=>ST.completedLessons.has(m.id+'-'+li)).length,0);
    const pct=total?Math.round(done/total*100):0;
    html+=`<div class="pc-item">
      <div class="pc-top"><span class="pc-name">${lv.name}</span><span class="pc-pct">${pct}%</span></div>
      <div class="pc-bar"><div class="pc-fill" style="width:${pct}%"></div></div>
    </div>`;
  });
  el.innerHTML=html;
}

/* ──────────── TRAIL FULL ──────────── */
function renderTrail(){
  const el=$('trail-container'); if(!el) return;
  const groups=[
    {id:'basico',  label:'Básico',        cls:'lv-basic', mods:MODULES.filter(m=>m.level==='basico')},
    {id:'inter',   label:'Intermediário', cls:'lv-inter', mods:MODULES.filter(m=>m.level==='intermediario')},
    {id:'avancado',label:'Avançado',      cls:'lv-adv',   mods:MODULES.filter(m=>m.level==='avancado')}
  ];
  let html='';
  groups.forEach(g=>{
    html+=`<div class="trail-level-group">
      <div class="tlg-header ${g.cls}">
        <span class="tlg-dot"></span>
        <span class="tlg-title">${g.label}</span>
        <span class="tlg-sub">${g.mods.length} módulos</span>
      </div>
      <div class="trail-nodes">`;
    g.mods.forEach((m,i)=>{
      const done=ST.moduleProgress[m.id]===100;
      const active=!done;
      const side=i%2===0?'':'right';
      html+=`<div class="tn-row ${side}">
        <div class="tn-card ${done?'done':''}" onclick="openModule(${m.id})">
          <div class="tn-card-icon">${m.icon}</div>
          <div class="tn-card-title">${m.title}</div>
          <div class="tn-card-sub">${m.lessons.length} aulas · ${m.topics} tópicos</div>
          <span class="tn-card-tag ${done?'tag-done':active?'tag-active':'tag-locked'}">${done?'✅ Concluído':active?'▶ Disponível':'🔒 Bloqueado'}</span>
        </div>
        <div class="tn-spacer"></div>
        <div class="tn-dot-wrap"><div class="tn-dot ${done?'done':active?'active':''}">${m.icon}</div></div>
      </div>`;
    });
    html+='</div></div>';
  });
  el.innerHTML=html;
}

/* ──────────── MODULES GRID ──────────── */
function renderModules(filter='all'){
  const el=$('modules-grid'); if(!el) return;
  let html='';
  MODULES.forEach(m=>{
    const hide=(filter!=='all' && m.level!==filter)?'hidden':'';
    const lessonsDone=m.lessons.filter((_,li)=>ST.completedLessons.has(m.id+'-'+li)).length;
    const pct=Math.round(lessonsDone/m.lessons.length*100);
    ST.moduleProgress[m.id]=pct;
    const levelCls=m.tagCls==='basic'?'basic':m.tagCls==='inter'?'inter':'adv';
    html+=`<div class="mod-card ${hide}" data-level="${m.level}" onclick="openModule(${m.id})">
      <div class="mc-top">
        <div class="mc-icon-box" style="background:${m.color}">${m.icon}</div>
        <div class="mc-meta">
          <div class="mc-num">Módulo ${m.id}</div>
          <div class="mc-title">${m.title}</div>
          <span class="mc-level ${levelCls}">${m.tag}</span>
        </div>
      </div>
      <div class="mc-body">
        <p style="font-size:.83rem;color:var(--text2);margin-bottom:10px">${m.desc}</p>
        <ul class="mc-topics">${m.topics_list.map(t=>`<li>${t}</li>`).join('')}</ul>
        <div class="mc-prog-wrap"><div class="mc-prog-fill" style="width:${pct}%"></div></div>
        <div class="mc-prog-lbl">${lessonsDone}/${m.lessons.length} aulas concluídas</div>
      </div>
      <div class="mc-foot">
        <span class="mc-count">⚡ ${m.lessons.reduce((s,l)=>s+l.xp,0)} XP total</span>
        <button class="btn-open" onclick="event.stopPropagation();openModule(${m.id})">Abrir →</button>
      </div>
    </div>`;
  });
  el.innerHTML=html;
}

/* ──────────── OPEN MODULE / AULA ──────────── */
function openModule(id){
  const m=MODULES.find(x=>x.id===id); if(!m) return;
  const wrap=$('aula-wrap'); if(!wrap) return;
  const lessonsDone=m.lessons.filter((_,li)=>ST.completedLessons.has(m.id+'-'+li)).length;
  const pct=Math.round(lessonsDone/m.lessons.length*100);
  let html=`
  <div class="aula-nav">
    <button class="btn-back-aula" onclick="navigateTo('modulos')">← Voltar</button>
    <span style="font-size:.8rem;color:var(--text3);font-family:var(--font-mono)">${lessonsDone}/${m.lessons.length} aulas</span>
  </div>
  <div class="aula-header-card">
    <div class="ahc-icon" style="font-size:3rem">${m.icon}</div>
    <div class="ahc-text">
      <h1>${m.title}</h1>
      <p>${m.desc}</p>
    </div>
  </div>
  <div class="lessons-wrap">`;
  m.lessons.forEach((l,li)=>{
    const key=m.id+'-'+li;
    const done=ST.completedLessons.has(key);
    html+=`<div class="lesson-item ${done?'done':''}" id="lesson-${key}">
      <div class="lesson-head" onclick="toggleLesson('${key}',this)">
        <div class="ln-num">${li+1}</div>
        <div class="ln-title">${l.title}</div>
        <span class="ln-xp">+${l.xp} XP</span>
        <div class="ln-check">${done?'✓':''}</div>
        <span class="ln-arrow">›</span>
      </div>
      <div class="lesson-body">
        ${l.body}
        <div class="code-block">
          <div class="cb-bar"><span></span><span></span><span></span><span class="cb-lang">python</span><button class="cb-copy" onclick="copyCode(this)">Copiar</button></div>
          <div class="cb-code">${l.code}</div>
        </div>
        ${l.quiz ? renderQuiz(l.quiz, key) : ''}
        <button class="btn-done" ${done?'disabled':''} onclick="markDone('${key}',${l.xp})">${done?'✅ Concluída':'Marcar como concluída'}</button>
      </div>
    </div>`;
  });
  html+='</div>';
  wrap.innerHTML=html;
  navigateTo('aula');
}
window.openModule=openModule;

function renderQuiz(quiz, key){
  return `<div class="lesson-quiz" id="quiz-${key}">
    <div class="lq-q">🧠 ${quiz.q}</div>
    <div class="lq-opts">
      ${quiz.opts.map((o,i)=>`<button class="lq-opt" onclick="checkQuiz('${key}',${i},${quiz.ans},this)">${o}</button>`).join('')}
    </div>
    <div class="lq-feedback" id="lqf-${key}"></div>
  </div>`;
}

function checkQuiz(key, chosen, ans, btn){
  const container=btn.closest('.lq-opts');
  container.querySelectorAll('.lq-opt').forEach(b=>b.disabled=true);
  const fb=document.getElementById('lqf-'+key);
  if(chosen===ans){
    btn.classList.add('correct');
    fb.className='lq-feedback ok'; fb.textContent='✅ Correto!';
    gainXP(10);
  } else {
    btn.classList.add('wrong');
    container.querySelectorAll('.lq-opt')[ans].classList.add('correct');
    fb.className='lq-feedback err'; fb.textContent='❌ Incorreto. A resposta correta está destacada.';
  }
}
window.checkQuiz=checkQuiz;

function toggleLesson(key, head){
  const item=head.closest('.lesson-item');
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.lesson-item.open').forEach(i=>i.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
}
window.toggleLesson=toggleLesson;

function markDone(key, xp){
  if(ST.completedLessons.has(key)) return;
  ST.completedLessons.add(key);
  const item=document.getElementById('lesson-'+key);
  if(item){
    item.classList.add('done');
    const btn=item.querySelector('.btn-done');
    if(btn){ btn.textContent='✅ Concluída'; btn.disabled=true; }
    const check=item.querySelector('.ln-check');
    if(check) check.textContent='✓';
  }
  gainXP(xp);
  showToast('Aula concluída! +'+xp+' XP','xp');
  saveState();
}
window.markDone=markDone;

function copyCode(btn){
  const code=btn.closest('.code-block').querySelector('.cb-code');
  navigator.clipboard.writeText(code.innerText).then(()=>{
    btn.textContent='Copiado!'; setTimeout(()=>btn.textContent='Copiar',2000);
  });
}
window.copyCode=copyCode;

/* ──────────── VIDEOAULAS ──────────── */
const VIDEOS=[
  {module:1, title:'Introdução ao Python — Do Zero', channel:'Curso em Vídeo', icon:'🎬', id:'S9uPeFC9BOg'},
  {module:1, title:'Variáveis e Tipos de Dados', channel:'Hashtag Programação', icon:'🎬', id:'rfscVS0vtbw'},
  {module:2, title:'Condicionais if/else em Python', channel:'Curso em Vídeo', icon:'🎬', id:'W6iMmNOJmxg'},
  {module:2, title:'Loops for e while no Python', channel:'Hashtag Programação', icon:'🎬', id:'QOzFLFX6_is'},
  {module:3, title:'Funções em Python — Guia Completo', channel:'Programação Dinâmica', icon:'🎬', id:'nIQG7QA0e9U'},
  {module:4, title:'Dicionários Python — Tutorial', channel:'Curso em Vídeo', icon:'🎬', id:'Z1HkpE1_evs'},
  {module:5, title:'Arquivos e JSON com Python', channel:'Hashtag Programação', icon:'🎬', id:'FeNEzFB5h3c'},
  {module:7, title:'POO em Python — Classes e Objetos', channel:'Programação Dinâmica', icon:'🎬', id:'qFaYhk-Bk2k'},
  {module:8, title:'Funções Avançadas: Lambda, Map e Filter', channel:'Tech With Tim', icon:'🎬', id:'hYzwCsKGRrg'},
];
function renderVideos(filter='all'){
  const el=$('videos-grid'); if(!el) return;
  let html='';
  VIDEOS.forEach((v,i)=>{
    const m=MODULES.find(x=>x.id===v.module);
    const hide=(filter!=='all' && String(v.module)!==String(filter))?'hidden':'';
    html+=`<div class="vid-card ${hide}" data-module="${v.module}">
      <div class="vid-thumb" style="cursor:pointer" onclick="window.open('https://youtube.com/watch?v=${v.id}','_blank')">
        <div class="vid-thumb-inner">
          <div class="vt-icon">${v.icon}</div>
          <div class="vt-ch">${v.channel}</div>
        </div>
        <div class="vid-play-overlay"><div class="vpo-btn">▶</div></div>
      </div>
      <div class="vid-info">
        <div class="vid-module-tag">${m?m.title:'Geral'}</div>
        <div class="vid-title">${v.title}</div>
        <div class="vid-ch">${v.channel}</div>
      </div>
    </div>`;
  });
  el.innerHTML=html;
}
function renderVideoFilters(){
  const el=$('vf-bar'); if(!el) return;
  let html=`<button class="vf-btn active" data-vf="all" onclick="filterVideos('all',this)">Todos</button>`;
  const seen=new Set();
  VIDEOS.forEach(v=>{
    if(seen.has(v.module)) return; seen.add(v.module);
    const m=MODULES.find(x=>x.id===v.module);
    if(m) html+=`<button class="vf-btn" data-vf="${v.module}" onclick="filterVideos(${v.module},this)">${m.icon} ${m.title.split(' ')[0]}</button>`;
  });
  el.innerHTML=html;
}
function filterVideos(val,btn){
  document.querySelectorAll('.vf-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.vid-card').forEach(c=>{
    c.classList.toggle('hidden', val!=='all' && String(c.dataset.module)!==String(val));
  });
}
window.filterVideos=filterVideos;

/* ──────────── EXERCÍCIOS ──────────── */
const EXERCISES=[
  {id:'e1',title:'Calculadora Simples',level:'basico',module:1,desc:'Crie um programa que leia dois números e exiba soma, subtração, multiplicação e divisão.',hint:'Use input() e float() para ler os números.',answer:'float',xp:30},
  {id:'e2',title:'Verificador de Número Par/Ímpar',level:'basico',module:1,desc:'Leia um número inteiro e informe se é par ou ímpar.',hint:'Use o operador % (módulo). Se n%2==0 é par.',answer:'par',xp:25},
  {id:'e3',title:'Tabuada Completa',level:'basico',module:2,desc:'Imprima a tabuada de um número informado pelo usuário (de 1 a 10).',hint:'Use um for loop com range(1,11).',answer:'range',xp:35},
  {id:'e4',title:'Número Primo',level:'basico',module:2,desc:'Verifique se um número é primo.',hint:'Um número é primo se não for divisível por nenhum número de 2 até raiz(n).',answer:'primo',xp:45},
  {id:'e5',title:'Maior de Três',level:'basico',module:1,desc:'Leia 3 números e informe qual é o maior.',hint:'Use if/elif/else ou a função max().',answer:'max',xp:30},
  {id:'e6',title:'Fatorial com Recursão',level:'intermediario',module:3,desc:'Crie uma função recursiva que calcule o fatorial de um número.',hint:'fatorial(n) = n * fatorial(n-1). Caso base: fatorial(0) = 1.',answer:'recursao',xp:55},
  {id:'e7',title:'Agenda de Contatos',level:'intermediario',module:4,desc:'Use um dicionário para criar uma agenda. Permita adicionar, buscar e remover contatos.',hint:'Use dict como estrutura principal. Chave = nome, valor = telefone.',answer:'dict',xp:60},
  {id:'e8',title:'Leitura de Arquivo',level:'intermediario',module:5,desc:'Leia um arquivo .txt e conte quantas linhas, palavras e caracteres ele possui.',hint:'Use open() com "r". split() divide em palavras.',answer:'open',xp:65},
  {id:'e9',title:'Classe Banco',level:'avancado',module:7,desc:'Crie uma classe ContaBancaria com saldo, depositar, sacar e extrato.',hint:'Use __init__ para o saldo. Adicione validações nas operações.',answer:'class',xp:80},
  {id:'e10',title:'Decorador de Log',level:'avancado',module:8,desc:'Crie um decorador @log que imprima o nome da função chamada e seus argumentos.',hint:'Use *args, **kwargs no wrapper para capturar qualquer argumento.',answer:'decorator',xp:90},
];
function renderExercises(filter='all'){
  const el=$('ex-list'); if(!el) return;
  let html='';
  EXERCISES.forEach(ex=>{
    const hide=(filter!=='all' && ex.level!==filter)?'hidden':'';
    const lvCls=ex.level==='basico'?'basic':ex.level==='intermediario'?'inter':'adv';
    const lvLabel=ex.level==='basico'?'Básico':ex.level==='intermediario'?'Intermediário':'Avançado';
    html+=`<div class="ex-card ${hide}" id="exc-${ex.id}" data-level="${ex.level}">
      <div class="ec-top">
        <div class="ec-title">${ex.title}</div>
        <span class="ec-lvl ${lvCls}">${lvLabel}</span>
      </div>
      <p class="ec-desc">${ex.desc}</p>
      <div class="ec-hint" id="hint-${ex.id}">💡 Dica: ${ex.hint}</div>
      <div class="ec-answer-wrap">
        <input class="ec-answer-input" id="ans-${ex.id}" placeholder="Palavra-chave da solução..." />
        <button class="btn-check" onclick="checkExercise('${ex.id}','${ex.answer}',${ex.xp})">Verificar</button>
      </div>
      <div class="ec-actions">
        <button class="btn-hint" onclick="toggleHint('${ex.id}')">💡 Dica</button>
        <span class="ec-xp">+${ex.xp} XP</span>
      </div>
      <div class="ec-feedback" id="exf-${ex.id}"></div>
    </div>`;
  });
  el.innerHTML=html;
}
function renderExFilters(){
  const el=$('ex-filters'); if(!el) return;
  el.innerHTML=`
    <button class="ex-flt active" onclick="filterExercises('all',this)">Todos</button>
    <button class="ex-flt" onclick="filterExercises('basico',this)">🟢 Básico</button>
    <button class="ex-flt" onclick="filterExercises('intermediario',this)">🟡 Intermediário</button>
    <button class="ex-flt" onclick="filterExercises('avancado',this)">🔴 Avançado</button>`;
}
function filterExercises(val,btn){
  document.querySelectorAll('.ex-flt').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.ex-card').forEach(c=>{
    c.classList.toggle('hidden', val!=='all' && c.dataset.level!==val);
  });
}
window.filterExercises=filterExercises;
function toggleHint(id){ document.getElementById('hint-'+id).classList.toggle('show'); }
window.toggleHint=toggleHint;
function checkExercise(id, answer, xp){
  const inp=document.getElementById('ans-'+id);
  const fb=document.getElementById('exf-'+id);
  const val=inp.value.trim().toLowerCase();
  if(val.includes(answer.toLowerCase())){
    inp.className='ec-answer-input correct';
    fb.className='ec-feedback ok'; fb.textContent='✅ Conceito correto! Ótimo trabalho.';
    gainXP(xp); showToast('+'+xp+' XP ganhos!','xp');
  } else {
    inp.className='ec-answer-input wrong';
    fb.className='ec-feedback err'; fb.textContent='❌ Revise sua resposta. Use a dica se precisar.';
  }
}
window.checkExercise=checkExercise;

/* ──────────── SIMULADOS ──────────── */
const QUIZZES=[
  {
    icon:'🟢', title:'Quiz Básico', desc:'Sintaxe, variáveis e estruturas de controle.',
    time:600, questions:[
      {q:'Qual função exibe texto na tela?',opts:['show()','print()','write()','display()'],ans:1},
      {q:'Como criar uma lista vazia em Python?',opts:['list={}','list=[]','list=()','list=new[]'],ans:1},
      {q:'O que é indentação em Python?',opts:['Opcional','Comentário','Define blocos de código','Erro de sintaxe'],ans:2},
      {q:'Qual operador calcula potência?',opts:['^','**','^^','pow'],ans:1},
      {q:'range(0,5) gera:',opts:['0,1,2,3,4,5','1,2,3,4,5','0,1,2,3,4','0,1,2,3,4,5,6'],ans:2},
      {q:'input() sempre retorna:',opts:['int','float','str','bool'],ans:2},
      {q:'Qual método adiciona item ao final da lista?',opts:['add()','insert()','append()','push()'],ans:2},
      {q:'Como comentar uma linha em Python?',opts:['//','--','#','/*'],ans:2},
    ]
  },
  {
    icon:'🟡', title:'Quiz Intermediário', desc:'Dicionários, arquivos, funções avançadas.',
    time:720, questions:[
      {q:'dict.get("chave", "padrão") retorna o quê se a chave não existir?',opts:['None','Error','Padrão','0'],ans:2},
      {q:'Qual modo abre arquivo para acrescentar conteúdo?',opts:['"r"','"w"','"a"','"x"'],ans:2},
      {q:'O que faz json.dumps()?',opts:['Lê JSON','Converte dict para string JSON','Salva em arquivo','Carrega JSON'],ans:1},
      {q:'Lambda x: x*2 é equivalente a:',opts:['def f(): return x*2','def f(x): return x*2','def(x): x*2','x => x*2'],ans:1},
      {q:'Sets permitem duplicatas?',opts:['Sim','Não','Apenas inteiros','Depende'],ans:1},
      {q:'O bloco finally é executado:',opts:['Só se houver erro','Só se não houver','Sempre','Nunca'],ans:2},
      {q:'Como importar só a função "soma" do módulo "calc"?',opts:['import soma from calc','from calc import soma','import calc.soma','require calc.soma'],ans:1},
    ]
  },
  {
    icon:'🔴', title:'Quiz Avançado', desc:'POO, generators, decoradores e projetos.',
    time:900, questions:[
      {q:'Qual método é chamado ao criar um objeto?',opts:['__start__','__new__','__init__','__create__'],ans:2},
      {q:'super() chama:',opts:['O próprio método','Método da classe pai','Um módulo externo','Nenhum método'],ans:1},
      {q:'__ (dois underscores) num atributo indica:',opts:['Público','Protegido','Privado','Estático'],ans:2},
      {q:'yield transforma uma função em:',opts:['Decorador','Classe','Generator','Lambda'],ans:2},
      {q:'@decorator antes de def significa:',opts:['Comentário','Aplicar decorador à função','Criar classe','Importar módulo'],ans:1},
      {q:'-> float numa função indica:',opts:['Parâmetro float','Tipo de retorno','Comentário','Erro'],ans:1},
      {q:'List comprehension [x**2 for x in range(3)] retorna:',opts:['[0,1,2]','[1,4,9]','[0,1,4]','[0,1,2,3]'],ans:2},
      {q:'Encapsulamento em POO serve para:',opts:['Herdar classes','Esconder detalhes internos','Polimorfismo','Criar objetos'],ans:1},
    ]
  }
];
let activeQuiz=null, quizTimerInterval=null;
function renderSimLobby(){
  const el=$('sim-lobby'); if(!el) return;
  let html=`<div class="sim-lobby-grid">`;
  QUIZZES.forEach((q,i)=>{
    html+=`<div class="sim-lob-card">
      <div class="slc-icon">${q.icon}</div>
      <div class="slc-title">${q.title}</div>
      <div class="slc-desc">${q.desc}</div>
      <div class="slc-meta">
        <span>📝 ${q.questions.length} questões</span>
        <span>⏱ ${Math.floor(q.time/60)}min</span>
      </div>
      <button class="btn-start-sim" onclick="startQuiz(${i})">Iniciar →</button>
    </div>`;
  });
  html+='</div>';
  el.innerHTML=html;
}
function startQuiz(idx){
  activeQuiz={quiz:QUIZZES[idx], answers:new Array(QUIZZES[idx].questions.length).fill(-1), time:QUIZZES[idx].time, started:Date.now()};
  $('sim-lobby').style.display='none';
  $('sim-active').style.display='block';
  renderActiveQuiz();
}
window.startQuiz=startQuiz;
function renderActiveQuiz(){
  const {quiz,answers,time}=activeQuiz;
  let remaining=time;
  if(quizTimerInterval) clearInterval(quizTimerInterval);
  const el=$('sim-active');
  let html=`<div class="sim-active-wrap">
    <div class="sim-top-bar">
      <div class="sim-title-text">${quiz.title}</div>
      <div class="sim-clock" id="sim-clock">${formatTime(remaining)}</div>
      <div class="sim-prog-pill" id="sim-prog">0/${quiz.questions.length} respondidas</div>
    </div>
    <div class="quiz-q-list">`;
  quiz.questions.forEach((q,i)=>{
    html+=`<div class="qq-item">
      <div class="qq-num">Questão ${i+1}</div>
      <div class="qq-text">${q.q}</div>
      <div class="qq-opts">
        ${q.opts.map((o,j)=>`<button class="qq-opt" data-qi="${i}" data-oi="${j}" onclick="selectOpt(${i},${j},this)">${o}</button>`).join('')}
      </div>
    </div>`;
  });
  html+=`</div><button class="btn-finish-sim" onclick="finishQuiz()">Finalizar Simulado</button></div>`;
  el.innerHTML=html;
  quizTimerInterval=setInterval(()=>{
    remaining--;
    const clk=$('sim-clock');
    if(clk) clk.textContent=formatTime(remaining);
    if(remaining<=0){ clearInterval(quizTimerInterval); finishQuiz(); }
  },1000);
}
function formatTime(s){ return Math.floor(s/60)+':'+(s%60<10?'0':'')+(s%60); }
function selectOpt(qi,oi,btn){
  activeQuiz.answers[qi]=oi;
  btn.closest('.qq-opts').querySelectorAll('.qq-opt').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  const answered=activeQuiz.answers.filter(a=>a!==-1).length;
  const prog=$('sim-prog');
  if(prog) prog.textContent=answered+'/'+activeQuiz.quiz.questions.length+' respondidas';
}
window.selectOpt=selectOpt;
function finishQuiz(){
  if(quizTimerInterval) clearInterval(quizTimerInterval);
  const {quiz,answers}=activeQuiz;
  let correct=0;
  quiz.questions.forEach((q,i)=>{ if(answers[i]===q.ans) correct++; });
  const pct=Math.round(correct/quiz.questions.length*100);
  const xpEarned=correct*15;
  gainXP(xpEarned);
  const stars=pct>=80?'⭐⭐⭐':pct>=50?'⭐⭐':'⭐';
  $('sim-active').innerHTML=`<div class="sim-result">
    <div class="sr-stars">${stars}</div>
    <div class="sr-num">${pct}%</div>
    <div class="sr-msg">${correct} de ${quiz.questions.length} questões corretas · +${xpEarned} XP</div>
    <div style="margin-top:10px;margin-bottom:24px">
      <button class="btn-retry-sim" onclick="startQuiz(${QUIZZES.indexOf(quiz)})">Refazer</button>
      <button class="btn-back-lobby" onclick="backToLobby()">Outros Simulados</button>
    </div>
  </div>`;
}
window.finishQuiz=finishQuiz;
function backToLobby(){
  $('sim-active').style.display='none';
  $('sim-lobby').style.display='block';
  activeQuiz=null;
}
window.backToLobby=backToLobby;

/* ──────────── DESAFIOS ──────────── */
const DESAFIOS=[
  {id:'d1',icon:'🔢',title:'FizzBuzz',desc:'Imprima 1-100. Para múltiplos de 3 "Fizz", de 5 "Buzz", de ambos "FizzBuzz".',diff:1,xp:60},
  {id:'d2',icon:'🔄',title:'Palíndromo',desc:'Verifique se uma string é igual ao seu inverso (ex: "arara", "ana").',diff:1,xp:65},
  {id:'d3',icon:'🔢',title:'Sequência de Fibonacci',desc:'Gere os N primeiros termos da série de Fibonacci.',diff:2,xp:75},
  {id:'d4',icon:'📊',title:'Ordenação Manual',desc:'Implemente o algoritmo Bubble Sort sem usar sorted().',diff:2,xp:85},
  {id:'d5',icon:'🔐',title:'Cifra de César',desc:'Criptografe e descriptografe mensagens usando deslocamento de letras.',diff:2,xp:90},
  {id:'d6',icon:'🌳',title:'Árvore de Números',desc:'Imprima uma árvore de asteriscos cujo tamanho o usuário define.',diff:1,xp:55},
  {id:'d7',icon:'📱',title:'Validador de CPF',desc:'Valide um CPF usando o algoritmo oficial de dígitos verificadores.',diff:3,xp:120},
  {id:'d8',icon:'🧮',title:'Calculadora RPN',desc:'Implemente uma calculadora Reverse Polish Notation usando pilha.',diff:3,xp:130},
];
function renderDesafios(){
  const el=$('desafios-grid'); if(!el) return;
  let html='';
  DESAFIOS.forEach(d=>{
    const done=ST.completedDesafios.has(d.id);
    const dots=[1,2,3].map(n=>`<div class="dd-dot ${n<=d.diff?'on':''}"></div>`).join('');
    html+=`<div class="dch-card ${done?'completed':''}">
      <div class="dch-top">
        <span class="dch-icon">${d.icon}</span>
        <span class="dch-xp">+${d.xp} XP</span>
      </div>
      <div class="dch-title">${d.title}</div>
      <div class="dch-desc">${d.desc}</div>
      <div class="dch-diff">${dots}</div>
      <button class="btn-dch ${done?'done-btn':''}" onclick="completeDesafio('${d.id}',${d.xp})">
        ${done?'✅ Concluído':'Marcar como feito'}
      </button>
    </div>`;
  });
  el.innerHTML=html;
}
function completeDesafio(id,xp){
  if(ST.completedDesafios.has(id)) return;
  ST.completedDesafios.add(id);
  gainXP(xp); showToast('Desafio concluído! +'+xp+' XP 🏆','xp');
  renderDesafios(); saveState();
}
window.completeDesafio=completeDesafio;

/* ──────────── RANKING ──────────── */
const RANKING_DATA=[
  {av:'👩‍💻',name:'Ana Clara',xp:2850,level:5},
  {av:'🧑‍💻',name:'Bruno Lima',xp:2400,level:4},
  {av:'👨‍🎓',name:'Carlos Mendes',xp:1980,level:4},
  {av:'👩‍🎓',name:'Diana Costa',xp:1650,level:3},
  {av:'🧑‍🎓',name:'Eduardo Neto',xp:1320,level:3},
  {av:'👩‍💼',name:'Fernanda Alves',xp:980,level:2},
  {av:'👨‍💼',name:'Gabriel Torres',xp:760,level:2},
];
function renderRanking(){
  const el=$('ranking-wrap'); if(!el) return;
  const top3=RANKING_DATA.slice(0,3);
  const rest=RANKING_DATA.slice(3);
  const pord=[top3[1],top3[0],top3[2]];
  const pclass=['p2','p1','p3'];
  const medals=['🥈','🥇','🥉'];
  let html=`<div class="podium-wrap">`;
  pord.forEach((p,i)=>{
    html+=`<div class="pod-item ${pclass[i]}">
      <div class="pod-pos">${medals[i]}</div>
      <div class="pod-av">${p.av}</div>
      <div class="pod-nm">${p.name}</div>
      <div class="pod-xp">${p.xp} XP</div>
    </div>`;
  });
  html+='</div><div class="rank-table">';
  rest.forEach((p,i)=>{
    html+=`<div class="rank-row">
      <div class="rr-pos">${i+4}</div>
      <div class="rr-av">${p.av}</div>
      <div class="rr-nm">${p.name}</div>
      <div class="rr-lv">Nv.${p.level}</div>
      <div class="rr-xp">${p.xp} XP</div>
    </div>`;
  });
  html+='</div>';
  el.innerHTML=html;
}

/* ──────────── DOWNLOADS ──────────── */
const DOWNLOADS=[
  {icon:'📄',title:'Apostila Python Básico',desc:'Resumo completo de sintaxe, variáveis, listas e controle de fluxo.',meta:'PDF · 28 páginas'},
  {icon:'📋',title:'Cheat Sheet Python',desc:'Referência rápida com os principais comandos, métodos e funções.',meta:'PDF · 4 páginas'},
  {icon:'📊',title:'Guia de POO em Python',desc:'Teoria e exemplos práticos de classes, herança e polimorfismo.',meta:'PDF · 20 páginas'},
  {icon:'💾',title:'Projetos — Código-Fonte',desc:'Todos os projetos práticos do curso prontos para download.',meta:'ZIP · 9 arquivos .py'},
  {icon:'🗺️',title:'Mapa Mental do Curso',desc:'Visão geral de todos os tópicos organizados em mapa mental.',meta:'PNG · Alta resolução'},
  {icon:'📝',title:'Lista de Exercícios Extra',desc:'60 exercícios adicionais com gabarito para praticar off-line.',meta:'PDF · 35 páginas'},
];
function renderDownloads(){
  const el=$('downloads-grid'); if(!el) return;
  el.innerHTML=DOWNLOADS.map(d=>`
    <div class="dl-card">
      <div class="dl-icon">${d.icon}</div>
      <div class="dl-title">${d.title}</div>
      <div class="dl-desc">${d.desc}</div>
      <div class="dl-meta">${d.meta}</div>
      <button class="btn-dl" onclick="showToast('Download em breve!','info')">⬇ Download</button>
    </div>`).join('');
}

/* ──────────── DICAS ──────────── */
const DICAS=[
  {icon:'⏱️',title:'Pomodoro para Código',color:'c-blue',text:'Estude 25 minutos focado, depois descanse 5. Após 4 ciclos, pause 15 min. Seu cérebro aprende melhor com pausas regulares.'},
  {icon:'✍️',title:'Escreva à Mão',color:'c-green',text:'Copiar código à mão (não Ctrl+C) força seu cérebro a processar cada caractere. Aumenta a retenção em até 40%.'},
  {icon:'🧩',title:'Quebre em Partes',color:'c-purple',text:'Quando um código parece complexo, divida em funções menores. Resolva parte por parte. "Clean code" é mais fácil de debugar.'},
  {icon:'💬',title:'Explique em Voz Alta',color:'c-cyan',text:'Explique o código como se estivesse ensinando alguém. A "Técnica Feynman" revela lacunas no seu entendimento rapidamente.'},
  {icon:'🐛',title:'Abrace os Erros',color:'c-yellow',text:'Cada erro é uma aula gratuita. Antes de buscar a resposta, tente entender a mensagem de erro. O Python é muito descritivo.'},
  {icon:'🔄',title:'Pratique Todo Dia',color:'c-red',text:'15 minutos por dia valem mais que 3 horas no final de semana. Consistência é a chave. Use o streak para manter o ritmo.'},
];
function renderDicas(){
  const el=$('dicas-grid'); if(!el) return;
  el.innerHTML=DICAS.map(d=>`
    <div class="dica-card ${d.color}">
      <div class="dca-icon">${d.icon}</div>
      <div class="dca-title">${d.title}</div>
      <div class="dca-text">${d.text}</div>
    </div>`).join('');
}

/* ──────────── CHECKIN / STREAK ──────────── */
function initCheckin(){
  const btn=$('check-in-btn'); if(!btn) return;
  btn.addEventListener('click',()=>{
    const today=new Date().toDateString();
    if(ST.lastCheckin===today){ showToast('Já fez check-in hoje!','info'); return; }
    ST.streak++;
    ST.lastCheckin=today;
    gainXP(20);
    showToast('Check-in feito! 🔥 '+ST.streak+' dias seguidos (+20 XP)','xp');
    updateProfile();
    saveState();
  });
}

/* ──────────── NAV EVENTS ──────────── */
function initNav(){
  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('click',()=>navigateTo(btn.dataset.section));
  });
  // Level tabs
  document.querySelectorAll('.lt-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.lt-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderModules(btn.dataset.level);
    });
  });
  // Hamburger
  $('hamburger').addEventListener('click',()=>{
    $('sidebar').classList.toggle('open');
    $('sidebar-overlay').classList.toggle('show');
    $('hamburger').classList.toggle('open');
  });
  $('sidebar-overlay').addEventListener('click',()=>{
    $('sidebar').classList.remove('open');
    $('sidebar-overlay').classList.remove('show');
    $('hamburger').classList.remove('open');
  });
  // Modal close
  $('modal-x').addEventListener('click',()=>$('modal-bg').classList.remove('open'));
  $('modal-bg').addEventListener('click',e=>{ if(e.target===$('modal-bg')) $('modal-bg').classList.remove('open'); });
}

/* ──────────── INIT ──────────── */
document.addEventListener('DOMContentLoaded',()=>{
  loadState();
  updateProfile();
  initCanvas();
  initHeroCode();
  initNav();
  initCheckin();
  renderTrailMini();
  renderHomeProgress();
  renderTrail();
  renderModules();
  renderVideoFilters();
  renderVideos();
  renderExFilters();
  renderExercises();
  renderSimLobby();
  renderDesafios();
  renderRanking();
  renderDownloads();
  renderDicas();
});