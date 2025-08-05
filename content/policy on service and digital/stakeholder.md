---
uri: https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
title: Stakeholder
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
- [[orgOntology]]
- [[outcome_statement]]
- [[output]]

## Semantic Connections

```mermaid
graph TD
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]:::current-page-node
  Function["Function<br>+ label: Function"]
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]
  OCHRO_Function_Ontology["OCHRO Function Ontology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  Stakeholder-->|" subClassOf "|Function
  Business_Line-->|" delivers "|Output
  Business_Line-->|" subClassOf "|Function
  Function-->|" hasPart "|Stakeholder
  Outcome_Statement-->|" defines "|Function
  Function-->|" hasPart "|Business_Line
  Stakeholder-->|" interacts_with "|Output
  OCHRO_Function_Ontology-->|" subject "|Function
  Output-->|" drives "|Outcome_Statement
  Stakeholder-->|" interacts_with "|Business_Line
```
