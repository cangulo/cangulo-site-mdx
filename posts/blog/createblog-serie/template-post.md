---
title: Test Post
description: This post is created to test the responsive design customizations like alias
img: ./resources/gatsby-logo.png
date: 2020-06-07T15:04:10.000Z
tags:
  - test
  - createblogtag
resources:
- {  type: code, title: Github Repo, description: Here you can fine the code for the first project, link:   https://git-scm.com/docs/githooks}
- {  type: code, title: Github Repo, description: Here you can fine the code for the second project, link:   https://git-scm.com/docs/githooks}
- {  type: video , title: How to Test Video, description: Here I explain , link:   https://www.youtube.com/watch?v=CiPcfLXV07A}
references:
- ['githooks official docs','https://git-scm.com/docs/githooks']
- ['How do I modify my Git Bash profile in Windows?','https://superuser.com/questions/602872/how-do-i-modify-my-git-bash-profile-in-windows']
---

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5 
###### Header 6

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.


**Bold Text** 

*Italic Text*

`one line code`


```js
three line code javascript 
```

# Default tables

| Command model             | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `sed -i [OPTIONS] [FILE]` | Execute the `[OPTIONS]` directly in the `[FILE]`       |
| `sed '[X],[Y]d' [FILE]`   | delete the lines from the line `[X]` to the line `[Y]` |

# Custom MDX Components:

## Table

export const columns = [{property:"command",code:true},"description"];

export const tableData = [
  {
    command: "git checkout --track origin/NAME",
    description: "Create a local branchCreate",
  },
  {
    command: "git checkout -",
    description: "bla bla",
  }
];

<CustomTable 
	columns={columns}
	data={tableData} />