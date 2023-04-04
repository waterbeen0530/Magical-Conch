import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Link from "next/link";

export default function Container() {
  return (
    <Wrapper>
      <TextBox>
        <h1>마법의 소라고동</h1>
        <p>마법의 소라고동님께 무엇이든 물어보세요!</p>
      </TextBox>
      <Image src="/imgs/main/spiralShell.svg" />
      <Link href="/question">
        <Button>시작하기</Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 520px;
  height: 580px;
  border-radius: 4px;
  background-color: ${theme.whiteColor};
  box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    margin: 0;
    font-size: 28px;
    color: ${theme.blackColor};
  }
  & > p {
    margin: 0;
    font-size: 12px;
    color: ${theme.strongGrayColor};
  }
`;

const Image = styled.img`
  width: 200px;
  margin: 82px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 320px;
  height: 50px;
  margin-top: 70px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.whiteColor};
  background-color: ${theme.mainColor};
  cursor: pointer;
`;
