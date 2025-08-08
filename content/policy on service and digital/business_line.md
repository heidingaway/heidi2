---
uri: https://gcxgce.sharepoint.com/teams/10001579/#business_line
title: Business Line
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
- [[stakeholder]]

## Semantic Connections

```mermaid
graph TD
  Business_Line["Business Line<br>+ label: Business Line<br>+ comment: Where is the work structured"]:::current-page-node
  Function["Function<br>+ label: Function"]
  Output["Output<br>+ label: Output<br>+ comment: What does it produce"]
  Stakeholder["Stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  Outcome_Statement["Outcome Statement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  OCHRO_Function_Ontology["OCHRO Function Ontology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]
  Business_Line-->|" delivers "|Output
  Output-->|" drives "|Outcome_Statement
  Outcome_Statement-->|" defines "|Function
  Function-->|" hasPart "|Stakeholder
  Function-->|" hasPart "|Business_Line
  Stakeholder-->|" interacts_with "|Output
  Business_Line-->|" subClassOf "|Function
  OCHRO_Function_Ontology-->|" subject "|Function
  Stakeholder-->|" interacts_with "|Business_Line
  Stakeholder-->|" subClassOf "|Function
```
