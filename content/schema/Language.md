---
title: Language
created: 2025-07-27
modified: 2025-08-03
tags: []
context: schema
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[Intangible]]'
entities:
- https://schema.org/Intangible
- https://schema.org/Language
---

## Related Links

- [[Intangible]]

## Semantic Connections

```mermaid
graph TD
  Language["Language<br>+ label: Language<br>+ comment: //en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]]."]:::current-page-node
  Intangible["Intangible<br>+ label: Intangible<br>+ comment: A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc."]
  Language-->|" subClassOf "|Intangible
```
