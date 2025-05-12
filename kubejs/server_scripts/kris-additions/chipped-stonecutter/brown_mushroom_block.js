// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:brown_mushroom_block"
	var block_ids = [
		"chipped:dark_dusted_brown_mushroom_block", "chipped:dark_freckled_brown_mushroom_block", "chipped:dark_scaled_brown_mushroom_block", "chipped:dark_smooth_brown_mushroom_block",
		"chipped:dark_spotted_brown_mushroom_block", "chipped:dark_sprinkled_brown_mushroom_block", "chipped:dusted_brown_mushroom_block", "chipped:freckled_brown_mushroom_block",
		"chipped:light_dusted_brown_mushroom_block", "chipped:light_freckled_brown_mushroom_block", "chipped:light_scaled_brown_mushroom_block", "chipped:light_smooth_brown_mushroom_block",
		"chipped:light_spotted_brown_mushroom_block", "chipped:light_sprinkled_brown_mushroom_block", "chipped:scaled_brown_mushroom_block", "chipped:smooth_brown_mushroom_block",
		"chipped:spotted_brown_mushroom_block", "chipped:sprinkled_brown_mushroom_block", "chipped:white_dusted_brown_mushroom_block", "chipped:white_freckled_brown_mushroom_block",
		"chipped:white_spotted_brown_mushroom_block", "chipped:white_sprinkled_brown_mushroom_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
