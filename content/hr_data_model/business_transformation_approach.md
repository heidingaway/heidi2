---
uri: https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_approach
title: Business Transformation Approach
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_hr_planning_reporting
- https://gcxgce.sharepoint.com/teams/10001579/#business_plan
- https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_approach
- https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_outcome
- https://gcxgce.sharepoint.com/teams/10001579/#organization_relationship
draft: false
---

## Related Links

- [[area_hr_planning_reporting]]
- [[business_plan]]
- [[business_transformation_approach]]
- [[business_transformation_outcome]]
- [[organization_relationship]]

## Semantic Connections

```mermaid
graph TD
  Business_Transformation_Approach["Business Transformation Approach"]:::current-page-node
  area_hr_planning_reporting["area_hr_planning_reporting"]
  organization_relationship["organization_relationship"]
  business_transformation_outcome["business_transformation_outcome"]
  business_plan["business_plan"]
  Business_Transformation_Approach-->|" subClassOf "|area_hr_planning_reporting
  Business_Transformation_Approach-->|" has "|business_transformation_outcome
  Business_Transformation_Approach-->|" areasofTransformation "|organization_relationship
  business_plan-->|" includes "|Business_Transformation_Approach
```
