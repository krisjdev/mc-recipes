// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:gray_wool"
	var block_ids = [
		"chipped:barky_gray_wool", "chipped:blocky_gray_wool", "chipped:bundled_gray_wool", "chipped:cross_haired_gray_wool",
		"chipped:cubed_gray_wool", "chipped:knitted_gray_wool", "chipped:patched_gray_wool", "chipped:rectangle_gray_wool",
		"chipped:ribbled_gray_wool", "chipped:scaled_gray_wool", "chipped:soft_gray_wool", "chipped:stringed_gray_wool",
		"chipped:tiled_gray_wool", "chipped:tripped_gray_wool", "chipped:wickered_gray_wool", "chipped:windmill_gray_wool",
		"chipped:woved_gray_wool", "chipped:cornered_gray_wool", "chipped:crafted_gray_wool", "chipped:harsh_quilted_gray_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
