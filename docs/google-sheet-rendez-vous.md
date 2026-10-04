# Brancher la prise de rendez-vous sur un Google Sheet

Chaque demande faite sur la page Consultations arrive dans un Google Sheet,
et le docteur reçoit un e-mail. Tant que ce n'est pas branché, le site envoie
les demandes par WhatsApp.

Comptez environ 15 minutes. À faire **une seule fois**, connecté avec le
**compte Google du docteur** (boulag92@gmail.com).

## 1. Créer le tableau

1. Aller sur <https://sheets.new> : un tableau vide s'ouvre.
2. Le renommer en haut à gauche, par exemple « Rendez-vous – Dr Boulaguiem ».

## 2. Coller le programme

1. Dans le tableau : menu **Extensions → Apps Script**.
2. Effacer tout le texte présent, puis coller tout le contenu du fichier
   [`apps-script-rendez-vous.gs`](apps-script-rendez-vous.gs).
3. Cliquer sur l'icône **Enregistrer** (la disquette).
4. À gauche, **Paramètres du projet** (roue dentée) → **Fuseau horaire** :
   choisir **(GMT+01:00) Casablanca**.

## 3. Autoriser le programme

1. Revenir dans **Éditeur** (icône `< >` à gauche).
2. En haut, dans la liste des fonctions, choisir **setup**, puis cliquer sur
   **Exécuter**.
3. Google demande une autorisation : **Examiner les autorisations** → choisir
   le compte du docteur.
4. Un écran « Google n'a pas validé cette application » apparaît : c'est
   normal, le programme vient d'être créé par vous. Cliquer sur **Paramètres
   avancés** → **Accéder à … (non sécurisé)** → **Autoriser**.

Les onglets « Rendez-vous » et « Fermetures » apparaissent dans le tableau.

## 4. Mettre en ligne

1. En haut à droite : **Déployer → Nouveau déploiement**.
2. Roue dentée à côté de « Sélectionner le type » → **Application Web**.
3. Régler :
   - **Exécuter en tant que** : Moi
   - **Qui a accès** : Tout le monde
4. **Déployer**, puis copier l'**URL de l'application Web**. Elle ressemble à
   `https://script.google.com/macros/s/…/exec`.
5. M'envoyer cette adresse : je la mets dans le site.

## Au quotidien

- **Nouvelle demande** : une ligne apparaît dans l'onglet « Rendez-vous »
  avec le statut « À confirmer », et un e-mail arrive. Rappeler le patient,
  puis choisir « Confirmé » dans la liste de la colonne Statut (c'est juste
  un repère).
- **Annuler un rendez-vous** : choisir **Annulé** dans la colonne Statut (ou
  supprimer la ligne). Le créneau redevient libre sur le site dès qu'on
  recharge la page.
- **Fermer un jour** (congés, formation…) : dans l'onglet « Fermetures »,
  double-cliquer sur une case vide de la colonne A et choisir la date dans le
  calendrier. Le jour devient grisé sur le site dès qu'on recharge la page.
  Pour le rouvrir, supprimer la ligne.
- Les noms et téléphones ne sont jamais visibles sur le site : celui-ci ne
  reçoit que la liste des créneaux déjà pris.

## Si on modifie le programme plus tard

**Déployer → Gérer les déploiements** → crayon → **Version : Nouvelle
version** → **Déployer**. L'adresse reste la même, rien à changer sur le site.
