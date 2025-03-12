const responses = {
  "pourquoi les chats dorment-ils autant ?":
    "Les chats dorment en moyenne 12 à 16 heures par jour pour économiser leur énergie. C'est la belle vie ! 💤",
  "pourquoi les chats ronronnent-ils ?":
    "Le ronronnement peut signifier qu'un chat est heureux, mais aussi qu'il essaie de se calmer. 🐱💖",
  "pourquoi les chats aiment les cartons ?":
    "Les cartons offrent un abri sûr et chaud, parfait pour un petit félin aventurier ! 📦🐾",
  "pourquoi mon chat me suit partout ?":
    "Parce qu'il t'adore et veut s'assurer que tu ne fasses rien de louche sans lui ! 😹",
  "pourquoi mon chat pétrit-il avec ses pattes ?":
    "C'est un souvenir de leur enfance lorsqu'ils pétrissaient leur mère pour faire sortir le lait. C'est aussi un signe qu'il est détendu et heureux ! 🐾💕",
  "pourquoi mon chat me mord après un câlin ?":
    "Trop de stimulation peut être inconfortable pour lui. Il t'aime bien, mais il a besoin de son espace ! 🐱😼",
  "pourquoi mon chat remue la queue ?":
    "Cela peut signifier qu'il est excité, agacé ou en train de réfléchir à une attaque... Fais attention ! 🐾👀",
  "pourquoi les chats grimpent partout ?":
    "C'est un instinct naturel de prédateur ! Ils aiment observer leur territoire d'en haut. 🏡🐈",
  "que mangent les chats ?":
    "Principalement de la viande ! Ils sont des carnivores stricts et ont besoin de protéines pour rester en forme. 🍗🐱",
  "pourquoi mon chat miaule la nuit ?":
    "Les chats sont naturellement plus actifs la nuit, c'est un héritage de leurs ancêtres chasseurs. Il se pourrait qu'il cherche à attirer ton attention ou qu'il soit simplement en quête de nourriture. 😺🌙",
  "comment savoir si mon chat est stressé ?":
    "Si ton chat cache son visage, se cache dans des endroits insolites, miaule plus souvent, ou a un comportement agité, il se pourrait qu'il soit stressé. Les changements dans son environnement peuvent également provoquer du stress. 🐾😿",
  "pourquoi les chats ont-ils des moustaches ?":
    "Les moustaches des chats, appelées vibrisses, sont des outils sensoriels essentiels. Elles les aident à détecter les obstacles et à naviguer dans des espaces étroits, tout en détectant les changements de courant d'air. 🐱👃",
  "mon chat a des griffes qui poussent trop vite, que faire ?":
    "Il est important de couper les griffes de ton chat régulièrement. Si tu remarques qu'elles poussent trop vite, consulte un vétérinaire. Il pourra te conseiller sur la meilleure fréquence pour couper les griffes. ✂️🐾",
  "pourquoi mon chat se roule-t-il sur le dos ?":
    "Un chat qui se roule sur le dos montre qu'il se sent en sécurité et qu'il veut attirer ton attention pour des caresses. C'est une forme de comportement amical. 😻💖",
  "que faire si mon chat vomit souvent ?":
    "Si ton chat vomit fréquemment, cela peut être dû à des boules de poils ou à un problème de santé. Il est conseillé de consulter un vétérinaire pour en déterminer la cause. 🐱🤢",
  "est-ce que les chats peuvent reconnaître leur nom ?":
    "Oui, les chats peuvent apprendre à reconnaître leur nom ! Bien qu'ils ne réagissent pas toujours, ils savent qui les appelle, surtout s'ils associent leur nom à quelque chose d'agréable, comme de la nourriture. 😸🎶",
  "pourquoi les chats mangent-ils de l'herbe ?":
    "Les chats mangent parfois de l'herbe pour se purger ou aider à éliminer les boules de poils de leur estomac. Cela peut aussi les aider à se soulager en cas de maux de ventre. 🌱🐾",
  "comment prévenir les maladies chez les chats ?":
    "Pour prévenir les maladies, il est important de veiller à ce que ton chat soit bien vacciné, vermifugé et qu'il ait des bilans de santé réguliers chez le vétérinaire. Une alimentation équilibrée et de l'exercice sont aussi essentiels. 🐱💪",
  "pourquoi mon chat se lèche-t-il tout le temps ?":
    "Le léchage est un comportement naturel chez le chat. Il se lèche pour se nettoyer, mais aussi pour se détendre. Si ton chat se lèche excessivement, cela pourrait être un signe de stress ou de problème dermatologique. 🧼🐾",
  "les chats peuvent-ils voir dans le noir ?":
    "Les chats voient mieux dans des conditions de faible luminosité grâce à une grande quantité de cellules rétiniennes appelées bâtonnets. Cela les aide à chasser la nuit, mais ils ne peuvent pas vraiment voir dans le noir total. 🌑👀",
  "pourquoi mon chat se cache-t-il sous le canapé ?":
    "Les chats aiment se cacher pour se sentir en sécurité. Si ton chat se cache souvent, cela peut être un signe qu'il veut un peu de tranquillité ou qu'il est timide. 🛋️🐱",
  "un chat peut-il vivre seul ?":
    "Oui, un chat peut vivre seul, mais il a besoin de compagnie et de stimulation mentale pour éviter l'ennui. Si tu es souvent absent, il est bon de lui offrir des jouets ou un autre animal pour qu'il ne se sente pas trop seul. 😺🏡",
  "mon chat aime les câlins, pourquoi ?":
    "Ton chat aime les câlins parce que cela renforce son lien avec toi. Le contact physique lui procure de la sécurité et du confort, surtout s'il a été habitué dès son plus jeune âge à être câliné. 🤗🐾",
};

const questions = [
  "Pourquoi les chats dorment-ils autant ?",
  "Pourquoi les chats ronronnent-ils ?",
  "Pourquoi les chats aiment les cartons ?",
  "Pourquoi mon chat me suit partout ?",
  "Pourquoi mon chat pétrit-il avec ses pattes ?",
  "Pourquoi mon chat me mord après un câlin ?",
  "Pourquoi mon chat remue la queue ?",
  "Pourquoi les chats grimpent partout ?",
  "Que mangent les chats ?",
  "Pourquoi mon chat miaule la nuit ?",
  "Comment savoir si mon chat est stressé ?",
  "Pourquoi les chats ont-ils des moustaches ?",
  "Mon chat a des griffes qui poussent trop vite, que faire ?",
  "Pourquoi mon chat se roule-t-il sur le dos ?",
  "Que faire si mon chat vomit souvent ?",
  "Est-ce que les chats peuvent reconnaître leur nom ?",
  "Pourquoi les chats mangent-ils de l'herbe ?",
  "Comment prévenir les maladies chez les chats ?",
  "Pourquoi mon chat se lèche-t-il tout le temps ?",
  "Les chats peuvent-ils voir dans le noir ?",
  "Pourquoi mon chat se cache-t-il sous le canapé ?",
  "Un chat peut-il vivre seul ?",
  "Mon chat aime les câlins, pourquoi ?",
];

const userInputElement = document.getElementById("userInput");
const messagesElement = document.getElementById("messages");
const questionSelectElement = document.getElementById("questionSelect");

// Fonction pour afficher un message dans la fenêtre de chat
function displayMessage(content, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = content;
  messagesElement.appendChild(messageElement);
  messagesElement.scrollTop = messagesElement.scrollHeight;
}

// Fonction pour envoyer un message
function sendMessage() {
  const userMessage = userInputElement.value.trim();
  if (userMessage !== "") {
    displayMessage(userMessage, "user");
    processMessage(userMessage);
    userInputElement.value = "";
  }
}

// Fonction pour traiter le message de l'utilisateur
function processMessage(message) {
  const lowerCaseMessage = message.toLowerCase();

  // Réponse pour les messages non trouvés

  if (responses[lowerCaseMessage]) {
    displayMessage(responses[lowerCaseMessage], "bot");
  } else if (message.toLowerCase().includes("merci")) {
    displayMessage("De rien ! Je suis là pour t'aider 😸", "bot");
  } else if (message.toLowerCase().includes("bonjour")) {
    displayMessage("Miaou ! Salut humain ! 🐾", "bot");
  } else if (message.toLowerCase().includes("salut")) {
    displayMessage("Miaou ! Salut à toi ! 😺", "bot");
  } else if (message.toLowerCase().includes("comment ça va")) {
    displayMessage("Toujours en train de ronronner ! Et toi ? 😺", "bot");
  } else if (message.toLowerCase().includes("au revoir")) {
    displayMessage(
      "À bientôt, humain ! N'oublie pas de me donner des croquettes en partant. 🐾",
      "bot"
    );
  } else {
    displayMessage(
      "Désolé, je n'ai pas compris. Essayons une autre question.",
      "bot"
    );
  }
}

// Remplir le sélecteur de questions
function populateQuestionSelect() {
  questions.forEach((question) => {
    const option = document.createElement("option");
    option.value = question;
    option.textContent = question;
    questionSelectElement.appendChild(option);
  });
}

// Remplir l'input utilisateur avec la question sélectionnée
function fillInputFromSelect() {
  const selectedQuestion = questionSelectElement.value;
  userInputElement.value = selectedQuestion;
}

// Appliquer une formule de politesse
function applyPoliteness() {
  const politenessSelect = document.getElementById("politenessSelect");
  const selectedPoliteness = politenessSelect.value;
  if (selectedPoliteness) {
    userInputElement.value = selectedPoliteness;
  }
}

// Appeler la fonction de remplissage des questions au chargement
populateQuestionSelect();
