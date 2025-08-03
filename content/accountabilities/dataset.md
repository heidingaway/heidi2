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
- https://schema.org/DataCatalog
- https://schema.org/dataset
---

> A body of structured information describing some topic(s) of interest.[^1]

[^1]: [Dataset - Schema.org Type](https://schema.org/Dataset)

## Related Links

- [[CreativeWork]]

## Semantic Connections

```mermaid
graph TD
  Dataset["Dataset<br>+ label: dataset<br>+ comment: A dataset contained in this catalog."]:::current-page-node
  DataCatalog["DataCatalog<br>+ label: DataCatalog<br>+ comment: A collection of datasets."]
  Dataset_1["Dataset<br>+ label: Dataset<br>+ comment: A body of structured information describing some topic(s) of interest."]
  CreativeWork["CreativeWork<br>+ label: CreativeWork<br>+ comment: The most generic kind of creative work, including books, movies, photographs, software programs, etc."]
  Dataset-->|" rangeIncludes "|Dataset_1
  Dataset-->|" subClassOf "|CreativeWork
  Dataset-->|" domainIncludes "|DataCatalog
```
