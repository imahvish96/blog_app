import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import RadioIcon from "@material-ui/icons/Radio";
import MovieIcon from "@material-ui/icons/Movie";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import StorefrontIcon from "@material-ui/icons/Storefront";
import StarsIcon from "@material-ui/icons/Stars";
import InfoIcon from "@material-ui/icons/Info";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import SendIcon from "@material-ui/icons/Send";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import ComputerIcon from "@material-ui/icons/Computer";
import PolicyIcon from "@material-ui/icons/Policy";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaTwitter,
  FaGithub,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitch,
  FaMastodon,
  FaFacebook,
} from "react-icons/fa";

import Home from "../assets/icons/nav/png/Home.png";
import Listing from "../assets/icons/nav/png/Listing.png";
import Podcast from "../assets/icons/nav/png/Podcasts.png";
import Videos from "../assets/icons/nav/png/Videos.png";
import Tags from "../assets/icons/nav/png/Tags.png";
import Faq from "../assets/icons/nav/png/Faq.png";
import ForemShop from "../assets/icons/nav/png/ForemShop.png";
import Sponsors from "../assets/icons/nav/png/Sponsers.png";
import About from "../assets/icons/nav/png/Home.png";
import Contact from "../assets/icons/nav/png/Contact.png";
import Guides from "../assets/icons/nav/png/Guids.png";
import SoftwareComparisons from "../assets/icons/nav/png/SoftwareComprisons.png";
import CodeOfConduct from "../assets/icons/nav/png/CodeOfConduct.png";
import PrivacyPolicy from "../assets/icons/nav/png/PrivacyPolicy.png";
import TermsOfUse from "../assets/icons/nav/png/TermsOfUse.png";

export const popularTags = [
  "#javascript",
  "#python",
  "#java",
  "#php",
  "#webdev",
  "#reactjs",
  "#angular",
  "#beginners",
  "#programing",
  "#toturials",
  "#css",
  "#scss",
  "#node",
  "#android",
  "#productivity",
  "#career",
  "#devops",
];

export const menu = [
  { menuTitle: "Home", icon: Home },
  { menuTitle: "Listing", icon: Listing },
  { menuTitle: "Podcasts", icon: Podcast },
  { menuTitle: "Videos", icon: Videos },
  { menuTitle: "Tags", icon: Tags },
  { menuTitle: "FAQ", icon: Faq },
  { menuTitle: "Forem Shop", icon: ForemShop },
  { menuTitle: "Sponsors", icon: Sponsors },
  { menuTitle: "About", icon: About },
  { menuTitle: "Contact", icon: Contact },
  { menuTitle: "Guides", icon: Guides },
  { menuTitle: "Software Comparisons", icon: SoftwareComparisons },
  { menuTitle: "Code of Conduct", icon: CodeOfConduct },
  { menuTitle: "Privacy Policy", icon: PrivacyPolicy },
  { menuTitle: "Terms of use", icon: TermsOfUse },
];

export const cardsConfig = {
  media: {},
  primeryHeading: "",
  content:
    "DEV runs on 100% open source code known as Forem. Contribute to the codebase or host your own!",
  chekoutList: ["Main Forem Repo", "Self-Host Instructions"],
  cardTitle: "Dev Community",
};

export const oneLogin = [
  {
    icon: FaGoogle,
    text: "Google",
    style: {
      background: "#fff",
      color: "#666",
    },
  },
  {
    icon: FaApple,
    text: "Apple",
    style: {
      background: "#000",
      color: "#fff",
    },
  },
  {
    icon: FaTwitter,
    text: "Twitter",
    style: {
      background: "#1da1f2",
      color: "#fff",
    },
  },
  {
    icon: FaGithub,
    text: "Github",
    style: {
      background: "#24292e",
      color: "#fff",
    },
  },
];

export const socialIcon = [
  { icon: FaTwitter },
  { icon: FaFacebookSquare },
  { icon: FaGithub },
  { icon: FaInstagramSquare },
  { icon: FaTwitch },
  { icon: FaMastodon },
];
