---
title: Stakeholder
aliases: []
created: 2025-07-28
modified: 2025-08-01
tags: []
date: null
description: null
draft: false
permalink: null
entities:
- relationship: http://www.w3.org/2000/01/rdf-schema#subClassOf
  entity: https://gcxgce.sharepoint.com/teams/10001579/#function
- relationship: http://www.w3.org/2000/01/rdf-schema#label
  entity: Stakeholder
- relationship: http://www.w3.org/2000/01/rdf-schema#comment
  entity: Who interacts with it?
- relationship: https://gcxgce.sharepoint.com/teams/10001579/#interactsWith
  entity: https://gcxgce.sharepoint.com/teams/10001579/#businessLine
- relationship: https://gcxgce.sharepoint.com/teams/10001579/#interactsWith
  entity: https://gcxgce.sharepoint.com/teams/10001579/#output
- inverse_relationship: http://purl.org/dc/terms/hasPart
  entity: https://gcxgce.sharepoint.com/teams/10001579/#function
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#interactsWith
links:
- '[[businessline]]'
- '[[function]]'
- '[[output]]'
---

# Stakeholder

---

### Semantic Connections

```mermaid
graph TD
  Stakeholder["Stakeholder"]
  function["function<br>+ type: Class"]
  Who_interacts_with_it["Who interacts with it"]
  businessLine["businessLine"]
  output["output<br>+ type: Class"]
  interactsWith["interactsWith<br>+ type: ObjectProperty"]
  orgOntology["orgOntology<br>+ type: Ontology"]
  orgOntology-->|" subject "|function
```