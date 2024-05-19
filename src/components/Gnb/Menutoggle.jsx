import { FiAlignJustify } from "react-icons/fi";
import styled from "styled-components";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const MenuButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: #000;
`;

const FiAlignJustifyIcon = styled(FiAlignJustify)`
  transition: transform 0.3s ease;
  cursor: pointer;
  color: #fff;
  width: 35px;
  height: 35px;

  &:hover {
    transform: scale(1.2);
  }
`;

const IoCloseOutlineIcon = styled(IoCloseOutline)`
  transition: transform 0.3s ease;
  cursor: pointer;
  color: #fff;
  width: 35px;
  height: 35px;

  &:hover {
    transform: scale(1.2);
  }
`;

const Path = props => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--background)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <MenuButton onClick={toggle}>
    {isOpen ? (
      <IoCloseOutlineIcon>
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </IoCloseOutlineIcon>
    ) : (
      <FiAlignJustifyIcon>
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </FiAlignJustifyIcon>
    )}
  </MenuButton>
);

MenuToggle.propTypes = propTypes;
