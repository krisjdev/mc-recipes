// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_carpet"
	var block_ids = [
		"chipped:barky_pink_carpet", "chipped:blocky_pink_carpet", "chipped:bundled_pink_carpet", "chipped:cross_haired_pink_carpet",
		"chipped:cubed_pink_carpet", "chipped:knitted_pink_carpet", "chipped:patched_pink_carpet", "chipped:rectangle_pink_carpet",
		"chipped:ribbled_pink_carpet", "chipped:scaled_pink_carpet", "chipped:soft_pink_carpet", "chipped:stringed_pink_carpet",
		"chipped:tiled_pink_carpet", "chipped:tripped_pink_carpet", "chipped:wickered_pink_carpet", "chipped:windmill_pink_carpet",
		"chipped:woved_pink_carpet", "chipped:cornered_pink_carpet", "chipped:crafted_pink_carpet", "chipped:harsh_quilted_pink_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
