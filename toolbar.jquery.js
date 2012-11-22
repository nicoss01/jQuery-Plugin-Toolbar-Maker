(function($) {
	$.fn.toolbar = function(args) {
		// Variables
		var defaults = {
			width       	: '100%',
			height      	: 'auto',
			positionV   	: 'top',
			positionH   	: 'middle',
			orientation 	: 'horizontal',
			background  	: '#000',
			textColor   	: '#fff',
			hoverBackground : '#BBB',
			hoverTextColor	: '#000',
			activeBackground: '#0F0',
			activeLink		: true,
			elements		: 'li',
			cssClass    	: 'toolbar',
			live			: true
		};
		var opts = $.extend(defaults, args);
        var dest = this;
		$(dest).addClass(opts.cssClass);
		$("body").append("<style type='text/css'>."+opts.cssClass+" "+opts.elements+"{ cursor:pointer } .active_link{ background-color:"+opts.activeBackground+";} .hover_link{ background-color:"+opts.hoverBackground+"; } .hover_link a{ color:"+opts.hoverTextColor+" }</script>");
		var makeToolbar = function(){
			$(dest).css({width:opts.width,height:opts.height,position:'fixed',backgroundColor:opts.background}).find("a").css({'color':opts.textColor,'text-decoration':'none'});
			var h=($(document).innerHeight()/2)-($(dest).outerHeight()/2);
			switch(opts.positionV){
				case "top"		:  $(dest).css({top:0,bottom:'auto'});	break;
				case "middle"	:  $(dest).css({top:h.toString(10)+'px'});	break;
				default			:
				case "bottom"	:  $(dest).css({bottom:0,top:'auto'});	break;
			}
			var w=($(document).innerWidth()/2)-($(dest).outerWidth()/2);
			switch(opts.positionH){
				case "left"		:  $(dest).css({left:0,right:'auto'});	break;
				case "middle"	:  $(dest).css({top:w.toString(10)+'px'});	break;
				default			:
				case "right"	:  $(dest).css({right:0,left:'auto'});	break;
			}
			if(opts.orientation=="horizontal")
			{
				var w=(opts.width.replace("px","")/$(dest).find(opts.elements).size());
				$(dest).children(opts.elements).css({float:'left',width:w+"px",height:opts.height,'line-height':opts.height,});
			}
			else
			{
				$(dest).children(opts.elements).css({float:'none',width:opts.width});
			}
			$(dest).children(opts.elements).mouseenter(function(){
				$(this).toggleClass("hover_link"); 
			}).mouseleave(function(){ 
				$(this).toggleClass("hover_link"); 
			});
			if(opts.activeLink)
			{
				$(dest).find('a').removeClass("active_link");
				var url_decomp=document.location.href.replace("http://","").split("/");
				var url_page="/";
				for(var i=1;i<url_decomp.length;i++)
					url_page+="/"+url_decomp[i];
				url_page=url_page.replace("//","");
				var page=url_decomp[url_decomp.length-1];
				if($(dest).find('a[href*="'+document.location.href+'"]').size()>0)
					$(dest).find('a[href*="'+document.location.href+'"]').parent().addClass("active_link");
				else
				if($(dest).find('a[href*="'+url_page+'"]').size()>0)
					$(dest).find('a[href*="'+url_page+'"]').parent().addClass("active_link");
				else
				if($(dest).find('a[href*="'+page+'"]').size()>0)
					$(dest).find('a[href*="'+page+'"]').parent().addClass("active_link");
				
			}
		}
		if(opts.live)
			$(window).resize(makeToolbar);
		makeToolbar();
        return $(dest);
	};
})(jQuery);