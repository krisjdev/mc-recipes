// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_wool"
	var block_ids = [
		"chipped:barky_red_wool", "chipped:blocky_red_wool", "chipped:bundled_red_wool", "chipped:cross_haired_red_wool",
		"chipped:cubed_red_wool", "chipped:knitted_red_wool", "chipped:patched_red_wool", "chipped:rectangle_red_wool",
		"chipped:ribbled_red_wool", "chipped:scaled_red_wool", "chipped:soft_red_wool", "chipped:stringed_red_wool",
		"chipped:tiled_red_wool", "chipped:tripped_red_wool", "chipped:wickered_red_wool", "chipped:windmill_red_wool",
		"chipped:woved_red_wool", "chipped:cornered_red_wool", "chipped:crafted_red_wool", "chipped:harsh_quilted_red_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
