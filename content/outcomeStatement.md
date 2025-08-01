---
title: outcomeStatement
aliases: []
created: 2025-07-28
modified: 2025-08-01
tags: []
date: null
description: null
draft: false
permalink: null
entities:
- relationship: http://www.w3.org/1999/02/22-rdf-syntax-ns#type
  entity: http://www.w3.org/2000/01/rdf-schema#Class
- relationship: http://www.w3.org/1999/02/22-rdf-syntax-ns#type
  entity: https://schema.org/organizeAction
- relationship: http://www.w3.org/2000/01/rdf-schema#label
  entity: Outcome Statement
- relationship: http://www.w3.org/2000/01/rdf-schema#comment
  entity: Why does this function exist?
- relationship: https://gcxgce.sharepoint.com/teams/10001579/#defines
  entity: https://gcxgce.sharepoint.com/teams/10001579/#function
- inverse_relationship: https://gcxgce.sharepoint.com/teams/10001579/#drives
  entity: https://gcxgce.sharepoint.com/teams/10001579/#output
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#drives
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#defines
links:
- '[[function]]'
- '[[output]]'
---

# outcomeStatement

---

### Semantic Connections

```mermaid
graph TD
  outcomeStatement["outcomeStatement"]
  Class["Class"]
  organizeAction["organizeAction"]
  Outcome_Statement["Outcome Statement"]
  Why_does_this_function_exist["Why does this function exist"]
  function["function<br>+ type: Class"]
  output["output<br>+ type: Class"]
  drives["drives<br>+ type: ObjectProperty"]
  defines["defines<br>+ type: ObjectProperty"]
  orgOntology["orgOntology<br>+ type: Ontology"]
  orgOntology-->|" subject "|function
```