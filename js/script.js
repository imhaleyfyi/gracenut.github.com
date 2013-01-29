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
			var $id2 = '#n' + $this.attr('id');
			$('a.active').removeClass('active');
			$('div.active').removeClass('active');
			$this.addClass('active');
			$($id2).addClass('active');
		}
	})
});