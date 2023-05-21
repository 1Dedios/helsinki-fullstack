---
title: Browser and Server - onClick "save" button
---

Sequence Diagram showing browser and server interactions when a new note is inserted into input and "save" button is clicked (Traditional Browser).

<br>
<br>

``` mermaid

sequenceDiagram
    browser->>server: GET - https://studies.cs.helsinki.fi/exampleapp/data.json
    Note over browser: User entered text in input field <br> and clicked "save" button.
    activate server
    server-->>browser: res Type: application/json
    deactivate server
```
