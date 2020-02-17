import styled, { css } from "styled-components"
export const StyledMain = styled.main`
  ${props => {
    switch (props.theme.id) {
      case "2019":
        return css`
          --section-rhythm: calc(2 * var(--rhythm));

          h2 {
            text-align: center;
            margin-bottom: var(--section-rhythm);
          }
          /* Each section has its own context, and its own big margins */
          & > section,
          & > nav {
            margin-bottom: var(--section-rhythm);
          }
          & > section {
            margin-top: var(--section-rhythm);

            /* Each section's header acts as an anchor target */
            /* We add an offset to ensure that the navbar has room atop the header */
            header[id] {
              --navbar-height: calc(var(--rhythm) + 1.1rem);
              margin-top: calc(
                -1 * calc(var(--section-rhythm) + var(--navbar-height))
              );
              padding-top: calc(
                1 * calc(var(--section-rhythm) + var(--navbar-height))
              );

              /* for accessibility, we focus the header/section when we scroll to it. */
              /* However, the focus outline doesn't look good and isn't necessary in this context */
              /* https://css-tricks.com/focus-styles-non-interactive-elements/ */
              &:focus {
                outline: 0;
              }
            }
          }
        `
      default:
        return
    }
  }};
`
