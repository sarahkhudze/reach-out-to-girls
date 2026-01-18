import { useEffect } from "react";

export default function FacebookFeed() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="w-fit md:w-full">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/RoGMalawi"
        data-tabs="timeline"
        data-width="340"
        data-height="450"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote cite="https://www.facebook.com/RoGMalawi" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/RoGMalawi">Reach out to Girls</a>
        </blockquote>
      </div>
    </div>
  );
}