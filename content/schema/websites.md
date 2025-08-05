---
title: WebSite
aliases:
- WebSite
- WebSites
created: 2025-07-27
modified: 2025-08-03
tags: schema, gct
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[CreativeWork]]'
entities:
- http://www.thesaurus.gc.ca/#
- http://www.thesaurus.gc.ca/#in_information_and_communications
- http://www.thesaurus.gc.ca/#internet
- http://www.thesaurus.gc.ca/#st_science_and_technology
- http://www.thesaurus.gc.ca/#templates
- http://www.thesaurus.gc.ca/#web_usability
- http://www.thesaurus.gc.ca/#websites
- https://schema.org/CreativeWork
---

> A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.[^1]

[^1]: [WebSite - Schema.org Type](https://schema.org/WebSite)

## Related Links

- [[CreativeWork]]

## Semantic Connections

```mermaid
graph TD
  WebSite["WebSite"]:::current-page-node
  in_information_and_communications["in_information_and_communications"]
  internet["internet"]
  st_science_and_technology["st_science_and_technology"]
  httpwwwthesaurusgcca["http:/www.thesaurus.gc.ca/#"]
  web_usability["web_usability"]
  templates["templates"]
  CreativeWork["CreativeWork<br>+ label: CreativeWork<br>+ comment: The most generic kind of creative work, including books, movies, photographs, software programs, etc."]
  WebSite-->|" narrower "|web_usability
  internet-->|" narrower "|WebSite
  web_usability-->|" broader "|WebSite
  WebSite-->|" subClassOf "|CreativeWork
  WebSite-->|" related "|templates
  WebSite-->|" broader "|in_information_and_communications
  WebSite-->|" inScheme "|httpwwwthesaurusgcca
  WebSite-->|" broader "|internet
  templates-->|" related "|WebSite
  WebSite-->|" broader "|st_science_and_technology
  in_information_and_communications-->|" narrower "|WebSite
  st_science_and_technology-->|" narrower "|WebSite
```
