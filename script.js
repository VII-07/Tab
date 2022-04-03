window.addEventListener('click',(event) => {
   if( event.target.hasAttribute('data-action')){
        const tab = event.target.closest('.tab');
        const text = tab.querySelector('.tab__desctiption')
        const textContainer = tab.querySelector('.tab__bottom')

        if(textContainer.style.maxHeight){
            textContainer.style.maxHeight = null;
        } else {
            textContainer.style.maxHeight = textContainer.scrollHeight + 'px'
        }
   }
})