---
uri: https://gcxgce.sharepoint.com/teams/10001579/#self_identification_group_membership
title: Self-Identification Group Membership *
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_person
- https://gcxgce.sharepoint.com/teams/10001579/#person
- https://gcxgce.sharepoint.com/teams/10001579/#self_identification_group_membership
draft: false
---

## Related Links

- [[area_person]]
- [[person]]
- [[self_identification_group_membership]]

## Semantic Connections

```mermaid
graph TD
  Self_Identification_Group_Membership_["Self-Identification Group Membership *"]:::current-page-node
  area_person["area_person"]
  person["person"]
  person-->|" memberOf "|Self_Identification_Group_Membership_
  Self_Identification_Group_Membership_-->|" subClassOf "|area_person
```
