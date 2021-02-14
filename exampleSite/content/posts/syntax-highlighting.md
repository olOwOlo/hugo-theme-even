---
title: "Syntax Highlighting"
date: 2011-08-30T16:01:23+08:00
lastmod: 2018-11-05T16:01:23+08:00
draft: false
tags: ["preview", "Syntax Highlighting", "tag-5"]
categories: ["Syntax Highlighting"]

toc: false

---


```js
function helloWorld () {
  alert("Hello, World!")
}
```

<!--more-->

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
```

```kotlin
package hello

fun main(args: Array<String>) {
  println("Hello World!")
}
```

```c
#include <stdio.h>

/* Hello */
int main(void){
  printf("Hello, World!");
  return 0;
}
```

```cpp
// 'Hello World!' program 
 
#include <iostream>
 
int main(){
  std::cout << "Hello World!" << std::endl;
  return 0;
}
```

```cs
using System;
class HelloWorld{
  public static void Main(){ 
    System.Console.WriteLine("Hello, World!");
  }
}
```

```html
<html>
<body>
  Hello, World!
</body>
</html>
```

```go
package main
import fmt "fmt"

func main() 
{
   fmt.Printf("Hello, World!\n");
}
```

```scala
object HelloWorld with Application {
  Console.println("Hello, World!");
}
```

```php
<?php
  echo 'Hello, World!';
?>
```

```python
print("Hello, World!") 
```

```clojure
(defn hello-world
  "A function print 'Hello world'."
  []
  (prn "Hello world"))
```

```go-html-template
<!DOCTYPE html>
<html>
<head>
  <title>{{ .Title }}</title>
</head>
<body>
  <h1>{{ .Title }}</h1>
  {{ .Content }}
</body>
</html>
```

```go-html-template
{{ partial "header.html" . }}

  <h1>posts</h1>
  {{ range first 10 .Data.Pages }}
    {{ if eq .Type "post"}}
      <h2><a href="{{ .Permalink }}">{{ .Title }}</a></h2>
    {{ end }}
  {{ end }}

  <h1>pages</h1>
  {{ range .Data.Pages }}
    {{ if or (eq .Type "page") (eq .Type "about") }}
      <h2><a href="{{ .Permalink }}">{{ .Type }} - {{ .Title }} - {{ .RelPermalink }}</a></h2>
    {{ end }}
  {{ end }}

{{ partial "footer.html" . }}
```

---

Detect the language

```
package hello

fun main(args: Array<String>) {
  println("Hello World!")
}
```

```
<?php
  echo 'Hello, World!';
?>
```

---

By `{{</* highlight go-html-template "linenos=table,hl_lines=1 3-7,linenostart=199" */>}}..{{</* / highlight */>}}`

{{< highlight go-html-template "linenos=table,hl_lines=1 3-7,linenostart=199" >}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Data.Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< / highlight >}}
