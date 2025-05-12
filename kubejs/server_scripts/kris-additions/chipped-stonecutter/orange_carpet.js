// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_carpet"
	var block_ids = [
		"chipped:barky_orange_carpet", "chipped:blocky_orange_carpet", "chipped:bundled_orange_carpet", "chipped:cross_haired_orange_carpet",
		"chipped:cubed_orange_carpet", "chipped:knitted_orange_carpet", "chipped:patched_orange_carpet", "chipped:rectangle_orange_carpet",
		"chipped:ribbled_orange_carpet", "chipped:scaled_orange_carpet", "chipped:soft_orange_carpet", "chipped:stringed_orange_carpet",
		"chipped:tiled_orange_carpet", "chipped:tripped_orange_carpet", "chipped:wickered_orange_carpet", "chipped:windmill_orange_carpet",
		"chipped:woved_orange_carpet", "chipped:cornered_orange_carpet", "chipped:crafted_orange_carpet", "chipped:harsh_quilted_orange_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
