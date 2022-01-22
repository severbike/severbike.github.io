const pageUrl = document.location;
const params = new URLSearchParams(pageUrl.search);
const maxResults = params.get['max-results'];
const startPost = params.get['start'];


for (let p of params) {
	console.log(p[0] + ' - ' + p[1]);
}
console.log(pageUrl);
