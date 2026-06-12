import { useEffect, useRef } from "react";

const LOADER_SRC = "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
const ROUGHMAP_TIMESTAMP = "1781245645269";
const ROUGHMAP_KEY = "2qtno2tp9c87";
const CONTAINER_ID = `daumRoughmapContainer${ROUGHMAP_TIMESTAMP}`;

export default function KakaoMap() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;

    doc.open();
    doc.write(`<!DOCTYPE html>
<html>
  <head>
    <style>
      html, body { margin: 0; padding: 0; height: 100%; }
      #${CONTAINER_ID}, .root_daum_roughmap { width: 100% !important; height: 100% !important; }
    </style>
  </head>
  <body>
    <div id="${CONTAINER_ID}" class="root_daum_roughmap root_daum_roughmap_landing"></div>
    <script charset="UTF-8" src="${LOADER_SRC}"></script>
    <script>
      window.onload = function () {
        new daum.roughmap.Lander({
          timestamp: "${ROUGHMAP_TIMESTAMP}",
          key: "${ROUGHMAP_KEY}",
          mapWidth: "640",
          mapHeight: "360"
        }).render();
      };
    </script>
  </body>
</html>`);
    doc.close();
  }, []);

  return <iframe ref={iframeRef} title="PHYSIS Co. 본사 위치" />;
}
