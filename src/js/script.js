import '../css/index.css';
import '../css/styles.scss';
import {firstMessage, delayMessage} from './message';
import disnovoImg from '../images/logo.png';
import disnovoVideo from '../videos/lab_background.mp4';
import data from './teachers.json';
import renderToDom from './render-to-dom'

console.log(data)
data.teachers.forEach( (teacher)=>{
  const element = document.createElement('li')
  element.textContent = teacher.name;
  renderToDom(element);

})
// alert('Hola amigos how are you guys doing ');
document.write(firstMessage);
delayMessage()

const img = document.createElement('img')
img.setAttribute('src',disnovoImg)
img.setAttribute('width','300px')
document.body.append(img)

const Video = document.createElement('video')
Video.setAttribute('src',disnovoVideo)
Video.setAttribute('width','500px')
Video.setAttribute('autoplay',true)
Video.setAttribute('controls',true)
document.body.append(Video)

