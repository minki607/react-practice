


const Input = ({ type, visible }) => {
  const [visible, setVisible] = useState(false);
 return (
  <StyledDiv>
  <StyledInput
    type={type}
    visible={visible}
    placeholder={type === "email" ? "아이디(이메일)" : "비밀번호"}
  ></StyledInput>
  {type === "password" ? (
    <StyledButton>
      <StyledIcon className="hide" shape="hide" />
    </StyledButton>
  ) : null}
</StyledDiv>
 )
  
);
}

