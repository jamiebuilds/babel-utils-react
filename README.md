# babel-utils-react

Utility functions for building Babel plugins for React code

## Example

```js
import reactUtilsFactory from 'babel-utils-react';

export default function ({Plugin, types: t}) {
  const reactUtils = reactUtilsFactory(t);

  return new Plugin('ast-transform', {
    visitor: {
      ClassDeclaration(node) {
        if (reactUtils.isReactComponentClassDeclaration(node)) {
          // Yay, a React.Component class!
        }
      }
    }
  });
}
```

## Installation

```sh
$ npm install babel-utils-react
```
