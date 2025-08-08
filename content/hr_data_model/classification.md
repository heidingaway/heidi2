---
uri: https://gcxgce.sharepoint.com/teams/10001579/#classification
title: Classification
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_classification
- https://gcxgce.sharepoint.com/teams/10001579/#classification
- https://gcxgce.sharepoint.com/teams/10001579/#classification_decision
- https://gcxgce.sharepoint.com/teams/10001579/#classification_standard
- https://gcxgce.sharepoint.com/teams/10001579/#occupational_category
- https://gcxgce.sharepoint.com/teams/10001579/#occupational_group
draft: false
---

## Related Links

- [[area_classification]]
- [[classification]]
- [[classification_decision]]
- [[classification_standard]]
- [[occupational_group]]

## Semantic Connections

```mermaid
graph TD
  Classification["Classification"]:::current-page-node
  area_classification["area_classification"]
  classification_standard["classification_standard"]
  classification_decision["classification_decision"]
  occupational_category["occupational_category"]
  occupational_group["occupational_group"]
  occupational_category-->|" relatesTo "|Classification
  Classification-->|" brokenDownBy "|classification_standard
  Classification-->|" subClassOf "|area_classification
  Classification-->|" inheritsFrom "|classification_decision
  occupational_group-->|" relatesTo "|Classification
```
