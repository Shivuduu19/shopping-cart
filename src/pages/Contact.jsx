import styled from "styled-components";

const Contact = () => {
  return (
    <ContactWrapper>
      <h1>phone no:8919687188</h1>
      <h1>Email:shivakamtam19@gmail.com</h1>
    </ContactWrapper>
  );
};
const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
    }
  }
`;
export default Contact;
