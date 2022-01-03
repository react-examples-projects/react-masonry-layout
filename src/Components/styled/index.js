import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => props.width || null};
  margin-left: ${(props) => (props.center ? "auto" : null)};
  margin-right: ${(props) => (props.center ? "auto" : null)};
`;

export const Column = styled.div`
  box-sizing: border-box;
  flex: 0 0 ${(props) => `${props.width}%` || "auto"};
  max-width: ${(props) => `${props.width}%` || "auto"};
  display: flex;
  align-self: flex-start;
  flex-direction: column;

  > img,
  > figure {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
`;

export const Item = styled.div`
  margin: 0.3rem;
  padding: 0.5rem;
`;
