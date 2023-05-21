SPA visit
---

<br>

What occurs between browser and server when you visit the SPA. 

``` mermaid

sequenceDiagram
    browser->>server: GET - https://studies.cs.helsinki.fi/exampleapp/spa
    Note over browser: User enters web address. 
    server-->>browser: data.json
    Note over browser: Browser renders page.

```