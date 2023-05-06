function sbResizeImage (){
	//Определяем ширину элемента article
	const c = document.getElementsByTagName("article");
	const w = c[0].clientWidth;
	//Определяем высоту картинки
	let h = Math.round((w/3)*2);
	//Перебираем все теги img внутри figure
	let imgs = c[0].querySelectorAll("figure img");
	for (let img of imgs) {
		if (img.clientWidth < img.clientHeight) {
			img.style.height = h + "px"; //Устанавливаем высоту картинки
		}
	}
}
//выравнивание по высоте картинок
sbResizeImage();//при загрузке
window.onresize = sbResizeImage;//При изменении размера окна