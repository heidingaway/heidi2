---
uri: https://gcxgce.sharepoint.com/teams/10001579/#workforce_workplace_planning
title: Workforce & Workplace Planning
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#business_plan
- https://gcxgce.sharepoint.com/teams/10001579/#labour_data
- https://gcxgce.sharepoint.com/teams/10001579/#workforce_workplace_planning
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[business_plan]]
- [[labour_data]]
- [[workforce_workplace_planning]]

## Semantic Connections

```mermaid
graph TD
  Workforce__Workplace_Planning["Workforce & Workplace Planning"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  business_plan["business_plan"]
  labour_data["labour_data"]
  labour_data-->|" usedBy "|Workforce__Workplace_Planning
  Workforce__Workplace_Planning-->|" usedFor "|business_plan
  Workforce__Workplace_Planning-->|" subClassOf "|area_hr_planning_reporting
```
