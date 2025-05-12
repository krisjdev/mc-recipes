// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:pink_wool"
	var block_ids = [
		"chipped:barky_pink_wool", "chipped:blocky_pink_wool", "chipped:bundled_pink_wool", "chipped:cross_haired_pink_wool",
		"chipped:cubed_pink_wool", "chipped:knitted_pink_wool", "chipped:patched_pink_wool", "chipped:rectangle_pink_wool",
		"chipped:ribbled_pink_wool", "chipped:scaled_pink_wool", "chipped:soft_pink_wool", "chipped:stringed_pink_wool",
		"chipped:tiled_pink_wool", "chipped:tripped_pink_wool", "chipped:wickered_pink_wool", "chipped:windmill_pink_wool",
		"chipped:woved_pink_wool", "chipped:cornered_pink_wool", "chipped:crafted_pink_wool", "chipped:harsh_quilted_pink_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
