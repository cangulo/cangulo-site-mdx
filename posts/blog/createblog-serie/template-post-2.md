---
title: Test Post 2
description: This post is the second one created to test the responsive design
  customizations like alias
img: ./resources/gatsby-logo.png
date: 2020-06-07T15:04:10.000Z
tags:
  - test
  - createblogtag
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