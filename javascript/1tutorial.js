/*Stack*/
const _stacklist = new WeakMap();
class Stack{
    constructor(){
        //Array that begins empty
        _stacklist.set(this, []);
    }

    //pop - removes object on the top of stack - on empty stack - throws exception
    pop(){
        const stacklist = _stacklist.get(this);
        if(stacklist.length === 0){
            throw new Error("Empty Stack");
        }else{
            stacklist.pop();
        }
    }

    //push - adds object on the top of stack
    push(val){
        _stacklist.get(this).push(val);
    }

    //peek - shows last object on the stack -  on empty stack - throws exception
    peek(){
        const stacklist = _stacklist.get(this);
        if(stacklist.length === 0){
            throw new Error("Empty Stack");
        }else{
            return stacklist[stacklist.length - 1];
        }
    }

    //count - numbers of objects in the stack // get because it should only be radable
    get count(){
        return _stacklist.get(this).length;
    }
}