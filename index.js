'use strict';

const DOFAPI_URL = 'https://fr.dofus.dofapi.fr/';

class Dofous {
    constructor() {
    }

    _filter(data, options) {
        return data.filter(item => {
            if (options.min_level > 200) options.min_level = 200;
            else if (options.min_level <= 0) options.min_level = 1;
            if (options.max_level > 200) options.max_level = 200;
            else if (options.max_level <= 0) options.max_level = 1;

            if (options.name) return item.name.toLowerCase().includes(options.name.toLowerCase()) && item.level >= options.min_level && item.level <= options.max_level;

            return item.level >= options.min_level && item.level <= options.max_level;
        });
    };

    async _checkUpdate() {
        if (!require("node-fetch")) return;
        const packageData = await require("node-fetch")(
          `https://registry.npmjs.com/dofous`
        ).then((text) => text.json());
        if (
          require("../../package.json").version !== packageData["dist-tags"].latest
        ) {
            console.log("\u001b[1;34m [Dofous]\u001b[0m Une nouvelle version du module est désormais disponible ! \u001b[1;32m npm i dofous@latest\u001b[0m")
        }
    };
    
    /**
     * Envoie une requête vers l'api https://fr.dofus.dofapi.fr/ et récupère les données en format JSON
     * @param {string} endpoint - Type d'item
     * @param {string} method - Type de requête
     */
    async request(endpoint, method = 'GET') {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(`${DOFAPI_URL}${endpoint}`, options);
        return await response.json();
    };
    
    /**
     * Obtient les armes du jeu via vos critères de recherche.
     * @param {name} name - Nom
     * @param {number} min_level - Niveau minimum
     * @param {number} max_level - Niveau maximum
     */
    async getWeapons(options = { name: null, min_level: 1, max_level: 200 }) {
        if (typeof options.min_level !== 'number' || typeof options.max_level !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Les paramètres min_level et max_level doivent être des nombres !' });
        if (options.name && typeof options.name !== 'string') throw new TypeError('INVALID_STRING', { cause: 'Le paramètre name doit être une chaine de caractère !' });

        var weapons = await this.request('weapons').then(data => {
            return this._filter(data, options);
        });

        if (!weapons.length) return { message: 'not weapons found.', error: 'NOT_FOUND' };
        else return weapons;
    };

    /**
     * Obtient les équipements du jeu via vos critères de recherche.
     * @param {name} name - Nom
     * @param {number} min_level - Niveau minimum
     * @param {number} max_level - Niveau maximum
     */
    async getEquipments(options = { name: null, min_level: 1, max_level: 200 }) {
        if (typeof options.min_level !== 'number' || typeof options.max_level !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Les paramètres min_level et max_level doivent être des nombres !' });
        if (options.name && typeof options.name !== 'string') throw new TypeError('INVALID_STRING', { cause: 'Le paramètre name doit être une chaine de caractère !' });

        if (options.level && options.level <= 0) options.level = 1;
        
        var equipments = await this.request('equipments').then(data => {
            return this._filter(data, options);
        });

        if (!equipments.length) return { message: 'not equipments found.', error: 'NOT_FOUND' };
        else return equipments;
    };

    /**
     * Obtient les familiers du jeu via vos critères de recherche.
     * @param {name} name - Nom
     * @param {number} level - Niveau (1 | 60)
     */
    async getPets(options = { name: null, min_level: 1, max_level: 60 }) {
        if (typeof options.min_level !== 'number' || typeof options.max_level !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Les paramètres min_level et max_level doivent être des nombres !' });
        if (options.name && typeof options.name !== 'string') throw new TypeError('INVALID_STRING', { cause: 'Le paramètre name doit être une chaine de caractère !' });

        if (options.level) {
            if (options.level > 60) options.level = 60;
            if (options.level <= 0) options.level = 1;
        };
        
        var pets = await this.request('pets').then(data => {
            return this._filter(data, options);
        });

        if (!pets.length) return { message: 'not pets found.', error: 'NOT_FOUND' };
        else return pets;
    };
    
    /**
     * Obtient les montures du jeu via vos critères de recherche.
     * @param {name} name - Nom
     */
    async getMounts(options = { name: null }) {
        if (typeof options.min_level !== 'number' || typeof options.max_level !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Les paramètres min_level et max_level doivent être des nombres !' });
        if (options.name && typeof options.name !== 'string') throw new TypeError('INVALID_STRING', { cause: 'Le paramètre name doit être une chaine de caractère !' });

        var mounts = await this.request('mounts').then(data => {
            return this._filter(data, options);
        });

        if (!mounts.length) return { message: 'not mounts found.', error: 'NOT_FOUND' };
        else return mounts;
    };

    /**
     * Obtient les panoplies du jeu via vos critères de recherche.
     * @param {name} name - Nom
     * @param {number} min_level - Niveau minimum
     * @param {number} max_level - Niveau maximum
     */
    async getSets(options = { name: null, min_level: 1, max_level: 200 }) {
        if (typeof options.min_level !== 'number' || typeof options.max_level !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Les paramètres min_level et max_level doivent être des nombres !' });
        if (options.name && typeof options.name !== 'string') throw new TypeError('INVALID_STRING', { cause: 'Le paramètre name doit être une chaine de caractère !' });

        if (options.level && options.level <= 0) options.level = 1;

        var sets = await this.request('sets').then(data => {
            return this._filter(data, options);
        });

        if (!sets.length) return { message: 'not sets found.', error: 'NOT_FOUND' };
        else return sets;
    };

    /**
     * Obtient les consummables du jeu via vos critères de recherche.
     * @param {name} name - Nom
     * @param {number} min_level - Niveau minimum
     * @param {number} max_level - Niveau maximum
     */
    async getConsumables(options = { name: null, min_level: 1, max_level: 200 }) {
        if (typeof options.min_level !== 'number' || typeof options.max_level !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Les paramètres min_level et max_level doivent être des nombres !' });
        if (options.name && typeof options.name !== 'string') throw new TypeError('INVALID_STRING', { cause: 'Le paramètre name doit être une chaine de caractère !' });

        var consumables = await this.request('consumables').then(data => {
            return this._filter(data, options);
        });

        if (!consumables.length) return { message: 'not consumables found.', error: 'NOT_FOUND' };
        else return consumables;
    };

    async getClasses(options = { name: null, id: null }) {
        if (options.id && typeof options.id !== 'number') throw new TypeError('INVALID_NUMBER', { cause: 'Le paramètre id doit être un nombre !' });

        var classes = await this.request('classes').then(data => {
            return this._filter(data);
        });

        if (!classes.length) return { message: 'Aucune classes trouvée.', error: 'NOT_FOUND' };
        else return classes;
    };

}

module.exports = Dofous;