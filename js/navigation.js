function sbModNavigation () {	
	//Page URL
	const pageUrl = document.location;
	//Create URL Search Params
	const params = new URLSearchParams(pageUrl.search);
	//Проверяем, существует ли параметр start, если не существует, возвращаем 0
	const startPost = params.has('start') ? Number(params.get('start')) : 0;
	//Проверяем количество постов
	const maxResults = params.has('max-results') ? Number(params.get('max-results')) : 20;
	//Извлекаем label из URL страницы
	const label =  pageUrl.pathname.toString().substring(pageUrl.pathname.lastIndexOf('/') + 1);
	//Формируем ссылку на RSS-ленту для label.
	const rssUrl = pageUrl.origin + '/feeds/posts/summary/-/' + label + '?alt=json';
	//Запрашиваем RSS-ленту тега в JSON
	fetch(rssUrl)
	  .then((response) => {
		//Преобразовываем ответ сервера в JSON-объект
	    return response.json();
	  })
	  .then((data) => {
		//Обрабатываем JSON
	    navigation(data, startPost, maxResults);
 	 });
}



 
function navigation(rj, startPost, maxResults) {
	//console.log(rj.feed.entry.length);
	let lastPost = startPost + maxResults;
	console.log(lastPost);
	if (Number(rj.feed.entry.length) <= lastPost) {
		//console.log('Hide Next Link');
		document.getElementById('blog-pager-older-link').classList.add('hide');
	}
}
