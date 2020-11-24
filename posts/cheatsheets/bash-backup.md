
| Command | Options                           | Remarks                                                                                                                                                       |
| ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alias` | `alias NAME=VALUE`                | `VALUE` should include characters escaped                                                                                                                     |
| `cheat` | `cheat COMMAND`                   | `COMMAND` you would like to get a cheatsheet                                                                                                                  |
| `grep`  | `[COMMAND] \| grep [WORD]`        | Filters the output lines of `[COMMAND]` that contains `[WORD]`                                                                                                |
| `grep`  | `[COMMAND] \| grep -E [Regex]`    | Filters the output lines of `[COMMAND]` by the `[Regex]` Check this  [cheatsheet for Regex](RegexCheatSheet.md)                                               |
| `grep`  | `[COMMAND] \| grep -v [WORD]`     | `-v` filters the not matching lines                                                                                                                           |
| `trail` | `[COMMAND] \| trail -n [NUM]`     | filters the previous command output to the latest `[NUM]` lines                                                                                               |
| `touch` | `touch [FILE]`                    | creates the file `[FILE]`                                                                                                                                     |
| `tee`   | `[COMMAND] \| tee [FILE]`         | Overwrites the `[FILE]` content with the `[COMMAND]` output (**stdout**).To Include the **stderr** concatenate `&` after `\|`                                 |
| `tee`   | `[COMMAND] \| tee -a [FILE]`      | Appends the `[COMMAND]` output (**stdout**) to the `[FILE]` content.To Include the **stderr** concatenate `&` after `\|`                                      |
| `vim`   | `vim [FILE]`                      | [Vim Cheatsheet](https://vim.rtorr.com)                                                                                                                       |
| `vim`   | `[COMMAND] \| vim -`              | Sends `[COMMAND]` output directly into **vim**. To copy a line to the system clipboard you should:1. Go to the line2. Type `:y+`                              |
| `vim`   | copy a text line in the clipboard | 1. Verify you have vim-gnome and copyQ (try to install it both with `sudo apt-get install`2. Enter in vim 3. Go to the line4. Type `:y+` 5. Paste it anywhere |
| `more`  | `[COMMAND] \| more -[N]`          | Display only the `[N]` lines of the `[COMMAND]` output and allows you to navigate line be line by pressing `[ENTER]` or `[N]` lines by pressing `[SPACE]`     |
| `more`  | `[COMMAND] \| more -[N] -d`       | Display only the `[N]` lines of the `[COMMAND]` output and display instructions to navigate through the text                                                  |
| `less`  |                                   |                                                                                                                                                               |
| `most`  |                                   |                                                                                                                                                               |
| `jq`    | `[COMMAND] \| jq`                 | [Json text handler in terminal](https://linuxhint.com/bash_jq_command/)                                                                                       |
| `sed`   | `sed [OPTIONS] [FILE]`            | Stream editor for filtering and transformt text, modify text                                                                                                  |

| Alias    | Command                                                          | Description                                                                                                        |
| -------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `hist`   | `history \| tail -n 20 \| grep -v \"hist\" `                     | List the last 20 commands and remove the ones that has the `hist` word                                             |
| `clear`  | `cls`                                                            | Clean the terminal                                                                                                 |
| `gedit`  | `io.elementary.code`                                             | Open any file with the Elementary text editor**(Only works on Elementary OS)**                                     |
| `open_f` | `currentFolder=$(pwd);``io.elementary.files $currentFolder -n &` | Open a new windows (`-n` of the Elementary file explorer in the current directory**(Only works on Elementary OS)** |
| `copy`   | `xclip -sel clipboard`                                           | Copy text to the system clipboard                                                                                  |
| `past`   | `xclip -sel clipboard -o`                                        | Read text from the system clipboard                                                                                |

| Command                       | Example           | Description                                                                                                    |
| :---------------------------- | ----------------- | :------------------------------------------------------------------------------------------------------------- |
| `alias`                       |                   | List all the alias configured                                                                                  |
| `alias [AliasName]=[Command]` | `alias cls=clear` | Please note the **alias will only be available per sesion**, as soon as you close the terminal it will be lost |