// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:redstone_lamp"
	var block_ids = [
		"chipped:edged_redstone_lamp", "chipped:edged_white_redstone_lamp", "chipped:fancy_redstone_lamp", "chipped:fancy_white_redstone_lamp",
		"chipped:hived_redstone_lamp", "chipped:hived_white_redstone_lamp", "chipped:inlayed_redstone_lamp", "chipped:inlayed_white_redstone_lamp",
		"chipped:nice_redstone_lamp", "chipped:nice_white_redstone_lamp", "chipped:ornate_redstone_lamp", "chipped:ornate_white_redstone_lamp",
		"chipped:reinforced_redstone_lamp", "chipped:reinforced_white_redstone_lamp", "chipped:smooth_redstone_lamp", "chipped:smooth_white_redstone_lamp",
		"chipped:thick_inlayed_redstone_lamp", "chipped:thick_white_inlayed_redstone_lamp", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
