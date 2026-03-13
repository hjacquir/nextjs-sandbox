# nextjs-sandbox
Sand box pour apprendre Next JS
## Commandes
### Usuelles
* ``docker compose up -d --build``
* ``docker exec -it reactjs bash``
* ``npm run dev``
### Base de données
* Bdd utilisée de type Sqlite : ``npm install sqlite3``
* Utilisation de l'ORM Prisma : ``npm install prisma --save-dev && npm install @prisma/client``
* Initialisation de Prisma avec la data source Sqlite : ``npx prisma init --datasource-provider sqlite``
* Ajouter le fichier dev.db : ``cd prisma`` puis `touch dev.db`
* Copier-coller le fichier ``prisma/sample.env`` en ``.env``
* Création de la bdd : ``npx prisma db push``
* Générer le client Prisma : ``npx prisma generate``
* Installer le driver adapter sqlite pour le constructeur PrismaClient : ``npm install @prisma/adapter-better-sqlite3``
* Ajouter les dépendances pour seeder de la bdd : ``npm install -D tsx``
* Seeder ( = rajouter les données de fixtures) la bdd : ``npx prisma db seed``
* Reset la bdd : ``npx prisma migrate reset --force && npx prisma db push && npx prisma db seed``
## Usages
* front : ``http://localhost:3000/``
## todo
* ajout form pour ajouter produit
* login form et authentification
* connexion bdd
* menu drop down
* injection title et layout commun
* pagination list
