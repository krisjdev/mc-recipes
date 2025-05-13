import re
import datetime
import os
import json

DATA_FOLDER = "rechiseled-data"

def main():
    
    json_files = os.listdir(DATA_FOLDER)
    source_chipped_dict = {}


    for file in json_files:
        with open(f"{DATA_FOLDER}/{file}", "r") as f:
            data = json.load(f)["entries"]
            ingredient = file[:-5]

            source_chipped_dict[ingredient] = []

            for entry in data:
                try:
                    source_chipped_dict[ingredient].append(entry["item"])
                except KeyError:
                    pass

                try:
                    source_chipped_dict[ingredient].append(entry["connecting_item"])
                except KeyError:
                    pass

    # for block, entry in source_chipped_dict.items():
        # print(f"\nblock: {block}\n\t{entry}")
    
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