// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:white_wool"
	var block_ids = [
		"chipped:barky_white_wool", "chipped:blocky_white_wool", "chipped:bundled_white_wool", "chipped:cross_haired_white_wool",
		"chipped:cubed_white_wool", "chipped:knitted_white_wool", "chipped:patched_white_wool", "chipped:rectangle_white_wool",
		"chipped:ribbled_white_wool", "chipped:scaled_white_wool", "chipped:soft_white_wool", "chipped:stringed_white_wool",
		"chipped:tiled_white_wool", "chipped:tripped_white_wool", "chipped:wickered_white_wool", "chipped:windmill_white_wool",
		"chipped:woved_white_wool", "chipped:cornered_white_wool", "chipped:crafted_white_wool", "chipped:harsh_quilted_white_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
