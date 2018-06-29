
export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export function delay(n) {
    return new Promise(resolve=>setTimeout(resolve, n))
}

export class ArrayModel {

    constructor(component) {
        this.component = component
        // this.array = [0,0,0]
        this.array = []
        this.mutateStructure()
        this.mutateValues()
    }

    modelChanged() {
        this.component.forceUpdate();
    }

    async mutateValues() {

        while (true) {
            this._mutateValues()
            this.modelChanged()
            await delay(10)
        }
    }

    _mutateValues() {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i] = getRandomInt(20)
        }
    }

    async mutateStructure() {
        while (true) {
            this._mutateStructure()
            this.modelChanged()
            await delay(333)
        }
    }


    _mutateStructure() {
        let newSize = getRandomInt(20)
        this.array = new Array(newSize).fill(0)
    }


    get values() {
        return this.array
    }


}