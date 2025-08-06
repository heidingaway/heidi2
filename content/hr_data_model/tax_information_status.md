---
uri: https://gcxgce.sharepoint.com/teams/10001579/#tax_information_status
title: tax_information_status
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_employee
- https://gcxgce.sharepoint.com/teams/10001579/#tax_information
- https://gcxgce.sharepoint.com/teams/10001579/#tax_information_status
draft: false
---

## Related Links

- [[area_employee]]
- [[tax_information]]

## Semantic Connections

```mermaid
graph TD
  tax_information_status["tax_information_status"]:::current-page-node
  area_employee["area_employee"]
  tax_information["tax_information"]
  tax_information_status-->|" subClassOf "|area_employee
  tax_information-->|" has "|tax_information_status
```
