import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 3em;
  font-size: 12px;
  text-align: center;
  color: #000;
  a {
    text-decoration: underline;
    color: #fe6056;
  }
  ${({ theme }) => theme.thone`font-size: 0.7em;`}
`;

export default FooterContainer;
