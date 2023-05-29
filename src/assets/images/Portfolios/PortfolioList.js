import BlipLogo from "./Blip/logo.jpg";
import BlizzfullLogo from "./Blizzfull/logo.jpg";
import CSELogo from "./CSE/logo.jpg";
import HangarALogo from "./HangarA/logo.jpg";
import MotorPlatformLogo from "./MotorPlatform/logo.jpg";
import VivinoLogo from "./Vivino/logo.jpg";

export const PORTFOLIOS = [
  {
    id: 1,
    label: "MotorPlatform",
    stack: "React.js, React Native",
    route: "/work/motorplatform",
    logo: MotorPlatformLogo,
    externalLink: "https://www.motorplatform.com.au/features",
    description:
      "MotorPlatform is an Australian company that provides end-to-end automotive valuation and wholesale auction solutions. Dealerships can do full inspection for their cars and sell them through several ways.",
    features: (
      <>
        MotorPlatform offers a comprehensive range of features designed to
        provide users with a seamless and efficient transaction experience.
        <br /> Here are some key features that MotorPlatform offers: <br />
        <br />
        <p className="text-base ml-4">
          <b>Customer Inspection:</b> Users can perform thorough inspections of
          vehicles, allowing them to gather all the necessary information about
          the vehicle's condition before making a purchase decision. <br />
          <b>Valuations:</b> MotorPlatform provides accurate vehicle valuations,
          enabling users to determine the fair market value of a vehicle based
          on various factors such as its condition, age, and market trends.{" "}
          <br />
          <b>Negotiations:</b> Users can engage in negotiations with sellers,
          facilitating a transparent and efficient process to reach mutually
          beneficial agreements. <br />
          <b>Acquisitions:</b> MotorPlatform enables users to acquire vehicles
          directly from sellers, streamlining the acquisition process and
          ensuring a seamless transaction. <br />
          <b>Tender Market:</b> Users can participate in a competitive tender
          market, where multiple buyers can submit their offers for a particular
          vehicle, ensuring fair pricing and a transparent transaction process.
          <br />
          <b>Sale Pipelines:</b> MotorPlatform offers multiple sale pipelines,
          allowing users to choose the most suitable method to sell their
          vehicles, whether it's through auctions, private listings, or other
          channels.
        </p>
        <br /> By providing these features, MotorPlatform aims to simplify the
        vehicle transaction process and empower users with the tools they need
        to make informed decisions. Whether users are buying, selling, or
        valuating vehicles, MotorPlatform offers a comprehensive platform to
        meet their needs.
      </>
    ),
    functionalities: (
      <>
        <b>Mobile: </b>Push Notification, Deep Linking, Navigation, Camera
        Module, Assets Management, Bug Tracking <br />
        <b>Web: </b>Notification Center, Mobile Responsiveness, Image
        Compression, Pagination, Time tracking
      </>
    ),
    challenges: "",
    pictures: [
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
    ],
  },
  {
    id: 2,
    label: "Vivino",
    stack: "React Native, AWS, Node.js",
    route: "/work/vivino",
    logo: VivinoLogo,
    externalLink: "https://www.vivino.com/app",
    description:
      "Vivino is a popular online wine marketplace and community that allows users to discover, rate, review, and purchase wines.",
    features: (
      <>
        During my tenure at Vivino, I contributed to the development of key
        features that significantly contributed to the popularity and success of
        the application. <br />
        Here are the features that I worked on: <br />
        <br />
        <p className="text-base ml-4">
          <b>Label Recognition: </b> One of the standout features of Vivino is
          its label recognition technology. Users can take a photo of a wine
          label using the Vivino app, and the platform's image recognition
          software provides information about the wine, including ratings,
          reviews, and pricing. <br />
          <b>Wine Ratings and Reviews: </b>The platform enables users to rate
          and review wines they have tasted, providing feedback and sharing
          their experiences with other Vivino users. This feature helps fellow
          wine enthusiasts make informed decisions when purchasing wine.
        </p>
        <br />
        By introducing these features, Vivino was able to increase its revenue
        from the product by more than 300% compared to its previous performance.
      </>
    ),
    challenges: "",
    functionalities:
      "Label recognition using OCR, Navigation, Animations, Charts, Auto-Deployment using AppCenter",
    pictures: [
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
    ],
  },
  {
    id: 3,
    label: "CSE Insurance Group",
    stack: "React.js, Next.js, Encryption",
    route: "/work/cse",
    logo: CSELogo,
    externalLink: "https://cseinsurance.com/",
    description:
      "CSE is an insurance company that provides multi-line provider of property and casualty insurances. I was hired as a senior security front-end engineer and built a SaaS product which manages the operations for home and motor insurances.",
    features: "Security on Front-end side",
    challenges: "",
    functionalities:
      "SSR(Next.js), Request/Response Payload Encryption(md5), Form Redirection, Redis cache, ",
    pictures: [
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
    ],
  },
  {
    id: 4,
    label: "Blip Technologies",
    stack: "Angular, React Native, Node.js",
    route: "/work/blip",
    logo: BlipLogo,
    externalLink: "https://www.motorplatform.com.au/features",
    pictures: [
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
    ],
  },
  {
    id: 5,
    label: "HangarA",
    stack: "Angular.js, React.js, Python, AWS",
    route: "/work/hangara",
    logo: HangarALogo,
    externalLink: "https://www.motorplatform.com.au/features",
    description: "",
    pictures: [
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
    ],
  },
  {
    id: 6,
    label: "Blizzfull",
    stack: "Vue2, Vuetify, Vuex, Bootstrap",
    route: "/work/blizzfull",
    logo: BlizzfullLogo,
    externalLink: "https://www.motorplatform.com.au/features",
    description: "",
    pictures: [
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
      { id: 1, img: "" },
    ],
  },
];
