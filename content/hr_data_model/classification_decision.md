---
uri: https://gcxgce.sharepoint.com/teams/10001579/#classification_decision
title: Classification Decision
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_classification
- https://gcxgce.sharepoint.com/teams/10001579/#classification
- https://gcxgce.sharepoint.com/teams/10001579/#classification_decision
- https://gcxgce.sharepoint.com/teams/10001579/#work_description
draft: false
---

## Related Links

- [[area_classification]]
- [[classification]]
- [[classification_decision]]
- [[work_description]]

## Semantic Connections

```mermaid
graph TD
  Classification_Decision["Classification Decision"]:::current-page-node
  area_classification["area_classification"]
  classification["classification"]
  work_description["work_description"]
  Classification_Decision-->|" subClassOf "|area_classification
  classification-->|" inheritsFrom "|Classification_Decision
  work_description-->|" has "|Classification_Decision
```
