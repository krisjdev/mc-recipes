// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_gray_carpet"
	var block_ids = [
		"chipped:barky_light_gray_carpet", "chipped:blocky_light_gray_carpet", "chipped:bundled_light_gray_carpet", "chipped:cross_haired_light_gray_carpet",
		"chipped:cubed_light_gray_carpet", "chipped:knitted_light_gray_carpet", "chipped:patched_light_gray_carpet", "chipped:rectangle_light_gray_carpet",
		"chipped:ribbled_light_gray_carpet", "chipped:scaled_light_gray_carpet", "chipped:soft_light_gray_carpet", "chipped:stringed_light_gray_carpet",
		"chipped:tiled_light_gray_carpet", "chipped:tripped_light_gray_carpet", "chipped:wickered_light_gray_carpet", "chipped:windmill_light_gray_carpet",
		"chipped:woved_light_gray_carpet", "chipped:cornered_light_gray_carpet", "chipped:crafted_light_gray_carpet", "chipped:harsh_quilted_light_gray_carpet",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
