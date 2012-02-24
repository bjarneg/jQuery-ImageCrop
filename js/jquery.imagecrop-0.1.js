(function($){
 
    $.fn.extend({
         
        //pass the options variable to the function
        ImageCrop: function(options) {
 
 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
            	align	: 'center',
                w       : 100,
                h       : 100
                
            }
                 
            var options =  $.extend(defaults, options);
            var o = options;
            return this.each(function() 
            {
                var $that = jQuery(this);
                var w = $that.width();
                var h = $that.height();
				
				// Default, center
				var offsetLeft = parseInt((w - o.w) / 2);
				var offsetTop = parseInt((w - o.w) / 2);

                
                
                
                
                $that.wrap('<div style="width:' + o.w + 'px;height:' + o.h + 'px;overflow:hidden;"></div>');
                $that.css("margin-top","-" + offsetTop + "px");
                $that.css("margin-left","-" + offsetLeft + "px;");
            });
        }
    });
    

    
    
})(jQuery);

