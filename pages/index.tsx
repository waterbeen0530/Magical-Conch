import styled from "@emotion/styled";
import Container from "../components/main/container";

export default function Home() {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
