import { useEffect, useState } from 'react';
import axios from 'axios';
const Chatbot = () => {

  const [userUrl, setUserUrl] = useState("");
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      return (
        <iframe
          srcDoc="<body>
          <script src='https://cdn.botpress.cloud/webchat/v0/inject.js'> </script>
          <script>
          window.botpressWebChat.init({
            'composerPlaceholder': 'Chat with bot',
            'botConversationDescription': 'This chatbot was built for creating dealer applications',
            'botName': 'Chatbot',
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
            'enableConversationDeletion': true,
            'showConversationsButton': false,
            'enableTranscriptDownload': false,
            'stylesheet': 'https://webchat-styler-css.botpress.app/prod/code/5dd8f430-7e1c-4341-b4a8-526a4bef3563/v5250/style.css'
        });
      window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
          </script>
          </body>"
        />
      );
    };
    axios.get("http://ec2-52-91-0-180.compute-1.amazonaws.com/api/short_dealer/6/").then((res) => {
      setUserUrl(res.data.get_logo_url);
    })
  }, []);

  return (
    <div className='w-full h-screen flex-col flex justify-items-center items-center my-9'>
      <div className="w-40 h-20 bg-no-repeat relative">
        <img className="baner" src={userUrl} alt="baner" />
      </div>
      <div className='w-1/2 h-4/5'>
        <iframe
          src='border: none;'
          srcDoc="<body>
          <script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
          <script>
            window.botpressWebChat.init({
              'composerPlaceholder': 'Chat with bot',
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
              'enableConversationDeletion': true,
              'showConversationsButton': false,
              'enableTranscriptDownload': false,
              'stylesheet': 'https://webchat-styler-css.botpress.app/prod/code/5dd8f430-7e1c-4341-b4a8-526a4bef3563/v96217/style.css'
            });
            window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
          </script>
        </body>"
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default Chatbot;
