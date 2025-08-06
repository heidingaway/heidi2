---
uri: https://gcxgce.sharepoint.com/teams/10001579/#budget
title: Budget
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_financial_management
- https://gcxgce.sharepoint.com/teams/10001579/#budget
- https://gcxgce.sharepoint.com/teams/10001579/#budget_status
- https://gcxgce.sharepoint.com/teams/10001579/#position
draft: false
---

## Related Links

- [[area_financial_management]]
- [[budget_status]]
- [[position]]

## Semantic Connections

```mermaid
graph TD
  Budget["Budget"]:::current-page-node
  area_financial_management["area_financial_management"]
  position["position"]
  budget_status["budget_status"]
  Budget-->|" has "|budget_status
  position-->|" fundedBy "|Budget
  Budget-->|" funds "|position
  Budget-->|" subClassOf "|area_financial_management
```
