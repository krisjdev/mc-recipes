// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_wool"
	var block_ids = [
		"chipped:barky_brown_wool", "chipped:blocky_brown_wool", "chipped:bundled_brown_wool", "chipped:cross_haired_brown_wool",
		"chipped:cubed_brown_wool", "chipped:knitted_brown_wool", "chipped:patched_brown_wool", "chipped:rectangle_brown_wool",
		"chipped:ribbled_brown_wool", "chipped:scaled_brown_wool", "chipped:soft_brown_wool", "chipped:stringed_brown_wool",
		"chipped:tiled_brown_wool", "chipped:tripped_brown_wool", "chipped:wickered_brown_wool", "chipped:windmill_brown_wool",
		"chipped:woved_brown_wool", "chipped:cornered_brown_wool", "chipped:crafted_brown_wool", "chipped:harsh_quilted_brown_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
