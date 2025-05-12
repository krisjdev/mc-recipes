// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:bone_block"
	var block_ids = [
		"chipped:cracked_bone_block", "chipped:crunched_bone_block", "chipped:dark_bone_block", "chipped:double_roped_bone_block",
		"chipped:fractured_bone_block", "chipped:gilded_basalt_bone_block", "chipped:inscribed_bone_block", "chipped:reinforced_bone_block",
		"chipped:roped_bone_block", "chipped:tiled_bone_block", "chipped:weaved_bone_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
