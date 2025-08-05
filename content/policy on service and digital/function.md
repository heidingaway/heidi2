---
uri: https://gcxgce.sharepoint.com/teams/10001579/#function
title: Function
mermaid_layers: 3
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#business_line
- https://gcxgce.sharepoint.com/teams/10001579/#function
- https://gcxgce.sharepoint.com/teams/10001579/#outcome_statement
- https://gcxgce.sharepoint.com/teams/10001579/#output
- https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
draft: false
---

## Related Links

- [[business_line]]
- [[outcome_statement]]
- [[output]]
- [[stakeholder]]

## Semantic Connections

```mermaid
graph TD
  Function["Function<br>+ label: Function"]:::current-page-node
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  Stakeholder-->|" subClassOf "|Function
  Business_Line-->|" delivers "|Output
  Business_Line-->|" subClassOf "|Function
  Function-->|" hasPart "|Stakeholder
  Function-->|" hasPart "|Business_Line
  Stakeholder-->|" interacts_with "|Output
  Output-->|" drives "|Outcome_Statement
  Stakeholder-->|" interacts_with "|Business_Line
```
