// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:red_mushroom_block"
	var block_ids = [
		"chipped:dark_dotted_red_mushroom_block", "chipped:dark_dusted_red_mushroom_block", "chipped:dark_freckled_red_mushroom_block", "chipped:dark_smooth_red_mushroom_block",
		"chipped:dark_spotted_red_mushroom_block", "chipped:dotted_red_mushroom_block", "chipped:dusted_red_mushroom_block", "chipped:freckled_red_mushroom_block",
		"chipped:light_dotted_red_mushroom_block", "chipped:light_dusted_red_mushroom_block", "chipped:light_freckled_red_mushroom_block", "chipped:light_smooth_red_mushroom_block",
		"chipped:light_spotted_red_mushroom_block", "chipped:smooth_red_mushroom_block", "chipped:spotted_red_mushroom_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
