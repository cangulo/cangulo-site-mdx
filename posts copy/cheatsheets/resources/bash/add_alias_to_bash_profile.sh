#!/bin/bash
#   Add The next list of alias to the bash profile

cd #Move to the home folder
alias_commands="\n\n\
# START: Personal Aliases Carlos Angulo\n\
\n\
alias hist=\"history | tail -n 20 | grep -v \"hist*\"\";\n\
alias cls=clear;                                        \n\
alias gedit=io.elementary.code;                         \n\
alias copy=\"xclip -sel clipboard\";                    \n\
alias paste_=\"xclip -sel clipboard -o\";               \n\
alias open_f=\"io.elementary.files -n\";\n\
\n\
# END: Personal Aliases Carlos Angulo\n"
echo -e $alias_commands >>.bashrc
