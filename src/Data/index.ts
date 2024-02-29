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
  icon: string,
  title:string
}

export const AlertData: IInput[] = [
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "AMZN",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "TSLA",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "green",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "High Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "ABQQ",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "green",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "High Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "MSFT",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "PYPL",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "green",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "NFLX",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "NFLX",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "NFLX",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "NFLX",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
  {
    firstImg: "../../../public/arrow.svg",
    firstCol: "NFLX",
    secondImg: "../../../public/paper.svg",
    colorThirdCol: "red",
    thirdImg: "../../../public/wave.svg",
    forthImg: "../../../public/dollar.svg",
    forthCol: "Low Risk",
  },
];

export const IndustryItems: IIndustry[] = [
  {
    icon: "../../../public/heart.svg",
    title: "Health Care",
  },
  {
    icon: "../../../public/rectangle.svg",
    title: "Materials",
  },
  {
    icon: "../../../public/energy.svg",
    title: "Enrgy",
  },
  {
    icon: "../../../public/forthimg.svg",
    title: "Consumer Discretionary",
  },
  {
    icon: "../../../public/fifthimg.svg",
    title: "Consumer Staples",
  },
  {
    icon: "../../../public/estate.svg",
    title: "Real Estate",
  },
  {
    icon: "../../../public/it.svg",
    title: "IT",
  },
  {
    icon: "../../../public/message.svg",
    title: "Communication",
  },
  {
    icon: "../../../public/industry.svg",
    title: "Industrials",
  },
  {
    icon: "../../../public/utilities.svg",
    title: "Utilites",
  },
  {
    icon: "../../../public/financial.svg",
    title: "Financial",
  },
];

