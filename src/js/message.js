    // import renderToDom from './render-to-dom';
    const renderToDom = require('./render-to-dom');

    const waitTime = new Promise((todoOk, todoMal) => {
        setTimeout(() => {
            todoOk('Han pasado 3 segundos')
        }, 3000)
    })

    module.exports = {
        firstMessage: 'Hola mundo dessde un primer modulo',
        delayMessage: async () => {
            const message = await waitTime;
            console.log(message)

            const element = document.createElement('p')
            element.textContent = message;
            renderToDom(element)
        }

    }