# @codewell/defer

## Installation

```
npm install @codewell/defer
```

## Basic Usage

```JavaScript
import defer from '@codewell/defer';

const waitWithLog = defer(console.log, "Hello, World!");

waitWithLog();
// => "Hello, World!"
```


