---
uri: https://gcxgce.sharepoint.com/teams/10001579/#business_plan
title: Business Plan
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#business_plan
- https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_approach
- https://gcxgce.sharepoint.com/teams/10001579/#workforce_workplace_performance_measure
- https://gcxgce.sharepoint.com/teams/10001579/#workforce_workplace_planning
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[business_plan]]
- [[business_transformation_approach]]
- [[workforce_workplace_performance_measure]]
- [[workforce_workplace_planning]]

## Semantic Connections

```mermaid
graph TD
  Business_Plan["Business Plan"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  workforce_workplace_performance_measure["workforce_workplace_performance_measure"]
  business_transformation_approach["business_transformation_approach"]
  workforce_workplace_planning["workforce_workplace_planning"]
  Business_Plan-->|" includes "|business_transformation_approach
  Business_Plan-->|" subClassOf "|area_hr_planning_reporting
  workforce_workplace_planning-->|" usedFor "|Business_Plan
  Business_Plan-->|" achievedBy "|workforce_workplace_performance_measure
  workforce_workplace_performance_measure-->|" achieves "|Business_Plan
```
