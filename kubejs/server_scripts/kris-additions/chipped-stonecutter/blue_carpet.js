// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_carpet"
	var block_ids = [
		"chipped:barky_blue_carpet", "chipped:blocky_blue_carpet", "chipped:bundled_blue_carpet", "chipped:cross_haired_blue_carpet",
		"chipped:cubed_blue_carpet", "chipped:knitted_blue_carpet", "chipped:patched_blue_carpet", "chipped:rectangle_blue_carpet",
		"chipped:ribbled_blue_carpet", "chipped:scaled_blue_carpet", "chipped:soft_blue_carpet", "chipped:stringed_blue_carpet",
		"chipped:tiled_blue_carpet", "chipped:tripped_blue_carpet", "chipped:wickered_blue_carpet", "chipped:windmill_blue_carpet",
		"chipped:woved_blue_carpet", "chipped:cornered_blue_carpet", "chipped:crafted_blue_carpet", "chipped:harsh_quilted_blue_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
