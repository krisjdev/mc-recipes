// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:blue_wool"
	var block_ids = [
		"chipped:barky_blue_wool", "chipped:blocky_blue_wool", "chipped:bundled_blue_wool", "chipped:cross_haired_blue_wool",
		"chipped:cubed_blue_wool", "chipped:knitted_blue_wool", "chipped:patched_blue_wool", "chipped:rectangle_blue_wool",
		"chipped:ribbled_blue_wool", "chipped:scaled_blue_wool", "chipped:soft_blue_wool", "chipped:stringed_blue_wool",
		"chipped:tiled_blue_wool", "chipped:tripped_blue_wool", "chipped:wickered_blue_wool", "chipped:windmill_blue_wool",
		"chipped:woved_blue_wool", "chipped:cornered_blue_wool", "chipped:crafted_blue_wool", "chipped:harsh_quilted_blue_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
