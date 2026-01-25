import Button from "../ui/Button";
import TextField from "../ui/TextField";
import Select from "../ui/Select";
import Rating from "../ui/Rating";
import Checkbox from "../ui/Checkbox";

const Contact = () => {
  return (
    <div>
      <h2>Contact Component</h2>

      <TextField placeholder="Enter email" />
      <Select />
      <Rating />
      <Checkbox />
      <Button text="Send" />
    </div>
  );
};

export default Contact;