import React from "react";
const EmbedMap = (props) => {
  return (
    <div className="google-map-code">
      <iframe
        title="Google map"
        src={props.mapURL}
        width="100%"
        height="150"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export { EmbedMap };
