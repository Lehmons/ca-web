import React, { useState, useEffect } from "react";
import { getClient } from "../../lib/sanity.server";
import { groq } from "next-sanity";

const query = groq`*[_type == "general"][0]{
  fontSizeLargeDesktop,
  fontSizeDesktop,
  fontSizeMobile,
  letterSpacing,
  lineHeight,
  backgroundColour
}`;

export default function Settings() {
  const [data, setData] = useState();
  const preview = false;

  const setCustomProperties = () => {
    document.documentElement.style.setProperty(
      "--backgroundColour",
      data?.backgroundColour?.hex
    );
    document.documentElement.style.setProperty(
      "--fontSizeLargeDesktop",
      data?.fontSizeLargeDesktop
    );
    document.documentElement.style.setProperty(
      "--fontSizeDesktop",
      data?.fontSizeDesktop
    );
    document.documentElement.style.setProperty(
      "--fontSizeMobile",
      data?.fontSizeMobile
    );
    document.documentElement.style.setProperty(
      "--letterSpacing",
      data?.letterSpacing
    );
    document.documentElement.style.setProperty(
      "--lineHeight",
      data?.lineHeight
    );
  };

  const setup = async () => {
    const newData = await getClient(preview).fetch(query);
    if (newData) {
      setData(newData);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    if (data && document?.documentElement) {
      setCustomProperties();
    }
  }, [data]);

  return null;
}
