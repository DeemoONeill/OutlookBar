function removeSidebar(){
	console.log("Removing Sidebar");
	console.log(timesrun)
    	let selector = "._1fti_QgAzqGWPGlqh_FSvI";
	let element = document.querySelector(selector);
	if (element != null){
		element.parentElement.removeChild(element);
	}
	return

}
var timesrun = 0;
function run(){
	var interval = setInterval(function () {
		removeSidebar();
		timesrun += 1;
		if (timesrun > 4){
			clearInterval(interval);
		}
	}, 10000);
}
run();
