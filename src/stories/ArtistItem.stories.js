import React from "react";
import ArtistItem from "../components/Artist/ArtistItem/ArtistItem";

export default {
  title: "ArtistItem",
  component: ArtistItem,
};

const Template = (args) => <ArtistItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "ArtistItem",
};
