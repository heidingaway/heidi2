---
uri: https://gcxgce.sharepoint.com/teams/10001579/#classification
title: Classification
mermaid_layers: 1
entities:
- http://www.thesaurus.gc.ca/#
- http://www.thesaurus.gc.ca/#cataloguing
- http://www.thesaurus.gc.ca/#classification
- http://www.thesaurus.gc.ca/#coding
- http://www.thesaurus.gc.ca/#job_classification
- http://www.thesaurus.gc.ca/#pr_processes
- http://www.thesaurus.gc.ca/#taxonomy
draft: false
---

## Semantic Connections

```mermaid
graph TD
  Classification["Classification"]:::current-page-node
  pr_processes["pr_processes"]
  httpwwwthesaurusgcca["http:/www.thesaurus.gc.ca/#"]
  job_classification["job_classification"]
  cataloguing["cataloguing"]
  coding["coding"]
  taxonomy["taxonomy"]
  Classification-->|" related "|cataloguing
  Classification-->|" inScheme "|httpwwwthesaurusgcca
  pr_processes-->|" narrower "|Classification
  cataloguing-->|" related "|Classification
  taxonomy-->|" related "|Classification
  Classification-->|" narrower "|job_classification
  coding-->|" related "|Classification
  Classification-->|" related "|taxonomy
  job_classification-->|" broader "|Classification
  Classification-->|" broader "|pr_processes
  Classification-->|" related "|coding
```
