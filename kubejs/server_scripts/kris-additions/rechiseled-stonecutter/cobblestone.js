// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:cobblestone"
	var block_ids = [
		"minecraft:cobblestone", "minecraft:mossy_cobblestone", "rechiseled:cobblestone_beams", "rechiseled:cobblestone_beams_connecting",
		"rechiseled:cobblestone_brick_pattern", "rechiseled:cobblestone_brick_pattern_connecting", "rechiseled:cobblestone_brick_paving", "rechiseled:cobblestone_brick_paving_connecting",
		"rechiseled:cobblestone_chiseled_border", "rechiseled:cobblestone_chiseled_border_connecting", "rechiseled:cobblestone_crosses", "rechiseled:cobblestone_crosses_connecting",
		"rechiseled:cobblestone_dented", "rechiseled:cobblestone_dented_connecting", "rechiseled:cobblestone_inverted_dented", "rechiseled:cobblestone_inverted_dented_connecting",
		"rechiseled:cobblestone_large_squares", "rechiseled:cobblestone_paving", "rechiseled:cobblestone_paving_connecting", "rechiseled:cobblestone_pillar",
		"rechiseled:cobblestone_pillar_connecting", "rechiseled:cobblestone_polished", "rechiseled:cobblestone_pulverized", "rechiseled:cobblestone_pulverized_connecting",
		"rechiseled:cobblestone_rotated_bricks", "rechiseled:cobblestone_rotated_bricks_connecting", "rechiseled:cobblestone_sheared", "rechiseled:cobblestone_small_tiles",
		"rechiseled:cobblestone_small_tiles_connecting", "rechiseled:cobblestone_squares", "rechiseled:cobblestone_squares_connecting", "rechiseled:cobblestone_stripes",
		"rechiseled:cobblestone_stripes_connecting", "rechiseled:cobblestone_tiles", "rechiseled:cobblestone_tiles_connecting", "rechiseled:cobblestone_worn_stripes",
		"rechiseled:cobblestone_worn_stripes_connecting", "rechiseled:mossy_cobblestone_beams", "rechiseled:mossy_cobblestone_beams_connecting", "rechiseled:mossy_cobblestone_dented",
		"rechiseled:mossy_cobblestone_dented_connecting", "rechiseled:mossy_cobblestone_inverted_dented", "rechiseled:mossy_cobblestone_inverted_dented_connecting", "rechiseled:mossy_cobblestone_paving",
		"rechiseled:mossy_cobblestone_paving_connecting", "rechiseled:mossy_cobblestone_small_tiles", "rechiseled:mossy_cobblestone_small_tiles_connecting", "rechiseled:mossy_cobblestone_squares",
		"rechiseled:mossy_cobblestone_squares_connecting", "rechiseled:mossy_cobblestone_stripes", "rechiseled:mossy_cobblestone_stripes_connecting", "rechiseled:mossy_cobblestone_worn_stripes",
		"rechiseled:mossy_cobblestone_worn_stripes_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
