import BBCSymbol from "@/components/projects/symbols/bbc-symbol";
import BrowserbaseSymbol from "@/components/projects/symbols/browserbase-symbol";
import FirstminuteSymbol from "@/components/projects/symbols/firstminute-symbol";
import FrontierSymbol from "@/components/projects/symbols/frontier-symbol";
import JustALevelSymbol from "@/components/projects/symbols/just-a-level-symbol";
import PaveSymbol from "@/components/projects/symbols/pave-symbol";
import SprinterviewSymbol from "@/components/projects/symbols/sprinterview-symbol";
import TradespaceSymbol from "@/components/projects/symbols/tradespace-symbol";
import { type ReactNode } from "react";

export interface Project {
  title: string;
  summary: string;
  symbol: ReactNode;
  note: string;
}

const projectIndex: Project[] = [
  {
    title: "Browserbase",
    summary: "Browser automation platform",
    note: "Present • Design & full-stack",
    symbol: <BrowserbaseSymbol />,
  },
  {
    title: "Sprinterview",
    summary: "AI moderated screening interviews",
    note: "2023 • Founder",
    symbol: <SprinterviewSymbol />,
  },
  {
    title: "Frontier",
    summary: "High volume recruitment platform",
    note: "2020 - 2022 • Founding / lead engineer",
    symbol: <FrontierSymbol />,
  },
  {
    title: "Pave",
    summary: "Compensation platform",
    note: "2020 • Engineer #1",
    symbol: <PaveSymbol />,
  },
  {
    title: "Tradespace",
    summary: "IP analysis platform",
    note: "2018 - 2020 • Full-stack",
    symbol: <TradespaceSymbol />,
  },
  {
    title: "Firstminute",
    summary: "VC fund",
    note: "2017 - 2019 • Design & full-stack",
    symbol: <FirstminuteSymbol />,
  },
  {
    title: "Just A-Level",
    summary: "Education platform",
    note: "2017 • Design & full-stack",
    symbol: <JustALevelSymbol />,
  },
  {
    title: "BBC R&D",
    summary: "BBC script writing platform",
    note: "2015 • Full-stack",
    symbol: <BBCSymbol />,
  },
];

export default projectIndex;
