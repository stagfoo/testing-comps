import Title from './Title/Title';
import List from './List/List';
import Button from './Button/Button';
import Card from './Card/Card';

const stage = document.querySelector('.showcase.yoyo .stage');

function CardShowcase() {
  const props = {
    title: "soshi card",
    image: "https://78.media.tumblr.com/425b54637a9bb4845ee75b1f4e313375/tumblr_orfzviZEqq1wp0r4no1_1280.jpg",
    text: "Vaporwave is a microgenre of electronic music and an Internet meme that emerged in the early 2010s.[17] The music typically features a fascination with 1980s and 1990s styles of mood music such as smooth jazz, elevator music, R&B, and lounge music"
  }
  const CardNode = Card(props);
  stage.appendChild(CardNode);
}
function ButtonShowcase() {
  const ButtonNode = Button({
    text: 'Button Text',
    eventName: 'login',
  });
  console.log(ButtonNode);
  ButtonNode.addEventListener('login', function (e) { console.log(e) }, false);
  stage.appendChild(ButtonNode);
}


function TitleShowcase() {

  const TitleNode = Title({
    text: 'Hello World'
  });

  const TitleVNode = Title({
    text: 'Hello World'
  }, 'vdom');
  // Render
  console.log(TitleVNode);
  stage.appendChild(TitleNode);
}

function ListShowcase() {
  const ListNode = List({items: ['test', 'test', 'more testing'] });
  // Render
  stage.appendChild(ListNode);
}

// function ImageShowcase() {
//   const ImageEl = new Image({ src: 'https://i.redd.it/4sm0zg9kl8501.png', alt: 'n64 logo', height: 300, width: 300 });
//   ImageEl.update({ src: 'http://i.imgur.com/m1e7mBg.jpg', alt: 'n64 logo', height: 300, width: 300 });
//   // Render
//   window["ImageEl"] = ImageEl;
//   stage.appendChild(ImageEl.node);
// }

function Showcase() {
  // Define
  TitleShowcase();
  ButtonShowcase();
  CardShowcase();
  ListShowcase();
  // ImageShowcase();
}
export default Showcase;
