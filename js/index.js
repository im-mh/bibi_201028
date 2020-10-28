$(document).ready(function () {
	$(".remove-button").on("click", function () {
		
		$(".black-box").animate({opacity:'0'}, 600)
		$(".img3").addClass("rotation3")
		$(".img4").addClass("rotation4")
		$(".img5").addClass("rotation5")
		$(".img6").addClass("rotation6")
		$(".img8").addClass("rotation8")

	})

	/*$(".remove-button").on("mouseleave", function () {
		$(".black-box").addClass("black-box")
		$(".img3").removeClass("rotation3")
		$(".img4").removeClass("rotation4")
		$(".img5").removeClass("rotation5")
		$(".img6").removeClass("rotation6")
		$(".img8").removeClass("rotation8")
	})*/

})