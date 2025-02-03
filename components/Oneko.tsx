"use client";

import { useEffect } from "react";

export default function Oneko() {
  useEffect(() => {
    fetch("/oneko/js/cat.js")
      .then((response) => response.text())
      .then((text) => {
        eval(text);
      });

    return () => {
      const cat = document.getElementById("oneko");
      if (cat) cat.remove();
    };
  }, []);

  return null;
}
