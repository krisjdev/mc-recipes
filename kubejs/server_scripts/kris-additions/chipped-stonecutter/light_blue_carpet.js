// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_blue_carpet"
	var block_ids = [
		"chipped:barky_light_blue_carpet", "chipped:blocky_light_blue_carpet", "chipped:bundled_light_blue_carpet", "chipped:cross_haired_light_blue_carpet",
		"chipped:cubed_light_blue_carpet", "chipped:knitted_light_blue_carpet", "chipped:patched_light_blue_carpet", "chipped:rectangle_light_blue_carpet",
		"chipped:ribbled_light_blue_carpet", "chipped:scaled_light_blue_carpet", "chipped:soft_light_blue_carpet", "chipped:stringed_light_blue_carpet",
		"chipped:tiled_light_blue_carpet", "chipped:tripped_light_blue_carpet", "chipped:wickered_light_blue_carpet", "chipped:windmill_light_blue_carpet",
		"chipped:woved_light_blue_carpet", "chipped:cornered_light_blue_carpet", "chipped:crafted_light_blue_carpet", "chipped:harsh_quilted_light_blue_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
