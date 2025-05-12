// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:shroomlight"
	var block_ids = [
		"chipped:broken_shroomlight", "chipped:cracked_shroomlight", "chipped:double_inlayed_shroomlight", "chipped:edged_shroomlight_lantern",
		"chipped:fancy_shroomlight_lantern", "chipped:framed_shroomlight_lantern", "chipped:hived_shroomlight", "chipped:inlayed_shroomlight",
		"chipped:ornate_shroomlight_lantern", "chipped:polished_shroomlight", "chipped:reinforced_shroomlight", "chipped:shimmering_shroomlight",
		"chipped:shroomlight_lantern", "chipped:shroomlight_lodestone_side", "chipped:smooth_shroomlight", "chipped:thick_inlayed_shroomlight",
		"chipped:tiled_shroomlight_pillar", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
