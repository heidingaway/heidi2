---
uri: https://gcxgce.sharepoint.com/teams/10001579/#organization_relationship
title: Organization Relationship
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_organization
- https://gcxgce.sharepoint.com/teams/10001579/#business_transformation_approach
- https://gcxgce.sharepoint.com/teams/10001579/#organization
- https://gcxgce.sharepoint.com/teams/10001579/#organization_design_structure
- https://gcxgce.sharepoint.com/teams/10001579/#organization_relationship
- https://gcxgce.sharepoint.com/teams/10001579/#position_pay
draft: false
---

## Related Links

- [[area_organization]]
- [[business_transformation_approach]]
- [[organization]]
- [[organization_design_structure]]
- [[organization_relationship]]
- [[position_pay]]

## Semantic Connections

```mermaid
graph TD
  Organization_Relationship["Organization Relationship"]:::current-page-node
  area_organization["area_organization"]
  position_pay["position_pay"]
  business_transformation_approach["business_transformation_approach"]
  organization_design_structure["organization_design_structure"]
  organization["organization"]
  position_pay-->|" uses "|Organization_Relationship
  Organization_Relationship-->|" subClassOf "|area_organization
  organization-->|" relatesTo "|Organization_Relationship
  Organization_Relationship-->|" usedBy "|position_pay
  business_transformation_approach-->|" areasofTransformation "|Organization_Relationship
  organization_design_structure-->|" designs "|Organization_Relationship
```
