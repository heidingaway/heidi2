---
title: function
aliases: []
created: 2025-07-28
modified: 2025-08-01
tags: []
date: null
description: null
draft: false
hasPart:
- '[[businessLine]]'
- '[[Stakeholder]]'
permalink: null
entities:
- relationship: http://www.w3.org/1999/02/22-rdf-syntax-ns#type
  entity: http://www.w3.org/2000/01/rdf-schema#Class
- relationship: http://www.w3.org/2000/01/rdf-schema#label
  entity: Function
- relationship: http://purl.org/dc/terms/hasPart
  entity: https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
- relationship: http://purl.org/dc/terms/hasPart
  entity: https://gcxgce.sharepoint.com/teams/10001579/#businessLine
- inverse_relationship: http://purl.org/dc/terms/subject
  entity: https://gcxgce.sharepoint.com/teams/10001579/#orgOntology
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#subClassOf
  entity: https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#subClassOf
  entity: https://gcxgce.sharepoint.com/teams/10001579/#businessLine
- inverse_relationship: https://gcxgce.sharepoint.com/teams/10001579/#defines
  entity: https://gcxgce.sharepoint.com/teams/10001579/#outcomeStatement
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#interactsWith
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#defines
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: http://www.w3.org/2000/01/rdf-schema#hasPart
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: http://www.w3.org/2000/01/rdf-schema#hasPart
links:
- '[[businessline]]'
- '[[outcomestatement]]'
- '[[stakeholder]]'
---

# Function
hasPart:
  - "[[businessLine]]"
  - "[[Stakeholder]]"

---

### Semantic Connections

```mermaid
graph TD
  function["function"]
  Class["Class"]
  Function["Function"]
  stakeholder["stakeholder"]
  businessLine["businessLine"]
  orgOntology["orgOntology<br>+ type: Ontology"]
  orgOntology-->|" subject "|function
  outcomeStatement["outcomeStatement<br>+ type: Class<br>+ type: organizeAction"]
  interactsWith["interactsWith<br>+ type: ObjectProperty"]
  defines["defines<br>+ type: ObjectProperty"]
  hasPart["hasPart<br>+ type: ObjectProperty"]
```