---
uri: https://gcxgce.sharepoint.com/teams/10001579/#orgOntology
title: OCHRO Function Ontology
mermaid_layers: 3
entities:
- https://gcxgce.sharepoint.com/teams/10001579/#business_line
- https://gcxgce.sharepoint.com/teams/10001579/#function
- https://gcxgce.sharepoint.com/teams/10001579/#orgOntology
- https://gcxgce.sharepoint.com/teams/10001579/#outcome_statement
- https://gcxgce.sharepoint.com/teams/10001579/#output
- https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
draft: false
---

## Related Links

- [[business_line]]
- [[function]]
- [[outcome_statement]]
- [[output]]
- [[stakeholder]]

## Semantic Connections

```mermaid
graph TD
  OCHRO_Function_Ontology["OCHRO Function Ontology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]:::current-page-node
  Function["Function<br>+ label: Function"]
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]
  Function-->|" hasPart "|Business_Line
  OCHRO_Function_Ontology-->|" subject "|Function
  Stakeholder-->|" subClassOf "|Function
  Business_Line-->|" delivers "|Output
  Business_Line-->|" subClassOf "|Function
  Stakeholder-->|" interacts_with "|Output
  Outcome_Statement-->|" defines "|Function
  Output-->|" drives "|Outcome_Statement
  Function-->|" hasPart "|Stakeholder
  Stakeholder-->|" interacts_with "|Business_Line
```
