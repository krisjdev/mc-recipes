// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_carpet"
	var block_ids = [
		"chipped:barky_white_carpet", "chipped:blocky_white_carpet", "chipped:bundled_white_carpet", "chipped:cross_haired_white_carpet",
		"chipped:cubed_white_carpet", "chipped:knitted_white_carpet", "chipped:patched_white_carpet", "chipped:rectangle_white_carpet",
		"chipped:ribbled_white_carpet", "chipped:scaled_white_carpet", "chipped:soft_white_carpet", "chipped:stringed_white_carpet",
		"chipped:tiled_white_carpet", "chipped:tripped_white_carpet", "chipped:wickered_white_carpet", "chipped:windmill_white_carpet",
		"chipped:woved_white_carpet", "chipped:cornered_white_carpet", "chipped:crafted_white_carpet", "chipped:harsh_quilted_white_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
