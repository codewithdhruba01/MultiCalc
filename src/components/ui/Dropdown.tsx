import styled from "styled-components";

export const StyledDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: -50px;
  margin-top: 20px;
  width: 210px;
  background-color: var(--card, #0d1117);
  border-radius: 14px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};

  .dropdown-item {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 15px;
    padding: 12px 18px;
    color: #d0d7de;
    text-decoration: none;
    transition: all 0.25s ease;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: rgba(56, 139, 253, 0.1);
      color: #58a6ff;
      transform: translateX(5px);
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      height: 70%;
      width: 4px;
      background: #2f81f7;
      border-radius: 6px;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  [data-theme="light"] & {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);

    .dropdown-item {
      color: #333;

      &:hover {
        background-color: #f2f4f7;
        color: #0070f3;
        transform: translateX(5px);
      }

      &::before {
        background: #0070f3;
      }
    }
  }
`;
