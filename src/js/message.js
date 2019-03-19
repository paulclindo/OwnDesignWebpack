//     const renderToDom = require('./render-to-dom');
//    const makeMessage = require('./make-message');
   import renderToDom from './render-to-dom';
   import makeMessage from './make-message';

    const waitTime = new Promise((todoOk, todoMal) => {
        setTimeout(() => {
            todoOk('Han pasado 3 segundos');
        }, 3000)
    })

    // module.exports = {
    //     firstMessage: 'Hola mundo dessde un primer modulo',
    //     delayMessage: async () => {
    //         const message = await waitTime;
    //         console.log(message)
    //         // const element = document.createElement('p')
    //         // element.textContent = message;
    //         renderToDom(makeMessage(message))
    //     }
    // }

    export const firstMessage = 'hola mundo desde modulo';

    export const delayMessage = async () => {
         const message = await waitTime;
         console.log(message);
         // const element = document.createElement('p')
         // element.textContent = message;
         renderToDom(makeMessage(message));
    }