---
uri: https://gcxgce.sharepoint.com/teams/10001579/#service_buy_back_election_status
title: service_buy_back_election_status
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_employee
- https://gcxgce.sharepoint.com/teams/10001579/#service_buy_back_election
- https://gcxgce.sharepoint.com/teams/10001579/#service_buy_back_election_status
draft: false
---

## Related Links

- [[area_employee]]
- [[service_buy_back_election]]

## Semantic Connections

```mermaid
graph TD
  service_buy_back_election_status["service_buy_back_election_status"]:::current-page-node
  area_employee["area_employee"]
  service_buy_back_election["service_buy_back_election"]
  service_buy_back_election-->|" has "|service_buy_back_election_status
  service_buy_back_election_status-->|" subClassOf "|area_employee
```
