import { createGlobalStyle, css, FlattenSimpleInterpolation } from "styled-components"

const reset = css`
  *,
  &:after,
  &:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const document = css`
  html,
  body,
  #root,
  #app,
  #__next {
    position: relative;
    width: 100%;
    height: 100%;
    isolation: isolate;
    background-color: #ffffff;
    color: #111111;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  p {
    line-height: 1.5;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`

interface Props {
  vars?: FlattenSimpleInterpolation
}

export const GlobalReset = createGlobalStyle<Props>`
    ${reset};
    ${document};
    ${({ vars }: Props) => vars && vars};
`
