// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_carpet"
	var block_ids = [
		"chipped:barky_red_carpet", "chipped:blocky_red_carpet", "chipped:bundled_red_carpet", "chipped:cross_haired_red_carpet",
		"chipped:cubed_red_carpet", "chipped:knitted_red_carpet", "chipped:patched_red_carpet", "chipped:rectangle_red_carpet",
		"chipped:ribbled_red_carpet", "chipped:scaled_red_carpet", "chipped:soft_red_carpet", "chipped:stringed_red_carpet",
		"chipped:tiled_red_carpet", "chipped:tripped_red_carpet", "chipped:wickered_red_carpet", "chipped:windmill_red_carpet",
		"chipped:woved_red_carpet", "chipped:cornered_red_carpet", "chipped:crafted_red_carpet", "chipped:harsh_quilted_red_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
