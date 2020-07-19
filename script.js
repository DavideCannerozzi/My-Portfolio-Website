/* Arrow Scroll On The Top */

const myButton = document.getElementById('backToTheTop')

window.onscroll = function() {scrollToTheTop()};

scrollToTheTop = () => {
    if( document.documentElement.scrollTop > 900 ){
        myButton.style.display = 'block'
    }else{
        myButton.style.display = 'none'
    }
}






