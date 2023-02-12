const fadeAffectPara = () => {
   const fadeInPara = document.querySelector('.fadeInPara');
   const fadePosition = fadeInPara.getBoundingClientRect().top;

   const screenPosition = innerHeight / 1




   if (fadePosition < screenPosition) {
      fadeInPara.classList.add('fadeAppear')
   } else {
      console.log(2);
   
   }
}


window.addEventListener('scroll', fadeAffectPara)