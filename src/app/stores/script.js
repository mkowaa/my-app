var bLazy = new Blazy({
  breakpoints: [{
    width: 420 // Max-width
    , src: 'data-src-small'
  }]
  , success: function(element){
    setTimeout(function(){
      var parent = element.parentNode;
      parent.className = parent.className.replace(/\bloading\b/,'');
    }, 200);
  }
});
