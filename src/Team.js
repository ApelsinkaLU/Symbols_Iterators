export default class Team {
    constructor() {
        this.character = new Set();
    }

    addMembers(...character) {
        for (const character of characters) {
            this.characters.add(character);
        }
    }

    [Symbol.iterator]() {
        const characterList = Array.from(this.characters);
        let i = 0;

        return {
            next() {
                if (i < characterList.length) {
                    const currentCharacter = characterList[i];
                    i += 1;
                    return {
                        done: false,
                        value: currentCharacter,
                    };
                }
                return {
                    done: true,
                };
            },
        };
    }
}
