/* v01_20160511 */
$(document).ready(function(){
	productVideo(); 
});

function productVideo(){
	var mvSrc = [];//제품설명형, 이미지편집형, 템플릿형
			mvSrc[0] = ['https://www.youtube.com/embed/8JlbY55KaGg', 'https://www.youtube.com/embed/BwM44pb70gw','https://www.youtube.com/embed/aAsyKjQqMWI'];//제품설명형
			mvSrc[1] = ['https://www.youtube.com/embed/IJr6zMYgWSY', 'https://www.youtube.com/embed/BDqJGhKRmqk'];//이미지편집형
			mvSrc[2] = ['https://www.youtube.com/embed/qRklv9lh7oU', 'https://www.youtube.com/embed/4t3tc3EI3cg'];//템플릿형
	var productOb = $('#product ul li');
	var randomNum;
	var mvHtml;
	
	for (i=0; i<productOb.length; i++){
		randomNum = Math.floor(Math.random() * mvSrc[i].length);
		mvHtml = '<iframe width="330" height="185" src="'+ mvSrc[i][randomNum] +'" frameborder="0" allowfullscreen></iframe>';
		productOb.eq(i).children('.img').html(mvHtml);
		//console.log(i);
	}
}