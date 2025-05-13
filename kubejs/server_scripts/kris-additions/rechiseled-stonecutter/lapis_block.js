// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:lapis_block"
	var block_ids = [
		"rechiseled:lapis_block_bordered", "rechiseled:lapis_block_bordered_connecting", "rechiseled:lapis_block_chiseled", "rechiseled:lapis_block_chiseled_connecting",
		"rechiseled:lapis_block_cobbled", "minecraft:lapis_block", "rechiseled:lapis_block_connecting_connecting", "rechiseled:lapis_block_crushed",
		"rechiseled:lapis_block_decorated", "rechiseled:lapis_block_decorated_connecting", "rechiseled:lapis_block_glossy", "rechiseled:lapis_block_glossy_connecting",
		"rechiseled:lapis_block_inverted_tiles", "rechiseled:lapis_block_inverted_tiles_connecting", "rechiseled:lapis_block_mosaic", "rechiseled:lapis_block_mosaic_connecting",
		"rechiseled:lapis_block_pattern", "rechiseled:lapis_block_pattern_connecting", "rechiseled:lapis_block_pillar", "rechiseled:lapis_block_pillar_connecting",
		"rechiseled:lapis_block_polished", "rechiseled:lapis_block_polished_connecting", "rechiseled:lapis_block_scales", "rechiseled:lapis_block_scales_connecting",
		"rechiseled:lapis_block_small_tiles", "rechiseled:lapis_block_small_tiles_connecting", "rechiseled:lapis_block_smooth", "rechiseled:lapis_block_stripes",
		"rechiseled:lapis_block_stripes_connecting", "rechiseled:lapis_block_swirling", "rechiseled:lapis_block_tiles", "rechiseled:lapis_block_tiles_connecting",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
