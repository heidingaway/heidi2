---
title: Product
aliases:
- Product
created: 2025-08-04
modified: 2025-08-06
tags: []
draft: false
mermaid_layers: 1
permalink: null
uri: https://www.canada.ca/#product
entities:
- https://schema.org/Product
- https://schema.org/Thing
- https://schema.org/docs/collab/GoodRelationsTerms
---

## Related Links

- [[Thing]]

## Semantic Connections

```mermaid
graph TD
  Product["Product<br>+ label: Product<br>+ comment:  a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online."]:::current-page-node
  Thing["Thing<br>+ label: Thing<br>+ comment: The most generic type of item."]
  GoodRelationsTerms["GoodRelationsTerms"]
  Product-->|" subClassOf "|Thing
  Product-->|" contributor "|GoodRelationsTerms
```
