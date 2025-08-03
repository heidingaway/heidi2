---
title: Class
created: 2025-07-27
modified: 2025-08-03
tags: []
class:
- '[[Resource]]'
context:
- '[[rdfs]]'
draft: false
mermaid_layers: 1
permalink: null
entities:
- http://www.w3.org/2000/01/rdf-schema#Class
- https://schema.org/DataType
---

## Semantic Connections

```mermaid
graph TD
  Class["Class"]:::current-page-node
  Class_1["Class<br>+ label: Class<br>+ comment: Class."]
  DataType["DataType<br>+ label: DataType<br>+ comment: The basic data types such as Integers, Strings, etc."]
  Class_1-->|" equivalentClass "|Class
  DataType-->|" subClassOf "|Class
```
