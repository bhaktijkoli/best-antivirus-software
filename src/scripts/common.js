$(document).ready(function() {
      $('.selectpicker').selectpicker();
      $('.rm-mustard').click(function() {
        $('.remove-example').find('[value=Mustard]').remove();
        $('.remove-example').selectpicker('refresh');
      });
      $('.rm-ketchup').click(function() {
        $('.remove-example').find('[value=Ketchup]').remove();
        $('.remove-example').selectpicker('refresh');
      });
      $('.rm-relish').click(function() {
        $('.remove-example').find('[value=Relish]').remove();
        $('.remove-example').selectpicker('refresh');
      });
      $('.ex-disable').click(function() {
          $('.disable-example').prop('disabled',true);
          $('.disable-example').selectpicker('refresh');
      });
      $('.ex-enable').click(function() {
          $('.disable-example').prop('disabled',false);
          $('.disable-example').selectpicker('refresh');
      });

    

      prettyPrint();

 

	 

 
 
 
 

$(".panel-heading").click(function () {
    $(".accordion-toggle").addClass('open');
});
if ( $('.toggletag').hasClass('open') ) {
    $("html").click(function () {
        $(".toggletag").removeClass('open');
    });
}




	jQuery(".accordion-toggle").click(function(){

			if(jQuery(this).hasClass("active")){
					jQuery(this).removeClass("active");
   		 			
				}
			else{
					jQuery(this).addClass("active");   		 		
				}	
		
	});
	
 
	
 });