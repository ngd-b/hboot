function event(){
    this._events = {};
} 
event.prototype = {
    $on:function(types,fn){
        // 事件监听
        if(Array.isArray(types)){
            types.forEach(item=>this.$on(item,fn));
        }
        let listeners = this._events[types]; 
        if(!listeners){
            this._events[types]=[]
        }
        this._events[types].push(fn);
    },
    $off:function(types,fn){
        // 事件解绑
        if(Array.isArray(types)){
            types.forEach(item=>this.$off(item,fn));
        }
        let listeners = this._events[types];
        if(!listeners){
            return;
        }
        if(!fn){
            this._events[types] = null;
            return;
        }
        let len = listeners.length;
        for(let i=len-1;i>-1;i--){
            if(listeners[i] === fn||listeners[i].fn === fn){
                listeners.splice(i,1);
            }
        }
    },
    $emit:function(types){
        // 事件发送
        if(Array.isArray(types)){
            types.forEach(item=>this.$emit(item));
        }
        let listeners =this._events[types];
        if(listeners){
            listeners.forEach(fn=>fn.call(this,[...arguments].splice(1)));
        }
    },
    $once:function(types,fn){
        // 事件监听一次
        let $this = this;
        if(Array.isArray(types)){
            types.forEach(item=>this.$once(item,fn));;
        }
        function on(){
            $this.$off(types,on);
            fn.apply(this,arguments);
        }
        on.fn = fn;
        this.$on(types,on);
    }
}

let myEvent = new event();
myEvent.$on('hello',function(){
    console.log('hello wolrd',[...arguments]);
});
myEvent.$emit('hello',"first data","second data");
myEvent.$off('hello');
myEvent.$emit('hello',"third data");
// once
myEvent.$once("world",function(){
    console.log('once event');
});
myEvent.$emit("world");
myEvent.$emit("world");