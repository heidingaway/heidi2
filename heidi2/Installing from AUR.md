---
title: Installing from AUR
created: 2025-07-25
modified: 2025-08-03
tags: []
draft: true
mermaid_layers: 1
permalink: 
topic:
  - "[[Arch Linux]]"
---
# Installing from AUR
1. Clone from [[Github]]
`git clone https://github.com/someuser/my-awesome-app.git`
2. Change directory into the folder containing the clone
`cd my-awesome-app`
3. Install any dependencies
`sudo pacman -S libfoo libbar cmake ninja`
4. Build and install the package
`makepkg -si`
