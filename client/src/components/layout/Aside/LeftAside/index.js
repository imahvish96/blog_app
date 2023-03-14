import React from "react";
import { popularTags, menu, cardsConfig } from "../../../../config";
import TagList from "../../../ui/TagsList/index";
import LoginBanner from "../../../ui/LoginBanner";
import Sponsorship from "../../../ui/Sponsorship";
import NavLinks from "../../../ui/NavLinks";
import SocialLinkBar from "./../../../ui/SocialLInksBars/index";
import { BlogContext } from "../../../../context";

export default function Aside() {
  const { isLogin } = React.useContext(BlogContext);
  return (
    <aside>
      <div className="left-wrapper">
        {!isLogin && <LoginBanner />}
        <NavLinks menu={menu} />
        <SocialLinkBar />
        <TagList popularTags={popularTags} />
        <Sponsorship
          media={cardsConfig.media}
          primeryHeading={cardsConfig.primeryHeading}
          content={cardsConfig.content}
          chekout={cardsConfig.chekoutList}
          cardTitle={cardsConfig.cardTitle}
        />
      </div>
    </aside>
  );
}
