// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:cyan_wool"
	var block_ids = [
		"chipped:barky_cyan_wool", "chipped:blocky_cyan_wool", "chipped:bundled_cyan_wool", "chipped:cross_haired_cyan_wool",
		"chipped:cubed_cyan_wool", "chipped:knitted_cyan_wool", "chipped:patched_cyan_wool", "chipped:rectangle_cyan_wool",
		"chipped:ribbled_cyan_wool", "chipped:scaled_cyan_wool", "chipped:soft_cyan_wool", "chipped:stringed_cyan_wool",
		"chipped:tiled_cyan_wool", "chipped:tripped_cyan_wool", "chipped:wickered_cyan_wool", "chipped:windmill_cyan_wool",
		"chipped:woved_cyan_wool", "chipped:cornered_cyan_wool", "chipped:crafted_cyan_wool", "chipped:harsh_quilted_cyan_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
