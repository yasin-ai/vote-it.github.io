//for help: https://www.desmos.com/api/v0.6/docs/index.html#document-expressions
//begin a graph item
//change below ID to match the div in the html file Id, change latex, change math bounds, change axis info



var elt = document.getElementById('bell');

var calculator123 = Desmos.Calculator(elt, {
  zoomButtons: true,
  expressions: true,
  settingsMenu: true
});
calculator123.setExpressions([
  //don't change the id, but change the latex formula
  {
    id: 'graph1',
    latex: 'x=sy log(y) - (h)/(36) exp(-(35y-36/e)^n)',
  },
   {
    id: 'slider1',
    latex: 's=10',
    sliderBounds: {
      min: -10,
      max: 20,
      step: 1
    }
  }, {
       id: 'slider2',
    latex: 'h=3.5',
    sliderBounds: {
      min: -10,
      max: 50,
      step: .1
    }
  }, {
    id: 'slider3',
    latex: 'n=4',
    sliderBounds: {
      min: -10,
      max: 10,
      step: 2
    }
  }

]);
calculator123.setMathBounds({
  //change below to change graph bounds
  left: -3,
  right: 3,
  bottom: -.2,
  top: 1.2
});
calculator123.setGraphSettings({
  //change values below to set axis scale or labels - set to 0 for auto
  xAxisLabel: '', //set this to 2 single quotes for nothing ''
  yAxisLabel: '',
  xAxisStep: '', // x axis count step
  yAxisStep: ''
}); //end the graph itemsssdf

function getstate123() {
  var state123 = calculator123.getState();
  console.log(state123);
  //window.alert(state123);
}











$('#test-link').click(function(e) {
  e.preventDefault(); 
  
  var userResult = function(result) {
      if (result === 1) {
          $('#test-text').text('Fuck off you mother fucker fucking feminist ka choda this is best maths equation just like Myntra Tesla A-style logos are best');
      } else {
          $('#test-text').text('Yoo this is great equation... But try choosing Option "Yes" this time.');
      }
  }
  
  toggleModal('Are you on the support to ban this Matherfacker bloody bastard equation equation?', userResult);
});

function toggleModal(text, callback) {
   
  $wrapper = $('<div id="modal-wrapper"></div>').appendTo('body');
  
  $modal = $('<div id="modal-confirmation"><div id="modal-header"><h3><i class="fa fa-exclamation-circle" aria-hidden="true"></i> Vote in Yes or No</h3><span data-confirm=0 class="modal-action" id="modal-close"><i class="fa fa-times" aria-hidden="true"></i></span></div><div id="modal-content"><p>' + text + '</p></div><div id="modal-buttons"><button class="modal-action" data-confirm=0 id="modal-button-no">No</button><button class="modal-action" data-confirm=1 id="modal-button-yes">Yes</button></div></div>').appendTo($wrapper);
  
  setTimeout(function() {
      $wrapper.addClass('active');
  }, 100);
  
  $wrapper.find('.modal-action').click(function() {
      var result = $(this).data('confirm');
      $wrapper.removeClass('active').delay(500).queue(function() {
         $wrapper.remove();
         callback(result);
      });
  });

}