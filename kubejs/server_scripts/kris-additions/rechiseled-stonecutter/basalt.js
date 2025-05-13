// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:basalt"
	var block_ids = [
		"minecraft:basalt", "minecraft:polished_basalt", "minecraft:smooth_basalt", "rechiseled:basalt_beams",
		"rechiseled:basalt_beams_connecting", "rechiseled:basalt_bordered", "rechiseled:basalt_bordered_connecting", "rechiseled:basalt_bordered_polished",
		"rechiseled:basalt_bordered_polished_connecting", "rechiseled:basalt_bricks", "rechiseled:basalt_bricks_connecting", "rechiseled:basalt_chiseled_piglin",
		"rechiseled:basalt_diagonal_tiles", "rechiseled:basalt_diagonal_tiles_connecting", "rechiseled:basalt_pattern", "rechiseled:basalt_pattern_connecting",
		"rechiseled:basalt_patterned", "rechiseled:basalt_patterned_connecting", "rechiseled:basalt_tiles", "rechiseled:basalt_tiles_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
