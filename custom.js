(function(){
  'use strict';

  theme.AlternativeHero = (function() {
  	 
  
    function AlternativeHero(container) {
      this.container = container;
      this.sectionId = this.container.getAttribute('data-section-id');
      this.init();
    }
  
    AlternativeHero.prototype = Object.assign({}, AlternativeHero.prototype, {
      init: function() {

          var dateElements = this.container.querySelector('.hero-countdown-timer-wrap');
	      if (dateElements) {
	      var dateElements = this.container.querySelector('[data-date]'),
	      	  displayDate  = this.container.querySelector('[display-date]'),
	          displayDays  = this.container.querySelector('[display-days]'),
	          displayHours  = this.container.querySelector('[display-hours]'),
	          displayMinutes  = this.container.querySelector('[display-minutes]'),
	          displaySeconds  = this.container.querySelector('[display-seconds]'),
	   
	          newData  = dateElements.getAttribute('data-date');
         	  //console.log(dateElements)

         	  //console.log(newData, 'ok')
         
	         var countDownDate = new Date(newData).getTime();

	         var x = setInterval( function() {

	          // Get today's date and time
	          var now = new Date().getTime();

	          // Find the distance between now and the count down date
	          var distance = countDownDate - now;

	          // Time calculations for days, hours, minutes and seconds
	          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	          // displayDate.innerHTML = days + "d " + hours + "h "
	          // + minutes + "m " + seconds + "s ";
	          if (days > 0 ) {
	          	displayDays.innerHTML = days + "";
	          }else{
	          	displayDays.parentElement.remove()
	          }

	           
	          
	          if (seconds >= 0) {
	          	dateElements.classList.add('active');
	          }else{
	          	dateElements.classList.remove('active');
	          }

	          displayHours.innerHTML = ("0" + hours).slice(-2) + "";	
	          displayMinutes.innerHTML = ("0" + minutes).slice(-2)  + "";
	          displaySeconds.innerHTML = ("0" + seconds).slice(-2) + "";
	          

	          // If the count down is finished, write some text
	          if (distance < 0) {
	            clearInterval(x);
	            dateElements.classList.remove('active');
	          }
	        }, 800);
        }

      } 

    });
  
    return AlternativeHero;
  })();


  function DOMready(callback) {
    if (document.readyState != 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
  }

  DOMready(function(){
    
    theme.sections.register('alternative-hero', theme.AlternativeHero);
     
    document.dispatchEvent(new CustomEvent('page:loaded'));
  });




})(); //end
