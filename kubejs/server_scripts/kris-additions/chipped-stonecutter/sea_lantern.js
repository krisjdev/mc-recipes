// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:sea_lantern"
	var block_ids = [
		"chipped:broken_sea_lantern", "chipped:bulbed_sea_lantern", "chipped:cracked_sea_lantern", "chipped:double_inlayed_sea_lantern",
		"chipped:fancy_sea_lantern", "chipped:framed_sea_lantern", "chipped:hived_sea_lantern", "chipped:inlayed_sea_lantern",
		"chipped:ornate_sea_lantern", "chipped:polished_sea_lantern", "chipped:reinforced_sea_lantern", "chipped:sea_lodestone_side",
		"chipped:shimmering_sea_lantern", "chipped:smooth_sea_lantern", "chipped:special_sea_lantern", "chipped:thick_inlayed_sea_lantern",
		"chipped:tiled_sea_lantern_pillar", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
