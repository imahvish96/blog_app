import React from "react";
import { popularTags, menu, cardsConfig } from "../../../../config";
import TagList from "../../../ui/TagsList/index";
import LoginBanner from "../../../ui/LoginBanner";
import Sponsorship from "../../../ui/Sponsorship";
import NavLinks from "../../../ui/NavLinks";

export default function Aside() {
  return (
    <aside>
      <div className="left-wrapper">
        <LoginBanner />
        <NavLinks menu={menu} />
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
