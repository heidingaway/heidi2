---
uri: https://gcxgce.sharepoint.com/teams/10001579/#organization
title: Organization
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#address
- https://gcxgce.sharepoint.com/teams/10001579/#area_organization
- https://gcxgce.sharepoint.com/teams/10001579/#mgmt_resource_results_structure
- https://gcxgce.sharepoint.com/teams/10001579/#organization
- https://gcxgce.sharepoint.com/teams/10001579/#organization_mandate
- https://gcxgce.sharepoint.com/teams/10001579/#organization_relationship
- https://gcxgce.sharepoint.com/teams/10001579/#position
draft: false
---

## Related Links

- [[address]]
- [[area_organization]]
- [[mgmt_resource_results_structure]]
- [[organization]]
- [[organization_relationship]]
- [[position]]

## Semantic Connections

```mermaid
graph TD
  Organization["Organization"]:::current-page-node
  area_organization["area_organization"]
  address["address"]
  mgmt_resource_results_structure["mgmt_resource_results_structure"]
  organization_mandate["organization_mandate"]
  position["position"]
  organization_relationship["organization_relationship"]
  Organization-->|" subClassOf "|area_organization
  Organization-->|" includes "|position
  Organization-->|" contactedAt "|address
  Organization-->|" relatesTo "|organization_relationship
  Organization-->|" has "|mgmt_resource_results_structure
  Organization-->|" has "|organization_mandate
  position-->|" belongsTo "|Organization
```
