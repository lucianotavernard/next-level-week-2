import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  form {
    margin-top: 3.2rem;

    label {
      color: var(--color-text-in-primary);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 5.6rem;
      margin-top: 3.2rem;
      border: 0;
      border-radius: 0.8rem;

      color: var(--color-button-text);
      background: var(--color-secundary);
      font: 700 1.6rem Archivo;
      text-decoration: none;
      transition: background-color 0.2s;
      cursor: pointer;

      :hover {
        background: var(--color-secundary-dark);
      }
    }
  }

  @media (min-width: 700px) {
    max-width: 100%;

    form {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;

      .input-block + .input-block,
      .select-block + .select-block {
        margin-top: 0;
      }
    }
  }
`;

export const Content = styled.div`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    max-width: 740px;
    margin: 0 auto;
    padding: 3.2rem 0;
  }
`;
