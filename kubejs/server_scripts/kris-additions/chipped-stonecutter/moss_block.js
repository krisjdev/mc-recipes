// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:moss_block"
	var block_ids = [
		"chipped:blobby_moss_block", "chipped:blue_moss_block", "chipped:crunchy_moss_block", "chipped:lime_moss_block",
		"chipped:old_moss_block", "chipped:red_moss_block", "chipped:smooth_moss_block", "chipped:spongy_moss_block",
		"chipped:sprinkled_moss_block", "chipped:yellow_moss_block", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
