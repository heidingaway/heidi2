---
title: Dataset
aliases:
- Dataset
created: 2025-07-30
modified: 2025-08-03
tags: []
draft: false
subClassOf:
- '[[CreativeWork]]'
entities:
- https://schema.org/CreativeWork
- https://schema.org/Dataset
- https://schema.org/docs/collab/DatasetClass
---

> A body of structured information describing some topic(s) of interest.[^1]

[^1]: [Dataset - Schema.org Type](https://schema.org/Dataset)- [[CreativeWork]]- [[CreativeWork]]- [[CreativeWork]]- [[CreativeWork]]

## Related Links

- [[CreativeWork]]

## Semantic Connections

```mermaid
graph TD
  Dataset["Dataset<br>+ label: Dataset<br>+ comment: A body of structured information describing some topic(s) of interest."]:::current-page-node
  CreativeWork["CreativeWork<br>+ label: CreativeWork<br>+ comment: The most generic kind of creative work, including books, movies, photographs, software programs, etc."]
  Dataset_1["Dataset"]
  Dataset_2["Dataset"]
  Dataset_3["Dataset"]
  DatasetClass["DatasetClass"]
  Dataset-->|" equivalentClass "|Dataset_1
  Dataset-->|" equivalentClass "|Dataset_2
  Dataset-->|" equivalentClass "|Dataset_3
  Dataset-->|" subClassOf "|CreativeWork
  Dataset-->|" contributor "|DatasetClass
```
