// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:redstone_block"
	var block_ids = [
		"minecraft:redstone_block", "rechiseled:redstone_block_bordered", "rechiseled:redstone_block_bordered_connecting", "rechiseled:redstone_block_bricks",
		"rechiseled:redstone_block_bricks_connecting", "rechiseled:redstone_block_brick_bordered", "rechiseled:redstone_block_chiseled_clovers", "rechiseled:redstone_block_chiseled_clovers_connecting",
		"rechiseled:redstone_block_circles", "rechiseled:redstone_block_circles_connecting", "rechiseled:redstone_block_compressed", "rechiseled:redstone_block_compressed_connecting",
		"rechiseled:redstone_block_crushed", "rechiseled:redstone_block_diagonal_tiles", "rechiseled:redstone_block_diagonal_tiles_connecting", "rechiseled:redstone_block_patterned",
		"rechiseled:redstone_block_patterned_connecting", "rechiseled:redstone_block_paving", "rechiseled:redstone_block_paving_connecting", "rechiseled:redstone_block_pillar",
		"rechiseled:redstone_block_pillar_connecting", "rechiseled:redstone_block_polished", "rechiseled:redstone_block_polished_connecting", "rechiseled:redstone_block_scales",
		"rechiseled:redstone_block_scales_connecting", "rechiseled:redstone_block_small_tiles", "rechiseled:redstone_block_small_tiles_connecting", "rechiseled:redstone_block_smooth",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
