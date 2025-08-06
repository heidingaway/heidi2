---
uri: https://gcxgce.sharepoint.com/teams/10001579/#work_arrangement_status
title: work_arrangement_status
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_employee
- https://gcxgce.sharepoint.com/teams/10001579/#work_arrangement
- https://gcxgce.sharepoint.com/teams/10001579/#work_arrangement_status
draft: false
---

## Related Links

- [[area_employee]]
- [[work_arrangement]]

## Semantic Connections

```mermaid
graph TD
  work_arrangement_status["work_arrangement_status"]:::current-page-node
  area_employee["area_employee"]
  work_arrangement["work_arrangement"]
  work_arrangement_status-->|" subClassOf "|area_employee
  work_arrangement-->|" has "|work_arrangement_status
```
