---
title: "Use Mermaid in even theme!"
date: 2021-01-2900:55:42+08:00
draft: false

mermaid: 
  enable: true
---

## Usage

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

## Configuration

Configure for all home and regular pages:

```toml
[params.mermaid]
  enable = true
```

Configure for a single post in the front matter (**Params in front matter have higher precedence**):

```yaml
mermaid: 
  enable: true
```

## mermaid syntax

why not go to [its official site](https://mermaid-js.github.io) to have a look?
