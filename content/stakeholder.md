---
title: stakeholder
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
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isInteractedBy
related:
- '[[businessline]]'
- '[[function]]'
- '[[outcomestatement]]'
- '[[output]]'
---

# Stakeholder

### Semantic Connections

```mermaid
graph TD
  stakeholder["stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]:::current-page-node
  businessLine["businessLine<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  output["output<br>+ label: Output<br>+ comment: What does it produce"]
  function["function<br>+ label: Function"]
  outcomeStatement["outcomeStatement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
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