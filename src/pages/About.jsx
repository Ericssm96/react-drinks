import styled from "styled-components";

export const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;