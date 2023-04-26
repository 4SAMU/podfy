import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { client } from "@/SanityConfiguration/SanityClient";
import { PodcastData } from "@/SanityConfiguration/types";
import ReactAudioPlayer from "react-audio-player";

export default function Home() {
  const router = useRouter();
  // const { slug } = router.query;
  const [episode, setEpisode] = useState<PodcastData[]>([]);
  const [loading, setLoading] = useState(false);
  const { main, heading, podcastcontainer, card, title, descrip, url, footer } =
    styles;

  useEffect(() => {
    async function fetchPodcast() {
      setLoading(true);
      const response = await client.fetch(
        `*[_type == "podcastEpisode" ] {
          _id,
          title,
          description,
          audioFileUrl,
        }`
      );
      console.log("data", response);
      setLoading(false);

      setEpisode(response);
    }
    fetchPodcast();
  }, []);
  if (loading) {
    return (
      <div className={podcastcontainer}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "30px",
            fontFamily: "love",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  // && slug.current == $slug
  return (
    <div className={main}>
      <div className={heading}>
        <h1>Welcome to podfy</h1>
        <h4></h4>
      </div>
      <div className={podcastcontainer}>
        {episode.map((pod, index: any) =>
          pod.audioFileUrl && !loading ? (
            <div key={index}>
              <Link href={`/${pod.title}`}>
                <div className={card}>
                  <div className={title}>{pod.title}</div>
                  <div className={descrip}>{pod.description}</div>
                  <div>
                    <ReactAudioPlayer
                      src={pod.audioFileUrl}
                      controls
                      className={url}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ) : null
        )}
      </div>
      <div className={footer}>
        <h3>Thanks</h3>
      </div>
    </div>
  );
}
