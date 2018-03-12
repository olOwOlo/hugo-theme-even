---
title: "JS Sequence Diagrams"
date: 2015-03-04T21:57:45+08:00
draft: false

sequenceDiagrams: 
  enable: true
  options: "{theme: 'hand'}"
---

## Usage

```sequence
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```

<!--more-->

    ```sequence
    Andrew->China: Says Hello
    Note right of China: China thinks\nabout it
    China-->Andrew: How are you?
    Andrew->>China: I am good thanks!
    ```

## Configuration

Configure for all home and regular pages:

```toml
[params.sequenceDiagrams]
  enable = true
  options = "{theme: 'hand'}"
```

Configure for a single post in the front matter (**Params in front matter have higher precedence**):

```yml
sequenceDiagrams: 
  enable: true
  options: "{theme: 'hand'}"
```

### Options

```js
options = {
  // Change the styling of the diagram, typically one of 'simple', 'hand'. New themes can be registered with registerTheme(...).
  theme: string,

  // CSS style to apply to the diagram's svg tag. (Only supported if using snap.svg)
  css_class: string,
}
```

See more information from https://github.com/bramp/js-sequence-diagrams.

## Examples

```sequence
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```

    ```sequence
    Title: Here is a title
    A->B: Normal line
    B-->C: Dashed line
    C->>D: Open arrow
    D-->>A: Dashed open arrow
    ```

---

```sequence
# Example of a comment.
Note left of A: Note to the\n left of A
Note right of A: Note to the\n right of A
Note over A: Note over A
Note over A,B: Note over both A and B
```

    ```sequence
    # Example of a comment.
    Note left of A: Note to the\n left of A
    Note right of A: Note to the\n right of A
    Note over A: Note over A
    Note over A,B: Note over both A and B
    ```
