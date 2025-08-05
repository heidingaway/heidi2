---
title: Administrative Area
aliases:
- Administrative Area
created: 2025-07-23
modified: 2025-08-04
tags:
- prefix/schema
date: null
description: null
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[Place]]'
entities:
- https://schema.org/AdministrativeArea
- https://schema.org/Place
---

> A geographical region, typically under the jurisdiction of a particular government.[^1]

[^1]: [AdministrativeArea - Schema.org Type](https://schema.org/AdministrativeArea)

## Related Links

- [[Place]]

## Semantic Connections

```mermaid
graph TD
  Administrative_Area["Administrative Area<br>+ label: AdministrativeArea<br>+ comment: A geographical region, typically under the jurisdiction of a particular government."]:::current-page-node
  Place["Place<br>+ label: Place<br>+ comment: Entities that have a somewhat fixed, physical extension."]
  Administrative_Area-->|" subClassOf "|Place
```
