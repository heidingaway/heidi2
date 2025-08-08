---
uri: https://gcxgce.sharepoint.com/teams/10001579/#collective_agreement
title: Collective Agreement
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_classification
- https://gcxgce.sharepoint.com/teams/10001579/#collective_agreement
- https://gcxgce.sharepoint.com/teams/10001579/#occupational_group
draft: false
---

## Related Links

- [[area_classification]]
- [[collective_agreement]]
- [[occupational_group]]

## Semantic Connections

```mermaid
graph TD
  Collective_Agreement["Collective Agreement"]:::current-page-node
  area_classification["area_classification"]
  occupational_group["occupational_group"]
  Collective_Agreement-->|" negotiatedFor "|occupational_group
  occupational_group-->|" has "|Collective_Agreement
  Collective_Agreement-->|" subClassOf "|area_classification
```
