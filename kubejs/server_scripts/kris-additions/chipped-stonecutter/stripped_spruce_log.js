// compiled by gen.py on Mon 05/12/25 22:40
ServerEvents.recipes(event => {
	var source = "minecraft:stripped_spruce_log"
	var block_ids = [
		"chipped:carved_stripped_spruce_log", "chipped:chipped_stripped_spruce_log", "chipped:d_sign_stripped_spruce_log", "chipped:edged_stripped_spruce_log",
		"chipped:f_sign_stripped_spruce_log", "chipped:i_sign_stripped_spruce_log", "chipped:k_sign_stripped_spruce_log", "chipped:knotted_stripped_spruce_log",
		"chipped:l_sign_stripped_spruce_log", "chipped:layered_stripped_spruce_log", "chipped:lumpy_stripped_spruce_log", "chipped:m_sign_stripped_spruce_log",
		"chipped:patient_stripped_spruce_log", "chipped:reinforced_stripped_spruce_log", "chipped:sign_stripped_spruce_log", "chipped:stern_stripped_spruce_log",
		"chipped:wise_stripped_spruce_log", 
	]
	block_ids.forEach(block => {
		event.stonecutting(block, source)
	})
})
