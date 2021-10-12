import React from "react";
import styled from "styled-components/native";

import { makeImgPath } from "../utils.ts";

interface PosterProps {
  path: string;
}

const Img = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;

const Poster: React.FC<PosterProps> = ({ path }) => (
  <Img source={{ uri: makeImgPath(path) }}></Img>
);

export default Poster;
