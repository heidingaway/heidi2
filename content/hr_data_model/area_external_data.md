---
uri: https://gcxgce.sharepoint.com/teams/10001579/#area_external_data
title: External Data
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#address
- https://gcxgce.sharepoint.com/teams/10001579/#area_external_data
- https://gcxgce.sharepoint.com/teams/10001579/#calendar
- https://gcxgce.sharepoint.com/teams/10001579/#core_support_data
draft: false
---

## Related Links

- [[address]]
- [[area_external_data]]
- [[calendar]]
- [[core_support_data]]

## Semantic Connections

```mermaid
graph TD
  External_Data["External Data"]:::current-page-node
  core_support_data["core_support_data"]
  calendar["calendar"]
  address["address"]
  calendar-->|" subClassOf "|External_Data
  External_Data-->|" subClassOf "|core_support_data
  address-->|" subClassOf "|External_Data
```
