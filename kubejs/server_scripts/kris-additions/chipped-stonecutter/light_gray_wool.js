// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_gray_wool"
	var block_ids = [
		"chipped:barky_light_gray_wool", "chipped:blocky_light_gray_wool", "chipped:bundled_light_gray_wool", "chipped:cross_haired_light_gray_wool",
		"chipped:cubed_light_gray_wool", "chipped:knitted_light_gray_wool", "chipped:patched_light_gray_wool", "chipped:rectangle_light_gray_wool",
		"chipped:ribbled_light_gray_wool", "chipped:scaled_light_gray_wool", "chipped:soft_light_gray_wool", "chipped:stringed_light_gray_wool",
		"chipped:tiled_light_gray_wool", "chipped:tripped_light_gray_wool", "chipped:wickered_light_gray_wool", "chipped:windmill_light_gray_wool",
		"chipped:woved_light_gray_wool", "chipped:cornered_light_gray_wool", "chipped:crafted_light_gray_wool", "chipped:harsh_quilted_light_gray_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
