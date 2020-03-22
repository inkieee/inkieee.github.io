(function(){

  var container 	= document.getElementsByClassName('container')[0];
  var iframe 			= document.getElementsByClassName('iframe')[0];
  var RATIO 			= 16/9;  //define a constant ratio
  var MAX_WIDTH 	= 1200;
  var MIN_HEIGHT	= 400;
  var comp,iW,iH,cH,cW;
  
	var resize = function(){
  
      comp = getComputedStyle(container);		// first, we need the computed h/w of whatever he container is.
      cW = parseInt(comp.width);  					//parseInt to get the numerical value from the computed style
      cH = parseInt(comp.height);

      // then, we're looking to see if the computed iframe height is greater than the container height
      // - if so, we know the height, and need to obtain a width
      // - if not, we know the width, and need to obtain a height
      if ( (cW / RATIO) > cH){

        iH = cH;						// set the height equal to the container
        iW = cH * RATIO;		// set the width equal to the container height * ratio
      } else {

        iW = cW;						// set the width equal to the container
        iH = cW / RATIO;		// set the height equal to the container width / ratio
      }
     
      // Ok so, now that the iframe is scaled up, check for out of bounds
      // - note that you could also use css to trap the container 
      if ( iH < MIN_HEIGHT ){
      
        iH = MIN_HEIGHT; 		// set the height to the const
        iW = iH * RATIO; 		// use the same basic forumula, but use the new value
      }
      
      if (iW > MAX_WIDTH){

        iW = MAX_WIDTH;		  // set the width to the const
        iH = iW / RATIO;		// use the same forumula, use the new value
      }
     
     // now set the values. 
     iframe.style.width = Math.floor(iW) + 'px';
     iframe.style.height = Math.floor(iH) + 'px';
     
     iframe.innerHTML = 'H:' + Math.floor(iH) + ' | W:' + Math.floor(iW);
  }

  window.addEventListener('resize', resize);
  window.dispatchEvent(new Event('resize'));  // fire an initial event to set the state
  
}());