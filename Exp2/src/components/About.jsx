import Button from "../ui/Button";
import TextField from "../ui/TextField";
import Select from "../ui/Select";
import Rating from "../ui/Rating";
import Checkbox from "../ui/Checkbox";

const About = () => {
  return (
    <div>
      <h2>About Component</h2>

      <TextField placeholder="About input" />
      <Select />
      <Rating />
      <Checkbox />
      <Button text="Save" />
    </div>
  );
};

export default About;