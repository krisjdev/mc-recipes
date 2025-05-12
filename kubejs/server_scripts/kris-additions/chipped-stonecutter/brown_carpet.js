// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_carpet"
	var block_ids = [
		"chipped:barky_brown_carpet", "chipped:blocky_brown_carpet", "chipped:bundled_brown_carpet", "chipped:cross_haired_brown_carpet",
		"chipped:cubed_brown_carpet", "chipped:knitted_brown_carpet", "chipped:patched_brown_carpet", "chipped:rectangle_brown_carpet",
		"chipped:ribbled_brown_carpet", "chipped:scaled_brown_carpet", "chipped:soft_brown_carpet", "chipped:stringed_brown_carpet",
		"chipped:tiled_brown_carpet", "chipped:tripped_brown_carpet", "chipped:wickered_brown_carpet", "chipped:windmill_brown_carpet",
		"chipped:woved_brown_carpet", "chipped:cornered_brown_carpet", "chipped:crafted_brown_carpet", "chipped:harsh_quilted_brown_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
