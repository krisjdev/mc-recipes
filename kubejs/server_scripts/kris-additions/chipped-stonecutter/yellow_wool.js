// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:yellow_wool"
	var block_ids = [
		"chipped:barky_yellow_wool", "chipped:blocky_yellow_wool", "chipped:bundled_yellow_wool", "chipped:cross_haired_yellow_wool",
		"chipped:cubed_yellow_wool", "chipped:knitted_yellow_wool", "chipped:patched_yellow_wool", "chipped:rectangle_yellow_wool",
		"chipped:ribbled_yellow_wool", "chipped:scaled_yellow_wool", "chipped:soft_yellow_wool", "chipped:stringed_yellow_wool",
		"chipped:tiled_yellow_wool", "chipped:tripped_yellow_wool", "chipped:wickered_yellow_wool", "chipped:windmill_yellow_wool",
		"chipped:woved_yellow_wool", "chipped:cornered_yellow_wool", "chipped:crafted_yellow_wool", "chipped:harsh_quilted_yellow_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
