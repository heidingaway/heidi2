---
title: Stakeholder
aliases:
- Stakeholder
created: 2025-07-28
modified: 2025-08-03
tags: []
draft: false
mermaid_layers: 3
permalink: null
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#business_line
- https://gcxgce.sharepoint.com/teams/10001579/#function
- https://gcxgce.sharepoint.com/teams/10001579/#orgOntology
- https://gcxgce.sharepoint.com/teams/10001579/#outcome_statement
- https://gcxgce.sharepoint.com/teams/10001579/#output
- https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
---

## Related Links

- [[business_line]]
- [[function]]
- [[outcome_statement]]
- [[output]]

## Semantic Connections

```mermaid
graph TD
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]:::current-page-node
  Function["Function<br>+ label: Function"]
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  OCHRO_Function_Ontology["OCHRO Function Ontology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]
  Output-->|" drives "|Outcome_Statement
  Stakeholder-->|" subClassOf "|Function
  Stakeholder-->|" interactsWith "|Output
  Function-->|" hasPart "|Business_Line
  Stakeholder-->|" interactsWith "|Business_Line
  Outcome_Statement-->|" defines "|Function
  OCHRO_Function_Ontology-->|" subject "|Function
  Function-->|" hasPart "|Stakeholder
  Business_Line-->|" subClassOf "|Function
  Business_Line-->|" delivers "|Output
```
