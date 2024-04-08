import { useState, useEffect } from "react";
import { bgShortenDesktop } from "../utils";
import Snackbar from "@mui/material/Snackbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";

// eslint-disable-next-line react/prop-types
const LinkInput = () => {
  useGSAP(() => {
    gsap.to('.link-input-content', {
      opacity: 1,
      y: 0,
      duration: 1
    })
  }, [])

  const [inputValue, setInputValue] = useState("");
  const [formError, setFormError] = useState(false);
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("links")) || []
  );
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setFormError(true);
    } else {
      addShortLink();
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function addShortLink() {
    setFormError(false);

    try {
      setLoading(true);
      await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then((res) => res.json())
        .then((res) => {
          const longLink = inputValue;
          setInputValue("");
          const hasLink = links.some((link) => link.longLink == longLink);
          if (!hasLink) {
            const shortLink = res.result.short_link;
            const linkObject = {
              id: links.length + 1,
              shortLink,
              longLink,
              isCopied: false,
            };

            setLinks((prevState) => [linkObject, ...prevState]);
            setLoading(false);
          }
        });
    } catch (e) {
      setLoading(false);
      alert("Request Failed");
      handleClick();
    }
  }

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <section className="pt-8 mb-[-70px]">
      <div className="link-input-content screen-max-width bg-violet-default relative lg:w-[70%] md:w-[90%] w-full mx-2 flex items-center justify-center rounded-lg">
        <img
          src={bgShortenDesktop}
          alt="shorten desktop background"
          className="rounded-lg sm:h-fit h-48"
        />
        <div className="absolute top-[50%] translate-y-[-50%] sm:flex sm:flex-row flex-col items-center w-full justify-between sm:px-10 px-2 gap-6">
          <div className="sm:w-[80%] w-full relative">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`py-3 px-5 outline-none h-fit w-full rounded-lg ${
                formError ? "border border-red" : "border-none"
              }`}
              id="link-input"
              name="link-input"
              placeholder="Shorten a link here..."
            />
            <div className="text-red absolute mt-1">
              {formError ? "Plase add a link" : ""}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className={`bg-cyan text-white py-3 px-6 rounded-lg hover:opacity-70 transition sm:w-fit w-full sm:mt-0 mt-7 ${
              loading ? "cursor-no-drop" : "cursor-pointer"
            }`}
          >
            {loading ? "Loading..." : "Shorten It!"}
          </button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        message="Failed to shorten this link."
      />
    </section>
  );
};

export default LinkInput;
