import { Button } from "@mui/material";
import "./CustomButton.css";

interface Props {
  text: string;
  icon?: any;
}

const CustomButton = ({ text, icon }: Props) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon && <div className="btn_icon_container">icon</div>}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
