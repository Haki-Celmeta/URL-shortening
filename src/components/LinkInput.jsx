import { useState } from "react";
import { bgShortenDesktop } from "../utils";

const LinkInput = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const isInputValid = () => {
    if (input.trim().length === 0) {
      setError("Please add a link");
    } else {
      setError("");
    }
  };

  return (
    <section className="py-8">
      <div className="screen-max-width bg-violet-default relative lg:w-[70%] md:w-[90%] w-full mx-2 flex items-center justify-center rounded-lg">
        <img
          src={bgShortenDesktop}
          alt="shorten desktop background"
          className="rounded-lg sm:h-fit h-48"
        />
        <div className="absolute top-[50%] translate-y-[-50%] sm:flex sm:flex-row flex-col items-center w-full justify-between sm:px-10 px-2 gap-6">
          <div className="sm:w-[80%] w-full relative">
            <input
              value={input}
              onChange={handleChange}
              className={`py-3 px-5 outline-none h-fit w-full rounded-lg ${
                error ? "border border-red" : "border-none"
              }`}
              id="link-input"
              name="link-input"
              placeholder="Shorten a link here..."
            />
            <div className="text-red absolute mt-1">{error ? error : ""}</div>
          </div>
          <button
            onClick={isInputValid}
            className="bg-cyan text-white py-3 px-6 rounded-lg hover:opacity-70 transition sm:w-fit w-full sm:mt-0 mt-7"
          >
            Shorten It!
          </button>
        </div>
      </div>
    </section>
  );
};

export default LinkInput;
