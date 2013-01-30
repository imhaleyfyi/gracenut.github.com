$(document).ready(function(){
	$('.tabbable a').click(function(){
		var $this = $(this)
		if ($this.hasClass('active')){
			return;
		}
		else {
			var $id = $this.attr('href').substring(2);
			$('a.active').removeClass('active');
			$('div.active').removeClass('active');
			$this.addClass('active');
			$('#'+$id).addClass('active');
		}
	});
	$('.hero-unit').click(function(){
		var $this = $(this)
		if ($this.hasClass('active')){
			return;
		}
		else {
			var $id2 = '#a' + $this.attr('id');
			$('a.active').removeClass('active');
			$('div.active').removeClass('active');
			$this.addClass('active');
			$($id2).addClass('active');
		}
	});

	$("a").click(function(){
		if (!($(this).parent().parent()).hasClass('nav') && !($(this).hasClass("brand"))){
			if (!($(this).parent().parent().parent().hasClass("active"))) {
				$("a.active").removeClass("active");
				$("div.active").removeClass("active");
				$(this).parent().parent().parent().addClass("active");
				$(this).parent().addClass("active");
				$("#a"+$(this).parent().parent().parent().attr("id")).addClass("active");
				$("#a"+$(this).parent().parent().parent().attr("id")).addClass("active");
				return false;
			}
		}
	});
});