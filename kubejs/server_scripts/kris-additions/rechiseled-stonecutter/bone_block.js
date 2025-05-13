// compiled by gen.py on Tue 05/13/25 14:12
ServerEvents.recipes(event => {
	var source = "minecraft:bone_block"
	var block_ids = [
		"rechiseled:bone_block_bordered", "rechiseled:bone_block_bordered_connecting", "rechiseled:bone_block_bundled", "rechiseled:bone_block_chiseled",
		"rechiseled:bone_block_chiseled_connecting", "minecraft:bone_block", "rechiseled:bone_block_connecting_connecting", "rechiseled:bone_block_cracked",
		"rechiseled:bone_block_decorated", "rechiseled:bone_block_decorated_bordered", "rechiseled:bone_block_decorated_bordered_connecting", "rechiseled:bone_block_inverted_tiles",
		"rechiseled:bone_block_inverted_tiles_connecting", "rechiseled:bone_block_patterned", "rechiseled:bone_block_patterned_connecting", "rechiseled:bone_block_pillar",
		"rechiseled:bone_block_pillar_connecting", "rechiseled:bone_block_rib", "rechiseled:bone_block_skull", "rechiseled:bone_block_smooth",

	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
