# Cabinet Ben M'kaddem Ahmed — site vitrine

Site vitrine responsive réalisé en **HTML5, CSS3 et JavaScript Vanilla**, sans framework.

## Lancer le site
1. Décompresser l'archive.
2. Ouvrir `index.html` dans un navigateur récent.
3. Pour un aperçu plus fidèle, lancer un serveur statique local depuis ce dossier (par exemple `python -m http.server 8000`), puis ouvrir `http://localhost:8000`.

## Structure
- `index.html` : contenu, sections et métadonnées SEO.
- `css/style.css` : identité visuelle, responsive design et animations.
- `js/script.js` : navigation mobile, apparition au scroll, FAQ et validation locale du formulaire.
- `assets/logo/monogramme.svg` : monogramme provisoire BMA.
- `assets/images/` : dossier réservé aux photographies locales éventuelles.

## Personnalisation impérative avant publication
- Remplacer les coordonnées entre crochets : adresse, ville, téléphone, e-mail et horaires.
- Confirmer les domaines d'intervention réellement exercés et supprimer les cartes non pertinentes. Ces domaines ne sont pas présentés comme des spécialités officiellement reconnues.
- Ajouter l'adresse exacte pour intégrer une carte Google Maps.
- Remplacer les photos de démonstration si nécessaire. Les photographies actuelles sont chargées depuis Unsplash via URL distante : une connexion Internet est nécessaire et les URL peuvent être remplacées par des fichiers locaux dans `assets/images/`.
- Ajouter une photographie authentique du cabinet ou de Maître Ben M'kaddem Ahmed uniquement si elle est fournie et autorisée.
- Faire valider les mentions légales, la politique de confidentialité, les textes et la conformité déontologique par le cabinet avant mise en ligne.
- Ajouter un backend ou un prestataire d'envoi sécurisé au formulaire. En l'état, il valide les champs dans le navigateur mais **n'envoie aucun message**. Ne pas collecter de données confidentielles avec cette version de démonstration.
- Configurer le nom de domaine, l'hébergement, HTTPS, les sauvegardes et les mesures de sécurité adaptées.

## Images
Les images de fond utilisent des URL `images.unsplash.com`. Elles sont des visuels d'ambiance génériques et ne représentent pas le cabinet ni son avocat. Vérifier les conditions de licence et la disponibilité des images au moment du déploiement.

## Architecture multilingue
Le contenu est actuellement en français (`lang="fr"`). Une version arabe pourra être ajoutée dans un répertoire dédié avec `lang="ar"` et `dir="rtl"` ; une version anglaise dans un répertoire `en/`. Prévoir des liens de langue lorsque les traductions auront été validées.

## Note
Ce projet est une base technique et éditoriale à personnaliser. Il ne constitue ni un avis juridique ni une validation de conformité réglementaire ou déontologique.
