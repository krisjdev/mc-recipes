// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_carpet"
	var block_ids = [
		"chipped:barky_cyan_carpet", "chipped:blocky_cyan_carpet", "chipped:bundled_cyan_carpet", "chipped:cross_haired_cyan_carpet",
		"chipped:cubed_cyan_carpet", "chipped:knitted_cyan_carpet", "chipped:patched_cyan_carpet", "chipped:rectangle_cyan_carpet",
		"chipped:ribbled_cyan_carpet", "chipped:scaled_cyan_carpet", "chipped:soft_cyan_carpet", "chipped:stringed_cyan_carpet",
		"chipped:tiled_cyan_carpet", "chipped:tripped_cyan_carpet", "chipped:wickered_cyan_carpet", "chipped:windmill_cyan_carpet",
		"chipped:woved_cyan_carpet", "chipped:cornered_cyan_carpet", "chipped:crafted_cyan_carpet", "chipped:harsh_quilted_cyan_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
