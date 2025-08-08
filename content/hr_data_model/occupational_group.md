---
uri: https://gcxgce.sharepoint.com/teams/10001579/#occupational_group
title: occupational_group
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_classification
- https://gcxgce.sharepoint.com/teams/10001579/#bargaining_agent
- https://gcxgce.sharepoint.com/teams/10001579/#classification
- https://gcxgce.sharepoint.com/teams/10001579/#collective_agreement
- https://gcxgce.sharepoint.com/teams/10001579/#occupational_group
- https://gcxgce.sharepoint.com/teams/10001579/#tbs_terms_conditions
draft: false
---

## Related Links

- [[area_classification]]
- [[bargaining_agent]]
- [[classification]]
- [[collective_agreement]]
- [[occupational_group]]

## Semantic Connections

```mermaid
graph TD
  occupational_group["occupational_group"]:::current-page-node
  area_classification["area_classification"]
  bargaining_agent["bargaining_agent"]
  collective_agreement["collective_agreement"]
  tbs_terms_conditions["tbs_terms_conditions"]
  classification["classification"]
  occupational_group-->|" has "|tbs_terms_conditions
  occupational_group-->|" has "|collective_agreement
  occupational_group-->|" relatesTo "|classification
  collective_agreement-->|" negotiatedFor "|occupational_group
  occupational_group-->|" subClassOf "|area_classification
  occupational_group-->|" has "|bargaining_agent
```
