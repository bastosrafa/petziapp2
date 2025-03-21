import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import { getUniqueId } from "@/utils/getUniqueId";
import ReactPixel from "react-facebook-pixel";
import { getCookie } from "@/utils/getCookie";
<<<<<<< HEAD
import { messaging } from "./firebase/config";
import { onMessage } from "firebase/messaging";
=======
import { messaging } from "./firebase/firebaseConfig";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
import { useFirestore } from "./hooks/useFirestore";
import { useAuthContext } from "./hooks/useAuthContext";
import { useToast } from "./shadcn/components/ui/use-toast";
import { ToastAction } from "./shadcn/components/ui/toast";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function App() {
  const { user } = useAuthContext();
  // const { toast } = useToast();

  // onMessage(messaging, (payload) => {
  //   console.log(payload);
  //   toast({
  //     title: payload.notification.title,
  //     description: "Abra a operação o quanto antes!",
  //   });
  //   // Mostre a notificação para o usuário
  // });
=======
import { useNavigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";


// ✅ Importando serviço de notificações
import { requestNotificationPermission } from "./services/NotificationService.js";

// ✅ Importando serviço de notificações agendadas
import { checkUserProgressAndNotify } from "./services/NotificationScheduler.js";

// ✅ Importando componentes do treinamento (Sem alterar o resto do código)
import LessonsList from "./components/Training/LessonsList";
import TrainingLesson from "./components/Training/TrainingLesson";
import TrainingTracks from "./pages/adestramento/TrainingTracks";

function App() {
  const { user } = useAuthContext();

  // ✅ Chamando a permissão para notificações ao iniciar o app
  useEffect(() => {
    requestNotificationPermission();
    checkUserProgressAndNotify(); // ✅ Verifica progresso e notifica usuário se necessário

    // ✅ Registra o Service Worker sem modificar o resto do código
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("✅ Service Worker registrado:", registration);
        })
        .catch((err) => {
          console.error("❌ Erro ao registrar Service Worker:", err);
        });
    }
  }, []);
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

  useEffect(() => {
    if (user?.uid !== "h1SKqzfs39X7UAgPlkDrnXbRrhy2") return;
  }, []);

<<<<<<< HEAD
  // useEffect(() => {
  //   if (process.env.NODE_ENV === "development") return;

  //   const options = {
  //     autoConfig: true,
  //     debug: true,
  //   };

  //   // Unique Event ID para deduplicação
  //   const uniqueEventId = getUniqueId(); // Adicione sua função para gerar ID único aqui

  //   ReactPixel.init("PIXEL", {}, options); // TODO: Substituir "PIXEL" pelo ID do seu pixel
  //   fbq("track", "PageView", {}, { eventID: uniqueEventId });

  //   // Seus próprios cookies para fbp e fbc
  //   const fbp = getCookie("_fbp");
  //   const fbc = getCookie("_fbc");

  //   // Chamada API para enviar evento de PageView para seu próprio endpoint
  //   fetch("URL_FACEBOOKCAPI", {
  //     // TODO: Substituir "URL_FACEBOOKCAPI" pela URL do seu endpoint
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       event_name: "PageView",
  //       fbp: fbp,
  //       fbc: fbc,
  //       event_id: uniqueEventId,
  //       action_source: "website",
  //       event_source_url: window.location.href.split("?")[0],
  //       user_agent: navigator.userAgent,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Houve um erro no envio:", error));
  // }, []);

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);

  //   // Parâmetros que você quer capturar
  //   const parameters = [
  //     "utm_source",
  //     "utm_medium",
  //     "utm_campaign",
  //     "utm_term",
  //     "utm_content",
  //     "sck",
  //     "ref",
  //   ];

  //   // Loop para salvar cada parâmetro em um cookie, se ele existir
  //   parameters.forEach((param) => {
  //     const value = urlParams.get(param);
  //     if (value) {
  //       setCookie(param, value, 60); // Salvando o valor em um cookie que expira em 60 dias
  //     }
  //   });
  // }, [window.location.search]);

  return <AppRoutes />;
=======
  return (
    <Router>
      <AppRoutes />
      <Routes>
        <Route path="/training" element={<TrainingTracks />} />
        <Route path="/training/:trackId" element={<LessonsList />} />
        <Route path="/lesson/:trackId/:lessonId" element={<TrainingLesson />} />
      </Routes>
    </Router>
  );
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
}

export default App;
