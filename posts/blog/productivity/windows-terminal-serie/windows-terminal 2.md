---
title: Windows Terminal Tips for Powershell users 2
date: 2020-10-25
description: This post explains some tips for using Powershell in the bew Windows Terminal
img: ./resources/Windows-Terminal.png
tags:
    - terminal
    - console
    - powershell
    - windows-terminal
---

## Call Custom Profiles with a initial method call

If you create a specific profile for a domain you use a lot, e.g. Amazon operations, you can create a PS sesion which use that profile and which calls a method at start. Let's say you want to open a sesion to login in AWS with your MFA code. 

1. Define the [PS Profile](www.google.es)
2. Call the login method at the end
3. Define the next config in the Windows Terminal settings:

```json
test:{
    test1:1
}
```

## Call Custom Profiles