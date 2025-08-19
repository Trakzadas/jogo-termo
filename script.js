document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const keyboard = document.getElementById('keyboard');

    // CORREÇÃO: Lista de palavras sem duplicatas para garantir uma seleção justa.
    const wordList = [
        "sagaz", "justo", "amigo", "audaz", "ideia", "etica", "plena", "mutua", "afeto", "sutil",
        "vigor", "dever", "sonho", "lapso", "honra", "muito", "tenue", "nobre", "exito", "sanar",
        "poder", "moral", "fazer", "graca", "corja", "assim", "desde", "fosse", "anexo", "digno",
        "genio", "causa", "comum", "ainda", "feliz", "porem", "censo", "temor", "culto", "ontem",
        "clava", "fluxo", "sonso", "credo", "fugaz", "forte", "termo", "visar", "anseio", "puder",
        "lugar", "saude", "impor", "olhar", "jeito", "coisa", "mesmo", "flora", "leigo", "dogma",
        "louco", "criar", "valor", "ajuda", "usura", "servo", "legal", "burro", "morte", "vento",
        "falar", "bruma", "calma", "ritmo", "unico", "pobre", "nuvem", "sorte", "tente", "fugir",
        "devir", "chato", "ordem", "ciclo", "desse", "casta", "prosa", "abrir", "banto", "impar",
        "pique", "lindo", "filho", "peito", "garbo", "nivel", "tendo", "marco", "cheio", "selar",
        "festa", "finda", "pauta", "signo", "brabo", "senso", "coeso", "mente", "corpo", "fauna",
        "junto", "longo", "vital", "fonte", "verbo", "denso", "estro", "trama", "livro", "fraco",
        "turva", "fator", "chuva", "pompa", "antes", "prece", "ambos", "cozer", "forma", "arido",
        "doido", "reino", "massa", "traco", "bravo", "maior", "solto", "otica", "teste", "prazo",
        "mexer", "epico", "primo", "velho", "funil", "horto", "canto", "lazer", "voraz", "final",
        "etnia", "cacto", "ruina", "texto", "beijo", "idoso", "psico", "verso", "sarca", "gosto",
        "magia", "plano", "ideal", "crime", "feroz", "salve", "folha", "orfao", "troca", "risco",
        "fruto", "epoca", "jovem", "brisa", "pilar", "tarde", "tribo", "grave", "doce", "torpe",
        "perda", "motim", "mudar", "lesse", "carro", "rumor", "senda", "trato", "letal", "capaz",
        "arroz", "prado", "apego", "cerca", "louro", "facil", "roupa", "clave", "choro", "calvo",
        "lousa", "densa", "trote", "briga", "salvo", "coroa", "veloz", "arado", "rezar", "abuso",
        "casto", "finjo", "cruel", "porta", "baixo", "relva", "pomar", "santo", "farsa", "bolso",
        "dança", "cacho", "surja", "ampla", "linha", "manga", "calor", "trupe", "beata", "tutor",
        "selva", "garra", "reles", "boato", "perco", "todas", "fraca", "ditos", "prumo", "calmo",
        "venha", "valer", "punha", "bruta", "vespa", "cervo", "turba", "pudim", "pirra", "solta",
        "guria", "chulo", "bocal", "pavio", "penca", "verao", "freio", "acude", "velha", "surto",
        "sadio", "farto", "vulto", "tinta", "chata", "miudo", "narco", "fatuo", "troco", "grato",
        "plebe", "bicho", "mosto", "molde", "tenso", "geral", "amora", "prego", "cisma", "feudo",
        "otima", "ruela", "goela", "junco", "gruta", "visto", "porca", "findo", "berro", "suave",
        "pardo", "podre", "vinha", "poeta", "germe", "bacon", "ferpa", "cesta", "mirim", "traje",
        "matiz", "poema", "treta", "dique", "bruxa", "murro", "gerir", "tosco", "gesso", "aureo",
        "lorde", "hiato", "pinta", "pinho", "cosmo", "verga", "burra", "brejo", "fibra", "moeda",
        "rancho", "letra", "casca", "mimar", "arfar", "gnomo", "seiva", "verde", "calca", "lesma",
        "seita", "ponte", "trela", "besta", "grama", "parto", "rente", "habil", "torso", "turma",
        "chama", "macho", "feixe", "gueto", "brasa", "trigo", "borda", "cetim", "parvo", "voilà",
        "rezao", "tumba", "prata", "casal", "frase", "dardo", "sadia", "trava", "sonda", "aliar",
        "trova", "bingo", "tufao", "gabar", "praga", "magro", "nervo", "filme", "fobia", "nessa",
        "areia", "traga", "perto", "caldo", "farol", "lento", "boçal", "vazao", "cifra", "parca",
        "caida", "fuzue", "peste", "misto", "moita", "tosca", "negro", "sogro", "agudo", "poste",
        "surda", "fenda", "tacho", "frita", "nudez", "valsa", "repor", "banho", "afora", "feita",
        "manta", "morno", "perna", "macio", "corte", "bazar", "bater", "prato", "nesga", "verba",
        "verme", "fossa", "vazar", "lagoa", "cofre", "tapar", "ginga", "redor", "beber", "drama",
        "penso", "garfo", "vetor", "balsa", "bambu", "amada", "terco", "molho", "velar", "golpe",
        "pombo", "tenda", "sueco", "adeus", "pavor", "urubu", "forca", "piada", "idosa", "salmo",
        "nevoa", "xingo", "caqui", "ceita", "ferro", "gongo", "firme", "cabra", "lider", "lombo",
        "parda", "abade", "frear", "reler", "grife", "clipe", "surdo", "boate", "sarda", "mouro",
        "trair", "podar", "tiara", "aonde", "cesto", "ileso", "jogar", "sigla", "focar", "cinta",
        "pluma", "ninho", "praia", "gole", "barba", "fecho", "perua", "limpo", "secar", "falsa",
        "corvo", "mural", "folga", "chaga", "larva", "berco", "leito", "toldo", "valia", "sutia",
        "rocha", "socar", "carpa", "tchau", "magna", "turvo", "gorro", "barro", "cinza", "zumbi",
        "polpa", "pinça", "lebre", "vesgo", "mosca", "reuno", "boina", "sogra", "mambo", "corda",
        "touca", "pulga", "longa", "folia", "cheia", "corno", "tanga", "cegar", "delta", "galho",
        "forro", "palco", "cupim", "salsa", "baixa", "carta", "urdir", "gasto", "gaita", "sarau",
        "mansa", "braco", "antro", "rosto", "sabor", "ceia", "pudor", "bolha", "mecha", "telha",
        "tibia", "caixa", "farta", "seara", "gemeo", "miope", "multa", "baile", "mídia", "macro",
        "abono", "faixa", "bando", "dente", "farda", "blusa", "cisco", "nariz", "tíbio", "troço",
        "morna", "pedra", "cisto", "sítio", "mútuo", "corar", "domar", "nossa", "pasto", "sopro",
        "jejum", "sueca", "bruxo", "ralar", "tripa", "frota", "bomba", "apelo", "touro", "cutis",
        "gordo", "vagem", "chapa", "giria", "calda", "podio", "porco", "prole", "carne", "sotao",
        "trevo", "samba", "janta", "banca", "frade", "viela", "sabia", "régua", "aéreo", "movel",
        "tosar", "harpa", "manco", "selim", "lesão", "gêmea", "roçar", "ponta", "hifen", "ilesa",
        "presa", "parar", "acima", "negar", "docil", "civel", "medio", "sanha", "gripe", "pizza",
        "sacro", "legua", "nocao", "balde", "canoa", "haste", "forum", "abio", "farpa", "tropa",
        "fedor", "turco", "barco", "polir", "polis", "tarja", "tosse", "duzia", "audio", "dolar",
        "umido", "couro", "tigre", "vapor"
    ];
    const secretWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(`Palavra secreta (para teste): ${secretWord}`);

    const ROWS = 6;
    const COLS = 5;

    let currentRow = 0;
    let currentCol = 0;
    let isGameOver = false;

    // Cria o tabuleiro
    for (let i = 0; i < ROWS; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < COLS; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }

    // Cria o teclado
    const keys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç'],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    keys.forEach(rowKeys => {
        const row = document.createElement('div');
        row.className = 'keyboard-row';
        rowKeys.forEach(key => {
            const button = document.createElement('button');
            button.className = 'key';
            button.textContent = key;
            button.dataset.key = key;
            if (key === 'Enter' || key === 'Backspace') {
                button.classList.add('large');
            }
            button.addEventListener('click', () => handleKeyPress(key));
            row.appendChild(button);
        });
        keyboard.appendChild(row);
    });

    document.addEventListener('keydown', (e) => handleKeyPress(e.key));

    function handleKeyPress(key) {
        if (isGameOver) return;

        const keyLower = key.toLowerCase();

        if (keyLower === 'enter') {
            if (currentCol === COLS) {
                submitGuess();
            }
        } else if (keyLower === 'backspace') {
            if (currentCol > 0) {
                currentCol--;
                updateBoard(currentRow, currentCol, '');
            }
        } else if (keyLower.match(/^[a-zç]$/i)) {
            if (currentCol < COLS) {
                updateBoard(currentRow, currentCol, keyLower);
                currentCol++;
            }
        }
    }

    function updateBoard(rowIdx, colIdx, char) {
        const row = gameBoard.children[rowIdx];
        if (row && row.children[colIdx]) {
            row.children[colIdx].textContent = char;
        }
    }

    function getCurrentGuess() {
        const row = gameBoard.children[currentRow];
        let guess = '';
        for (const tile of row.children) {
            guess += tile.textContent;
        }
        return guess;
    }

    function submitGuess() {
        const currentGuess = getCurrentGuess();
        
        // REMOVIDO: A verificação se a palavra existe na lista foi removida,
        // permitindo que qualquer combinação de 5 letras seja enviada.

        const row = gameBoard.children[currentRow];
        const secretLetters = secretWord.split('');
        const guessLetters = currentGuess.split('');

        // CORREÇÃO ESSENCIAL: Lógica de duas passadas para evitar erros com letras repetidas.
        // 1ª Passada: Verifica apenas as letras corretas (verde).
        for (let i = 0; i < COLS; i++) {
            if (guessLetters[i] === secretLetters[i]) {
                row.children[i].classList.add('correct');
                updateKeyStatus(guessLetters[i], 'correct');
                secretLetters[i] = null; // Anula a letra para não ser contada novamente.
            }
        }

        // 2ª Passada: Verifica as letras presentes (amarelo) e ausentes (cinza).
        for (let i = 0; i < COLS; i++) {
            if (row.children[i].classList.contains('correct')) {
                continue; // Pula as que já foram marcadas como corretas.
            }

            if (secretLetters.includes(guessLetters[i])) {
                row.children[i].classList.add('present');
                updateKeyStatus(guessLetters[i], 'present');
                secretLetters[secretLetters.indexOf(guessLetters[i])] = null; // Anula para não contar duplicatas.
            } else {
                row.children[i].classList.add('absent');
                updateKeyStatus(guessLetters[i], 'absent');
            }
        }

        if (currentGuess === secretWord) {
            setTimeout(() => alert('Parabéns, você venceu!'), 100);
            isGameOver = true;
        } else {
            currentRow++;
            currentCol = 0;
            if (currentRow === ROWS) {
                setTimeout(() => alert(`Você perdeu! A palavra era: ${secretWord.toUpperCase()}`), 100);
                isGameOver = true;
            }
        }
    }

    function updateKeyStatus(key, status) {
        const keyButton = document.querySelector(`[data-key="${key}"]`);
        if (!keyButton) return;

        // Regra de prioridade: Verde > Amarelo > Cinza
        if (status === 'correct') {
            keyButton.classList.remove('present', 'absent');
            keyButton.classList.add('correct');
        } else if (status === 'present' && !keyButton.classList.contains('correct')) {
            keyButton.classList.add('present');
        } else if (status === 'absent' && !keyButton.classList.contains('correct') && !keyButton.classList.contains('present')) {
            keyButton.classList.add('absent');
        }
    }
});