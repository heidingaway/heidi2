---
uri: https://gcxgce.sharepoint.com/teams/10001579/#organization_model
title: Organization Model
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_organizational_design
- https://gcxgce.sharepoint.com/teams/10001579/#organization_design_structure
- https://gcxgce.sharepoint.com/teams/10001579/#organization_model
draft: false
---

## Related Links

- [[area_organizational_design]]
- [[organization_design_structure]]

## Semantic Connections

```mermaid
graph TD
  Organization_Model["Organization Model"]:::current-page-node
  area_organizational_design["area_organizational_design"]
  organization_design_structure["organization_design_structure"]
  Organization_Model-->|" subClassOf "|area_organizational_design
  Organization_Model-->|" includes "|organization_design_structure
```
