#!/bin/bash
#   Deploy Project to surge.sh

echo "Deploying"

cd $(pwd)'/public'
surge

# array=("t6st1" "test2" "test3")

# for i in ${array[@]}; do
#     echo $i
# done

# echo -e "\n###    ArrayLength"${#array[@]}

# if [[ ${#array[@]} -eq 3 ]];then
#     echo -e "\n###      if-true"
# else
#     echo -e "\n###      if-false"
# fi