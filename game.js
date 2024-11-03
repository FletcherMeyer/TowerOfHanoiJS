/**
 * General game class for creating and managing a Tower of Hanoi game. Constructor class will initialize the game with 3 rings in the first stack.
 * The objective of the game is to move all rings from stack one to stack three.
 */
export default class Hanoi {
    /**
     * 
     * @param {number} rings Changes the amount of rings spawned. Initially three.
     */
    constructor(rings = 3) {
        if (rings < 1) return;
        this.columns = {
            1: [],
            2: [],
            3: []
        }
        this.minimumMoves = Math.pow(2, rings) - 1;
        for (let i = rings; i > 0; i--) {
            this.columns[1].push(i);
        }
    }

    /**
     * 
     * @param {number} originStack Stack to select a ring from represented as an element.
     * @param {number} destinationStack Stack we are moving our ring to represented as an element.
     * @returns {boolean} Success of moving the ring.
     */
    moveRing(originElement, destinationElement) {
        /* isMovable method determined the rings are not compatible. */
        if (!this.isMovable(this.columns[originElement], this.columns[destinationElement])) return false;

        /* The method determined success! Proceed with moving. */

        /* Declare the stacks for more readability. */
        const originStack = this.columns[originElement];
        const destinationStack = this.columns[destinationElement];

        /* Declare ring value for more readability. */
        const originRing = originStack[originStack.length - 1];

        /* Move ring. */
        destinationStack.push(originRing);
        originStack.pop();

        /* Declare changes. */
        this.columns[originElement] = originStack;
        this.columns[destinationElement] = destinationStack;
    }

    /**
     * 
     * @param {number array} originStack Origin of ring movement.
     * @param {number array} destinationStack Destination of ring movement.
     * @returns {object} Returns the object as modified. If it can not be changed, returns the given parameters.
     */
    static moveRing(originStack, destinationStack) {
        /* isMovable method determined the rings are not compatible. */
        if (this.isMovable(originStack, destinationStack)) {

            const originRing = originStack[originStack.length - 1];

            /* Move ring. */
            destinationStack.push(originRing);
            originStack.pop();
        }

        return { originStack, destinationStack };
    }
    /**
     * Determine if the origin stack's top ring can be moved to the destination stack.
     * @param {number array} originStack Origin stack derived from the object.
     * @param {number array} destinationStack Destination stack derived from the object.
     * @returns {boolean} Returns whether the ring is moveable to another selected stack.
     */
    isMovable(originStack, destinationStack) {
        /* Check if the length of the desination is zero. This means there is no value and all rings may go here. */
        if (originStack.length == 0) return;
        if (destinationStack.length == 0) return true;

        /* The rings to be compared. */
        const originRing = originStack[originStack.length - 1];
        const destinationRing = destinationStack[destinationStack.length - 1];

        /* Determine if the ring being moved is smaller than the ring it is being set on. */
        if (originRing >= destinationRing) return false;
        return true;
    }

    /**
     * @returns {boolean} Returns true if the game was won.
     */
    checkWin() {
        if (this.columns[1].length == 0 && this.columns[2].length == 0) return true;
        return false;
    }

    /**
     * @returns {void} Prints the value of each stack into the console.
     */
    printStacks() {
        console.log(this.columns);
    }

}