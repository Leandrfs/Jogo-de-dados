
function atualizarJogadores() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage1 = 'dice' + randomNumber1 + '.png';
    let randomDiceImage2 = 'dice' + randomNumber2 + '.png';

    let randomImageSource1 = './img/' + randomDiceImage1;
    let randomImageSource2 = './img/' + randomDiceImage2;

    let image1 = document.getElementById('player1Dice');
    let image2 = document.getElementById('player2Dice');

    image1.classList.add('rotate');
    image2.classList.add('rotate');

    setTimeout(function() {
        image1.classList.remove('rotate');
        image2.classList.remove('rotate');
    }, 300);

    image1.setAttribute('src', randomImageSource1);
    image2.setAttribute('src', randomImageSource2);

    let messageElement = document.getElementById('message');

    // Removemos a classe "show-message" caso ela já esteja presente
    messageElement.classList.remove('show-message');

    // Exibimos a mensagem após 1 segundo
    setTimeout(function() {
        // Verificar qual jogador ganhou e exibir a mensagem
        if (randomNumber1 > randomNumber2) {
            messageElement.textContent = 'Parabéns, Jogador 1! Você ganhou!';
        } else if (randomNumber2 > randomNumber1) {
            messageElement.textContent = 'Parabéns, Jogador 2! Você ganhou!';
        } else {
            messageElement.textContent = 'Empate! Tente novamente.';
        }

        // Adicionamos a classe "show-message" para exibir a mensagem com animação
        messageElement.classList.add('show-message');
    }, 1000);

    // Removemos a classe "show-message" após 3 segundos para ocultar a mensagem
    setTimeout(function() {
        messageElement.classList.remove('show-message');
    }, 4000);
}

document.getElementById('btnJogar').addEventListener('click', atualizarJogadores);
