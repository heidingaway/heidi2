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
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isDrivenBy
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isDefinedBy
related:
- '[[businessline]]'
- '[[function]]'
- '[[output]]'
- '[[stakeholder]]'
---

# outcomeStatement

### Semantic Connections

```mermaid
graph TD
  outcomeStatement["outcomeStatement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]:::current-page-node
  function["function<br>+ label: Function"]
  output["output<br>+ label: Output<br>+ comment: What does it produce"]
  stakeholder["stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  businessLine["businessLine<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  orgOntology["orgOntology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]
  function-->|" hasPart "|stakeholder
  stakeholder-->|" interactsWith "|output
  businessLine-->|" delivers "|output
  function-->|" hasPart "|businessLine
  outcomeStatement-->|" defines "|function
  output-->|" drives "|outcomeStatement
  stakeholder-->|" interactsWith "|businessLine
  orgOntology-->|" subject "|function
```