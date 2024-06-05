import React from "react";
import Link from "next/link";

const InfografisLink = (
  <Link rel="preload" href="../infografis">
    More Detail
  </Link>
);

const KategoriLink = (
  <Link rel="preload" href="../kategori">
    More Detail
  </Link>
);

const VideoLink = (
  <Link
    rel="preload"
    href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
    target="_blank"
  >
    More Detail
  </Link>
);

export { InfografisLink, KategoriLink, VideoLink };
