---
uri: https://gcxgce.sharepoint.com/teams/10001579/#budget_status
title: budget_status
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_financial_management
- https://gcxgce.sharepoint.com/teams/10001579/#budget
- https://gcxgce.sharepoint.com/teams/10001579/#budget_status
draft: false
---

## Related Links

- [[area_financial_management]]
- [[budget]]
- [[budget_status]]

## Semantic Connections

```mermaid
graph TD
  budget_status["budget_status"]:::current-page-node
  area_financial_management["area_financial_management"]
  budget["budget"]
  budget-->|" has "|budget_status
  budget_status-->|" subClassOf "|area_financial_management
```
