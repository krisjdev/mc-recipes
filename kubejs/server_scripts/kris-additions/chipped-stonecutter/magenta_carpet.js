// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:magenta_carpet"
	var block_ids = [
		"chipped:barky_magenta_carpet", "chipped:blocky_magenta_carpet", "chipped:bundled_magenta_carpet", "chipped:cross_haired_magenta_carpet",
		"chipped:cubed_magenta_carpet", "chipped:knitted_magenta_carpet", "chipped:patched_magenta_carpet", "chipped:rectangle_magenta_carpet",
		"chipped:ribbled_magenta_carpet", "chipped:scaled_magenta_carpet", "chipped:soft_magenta_carpet", "chipped:stringed_magenta_carpet",
		"chipped:tiled_magenta_carpet", "chipped:tripped_magenta_carpet", "chipped:wickered_magenta_carpet", "chipped:windmill_magenta_carpet",
		"chipped:woved_magenta_carpet", "chipped:cornered_magenta_carpet", "chipped:crafted_magenta_carpet", "chipped:harsh_quilted_magenta_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
