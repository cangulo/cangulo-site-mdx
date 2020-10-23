#!/bin/bash
#   Backup Config using dconf

current_date=$(date +%Y%m%d)
dconf dump / >backup-elementary-$current_date
