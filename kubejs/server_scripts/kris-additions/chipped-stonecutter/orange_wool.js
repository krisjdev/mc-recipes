// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:orange_wool"
	var block_ids = [
		"chipped:barky_orange_wool", "chipped:blocky_orange_wool", "chipped:bundled_orange_wool", "chipped:cross_haired_orange_wool",
		"chipped:cubed_orange_wool", "chipped:knitted_orange_wool", "chipped:patched_orange_wool", "chipped:rectangle_orange_wool",
		"chipped:ribbled_orange_wool", "chipped:scaled_orange_wool", "chipped:soft_orange_wool", "chipped:stringed_orange_wool",
		"chipped:tiled_orange_wool", "chipped:tripped_orange_wool", "chipped:wickered_orange_wool", "chipped:windmill_orange_wool",
		"chipped:woved_orange_wool", "chipped:cornered_orange_wool", "chipped:crafted_orange_wool", "chipped:harsh_quilted_orange_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
