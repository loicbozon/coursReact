## Installation du projet

Apres avoir fait un ### `git clone https://github.com/loicbozon/coursReact.git`

Pour le back-end, avant de lancer pour installer quelques manipulations sont nécéssaires en lançant les commandes suivantes :

### `composer update`
### `cp .env.example .env`

il est possible de devoir modifier le nom de la db dans le fichier .env par : "db_photograph"

### `composer install --ignore-platform-req=ext-fileinfo`

### `php artisan key:generate`

### `php artisan migrate`

le back-end s'execute normalement sur l'url 'http://127.0.0.1:8000' sur un serveur php à l'aide de wamp par exemple



Pour le front une simple installation des dépendances suffisent avec :

### `npm install` ou ### `yarn install`

avant de lancer le projet avec :

### `npm start` ou ### `yarn start`

l'application se lance sur l'url :
 [http://localhost:3000](http://localhost:3000) 

