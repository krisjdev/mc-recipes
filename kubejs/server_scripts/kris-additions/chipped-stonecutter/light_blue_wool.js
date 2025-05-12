// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:light_blue_wool"
	var block_ids = [
		"chipped:barky_light_blue_wool", "chipped:blocky_light_blue_wool", "chipped:bundled_light_blue_wool", "chipped:cross_haired_light_blue_wool",
		"chipped:cubed_light_blue_wool", "chipped:knitted_light_blue_wool", "chipped:patched_light_blue_wool", "chipped:rectangle_light_blue_wool",
		"chipped:ribbled_light_blue_wool", "chipped:scaled_light_blue_wool", "chipped:soft_light_blue_wool", "chipped:stringed_light_blue_wool",
		"chipped:tiled_light_blue_wool", "chipped:tripped_light_blue_wool", "chipped:wickered_light_blue_wool", "chipped:windmill_light_blue_wool",
		"chipped:woved_light_blue_wool", "chipped:cornered_light_blue_wool", "chipped:crafted_light_blue_wool", "chipped:harsh_quilted_light_blue_wool",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
