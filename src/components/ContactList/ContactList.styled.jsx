/* .list {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
.button {
  background-color: #0e232e;
  cursor: pointer;
  border-radius: 4px;
  color: #ffffff;

  border-color:#6f3a3a;
} */


import styled from '@emotion/styled';

export const Subtitle = styled.p`
  margin-bottom: 5px;

  font-size: 22px;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
