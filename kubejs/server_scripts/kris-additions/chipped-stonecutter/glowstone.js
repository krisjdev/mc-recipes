// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:glowstone"
	var block_ids = [
		"chipped:broken_glowstone", "chipped:bulbed_glowstone", "chipped:cracked_glowstone", "chipped:double_inlayed_glowstone",
		"chipped:edged_glowstone_lantern", "chipped:fancy_glowstone_lantern", "chipped:framed_glowstone_lantern", "chipped:glowing_lodestone_side",
		"chipped:glowstone_lantern", "chipped:hived_glowstone", "chipped:inlayed_glowstone", "chipped:nether_engraved_glowstone",
		"chipped:ornate_glowstone_lantern", "chipped:patterned_glowstone", "chipped:polished_glowstone", "chipped:shimmering_glowstone",
		"chipped:smooth_glowstone", "chipped:thick_inlayed_glowstone", "chipped:tiled_glowstone_pillar", "chipped:wither_engraved_glowstone",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
