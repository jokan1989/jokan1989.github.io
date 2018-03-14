/**
 * 
 */
$(function(){
	// 点击头分类处理
	$('.jk_category').on('click', function(e){
		e.preventDefault();// 阻止<a>标签的默认事件
		$('.blog-nav-item').removeClass('active');
		var _href = $(this).attr('href');
		var _html = '';
		$.getJSON("json/"+_href+".json", function(jsonData) {
			_html += '<h4>'+_href+'</h4>';
			_html += '<ol class="list-unstyled">';
			$.each(jsonData, function(dataIndex, data) {
				_html += '<li><a href="'+data.url+'" target="frame_context">'+data.name+'</a></li>';
			})
			_html += '</ol>';
			$('#category_content').empty();
			$('#category_content').append(_html);
		});
		
		$(this).addClass('active');
	});
});