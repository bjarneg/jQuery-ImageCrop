(function($){
 
    $.fn.extend({
         
        //pass the options variable to the function
        ImageCrop: function(options) {
 
 
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                w       	: 100,
                h       	: 100,
                topalign	: 'middle', //'top','middle','bottom'
                leftalign	: 'middle' //'left','middle','right'
                
                
            }
                 
            var options =  $.extend(defaults, options);
            var o = options;
            return this.each(function() 
            {
                var $that = jQuery(this);
                var w = $that.width();
                var h = $that.height();
                
                var offsetLeft = 0;
				var offsetTop = 0;
				
				if (w > o.w)
				{
					// Default, center
					offsetLeft = parseInt((w - o.w) / 2);
					if (o.leftalign === 'left')
					{
						offsetLeft = 0;
					}
					else if (o.leftalign === 'right')
					{
						offsetLeft = parseInt(w - o.w) 
					}				
				}
				if (h > o.h)
				{
				
					offsetTop = parseInt((h - o.h) / 2);
	
					if (o.topalign === 'top')
					{
						offsetTop = 0;
					}
					else if (o.topalign === 'bottom')
					{
						offsetTop = parseInt(h - o.h) 
					}
					
				}                
                
                
                
                $that.wrap('<div style="width:' + o.w + 'px;height:' + o.h + 'px;overflow:hidden;"></div>');
                if (offsetTop > 0)
                {
                	$that.css("margin-top","-" + offsetTop + "px");
                }
            	if (offsetLeft > 0)
            	{
	                $that.css("margin-left","-" + offsetLeft + "px");
    			}
    		});
        }
    });
    

    
    
})(jQuery);

