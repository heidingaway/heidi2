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
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isDeliveredBy
related:
- '[[function]]'
- '[[outcomestatement]]'
- '[[output]]'
- '[[stakeholder]]'
---

# businessLine

### Semantic Connections

```mermaid
graph TD
  businessLine["businessLine<br>+ label: Business Line<br>+ comment: Where is the work structured"]:::current-page-node
  output["output<br>+ label: Output<br>+ comment: What does it produce"]
  stakeholder["stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  function["function<br>+ label: Function"]
  outcomeStatement["outcomeStatement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  orgOntology["orgOntology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]
  function-->|" hasPart "|stakeholder
  stakeholder-->|" interactsWith "|output
  function-->|" hasPart "|businessLine
  businessLine-->|" delivers "|output
  outcomeStatement-->|" defines "|function
  output-->|" drives "|outcomeStatement
  stakeholder-->|" interactsWith "|businessLine
  orgOntology-->|" subject "|function
```