### Styled Components Reset

### Usage

```js
import { GlobalReset } from "@m87-wheeler/sc-reset";

<GlobalReset />
```

### Adding Global Variables

```js
import { css } from "styled-components";

const globalVars = css`
  :root {
    --my-var: red;
  }
`;

<GlobalReset vars={globalVars}>
```