// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_carpet"
	var block_ids = [
		"chipped:barky_purple_carpet", "chipped:blocky_purple_carpet", "chipped:bundled_purple_carpet", "chipped:cross_haired_purple_carpet",
		"chipped:cubed_purple_carpet", "chipped:knitted_purple_carpet", "chipped:patched_purple_carpet", "chipped:rectangle_purple_carpet",
		"chipped:ribbled_purple_carpet", "chipped:scaled_purple_carpet", "chipped:soft_purple_carpet", "chipped:stringed_purple_carpet",
		"chipped:tiled_purple_carpet", "chipped:tripped_purple_carpet", "chipped:wickered_purple_carpet", "chipped:windmill_purple_carpet",
		"chipped:woved_purple_carpet", "chipped:cornered_purple_carpet", "chipped:crafted_purple_carpet", "chipped:harsh_quilted_purple_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
