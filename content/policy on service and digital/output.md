---
title: Output
aliases:
- Output
created: 2025-08-04
modified: 2025-08-06
tags: []
draft: false
mermaid_layers: 3
permalink: null
uri: https://gcxgce.sharepoint.com/teams/10001579/#output
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#business_line
- https://gcxgce.sharepoint.com/teams/10001579/#function
- https://gcxgce.sharepoint.com/teams/10001579/#outcome_statement
- https://gcxgce.sharepoint.com/teams/10001579/#output
- https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
---

## Related Links

- [[business_line]]
- [[function]]
- [[outcome_statement]]
- [[stakeholder]]

## Semantic Connections

```mermaid
graph TD
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]:::current-page-node
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  Function["Function<br>+ label: Function"]
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  Outcome_Statement-->|" defines "|Function
  Function-->|" hasPart "|Business_Line
  Output-->|" drives "|Outcome_Statement
  Function-->|" hasPart "|Stakeholder
```
