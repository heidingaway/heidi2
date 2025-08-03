---
title: WebSite
created: 2025-07-27
modified: 2025-08-03
tags: []
context: schema
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[CreativeWork]]'
entities:
- https://schema.org/CreativeWork
- https://schema.org/WebSite
---

> A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.[^1]

[^1]: [WebSite - Schema.org Type](https://schema.org/WebSite)

## Related Links

- [[CreativeWork]]

## Semantic Connections

```mermaid
graph TD
  WebSite["WebSite<br>+ label: WebSite<br>+ comment: A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs."]:::current-page-node
  CreativeWork["CreativeWork<br>+ label: CreativeWork<br>+ comment: The most generic kind of creative work, including books, movies, photographs, software programs, etc."]
  WebSite-->|" subClassOf "|CreativeWork
```
