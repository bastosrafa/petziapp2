const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const FIREBASE_API_KEY = functions.config().project.api_key; // TODO: Definir API key do projeto
=======
// Pegando a chave da API do Firebase Functions Config
require("dotenv").config();
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8

const app = express();

// Inicializa o Firebase Admin
if (admin.apps.length === 0) {
  admin.initializeApp();
}

const auth = admin.auth();

// Configurações do CORS
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://app.seudominioaqui.com", // TODO: Altere para o domínio do seu app
    ];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const tokenHeader = req.headers.authorization;
  const idToken = tokenHeader.split(" ")[1];

  if (!idToken || !oldPassword || !newPassword) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
<<<<<<< HEAD

=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
    const uid = decodedToken.uid;
    const user = await auth.getUser(uid);
    const email = user.email;

    try {
      // Primeiro, tentamos autenticar o usuário com o email e a senha antiga
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: oldPassword,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (data && data.localId) {
        const uid = data.localId;

        // Se a autenticação for bem-sucedida, atualizamos a senha do usuário
        await auth.updateUser(uid, { password: newPassword });

        res
          .status(200)
          .json({ success: true, message: "Password updated successfully" });
      } else {
        throw new Error("Old password is incorrect.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }

    await auth.updateUser(uid, { password: newPassword });

    res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

<<<<<<< HEAD
exports.changePassword = functions.https.onRequest(app);
=======
// Exportando a função para o Firebase
exports.changePassword = functions.https.onRequest(app);

// Iniciando o servidor localmente se necessário
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
