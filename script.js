document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const keyboard = document.getElementById('keyboard');

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
    "arroz", "prado", "apego", "cerca", "louro", "facil", "roupa", "idoso", "clave", "choro",
    "calvo", "lousa", "densa", "trote", "briga", "salvo", "coroa", "veloz", "arado", "rezar",
    "abuso", "casto", "finjo", "cruel", "porta", "baixo", "relva", "pomar", "santo", "farsa",
    "bolso", "dança", "cacho", "surja", "ampla", "linha", "manga", "calor", "trupe", "beata",
    "tutor", "selva", "garra", "reles", "boato", "perco", "todas", "fraca", "ditos", "prumo",
    "calmo", "venha", "valer", "punha", "bruta", "vespa", "cervo", "turba", "pudim", "pirra",
    "solta", "guria", "chulo", "bocal", "pavio", "penca", "verao", "freio", "acude", "velha",
    "surto", "sadio", "farto", "vulto", "tinta", "chata", "miudo", "narco", "fatuo", "longo",
    "troco", "grato", "plebe", "bicho", "mosto", "molde", "tenso", "geral", "amora", "prego",
    "cisma", "feudo", "otima", "ruela", "goela", "junco", "gruta", "visto", "porca", "findo",
    "berro", "suave", "pardo", "podre", "vinha", "poeta", "germe", "bacon", "ferpa", "cesta",
    "mirim", "traje", "matiz", "poema", "treta", "dique", "bruxa", "murro", "gerir", "tosco",
    "gesso", "aureo", "horta", "lorde", "hiato", "pinta", "pinho", "cosmo", "verga", "burra",
    "brejo", "fibra", "moeda", "rancho", "letra", "casca", "trama", "mimar", "arfar", "gnomo",
    "seiva", "verde", "calca", "lesma", "seita", "ponte", "trela", "besta", "grama", "parto",
    "cerca", "rente", "habil", "torso", "turma", "chama", "macho", "feixe", "gueto", "brasa",
    "trigo", "borda", "cetim", "parvo", "voilà", "rezao", "tumba", "prata", "casal", "frase",
    "dardo", "sadia", "trava", "sonda", "aliar", "trova", "fugir", "canto", "bingo", "tufao",
    "gabar", "praga", "magro", "nervo", "filme", "fobia", "nessa", "areia", "traga", "chulo",
    "perto", "caldo", "choro", "farol", "lento", "boçal", "vazao", "cifra", "parca", "caida",
    "fuzue", "peste", "misto", "moita", "tosca", "negro", "sogro", "agudo", "poste", "surda",
    "fenda", "tacho", "frita", "nudez", "valsa", "repor", "banho", "afora", "feita", "manta",
    "morno", "penca", "troca", "perna", "macio", "clave", "corte", "bazar", "bater", "prato",
    "nesga", "verba", "cacto", "verme", "fossa", "vazar", "lagoa", "cofre", "tapar", "ginga",
    "manga", "redor", "beber", "drama", "penso", "garfo", "vetor", "balsa", "bambu", "amada",
    "terco", "molho", "velar", "golpe", "pombo", "tenda", "tribo", "sueco", "adeus", "pavor",
    "urubu", "forca", "piada", "idosa", "calma", "salmo", "nevoa", "xingo", "caqui", "ceita",
    "ferro", "gongo", "firme", "cabra", "lider", "lombo", "parda", "abade", "frear", "reler",
    "grife", "clipe", "pobre", "surdo", "boate", "sarda", "mouro", "trair", "podar", "tiara",
    "aonde", "cesto", "ileso", "jogar", "sigla", "focar", "cinta", "pluma", "ninho", "praia",
    "gole", "barba", "fecho", "perua", "limpo", "secar", "falsa", "corvo", "mural", "folga",
    "chaga", "larva", "berco", "fruto", "leito", "toldo", "valia", "pavio", "sutia", "rocha",
    "socar", "carpa", "tchau", "magna", "turvo", "gorro", "barro", "cinza", "zumbi", "polpa",
    "pinça", "lebre", "vesgo", "mosca", "reuno", "boina", "sogra", "mambo", "corda", "touca",
    "cacto", "pulga", "longa", "folia", "cheia", "corno", "tanga", "cegar", "calmo", "delta",
    "galho", "forro", "palco", "cupim", "salsa", "baixa", "carta", "urdir", "gasto", "gaita",
    "sarau", "mansa", "braco", "antro", "rosto", "sabor", "ceia", "pudor", "bolha", "mecha",
    "telha", "tibia", "caixa", "farta", "seara", "gemeo", "miope", "multa", "baile", "mídia",
    "macro", "abono", "faixa", "bando", "dente", "horto", "farda", "plano", "blusa", "cisco",
    "nariz", "tíbio", "tutor", "troço", "morna", "pedra", "cisto", "sítio", "mútuo", "corar",
    "domar", "nossa", "pasto", "sopro", "jejum", "sueca", "bruxo", "ralar", "tripa", "frota",
    "bomba", "apelo", "misto", "touro", "pilar", "prece", "verbo", "cutis", "gordo", "vagem",
    "chapa", "giria", "calda", "podio", "mimar", "porco", "prole", "carne", "nuvem", "sotao",
    "trevo", "samba", "janta", "banca", "frade", "viela", "sabia", "porca", "régua", "aéreo",
    "movel", "tosar", "harpa", "manco", "selim", "lesão", "gêmea", "casta", "roçar", "ponta",
    "hifen", "ilesa", "presa", "parar", "acima", "negar", "docil", "civel", "medio", "sanha",
    "gripe", "pizza", "voraz", "sacro", "legua", "nocao", "balde", "canoa", "haste", "forum",
    "abio", "farpa", "tropa", "fedor", "turco", "barco", "polir", "civel", "polis", "corja",
    "tarja", "miope", "tenue", "tosse", "magia", "duzia", "audio", "dolar", "manga", "umido",
    "couro", "fossa", "bicho", "pauta", "sutil", "cinto", "fazer", "tigre", "vapor", "corte",
];
    const secretWord = wordList[Math.floor(Math.random() * wordList.length)];

    const ROWS = 6;
    const COLS = 5;

    let currentRow = 0;
    let currentCol = 0;
    let currentGuess = '';

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
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
    ];

    keys.forEach(rowKeys => {
        const row = document.createElement('div');
        row.className = 'keyboard-row';
        rowKeys.forEach(key => {
            const button = document.createElement('button');
            button.className = 'key';
            button.textContent = key;
            if (key === 'Enter' || key === 'Backspace') {
                button.classList.add('large');
            }
            button.addEventListener('click', () => handleKeyPress(key));
            row.appendChild(button);
        });
        keyboard.appendChild(row);
    });

    // Lida com a entrada do teclado (físico e virtual)
    document.addEventListener('keydown', (e) => handleKeyPress(e.key));

    function handleKeyPress(key) {
        if (currentRow >= ROWS) return; // Jogo acabou

        if (key === 'Enter') {
            if (currentCol === COLS) {
                submitGuess();
            }
        } else if (key === 'Backspace') {
            if (currentCol > 0) {
                currentCol--;
                currentGuess = currentGuess.slice(0, -1);
                updateBoard();
            }
        } else if (key.match(/^[a-z]$/i)) {
            if (currentCol < COLS) {
                currentGuess += key.toLowerCase();
                updateBoard();
                currentCol++;
            }
        }
    }

    function updateBoard() {
        const row = gameBoard.children[currentRow];
        for (let i = 0; i < COLS; i++) {
            const tile = row.children[i];
            tile.textContent = currentGuess[i] || '';
        }
    }

    function submitGuess() {
        if (currentGuess.length !== COLS) {
            alert('A palavra deve ter 5 letras!');
            return;
        }

        const row = gameBoard.children[currentRow];
        const guessLetters = currentGuess.split('');
        const secretLetters = secretWord.split('');

        // Verifica as letras
        for (let i = 0; i < COLS; i++) {
            const tile = row.children[i];
            const keyButton = document.querySelector(`.key:not(.large):not(.correct):not(.present)[textContent="${guessLetters[i]}"]`);

            if (guessLetters[i] === secretLetters[i]) {
                tile.classList.add('correct');
                if(keyButton) keyButton.classList.add('correct');
            } else if (secretLetters.includes(guessLetters[i])) {
                tile.classList.add('present');
                 if(keyButton) keyButton.classList.add('present');
            } else {
                tile.classList.add('absent');
                 if(keyButton) keyButton.classList.add('absent');
            }
        }
        
        // Verifica se ganhou ou perdeu
        if (currentGuess === secretWord) {
            setTimeout(() => alert('Parabéns, você venceu!'), 100);
            currentRow = ROWS; // Impede mais jogadas
        } else {
            currentRow++;
            currentCol = 0;
            currentGuess = '';
            if (currentRow === ROWS) {
                setTimeout(() => alert(`Você perdeu! A palavra era: ${secretWord.toUpperCase()}`), 100);
            }
        }
    }
});