// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_carpet"
	var block_ids = [
		"chipped:barky_yellow_carpet", "chipped:blocky_yellow_carpet", "chipped:bundled_yellow_carpet", "chipped:cross_haired_yellow_carpet",
		"chipped:cubed_yellow_carpet", "chipped:knitted_yellow_carpet", "chipped:patched_yellow_carpet", "chipped:rectangle_yellow_carpet",
		"chipped:ribbled_yellow_carpet", "chipped:scaled_yellow_carpet", "chipped:soft_yellow_carpet", "chipped:stringed_yellow_carpet",
		"chipped:tiled_yellow_carpet", "chipped:tripped_yellow_carpet", "chipped:wickered_yellow_carpet", "chipped:windmill_yellow_carpet",
		"chipped:woved_yellow_carpet", "chipped:cornered_yellow_carpet", "chipped:crafted_yellow_carpet", "chipped:harsh_quilted_yellow_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
