// Evento para o botão com ID correto
document.getElementById('switch-theme-button').addEventListener('click', switchTheme);

function switchTheme() {
    // Alterna entre os temas
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Seleciona a música com base no tema
    const theme = document.body.classList.contains('light-theme') ? 'normal-world.mpeg' : 'inverted-world.mpeg';

    // Atualiza a trilha sonora
    const audio = document.getElementById('music');
    audio.src = `assets/musics/${theme}`;
    audio.play();
    audio.volume = 0.2;
}
