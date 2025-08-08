---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_organizational_design
title: Organizational Design
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_organizational_design
- https://gcxgce.sharepoint.com/teams/10001579/#hr_business_line_data
- https://gcxgce.sharepoint.com/teams/10001579/#mgmt_resource_results_structure
- https://gcxgce.sharepoint.com/teams/10001579/#organization_design_structure
- https://gcxgce.sharepoint.com/teams/10001579/#organization_model
draft: false
---

## Related Links

- [[area_organizational_design]]
- [[hr_business_line_data]]
- [[mgmt_resource_results_structure]]
- [[organization_design_structure]]
- [[organization_model]]

## Semantic Connections

```mermaid
graph TD
  Organizational_Design["Organizational Design"]:::current-page-node
  hr_business_line_data["hr_business_line_data"]
  organization_model["organization_model"]
  mgmt_resource_results_structure["mgmt_resource_results_structure"]
  organization_design_structure["organization_design_structure"]
  Organizational_Design-->|" subClassOf "|hr_business_line_data
  organization_design_structure-->|" subClassOf "|Organizational_Design
  mgmt_resource_results_structure-->|" subClassOf "|Organizational_Design
  organization_model-->|" subClassOf "|Organizational_Design
```
