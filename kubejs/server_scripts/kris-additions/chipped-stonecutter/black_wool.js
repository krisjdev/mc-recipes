// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:black_wool"
	var block_ids = [
		"chipped:barky_black_wool", "chipped:blocky_black_wool", "chipped:bundled_black_wool", "chipped:cross_haired_black_wool",
		"chipped:cubed_black_wool", "chipped:knitted_black_wool", "chipped:patched_black_wool", "chipped:rectangle_black_wool",
		"chipped:ribbled_black_wool", "chipped:scaled_black_wool", "chipped:soft_black_wool", "chipped:stringed_black_wool",
		"chipped:tiled_black_wool", "chipped:tripped_black_wool", "chipped:wickered_black_wool", "chipped:windmill_black_wool",
		"chipped:woved_black_wool", "chipped:cornered_black_wool", "chipped:crafted_black_wool", "chipped:harsh_quilted_black_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
