import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const Content = styled.div`
  > header {
    margin-bottom: 3.2rem;
    text-align: center;

    img {
      height: 10rem;
    }

    h2 {
      margin-top: 0.8rem;
      line-height: 4.6rem;
      font-size: 2.4rem;
      font-weight: 500;
    }
  }

  > img {
    width: 100%;
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "logo hero hero" "buttons buttons total";

    max-width: 1100px;

    > header {
      grid-area: logo;
      align-self: center;
      margin: 0;
      text-align: left;

      img {
        height: 100%;
      }

      h2 {
        font-size: 3.6rem;
        text-align: initial;
      }
    }

    > img {
      grid-area: hero;
      justify-self: end;
    }

    > footer {
      grid-area: total;
      justify-content: end;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 3.2rem 0;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30rem;
    height: 10.4rem;
    margin-right: 1.6rem;
    border-radius: 0.8rem;

    color: var(--color-button-text);
    text-decoration: none;

    transition: background-color 0.2s;

    :first-child {
      margin-right: 1.6rem;
    }

    .study {
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }

    .give-classes {
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;
