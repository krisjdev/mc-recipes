// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:purple_wool"
	var block_ids = [
		"chipped:barky_purple_wool", "chipped:blocky_purple_wool", "chipped:bundled_purple_wool", "chipped:cross_haired_purple_wool",
		"chipped:cubed_purple_wool", "chipped:knitted_purple_wool", "chipped:patched_purple_wool", "chipped:rectangle_purple_wool",
		"chipped:ribbled_purple_wool", "chipped:scaled_purple_wool", "chipped:soft_purple_wool", "chipped:stringed_purple_wool",
		"chipped:tiled_purple_wool", "chipped:tripped_purple_wool", "chipped:wickered_purple_wool", "chipped:windmill_purple_wool",
		"chipped:woved_purple_wool", "chipped:cornered_purple_wool", "chipped:crafted_purple_wool", "chipped:harsh_quilted_purple_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
