import Button from "../ui/Button";
import TextField from "../ui/TextField";
import Select from "../ui/Select";
import Rating from "../ui/Rating";
import Checkbox from "../ui/Checkbox";

const Home = () => {
  return (
    <div>
      <h2>Home Component</h2>

      <TextField placeholder="Enter your name" />
      <br />

      <Select />
      <br />

      <Rating />
      <br />

      <Checkbox />
      <br />

      <Button text="Submit" />
    </div>
  );
};

export default Home;