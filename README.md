# Dofous
## _Wrapper simple et rapide pour https://dofapi.fr/_

- Installer la dernière version de dofous via la commande `npm install dofous@latest`
- L'utilité de ce 'module' est de faciliter l'usage de l'api de **dofapi**.
- Vous pouvez consultez da page Github de [Dofapi](https://github.com/dofapi/dofapi)
- Vous pouvez consultez la page sur le site [npm](https://www.npmjs.com/package/dofapi-wrapper)

## Fonctionnalités
 `getClasses()` - Vous permet d'obtenir toutes les classes.
- **name** (optionel) : Permet d'obtenir une classe via son nom.
- **id** (optionel) : Permet d'obtenir une classe via son identifiant.

__Par défaut, toutes les classes sont renvoyées.__
```js
const Dofus = require("dofapi-wrapper.js");
const dofus = new Dofus();

const classes = dofus.getClasses({ name: 'Féca', id: 1 });
```

`getWeapons()` - Vous permet d'obtenir toutes les armes.
- **name** (optionel) : Permet d'obtenir des armes avec le même nom.
- **min_level** (optionel) : Niveau minimum des armes.
- **min_level** (optionel) : Niveau maximum des armes.

__Par défaut, toutes les armes sont renvoyées.__
```js
const Dofus = require("dofapi-wrapper.js");
const dofus = new Dofus();

const classes = dofus.getWeapons({ name: 'koutoulou', min_level: 1, max_level: 200 });
```

`getEquipments()` - Vous permet d'obtenir tous les équipements.
- **name** (optionel) : Permet d'obtenir des équipements avec le même nom.
- **min_level** (optionel) : Niveau minimum des équipements.
- **min_level** (optionel) : Niveau maximum des équipements.

__Par défaut, tous les équipements sont renvoyées.__
```js
const Dofus = require("dofapi-wrapper.js");
const dofus = new Dofus();

const classes = dofus.getSets({ name: 'blop', min_level: 1, max_level: 200 });
```

`getSets()` - Vous permet d'obtenir toutes les panoplies.
- **name** (optionel) : Permet d'obtenir des panoplies avec le même nom.
- **min_level** (optionel) : Niveau minimum des équipements.
- **min_level** (optionel) : Niveau maximum des équipements.

__Par défaut, toutes les panoplies sont renvoyées.__
```js
const Dofus = require("dofapi-wrapper.js");
const dofus = new Dofus();

const classes = dofus.getSets({ name: 'bouftou', min_level: 1, max_level: 200 });
```

`getConsumables()` - Vous permet d'obtenir tous les consummables.
- **name** (optionel) : Permet d'obtenir des consummables avec le même nom.
- **min_level** (optionel) : Niveau minimum des équipements.
- **min_level** (optionel) : Niveau maximum des équipements.

__Par défaut, tous les consummables sont renvoyées.__
```js
const Dofus = require("dofapi-wrapper.js");
const dofus = new Dofus();

const classes = dofus.getConsumables({ name: 'pomme', min_level: 1, max_level: 200 });
```

`getMounts()` - Vous permet d'obtenir toutes les montures.
- **name** (optionel) : Permet d'obtenir des montures avec le même nom.

__Par défaut, toutes les montures sont renvoyées.__
```js
const Dofus = require("dofapi-wrapper.js");
const dofus = new Dofus();

const classes = dofus.getMounts({ name: 'amande' });
```

##### **Si vous renconstrez un problème quelconque, veuillez m'en en faire part sur discord Zeleff_#1615**
