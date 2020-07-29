document.addEventListener("DOMContentLoaded",
	function (event){
function SayHello (event) {
	
	
		var name = document.getElementById('name').value;
		var message = "<h2>hello " + name + "!</h2>";
		document
		.getElementById("content").textContent = message;
	
document
		.getElementById("content").innerHTML = message;


		if (name === "student") {
			var title = document.getElementById("title").textContent;

			title += " & loving it!";

			document
		.querySelector("#title").textContent = title;

		}
}

		document.querySelector("button")
			.addEventListener("click", SayHello);




// 		document.querySelector("button")

// 			.onclick = SayHello;

// }
// // console.log(document.getElementsByClassName('title'));
// );


			// let screenLog = document.querySelector('#screen-log');
			// document.addEventListener('mousemove', logKey);

			// function logKey(e) {
			//   screenLog.innerText = `
			//     Screen X/Y: ${e.screenX}, ${e.screenY}
			//     Client X/Y: ${e.clientX}, ${e.clientY}`;

			// }
			// document.addEventListener('click', logKey);

			// function logKey(e) {
			//   screen-log.textContent = `The shift key is pressed: ${e.shiftKey}`;
			// }





// document.querySelector("body")
// .addEventListener("mousemove",function(){
// 	if (event.shiftKey === true) {
// 	console.log("X: "+event.clientX);
// 	console.log("Y: "+event.clientY);
// 	}
});



