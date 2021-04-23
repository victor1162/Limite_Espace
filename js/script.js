document.getElementById('centraliza-bar').addEventListener('click', onclickMenu)
function onclickMenu(){
		document.getElementById('centraliza-bar').classList.toggle('bg-centraliza-bar')
		document.getElementById('bar1').classList.toggle('bg-bar1')
		document.getElementById('bar2').classList.toggle('bg-bar2')
		document.getElementById('bar3').classList.toggle('bg-bar3')
		document.getElementById('menuOpen').classList.toggle('open')
		document.getElementById('body').classList.toggle('scroll-body')
}