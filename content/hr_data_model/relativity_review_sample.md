---
uri: https://gcxgce.sharepoint.com/teams/10001579/#relativity_review_sample
title: relativity_review_sample
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_classification
- https://gcxgce.sharepoint.com/teams/10001579/#relativity_review
- https://gcxgce.sharepoint.com/teams/10001579/#relativity_review_sample
- https://gcxgce.sharepoint.com/teams/10001579/#work_description
draft: false
---

## Related Links

- [[area_classification]]
- [[relativity_review]]
- [[work_description]]

## Semantic Connections

```mermaid
graph TD
  relativity_review_sample["relativity_review_sample"]:::current-page-node
  area_classification["area_classification"]
  work_description["work_description"]
  relativity_review["relativity_review"]
  relativity_review-->|" uses "|relativity_review_sample
  relativity_review_sample-->|" includes "|work_description
  relativity_review_sample-->|" subClassOf "|area_classification
```
