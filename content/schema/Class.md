---
title: Class
created: 2025-07-27
modified: 2025-08-04
tags:
- prefix/rdfs
class:
- '[[Resource]]'
draft: false
mermaid_layers: 1
permalink: null
entities:
- http://www.w3.org/2000/01/rdf-schema#Class
- http://www.w3.org/2000/01/rdf-schema#Resource
---

## Related Links

- [[Resource]]

## Semantic Connections

```mermaid
graph TD
  Class["Class<br>+ label: Class<br>+ comment: The class of classes."]:::current-page-node
  Resource["Resource<br>+ label: Resource<br>+ comment: The class resource, everything."]
  Class-->|" subClassOf "|Resource
```
