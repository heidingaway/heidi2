---
title: Article
created: 2025-07-27
modified: 2025-08-03
tags: []
draft: false
mermaid_layers: 1
permalink: null
subClassOf:
- '[[CreativeWork]]'
entities:
- https://schema.org/Article
- https://schema.org/CreativeWork
- https://schema.org/docs/collab/rNews
---

> An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.[^1]

[^1]: [Article - Schema.org Type](https://schema.org/Article)

## Related Links

- [[CreativeWork]]

## Semantic Connections

```mermaid
graph TD
  Article["Article<br>+ label: Article<br>+ comment: //blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html)."]:::current-page-node
  CreativeWork["CreativeWork<br>+ label: CreativeWork<br>+ comment: The most generic kind of creative work, including books, movies, photographs, software programs, etc."]
  rNews["rNews"]
  Article-->|" subClassOf "|CreativeWork
  Article-->|" contributor "|rNews
```
