import re
import datetime

def main():
    
    # extracted from rechisled: chipped mod
    # although it seems to just touch on every single decorative minecraft block
    # so some stuff could be generated, such as the wood and terracotta

    source_blocks = [
        "acacia_door", "acacia_leaves", "acacia_log", "acacia_planks", "acacia_trapdoor", "amethyst_block", 
        "ancient_debris", "andesite", "bamboo_door", "bamboo_planks", "bamboo_trapdoor", "barrel", 
        "basalt", "birch_door", "birch_leaves", "birch_log", "birch_planks", "birch_trapdoor", "black_carpet", 
        "black_concrete", "black_glazed_terracotta", "black_stained_glass", "black_stained_glass_pane", "blackstone", 
        "black_terracotta", "black_wool", "blue_carpet", "blue_concrete", "blue_glazed_terracotta", "blue_ice", 
        "blue_stained_glass", "blue_stained_glass_pane", "blue_terracotta", "blue_wool", 
        "bone_block", "bookshelf", "bricks", "brown_carpet", "brown_concrete", "brown_glazed_terracotta", 
        "brown_mushroom_block", "brown_mushroom", "brown_stained_glass", "brown_stained_glass_pane", "brown_terracotta", 
        "brown_wool", "calcite", "carved_pumpkin", "cherry_door", "cherry_log", "cherry_planks", "cherry_trapdoor", 
        "clay", "coal_block", "cobblestone", "cobweb", "crimson_door", "crimson_fungus", "crimson_planks", 
        "crimson_roots", "crimson_stem", "crimson_trapdoor", "crying_obsidian", "cyan_carpet", "cyan_concrete", 
        "cyan_glazed_terracotta", "cyan_stained_glass", "cyan_stained_glass_pane", "cyan_terracotta", "cyan_wool", 
        "dark_oak_door", "dark_oak_leaves", "dark_oak_log", "dark_oak_planks", "dark_oak_trapdoor", "dark_prismarine", 
        "deepslate", "diamond_block", "diorite", "dirt", "dried_kelp_block", "dripstone_block", "emerald_block", 
        "end_stone", "gilded_blackstone", "glass", "glass_pane", "glowstone", "gold_block", "granite", "gravel", 
        "gray_carpet", "gray_concrete", "gray_glazed_terracotta", "gray_stained_glass", "gray_stained_glass_pane", 
        "gray_terracotta", "gray_wool", "green_carpet", "green_concrete", "green_glazed_terracotta", "green_stained_glass", 
        "green_stained_glass_pane", "green_terracotta", "green_wool", "hay_block", "ice", "iron_bars", "iron_block", 
        "jack_o_lantern", "jungle_door", "jungle_leaves", "jungle_log", "jungle_planks", "jungle_trapdoor", 
        "ladder", "lantern", "lapis_block", "light_blue_carpet", "light_blue_concrete", "light_blue_glazed_terracotta", 
        "light_blue_stained_glass", "light_blue_stained_glass_pane", "light_blue_terracotta", "light_blue_wool", 
        "light_gray_carpet", "light_gray_concrete", "light_gray_glazed_terracotta", "light_gray_stained_glass", 
        "light_gray_stained_glass_pane", "light_gray_terracotta", "light_gray_wool", "lime_carpet", 
        "lime_concrete", "lime_glazed_terracotta", "lime_stained_glass", "lime_stained_glass_pane", "lime_terracotta", 
        "lime_wool", "lodestone", "magenta_carpet", "magenta_concrete", "magenta_glazed_terracotta", "magenta_stained_glass", 
        "magenta_stained_glass_pane", "magenta_terracotta", "magenta_wool", "magma_block", "mangrove_door", 
        "mangrove_log", "mangrove_planks", "mangrove_roots", "mangrove_trapdoor", "melon", "moss_block", "mossy_cobblestone", 
        "mossy_stone_bricks", "mud_bricks", "mud", "mushroom_stem", "nether_bricks", "netherite_block", "netherrack", 
        "nether_sprouts", "nether_wart_block", "oak_door", "oak_leaves", "oak_log", "oak_planks", "oak_trapdoor", "obsidian", 
        "ochre_froglight", "orange_carpet", "orange_concrete", "orange_glazed_terracotta", "orange_stained_glass", "orange_stained_glass_pane", 
        "orange_terracotta", "orange_wool", "packed_ice", "packed_mud", "pearlescent_froglight", "pink_carpet", "pink_concrete", 
        "pink_glazed_terracotta", "pink_stained_glass", "pink_stained_glass_pane", "pink_terracotta", "pink_wool", "pointed_dripstone", 
        "prismarine", "pumpkin", "purple_carpet", "purple_concrete", "purple_glazed_terracotta", "purple_stained_glass", 
        "purple_stained_glass_pane", "purple_terracotta", "purple_wool", "purpur_block", "quartz_block", "raw_copper_block", 
        "raw_gold_block", "raw_iron_block", "red_carpet", "red_concrete", "red_glazed_terracotta", "red_mushroom_block", 
        "red_mushroom", "red_nether_bricks", "red_sandstone", "red_stained_glass", "red_stained_glass_pane", 
        "redstone_block", "redstone_lamp", "redstone_torch", "redstone_wall_torch", "red_terracotta", 
        "red_wool", "sand", "sandstone", "sea_lantern", "shroomlight", "smooth_stone", "snow_block", 
        "soul_lantern", "soul_sand", "sponge", "spruce_door", "spruce_leaves", "spruce_log", "spruce_planks", "spruce_trapdoor", 
        "stone", "stripped_acacia_log", "stripped_birch_log", "stripped_cherry_log", "stripped_crimson_stem", "stripped_dark_oak_log", 
        "stripped_jungle_log", "stripped_mangrove_log", "stripped_oak_log", "stripped_spruce_log", "stripped_warped_stem", 
        "terracotta", "torch", "tuff", "verdant_froglight", "vine", "wall_torch", "warped_door", "warped_fungus", 
        "warped_planks", "warped_roots", "warped_stem", "warped_trapdoor", "warped_wart_block", "waxed_copper_block", 
        "waxed_exposed_copper", "waxed_oxidized_copper", "waxed_weathered_copper", "white_carpet", "white_concrete", 
        "white_glazed_terracotta", "white_stained_glass", "white_stained_glass_pane", "white_terracotta", "white_wool", 
        "yellow_carpet", "yellow_concrete", "yellow_glazed_terracotta", "yellow_stained_glass", "yellow_stained_glass_pane", 
        "yellow_terracotta", "yellow_wool"
    ]


    all_chipped_blocks = open("all-chipped-blocks.txt", "r").readlines()

    # NOTE: "lantern" and "jack_o_lantern" *will* match - some clean up/checking necessary
    source_chipped_dict = {}

    # sort all relevant blocks with their key
    for block in source_blocks:
        r = re.compile(f"(?:^chipped)(.+{block}.*)")
        matching = list(filter(r.match, all_chipped_blocks))

        if len(matching) == 0:
            print(f"no matching blocks found for {block}")
            raise Exception()

        source_chipped_dict[block] = matching

        # remove blocks so they dont match multiple times
        all_chipped_blocks = [entry for entry in all_chipped_blocks if block not in matching]


    # generate the files
    compilation_timestamp = datetime.datetime.now().strftime('%a %D %H:%M')
    for source, blocks in source_chipped_dict.items():
        print(f"{source} has {len(blocks)} blocks, writing {source}.js")

        with open(f"{source}.js", "w") as f:
            f.write(f"// compiled by gen.py on {compilation_timestamp}\n")
            f.write("ServerEvents.recipes(event => {\n")
            f.write(f'\tvar source = "minecraft:{source}"\n')
            f.write("\tvar block_ids = [\n")

            blocks.insert(0, "\n") # insert empty entry so that the code below prints nicely
            for i in range(1, len(blocks)):
                blocks[i] = blocks[i].strip("\n")

                if i % 4 == 1:
                    f.write(f'\t\t"{blocks[i]}", ') # start of line
                elif i % 4 == 0:
                    f.write(f'"{blocks[i]}",\n') # end of line
                else:
                    f.write(f'"{blocks[i]}", ') # middle of line

        
            f.write("\n\t]\n")
            f.write("\tblock_ids.forEach(block => {\n")
            f.write("\t\tevent.stonecutting(block, source)\n")
            f.write("\t})\n})\n")

    

if __name__ == "__main__":
    main()