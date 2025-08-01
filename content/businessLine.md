---
title: businessLine
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
  entity: Business Line
- relationship: http://www.w3.org/2000/01/rdf-schema#comment
  entity: Where is the work structured?
- relationship: https://gcxgce.sharepoint.com/teams/10001579/#delivers
  entity: https://gcxgce.sharepoint.com/teams/10001579/#output
- inverse_relationship: https://gcxgce.sharepoint.com/teams/10001579/#interactsWith
  entity: https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
- inverse_relationship: http://purl.org/dc/terms/hasPart
  entity: https://gcxgce.sharepoint.com/teams/10001579/#function
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#delivers
links:
- '[[function]]'
- '[[output]]'
- '[[stakeholder]]'
---

# BusinessLine

---

### Semantic Connections

```mermaid
graph TD
  businessLine["businessLine"]
  function["function<br>+ type: Class"]
  Business_Line["Business Line"]
  Where_is_the_work_structured["Where is the work structured"]
  output["output<br>+ type: Class"]
  stakeholder["stakeholder"]
  delivers["delivers<br>+ type: ObjectProperty"]
  orgOntology["orgOntology<br>+ type: Ontology"]
  orgOntology-->|" subject "|function
```