---
title: output
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
- relationship: http://www.w3.org/2000/01/rdf-schema#label
  entity: Output
- relationship: http://www.w3.org/2000/01/rdf-schema#comment
  entity: What does it produce?
- relationship: https://gcxgce.sharepoint.com/teams/10001579/#drives
  entity: https://gcxgce.sharepoint.com/teams/10001579/#outcomeStatement
- inverse_relationship: https://gcxgce.sharepoint.com/teams/10001579/#interactsWith
  entity: https://gcxgce.sharepoint.com/teams/10001579/#stakeholder
- inverse_relationship: https://gcxgce.sharepoint.com/teams/10001579/#delivers
  entity: https://gcxgce.sharepoint.com/teams/10001579/#businessLine
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#drives
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#delivers
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isDrivenBy
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isDeliveredBy
related:
- '[[businessline]]'
- '[[function]]'
- '[[outcomestatement]]'
- '[[stakeholder]]'
---

# Output

### Semantic Connections

```mermaid
graph TD
  output["output<br>+ label: Output<br>+ comment: What does it produce"]:::current-page-node
  outcomeStatement["outcomeStatement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  stakeholder["stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  businessLine["businessLine<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  function["function<br>+ label: Function"]
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