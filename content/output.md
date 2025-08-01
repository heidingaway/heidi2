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
links:
- '[[businessline]]'
- '[[outcomestatement]]'
- '[[stakeholder]]'
---

# Output

---

### Semantic Connections

```mermaid
graph TD
  output["output"]
  Class["Class"]
  Output["Output"]
  What_does_it_produce["What does it produce"]
  outcomeStatement["outcomeStatement<br>+ type: Class<br>+ type: organizeAction"]
  stakeholder["stakeholder"]
  businessLine["businessLine"]
  drives["drives<br>+ type: ObjectProperty"]
  delivers["delivers<br>+ type: ObjectProperty"]
```