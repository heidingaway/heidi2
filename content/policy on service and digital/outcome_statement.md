---
uri: https://gcxgce.sharepoint.com/teams/10001579/#outcome_statement
title: Outcome Statement
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
- [[function]]
- [[output]]
- [[stakeholder]]

## Semantic Connections

```mermaid
graph TD
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]:::current-page-node
  Function["Function<br>+ label: Function"]
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]
  Stakeholder-->|" subClassOf "|Function
  Business_Line-->|" delivers "|Output
  Business_Line-->|" subClassOf "|Function
  Function-->|" hasPart "|Stakeholder
  Outcome_Statement-->|" defines "|Function
  Function-->|" hasPart "|Business_Line
  Stakeholder-->|" interacts_with "|Output
  Stakeholder-->|" interacts_with "|Business_Line
```
