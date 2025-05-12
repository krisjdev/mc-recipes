// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_carpet"
	var block_ids = [
		"chipped:barky_black_carpet", "chipped:blocky_black_carpet", "chipped:bundled_black_carpet", "chipped:cross_haired_black_carpet",
		"chipped:cubed_black_carpet", "chipped:knitted_black_carpet", "chipped:patched_black_carpet", "chipped:rectangle_black_carpet",
		"chipped:ribbled_black_carpet", "chipped:scaled_black_carpet", "chipped:soft_black_carpet", "chipped:stringed_black_carpet",
		"chipped:tiled_black_carpet", "chipped:tripped_black_carpet", "chipped:wickered_black_carpet", "chipped:windmill_black_carpet",
		"chipped:woved_black_carpet", "chipped:cornered_black_carpet", "chipped:crafted_black_carpet", "chipped:harsh_quilted_black_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
