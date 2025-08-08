---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_organization
title: Organization
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_organization
- https://gcxgce.sharepoint.com/teams/10001579/#core_workforce_data
- https://gcxgce.sharepoint.com/teams/10001579/#organization
- https://gcxgce.sharepoint.com/teams/10001579/#organization_mandate
- https://gcxgce.sharepoint.com/teams/10001579/#organization_relationship
- https://gcxgce.sharepoint.com/teams/10001579/#organization_status
draft: false
---

## Related Links

- [[area_organization]]
- [[core_workforce_data]]
- [[organization]]
- [[organization_relationship]]
- [[organization_status]]

## Semantic Connections

```mermaid
graph TD
  Organization["Organization"]:::current-page-node
  core_workforce_data["core_workforce_data"]
  organization_status["organization_status"]
  organization_mandate["organization_mandate"]
  organization["organization"]
  organization_relationship["organization_relationship"]
  organization_status-->|" subClassOf "|Organization
  organization_relationship-->|" subClassOf "|Organization
  organization_mandate-->|" subClassOf "|Organization
  organization-->|" subClassOf "|Organization
  Organization-->|" subClassOf "|core_workforce_data
```
