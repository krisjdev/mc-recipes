This set of kubejs scripts adds stonecutting recipes to blocks from the Chipped mod, mainly so that they can be created using AE2's autocrafter system - as that supports stonecutting recipes without external blocks.

A set of useful regex commands if wanting to add more blocks:

- Select a set of blocks with a large list with ``^chipped.+blockname.*``
- Select a list of blocks found with the above regex with ``Ctrl+Shft+L`` (in vscode at least)
- Process a list of block names (i.e. to remove a prefix, and to add speechmarks) with ``(?:chipped:)(.+)``, replacing with ``"$1", ``