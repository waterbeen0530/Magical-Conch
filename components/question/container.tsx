import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useRecoilState } from "recoil";
import { textState } from "../../utils/store/text";
import Link from "next/link";

export default function Container() {
  const [text, setText] = useRecoilState(textState);

  const getText = (e: any) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <Wrapper>
      <Link href="/">
        <TextBox>
          <h1>마법의 소라고동</h1>
          <p>마법의 소라고동님께 무엇이든 물어보세요!</p>
        </TextBox>
      </Link>
      <Input
        placeholder="질문을 입력해주세요!"
        type="text"
        value={text}
        onChange={getText}
      />
      <Link href="/result">
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

const Input = styled.input`
  width: 320px;
  height: 50px;
  margin-top: 142px;
  padding-left: 20px;
  outline: none;
  border: 1px solid ${theme.nomalGrayColor};
  border-radius: 4px;
`;

const Button = styled.button`
  width: 320px;
  height: 50px;
  margin-top: 160px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.whiteColor};
  background-color: ${theme.mainColor};
  cursor: pointer;
`;
