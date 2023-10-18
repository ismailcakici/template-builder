// Headers
import H1 from "../../components/headers/h1";
import H2 from "../../components/headers/h2";
import H3 from "../../components/headers/h3";

// Header Images

import H1Img from "../../assets/components/header/H1.png";
import H2Img from "../../assets/components/header/H2.png";
import H3Img from "../../assets/components/header/H3.png";

// Home Pages

import HP1 from "../../components/home-pages/hp1";
import HP2 from "../../components/home-pages/hp2";
import HP3 from "../../components/home-pages/hp3";

// Home Page Images

import HP1Img from "../../assets/components/home-pages/HP1.png";
import HP2Img from "../../assets/components/home-pages/HP2.png";
import HP3Img from "../../assets/components/home-pages/HP3.png";

// Pricings

import P1 from "../../components/pricing/p1";
import P2 from "../../components/pricing/p2";

// Pricing Images

import P1Img from "../../assets/components/pricing/P1.png";
import P2Img from "../../assets/components/pricing/P2.png";

// About Us
import AU1 from "../../components/about-us/au1";
import AU2 from "../../components/about-us/au2";

// About Us Images

// F.A.Q
import FAQ1 from "../../components/f.a.q/faq1";

// F.A.Q Images

// Gallery
import G1 from "../../components/gallery/g1";

// Gallery Images

// Footers
import F1 from "../../components/footers/f1";
import F2 from "../../components/footers/f2";
import F3 from "../../components/footers/f3";
import F4 from "../../components/footers/f4";

export const componentConstants = [
  {
    title: "Headers",
    titles: ["H1", "H2", "H3"],
    images: [H1Img, H2Img, H3Img],
    components: [<H1 />, <H2 />, <H3 />],
  },
  {
    title: "Home Pages",
    titles: ["HP1", "HP2", "HP3"],
    images: [HP1Img, HP2Img, HP3Img],
    components: [<HP1 />, <HP2 />, <HP3 />],
  },
  {
    title: "Pricing",
    titles: ["P1", "P2"],
    images: [P1Img, P2Img],
    components: [<P1 />, <P2 />],
  },
  {
    title: "About Us",
    titles: ["AU1", "AU2"],
    images: [],
    components: [<AU1 />, <AU2 />],
  },
  {
    title: "F.A.Q",
    titles: ["FAQ1"],
    images: [],
    components: [<FAQ1 />],
  },
  {
    title: "Gallery",
    titles: ["G1"],
    images: [],
    components: [<G1 />],
  },
  {
    title: "Footers",
    titles: ["F1", "F2", "F3", "F4"],
    images: [],
    components: [<F1 />, <F2 />, <F3 />, <F4 />],
  },
];
