(() => {
    'use strict';

    class Stack {
        constructor() {
            // initialize an empty array
            this.items = [];
        }

        // push a new item to the last index
        push(item) {
            this.items.push(item);
        }

        // remove the last item
        pop() {
            // if the stack is empty, return null
            // (it would also be reasonable to throw an exception)
            if (!this.items.length) {
                return null;
            }
            return this.items.pop();
        }

        // see what the last item is
        peek() {
            if (!this.items.length) {
                return null;
            }
            return this.items[this.items.length - 1];
        }
    }

    class LargestStack {
        constructor() {
            this._stack = new Stack();
        }

        push(item) {
            if (typeof (item) !== 'number') {
                throw new Error('Attempted to push item that was not a number.');
            }
            let topItem = this._stack.peek();
            this._stack.push({
                value: item,
                max: topItem === null ? item : Math.max(item, topItem.max)
            });
        }

        pop() {
            if (!this._stack.items.length) {
                throw new Error('Attempted to pop from empty stack.');
            }
            return this._stack.pop().value;
        }

        getMax() {
            if (!this._stack.items.length) {
                throw new Error('Attempted to get maximum value from empty stack.');
            }
            return this._stack.peek().max;
        }
    }

    module.exports = LargestStack;
})();
