import React from "react";
import ArtistList from "../components/Artist/ArtistList/ArtistList";

export default {
  title: "ArtistList",
  component: ArtistList,
};

const Template = (args) => <ArtistList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "ArtistList",
};
