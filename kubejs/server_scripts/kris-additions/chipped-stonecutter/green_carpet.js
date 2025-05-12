// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:green_carpet"
	var block_ids = [
		"chipped:barky_green_carpet", "chipped:blocky_green_carpet", "chipped:bundled_green_carpet", "chipped:cross_haired_green_carpet",
		"chipped:cubed_green_carpet", "chipped:knitted_green_carpet", "chipped:patched_green_carpet", "chipped:rectangle_green_carpet",
		"chipped:ribbled_green_carpet", "chipped:scaled_green_carpet", "chipped:soft_green_carpet", "chipped:stringed_green_carpet",
		"chipped:tiled_green_carpet", "chipped:tripped_green_carpet", "chipped:wickered_green_carpet", "chipped:windmill_green_carpet",
		"chipped:woved_green_carpet", "chipped:cornered_green_carpet", "chipped:crafted_green_carpet", "chipped:harsh_quilted_green_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
