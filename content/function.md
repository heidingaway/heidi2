---
title: function
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
  entity: http://purl.org/dc/terms/hasPart
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: http://purl.org/dc/terms/hasPart
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isInteractedBy
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: https://gcxgce.sharepoint.com/teams/10001579/#isDefinedBy
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#domain
  entity: http://purl.org/dc/terms/partOf
- inverse_relationship: http://www.w3.org/2000/01/rdf-schema#range
  entity: http://purl.org/dc/terms/partOf
related:
- '[[businessline]]'
- '[[outcomestatement]]'
- '[[output]]'
- '[[stakeholder]]'
---

# Function

### Semantic Connections

```mermaid
graph TD
  function["function<br>+ label: Function"]:::current-page-node
  stakeholder["stakeholder<br>+ label: Stakeholder<br>+ comment: Who interacts with it"]
  businessLine["businessLine<br>+ label: Business Line<br>+ comment: Where is the work structured"]
  orgOntology["orgOntology<br>+ label: OCHRO Function Ontology<br>+ comment: An ontology for modeling Government of Canada functions.<br>+ versionInfo: v1.0"]
  outcomeStatement["outcomeStatement<br>+ label: Outcome Statement<br>+ comment: Why does this function exist"]
  output["output<br>+ label: Output<br>+ comment: What does it produce"]
  function-->|" hasPart "|stakeholder
  stakeholder-->|" interactsWith "|output
  function-->|" hasPart "|businessLine
  businessLine-->|" delivers "|output
  outcomeStatement-->|" defines "|function
  output-->|" drives "|outcomeStatement
  stakeholder-->|" interactsWith "|businessLine
  orgOntology-->|" subject "|function
```