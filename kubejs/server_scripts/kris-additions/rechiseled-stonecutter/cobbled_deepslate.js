// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:cobbled_deepslate"
	var block_ids = [
		"minecraft:cobbled_deepslate", "minecraft:polished_deepslate", "minecraft:deepslate_bricks", "minecraft:cracked_deepslate_bricks",
		"minecraft:deepslate_tiles", "minecraft:cracked_deepslate_tiles", "minecraft:chiseled_deepslate", "rechiseled:cobbled_deepslate_beams",
		"rechiseled:cobbled_deepslate_beams_connecting", "rechiseled:cobbled_deepslate_brick_pattern", "rechiseled:cobbled_deepslate_brick_pattern_connecting", "rechiseled:cobbled_deepslate_brick_paving",
		"rechiseled:cobbled_deepslate_brick_paving_connecting", "rechiseled:cobbled_deepslate_bricks", "rechiseled:cobbled_deepslate_bricks_connecting", "rechiseled:cobbled_deepslate_large_tiles",
		"rechiseled:cobbled_deepslate_large_tiles_connecting", "rechiseled:cobbled_deepslate_paving", "rechiseled:cobbled_deepslate_paving_connecting", "rechiseled:cobbled_deepslate_pillar",
		"rechiseled:cobbled_deepslate_pillar_connecting", "rechiseled:cobbled_deepslate_pulverized", "rechiseled:cobbled_deepslate_pulverized_connecting", "rechiseled:cobbled_deepslate_rotated_bricks",
		"rechiseled:cobbled_deepslate_rotated_bricks_connecting", "rechiseled:cobbled_deepslate_small_tiles", "rechiseled:cobbled_deepslate_small_tiles_connecting", "rechiseled:cobbled_deepslate_squares",
		"rechiseled:cobbled_deepslate_squares_connecting", "rechiseled:cobbled_deepslate_stripes", "rechiseled:cobbled_deepslate_stripes_connecting", "rechiseled:cobbled_deepslate_tiles",
		"rechiseled:cobbled_deepslate_tiles_connecting", "rechiseled:cobbled_deepslate_worn_stripes", "rechiseled:cobbled_deepslate_worn_stripes_connecting", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
