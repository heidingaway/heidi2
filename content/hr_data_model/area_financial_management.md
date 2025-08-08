---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_financial_management
title: Financial Management
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_financial_management
- https://gcxgce.sharepoint.com/teams/10001579/#budget
- https://gcxgce.sharepoint.com/teams/10001579/#budget_status
- https://gcxgce.sharepoint.com/teams/10001579/#core_support_data
draft: false
---

## Related Links

- [[area_financial_management]]
- [[budget]]
- [[budget_status]]
- [[core_support_data]]

## Semantic Connections

```mermaid
graph TD
  Financial_Management["Financial Management"]:::current-page-node
  core_support_data["core_support_data"]
  budget_status["budget_status"]
  budget["budget"]
  Financial_Management-->|" subClassOf "|core_support_data
  budget_status-->|" subClassOf "|Financial_Management
  budget-->|" subClassOf "|Financial_Management
```
