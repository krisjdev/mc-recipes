// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_wool"
	var block_ids = [
		"chipped:barky_lime_wool", "chipped:blocky_lime_wool", "chipped:bundled_lime_wool", "chipped:cross_haired_lime_wool",
		"chipped:cubed_lime_wool", "chipped:knitted_lime_wool", "chipped:patched_lime_wool", "chipped:rectangle_lime_wool",
		"chipped:ribbled_lime_wool", "chipped:scaled_lime_wool", "chipped:soft_lime_wool", "chipped:stringed_lime_wool",
		"chipped:tiled_lime_wool", "chipped:tripped_lime_wool", "chipped:wickered_lime_wool", "chipped:windmill_lime_wool",
		"chipped:woved_lime_wool", "chipped:cornered_lime_wool", "chipped:crafted_lime_wool", "chipped:harsh_quilted_lime_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
