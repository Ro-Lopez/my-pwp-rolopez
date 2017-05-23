/**
 * Created by LoroloDeuces on 5/20/2017.
 */

/**
ATTEMPT #1
function myLldev() {
	document.getElementById("lldev").innerHTML = "THE LIFE YOU NEED FOR THE LIFE YOU WANT";
	document.getElementById("about").value = "";
}


function myAbout() {
	document.getElementById("about").innerHTML = "Facts that are about me";
}



function myContact() {
	document.getElementById("contact").innerHTML = "Contact me!";
}




function myWebdev() {
	document.getElementById("webdev").innerHTML = "Webdevelopment things I do";
	}



function myBuscon() {
	document.getElementById("buscon").innerHTML = "Let me help you start your business";
	}



function myResume() {
	document.getElementById("resume").innerHTML = "Here is my resume, FUCK YOU PAY ME";
	}

 **/


/**
 * ATTEMPT #2

$("#lldevid").click(function(){
	$("p").hide();
});

$("#show").click(function(){
	$("p").show();
});
 **/

/**
 *ATTEMPT #3
 **/


$(document).ready(function(){

	$("#aboutButt").click(function(){
		$("p").hide();
		$("h4").hide();
		$("h3").hide();
		$("h2").hide();
		$("h1").show();
	});


	$("#webdevButt").click(function(){
		$("p").hide();
		$("h4").hide();
		$("h3").hide();
		$("h1").hide();
		$("h2").show();
	});


	$("#busidevButt").click(function(){
		$("p").hide();
		$("h4").hide();
		$("h1").hide();
		$("h2").hide();
		$("h3").show();
	});


	$("#contactButt").click(function(){
		$("p").hide();
		$("h2").hide();
		$("h3").hide();
		$("h1").hide();
		$("h4").show();
	});

});