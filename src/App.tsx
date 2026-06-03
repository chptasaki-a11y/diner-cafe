import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


import textureOverlay from '@/components/assets/テクスチャーざらつき.png';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        {/* テクスチャオーバーレイ */}
        <div
          aria-hidden
         className="pointer-events-none fixed inset-0 z-[60] opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url(${textureOverlay})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'min(80vw, 900px)',
          }}
        />
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
