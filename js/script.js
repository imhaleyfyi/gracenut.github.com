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
});