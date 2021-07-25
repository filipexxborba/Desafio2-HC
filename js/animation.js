const itemsList = document.querySelectorAll('.item__lista');
const animationClass = 'animate-show';

let i = 0;
function showAnimationClass() {
    var timer = setInterval(putClass, 50);
    function putClass() {
      if (i == itemsList.length) {
        clearInterval(timer);
      } else {
        itemsList[i].classList.add(animationClass);
        i++
      }
    }
  }

showAnimationClass();

