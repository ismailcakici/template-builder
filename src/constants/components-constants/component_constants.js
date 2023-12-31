import H1 from "../../components/headers/h1";
import H2 from "../../components/headers/h2";
import H3 from "../../components/headers/h3";

import H1Img from "../../assets/components/header/H1.png";
import H2Img from "../../assets/components/header/H2.png";
import H3Img from "../../assets/components/header/H3.png";

import HP1 from "../../components/home-pages/hp1";
import HP2 from "../../components/home-pages/hp2";
import HP3 from "../../components/home-pages/hp3";

import HP1Img from "../../assets/components/home-pages/HP1.png";
import HP2Img from "../../assets/components/home-pages/HP2.png";
import HP3Img from "../../assets/components/home-pages/HP3.png";

import P1 from "../../components/pricing/p1";
import P2 from "../../components/pricing/p2";

import P1Img from "../../assets/components/pricing/P1.png";
import P2Img from "../../assets/components/pricing/P2.png";

import AU1 from "../../components/about-us/au1";
import AU2 from "../../components/about-us/au2";

import AU1Img from "../../assets/components/about-us/AU1.png";
import AU2Img from "../../assets/components/about-us/AU2.png";

import FAQ1 from "../../components/f.a.q/faq1";

import FAQ1Img from "../../assets/components/f.a.q/FAQ1.png";

import G1 from "../../components/gallery/g1";
import G2 from "../../components/gallery/g2";

import G1Img from "../../assets/components/gallery/G1.png";
import G2Img from "../../assets/components/gallery/G2.png";

import T1 from "../../components/testimonials/t1";
import T2 from "../../components/testimonials/t2";

import T1Img from "../../assets/components/testimonials/T1.png";
import T2Img from "../../assets/components/gallery/G1.png";

import F1 from "../../components/footers/f1";
import F2 from "../../components/footers/f2";
import F3 from "../../components/footers/f3";

import F1Img from "../../assets/components/footer/F1.png";
import F2Img from "../../assets/components/footer/F2.png";
import F3Img from "../../assets/components/footer/F3.png";

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
    images: [AU1Img, AU2Img],
    components: [<AU1 />, <AU2 />],
  },
  {
    title: "F.A.Q",
    titles: ["FAQ1"],
    images: [FAQ1Img],
    components: [<FAQ1 />],
  },
  {
    title: "Gallery",
    titles: ["G1", "G2"],
    images: [G1Img, G2Img],
    components: [<G1 />, <G2 />],
  },
  {
    title: "Testimonials",
    titles: ["T1", "T2"],
    images: [T1Img, T2Img],
    components: [<T1 />, <T2 />],
  },
  {
    title: "Footers",
    titles: ["F1", "F2", "F3"],
    images: [F1Img, F2Img, F3Img],
    components: [<F1 />, <F2 />, <F3 />],
  },
];
