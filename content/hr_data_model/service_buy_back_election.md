---
uri: https://gcxgce.sharepoint.com/teams/10001579/#service_buy_back_election
title: Service Buy-Back Election
mermaid_layers: 1
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#area_employee
- https://gcxgce.sharepoint.com/teams/10001579/#external_employment_history
- https://gcxgce.sharepoint.com/teams/10001579/#service_buy_back_election
- https://gcxgce.sharepoint.com/teams/10001579/#service_buy_back_election_status
draft: false
---

## Related Links

- [[area_employee]]
- [[external_employment_history]]
- [[service_buy_back_election_status]]

## Semantic Connections

```mermaid
graph TD
  Service_Buy_Back_Election["Service Buy-Back Election"]:::current-page-node
  area_employee["area_employee"]
  service_buy_back_election_status["service_buy_back_election_status"]
  external_employment_history["external_employment_history"]
  Service_Buy_Back_Election-->|" has "|service_buy_back_election_status
  external_employment_history-->|" usedFor "|Service_Buy_Back_Election
  Service_Buy_Back_Election-->|" subClassOf "|area_employee
```
