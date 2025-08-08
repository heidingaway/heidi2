---
uri: https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_outcome
title: Business Transformation Outcome
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_approach
- https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_outcome
- https://gcxgce.sharepoint.com/teams/10001579/#leave
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[business_transformation_approach]]
- [[business_transformation_outcome]]
- [[leave]]

## Semantic Connections

```mermaid
graph TD
  Business_Transformation_Outcome["Business Transformation Outcome"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  leave["leave"]
  business_transformation_approach["business_transformation_approach"]
  Business_Transformation_Outcome-->|" subClassOf "|area_hr_planning_reporting
  Business_Transformation_Outcome-->|" resultsIn "|leave
  business_transformation_approach-->|" has "|Business_Transformation_Outcome
```
