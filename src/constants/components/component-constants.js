// Headers
import H1 from "../../components/headers/h1";
import H2 from "../../components/headers/h2";
import H3 from "../../components/headers/h3";

// Footers
import F1 from "../../components/footers/f1";
import F2 from "../../components/footers/f2";
import F3 from "../../components/footers/f3";
import F4 from "../../components/footers/f4";

export const componentConstants = [
  {
    title: "Headers",
    titles: ["H1", "H2", "H3"],
    components: [<H1 />, <H2 />, <H3 />],
  },
  {
    title: "Footers",
    titles: ["F1", "F2", "F3", "F4"],
    components: [<F1 />, <F2 />, <F3 />, <F4 />],
  },
];
