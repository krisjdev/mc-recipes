// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_carpet"
	var block_ids = [
		"chipped:barky_gray_carpet", "chipped:blocky_gray_carpet", "chipped:bundled_gray_carpet", "chipped:cross_haired_gray_carpet",
		"chipped:cubed_gray_carpet", "chipped:knitted_gray_carpet", "chipped:patched_gray_carpet", "chipped:rectangle_gray_carpet",
		"chipped:ribbled_gray_carpet", "chipped:scaled_gray_carpet", "chipped:soft_gray_carpet", "chipped:stringed_gray_carpet",
		"chipped:tiled_gray_carpet", "chipped:tripped_gray_carpet", "chipped:wickered_gray_carpet", "chipped:windmill_gray_carpet",
		"chipped:woved_gray_carpet", "chipped:cornered_gray_carpet", "chipped:crafted_gray_carpet", "chipped:harsh_quilted_gray_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
