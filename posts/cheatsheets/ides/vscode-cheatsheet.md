---
title: VS Code Cheatsheet
description: This post explains my VS Code customizations as well as the most
  important keyboard shortcuts I use
img: ./resources/vscode/vscode-logo.png
tags:
  - vscode
  - keyboard-shortcuts
  - shortcuts
---

## Default Keyboard Shortcuts

| keyboard shortcut    | Command             | Command Id                         |
| :------------------- | :------------------ | :--------------------------------- |
| `Ctrl+K Shift+Enter` | Pin Editor          | workbench.action.pinEditor         |
| `Ctrl+K Shift+Enter` | Unpin Editor        | workbench.action.unpinEditor       |
| `F6`                 | Focus Next Part     | workbench.action.focusNextPart     |
| `Shift F6`           | Focus Previous Part | workbench.action.focusPreviousPart |

## Command that I use more

1. Move around the UI using `F6` and `Shift F6`
2. List the files that I have open:
   1. `ctrl + p `
   2. type `edt`
3. List the terminal I have open:
   1. `ctrl + p `
   2. type `term`



It exists a Screencast mode! 
https://twitter.com/davidpine7/status/1362436467042189314?s=20

<!-- ## References -->
<!-- TODO: Create Navigation article -->
<!-- Example: navigation by symbols  -->
<!-- Example: navigation by files -->
<!-- Example: navigation as explained in the release notes 1.44.section *Workbench* -->
<!-- Example: separate queries* -->


<!-- TODO: Change UI -->
<!-- Release Notes 1.44 Section: Creating new Side Bar groups and moving panels -->


<!-- TODO: Check this page https://code.visualstudio.com/docs/getstarted/tips-and-tricks -->
<!-- TODO: Check last release notes https://code.visualstudio.com/updates/v1_47 -->

<!-- Git Lens -->
<!-- 1. Compare files between branches -->
<!-- 2. Enable Filter on typing feature-->


<!-- Create a task -->
<!-- https://code.visualstudio.com/docs/editor/tasks

{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Execute Postman Request per client number",
            "type": "shell",
            "command": "newman run CBDP-Performabashnce-Requests.postman_collection.json -e ${input:numberOfClients}Clients-CBDP-Performance.postman_environment.json --insecure",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        },
        {
            "label": "Execute Postman Request to all programs",
            "type": "shell",
            "command": "newman run CBDP-Performance-Requests.postman_collection.json -e 6Clients-CBDP-Performance.postman_environment.json 10Clients-CBDP-Performance.postman_environment.json --insecure",
            "group": "build"
        }
    ],
    "inputs": [
        {
            "id": "numberOfClients",
            "description": "Number of clients: Available 6, 10,15 and 20",
            "default": "6",
            "type": "promptString"
        },
    ]
}
 -->



