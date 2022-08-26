

export interface SlidesProps {
  id: string;
  title: string;
  description: string;
  image: any;

}

const creditCardImg = require("../../assets/creditcard.png")
const computerImg = require("../../assets/computer.png")
const notificationImg = require("../../assets/notifications.png")
const customizeImg = require("../../assets/customize.png")

export const slides: SlidesProps[] = [
  {
    id: "1",
    title: "Quick & Easy Payments",
    description:
      "Grow your business by accepting card payments with the new card reader",
    image: creditCardImg
  },
  {
    id: "2",
    title: "Smart Point of Sale",
    description:
      "Complete point of sale software tailored to your business needs",
    image: computerImg
  },
  {
    id: "3",
    title: "Quick & Easy Payments",
    description:
      "Instant notifications let your quickly see new purchases and messages",
    image: notificationImg
  },
  {
    id: "4",
    title: "Quick & Easy Payments",
    description: "Adjust your system to speed up your checkout",
    image: customizeImg
  },
];