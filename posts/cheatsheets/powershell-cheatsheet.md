---
title: Powershell Cheatsheet
description: This is a basic Powersheel with tips for navigation, set alias,
  configure profiles and the most common actions
img: ./resources/powershell/powershell-logo.png
tags:
  - powershell
  - terminal
  - console
  - ps
  - alias
---
# Navigation

when navigating via command line you can type partially the names and use * for autcomplete. All the options will be available pressing `tab`

<!-- TODO: Paste gif -->

# Commands

## Filter string

| Command                                       | Description                                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Select-String -Pattern [REGEX]`              | Filter the input passed as `|`                                                                                               |
| `Select-String -Path [PATH] -Pattern [REGEX]` | Search the _Pattern_ specified inside the files provided in the path. You could provide a wildcard in the `[PATH]` as `*.cs` |


## Navigation commands

| Command   | Description                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tree /f` | Print the tree file structure from the current directory. The `/f` specifies to list the file extension.                                                        |
| `ii .`    | Open a windows explorer in the current path                                                                                                                     |
| `pushd`   | Save the current path in a memory stack. If you provide a path as an argument, the current one will still be saved but, after it will move to the one provided. |
| `popd`    | change the current directory to the last one saved using `pushd` (yes, you can build a path stack using it more than one time)                                  |

<!-- TODO: List of commands to add -->
<!-- 1. Create Alias  -->

<!-- TODO: Create areas for how to create a profile -->

# References

Other Powershell cheatsheets I use:

http://ramblingcookiemonster.github.io/images/Cheat-Sheets/powershell-basic-cheat-sheet2.pdf

https://gist.github.com/pcgeek86/336e08d1a09e3dd1a8f0a30a9fe61c8a
