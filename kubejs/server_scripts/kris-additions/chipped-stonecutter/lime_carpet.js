// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:lime_carpet"
	var block_ids = [
		"chipped:barky_lime_carpet", "chipped:blocky_lime_carpet", "chipped:bundled_lime_carpet", "chipped:cross_haired_lime_carpet",
		"chipped:cubed_lime_carpet", "chipped:knitted_lime_carpet", "chipped:patched_lime_carpet", "chipped:rectangle_lime_carpet",
		"chipped:ribbled_lime_carpet", "chipped:scaled_lime_carpet", "chipped:soft_lime_carpet", "chipped:stringed_lime_carpet",
		"chipped:tiled_lime_carpet", "chipped:tripped_lime_carpet", "chipped:wickered_lime_carpet", "chipped:windmill_lime_carpet",
		"chipped:woved_lime_carpet", "chipped:cornered_lime_carpet", "chipped:crafted_lime_carpet", "chipped:harsh_quilted_lime_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
