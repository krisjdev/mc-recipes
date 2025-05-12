// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:green_wool"
	var block_ids = [
		"chipped:barky_green_wool", "chipped:blocky_green_wool", "chipped:bundled_green_wool", "chipped:cross_haired_green_wool",
		"chipped:cubed_green_wool", "chipped:knitted_green_wool", "chipped:patched_green_wool", "chipped:rectangle_green_wool",
		"chipped:ribbled_green_wool", "chipped:scaled_green_wool", "chipped:soft_green_wool", "chipped:stringed_green_wool",
		"chipped:tiled_green_wool", "chipped:tripped_green_wool", "chipped:wickered_green_wool", "chipped:windmill_green_wool",
		"chipped:woved_green_wool", "chipped:cornered_green_wool", "chipped:crafted_green_wool", "chipped:harsh_quilted_green_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
