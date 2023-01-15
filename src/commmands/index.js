import { basic } from "./basic";
import { fs } from "./fs1";

const commands = (context) => {
  let b = basic(context);
  let f = fs(context);

  return {
    ...b,
    ...f,
  };
};

export default commands;
