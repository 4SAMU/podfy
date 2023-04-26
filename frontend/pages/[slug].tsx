// import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
// import { useRouter } from "next/router";
// import { client } from "@/SanityConfiguration/SanityClient";
// import { PodcastData } from "@/SanityConfiguration/types";

function PodcastEpisode() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [episode, setEpisode] = useState<PodcastData | null>(null);

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "podcastEpisode" && slug.current == $slug][0] {
//           title,
//           description,
//           audioFileUrl,
//         }`,
//         { slug }
//       )
//       .then((data) => {
//         setEpisode(data);
//       })
//       .catch(console.error);
//   }, [slug]);

  return (
    <div>
      {/* <h1>{episode?.title}</h1>
      <p>{episode?.description}</p> */}
      <ReactAudioPlayer
        src={"https://www.youtube.com/watch?v=aVBbWRucCZw"}
        controls
      />
    </div>
  );
}

export default PodcastEpisode;
