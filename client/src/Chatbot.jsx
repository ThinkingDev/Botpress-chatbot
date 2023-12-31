import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setDealerId } from "./actions/chatbot";
import axios from "axios";
const Chatbot = () => {
  const { dealer_id } = useParams();

  const [userUrl, setUserUrl] = useState("");
  useEffect(() => {
    if (dealer_id) {
      setDealerId(dealer_id);
    }
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;
    document.body.appendChild(script);
    axios
      .get(
        `http://ec2-52-91-0-180.compute-1.amazonaws.com/api/short_dealer/${dealer_id}/`
      )
      .then((res) => {
        setUserUrl(res.data.get_logo_url);
      });
  }, [dealer_id]);

  return (
    <div className="w-full h-screen flex-col flex justify-items-center items-center my-9">
      <div className="w-40 h-20 bg-no-repeat relative">
        <img className="baner" src={userUrl} alt="baner" />
      </div>
      <div className="w-1/2 h-4/5">
        <iframe
          src="border: none;"
          srcDoc="<body>
          <script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
          <script>
            window.botpressWebChat.init({
              'composerPlaceholder': 'Chat with bot',
              'showTimestamp': true,
              'botConversationDescription': 'This chatbot was built for creating dealer applications',
              'botName': 'Automation Chatbot',
              'botId': '3e76f875-4aa7-495f-9ef0-701c8a2850b3',
              'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
              'messagingUrl': 'https://messaging.botpress.cloud',
              'clientId': '3e76f875-4aa7-495f-9ef0-701c8a2850b3',
              'enableConversationDeletion': false,
              'showPoweredBy': false,
              'className': 'webchatIframe',
              'containerWidth': '100%25',
              'layoutWidth': '100%25',
              'hideWidget': true,
              'showCloseButton': false,
              'disableAnimations': true,
              'closeOnEscape': false,
              'useSessionStorage': true,
              // 'enableConversationDeletion': true,
              'showConversationsButton': false,
              'enableTranscriptDownload': false,
              'stylesheet': 'https://webchat-styler-css.botpress.app/prod/code/5dd8f430-7e1c-4341-b4a8-526a4bef3563/v96217/style.css'
            });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
          </script>
        </body>"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Chatbot;
