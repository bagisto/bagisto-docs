---
title: Upgrading To bagisto 1.0.0 from 0.2.2 | Bagisto Web APIs Documentation
layout: default
---

# Upgrading To bagisto 1.0.0 from 0.2.2

If you want to migrate your project to the bagisto v1.0.0, then you need to follow some guidelines as listed below:

1. Initially, the user needs to take a backup of their project database.
2. Delete composer.lock and vendor.
3. Take a pull from [Bagisto v1.0.0](https://github.com/bagisto/bagisto){: target="\_blank" .link-color}.    There may be some conflicts, you need to resolve it by own.
3. Read for [backward incompatible changes](backward-incompatible.md){: target="\_blank" .link-color}

**Note**: The changes in core packages will be removed, if done.