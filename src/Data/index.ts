interface IInput {
  firstImg: string;
  firstCol: string;
  secondImg: string;
  colorThirdCol: string;
  thirdImg: string;
  forthImg: string;
  forthCol: string;
}
interface IIndustry {
  icon: string;
  title: string;
}

export const AlertData: IInput[] = [
  {
    firstImg: "/arrow.svg",
    firstCol: "AMZN",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "TSLA",
    secondImg: "/paper.svg",
    colorThirdCol: "#118F4B",
    thirdImg: "/wave.svg",
    forthImg: "/high.risk.money.svg",
    forthCol: "High Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "ABQQ",
    secondImg: "/paper.svg",
    colorThirdCol: "#118F4B",
    thirdImg: "/wave.svg",
    forthImg: "/high.risk.money.svg",
    forthCol: "High Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "MSFT",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "PYPL",
    secondImg: "/paper.svg",
    colorThirdCol: "#118F4B",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "NFLX",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "NFLX",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "NFLX",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "NFLX",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "/arrow.svg",
    firstCol: "NFLX",
    secondImg: "/paper.svg",
    colorThirdCol: "#D94111",
    thirdImg: "/wave.svg",
    forthImg: "/low.risk.money.svg",
    forthCol: "Low Risk",
  },
];

export const IndustryItems: IIndustry[] = [
  {
    icon: "/heart.svg",
    title: "Health Care",
  },
  {
    icon: "/rectangle.svg",
    title: "Materials",
  },
  {
    icon: "/energy.svg",
    title: "Enrgy",
  },
  {
    icon: "/forthimg.svg",
    title: "Consumer Discretionary",
  },
  {
    icon: "/fifthimg.svg",
    title: "Consumer Staples",
  },
  {
    icon: "/estate.svg",
    title: "Real Estate",
  },
  {
    icon: "/it.svg",
    title: "IT",
  },
  {
    icon: "/message.svg",
    title: "Communication",
  },
  {
    icon: "/industry.svg",
    title: "Industrials",
  },
  {
    icon: "/utilities.svg",
    title: "Utilites",
  },
  {
    icon: "/financial.svg",
    title: "Financial",
  },
];

export const Strategy = [
  "Big Option Buys",
  "Merger Arbitrage",
  "Short Reports",
  "Long Reports",
];

export const Assets = ["Stocks", "Options", "Futures", "Options"];
