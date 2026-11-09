/* ========== TEMA CLARO/ESCURO (localStorage) ========== */
const botaoTema = document.getElementById('btnTema');

function aplicarTema(tema) {
    document.body.classList.toggle('tema-escuro', tema === 'escuro');
    if (botaoTema) {
        botaoTema.textContent = tema === 'escuro' ? '☀️ Tema claro' : '🌙 Tema escuro';
    }
}

let temaSalvo = 'claro';
try {
    temaSalvo = localStorage.getItem('tema') || 'claro';
} catch (e) { /* localStorage indisponível */ }
aplicarTema(temaSalvo);

if (botaoTema) {
    botaoTema.addEventListener('click', () => {
        const novo = document.body.classList.contains('tema-escuro') ? 'claro' : 'escuro';
        aplicarTema(novo);
        try { localStorage.setItem('tema', novo); } catch (e) { }
        if (typeof window.desenharGrafico === 'function') window.desenharGrafico();
    });
}

/* ========== FORMULÁRIO: VALIDAÇÃO + FEEDBACK NA TELA ========== */
const form = document.querySelector('form');

if (form) {
    const msg = document.getElementById('mensagemForm');

    /* Rascunho: guarda o que foi digitado (menos a senha) */
    const camposRascunho = ['nome', 'email', 'tel', 'nasc'];
    let rascunho = {};
    try { rascunho = JSON.parse(localStorage.getItem('rascunhoForm')) || {}; } catch (e) { }

    camposRascunho.forEach((id) => {
        const el = document.getElementById(id);
        if (rascunho[id]) el.value = rascunho[id];
        el.addEventListener('input', () => {
            rascunho[id] = el.value;
            try { localStorage.setItem('rascunhoForm', JSON.stringify(rascunho)); } catch (e) { }
        });
    });

    function mostrarMensagem(texto, tipo) {
        msg.textContent = texto;
        msg.className = 'msg-form ' + tipo;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const senha = form.senha.value;
        const tel = form.tel.value.trim();

        if (nome.length < 3) {
            return mostrarMensagem('O nome precisa ter pelo menos 3 caracteres.', 'erro');
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return mostrarMensagem('Digite um e-mail válido.', 'erro');
        }
        if (senha.length < 6) {
            return mostrarMensagem('A senha precisa ter pelo menos 6 caracteres.', 'erro');
        }
        if (tel && !/^\d{2}-\d{5}-\d{4}$/.test(tel)) {
            return mostrarMensagem('Telefone no formato 11-91234-5678.', 'erro');
        }

        mostrarMensagem('Obrigado, ' + nome + '! Formulário enviado com sucesso.', 'sucesso');
        rascunho = {};
        try { localStorage.removeItem('rascunhoForm'); } catch (e) { }
        form.reset();
    });
}

/* ========== GRÁFICO CANVAS (só existe em graficos.html) ========== */
const canvas = document.getElementById('canvasGrafico');

if (canvas) {
    const ctx = canvas.getContext('2d');
    const tecnologias = ['Python', 'JavaScript', 'HTML/CSS', 'Front-end', 'Back-end'];
    let valores = tecnologias.map(() => Math.floor(Math.random() * 80) + 20);

    window.desenharGrafico = function (novosValores) {
        if (novosValores === true) {
            valores = tecnologias.map(() => Math.floor(Math.random() * 80) + 20);
        }
        const escuro = document.body.classList.contains('tema-escuro');
        const corBarra = escuro ? '#f1f1f1' : '#111111';
        const corTexto = escuro ? '#f1f1f1' : '#00040a';

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const larguraBarra = canvas.width / valores.length;

        valores.forEach((valor, i) => {
            const altura = (valor / 100) * (canvas.height - 30);
            const x = i * larguraBarra + 10;
            const y = canvas.height - altura - 20;

            ctx.fillStyle = corBarra;
            ctx.fillRect(x, y, larguraBarra - 20, altura);

            ctx.fillStyle = corTexto;
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(tecnologias[i], x + (larguraBarra - 20) / 2, canvas.height - 5);
            ctx.fillText(valor + '%', x + (larguraBarra - 20) / 2, y - 5);
        });
    };

    document.getElementById('btnAtualizarGrafico')
        .addEventListener('click', () => window.desenharGrafico(true));
    window.desenharGrafico();
}
