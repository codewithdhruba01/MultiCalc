import styled from "styled-components";

export const StyledDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  left: -50px;
  margin-top: 20px;
  width: 210px;
  background-color: #ffffff;
  border-radius: 0px;
  box-shadow: 6px 6px 0px 0px #000000;
  border: 4px solid #000000;
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
    color: #121212;
    text-decoration: none;
    transition: all 0.25s ease;
    cursor: pointer;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    &:hover {
      background-color: #e0e0e0;
      color: #121212;
      transform: translateX(0px);
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 6px;
      height: 70%;
      width: 4px;
      background: #d02020;
      border-radius: 0px;
      opacity: 1;
      transition: 0.2s;
    }

    &:hover::before {
      background: #1040c0;
    }
  }

  /* Dark mode: keep Bauhaus structure, invert surface */
  .dark & {
    background-color: #121212;
    border-color: #000000;
    box-shadow: 6px 6px 0px 0px #000000;

    .dropdown-item {
      color: #f0f0f0;

      &:hover {
        background-color: #1f1f1f;
        color: #f0f0f0;
      }
    }
  }
`;
