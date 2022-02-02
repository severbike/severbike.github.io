//Page URL
const pageUrl = new URL('https://solzaru.blogspot.com/search/label/%D0%9F%D0%BE%D1%85%D0%BE%D0%B4%D1%8B?max-results=10');
//Create URL Search Params
const params = new URLSearchParams(pageUrl.search);
//Проверяем, существует ли параметр start, если не существует, возвращаем 0
const startPosts = params.has('start') ? params.get('start') : 0;
//Извлекаем label из URL страницы
const label =  pageUrl.pathname.toString().substring(pageUrl.pathname.lastIndexOf('/') + 1);
//Формируем ссылку на RSS-ленту для label
const rssUrl = pageUrl.origin + '/feeds/posts/summary/-/' + label + '?alt=json';
console.log(rssUrl);
