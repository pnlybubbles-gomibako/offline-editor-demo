'use strict';var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _marked=[_regexGLConfigs].map(regeneratorRuntime.mark);function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var runtime=createCommonjsModule(function(module){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */!function(global){"use strict";var hasOwn=Object.prototype.hasOwnProperty;var undefined;// More compressible than void 0.
var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=(typeof module==="undefined"?"undefined":_typeof(module))==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
module.exports=runtime;}// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
return;}// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){// If outerFn provided, then outerFn.prototype instanceof Generator.
var generator=Object.create((outerFn||Generator).prototype);var context=new Context(tryLocsList||[]);// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}runtime.wrap=wrap;// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";// Returning this object from the innerFn has the same effect as
// breaking out of the dispatch switch statement.
var ContinueSentinel={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg);};});}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(ctor.displayName||ctor.name)==="GeneratorFunction":false;};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction";}}genFun.prototype=Object.create(Gp);return genFun;};// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `value instanceof AwaitArgument` to determine if the yielded value is
// meant to be awaited. Some may consider the name of this method too
// cutesy, but they are curmudgeons.
runtime.awrap=function(arg){return new AwaitArgument(arg);};function AwaitArgument(arg){this.arg=arg;}function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value instanceof AwaitArgument){return Promise.resolve(value.arg).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return Promise.resolve(value).then(function(unwrapped){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
result.value=unwrapped;resolve(result);},reject);}}if((typeof process==="undefined"?"undefined":_typeof(process))==="object"&&process.domain){invoke=process.domain.bind(invoke);}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
previousPromise?previousPromise.then(callInvokeWithMethodAndArg,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter// If outerFn is a generator, return the full iterator.
:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult();}while(true){var delegate=context.delegate;if(delegate){if(method==="return"||method==="throw"&&delegate.iterator[method]===undefined){// A return or throw (when the delegate iterator has no throw
// method) always terminates the yield* loop.
context.delegate=null;// If the delegate iterator has a return method, give it a
// chance to clean up.
var returnMethod=delegate.iterator["return"];if(returnMethod){var record=tryCatch(returnMethod,delegate.iterator,arg);if(record.type==="throw"){// If the return method threw an exception, let that
// exception prevail over the original return or throw.
method="throw";arg=record.arg;continue;}}if(method==="return"){// Continue with the outer return, now that the delegate
// iterator has been terminated.
continue;}}var record=tryCatch(delegate.iterator[method],delegate.iterator,arg);if(record.type==="throw"){context.delegate=null;// Like returning generator.throw(uncaught), but without the
// overhead of an extra function call.
method="throw";arg=record.arg;continue;}// Delegate generator ran and handled its own exceptions so
// regardless of what the method was, we continue as if it is
// "next" with an undefined arg.
method="next";arg=undefined;var info=record.arg;if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;}else{state=GenStateSuspendedYield;return info;}context.delegate=null;}if(method==="next"){// Setting context._sent for legacy support of Babel's
// function.sent implementation.
context.sent=context._sent=arg;}else if(method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw arg;}if(context.dispatchException(arg)){// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
method="next";arg=undefined;}}else if(method==="return"){context.abrupt("return",arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
state=context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg,done:context.done};if(record.arg===ContinueSentinel){if(context.delegate&&method==="next"){// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
arg=undefined;}}else{return info;}}else if(record.type==="throw"){state=GenStateCompleted;// Dispatch the exception by looping back around to the
// context.dispatchException(arg) call above.
method="throw";arg=record.arg;}}};}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(Gp);Gp[iteratorSymbol]=function(){return this;};Gp[toStringTagSymbol]="Generator";Gp.toString=function(){return"[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}// Return an iterator with no values.
return{next:doneResult};}runtime.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){// Not sure about the optimal order of these conditions:
if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.next=finallyEntry.finallyLoc;}else{this.complete(record);}return ContinueSentinel;},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=record.arg;this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};return ContinueSentinel;}};}(// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global==="undefined"?"undefined":_typeof(global))==="object"?global:(typeof window==="undefined"?"undefined":_typeof(window))==="object"?window:(typeof self==="undefined"?"undefined":_typeof(self))==="object"?self:this);});var index=createCommonjsModule(function(module,exports){function __awaiter(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator.throw(value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments)).next());});}if(typeof module!=='undefined'&&module.exports){exports=module.exports=__awaiter;}exports.__awaiter=__awaiter;});window.__awaiter=index;function BooleanConverter(val){if(typeof val==="boolean"){return val;}else if(typeof val==="string"){switch(val){case"true":return true;case"false":return false;default:throw new Error("Invalid string "+val+" for parsing as boolean");}}throw new Error("Parsing failed: "+val);}var NodeUtility=function(){function NodeUtility(){_classCallCheck(this,NodeUtility);}_createClass(NodeUtility,null,[{key:"getNodeListIndexByElementIndex",/**
     * Get index of NodeList converted from index in Element
     * @param  {HTMLElement} targetElement Parent element of search target elements
     * @param  {number}      elementIndex  Index in element
     * @return {number}                    Index in NodeList
     */value:function getNodeListIndexByElementIndex(targetElement,elementIndex){var nodeArray=Array.prototype.slice.call(targetElement.childNodes);var elementArray=nodeArray.filter(function(v){return v.nodeType===1;});elementIndex=elementIndex<0?elementArray.length+elementIndex:elementIndex;var index=nodeArray.indexOf(elementArray[elementIndex]);return index===-1?null:index;}},{key:"getAttributes",value:function getAttributes(element){var attributes={};var domAttr=element.attributes;for(var i=0;i<domAttr.length;i++){var attrNode=domAttr.item(i);var name=attrNode.name;attributes[name]=attrNode.value;}return attributes;}}]);return NodeUtility;}();var Constants=function(){function Constants(){_classCallCheck(this,Constants);}_createClass(Constants,null,[{key:"defaultNamespace",get:function get(){return"HTTP://GRIMOIRE.GL/NS/DEFAULT";}}]);return Constants;}();/**
 * The class to identity with XML namespace feature.
 */var NSIdentity=function(){function NSIdentity(ns,name){_classCallCheck(this,NSIdentity);if(name){this.ns=ns.toUpperCase();this.name=name;}else{this.ns=Constants.defaultNamespace;this.name=ns;}// Ensure all of the characters are uppercase
this.name=NSIdentity._ensureValidIdentity(this.name,true);this.ns=NSIdentity._ensureValidIdentity(this.ns);this.fqn=this.name+"|"+this.ns;}/**
     * Generate an instance from Full qualified name.
     * @param  {string}             fqn [description]
     * @return {NSIdentity}     [description]
     */_createClass(NSIdentity,null,[{key:"fromFQN",value:function fromFQN(fqn){var splitted=fqn.split("|");if(splitted.length!==2){throw new Error("Invalid fqn was given");}return new NSIdentity(splitted[1],splitted[0]);}/**
     * Make sure given name is valid for using in identity.
     * | is prohibited for using in name or namespace.
     * . is prohibited for using in name.
     * All lowercase alphabet will be transformed into uppercase.
     * @param  {string} name        [A name to verify]
     * @param  {[type]} noDot=false [Ensure not using dot or not]
     * @return {string}             [Valid name]
     */},{key:"_ensureValidIdentity",value:function _ensureValidIdentity(name){var noDot=arguments.length<=1||arguments[1]===undefined?false:arguments[1];if(name.indexOf("|")>-1){throw new Error("Namespace and identity cannnot contain | ");}if(noDot&&name.indexOf(".")>-1){throw new Error("identity cannnot contain .");}if(name==null){throw new Error("Specified name was null or undefined");}return name;}}]);return NSIdentity;}();var NSDictionary=function(){function NSDictionary(){_classCallCheck(this,NSDictionary);this._nameObjectMap=new Map();this._fqnObjectMap=new Map();}_createClass(NSDictionary,[{key:"set",value:function set(key,value){var namedChildMap=void 0;if(this._nameObjectMap.has(key.name)){namedChildMap=this._nameObjectMap.get(key.name);}else{namedChildMap=new Map();this._nameObjectMap.set(key.name,namedChildMap);}namedChildMap.set(key.fqn,value);this._fqnObjectMap.set(key.fqn,value);}},{key:"delete",value:function _delete(key){if(this._fqnObjectMap.has(key.fqn)){var theMap=this._nameObjectMap.get(key.name);if(theMap.size===1){this._nameObjectMap.delete(key.name);}else{theMap.delete(key.fqn);}this._fqnObjectMap.delete(key.fqn);}}},{key:"get",value:function get(arg1,name){if(typeof arg1==="string"){if(name){return this.get(new NSIdentity(arg1,name));}else{var namedMap=this._nameObjectMap.get(arg1);if(!namedMap){return null;}if(namedMap.size===1){var itr=namedMap.values();return itr.next().value;}else{throw new Error("Specified tag name "+arg1+" is ambigious to identify.");}}}else{if(arg1 instanceof NSIdentity){return this.fromFQN(arg1.fqn);}else{if(arg1.prefix){return this.get(new NSIdentity(arg1.namespaceURI,arg1.localName));}else{if(arg1.namespaceURI&&this._fqnObjectMap.has(arg1.localName+"|"+arg1.namespaceURI)){return this.get(new NSIdentity(arg1.namespaceURI,arg1.localName));}if(arg1&&arg1.ownerElement&&arg1.ownerElement.namespaceURI&&this._fqnObjectMap.has(arg1.localName+"|"+arg1.ownerElement.namespaceURI)){return this.get(new NSIdentity(arg1.ownerElement.namespaceURI,arg1.localName));}return this.get(arg1.localName);}}}}},{key:"fromFQN",value:function fromFQN(fqn){return this._fqnObjectMap.get(fqn);}},{key:"isAmbigious",value:function isAmbigious(name){return this._nameObjectMap.get(name).size>1;}},{key:"has",value:function has(name){return this._nameObjectMap.has(name);}},{key:"pushDictionary",value:function pushDictionary(dict){var _this=this;dict._fqnObjectMap.forEach(function(value,keyFQN){var id=NSIdentity.fromFQN(keyFQN);_this.set(id,value);});return this;}},{key:"toArray",value:function toArray(){var ret=[];this._fqnObjectMap.forEach(function(value){ret.push(value);});return ret;}},{key:"clone",value:function clone(){var dict=new NSDictionary();return dict.pushDictionary(this);}},{key:"forEach",value:function forEach(callback){this._fqnObjectMap.forEach(function(val,key){callback(val,key);});return this;}},{key:"map",value:function map(callback){var ret=new NSDictionary();this._fqnObjectMap.forEach(function(val,fqn){var id=NSIdentity.fromFQN(fqn);ret.set(id,callback(val,fqn));});return ret;}},{key:"clear",value:function clear(){this._nameObjectMap.clear();this._fqnObjectMap.clear();}}]);return NSDictionary;}();/**
 * Provides static methods to ensure arguments are valid type.
 */var Ensure=function(){function Ensure(){_classCallCheck(this,Ensure);}_createClass(Ensure,null,[{key:"ensureString",/**
     * Ensure specified str being string
     * @param  {string | number}      str [description]
     * @return {string}      [description]
     */value:function ensureString(str){if(typeof str==="string"){return str;}else if(typeof str==="number"){return str.toString();}else{throw new Error("Specified argument can not convert into string");}}/**
     * Ensure specified number being number
     * @param  {string | number}      str [description]
     * @return {string}      [description]
     */},{key:"ensureNumber",value:function ensureNumber(num){if(typeof num==="string"){return parseInt(num,10);}else if(typeof num==="number"){return num;}else{throw new Error("specified argument can not be converted into number");}}},{key:"ensureTobeNSIdentity",value:function ensureTobeNSIdentity(name){if(!name){return undefined;}if(typeof name==="string"){return new NSIdentity(name);}else{return name;}}},{key:"ensureTobeNSIdentityArray",value:function ensureTobeNSIdentityArray(names){if(!names){return[];}var newArr=[];for(var i=0;i<names.length;i++){newArr.push(this.ensureTobeNSIdentity(names[i]));}return newArr;}},{key:"ensureTobeNSDictionary",value:function ensureTobeNSDictionary(dict,defaultNamespace){if(!dict){return new NSDictionary();}if(dict instanceof NSDictionary){return dict;}else{var newDict=new NSDictionary();for(var key in dict){newDict.set(new NSIdentity(defaultNamespace,key),dict[key]);}return newDict;}}},{key:"ensureTobeMessage",value:function ensureTobeMessage(message){if(message.startsWith("$")){return message;}else{return"$"+message;}}}]);return Ensure;}();/**
 * Management a single attribute with specified type. Converter will serve a value with object with any type instead of string.
 * When attribute is changed, emit a "change" event. When attribute is requested, emit a "get" event.
 * If responsive flag is not true, event will not be emitted.
 */var Attribute=function(){function Attribute(){_classCallCheck(this,Attribute);this._handlers=[];}_createClass(Attribute,[{key:"addObserver",value:function addObserver(handler){var callFirst=arguments.length<=1||arguments[1]===undefined?false:arguments[1];this._handlers.push(handler);if(callFirst){handler(this);}}},{key:"removeObserver",value:function removeObserver(handler){var index=-1;for(var i=0;i<this._handlers.length;i++){if(handler===this._handlers[i]){index=i;break;}}if(index<0){return;}this._handlers.splice(index,1);}/**
     * Bind converted value to specified field.
     * When target object was not specified, field of owner component would be assigned.
     * @param {string} variableName [description]
     * @param {any} targetObject [description]
     */},{key:"boundTo",value:function boundTo(variableName){var targetObject=arguments.length<=1||arguments[1]===undefined?this.component:arguments[1];this.addObserver(function(v){targetObject[variableName]=v.Value;});targetObject[variableName]=this.Value;}/**
     * Apply default value to attribute from DOM values.
     * @param {string }} domValues [description]
     */},{key:"resolveDefaultValue",value:function resolveDefaultValue(domValues){if(this._value!==void 0){return;}var tagAttrValue=domValues[this.name.name];if(tagAttrValue!==void 0){this.Value=tagAttrValue;// Dom指定値で解決
return;}var nodeDefaultValue=this.component.node.nodeDeclaration.defaultAttributes.get(this.name);if(nodeDefaultValue!==void 0){this.Value=nodeDefaultValue;// Node指定値で解決
return;}var attrDefaultValue=this.declaration.defaultValue;this.Value=attrDefaultValue;}},{key:"_notifyChange",value:function _notifyChange(){var _this2=this;this._handlers.forEach(function(handler){handler(_this2);});}},{key:"tree",get:function get(){return this.component.tree;}},{key:"companion",get:function get(){return this.component.companion;}/**
     * Get a value with specified type.
     * @return {any} value with specified type.
     */},{key:"Value",get:function get(){try{return this.converter.convert(this._value);}catch(e){console.error(e);// TODO should be more convenient error handling
}}/**
     * Set a value with any type.
     * @param {any} val Value with string or specified type.
     */,set:function set(val){this._value=val;this._notifyChange();}/**
     * Construct a new attribute with name of key and any value with specified type. If constant flag is true, This attribute will be immutable.
     * If converter is not served, string converter will be set as default.
     * @param {string}        key       Key of this attribute.
     * @param {any}           value     Value of this attribute.
     * @param {ConverterBase} converter Converter of this attribute.
     * @param {boolean}       constant  Whether this attribute is immutable or not. False as default.
     */}],[{key:"generateAttributeForComponent",value:function generateAttributeForComponent(name,declaration,component){var attr=new Attribute();attr.name=new NSIdentity(component.name.ns,name);attr.component=component;attr.declaration=declaration;var converterName=Ensure.ensureTobeNSIdentity(declaration.converter);attr.converter=obtainGomlInterface.converters.get(converterName);if(attr.converter===void 0){// When the specified converter was not found
throw new Error("Specified converter "+converterName.name+" was not found from registered converters.\n Component: "+attr.component.name.fqn+"\n Attribute: "+attr.name.name);}attr.converter={convert:attr.converter.convert.bind(attr),name:attr.converter.name};attr.component.attributes.set(attr.name,attr);return attr;}}]);return Attribute;}();/**
 * Most based object for any Grimoire.js related classes.
 * @type {[type]}
 */var IDObject=function(){function IDObject(){_classCallCheck(this,IDObject);this.id=IDObject.getUniqueRandom(10);}/**
     * Generate random string
     * @param  {number} length length of random string
     * @return {string}        generated string
     */_createClass(IDObject,[{key:"toString",/**
     * Obtain stringfied object.
     * If this method was not overridden, this method return class name.
     * @return {string} stringfied object
     */value:function toString(){return this.getTypeName();}/**
     * Obtain class name
     * @return {string} Class name of the instance.
     */},{key:"getTypeName",value:function getTypeName(){var funcNameRegex=/function (.{1,})\(/;var result=funcNameRegex.exec(this.constructor.toString());return result&&result.length>1?result[1]:"";}}],[{key:"getUniqueRandom",value:function getUniqueRandom(length){return Math.random().toString(36).slice(-length);}}]);return IDObject;}();/**
 * Base class for any components
 */var Component=function(_IDObject){_inherits(Component,_IDObject);function Component(){_classCallCheck(this,Component);/**
         * Whether this component was created by nodeDeclaration
         * @type {boolean}
         */var _this3=_possibleConstructorReturn(this,(Component.__proto__||Object.getPrototypeOf(Component)).apply(this,arguments));_this3.isDefaultComponent=false;/**
         * Flag that this component is activated or not.
         * @type {boolean}
         */_this3._enabled=true;_this3._handlers=[];_this3._additionalAttributesNames=[];return _this3;}_createClass(Component,[{key:"getValue",/**
     * Obtain value of attribute. When the attribute is not existing, this method would return undefined.
     * @param  {string} name [description]
     * @return {any}         [description]
     */value:function getValue(name){var attr=this.attributes.get(name);if(attr){return attr.Value;}else{return undefined;}}/**
     * Set value of attribute
     * @param {string} name  [description]
     * @param {any}    value [description]
     */},{key:"setValue",value:function setValue(name,value){var attr=this.attributes.get(name);// TODO:check readonly?
if(attr){attr.Value=value;}}},{key:"getAttribute",value:function getAttribute(name){return this.attributes.get(name);}},{key:"addEnabledObserver",value:function addEnabledObserver(handler){this._handlers.push(handler);}},{key:"removeEnabledObserver",value:function removeEnabledObserver(handler){var index=-1;for(var i=0;i<this._handlers.length;i++){if(handler===this._handlers[i]){index=i;break;}}if(index<0){return;}this._handlers.splice(index,1);}},{key:"resolveDefaultAttributes",value:function resolveDefaultAttributes(nodeAttributes){var _this4=this;if(this.isDefaultComponent){this.attributes.forEach(function(attr){return attr.resolveDefaultValue(nodeAttributes);});}else{(function(){var attrs=NodeUtility.getAttributes(_this4.element);_this4.attributes.forEach(function(attr){return attr.resolveDefaultValue(attrs);});})();}}/**
     * Add attribute
     * @param {string}                name      [description]
     * @param {IAttributeDeclaration} attribute [description]
     */},{key:"__addAtribute",value:function __addAtribute(name,attribute){if(!attribute){throw new Error("can not add attribute null or undefined.");}var attr=Attribute.generateAttributeForComponent(name,attribute,this);if(this.isDefaultComponent){this.node.addAttribute(attr);}if(this.isDefaultComponent){attr.resolveDefaultValue(NodeUtility.getAttributes(this.node.element));}else{var attrs=NodeUtility.getAttributes(this.element);attr.resolveDefaultValue(attrs);}this._additionalAttributesNames.push(attr.name);}},{key:"__removeAttributes",value:function __removeAttributes(name){var _this5=this;if(name){var _index=this._additionalAttributesNames.findIndex(function(id){return id.name===name;});if(_index<0){throw new Error("can not remove attributes :"+name);}var attrId=this._additionalAttributesNames[_index];if(this.isDefaultComponent){this.node.removeAttribute(this.attributes.get(attrId));}this.attributes.delete(attrId);this._additionalAttributesNames.splice(_index,1);}else{this._additionalAttributesNames.forEach(function(id){_this5.__removeAttributes(id.name);});}}},{key:"enabled",get:function get(){return this._enabled;},set:function set(val){var _this6=this;if(this._enabled===val){return;}this._enabled=val;this._handlers.forEach(function(handler){handler(_this6);});}/**
     * The dictionary which is shared in entire tree.
     * @return {NSDictionary<any>} [description]
     */},{key:"companion",get:function get(){return this.node?this.node.companion:null;}/**
     * Tree interface for the tree this node is attached.
     * @return {IGomlInterface} [description]
     */},{key:"tree",get:function get(){return this.node?this.node.tree:null;}}]);return Component;}(IDObject);var GrimoireComponent=function(_Component){_inherits(GrimoireComponent,_Component);function GrimoireComponent(){_classCallCheck(this,GrimoireComponent);return _possibleConstructorReturn(this,(GrimoireComponent.__proto__||Object.getPrototypeOf(GrimoireComponent)).apply(this,arguments));}_createClass(GrimoireComponent,[{key:"$awake",value:function $awake(){var _this8=this;this.node.resolveAttributesValue();this.getAttribute("id").addObserver(function(attr){_this8.node.element.id=attr.Value;});this.getAttribute("class").addObserver(function(attr){_this8.node.element.className=attr.Value.join(" ");});this.getAttribute("enabled").addObserver(function(attr){if(_this8.node.isActive){_this8.node.notifyActivenessUpdate();}});}}]);return GrimoireComponent;}(Component);GrimoireComponent.attributes={id:{converter:"String",defaultValue:null,readonly:false},class:{converter:"StringArray",defaultValue:null,readonly:false},enabled:{converter:"Boolean",defaultValue:true,readonly:false}};function StringArrayConverter(val){if(Array.isArray(val)||!val){return val;}if(typeof val==="string"){return val.split(" ");}throw new Error("value is not supported by StringArrayConverter.:"+val);}function StringConverter(val){if(typeof val==="string"){return val;}else if(!val){return val;}else if(typeof val.toString==="function"){return val.toString();}throw new Error("value is not supported by StringConverter.");}var ComponentDeclaration=function(){function ComponentDeclaration(name,attributes,ctor){_classCallCheck(this,ComponentDeclaration);this.name=name;this.ctor=ctor;this.attributes=attributes;}_createClass(ComponentDeclaration,[{key:"generateInstance",value:function generateInstance(componentElement){componentElement=componentElement?componentElement:document.createElementNS(this.name.ns,this.name.name);var component=new this.ctor();componentElement.setAttribute("x-gr-id",component.id);obtainGomlInterface.componentDictionary[component.id]=component;component.name=this.name;component.element=componentElement;component.attributes=new NSDictionary();for(var key in this.attributes){Attribute.generateAttributeForComponent(key,this.attributes[key],component);}return component;}}]);return ComponentDeclaration;}();var NSSet=function(){function NSSet(){_classCallCheck(this,NSSet);this._contentArray=[];}_createClass(NSSet,[{key:"push",value:function push(item){var index=this._contentArray.findIndex(function(id){return id.fqn===item.fqn;});if(index===-1){this._contentArray.push(item);}return this;}},{key:"pushArray",value:function pushArray(item){var _this9=this;item.forEach(function(v){_this9.push(v);});return this;}},{key:"values",value:function values(){return this._contentArray.values();}},{key:"toArray",value:function toArray(){var ret=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this._contentArray[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var item=_step.value;ret.push(item);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return ret;}},{key:"clone",value:function clone(){var newSet=new NSSet();var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this._contentArray[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var i=_step2.value;newSet.push(i);}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return newSet;}},{key:"merge",value:function merge(other){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=other._contentArray[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var elem=_step3.value;this.push(elem);}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return this;}}],[{key:"fromArray",value:function fromArray(array){var nSet=new NSSet();nSet.pushArray(array);return nSet;}}]);return NSSet;}();var NodeDeclaration=function(){function NodeDeclaration(name,_defaultComponents,_defaultAttributes,superNode,_treeConstraints){_classCallCheck(this,NodeDeclaration);this.name=name;this._defaultComponents=_defaultComponents;this._defaultAttributes=_defaultAttributes;this.superNode=superNode;this._treeConstraints=_treeConstraints;if(!this.superNode&&this.name.name.toUpperCase()!=="GRIMOIRENODEBASE"){this.superNode=new NSIdentity("GrimoireNodeBase");}}_createClass(NodeDeclaration,[{key:"addDefaultComponent",value:function addDefaultComponent(componentName){var componentId=Ensure.ensureTobeNSIdentity(componentName);this._defaultComponents.push(componentId);if(this._defaultComponentsActual){this._defaultComponentsActual.push(componentId);}}},{key:"_resolveInherites",value:function _resolveInherites(){if(!this.superNode){this._defaultComponentsActual=this._defaultComponents;this._defaultAttributesActual=this._defaultAttributes;return;}var superNode=obtainGomlInterface.nodeDeclarations.get(this.superNode);var inheritedDefaultComponents=superNode.defaultComponents;var inheritedDefaultAttribute=superNode.defaultAttributes;this._defaultComponentsActual=inheritedDefaultComponents.clone().merge(this._defaultComponents);this._defaultAttributesActual=inheritedDefaultAttribute.clone().pushDictionary(this._defaultAttributes);}},{key:"defaultComponents",get:function get(){if(!this._defaultComponentsActual){this._resolveInherites();}return this._defaultComponentsActual;}},{key:"defaultAttributes",get:function get(){if(!this._defaultAttributesActual){this._resolveInherites();}return this._defaultAttributesActual;}},{key:"treeConstraints",get:function get(){return this._treeConstraints;}}]);return NodeDeclaration;}();/**
 * Provides safe xml read feature.
 */var XMLReader=function(){function XMLReader(){_classCallCheck(this,XMLReader);}_createClass(XMLReader,null,[{key:"parseXML",value:function parseXML(doc,rootElementName){var parsed=XMLReader._parser.parseFromString(doc,"text/xml");if(rootElementName){if(parsed.documentElement.tagName.toUpperCase()!==rootElementName.toUpperCase()){throw new Error("Specified document is invalid.");}// TODO should throw more detail error
}return[parsed.documentElement];// TODO: implenent!
}},{key:"getElements",value:function getElements(elem,name){var result=[];var elems=elem.getElementsByTagName(name);for(var i=0;i<elems.length;i++){result.push(elems.item(i));}return result;}},{key:"getSingleElement",value:function getSingleElement(elem,name,mandatory){var result=XMLReader.getElements(elem,name);if(result.length===1){return result[0];}else if(result.length===0){if(mandatory){throw new Error("The mandatory element "+name+" was required, but not found");}else{return null;}}else{throw new Error("The element "+name+" requires to exist in single. But there is "+result.length+" count of elements");}}},{key:"getAttribute",value:function getAttribute(elem,name,mandatory){var result=elem.attributes.getNamedItem(name);if(result){return result.value;}else if(mandatory){throw new Error("The mandatory attribute "+name+" was required, but it was not found");}else{return null;}}},{key:"getAttributeFloat",value:function getAttributeFloat(elem,name,mandatory){var resultStr=XMLReader.getAttribute(elem,name,mandatory);return parseFloat(resultStr);}},{key:"getAttributeInt",value:function getAttributeInt(elem,name,mandatory){var resultStr=XMLReader.getAttribute(elem,name,mandatory);return parseInt(resultStr,10);}},{key:"getChildElements",value:function getChildElements(elem){var children=elem.childNodes;var result=[];for(var i=0;i<children.length;i++){if(children.item(i)instanceof Element){result.push(children.item(i));}}return result;}},{key:"getAttributes",value:function getAttributes(elem,ns){var result={};var attrs=elem.attributes;for(var i=0;i<attrs.length;i++){var attr=attrs.item(i);if(!ns||attr.namespaceURI===ns){result[attr.localName]=attr.value;}}return result;}}]);return XMLReader;}();XMLReader._parser=new DOMParser();var domain;// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers(){}EventHandlers.prototype=Object.create(null);function EventEmitter(){EventEmitter.init.call(this);}EventEmitter.usingDomains=false;EventEmitter.prototype.domain=undefined;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners=10;EventEmitter.init=function(){this.domain=null;if(EventEmitter.usingDomains){// if there is an active domain, then attach to it.
if(domain.active&&!(this instanceof domain.Domain)){this.domain=domain.active;}}if(!this._events||this._events===Object.getPrototypeOf(this)._events){this._events=new EventHandlers();this._eventsCount=0;}this._maxListeners=this._maxListeners||undefined;};// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if(typeof n!=='number'||n<0||isNaN(n))throw new TypeError('"n" argument must be a positive number');this._maxListeners=n;return this;};function $getMaxListeners(that){if(that._maxListeners===undefined)return EventEmitter.defaultMaxListeners;return that._maxListeners;}EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return $getMaxListeners(this);};// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler,isFn,self){if(isFn)handler.call(self);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self);}}}function emitOne(handler,isFn,self,arg1){if(isFn)handler.call(self,arg1);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1);}}}function emitTwo(handler,isFn,self,arg1,arg2){if(isFn)handler.call(self,arg1,arg2);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1,arg2);}}}function emitThree(handler,isFn,self,arg1,arg2,arg3){if(isFn)handler.call(self,arg1,arg2,arg3);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].call(self,arg1,arg2,arg3);}}}function emitMany(handler,isFn,self,args){if(isFn)handler.apply(self,args);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i){listeners[i].apply(self,args);}}}EventEmitter.prototype.emit=function emit(type){var er,handler,len,args,i,events,domain;var needDomainExit=false;var doError=type==='error';events=this._events;if(events)doError=doError&&events.error==null;else if(!doError)return false;domain=this.domain;// If there is no 'error' event listener then throw.
if(doError){er=arguments[1];if(domain){if(!er)er=new Error('Uncaught, unspecified "error" event');er.domainEmitter=this;er.domain=domain;er.domainThrown=false;domain.emit('error',er);}else if(er instanceof Error){throw er;// Unhandled 'error' event
}else{// At least give some kind of context to the user
var err=new Error('Uncaught, unspecified "error" event. ('+er+')');err.context=er;throw err;}return false;}handler=events[type];if(!handler)return false;var isFn=typeof handler==='function';len=arguments.length;switch(len){// fast cases
case 1:emitNone(handler,isFn,this);break;case 2:emitOne(handler,isFn,this,arguments[1]);break;case 3:emitTwo(handler,isFn,this,arguments[1],arguments[2]);break;case 4:emitThree(handler,isFn,this,arguments[1],arguments[2],arguments[3]);break;// slower
default:args=new Array(len-1);for(i=1;i<len;i++){args[i-1]=arguments[i];}emitMany(handler,isFn,this,args);}if(needDomainExit)domain.exit();return true;};function _addListener(target,type,listener,prepend){var m;var events;var existing;if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');events=target._events;if(!events){events=target._events=new EventHandlers();target._eventsCount=0;}else{// To avoid recursion in the case that type === "newListener"! Before
// adding it to the listeners, first emit "newListener".
if(events.newListener){target.emit('newListener',type,listener.listener?listener.listener:listener);// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
events=target._events;}existing=events[type];}if(!existing){// Optimize the case of one listener. Don't need the extra array object.
existing=events[type]=listener;++target._eventsCount;}else{if(typeof existing==='function'){// Adding the second element, need to change to array.
existing=events[type]=prepend?[listener,existing]:[existing,listener];}else{// If we've already got an array, just append.
if(prepend){existing.unshift(listener);}else{existing.push(listener);}}// Check for listener leak
if(!existing.warned){m=$getMaxListeners(target);if(m&&m>0&&existing.length>m){existing.warned=true;var w=new Error('Possible EventEmitter memory leak detected. '+existing.length+' '+type+' listeners added. '+'Use emitter.setMaxListeners() to increase limit');w.name='MaxListenersExceededWarning';w.emitter=target;w.type=type;w.count=existing.length;emitWarning(w);}}}return target;}function emitWarning(e){typeof console.warn==='function'?console.warn(e):console.log(e);}EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,false);};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,true);};function _onceWrap(target,type,listener){var fired=false;function g(){target.removeListener(type,g);if(!fired){fired=true;listener.apply(target,arguments);}}g.listener=listener;return g;}EventEmitter.prototype.once=function once(type,listener){if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');this.on(type,_onceWrap(this,type,listener));return this;};EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');this.prependListener(type,_onceWrap(this,type,listener));return this;};// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(typeof listener!=='function')throw new TypeError('"listener" argument must be a function');events=this._events;if(!events)return this;list=events[type];if(!list)return this;if(list===listener||list.listener&&list.listener===listener){if(--this._eventsCount===0)this._events=new EventHandlers();else{delete events[type];if(events.removeListener)this.emit('removeListener',type,list.listener||listener);}}else if(typeof list!=='function'){position=-1;for(i=list.length;i-->0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){originalListener=list[i].listener;position=i;break;}}if(position<0)return this;if(list.length===1){list[0]=undefined;if(--this._eventsCount===0){this._events=new EventHandlers();return this;}else{delete events[type];}}else{spliceOne(list,position);}if(events.removeListener)this.emit('removeListener',type,originalListener||listener);}return this;};EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events;events=this._events;if(!events)return this;// not listening for removeListener, no need to emit
if(!events.removeListener){if(arguments.length===0){this._events=new EventHandlers();this._eventsCount=0;}else if(events[type]){if(--this._eventsCount===0)this._events=new EventHandlers();else delete events[type];}return this;}// emit removeListener for all listeners on all events
if(arguments.length===0){var keys=Object.keys(events);for(var i=0,key;i<keys.length;++i){key=keys[i];if(key==='removeListener')continue;this.removeAllListeners(key);}this.removeAllListeners('removeListener');this._events=new EventHandlers();this._eventsCount=0;return this;}listeners=events[type];if(typeof listeners==='function'){this.removeListener(type,listeners);}else if(listeners){// LIFO order
do{this.removeListener(type,listeners[listeners.length-1]);}while(listeners[0]);}return this;};EventEmitter.prototype.listeners=function listeners(type){var evlistener;var ret;var events=this._events;if(!events)ret=[];else{evlistener=events[type];if(!evlistener)ret=[];else if(typeof evlistener==='function')ret=[evlistener.listener||evlistener];else ret=unwrapListeners(evlistener);}return ret;};EventEmitter.listenerCount=function(emitter,type){if(typeof emitter.listenerCount==='function'){return emitter.listenerCount(type);}else{return listenerCount.call(emitter,type);}};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(type){var events=this._events;if(events){var evlistener=events[type];if(typeof evlistener==='function'){return 1;}else if(evlistener){return evlistener.length;}}return 0;}EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?Reflect.ownKeys(this._events):[];};// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1){list[i]=list[k];}list.pop();}function arrayClone(arr,i){var copy=new Array(i);while(i--){copy[i]=arr[i];}return copy;}function unwrapListeners(arr){var ret=new Array(arr.length);for(var i=0;i<ret.length;++i){ret[i]=arr[i].listener||arr[i];}return ret;}/**
 * EventEmitterをmixinしたIDObject
 */var EEObject=function(_IDObject2){_inherits(EEObject,_IDObject2);function EEObject(){_classCallCheck(this,EEObject);return _possibleConstructorReturn(this,(EEObject.__proto__||Object.getPrototypeOf(EEObject)).call(this));}_createClass(EEObject,[{key:"emitException",value:function emitException(eventName,error){error.handled=false;var listeners=this.listeners(eventName);for(var i=0;i<listeners.length;i++){listeners[listeners.length-i-1](error);if(error.handled){return;}}if(eventName!=="error"){this.emitException("error",error);}else{throw error;}}}]);return EEObject;}(IDObject);function applyMixins(derivedCtor,baseCtors){baseCtors.forEach(function(baseCtor){Object.getOwnPropertyNames(baseCtor.prototype).forEach(function(name){derivedCtor.prototype[name]=baseCtor.prototype[name];});});}applyMixins(EEObject,[EventEmitter]);var GomlNode=function(_EEObject){_inherits(GomlNode,_EEObject);/**
     * 新しいインスタンスの作成
     * @param  {NodeDeclaration} recipe  作成するノードのDeclaration
     * @param  {Element}         element 対応するDomElement
     * @return {[type]}                  [description]
     */function GomlNode(recipe,element){_classCallCheck(this,GomlNode);var _this11=_possibleConstructorReturn(this,(GomlNode.__proto__||Object.getPrototypeOf(GomlNode)).call(this));_this11.children=[];_this11._parent=null;_this11._root=null;_this11._mounted=false;_this11._messageBuffer=[];_this11._tree=null;_this11._companion=new NSDictionary();_this11._deleted=false;_this11._attrBuffer={};_this11._defaultValueResolved=false;if(!recipe){throw new Error("recipe must not be null");}_this11.nodeDeclaration=recipe;_this11.element=element?element:document.createElementNS(recipe.name.ns,recipe.name.name);// TODO Could be undefined or null?
_this11.componentsElement=document.createElement("COMPONENTS");_this11._root=_this11;_this11._tree=GomlInterfaceGenerator([_this11]);_this11._components=[];_this11.attributes=new NSDictionary();_this11.element.setAttribute("x-gr-id",_this11.id);var defaultComponentNames=recipe.defaultComponents;// instanciate default components
defaultComponentNames.toArray().map(function(id){_this11.addComponent(id,true);});// register to GrimoireInterface.
obtainGomlInterface.nodeDictionary[_this11.id]=_this11;return _this11;}/**
     * Get actual goml node from element of xml tree.
     * @param  {Element}  elem [description]
     * @return {GomlNode}      [description]
     */_createClass(GomlNode,[{key:"getChildrenByClass",value:function getChildrenByClass(className){var nodes=this.element.getElementsByClassName(className);return new Array(nodes.length).map(function(v,i){return GomlNode.fromElement(nodes.item(i));});}},{key:"getChildrenByNodeName",value:function getChildrenByNodeName(nodeName){var nodes=this.element.getElementsByTagName(nodeName);return new Array(nodes.length).map(function(v,i){return GomlNode.fromElement(nodes.item(i));});}/**
     * ノードを削除する。使わなくなったら呼ぶ。子要素も再帰的に削除する。
     */},{key:"delete",value:function _delete(){this.children.forEach(function(c){c.delete();});obtainGomlInterface.nodeDictionary[this.id]=null;if(this._parent){this._parent.detachChild(this);}else{this.setMounted(false);if(this.element.parentNode){this.element.parentNode.removeChild(this.element);}}this._deleted=true;}},{key:"sendMessage",value:function sendMessage(message,args){var _this12=this;if(!this.enabled||!this.mounted){return false;}this._components.forEach(function(component){_this12._sendMessageToComponent(component,message,false,false,args);});return true;}},{key:"broadcastMessage",value:function broadcastMessage(arg1,arg2,arg3){if(!this.enabled||!this.mounted){return;}if(typeof arg1==="number"){var range=arg1;var message=arg2;var args=arg3;this.sendMessage(message,args);if(range>0){for(var i=0;i<this.children.length;i++){this.children[i].broadcastMessage(range-1,message,args);}}}else{var _message=arg1;var _args=arg2;this.sendMessage(_message,_args);for(var _i=0;_i<this.children.length;_i++){this.children[_i].broadcastMessage(_message,_args);}}}/**
     * 指定したノード名と属性で生成されたノードの新しいインスタンスを、このノードの子要素として追加
     * @param {string |   NSIdentity} nodeName      [description]
     * @param {any    }} attributes   [description]
     */},{key:"addNode",value:function addNode(nodeName,attributes){if(typeof nodeName==="string"){this.addNode(new NSIdentity(nodeName),attributes);}else{var nodeDec=obtainGomlInterface.nodeDeclarations.get(nodeName);var node=new GomlNode(nodeDec,null);if(attributes){for(var key in attributes){var id=key.indexOf("|")!==-1?NSIdentity.fromFQN(key):new NSIdentity(key);node.attr(id,attributes[key]);}}this.addChild(node);}}/**
     * Add child.
     * @param {GomlNode} child            追加する子ノード
     * @param {number}   index            追加位置。なければ末尾に追加
     * @param {[type]}   elementSync=true trueのときはElementのツリーを同期させる。（Elementからパースするときはfalseにする）
     */},{key:"addChild",value:function addChild(child,index){var elementSync=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(child._deleted){throw new Error("deleted node never use.");}if(index!=null&&typeof index!=="number"){throw new Error("insert index should be number or null or undefined.");}child._parent=this;var insertIndex=index==null?this.children.length:index;this.children.splice(insertIndex,0,child);var checkChildConstraints=child.checkTreeConstraints();var checkAncestorConstraint=this._callRecursively(function(n){return n.checkTreeConstraints();},function(n){return n._parent?[n._parent]:[];}).reduce(function(list,current){return list.concat(current);});var errors=checkChildConstraints.concat(checkAncestorConstraint).filter(function(m){return m;});if(errors.length!==0){var message=errors.reduce(function(m,current){return m+"\n"+current;});throw new Error("tree constraint is not satisfied.\n"+message);}// handling html
if(elementSync){var referenceElement=this.element[NodeUtility.getNodeListIndexByElementIndex(this.element,insertIndex)];this.element.insertBefore(child.element,referenceElement);}child._tree=this.tree;child._companion=this.companion;// mounting
if(this.mounted){child.setMounted(true);}}},{key:"callRecursively",value:function callRecursively(func){return this._callRecursively(func,function(n){return n.children;});}/**
     * デタッチしてdeleteする。
     * @param {GomlNode} child Target node to be inserted.
     */},{key:"removeChild",value:function removeChild(child){var node=this.detachChild(child);if(node){node.delete();}}/**
     * 指定したノードが子要素なら子要素から外す。
     * @param  {GomlNode} child [description]
     * @return {GomlNode}       [description]
     */},{key:"detachChild",value:function detachChild(target){// search child.
var index=this.children.indexOf(target);if(index===-1){return null;}target.setMounted(false);target._parent=null;this.children.splice(index,1);// html sync
this.element.removeChild(target.element);// check ancestor constraint.
var errors=this._callRecursively(function(n){return n.checkTreeConstraints();},function(n){return n._parent?[n._parent]:[];}).reduce(function(list,current){return list.concat(current);}).filter(function(m){return m;});if(errors.length!==0){var message=errors.reduce(function(m,current){return m+"\n"+current;});throw new Error("tree constraint is not satisfied.\n"+message);}return target;}/**
     * detach myself
     */},{key:"detach",value:function detach(){if(this.parent){this.parent.detachChild(this);}else{throw new Error("root Node cannot be detached.");}}},{key:"attr",value:function attr(attrName,value){attrName=Ensure.ensureTobeNSIdentity(attrName);var attr=this.attributes.get(attrName);if(value!==void 0){// setValue.
if(!attr){console.warn("attribute \""+attrName.name+"\" is not found.");this._attrBuffer[attrName.fqn]=value;}else{attr.Value=value;}}else{// getValue.
if(!attr){var attrBuf=this._attrBuffer[attrName.fqn];if(attrBuf!==void 0){console.log("get attrBuf!");return attrBuf;}console.warn("attribute \""+attrName.name+"\" is not found.");return;}else{return attr.Value;}}}/**
     *  Add new attribute. In most of case, users no need to call this method.
     *  Use __addAttribute in Component should be used instead.
     */},{key:"addAttribute",value:function addAttribute(attr){this.attributes.set(attr.name,attr);// check buffer value.
var attrBuf=this._attrBuffer[attr.name.fqn];if(attrBuf!==void 0){attr.Value=attrBuf;delete this._attrBuffer[attr.name.fqn];}}/**
     * Update mounted status and emit events
     * @param {boolean} mounted Mounted status.
     */},{key:"setMounted",value:function setMounted(mounted){if(this._mounted===mounted){return;}if(mounted){this._mounted=mounted;this._clearMessageBuffer("unmount");this._sendMessage("awake",true,false);this._sendMessage("mount",false,true);this.children.forEach(function(child){child.setMounted(mounted);});}else{this._clearMessageBuffer("mount");this.children.forEach(function(child){child.setMounted(mounted);});this._sendMessage("unmount",false,true);this._sendMessage("dispose",true,false);this._tree=null;this._companion=null;this._mounted=mounted;}}/**
     * Get index of this node from parent.
     * @return {number} number of index.
     */},{key:"index",value:function index(){return this._parent.children.indexOf(this);}},{key:"removeAttribute",value:function removeAttribute(attr){this.attributes.delete(attr.name);}/**
     * このノードにコンポーネントをアタッチする。
     * @param {Component} component [description]
     */},{key:"addComponent",value:function addComponent(component){var isDefaultComponent=arguments.length<=1||arguments[1]===undefined?false:arguments[1];var declaration=obtainGomlInterface.componentDeclarations.get(component);var instance=declaration.generateInstance();this._addComponentDirectly(instance,isDefaultComponent);return instance;}/**
     * Internal use!
     * Should not operate by users or plugin developpers
     * @param {Component} component          [description]
     * @param {boolean}   isDefaultComponent [description]
     */},{key:"_addComponentDirectly",value:function _addComponentDirectly(component,isDefaultComponent){var _this13=this;if(isDefaultComponent){component.isDefaultComponent=true;}var insertIndex=this._components.length;var referenceElement=this.componentsElement[NodeUtility.getNodeListIndexByElementIndex(this.componentsElement,insertIndex)];this.componentsElement.insertBefore(component.element,referenceElement);this._components.push(component);component.node=this;component.addEnabledObserver(function(c){if(c.enabled){// TODO ??
_this13._sendBufferdMessageToComponent(c,"mount",false,true);_this13._sendBufferdMessageToComponent(c,"unmount",false,true);}});if(isDefaultComponent){// attributes should be exposed on node
component.attributes.forEach(function(p){return _this13.addAttribute(p);});if(this._defaultValueResolved){component.attributes.forEach(function(p){return p.resolveDefaultValue(NodeUtility.getAttributes(_this13.element));});}}if(this._mounted){this._sendMessageToComponent(component,"awake",true,false);this._sendMessageToComponent(component,"mount",false,true);}}},{key:"getComponents",value:function getComponents(){return this._components;}},{key:"getComponent",value:function getComponent(name){if(typeof name==="string"){for(var i=0;i<this._components.length;i++){if(this._components[i].name.name===name){return this._components[i];}}}else{for(var _i2=0;_i2<this._components.length;_i2++){if(this._components[_i2].name.fqn===name.fqn){return this._components[_i2];}}}return null;}/**
     * すべてのコンポーネントの属性をエレメントかデフォルト値で初期化
     */},{key:"resolveAttributesValue",value:function resolveAttributesValue(){var _this14=this;this._defaultValueResolved=true;this._components.forEach(function(component){component.resolveDefaultAttributes(NodeUtility.getAttributes(_this14.element));});}/**
     * このノードのtreeConstrainが満たされるか調べる
     * @return {string[]} [description]
     */},{key:"checkTreeConstraints",value:function checkTreeConstraints(){var _this15=this;var constraints=this.nodeDeclaration.treeConstraints;if(!constraints){return[];}var errorMesasges=constraints.map(function(constraint){return constraint(_this15);}).filter(function(message){return message!==null;});if(errorMesasges.length===0){return null;}return errorMesasges;}/**
     * バッファしていたmount,unmountが送信されるかもしれない.アクティブなら
     */},{key:"notifyActivenessUpdate",value:function notifyActivenessUpdate(){if(this.isActive){this._sendBufferdMessage(this.mounted?"mount":"unmount",false);this.children.forEach(function(child){child.notifyActivenessUpdate();});}}/**
     * コンポーネントにメッセージを送る。送信したらバッファからは削除される.
     * @param  {Component} targetComponent 対象コンポーネント
     * @param  {string}    message         メッセージ
     * @param  {boolean}   forced          trueでコンポーネントのenableを無視して送信
     * @param  {boolean}   toBuffer        trueで送信失敗したらバッファに追加
     * @param  {any}       args            [description]
     * @return {boolean}                   送信したか
     */},{key:"_sendMessageToComponent",value:function _sendMessageToComponent(targetComponent,message,forced,toBuffer,args){message=Ensure.ensureTobeMessage(message);var bufferdIndex=this._messageBuffer.findIndex(function(obj){return obj.message===message&&obj.target===targetComponent;});if(!forced&&(!targetComponent.enabled||!this.isActive)){if(toBuffer&&bufferdIndex<0){this._messageBuffer.push({message:Ensure.ensureTobeMessage(message),target:targetComponent});}return false;}message=Ensure.ensureTobeMessage(message);var method=targetComponent[message];if(typeof method==="function"){method.bind(targetComponent)(args);}if(bufferdIndex>=0){this._messageBuffer.splice(bufferdIndex,1);}return true;}/**
     * バッファからメッセージを送信。成功したらバッファから削除
     * @param  {Component} target  [description]
     * @param  {string}    message [description]
     * @param  {boolean}   forced  [description]
     * @param  {any}       args    [description]
     * @return {boolean}           成功したか
     */},{key:"_sendBufferdMessageToComponent",value:function _sendBufferdMessageToComponent(target,message,forced,sendToRemove,args){if(!forced&&(!target.enabled||!this.isActive)){return false;}message=Ensure.ensureTobeMessage(message);var bufferdIndex=this._messageBuffer.findIndex(function(obj){return obj.message===message&&obj.target===target;});if(bufferdIndex>=0){var method=target[message];if(typeof method==="function"){method.bind(target)(args);}if(sendToRemove){this._messageBuffer.splice(bufferdIndex,1);}return true;}return false;}},{key:"_sendMessage",value:function _sendMessage(message,forced,toBuffer,args){var _this16=this;this._components.forEach(function(component){_this16._sendMessageToComponent(component,message,forced,toBuffer,args);});}/**
     * バッファのメッセージを送信可能なら送信してバッファから削除
     */},{key:"_sendBufferdMessage",value:function _sendBufferdMessage(message,forced,args){var _this17=this;var next=[];message=Ensure.ensureTobeMessage(message);this._messageBuffer.forEach(function(obj){if(obj.message!==message||!_this17._sendBufferdMessageToComponent(obj.target,message,forced,false,args)){next.push(obj);}});this._messageBuffer=next;}},{key:"_clearMessageBuffer",value:function _clearMessageBuffer(message){message=Ensure.ensureTobeMessage(message);this._messageBuffer=this._messageBuffer.filter(function(obj){return obj.message!==message;});}},{key:"_callRecursively",value:function _callRecursively(func,nextGenerator){var val=func(this);var nexts=nextGenerator(this);var nextVals=nexts.map(function(c){return c.callRecursively(func);});var list=nextVals.reduce(function(clist,current){return clist.concat(current);},[]);list.unshift(val);return list;}},{key:"name",get:function get(){return this.nodeDeclaration.name;}/**
     * このノードの属するツリーのGomlInterface。unmountedならnull。
     * @return {IGomlInterface} [description]
     */},{key:"tree",get:function get(){return this._tree;}},{key:"deleted",get:function get(){return this._deleted;}},{key:"isActive",get:function get(){if(this._parent){return this._parent.isActive&&this.enabled;}else{return this.enabled;}}},{key:"enabled",get:function get(){return this.attr("enabled");},set:function set(value){this.attr("enabled",value);}/**
     * ツリーで共有されるオブジェクト。マウントされていない状態ではnull。
     * @return {NSDictionary<any>} [description]
     */},{key:"companion",get:function get(){return this._companion;}},{key:"nodeName",get:function get(){return this.nodeDeclaration.name;}},{key:"parent",get:function get(){return this._parent;}},{key:"hasChildren",get:function get(){return this.children.length>0;}/**
     * Get mounted status.
     * @return {boolean} Whether this node is mounted or not.
     */},{key:"mounted",get:function get(){return this._mounted;}}],[{key:"fromElement",value:function fromElement(elem){return obtainGomlInterface.nodeDictionary[elem.getAttribute("x-gr-id")];}}]);return GomlNode;}(EEObject);/**
 * Parser of Goml to Node utilities.
 * This class do not store any nodes and goml properties.
 */var GomlParser=function(){function GomlParser(){_classCallCheck(this,GomlParser);}_createClass(GomlParser,null,[{key:"parse",/**
     * Domをパースする
     * @param  {Element}           source    [description]
     * @param  {GomlNode}          parent    あればこのノードにaddChildされる
     * @return {GomlNode}                    ルートノード
     */value:function parse(source,parent,scriptTag){var newNode=GomlParser._createNode(source);if(!newNode){// when specified node could not be found
console.warn("\""+source.tagName+"\" was not parsed.");return null;}// Parse children recursively
var children=source.childNodes;var childNodeElements=[];// for parse after .Components has resolved.
if(children&&children.length!==0){var removeTarget=[];for(var i=0;i<children.length;i++){var child=children.item(i);if(!GomlParser._isElement(child)){removeTarget.push(child);continue;}if(this._isComponentsTag(child)){// parse as components
GomlParser._parseComponents(newNode,child);removeTarget.push(child);}else{// parse as child node.
childNodeElements.push(child);}}// remove unused elements
for(var _i3=0;_i3<removeTarget.length;_i3++){source.removeChild(removeTarget[_i3]);}}// generate tree
if(parent){parent.addChild(newNode,null,false);}childNodeElements.forEach(function(child){GomlParser.parse(child,newNode,null);});return newNode;}/**
     * GomlNodeのインスタンス化。GrimoireInterfaceへの登録
     * @param  {HTMLElement}      elem         [description]
     * @param  {GomlConfigurator} configurator [description]
     * @return {GomlTreeNodeBase}              [description]
     */},{key:"_createNode",value:function _createNode(elem){var tagName=elem.localName;var recipe=obtainGomlInterface.nodeDeclarations.get(elem);if(!recipe){throw new Error("Tag \""+tagName+"\" is not found.");}return new GomlNode(recipe,elem);}/**
     * .COMPONENTSのパース。
     * @param {GomlNode} node          アタッチされるコンポーネント
     * @param {Element}  componentsTag .COMPONENTSタグ
     */},{key:"_parseComponents",value:function _parseComponents(node,componentsTag){var componentNodes=componentsTag.childNodes;if(!componentNodes){return;}for(var i=0;i<componentNodes.length;i++){var componentNode=componentNodes.item(i);if(!GomlParser._isElement(componentNode)){continue;// Skip if the node was not element
}var componentDecl=obtainGomlInterface.componentDeclarations.get(componentNode);if(!componentDecl){throw new Error("Component "+componentNode.tagName+" is not found.");}var component=componentDecl.generateInstance(componentNode);node._addComponentDirectly(component,false);}}},{key:"_isElement",value:function _isElement(node){return node.nodeType===Node.ELEMENT_NODE;}},{key:"_isComponentsTag",value:function _isComponentsTag(element){var regexToFindComponent=/\.COMPONENTS$/mi;// TODO might needs to fix
return regexToFindComponent.test(element.nodeName);}}]);return GomlParser;}();var ComponentInterface=function(){function ComponentInterface(components){_classCallCheck(this,ComponentInterface);this.components=components;}_createClass(ComponentInterface,[{key:"get",value:function get(i1,i2,i3){var c=this.components;if(i1===void 0){if(c.length===0||c[0].length===0||c[0][0].length===0){return null;}else if(c.length===1&&c[0].length===1||c[0][0].length===1){return c[0][0][0];}throw new Error("There are too many candidate");}else if(i2===void 0){if(c.length===0||c[0].length===0||c[0][0].length<=i1){return null;}else if(c.length===1&&c[0].length===1){return c[0][0][i1];}throw new Error("There are too many candidate");}else if(i3===void 0){if(c.length===0||c[0].length<=i2||c[0][0].length<=i1){return null;}else if(c.length===1){return c[0][i2][i1];}throw new Error("There are too many candidate");}else{if(c.length<=i3||c[0].length<=i2||c[0][0].length<=i1){return null;}return c[i3][i2][i1];}}},{key:"forEach",value:function forEach(f){this.components.forEach(function(tree,ti){tree.forEach(function(nodes,ni){nodes.forEach(function(comp,ci){f(comp,ci,ni,ti);});});});return this;}},{key:"attr",value:function attr(attrName,value){if(value===void 0){// return Attribute.
return this.components[0][0][0].getValue(attrName).Value;}else{// set value.
this.forEach(function(component){component.setValue(attrName,value);});}}},{key:"on",value:function on(){// TODO implement
return;}},{key:"off",value:function off(){// TODO implement
return;}}]);return ComponentInterface;}();/**
 * 複数のノードを対象とした操作を提供するインタフェース
 */var NodeInterface=function(){function NodeInterface(nodes){_classCallCheck(this,NodeInterface);this.nodes=nodes;}_createClass(NodeInterface,[{key:"queryFunc",value:function queryFunc(query){return new ComponentInterface(this.queryComponents(query));}},{key:"queryComponents",value:function queryComponents(query){return this.nodes.map(function(nodes){return nodes.map(function(node){var componentElements=node.componentsElement.querySelectorAll(query);var components=[];for(var i=0;i<componentElements.length;i++){var elem=componentElements[i];var component=obtainGomlInterface.componentDictionary[elem.getAttribute("x-gr-id")];if(component){components.push(component);}}return components;});});}},{key:"get",value:function get(i1,i2){var c=this.nodes;if(i1===void 0){if(c.length===0||c[0].length===0){return null;}else if(c.length===1&&c[0].length===1){return c[0][0];}throw new Error("There are too many candidate");}else if(i2===void 0){if(c.length===0||c[0].length<=i1){return null;}else if(c.length===1&&c[0].length>i1){return c[0][i1];}throw new Error("There are too many candidate");}else{if(c.length<=i1||c[i1].length<=i2){return null;}else{return c[i1][i2];}}}},{key:"attr",value:function attr(attrName,value){if(value===void 0){// return Attribute.
return this.nodes[0][0].attributes.get(attrName).Value;}else{// set value.
this.forEach(function(node){var attr=node.attributes.get(attrName);if(attr.declaration.readonly){throw new Error("The attribute "+attr.name.fqn+" is readonly");}if(attr){attr.Value=value;}});}}/**
     * 対象ノードにイベントリスナを追加します。
     * @param {string}   eventName [description]
     * @param {Function} listener  [description]
     */},{key:"on",value:function on(eventName,listener){this.forEach(function(node){node.on(eventName,listener);});return this;}/**
     * 対象ノードに指定したイベントリスナが登録されていれば削除します
     * @param {string}   eventName [description]
     * @param {Function} listener  [description]
     */},{key:"off",value:function off(eventName,listener){this.forEach(function(node){node.removeListener(eventName,listener);});return this;}/**
     * このノードインタフェースが対象とするノードそれぞれに、
     * タグで指定したノードを子要素として追加します。
     * @param {string} tag [description]
     */},{key:"append",value:function append(tag){this.forEach(function(node){var elems=XMLReader.parseXML(tag);elems.forEach(function(elem){return GomlParser.parse(elem,node,null);});});return this;}/**
     * このノードインタフェースが対象とするノードの子に、
     * 指定されたノードが存在すれば削除します。
     * @param {GomlNode} child [description]
     */},{key:"remove",value:function remove(child){this.forEach(function(node){node.removeChild(child);});return this;}/**
     * このノードインタフェースが対象とするノードに対して反復処理を行います
     * @param  {GomlNode} callback [description]
     * @return {[type]}            [description]
     */},{key:"forEach",value:function forEach(callback){this.nodes.forEach(function(array){array.forEach(function(node){callback(node);});});return this;}/**
     * このノードインタフェースが対象とするノードを有効、または無効にします。
     * @param {boolean} enable [description]
     */},{key:"setEnable",value:function setEnable(enable){this.forEach(function(node){node.enabled=!!enable;});return this;}/**
     * このノードインタフェースにアタッチされたコンポーネントをセレクタで検索します。
     * @pram  {string}      query [description]
     * @return {Component[]}       [description]
     */},{key:"find",value:function find(query){var allComponents=[];this.queryComponents(query).forEach(function(gomlComps){gomlComps.forEach(function(nodeComps){nodeComps.forEach(function(comp){allComponents.push(comp);});});});return allComponents;}/**
     * このノードインタフェースが対象とするノードのそれぞれの子ノードを対象とする、
     * 新しいノードインタフェースを取得します。
     * @return {NodeInterface} [description]
     */},{key:"children",value:function children(){var children=this.nodes.map(function(nodes){return nodes.map(function(node){return node.children;}).reduce(function(pre,cur){return pre.concat(cur);});});return new NodeInterface(children);}/**
     * 対象ノードにコンポーネントをアタッチします。
     * @param {Component} component [description]
     */},{key:"addCompnent",value:function addCompnent(componentId){this.forEach(function(node){node.addComponent(componentId,false);});return this;}/**
     * 最初の対象ノードを取得する
     * @return {GomlNode} [description]
     */},{key:"first",value:function first(){if(this.count()===0){return null;}return this.nodes[0][0];}/**
     * 対象となる唯一のノードを取得する。
     * 対象が存在しない、あるいは複数存在するときは例外を投げる。
     * @return {GomlNode} [description]
     */},{key:"single",value:function single(){if(this.count()!==1){throw new Error("this nodeInterface is not single.");}return this.first();}/**
     * 対象となるノードの個数を取得する
     * @return {number} [description]
     */},{key:"count",value:function count(){if(this.nodes.length===0){return 0;}var counts=this.nodes.map(function(nodes){return nodes.length;});return counts.reduce(function(total,current){return total+current;},0);}}]);return NodeInterface;}();/**
 * Provides interfaces to treat whole goml tree for each.
 */var GomlInterface=function(){function GomlInterface(rootNodes){_classCallCheck(this,GomlInterface);this.rootNodes=rootNodes;}_createClass(GomlInterface,[{key:"getNodeById",value:function getNodeById(id){var _this18=this;return new Array(this.rootNodes.length).map(function(v,i){return GomlNode.fromElement(_this18.rootNodes[i].element.ownerDocument.getElementById(id));});}},{key:"queryFunc",value:function queryFunc(query){var context=new NodeInterface(this.queryNodes(query));var queryFunc=context.queryFunc.bind(context);Object.setPrototypeOf(queryFunc,context);return queryFunc;}},{key:"queryNodes",value:function queryNodes(query){return this.rootNodes.map(function(root){var nodelist=root.element.ownerDocument.querySelectorAll(query);var nodes=[];for(var i=0;i<nodelist.length;i++){var node=obtainGomlInterface.nodeDictionary[nodelist.item(i).getAttribute("x-gr-id")];if(node){nodes.push(node);}}return nodes;});}}]);return GomlInterface;}();var GomlInterfaceGenerator=function GomlInterfaceGenerator(rootNodes){var gomlContext=new GomlInterface(rootNodes);var queryFunc=gomlContext.queryFunc.bind(gomlContext);Object.setPrototypeOf(queryFunc,gomlContext);return queryFunc;};var GrimoireInterfaceImpl=function(){function GrimoireInterfaceImpl(){_classCallCheck(this,GrimoireInterfaceImpl);this.nodeDeclarations=new NSDictionary();this.converters=new NSDictionary();this.componentDeclarations=new NSDictionary();this.rootNodes={};this.loadTasks=[];this.nodeDictionary={};this.componentDictionary={};this.companion=new NSDictionary();}/**
     * Generate namespace helper function
     * @param  {string} ns namespace URI to be used
     * @return {[type]}    the namespaced identity
     */_createClass(GrimoireInterfaceImpl,[{key:"ns",value:function ns(_ns){return function(name){return new NSIdentity(_ns,name);};}},{key:"initialize",value:function initialize(){this.registerConverter("String",StringConverter);this.registerConverter("StringArray",StringArrayConverter);this.registerConverter("Boolean",BooleanConverter);this.registerComponent("GrimoireComponent",GrimoireComponent);this.registerNode("GrimoireNodeBase",["GrimoireComponent"]);}/**
     * Register plugins
     * @param  {(}      loadTask [description]
     * @return {[type]}          [description]
     */},{key:"register",value:function register(loadTask){this.loadTasks.push(loadTask);}},{key:"resolvePlugins",value:function resolvePlugins(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee(){var i;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:i=0;case 1:if(!(i<this.loadTasks.length)){_context.next=7;break;}_context.next=4;return this.loadTasks[i]();case 4:i++;_context.next=1;break;case 7:case"end":return _context.stop();}}},_callee,this);}));}/**
     * register custom component
     * @param  {string                |   NSIdentity} name          [description]
     * @param  {IAttributeDeclaration }} attributes           [description]
     * @param  {Object                |   (new                 (}           obj           [description]
     * @return {[type]}                       [description]
     */},{key:"registerComponent",value:function registerComponent(name,obj){name=Ensure.ensureTobeNSIdentity(name);var attrs=obj["attributes"];obj=this._ensureTobeComponentConstructor(obj);this.componentDeclarations.set(name,new ComponentDeclaration(name,attrs,obj));}},{key:"registerNode",value:function registerNode(name,requiredComponents,defaultValues,superNode){name=Ensure.ensureTobeNSIdentity(name);requiredComponents=Ensure.ensureTobeNSIdentityArray(requiredComponents);defaultValues=Ensure.ensureTobeNSDictionary(defaultValues,name.ns);superNode=Ensure.ensureTobeNSIdentity(superNode);this.nodeDeclarations.set(name,new NodeDeclaration(name,NSSet.fromArray(requiredComponents),defaultValues,superNode));}},{key:"registerConverter",value:function registerConverter(name,converter){name=Ensure.ensureTobeNSIdentity(name);this.converters.set(name,{name:name,convert:converter});}},{key:"addRootNode",value:function addRootNode(tag,rootNode){if(!rootNode){throw new Error("can not register null to rootNodes.");}this.rootNodes[rootNode.id]=rootNode;rootNode.companion.set(this.ns(Constants.defaultNamespace)("scriptElement"),tag);// check tree constraint.
var errorMessages=rootNode.callRecursively(function(n){return n.checkTreeConstraints();}).reduce(function(list,current){return list.concat(current);}).filter(function(error){return error;});if(errorMessages.length!==0){var message=errorMessages.reduce(function(m,current){return m+"\n"+current;});throw new Error("tree constraint is not satisfied.\n"+message);}// awake and mount tree.
rootNode.setMounted(true);rootNode.broadcastMessage("treeInitialized",{ownerScriptTag:tag,id:rootNode.id});tag.setAttribute("x-rootNodeId",rootNode.id);return rootNode.id;}},{key:"getRootNode",value:function getRootNode(scriptTag){var id=scriptTag.getAttribute("x-rootNodeId");return this.rootNodes[id];}},{key:"queryRootNodes",value:function queryRootNodes(query){var scriptTags=document.querySelectorAll(query);var nodes=[];for(var i=0;i<scriptTags.length;i++){var node=this.getRootNode(scriptTags.item(i));if(node){nodes.push(node);}}return nodes;}/**
     * This method is not for users.
     * Just for unit testing.
     *
     * Clear all configuration that GrimoireInterface contain.
     */},{key:"clear",value:function clear(){this.nodeDeclarations.clear();this.componentDeclarations.clear();this.converters.clear();for(var key in this.rootNodes){delete this.rootNodes[key];}this.loadTasks.splice(0,this.loadTasks.length);this.initialize();}/**
     * Ensure the given object or constructor to be an constructor inherits Component;
     * @param  {Object | (new ()=> Component} obj [The variable need to be ensured.]
     * @return {[type]}      [The constructor inherits Component]
     */},{key:"_ensureTobeComponentConstructor",value:function _ensureTobeComponentConstructor(obj){if(typeof obj==="function"){if(!(obj.prototype instanceof Component)&&obj!==Component){throw new Error("Component constructor must extends Component class.");}}else if((typeof obj==="undefined"?"undefined":_typeof(obj))==="object"){var newCtor=function newCtor(){Component.call(this);};var properties={};for(var key in obj){if(key==="attributes"){continue;}properties[key]={value:obj[key]};}newCtor.prototype=Object.create(Component.prototype,properties);Object.defineProperty(newCtor,"attributes",{value:obj["attributes"]});obj=newCtor;}else if(!obj){obj=Component;}return obj;}}]);return GrimoireInterfaceImpl;}();var context=new GrimoireInterfaceImpl();var obtainGomlInterface=function obtainGomlInterface(query){return GomlInterfaceGenerator(context.queryRootNodes(query));};// const bindedFunction = obtainGomlInterface.bind(context);
Object.setPrototypeOf(obtainGomlInterface,context);var XMLHttpRequestAsync=function(){function XMLHttpRequestAsync(){_classCallCheck(this,XMLHttpRequestAsync);}_createClass(XMLHttpRequestAsync,null,[{key:"send",value:function send(xhr,data){return new Promise(function(resolve,reject){xhr.onload=function(e){resolve(e);};xhr.onerror=function(e){reject(e);};xhr.send(data);});}}]);return XMLHttpRequestAsync;}();/**
 * Provides the features to fetch Goml source.
 */var GomlLoader=function(){function GomlLoader(){_classCallCheck(this,GomlLoader);}_createClass(GomlLoader,null,[{key:"loadFromScriptTag",/**
     * Obtain the Goml source from specified tag.
     * @param  {HTMLScriptElement} scriptTag [the script tag to load]
     * @return {Promise<void>}               [the promise to wait for loading]
     */value:function loadFromScriptTag(scriptTag){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee2(){var srcAttr,source,req,doc,rootNode;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:srcAttr=scriptTag.getAttribute("src");source=void 0;if(!srcAttr){_context2.next=10;break;}// ignore text element
req=new XMLHttpRequest();req.open("GET",srcAttr);_context2.next=7;return XMLHttpRequestAsync.send(req);case 7:source=req.responseText;_context2.next=11;break;case 10:source=scriptTag.text;case 11:doc=XMLReader.parseXML(source,"GOML");rootNode=GomlParser.parse(doc[0],null,scriptTag);obtainGomlInterface.addRootNode(scriptTag,rootNode);case 14:case"end":return _context2.stop();}}},_callee2,this);}));}/**
     * Load from the script tags which will be found with specified query.
     * @param  {string}          query [the query to find script tag]
     * @return {Promise<void[]>}       [the promise to wait for all goml loading]
     */},{key:"loadFromQuery",value:function loadFromQuery(query){var tags=document.querySelectorAll(query);var pArray=[];for(var i=0;i<tags.length;i++){pArray[i]=GomlLoader.loadFromScriptTag(tags.item(i));}return Promise.all(pArray);}/**
     * Load all Goml sources contained in HTML.
     * @return {Promise<void>} [the promise to wait for all goml loading]
     */},{key:"loadForPage",value:function loadForPage(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee3(){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return GomlLoader.loadFromQuery('script[type="text/goml"]');case 2:case"end":return _context3.stop();}}},_callee3,this);}));}}]);return GomlLoader;}();/**
 * Provides procedures for initializing.
 */var GrimoireInitializer=function(){function GrimoireInitializer(){_classCallCheck(this,GrimoireInitializer);}_createClass(GrimoireInitializer,null,[{key:"initialize",/**
     * Start initializing
     * @return {Promise<void>} The promise which will be resolved when all of the Goml script was loaded.
     */value:function initialize(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee4(){return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;GrimoireInitializer._copyGLConstants();obtainGomlInterface.initialize();_context4.next=5;return GrimoireInitializer._waitForDOMLoading();case 5:_context4.next=7;return obtainGomlInterface.resolvePlugins();case 7:_context4.next=9;return GomlLoader.loadForPage();case 9:_context4.next=14;break;case 11:_context4.prev=11;_context4.t0=_context4["catch"](0);console.error(_context4.t0);case 14:case"end":return _context4.stop();}}},_callee4,this,[[0,11]]);}));}/**
     * Ensure WebGLRenderingContext.[CONSTANTS] is exisiting.
     * Some of the browsers contains them in prototype.
     */},{key:"_copyGLConstants",value:function _copyGLConstants(){if(WebGLRenderingContext.ONE){// Assume the CONSTANTS are already in WebGLRenderingContext
// Chrome,Firefox,IE,Edge...
return;}// Otherwise like ""Safari""
for(var propName in WebGLRenderingContext.prototype){if(/^[A-Z]/.test(propName)){var property=WebGLRenderingContext.prototype[propName];WebGLRenderingContext[propName]=property;}}}/**
     * Obtain the promise object which will be resolved when DOMContentLoaded event was rised.
     * @return {Promise<void>} the promise
     */},{key:"_waitForDOMLoading",value:function _waitForDOMLoading(){return new Promise(function(resolve){window.addEventListener("DOMContentLoaded",function(){resolve();});});}}]);return GrimoireInitializer;}();/**
 * Just start the process.
 */GrimoireInitializer.initialize();window["gr"]=obtainGomlInterface;var VectorBase=function(){function VectorBase(){_classCallCheck(this,VectorBase);this._magnitudeSquaredCache=-1;this._magnitudeCache=-1;}_createClass(VectorBase,[{key:"magnitude",get:function get(){if(this._magnitudeCache<0){this._magnitudeCache=Math.sqrt(this.sqrMagnitude);}return this._magnitudeCache;}},{key:"ElementCount",get:function get(){return 0;}},{key:"sqrMagnitude",get:function get(){if(this._magnitudeSquaredCache<0){var sum=0;var r=this.rawElements;for(var i=0;i<this.ElementCount;i++){sum+=r[i]*r[i];}this._magnitudeSquaredCache=sum;}return this._magnitudeSquaredCache;}}],[{key:"__elementEquals",value:function __elementEquals(v1,v2){if(v1.ElementCount!==v2.ElementCount){return false;}for(var i=0;i<v1.ElementCount;i++){if(v1.rawElements[i]!==v2.rawElements[i]){return false;}}return true;}},{key:"__nearlyElementEquals",value:function __nearlyElementEquals(v1,v2){if(v1.ElementCount!==v2.ElementCount){return false;}var error=0.01;for(var i=0;i<v1.ElementCount;i++){if(Math.abs(v1.rawElements[i]-v2.rawElements[i])>error){return false;}}return true;}},{key:"__fromGenerationFunction",value:function __fromGenerationFunction(v1,v2,gen){var f=new Float32Array(v1.ElementCount);for(var i=0;i<f.length;i++){f[i]=gen(i,v1,v2);}return f;}},{key:"__parse",value:function __parse(str){var checkRegex=/(-?)([\d,E\+\-\.]+)?(n)?\(([-\d,E\+\.\s]+)\)/g;var matches=checkRegex.exec(str);if(matches){if(!matches[4]){throw new Error("The specified string '"+str+"' is not containing braced vector.");}return{needNormalize:matches[3]==="n",needNegate:matches[1]==="-",coefficient:parseFloat(matches[2]),elements:VectorBase._parseRawVector(matches[4])};}else{// Assume this is simplified format.
return{needNormalize:false,needNegate:false,elements:VectorBase._parseRawVector(str),coefficient:undefined};}}},{key:"_parseRawVector",value:function _parseRawVector(str){var splitted=str.split(",");var result=new Array(splitted.length);for(var i=0;i<splitted.length;i++){result[i]=parseFloat(splitted[i]);if(isNaN(result[i])){throw new Error("Unexpected vector string "+str);}}return result;}}]);return VectorBase;}();/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. *//**
 * @class Common utilities
 * @name glMatrix
 */var glMatrix$2={};// Configuration Constants
glMatrix$2.EPSILON=0.000001;glMatrix$2.ARRAY_TYPE=typeof Float32Array!=='undefined'?Float32Array:Array;glMatrix$2.RANDOM=Math.random;glMatrix$2.ENABLE_SIMD=false;// Capability detection
var global$1=new Function('return this')();glMatrix$2.SIMD_AVAILABLE=glMatrix$2.ARRAY_TYPE===global$1.Float32Array&&'SIMD'in global$1;glMatrix$2.USE_SIMD=glMatrix$2.ENABLE_SIMD&&glMatrix$2.SIMD_AVAILABLE;/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */glMatrix$2.setMatrixArrayType=function(type){glMatrix$2.ARRAY_TYPE=type;};var degree=Math.PI/180;/**
* Convert Degree To Radian
*
* @param {Number} a Angle in Degrees
*/glMatrix$2.toRadian=function(a){return a*degree;};/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 * 
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */glMatrix$2.equals=function(a,b){return Math.abs(a-b)<=glMatrix$2.EPSILON*Math.max(1.0,Math.abs(a),Math.abs(b));};var common=glMatrix$2;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$3=common;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$4=common;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$5=common;/**
 * @class 3x3 Matrix
 * @name mat3
 */var mat3$1={};/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */mat3$1.create=function(){var out=new glMatrix$5.ARRAY_TYPE(9);out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=1;out[5]=0;out[6]=0;out[7]=0;out[8]=1;return out;};/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */mat3$1.fromMat4=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[4];out[4]=a[5];out[5]=a[6];out[6]=a[8];out[7]=a[9];out[8]=a[10];return out;};/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */mat3$1.clone=function(a){var out=new glMatrix$5.ARRAY_TYPE(9);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];return out;};/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3$1.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];return out;};/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */mat3$1.fromValues=function(m00,m01,m02,m10,m11,m12,m20,m21,m22){var out=new glMatrix$5.ARRAY_TYPE(9);out[0]=m00;out[1]=m01;out[2]=m02;out[3]=m10;out[4]=m11;out[5]=m12;out[6]=m20;out[7]=m21;out[8]=m22;return out;};/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */mat3$1.set=function(out,m00,m01,m02,m10,m11,m12,m20,m21,m22){out[0]=m00;out[1]=m01;out[2]=m02;out[3]=m10;out[4]=m11;out[5]=m12;out[6]=m20;out[7]=m21;out[8]=m22;return out;};/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */mat3$1.identity=function(out){out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=1;out[5]=0;out[6]=0;out[7]=0;out[8]=1;return out;};/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3$1.transpose=function(out,a){// If we are transposing ourselves we can skip a few steps but have to cache some values
if(out===a){var a01=a[1],a02=a[2],a12=a[5];out[1]=a[3];out[2]=a[6];out[3]=a01;out[5]=a[7];out[6]=a02;out[7]=a12;}else{out[0]=a[0];out[1]=a[3];out[2]=a[6];out[3]=a[1];out[4]=a[4];out[5]=a[7];out[6]=a[2];out[7]=a[5];out[8]=a[8];}return out;};/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3$1.invert=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b01=a22*a11-a12*a21,b11=-a22*a10+a12*a20,b21=a21*a10-a11*a20,// Calculate the determinant
det=a00*b01+a01*b11+a02*b21;if(!det){return null;}det=1.0/det;out[0]=b01*det;out[1]=(-a22*a01+a02*a21)*det;out[2]=(a12*a01-a02*a11)*det;out[3]=b11*det;out[4]=(a22*a00-a02*a20)*det;out[5]=(-a12*a00+a02*a10)*det;out[6]=b21*det;out[7]=(-a21*a00+a01*a20)*det;out[8]=(a11*a00-a01*a10)*det;return out;};/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3$1.adjoint=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];out[0]=a11*a22-a12*a21;out[1]=a02*a21-a01*a22;out[2]=a01*a12-a02*a11;out[3]=a12*a20-a10*a22;out[4]=a00*a22-a02*a20;out[5]=a02*a10-a00*a12;out[6]=a10*a21-a11*a20;out[7]=a01*a20-a00*a21;out[8]=a00*a11-a01*a10;return out;};/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */mat3$1.determinant=function(a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return a00*(a22*a11-a12*a21)+a01*(-a22*a10+a12*a20)+a02*(a21*a10-a11*a20);};/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */mat3$1.multiply=function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b00=b[0],b01=b[1],b02=b[2],b10=b[3],b11=b[4],b12=b[5],b20=b[6],b21=b[7],b22=b[8];out[0]=b00*a00+b01*a10+b02*a20;out[1]=b00*a01+b01*a11+b02*a21;out[2]=b00*a02+b01*a12+b02*a22;out[3]=b10*a00+b11*a10+b12*a20;out[4]=b10*a01+b11*a11+b12*a21;out[5]=b10*a02+b11*a12+b12*a22;out[6]=b20*a00+b21*a10+b22*a20;out[7]=b20*a01+b21*a11+b22*a21;out[8]=b20*a02+b21*a12+b22*a22;return out;};/**
 * Alias for {@link mat3.multiply}
 * @function
 */mat3$1.mul=mat3$1.multiply;/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */mat3$1.translate=function(out,a,v){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],x=v[0],y=v[1];out[0]=a00;out[1]=a01;out[2]=a02;out[3]=a10;out[4]=a11;out[5]=a12;out[6]=x*a00+y*a10+a20;out[7]=x*a01+y*a11+a21;out[8]=x*a02+y*a12+a22;return out;};/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */mat3$1.rotate=function(out,a,rad){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],s=Math.sin(rad),c=Math.cos(rad);out[0]=c*a00+s*a10;out[1]=c*a01+s*a11;out[2]=c*a02+s*a12;out[3]=c*a10-s*a00;out[4]=c*a11-s*a01;out[5]=c*a12-s*a02;out[6]=a20;out[7]=a21;out[8]=a22;return out;};/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/mat3$1.scale=function(out,a,v){var x=v[0],y=v[1];out[0]=x*a[0];out[1]=x*a[1];out[2]=x*a[2];out[3]=y*a[3];out[4]=y*a[4];out[5]=y*a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];return out;};/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */mat3$1.fromTranslation=function(out,v){out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=1;out[5]=0;out[6]=v[0];out[7]=v[1];out[8]=1;return out;};/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */mat3$1.fromRotation=function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0]=c;out[1]=s;out[2]=0;out[3]=-s;out[4]=c;out[5]=0;out[6]=0;out[7]=0;out[8]=1;return out;};/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */mat3$1.fromScaling=function(out,v){out[0]=v[0];out[1]=0;out[2]=0;out[3]=0;out[4]=v[1];out[5]=0;out[6]=0;out[7]=0;out[8]=1;return out;};/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/mat3$1.fromMat2d=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=0;out[3]=a[2];out[4]=a[3];out[5]=0;out[6]=a[4];out[7]=a[5];out[8]=1;return out;};/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/mat3$1.fromQuat=function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,yx=y*x2,yy=y*y2,zx=z*x2,zy=z*y2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;out[0]=1-yy-zz;out[3]=yx-wz;out[6]=zx+wy;out[1]=yx+wz;out[4]=1-xx-zz;out[7]=zy-wx;out[2]=zx-wy;out[5]=zy+wx;out[8]=1-xx-yy;return out;};/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/mat3$1.normalFromMat4=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,// Calculate the determinant
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;if(!det){return null;}det=1.0/det;out[0]=(a11*b11-a12*b10+a13*b09)*det;out[1]=(a12*b08-a10*b11-a13*b07)*det;out[2]=(a10*b10-a11*b08+a13*b06)*det;out[3]=(a02*b10-a01*b11-a03*b09)*det;out[4]=(a00*b11-a02*b08+a03*b07)*det;out[5]=(a01*b08-a00*b10-a03*b06)*det;out[6]=(a31*b05-a32*b04+a33*b03)*det;out[7]=(a32*b02-a30*b05-a33*b01)*det;out[8]=(a30*b04-a31*b02+a33*b00)*det;return out;};/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat3$1.str=function(a){return'mat3('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+', '+a[4]+', '+a[5]+', '+a[6]+', '+a[7]+', '+a[8]+')';};/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat3$1.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2));};/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */mat3$1.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];out[2]=a[2]+b[2];out[3]=a[3]+b[3];out[4]=a[4]+b[4];out[5]=a[5]+b[5];out[6]=a[6]+b[6];out[7]=a[7]+b[7];out[8]=a[8]+b[8];return out;};/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */mat3$1.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];out[2]=a[2]-b[2];out[3]=a[3]-b[3];out[4]=a[4]-b[4];out[5]=a[5]-b[5];out[6]=a[6]-b[6];out[7]=a[7]-b[7];out[8]=a[8]-b[8];return out;};/**
 * Alias for {@link mat3.subtract}
 * @function
 */mat3$1.sub=mat3$1.subtract;/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */mat3$1.multiplyScalar=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;out[2]=a[2]*b;out[3]=a[3]*b;out[4]=a[4]*b;out[5]=a[5]*b;out[6]=a[6]*b;out[7]=a[7]*b;out[8]=a[8]*b;return out;};/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */mat3$1.multiplyScalarAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;out[2]=a[2]+b[2]*scale;out[3]=a[3]+b[3]*scale;out[4]=a[4]+b[4]*scale;out[5]=a[5]+b[5]*scale;out[6]=a[6]+b[6]*scale;out[7]=a[7]+b[7]*scale;out[8]=a[8]+b[8]*scale;return out;};/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */mat3$1.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8];};/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */mat3$1.equals=function(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],a6=a[6],a7=a[7],a8=a[8];var b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5],b6=a[6],b7=b[7],b8=b[8];return Math.abs(a0-b0)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a3),Math.abs(b3))&&Math.abs(a4-b4)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a4),Math.abs(b4))&&Math.abs(a5-b5)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a5),Math.abs(b5))&&Math.abs(a6-b6)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a6),Math.abs(b6))&&Math.abs(a7-b7)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a7),Math.abs(b7))&&Math.abs(a8-b8)<=glMatrix$5.EPSILON*Math.max(1.0,Math.abs(a8),Math.abs(b8));};var mat3_1=mat3$1;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$6=common;/**
 * @class 4x4 Matrix
 * @name mat4
 */var mat4$1={scalar:{},SIMD:{}};/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */mat4$1.create=function(){var out=new glMatrix$6.ARRAY_TYPE(16);out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=1;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=1;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */mat4$1.clone=function(a){var out=new glMatrix$6.ARRAY_TYPE(16);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */mat4$1.fromValues=function(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){var out=new glMatrix$6.ARRAY_TYPE(16);out[0]=m00;out[1]=m01;out[2]=m02;out[3]=m03;out[4]=m10;out[5]=m11;out[6]=m12;out[7]=m13;out[8]=m20;out[9]=m21;out[10]=m22;out[11]=m23;out[12]=m30;out[13]=m31;out[14]=m32;out[15]=m33;return out;};/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */mat4$1.set=function(out,m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){out[0]=m00;out[1]=m01;out[2]=m02;out[3]=m03;out[4]=m10;out[5]=m11;out[6]=m12;out[7]=m13;out[8]=m20;out[9]=m21;out[10]=m22;out[11]=m23;out[12]=m30;out[13]=m31;out[14]=m32;out[15]=m33;return out;};/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */mat4$1.identity=function(out){out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=1;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=1;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Transpose the values of a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.scalar.transpose=function(out,a){// If we are transposing ourselves we can skip a few steps but have to cache some values
if(out===a){var a01=a[1],a02=a[2],a03=a[3],a12=a[6],a13=a[7],a23=a[11];out[1]=a[4];out[2]=a[8];out[3]=a[12];out[4]=a01;out[6]=a[9];out[7]=a[13];out[8]=a02;out[9]=a12;out[11]=a[14];out[12]=a03;out[13]=a13;out[14]=a23;}else{out[0]=a[0];out[1]=a[4];out[2]=a[8];out[3]=a[12];out[4]=a[1];out[5]=a[5];out[6]=a[9];out[7]=a[13];out[8]=a[2];out[9]=a[6];out[10]=a[10];out[11]=a[14];out[12]=a[3];out[13]=a[7];out[14]=a[11];out[15]=a[15];}return out;};/**
 * Transpose the values of a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.SIMD.transpose=function(out,a){var a0,a1,a2,a3,tmp01,tmp23,out0,out1,out2,out3;a0=SIMD.Float32x4.load(a,0);a1=SIMD.Float32x4.load(a,4);a2=SIMD.Float32x4.load(a,8);a3=SIMD.Float32x4.load(a,12);tmp01=SIMD.Float32x4.shuffle(a0,a1,0,1,4,5);tmp23=SIMD.Float32x4.shuffle(a2,a3,0,1,4,5);out0=SIMD.Float32x4.shuffle(tmp01,tmp23,0,2,4,6);out1=SIMD.Float32x4.shuffle(tmp01,tmp23,1,3,5,7);SIMD.Float32x4.store(out,0,out0);SIMD.Float32x4.store(out,4,out1);tmp01=SIMD.Float32x4.shuffle(a0,a1,2,3,6,7);tmp23=SIMD.Float32x4.shuffle(a2,a3,2,3,6,7);out2=SIMD.Float32x4.shuffle(tmp01,tmp23,0,2,4,6);out3=SIMD.Float32x4.shuffle(tmp01,tmp23,1,3,5,7);SIMD.Float32x4.store(out,8,out2);SIMD.Float32x4.store(out,12,out3);return out;};/**
 * Transpse a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.transpose=glMatrix$6.USE_SIMD?mat4$1.SIMD.transpose:mat4$1.scalar.transpose;/**
 * Inverts a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.scalar.invert=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32,// Calculate the determinant
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;if(!det){return null;}det=1.0/det;out[0]=(a11*b11-a12*b10+a13*b09)*det;out[1]=(a02*b10-a01*b11-a03*b09)*det;out[2]=(a31*b05-a32*b04+a33*b03)*det;out[3]=(a22*b04-a21*b05-a23*b03)*det;out[4]=(a12*b08-a10*b11-a13*b07)*det;out[5]=(a00*b11-a02*b08+a03*b07)*det;out[6]=(a32*b02-a30*b05-a33*b01)*det;out[7]=(a20*b05-a22*b02+a23*b01)*det;out[8]=(a10*b10-a11*b08+a13*b06)*det;out[9]=(a01*b08-a00*b10-a03*b06)*det;out[10]=(a30*b04-a31*b02+a33*b00)*det;out[11]=(a21*b02-a20*b04-a23*b00)*det;out[12]=(a11*b07-a10*b09-a12*b06)*det;out[13]=(a00*b09-a01*b07+a02*b06)*det;out[14]=(a31*b01-a30*b03-a32*b00)*det;out[15]=(a20*b03-a21*b01+a22*b00)*det;return out;};/**
 * Inverts a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.SIMD.invert=function(out,a){var row0,row1,row2,row3,tmp1,minor0,minor1,minor2,minor3,det,a0=SIMD.Float32x4.load(a,0),a1=SIMD.Float32x4.load(a,4),a2=SIMD.Float32x4.load(a,8),a3=SIMD.Float32x4.load(a,12);// Compute matrix adjugate
tmp1=SIMD.Float32x4.shuffle(a0,a1,0,1,4,5);row1=SIMD.Float32x4.shuffle(a2,a3,0,1,4,5);row0=SIMD.Float32x4.shuffle(tmp1,row1,0,2,4,6);row1=SIMD.Float32x4.shuffle(row1,tmp1,1,3,5,7);tmp1=SIMD.Float32x4.shuffle(a0,a1,2,3,6,7);row3=SIMD.Float32x4.shuffle(a2,a3,2,3,6,7);row2=SIMD.Float32x4.shuffle(tmp1,row3,0,2,4,6);row3=SIMD.Float32x4.shuffle(row3,tmp1,1,3,5,7);tmp1=SIMD.Float32x4.mul(row2,row3);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor0=SIMD.Float32x4.mul(row1,tmp1);minor1=SIMD.Float32x4.mul(row0,tmp1);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor0=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1,tmp1),minor0);minor1=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0,tmp1),minor1);minor1=SIMD.Float32x4.swizzle(minor1,2,3,0,1);tmp1=SIMD.Float32x4.mul(row1,row2);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor0=SIMD.Float32x4.add(SIMD.Float32x4.mul(row3,tmp1),minor0);minor3=SIMD.Float32x4.mul(row0,tmp1);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor0=SIMD.Float32x4.sub(minor0,SIMD.Float32x4.mul(row3,tmp1));minor3=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0,tmp1),minor3);minor3=SIMD.Float32x4.swizzle(minor3,2,3,0,1);tmp1=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1,2,3,0,1),row3);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);row2=SIMD.Float32x4.swizzle(row2,2,3,0,1);minor0=SIMD.Float32x4.add(SIMD.Float32x4.mul(row2,tmp1),minor0);minor2=SIMD.Float32x4.mul(row0,tmp1);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor0=SIMD.Float32x4.sub(minor0,SIMD.Float32x4.mul(row2,tmp1));minor2=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0,tmp1),minor2);minor2=SIMD.Float32x4.swizzle(minor2,2,3,0,1);tmp1=SIMD.Float32x4.mul(row0,row1);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor2=SIMD.Float32x4.add(SIMD.Float32x4.mul(row3,tmp1),minor2);minor3=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2,tmp1),minor3);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor2=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3,tmp1),minor2);minor3=SIMD.Float32x4.sub(minor3,SIMD.Float32x4.mul(row2,tmp1));tmp1=SIMD.Float32x4.mul(row0,row3);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor1=SIMD.Float32x4.sub(minor1,SIMD.Float32x4.mul(row2,tmp1));minor2=SIMD.Float32x4.add(SIMD.Float32x4.mul(row1,tmp1),minor2);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor1=SIMD.Float32x4.add(SIMD.Float32x4.mul(row2,tmp1),minor1);minor2=SIMD.Float32x4.sub(minor2,SIMD.Float32x4.mul(row1,tmp1));tmp1=SIMD.Float32x4.mul(row0,row2);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor1=SIMD.Float32x4.add(SIMD.Float32x4.mul(row3,tmp1),minor1);minor3=SIMD.Float32x4.sub(minor3,SIMD.Float32x4.mul(row1,tmp1));tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor1=SIMD.Float32x4.sub(minor1,SIMD.Float32x4.mul(row3,tmp1));minor3=SIMD.Float32x4.add(SIMD.Float32x4.mul(row1,tmp1),minor3);// Compute matrix determinant
det=SIMD.Float32x4.mul(row0,minor0);det=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det,2,3,0,1),det);det=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det,1,0,3,2),det);tmp1=SIMD.Float32x4.reciprocalApproximation(det);det=SIMD.Float32x4.sub(SIMD.Float32x4.add(tmp1,tmp1),SIMD.Float32x4.mul(det,SIMD.Float32x4.mul(tmp1,tmp1)));det=SIMD.Float32x4.swizzle(det,0,0,0,0);if(!det){return null;}// Compute matrix inverse
SIMD.Float32x4.store(out,0,SIMD.Float32x4.mul(det,minor0));SIMD.Float32x4.store(out,4,SIMD.Float32x4.mul(det,minor1));SIMD.Float32x4.store(out,8,SIMD.Float32x4.mul(det,minor2));SIMD.Float32x4.store(out,12,SIMD.Float32x4.mul(det,minor3));return out;};/**
 * Inverts a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.invert=glMatrix$6.USE_SIMD?mat4$1.SIMD.invert:mat4$1.scalar.invert;/**
 * Calculates the adjugate of a mat4 not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.scalar.adjoint=function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];out[0]=a11*(a22*a33-a23*a32)-a21*(a12*a33-a13*a32)+a31*(a12*a23-a13*a22);out[1]=-(a01*(a22*a33-a23*a32)-a21*(a02*a33-a03*a32)+a31*(a02*a23-a03*a22));out[2]=a01*(a12*a33-a13*a32)-a11*(a02*a33-a03*a32)+a31*(a02*a13-a03*a12);out[3]=-(a01*(a12*a23-a13*a22)-a11*(a02*a23-a03*a22)+a21*(a02*a13-a03*a12));out[4]=-(a10*(a22*a33-a23*a32)-a20*(a12*a33-a13*a32)+a30*(a12*a23-a13*a22));out[5]=a00*(a22*a33-a23*a32)-a20*(a02*a33-a03*a32)+a30*(a02*a23-a03*a22);out[6]=-(a00*(a12*a33-a13*a32)-a10*(a02*a33-a03*a32)+a30*(a02*a13-a03*a12));out[7]=a00*(a12*a23-a13*a22)-a10*(a02*a23-a03*a22)+a20*(a02*a13-a03*a12);out[8]=a10*(a21*a33-a23*a31)-a20*(a11*a33-a13*a31)+a30*(a11*a23-a13*a21);out[9]=-(a00*(a21*a33-a23*a31)-a20*(a01*a33-a03*a31)+a30*(a01*a23-a03*a21));out[10]=a00*(a11*a33-a13*a31)-a10*(a01*a33-a03*a31)+a30*(a01*a13-a03*a11);out[11]=-(a00*(a11*a23-a13*a21)-a10*(a01*a23-a03*a21)+a20*(a01*a13-a03*a11));out[12]=-(a10*(a21*a32-a22*a31)-a20*(a11*a32-a12*a31)+a30*(a11*a22-a12*a21));out[13]=a00*(a21*a32-a22*a31)-a20*(a01*a32-a02*a31)+a30*(a01*a22-a02*a21);out[14]=-(a00*(a11*a32-a12*a31)-a10*(a01*a32-a02*a31)+a30*(a01*a12-a02*a11));out[15]=a00*(a11*a22-a12*a21)-a10*(a01*a22-a02*a21)+a20*(a01*a12-a02*a11);return out;};/**
 * Calculates the adjugate of a mat4 using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.SIMD.adjoint=function(out,a){var a0,a1,a2,a3;var row0,row1,row2,row3;var tmp1;var minor0,minor1,minor2,minor3;a0=SIMD.Float32x4.load(a,0);a1=SIMD.Float32x4.load(a,4);a2=SIMD.Float32x4.load(a,8);a3=SIMD.Float32x4.load(a,12);// Transpose the source matrix.  Sort of.  Not a true transpose operation
tmp1=SIMD.Float32x4.shuffle(a0,a1,0,1,4,5);row1=SIMD.Float32x4.shuffle(a2,a3,0,1,4,5);row0=SIMD.Float32x4.shuffle(tmp1,row1,0,2,4,6);row1=SIMD.Float32x4.shuffle(row1,tmp1,1,3,5,7);tmp1=SIMD.Float32x4.shuffle(a0,a1,2,3,6,7);row3=SIMD.Float32x4.shuffle(a2,a3,2,3,6,7);row2=SIMD.Float32x4.shuffle(tmp1,row3,0,2,4,6);row3=SIMD.Float32x4.shuffle(row3,tmp1,1,3,5,7);tmp1=SIMD.Float32x4.mul(row2,row3);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor0=SIMD.Float32x4.mul(row1,tmp1);minor1=SIMD.Float32x4.mul(row0,tmp1);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor0=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1,tmp1),minor0);minor1=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0,tmp1),minor1);minor1=SIMD.Float32x4.swizzle(minor1,2,3,0,1);tmp1=SIMD.Float32x4.mul(row1,row2);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor0=SIMD.Float32x4.add(SIMD.Float32x4.mul(row3,tmp1),minor0);minor3=SIMD.Float32x4.mul(row0,tmp1);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor0=SIMD.Float32x4.sub(minor0,SIMD.Float32x4.mul(row3,tmp1));minor3=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0,tmp1),minor3);minor3=SIMD.Float32x4.swizzle(minor3,2,3,0,1);tmp1=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1,2,3,0,1),row3);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);row2=SIMD.Float32x4.swizzle(row2,2,3,0,1);minor0=SIMD.Float32x4.add(SIMD.Float32x4.mul(row2,tmp1),minor0);minor2=SIMD.Float32x4.mul(row0,tmp1);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor0=SIMD.Float32x4.sub(minor0,SIMD.Float32x4.mul(row2,tmp1));minor2=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0,tmp1),minor2);minor2=SIMD.Float32x4.swizzle(minor2,2,3,0,1);tmp1=SIMD.Float32x4.mul(row0,row1);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor2=SIMD.Float32x4.add(SIMD.Float32x4.mul(row3,tmp1),minor2);minor3=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2,tmp1),minor3);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor2=SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3,tmp1),minor2);minor3=SIMD.Float32x4.sub(minor3,SIMD.Float32x4.mul(row2,tmp1));tmp1=SIMD.Float32x4.mul(row0,row3);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor1=SIMD.Float32x4.sub(minor1,SIMD.Float32x4.mul(row2,tmp1));minor2=SIMD.Float32x4.add(SIMD.Float32x4.mul(row1,tmp1),minor2);tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor1=SIMD.Float32x4.add(SIMD.Float32x4.mul(row2,tmp1),minor1);minor2=SIMD.Float32x4.sub(minor2,SIMD.Float32x4.mul(row1,tmp1));tmp1=SIMD.Float32x4.mul(row0,row2);tmp1=SIMD.Float32x4.swizzle(tmp1,1,0,3,2);minor1=SIMD.Float32x4.add(SIMD.Float32x4.mul(row3,tmp1),minor1);minor3=SIMD.Float32x4.sub(minor3,SIMD.Float32x4.mul(row1,tmp1));tmp1=SIMD.Float32x4.swizzle(tmp1,2,3,0,1);minor1=SIMD.Float32x4.sub(minor1,SIMD.Float32x4.mul(row3,tmp1));minor3=SIMD.Float32x4.add(SIMD.Float32x4.mul(row1,tmp1),minor3);SIMD.Float32x4.store(out,0,minor0);SIMD.Float32x4.store(out,4,minor1);SIMD.Float32x4.store(out,8,minor2);SIMD.Float32x4.store(out,12,minor3);return out;};/**
 * Calculates the adjugate of a mat4 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4$1.adjoint=glMatrix$6.USE_SIMD?mat4$1.SIMD.adjoint:mat4$1.scalar.adjoint;/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */mat4$1.determinant=function(a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00*a11-a01*a10,b01=a00*a12-a02*a10,b02=a00*a13-a03*a10,b03=a01*a12-a02*a11,b04=a01*a13-a03*a11,b05=a02*a13-a03*a12,b06=a20*a31-a21*a30,b07=a20*a32-a22*a30,b08=a20*a33-a23*a30,b09=a21*a32-a22*a31,b10=a21*a33-a23*a31,b11=a22*a33-a23*a32;// Calculate the determinant
return b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;};/**
 * Multiplies two mat4's explicitly using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand, must be a Float32Array
 * @param {mat4} b the second operand, must be a Float32Array
 * @returns {mat4} out
 */mat4$1.SIMD.multiply=function(out,a,b){var a0=SIMD.Float32x4.load(a,0);var a1=SIMD.Float32x4.load(a,4);var a2=SIMD.Float32x4.load(a,8);var a3=SIMD.Float32x4.load(a,12);var b0=SIMD.Float32x4.load(b,0);var out0=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0,0,0,0,0),a0),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0,1,1,1,1),a1),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0,2,2,2,2),a2),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0,3,3,3,3),a3))));SIMD.Float32x4.store(out,0,out0);var b1=SIMD.Float32x4.load(b,4);var out1=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1,0,0,0,0),a0),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1,1,1,1,1),a1),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1,2,2,2,2),a2),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1,3,3,3,3),a3))));SIMD.Float32x4.store(out,4,out1);var b2=SIMD.Float32x4.load(b,8);var out2=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2,0,0,0,0),a0),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2,1,1,1,1),a1),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2,2,2,2,2),a2),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2,3,3,3,3),a3))));SIMD.Float32x4.store(out,8,out2);var b3=SIMD.Float32x4.load(b,12);var out3=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3,0,0,0,0),a0),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3,1,1,1,1),a1),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3,2,2,2,2),a2),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3,3,3,3,3),a3))));SIMD.Float32x4.store(out,12,out3);return out;};/**
 * Multiplies two mat4's explicitly not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */mat4$1.scalar.multiply=function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];// Cache only the current line of the second matrix
var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0]=b0*a00+b1*a10+b2*a20+b3*a30;out[1]=b0*a01+b1*a11+b2*a21+b3*a31;out[2]=b0*a02+b1*a12+b2*a22+b3*a32;out[3]=b0*a03+b1*a13+b2*a23+b3*a33;b0=b[4];b1=b[5];b2=b[6];b3=b[7];out[4]=b0*a00+b1*a10+b2*a20+b3*a30;out[5]=b0*a01+b1*a11+b2*a21+b3*a31;out[6]=b0*a02+b1*a12+b2*a22+b3*a32;out[7]=b0*a03+b1*a13+b2*a23+b3*a33;b0=b[8];b1=b[9];b2=b[10];b3=b[11];out[8]=b0*a00+b1*a10+b2*a20+b3*a30;out[9]=b0*a01+b1*a11+b2*a21+b3*a31;out[10]=b0*a02+b1*a12+b2*a22+b3*a32;out[11]=b0*a03+b1*a13+b2*a23+b3*a33;b0=b[12];b1=b[13];b2=b[14];b3=b[15];out[12]=b0*a00+b1*a10+b2*a20+b3*a30;out[13]=b0*a01+b1*a11+b2*a21+b3*a31;out[14]=b0*a02+b1*a12+b2*a22+b3*a32;out[15]=b0*a03+b1*a13+b2*a23+b3*a33;return out;};/**
 * Multiplies two mat4's using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */mat4$1.multiply=glMatrix$6.USE_SIMD?mat4$1.SIMD.multiply:mat4$1.scalar.multiply;/**
 * Alias for {@link mat4.multiply}
 * @function
 */mat4$1.mul=mat4$1.multiply;/**
 * Translate a mat4 by the given vector not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */mat4$1.scalar.translate=function(out,a,v){var x=v[0],y=v[1],z=v[2],a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23;if(a===out){out[12]=a[0]*x+a[4]*y+a[8]*z+a[12];out[13]=a[1]*x+a[5]*y+a[9]*z+a[13];out[14]=a[2]*x+a[6]*y+a[10]*z+a[14];out[15]=a[3]*x+a[7]*y+a[11]*z+a[15];}else{a00=a[0];a01=a[1];a02=a[2];a03=a[3];a10=a[4];a11=a[5];a12=a[6];a13=a[7];a20=a[8];a21=a[9];a22=a[10];a23=a[11];out[0]=a00;out[1]=a01;out[2]=a02;out[3]=a03;out[4]=a10;out[5]=a11;out[6]=a12;out[7]=a13;out[8]=a20;out[9]=a21;out[10]=a22;out[11]=a23;out[12]=a00*x+a10*y+a20*z+a[12];out[13]=a01*x+a11*y+a21*z+a[13];out[14]=a02*x+a12*y+a22*z+a[14];out[15]=a03*x+a13*y+a23*z+a[15];}return out;};/**
 * Translates a mat4 by the given vector using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */mat4$1.SIMD.translate=function(out,a,v){var a0=SIMD.Float32x4.load(a,0),a1=SIMD.Float32x4.load(a,4),a2=SIMD.Float32x4.load(a,8),a3=SIMD.Float32x4.load(a,12),vec=SIMD.Float32x4(v[0],v[1],v[2],0);if(a!==out){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];}a0=SIMD.Float32x4.mul(a0,SIMD.Float32x4.swizzle(vec,0,0,0,0));a1=SIMD.Float32x4.mul(a1,SIMD.Float32x4.swizzle(vec,1,1,1,1));a2=SIMD.Float32x4.mul(a2,SIMD.Float32x4.swizzle(vec,2,2,2,2));var t0=SIMD.Float32x4.add(a0,SIMD.Float32x4.add(a1,SIMD.Float32x4.add(a2,a3)));SIMD.Float32x4.store(out,12,t0);return out;};/**
 * Translates a mat4 by the given vector using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */mat4$1.translate=glMatrix$6.USE_SIMD?mat4$1.SIMD.translate:mat4$1.scalar.translate;/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/mat4$1.scalar.scale=function(out,a,v){var x=v[0],y=v[1],z=v[2];out[0]=a[0]*x;out[1]=a[1]*x;out[2]=a[2]*x;out[3]=a[3]*x;out[4]=a[4]*y;out[5]=a[5]*y;out[6]=a[6]*y;out[7]=a[7]*y;out[8]=a[8]*z;out[9]=a[9]*z;out[10]=a[10]*z;out[11]=a[11]*z;out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Scales the mat4 by the dimensions in the given vec3 using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/mat4$1.SIMD.scale=function(out,a,v){var a0,a1,a2;var vec=SIMD.Float32x4(v[0],v[1],v[2],0);a0=SIMD.Float32x4.load(a,0);SIMD.Float32x4.store(out,0,SIMD.Float32x4.mul(a0,SIMD.Float32x4.swizzle(vec,0,0,0,0)));a1=SIMD.Float32x4.load(a,4);SIMD.Float32x4.store(out,4,SIMD.Float32x4.mul(a1,SIMD.Float32x4.swizzle(vec,1,1,1,1)));a2=SIMD.Float32x4.load(a,8);SIMD.Float32x4.store(out,8,SIMD.Float32x4.mul(a2,SIMD.Float32x4.swizzle(vec,2,2,2,2)));out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];return out;};/**
 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 */mat4$1.scale=glMatrix$6.USE_SIMD?mat4$1.SIMD.scale:mat4$1.scalar.scale;/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */mat4$1.rotate=function(out,a,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x*x+y*y+z*z),s,c,t,a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23,b00,b01,b02,b10,b11,b12,b20,b21,b22;if(Math.abs(len)<glMatrix$6.EPSILON){return null;}len=1/len;x*=len;y*=len;z*=len;s=Math.sin(rad);c=Math.cos(rad);t=1-c;a00=a[0];a01=a[1];a02=a[2];a03=a[3];a10=a[4];a11=a[5];a12=a[6];a13=a[7];a20=a[8];a21=a[9];a22=a[10];a23=a[11];// Construct the elements of the rotation matrix
b00=x*x*t+c;b01=y*x*t+z*s;b02=z*x*t-y*s;b10=x*y*t-z*s;b11=y*y*t+c;b12=z*y*t+x*s;b20=x*z*t+y*s;b21=y*z*t-x*s;b22=z*z*t+c;// Perform rotation-specific matrix multiplication
out[0]=a00*b00+a10*b01+a20*b02;out[1]=a01*b00+a11*b01+a21*b02;out[2]=a02*b00+a12*b01+a22*b02;out[3]=a03*b00+a13*b01+a23*b02;out[4]=a00*b10+a10*b11+a20*b12;out[5]=a01*b10+a11*b11+a21*b12;out[6]=a02*b10+a12*b11+a22*b12;out[7]=a03*b10+a13*b11+a23*b12;out[8]=a00*b20+a10*b21+a20*b22;out[9]=a01*b20+a11*b21+a21*b22;out[10]=a02*b20+a12*b21+a22*b22;out[11]=a03*b20+a13*b21+a23*b22;if(a!==out){// If the source and destination differ, copy the unchanged last row
out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}return out;};/**
 * Rotates a matrix by the given angle around the X axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.scalar.rotateX=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a!==out){// If the source and destination differ, copy the unchanged rows
out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
out[4]=a10*c+a20*s;out[5]=a11*c+a21*s;out[6]=a12*c+a22*s;out[7]=a13*c+a23*s;out[8]=a20*c-a10*s;out[9]=a21*c-a11*s;out[10]=a22*c-a12*s;out[11]=a23*c-a13*s;return out;};/**
 * Rotates a matrix by the given angle around the X axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.SIMD.rotateX=function(out,a,rad){var s=SIMD.Float32x4.splat(Math.sin(rad)),c=SIMD.Float32x4.splat(Math.cos(rad));if(a!==out){// If the source and destination differ, copy the unchanged rows
out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
var a_1=SIMD.Float32x4.load(a,4);var a_2=SIMD.Float32x4.load(a,8);SIMD.Float32x4.store(out,4,SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1,c),SIMD.Float32x4.mul(a_2,s)));SIMD.Float32x4.store(out,8,SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2,c),SIMD.Float32x4.mul(a_1,s)));return out;};/**
 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.rotateX=glMatrix$6.USE_SIMD?mat4$1.SIMD.rotateX:mat4$1.scalar.rotateX;/**
 * Rotates a matrix by the given angle around the Y axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.scalar.rotateY=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a!==out){// If the source and destination differ, copy the unchanged rows
out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
out[0]=a00*c-a20*s;out[1]=a01*c-a21*s;out[2]=a02*c-a22*s;out[3]=a03*c-a23*s;out[8]=a00*s+a20*c;out[9]=a01*s+a21*c;out[10]=a02*s+a22*c;out[11]=a03*s+a23*c;return out;};/**
 * Rotates a matrix by the given angle around the Y axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.SIMD.rotateY=function(out,a,rad){var s=SIMD.Float32x4.splat(Math.sin(rad)),c=SIMD.Float32x4.splat(Math.cos(rad));if(a!==out){// If the source and destination differ, copy the unchanged rows
out[4]=a[4];out[5]=a[5];out[6]=a[6];out[7]=a[7];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
var a_0=SIMD.Float32x4.load(a,0);var a_2=SIMD.Float32x4.load(a,8);SIMD.Float32x4.store(out,0,SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0,c),SIMD.Float32x4.mul(a_2,s)));SIMD.Float32x4.store(out,8,SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0,s),SIMD.Float32x4.mul(a_2,c)));return out;};/**
 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.rotateY=glMatrix$6.USE_SIMD?mat4$1.SIMD.rotateY:mat4$1.scalar.rotateY;/**
 * Rotates a matrix by the given angle around the Z axis not using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.scalar.rotateZ=function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7];if(a!==out){// If the source and destination differ, copy the unchanged last row
out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
out[0]=a00*c+a10*s;out[1]=a01*c+a11*s;out[2]=a02*c+a12*s;out[3]=a03*c+a13*s;out[4]=a10*c-a00*s;out[5]=a11*c-a01*s;out[6]=a12*c-a02*s;out[7]=a13*c-a03*s;return out;};/**
 * Rotates a matrix by the given angle around the Z axis using SIMD
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.SIMD.rotateZ=function(out,a,rad){var s=SIMD.Float32x4.splat(Math.sin(rad)),c=SIMD.Float32x4.splat(Math.cos(rad));if(a!==out){// If the source and destination differ, copy the unchanged last row
out[8]=a[8];out[9]=a[9];out[10]=a[10];out[11]=a[11];out[12]=a[12];out[13]=a[13];out[14]=a[14];out[15]=a[15];}// Perform axis-specific matrix multiplication
var a_0=SIMD.Float32x4.load(a,0);var a_1=SIMD.Float32x4.load(a,4);SIMD.Float32x4.store(out,0,SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0,c),SIMD.Float32x4.mul(a_1,s)));SIMD.Float32x4.store(out,4,SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1,c),SIMD.Float32x4.mul(a_0,s)));return out;};/**
 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.rotateZ=glMatrix$6.USE_SIMD?mat4$1.SIMD.rotateZ:mat4$1.scalar.rotateZ;/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */mat4$1.fromTranslation=function(out,v){out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=1;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=1;out[11]=0;out[12]=v[0];out[13]=v[1];out[14]=v[2];out[15]=1;return out;};/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */mat4$1.fromScaling=function(out,v){out[0]=v[0];out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=v[1];out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=v[2];out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */mat4$1.fromRotation=function(out,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x*x+y*y+z*z),s,c,t;if(Math.abs(len)<glMatrix$6.EPSILON){return null;}len=1/len;x*=len;y*=len;z*=len;s=Math.sin(rad);c=Math.cos(rad);t=1-c;// Perform rotation-specific matrix multiplication
out[0]=x*x*t+c;out[1]=y*x*t+z*s;out[2]=z*x*t-y*s;out[3]=0;out[4]=x*y*t-z*s;out[5]=y*y*t+c;out[6]=z*y*t+x*s;out[7]=0;out[8]=x*z*t+y*s;out[9]=y*z*t-x*s;out[10]=z*z*t+c;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.fromXRotation=function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);// Perform axis-specific matrix multiplication
out[0]=1;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=c;out[6]=s;out[7]=0;out[8]=0;out[9]=-s;out[10]=c;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.fromYRotation=function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);// Perform axis-specific matrix multiplication
out[0]=c;out[1]=0;out[2]=-s;out[3]=0;out[4]=0;out[5]=1;out[6]=0;out[7]=0;out[8]=s;out[9]=0;out[10]=c;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4$1.fromZRotation=function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);// Perform axis-specific matrix multiplication
out[0]=c;out[1]=s;out[2]=0;out[3]=0;out[4]=-s;out[5]=c;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=1;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */mat4$1.fromRotationTranslation=function(out,q,v){// Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;out[0]=1-(yy+zz);out[1]=xy+wz;out[2]=xz-wy;out[3]=0;out[4]=xy-wz;out[5]=1-(xx+zz);out[6]=yz+wx;out[7]=0;out[8]=xz+wy;out[9]=yz-wx;out[10]=1-(xx+yy);out[11]=0;out[12]=v[0];out[13]=v[1];out[14]=v[2];out[15]=1;return out;};/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */mat4$1.getTranslation=function(out,mat){out[0]=mat[12];out[1]=mat[13];out[2]=mat[14];return out;};/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */mat4$1.getRotation=function(out,mat){// Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
var trace=mat[0]+mat[5]+mat[10];var S=0;if(trace>0){S=Math.sqrt(trace+1.0)*2;out[3]=0.25*S;out[0]=(mat[6]-mat[9])/S;out[1]=(mat[8]-mat[2])/S;out[2]=(mat[1]-mat[4])/S;}else if(mat[0]>mat[5]&mat[0]>mat[10]){S=Math.sqrt(1.0+mat[0]-mat[5]-mat[10])*2;out[3]=(mat[6]-mat[9])/S;out[0]=0.25*S;out[1]=(mat[1]+mat[4])/S;out[2]=(mat[8]+mat[2])/S;}else if(mat[5]>mat[10]){S=Math.sqrt(1.0+mat[5]-mat[0]-mat[10])*2;out[3]=(mat[8]-mat[2])/S;out[0]=(mat[1]+mat[4])/S;out[1]=0.25*S;out[2]=(mat[6]+mat[9])/S;}else{S=Math.sqrt(1.0+mat[10]-mat[0]-mat[5])*2;out[3]=(mat[1]-mat[4])/S;out[0]=(mat[8]+mat[2])/S;out[1]=(mat[6]+mat[9])/S;out[2]=0.25*S;}return out;};/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */mat4$1.fromRotationTranslationScale=function(out,q,v,s){// Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,sx=s[0],sy=s[1],sz=s[2];out[0]=(1-(yy+zz))*sx;out[1]=(xy+wz)*sx;out[2]=(xz-wy)*sx;out[3]=0;out[4]=(xy-wz)*sy;out[5]=(1-(xx+zz))*sy;out[6]=(yz+wx)*sy;out[7]=0;out[8]=(xz+wy)*sz;out[9]=(yz-wx)*sz;out[10]=(1-(xx+yy))*sz;out[11]=0;out[12]=v[0];out[13]=v[1];out[14]=v[2];out[15]=1;return out;};/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */mat4$1.fromRotationTranslationScaleOrigin=function(out,q,v,s,o){// Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,xy=x*y2,xz=x*z2,yy=y*y2,yz=y*z2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2,sx=s[0],sy=s[1],sz=s[2],ox=o[0],oy=o[1],oz=o[2];out[0]=(1-(yy+zz))*sx;out[1]=(xy+wz)*sx;out[2]=(xz-wy)*sx;out[3]=0;out[4]=(xy-wz)*sy;out[5]=(1-(xx+zz))*sy;out[6]=(yz+wx)*sy;out[7]=0;out[8]=(xz+wy)*sz;out[9]=(yz-wx)*sz;out[10]=(1-(xx+yy))*sz;out[11]=0;out[12]=v[0]+ox-(out[0]*ox+out[4]*oy+out[8]*oz);out[13]=v[1]+oy-(out[1]*ox+out[5]*oy+out[9]*oz);out[14]=v[2]+oz-(out[2]*ox+out[6]*oy+out[10]*oz);out[15]=1;return out;};/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */mat4$1.fromQuat=function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x+x,y2=y+y,z2=z+z,xx=x*x2,yx=y*x2,yy=y*y2,zx=z*x2,zy=z*y2,zz=z*z2,wx=w*x2,wy=w*y2,wz=w*z2;out[0]=1-yy-zz;out[1]=yx+wz;out[2]=zx-wy;out[3]=0;out[4]=yx-wz;out[5]=1-xx-zz;out[6]=zy+wx;out[7]=0;out[8]=zx+wy;out[9]=zy-wx;out[10]=1-xx-yy;out[11]=0;out[12]=0;out[13]=0;out[14]=0;out[15]=1;return out;};/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4$1.frustum=function(out,left,right,bottom,top,near,far){var rl=1/(right-left),tb=1/(top-bottom),nf=1/(near-far);out[0]=near*2*rl;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=near*2*tb;out[6]=0;out[7]=0;out[8]=(right+left)*rl;out[9]=(top+bottom)*tb;out[10]=(far+near)*nf;out[11]=-1;out[12]=0;out[13]=0;out[14]=far*near*2*nf;out[15]=0;return out;};/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4$1.perspective=function(out,fovy,aspect,near,far){var f=1.0/Math.tan(fovy/2),nf=1/(near-far);out[0]=f/aspect;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=f;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=(far+near)*nf;out[11]=-1;out[12]=0;out[13]=0;out[14]=2*far*near*nf;out[15]=0;return out;};/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4$1.perspectiveFromFieldOfView=function(out,fov,near,far){var upTan=Math.tan(fov.upDegrees*Math.PI/180.0),downTan=Math.tan(fov.downDegrees*Math.PI/180.0),leftTan=Math.tan(fov.leftDegrees*Math.PI/180.0),rightTan=Math.tan(fov.rightDegrees*Math.PI/180.0),xScale=2.0/(leftTan+rightTan),yScale=2.0/(upTan+downTan);out[0]=xScale;out[1]=0.0;out[2]=0.0;out[3]=0.0;out[4]=0.0;out[5]=yScale;out[6]=0.0;out[7]=0.0;out[8]=-((leftTan-rightTan)*xScale*0.5);out[9]=(upTan-downTan)*yScale*0.5;out[10]=far/(near-far);out[11]=-1.0;out[12]=0.0;out[13]=0.0;out[14]=far*near/(near-far);out[15]=0.0;return out;};/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4$1.ortho=function(out,left,right,bottom,top,near,far){var lr=1/(left-right),bt=1/(bottom-top),nf=1/(near-far);out[0]=-2*lr;out[1]=0;out[2]=0;out[3]=0;out[4]=0;out[5]=-2*bt;out[6]=0;out[7]=0;out[8]=0;out[9]=0;out[10]=2*nf;out[11]=0;out[12]=(left+right)*lr;out[13]=(top+bottom)*bt;out[14]=(far+near)*nf;out[15]=1;return out;};/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */mat4$1.lookAt=function(out,eye,center,up){var x0,x1,x2,y0,y1,y2,z0,z1,z2,len,eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],centerx=center[0],centery=center[1],centerz=center[2];if(Math.abs(eyex-centerx)<glMatrix$6.EPSILON&&Math.abs(eyey-centery)<glMatrix$6.EPSILON&&Math.abs(eyez-centerz)<glMatrix$6.EPSILON){return mat4$1.identity(out);}z0=eyex-centerx;z1=eyey-centery;z2=eyez-centerz;len=1/Math.sqrt(z0*z0+z1*z1+z2*z2);z0*=len;z1*=len;z2*=len;x0=upy*z2-upz*z1;x1=upz*z0-upx*z2;x2=upx*z1-upy*z0;len=Math.sqrt(x0*x0+x1*x1+x2*x2);if(!len){x0=0;x1=0;x2=0;}else{len=1/len;x0*=len;x1*=len;x2*=len;}y0=z1*x2-z2*x1;y1=z2*x0-z0*x2;y2=z0*x1-z1*x0;len=Math.sqrt(y0*y0+y1*y1+y2*y2);if(!len){y0=0;y1=0;y2=0;}else{len=1/len;y0*=len;y1*=len;y2*=len;}out[0]=x0;out[1]=y0;out[2]=z0;out[3]=0;out[4]=x1;out[5]=y1;out[6]=z1;out[7]=0;out[8]=x2;out[9]=y2;out[10]=z2;out[11]=0;out[12]=-(x0*eyex+x1*eyey+x2*eyez);out[13]=-(y0*eyex+y1*eyey+y2*eyez);out[14]=-(z0*eyex+z1*eyey+z2*eyez);out[15]=1;return out;};/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat4$1.str=function(a){return'mat4('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+', '+a[4]+', '+a[5]+', '+a[6]+', '+a[7]+', '+a[8]+', '+a[9]+', '+a[10]+', '+a[11]+', '+a[12]+', '+a[13]+', '+a[14]+', '+a[15]+')';};/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat4$1.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2)+Math.pow(a[9],2)+Math.pow(a[10],2)+Math.pow(a[11],2)+Math.pow(a[12],2)+Math.pow(a[13],2)+Math.pow(a[14],2)+Math.pow(a[15],2));};/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */mat4$1.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];out[2]=a[2]+b[2];out[3]=a[3]+b[3];out[4]=a[4]+b[4];out[5]=a[5]+b[5];out[6]=a[6]+b[6];out[7]=a[7]+b[7];out[8]=a[8]+b[8];out[9]=a[9]+b[9];out[10]=a[10]+b[10];out[11]=a[11]+b[11];out[12]=a[12]+b[12];out[13]=a[13]+b[13];out[14]=a[14]+b[14];out[15]=a[15]+b[15];return out;};/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */mat4$1.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];out[2]=a[2]-b[2];out[3]=a[3]-b[3];out[4]=a[4]-b[4];out[5]=a[5]-b[5];out[6]=a[6]-b[6];out[7]=a[7]-b[7];out[8]=a[8]-b[8];out[9]=a[9]-b[9];out[10]=a[10]-b[10];out[11]=a[11]-b[11];out[12]=a[12]-b[12];out[13]=a[13]-b[13];out[14]=a[14]-b[14];out[15]=a[15]-b[15];return out;};/**
 * Alias for {@link mat4.subtract}
 * @function
 */mat4$1.sub=mat4$1.subtract;/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */mat4$1.multiplyScalar=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;out[2]=a[2]*b;out[3]=a[3]*b;out[4]=a[4]*b;out[5]=a[5]*b;out[6]=a[6]*b;out[7]=a[7]*b;out[8]=a[8]*b;out[9]=a[9]*b;out[10]=a[10]*b;out[11]=a[11]*b;out[12]=a[12]*b;out[13]=a[13]*b;out[14]=a[14]*b;out[15]=a[15]*b;return out;};/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */mat4$1.multiplyScalarAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;out[2]=a[2]+b[2]*scale;out[3]=a[3]+b[3]*scale;out[4]=a[4]+b[4]*scale;out[5]=a[5]+b[5]*scale;out[6]=a[6]+b[6]*scale;out[7]=a[7]+b[7]*scale;out[8]=a[8]+b[8]*scale;out[9]=a[9]+b[9]*scale;out[10]=a[10]+b[10]*scale;out[11]=a[11]+b[11]*scale;out[12]=a[12]+b[12]*scale;out[13]=a[13]+b[13]*scale;out[14]=a[14]+b[14]*scale;out[15]=a[15]+b[15]*scale;return out;};/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */mat4$1.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15];};/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */mat4$1.equals=function(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],a6=a[6],a7=a[7],a8=a[8],a9=a[9],a10=a[10],a11=a[11],a12=a[12],a13=a[13],a14=a[14],a15=a[15];var b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5],b6=b[6],b7=b[7],b8=b[8],b9=b[9],b10=b[10],b11=b[11],b12=b[12],b13=b[13],b14=b[14],b15=b[15];return Math.abs(a0-b0)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a3),Math.abs(b3))&&Math.abs(a4-b4)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a4),Math.abs(b4))&&Math.abs(a5-b5)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a5),Math.abs(b5))&&Math.abs(a6-b6)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a6),Math.abs(b6))&&Math.abs(a7-b7)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a7),Math.abs(b7))&&Math.abs(a8-b8)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a8),Math.abs(b8))&&Math.abs(a9-b9)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a9),Math.abs(b9))&&Math.abs(a10-b10)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a10),Math.abs(b10))&&Math.abs(a11-b11)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a11),Math.abs(b11))&&Math.abs(a12-b12)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a12),Math.abs(b12))&&Math.abs(a13-b13)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a13),Math.abs(b13))&&Math.abs(a14-b14)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a14),Math.abs(b14))&&Math.abs(a15-b15)<=glMatrix$6.EPSILON*Math.max(1.0,Math.abs(a15),Math.abs(b15));};var mat4_1=mat4$1;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$8=common;/**
 * @class 3 Dimensional Vector
 * @name vec3
 */var vec3$2={};/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */vec3$2.create=function(){var out=new glMatrix$8.ARRAY_TYPE(3);out[0]=0;out[1]=0;out[2]=0;return out;};/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */vec3$2.clone=function(a){var out=new glMatrix$8.ARRAY_TYPE(3);out[0]=a[0];out[1]=a[1];out[2]=a[2];return out;};/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */vec3$2.fromValues=function(x,y,z){var out=new glMatrix$8.ARRAY_TYPE(3);out[0]=x;out[1]=y;out[2]=z;return out;};/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */vec3$2.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];return out;};/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */vec3$2.set=function(out,x,y,z){out[0]=x;out[1]=y;out[2]=z;return out;};/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];out[2]=a[2]+b[2];return out;};/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];out[2]=a[2]-b[2];return out;};/**
 * Alias for {@link vec3.subtract}
 * @function
 */vec3$2.sub=vec3$2.subtract;/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.multiply=function(out,a,b){out[0]=a[0]*b[0];out[1]=a[1]*b[1];out[2]=a[2]*b[2];return out;};/**
 * Alias for {@link vec3.multiply}
 * @function
 */vec3$2.mul=vec3$2.multiply;/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.divide=function(out,a,b){out[0]=a[0]/b[0];out[1]=a[1]/b[1];out[2]=a[2]/b[2];return out;};/**
 * Alias for {@link vec3.divide}
 * @function
 */vec3$2.div=vec3$2.divide;/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */vec3$2.ceil=function(out,a){out[0]=Math.ceil(a[0]);out[1]=Math.ceil(a[1]);out[2]=Math.ceil(a[2]);return out;};/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */vec3$2.floor=function(out,a){out[0]=Math.floor(a[0]);out[1]=Math.floor(a[1]);out[2]=Math.floor(a[2]);return out;};/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.min=function(out,a,b){out[0]=Math.min(a[0],b[0]);out[1]=Math.min(a[1],b[1]);out[2]=Math.min(a[2],b[2]);return out;};/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.max=function(out,a,b){out[0]=Math.max(a[0],b[0]);out[1]=Math.max(a[1],b[1]);out[2]=Math.max(a[2],b[2]);return out;};/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */vec3$2.round=function(out,a){out[0]=Math.round(a[0]);out[1]=Math.round(a[1]);out[2]=Math.round(a[2]);return out;};/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */vec3$2.scale=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;out[2]=a[2]*b;return out;};/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */vec3$2.scaleAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;out[2]=a[2]+b[2]*scale;return out;};/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */vec3$2.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return Math.sqrt(x*x+y*y+z*z);};/**
 * Alias for {@link vec3.distance}
 * @function
 */vec3$2.dist=vec3$2.distance;/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */vec3$2.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2];return x*x+y*y+z*z;};/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */vec3$2.sqrDist=vec3$2.squaredDistance;/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */vec3$2.length=function(a){var x=a[0],y=a[1],z=a[2];return Math.sqrt(x*x+y*y+z*z);};/**
 * Alias for {@link vec3.length}
 * @function
 */vec3$2.len=vec3$2.length;/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec3$2.squaredLength=function(a){var x=a[0],y=a[1],z=a[2];return x*x+y*y+z*z;};/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */vec3$2.sqrLen=vec3$2.squaredLength;/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */vec3$2.negate=function(out,a){out[0]=-a[0];out[1]=-a[1];out[2]=-a[2];return out;};/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */vec3$2.inverse=function(out,a){out[0]=1.0/a[0];out[1]=1.0/a[1];out[2]=1.0/a[2];return out;};/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */vec3$2.normalize=function(out,a){var x=a[0],y=a[1],z=a[2];var len=x*x+y*y+z*z;if(len>0){//TODO: evaluate use of glm_invsqrt here?
len=1/Math.sqrt(len);out[0]=a[0]*len;out[1]=a[1]*len;out[2]=a[2]*len;}return out;};/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */vec3$2.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];};/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3$2.cross=function(out,a,b){var ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2];out[0]=ay*bz-az*by;out[1]=az*bx-ax*bz;out[2]=ax*by-ay*bx;return out;};/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3$2.lerp=function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2];out[0]=ax+t*(b[0]-ax);out[1]=ay+t*(b[1]-ay);out[2]=az+t*(b[2]-az);return out;};/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3$2.hermite=function(out,a,b,c,d,t){var factorTimes2=t*t,factor1=factorTimes2*(2*t-3)+1,factor2=factorTimes2*(t-2)+t,factor3=factorTimes2*(t-1),factor4=factorTimes2*(3-2*t);out[0]=a[0]*factor1+b[0]*factor2+c[0]*factor3+d[0]*factor4;out[1]=a[1]*factor1+b[1]*factor2+c[1]*factor3+d[1]*factor4;out[2]=a[2]*factor1+b[2]*factor2+c[2]*factor3+d[2]*factor4;return out;};/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3$2.bezier=function(out,a,b,c,d,t){var inverseFactor=1-t,inverseFactorTimesTwo=inverseFactor*inverseFactor,factorTimes2=t*t,factor1=inverseFactorTimesTwo*inverseFactor,factor2=3*t*inverseFactorTimesTwo,factor3=3*factorTimes2*inverseFactor,factor4=factorTimes2*t;out[0]=a[0]*factor1+b[0]*factor2+c[0]*factor3+d[0]*factor4;out[1]=a[1]*factor1+b[1]*factor2+c[1]*factor3+d[1]*factor4;out[2]=a[2]*factor1+b[2]*factor2+c[2]*factor3+d[2]*factor4;return out;};/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */vec3$2.random=function(out,scale){scale=scale||1.0;var r=glMatrix$8.RANDOM()*2.0*Math.PI;var z=glMatrix$8.RANDOM()*2.0-1.0;var zScale=Math.sqrt(1.0-z*z)*scale;out[0]=Math.cos(r)*zScale;out[1]=Math.sin(r)*zScale;out[2]=z*scale;return out;};/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */vec3$2.transformMat4=function(out,a,m){var x=a[0],y=a[1],z=a[2],w=m[3]*x+m[7]*y+m[11]*z+m[15];w=w||1.0;out[0]=(m[0]*x+m[4]*y+m[8]*z+m[12])/w;out[1]=(m[1]*x+m[5]*y+m[9]*z+m[13])/w;out[2]=(m[2]*x+m[6]*y+m[10]*z+m[14])/w;return out;};/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */vec3$2.transformMat3=function(out,a,m){var x=a[0],y=a[1],z=a[2];out[0]=x*m[0]+y*m[3]+z*m[6];out[1]=x*m[1]+y*m[4]+z*m[7];out[2]=x*m[2]+y*m[5]+z*m[8];return out;};/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */vec3$2.transformQuat=function(out,a,q){// benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],// calculate quat * vec
ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;// calculate result * inverse quat
out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy;out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz;out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx;return out;};/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3$2.rotateX=function(out,a,b,c){var p=[],r=[];//Translate point to the origin
p[0]=a[0]-b[0];p[1]=a[1]-b[1];p[2]=a[2]-b[2];//perform rotation
r[0]=p[0];r[1]=p[1]*Math.cos(c)-p[2]*Math.sin(c);r[2]=p[1]*Math.sin(c)+p[2]*Math.cos(c);//translate to correct position
out[0]=r[0]+b[0];out[1]=r[1]+b[1];out[2]=r[2]+b[2];return out;};/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3$2.rotateY=function(out,a,b,c){var p=[],r=[];//Translate point to the origin
p[0]=a[0]-b[0];p[1]=a[1]-b[1];p[2]=a[2]-b[2];//perform rotation
r[0]=p[2]*Math.sin(c)+p[0]*Math.cos(c);r[1]=p[1];r[2]=p[2]*Math.cos(c)-p[0]*Math.sin(c);//translate to correct position
out[0]=r[0]+b[0];out[1]=r[1]+b[1];out[2]=r[2]+b[2];return out;};/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3$2.rotateZ=function(out,a,b,c){var p=[],r=[];//Translate point to the origin
p[0]=a[0]-b[0];p[1]=a[1]-b[1];p[2]=a[2]-b[2];//perform rotation
r[0]=p[0]*Math.cos(c)-p[1]*Math.sin(c);r[1]=p[0]*Math.sin(c)+p[1]*Math.cos(c);r[2]=p[2];//translate to correct position
out[0]=r[0]+b[0];out[1]=r[1]+b[1];out[2]=r[2]+b[2];return out;};/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */vec3$2.forEach=function(){var vec=vec3$2.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride=3;}if(!offset){offset=0;}if(count){l=Math.min(count*stride+offset,a.length);}else{l=a.length;}for(i=offset;i<l;i+=stride){vec[0]=a[i];vec[1]=a[i+1];vec[2]=a[i+2];fn(vec,vec,arg);a[i]=vec[0];a[i+1]=vec[1];a[i+2]=vec[2];}return a;};}();/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */vec3$2.angle=function(a,b){var tempA=vec3$2.fromValues(a[0],a[1],a[2]);var tempB=vec3$2.fromValues(b[0],b[1],b[2]);vec3$2.normalize(tempA,tempA);vec3$2.normalize(tempB,tempB);var cosine=vec3$2.dot(tempA,tempB);if(cosine>1.0){return 0;}else{return Math.acos(cosine);}};/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */vec3$2.str=function(a){return'vec3('+a[0]+', '+a[1]+', '+a[2]+')';};/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */vec3$2.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2];};/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */vec3$2.equals=function(a,b){var a0=a[0],a1=a[1],a2=a[2];var b0=b[0],b1=b[1],b2=b[2];return Math.abs(a0-b0)<=glMatrix$8.EPSILON*Math.max(1.0,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix$8.EPSILON*Math.max(1.0,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix$8.EPSILON*Math.max(1.0,Math.abs(a2),Math.abs(b2));};var vec3_1=vec3$2;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$9=common;/**
 * @class 4 Dimensional Vector
 * @name vec4
 */var vec4$2={};/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */vec4$2.create=function(){var out=new glMatrix$9.ARRAY_TYPE(4);out[0]=0;out[1]=0;out[2]=0;out[3]=0;return out;};/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */vec4$2.clone=function(a){var out=new glMatrix$9.ARRAY_TYPE(4);out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];return out;};/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */vec4$2.fromValues=function(x,y,z,w){var out=new glMatrix$9.ARRAY_TYPE(4);out[0]=x;out[1]=y;out[2]=z;out[3]=w;return out;};/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */vec4$2.copy=function(out,a){out[0]=a[0];out[1]=a[1];out[2]=a[2];out[3]=a[3];return out;};/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */vec4$2.set=function(out,x,y,z,w){out[0]=x;out[1]=y;out[2]=z;out[3]=w;return out;};/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4$2.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];out[2]=a[2]+b[2];out[3]=a[3]+b[3];return out;};/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4$2.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];out[2]=a[2]-b[2];out[3]=a[3]-b[3];return out;};/**
 * Alias for {@link vec4.subtract}
 * @function
 */vec4$2.sub=vec4$2.subtract;/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4$2.multiply=function(out,a,b){out[0]=a[0]*b[0];out[1]=a[1]*b[1];out[2]=a[2]*b[2];out[3]=a[3]*b[3];return out;};/**
 * Alias for {@link vec4.multiply}
 * @function
 */vec4$2.mul=vec4$2.multiply;/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4$2.divide=function(out,a,b){out[0]=a[0]/b[0];out[1]=a[1]/b[1];out[2]=a[2]/b[2];out[3]=a[3]/b[3];return out;};/**
 * Alias for {@link vec4.divide}
 * @function
 */vec4$2.div=vec4$2.divide;/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */vec4$2.ceil=function(out,a){out[0]=Math.ceil(a[0]);out[1]=Math.ceil(a[1]);out[2]=Math.ceil(a[2]);out[3]=Math.ceil(a[3]);return out;};/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */vec4$2.floor=function(out,a){out[0]=Math.floor(a[0]);out[1]=Math.floor(a[1]);out[2]=Math.floor(a[2]);out[3]=Math.floor(a[3]);return out;};/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4$2.min=function(out,a,b){out[0]=Math.min(a[0],b[0]);out[1]=Math.min(a[1],b[1]);out[2]=Math.min(a[2],b[2]);out[3]=Math.min(a[3],b[3]);return out;};/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4$2.max=function(out,a,b){out[0]=Math.max(a[0],b[0]);out[1]=Math.max(a[1],b[1]);out[2]=Math.max(a[2],b[2]);out[3]=Math.max(a[3],b[3]);return out;};/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */vec4$2.round=function(out,a){out[0]=Math.round(a[0]);out[1]=Math.round(a[1]);out[2]=Math.round(a[2]);out[3]=Math.round(a[3]);return out;};/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */vec4$2.scale=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;out[2]=a[2]*b;out[3]=a[3]*b;return out;};/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */vec4$2.scaleAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;out[2]=a[2]+b[2]*scale;out[3]=a[3]+b[3]*scale;return out;};/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */vec4$2.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return Math.sqrt(x*x+y*y+z*z+w*w);};/**
 * Alias for {@link vec4.distance}
 * @function
 */vec4$2.dist=vec4$2.distance;/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */vec4$2.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1],z=b[2]-a[2],w=b[3]-a[3];return x*x+y*y+z*z+w*w;};/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */vec4$2.sqrDist=vec4$2.squaredDistance;/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */vec4$2.length=function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return Math.sqrt(x*x+y*y+z*z+w*w);};/**
 * Alias for {@link vec4.length}
 * @function
 */vec4$2.len=vec4$2.length;/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec4$2.squaredLength=function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return x*x+y*y+z*z+w*w;};/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */vec4$2.sqrLen=vec4$2.squaredLength;/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */vec4$2.negate=function(out,a){out[0]=-a[0];out[1]=-a[1];out[2]=-a[2];out[3]=-a[3];return out;};/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */vec4$2.inverse=function(out,a){out[0]=1.0/a[0];out[1]=1.0/a[1];out[2]=1.0/a[2];out[3]=1.0/a[3];return out;};/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */vec4$2.normalize=function(out,a){var x=a[0],y=a[1],z=a[2],w=a[3];var len=x*x+y*y+z*z+w*w;if(len>0){len=1/Math.sqrt(len);out[0]=x*len;out[1]=y*len;out[2]=z*len;out[3]=w*len;}return out;};/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */vec4$2.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3];};/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */vec4$2.lerp=function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3];out[0]=ax+t*(b[0]-ax);out[1]=ay+t*(b[1]-ay);out[2]=az+t*(b[2]-az);out[3]=aw+t*(b[3]-aw);return out;};/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */vec4$2.random=function(out,scale){scale=scale||1.0;//TODO: This is a pretty awful way of doing this. Find something better.
out[0]=glMatrix$9.RANDOM();out[1]=glMatrix$9.RANDOM();out[2]=glMatrix$9.RANDOM();out[3]=glMatrix$9.RANDOM();vec4$2.normalize(out,out);vec4$2.scale(out,out,scale);return out;};/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */vec4$2.transformMat4=function(out,a,m){var x=a[0],y=a[1],z=a[2],w=a[3];out[0]=m[0]*x+m[4]*y+m[8]*z+m[12]*w;out[1]=m[1]*x+m[5]*y+m[9]*z+m[13]*w;out[2]=m[2]*x+m[6]*y+m[10]*z+m[14]*w;out[3]=m[3]*x+m[7]*y+m[11]*z+m[15]*w;return out;};/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */vec4$2.transformQuat=function(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3],// calculate quat * vec
ix=qw*x+qy*z-qz*y,iy=qw*y+qz*x-qx*z,iz=qw*z+qx*y-qy*x,iw=-qx*x-qy*y-qz*z;// calculate result * inverse quat
out[0]=ix*qw+iw*-qx+iy*-qz-iz*-qy;out[1]=iy*qw+iw*-qy+iz*-qx-ix*-qz;out[2]=iz*qw+iw*-qz+ix*-qy-iy*-qx;out[3]=a[3];return out;};/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */vec4$2.forEach=function(){var vec=vec4$2.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride=4;}if(!offset){offset=0;}if(count){l=Math.min(count*stride+offset,a.length);}else{l=a.length;}for(i=offset;i<l;i+=stride){vec[0]=a[i];vec[1]=a[i+1];vec[2]=a[i+2];vec[3]=a[i+3];fn(vec,vec,arg);a[i]=vec[0];a[i+1]=vec[1];a[i+2]=vec[2];a[i+3]=vec[3];}return a;};}();/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */vec4$2.str=function(a){return'vec4('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+')';};/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */vec4$2.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3];};/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */vec4$2.equals=function(a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3];var b0=b[0],b1=b[1],b2=b[2],b3=b[3];return Math.abs(a0-b0)<=glMatrix$9.EPSILON*Math.max(1.0,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix$9.EPSILON*Math.max(1.0,Math.abs(a1),Math.abs(b1))&&Math.abs(a2-b2)<=glMatrix$9.EPSILON*Math.max(1.0,Math.abs(a2),Math.abs(b2))&&Math.abs(a3-b3)<=glMatrix$9.EPSILON*Math.max(1.0,Math.abs(a3),Math.abs(b3));};var vec4_1=vec4$2;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$7=common;var mat3$2=mat3_1;var vec3$1=vec3_1;var vec4$1=vec4_1;/**
 * @class Quaternion
 * @name quat
 */var quat$1={};/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */quat$1.create=function(){var out=new glMatrix$7.ARRAY_TYPE(4);out[0]=0;out[1]=0;out[2]=0;out[3]=1;return out;};/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */quat$1.rotationTo=function(){var tmpvec3=vec3$1.create();var xUnitVec3=vec3$1.fromValues(1,0,0);var yUnitVec3=vec3$1.fromValues(0,1,0);return function(out,a,b){var dot=vec3$1.dot(a,b);if(dot<-0.999999){vec3$1.cross(tmpvec3,xUnitVec3,a);if(vec3$1.length(tmpvec3)<0.000001)vec3$1.cross(tmpvec3,yUnitVec3,a);vec3$1.normalize(tmpvec3,tmpvec3);quat$1.setAxisAngle(out,tmpvec3,Math.PI);return out;}else if(dot>0.999999){out[0]=0;out[1]=0;out[2]=0;out[3]=1;return out;}else{vec3$1.cross(tmpvec3,a,b);out[0]=tmpvec3[0];out[1]=tmpvec3[1];out[2]=tmpvec3[2];out[3]=1+dot;return quat$1.normalize(out,out);}};}();/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */quat$1.setAxes=function(){var matr=mat3$2.create();return function(out,view,right,up){matr[0]=right[0];matr[3]=right[1];matr[6]=right[2];matr[1]=up[0];matr[4]=up[1];matr[7]=up[2];matr[2]=-view[0];matr[5]=-view[1];matr[8]=-view[2];return quat$1.normalize(out,quat$1.fromMat3(out,matr));};}();/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */quat$1.clone=vec4$1.clone;/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */quat$1.fromValues=vec4$1.fromValues;/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */quat$1.copy=vec4$1.copy;/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */quat$1.set=vec4$1.set;/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */quat$1.identity=function(out){out[0]=0;out[1]=0;out[2]=0;out[3]=1;return out;};/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/quat$1.setAxisAngle=function(out,axis,rad){rad=rad*0.5;var s=Math.sin(rad);out[0]=s*axis[0];out[1]=s*axis[1];out[2]=s*axis[2];out[3]=Math.cos(rad);return out;};/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */quat$1.getAxisAngle=function(out_axis,q){var rad=Math.acos(q[3])*2.0;var s=Math.sin(rad/2.0);if(s!=0.0){out_axis[0]=q[0]/s;out_axis[1]=q[1]/s;out_axis[2]=q[2]/s;}else{// If s is zero, return any axis (no rotation - axis does not matter)
out_axis[0]=1;out_axis[1]=0;out_axis[2]=0;}return rad;};/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */quat$1.add=vec4$1.add;/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */quat$1.multiply=function(out,a,b){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];out[0]=ax*bw+aw*bx+ay*bz-az*by;out[1]=ay*bw+aw*by+az*bx-ax*bz;out[2]=az*bw+aw*bz+ax*by-ay*bx;out[3]=aw*bw-ax*bx-ay*by-az*bz;return out;};/**
 * Alias for {@link quat.multiply}
 * @function
 */quat$1.mul=quat$1.multiply;/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */quat$1.scale=vec4$1.scale;/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat$1.rotateX=function(out,a,rad){rad*=0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=Math.sin(rad),bw=Math.cos(rad);out[0]=ax*bw+aw*bx;out[1]=ay*bw+az*bx;out[2]=az*bw-ay*bx;out[3]=aw*bw-ax*bx;return out;};/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat$1.rotateY=function(out,a,rad){rad*=0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],by=Math.sin(rad),bw=Math.cos(rad);out[0]=ax*bw-az*by;out[1]=ay*bw+aw*by;out[2]=az*bw+ax*by;out[3]=aw*bw-ay*by;return out;};/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat$1.rotateZ=function(out,a,rad){rad*=0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bz=Math.sin(rad),bw=Math.cos(rad);out[0]=ax*bw+ay*bz;out[1]=ay*bw-ax*bz;out[2]=az*bw+aw*bz;out[3]=aw*bw-az*bz;return out;};/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */quat$1.calculateW=function(out,a){var x=a[0],y=a[1],z=a[2];out[0]=x;out[1]=y;out[2]=z;out[3]=Math.sqrt(Math.abs(1.0-x*x-y*y-z*z));return out;};/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */quat$1.dot=vec4$1.dot;/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */quat$1.lerp=vec4$1.lerp;/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */quat$1.slerp=function(out,a,b,t){// benchmarks:
//    http://jsperf.com/quaternion-slerp-implementations
var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];var omega,cosom,sinom,scale0,scale1;// calc cosine
cosom=ax*bx+ay*by+az*bz+aw*bw;// adjust signs (if necessary)
if(cosom<0.0){cosom=-cosom;bx=-bx;by=-by;bz=-bz;bw=-bw;}// calculate coefficients
if(1.0-cosom>0.000001){// standard case (slerp)
omega=Math.acos(cosom);sinom=Math.sin(omega);scale0=Math.sin((1.0-t)*omega)/sinom;scale1=Math.sin(t*omega)/sinom;}else{// "from" and "to" quaternions are very close 
//  ... so we can do a linear interpolation
scale0=1.0-t;scale1=t;}// calculate final values
out[0]=scale0*ax+scale1*bx;out[1]=scale0*ay+scale1*by;out[2]=scale0*az+scale1*bz;out[3]=scale0*aw+scale1*bw;return out;};/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */quat$1.sqlerp=function(){var temp1=quat$1.create();var temp2=quat$1.create();return function(out,a,b,c,d,t){quat$1.slerp(temp1,a,d,t);quat$1.slerp(temp2,b,c,t);quat$1.slerp(out,temp1,temp2,2*t*(1-t));return out;};}();/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */quat$1.invert=function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],dot=a0*a0+a1*a1+a2*a2+a3*a3,invDot=dot?1.0/dot:0;// TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
out[0]=-a0*invDot;out[1]=-a1*invDot;out[2]=-a2*invDot;out[3]=a3*invDot;return out;};/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */quat$1.conjugate=function(out,a){out[0]=-a[0];out[1]=-a[1];out[2]=-a[2];out[3]=a[3];return out;};/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */quat$1.length=vec4$1.length;/**
 * Alias for {@link quat.length}
 * @function
 */quat$1.len=quat$1.length;/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */quat$1.squaredLength=vec4$1.squaredLength;/**
 * Alias for {@link quat.squaredLength}
 * @function
 */quat$1.sqrLen=quat$1.squaredLength;/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */quat$1.normalize=vec4$1.normalize;/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */quat$1.fromMat3=function(out,m){// Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
// article "Quaternion Calculus and Fast Animation".
var fTrace=m[0]+m[4]+m[8];var fRoot;if(fTrace>0.0){// |w| > 1/2, may as well choose w > 1/2
fRoot=Math.sqrt(fTrace+1.0);// 2w
out[3]=0.5*fRoot;fRoot=0.5/fRoot;// 1/(4w)
out[0]=(m[5]-m[7])*fRoot;out[1]=(m[6]-m[2])*fRoot;out[2]=(m[1]-m[3])*fRoot;}else{// |w| <= 1/2
var i=0;if(m[4]>m[0])i=1;if(m[8]>m[i*3+i])i=2;var j=(i+1)%3;var k=(i+2)%3;fRoot=Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k]+1.0);out[i]=0.5*fRoot;fRoot=0.5/fRoot;out[3]=(m[j*3+k]-m[k*3+j])*fRoot;out[j]=(m[j*3+i]+m[i*3+j])*fRoot;out[k]=(m[k*3+i]+m[i*3+k])*fRoot;}return out;};/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */quat$1.str=function(a){return'quat('+a[0]+', '+a[1]+', '+a[2]+', '+a[3]+')';};/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */quat$1.exactEquals=vec4$1.exactEquals;/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */quat$1.equals=vec4$1.equals;var quat_1=quat$1;/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix$10=common;/**
 * @class 2 Dimensional Vector
 * @name vec2
 */var vec2$1={};/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */vec2$1.create=function(){var out=new glMatrix$10.ARRAY_TYPE(2);out[0]=0;out[1]=0;return out;};/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */vec2$1.clone=function(a){var out=new glMatrix$10.ARRAY_TYPE(2);out[0]=a[0];out[1]=a[1];return out;};/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */vec2$1.fromValues=function(x,y){var out=new glMatrix$10.ARRAY_TYPE(2);out[0]=x;out[1]=y;return out;};/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */vec2$1.copy=function(out,a){out[0]=a[0];out[1]=a[1];return out;};/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */vec2$1.set=function(out,x,y){out[0]=x;out[1]=y;return out;};/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2$1.add=function(out,a,b){out[0]=a[0]+b[0];out[1]=a[1]+b[1];return out;};/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2$1.subtract=function(out,a,b){out[0]=a[0]-b[0];out[1]=a[1]-b[1];return out;};/**
 * Alias for {@link vec2.subtract}
 * @function
 */vec2$1.sub=vec2$1.subtract;/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2$1.multiply=function(out,a,b){out[0]=a[0]*b[0];out[1]=a[1]*b[1];return out;};/**
 * Alias for {@link vec2.multiply}
 * @function
 */vec2$1.mul=vec2$1.multiply;/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2$1.divide=function(out,a,b){out[0]=a[0]/b[0];out[1]=a[1]/b[1];return out;};/**
 * Alias for {@link vec2.divide}
 * @function
 */vec2$1.div=vec2$1.divide;/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */vec2$1.ceil=function(out,a){out[0]=Math.ceil(a[0]);out[1]=Math.ceil(a[1]);return out;};/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */vec2$1.floor=function(out,a){out[0]=Math.floor(a[0]);out[1]=Math.floor(a[1]);return out;};/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2$1.min=function(out,a,b){out[0]=Math.min(a[0],b[0]);out[1]=Math.min(a[1],b[1]);return out;};/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2$1.max=function(out,a,b){out[0]=Math.max(a[0],b[0]);out[1]=Math.max(a[1],b[1]);return out;};/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */vec2$1.round=function(out,a){out[0]=Math.round(a[0]);out[1]=Math.round(a[1]);return out;};/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */vec2$1.scale=function(out,a,b){out[0]=a[0]*b;out[1]=a[1]*b;return out;};/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */vec2$1.scaleAndAdd=function(out,a,b,scale){out[0]=a[0]+b[0]*scale;out[1]=a[1]+b[1]*scale;return out;};/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */vec2$1.distance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1];return Math.sqrt(x*x+y*y);};/**
 * Alias for {@link vec2.distance}
 * @function
 */vec2$1.dist=vec2$1.distance;/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */vec2$1.squaredDistance=function(a,b){var x=b[0]-a[0],y=b[1]-a[1];return x*x+y*y;};/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */vec2$1.sqrDist=vec2$1.squaredDistance;/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */vec2$1.length=function(a){var x=a[0],y=a[1];return Math.sqrt(x*x+y*y);};/**
 * Alias for {@link vec2.length}
 * @function
 */vec2$1.len=vec2$1.length;/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec2$1.squaredLength=function(a){var x=a[0],y=a[1];return x*x+y*y;};/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */vec2$1.sqrLen=vec2$1.squaredLength;/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */vec2$1.negate=function(out,a){out[0]=-a[0];out[1]=-a[1];return out;};/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */vec2$1.inverse=function(out,a){out[0]=1.0/a[0];out[1]=1.0/a[1];return out;};/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */vec2$1.normalize=function(out,a){var x=a[0],y=a[1];var len=x*x+y*y;if(len>0){//TODO: evaluate use of glm_invsqrt here?
len=1/Math.sqrt(len);out[0]=a[0]*len;out[1]=a[1]*len;}return out;};/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */vec2$1.dot=function(a,b){return a[0]*b[0]+a[1]*b[1];};/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */vec2$1.cross=function(out,a,b){var z=a[0]*b[1]-a[1]*b[0];out[0]=out[1]=0;out[2]=z;return out;};/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */vec2$1.lerp=function(out,a,b,t){var ax=a[0],ay=a[1];out[0]=ax+t*(b[0]-ax);out[1]=ay+t*(b[1]-ay);return out;};/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */vec2$1.random=function(out,scale){scale=scale||1.0;var r=glMatrix$10.RANDOM()*2.0*Math.PI;out[0]=Math.cos(r)*scale;out[1]=Math.sin(r)*scale;return out;};/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */vec2$1.transformMat2=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[2]*y;out[1]=m[1]*x+m[3]*y;return out;};/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */vec2$1.transformMat2d=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[2]*y+m[4];out[1]=m[1]*x+m[3]*y+m[5];return out;};/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */vec2$1.transformMat3=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[3]*y+m[6];out[1]=m[1]*x+m[4]*y+m[7];return out;};/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */vec2$1.transformMat4=function(out,a,m){var x=a[0],y=a[1];out[0]=m[0]*x+m[4]*y+m[12];out[1]=m[1]*x+m[5]*y+m[13];return out;};/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */vec2$1.forEach=function(){var vec=vec2$1.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride=2;}if(!offset){offset=0;}if(count){l=Math.min(count*stride+offset,a.length);}else{l=a.length;}for(i=offset;i<l;i+=stride){vec[0]=a[i];vec[1]=a[i+1];fn(vec,vec,arg);a[i]=vec[0];a[i+1]=vec[1];}return a;};}();/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */vec2$1.str=function(a){return'vec2('+a[0]+', '+a[1]+')';};/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */vec2$1.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1];};/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */vec2$1.equals=function(a,b){var a0=a[0],a1=a[1];var b0=b[0],b1=b[1];return Math.abs(a0-b0)<=glMatrix$10.EPSILON*Math.max(1.0,Math.abs(a0),Math.abs(b0))&&Math.abs(a1-b1)<=glMatrix$10.EPSILON*Math.max(1.0,Math.abs(a1),Math.abs(b1));};var vec2_1=vec2$1;var mat4=mat4_1;var quat=quat_1;var vec2=vec2_1;var vec3=vec3_1;var vec4=vec4_1;var Vector3=function(_VectorBase){_inherits(Vector3,_VectorBase);function Vector3(x,y,z){_classCallCheck(this,Vector3);var _this19=_possibleConstructorReturn(this,(Vector3.__proto__||Object.getPrototypeOf(Vector3)).call(this));if(typeof y==="undefined"){_this19.rawElements=x;return _possibleConstructorReturn(_this19);}_this19.rawElements=[x,y,z];return _this19;}_createClass(Vector3,[{key:"toMathematicaString",value:function toMathematicaString(){return"{"+this.X+","+this.Y+","+this.Z+"}";}},{key:"normalizeThis",value:function normalizeThis(){return Vector3.normalize(this);}},{key:"dotWith",value:function dotWith(v){return Vector3.dot(this,v);}},{key:"addWith",value:function addWith(v){return Vector3.add(this,v);}},{key:"subtractWith",value:function subtractWith(v){return Vector3.subtract(this,v);}},{key:"multiplyWith",value:function multiplyWith(s){return Vector3.multiply(s,this);}},{key:"negateThis",value:function negateThis(){return Vector3.negate(this);}},{key:"equalWith",value:function equalWith(v){return Vector3.equals(this,v);}},{key:"nearlyEqualWith",value:function nearlyEqualWith(v){return Vector3.nearlyEquals(this,v);}},{key:"crossWith",value:function crossWith(v){return Vector3.cross(this,v);}},{key:"toString",value:function toString(){return"("+this.X+", "+this.Y+", "+this.Z+")";}},{key:"toDisplayString",value:function toDisplayString(){return"Vector3"+this.toString();}},{key:"normalized",get:function get(){return this.multiplyWith(1/this.magnitude);}},{key:"X",get:function get(){return this.rawElements[0];},set:function set(x){this.rawElements[0]=+x;}},{key:"Y",get:function get(){return this.rawElements[1];},set:function set(y){this.rawElements[1]=+y;}},{key:"Z",get:function get(){return this.rawElements[2];},set:function set(z){this.rawElements[2]=+z;}},{key:"ElementCount",get:function get(){return 3;}}],[{key:"copy",value:function copy(source){return new Vector3(source.X,source.Y,source.Z);}},{key:"dot",value:function dot(v1,v2){return vec3.dot(v1.rawElements,v2.rawElements);}},{key:"add",value:function add(v1,v2){var newVec=vec3.create();return new Vector3(vec3.add(newVec,v1.rawElements,v2.rawElements));}},{key:"subtract",value:function subtract(v1,v2){var newVec=vec3.create();return new Vector3(vec3.sub(newVec,v1.rawElements,v2.rawElements));}},{key:"multiply",value:function multiply(s,v){var newVec=vec3.create();return new Vector3(vec3.scale(newVec,v.rawElements,s));}},{key:"negate",value:function negate(v1){return Vector3.multiply(-1,v1);}},{key:"equals",value:function equals(v1,v2){return VectorBase.__elementEquals(v1,v2);}},{key:"nearlyEquals",value:function nearlyEquals(v1,v2){return VectorBase.__nearlyElementEquals(v1,v2);}},{key:"normalize",value:function normalize(v1){var newVec=vec3.create();return new Vector3(vec3.normalize(newVec,v1.rawElements));}},{key:"cross",value:function cross(v1,v2){var newVec=vec3.create();return new Vector3(vec3.cross(newVec,v1.rawElements,v2.rawElements));}},{key:"min",value:function min(v1,v2){return new Vector3(VectorBase.__fromGenerationFunction(v1,v2,function(i,_v1,_v2){return Math.min(_v1.rawElements[i],_v2.rawElements[i]);}));}},{key:"max",value:function max(v1,v2){return new Vector3(VectorBase.__fromGenerationFunction(v1,v2,function(i,_v1,_v2){return Math.max(_v1.rawElements[i],_v2.rawElements[i]);}));}},{key:"angle",value:function angle(v1,v2){return Math.acos(Vector3.dot(v1.normalized,v2.normalized));}},{key:"parse",value:function parse(str){var parseResult=VectorBase.__parse(str);var elements=parseResult.elements;if(!elements||elements.length!==1&&elements.length!==3){return undefined;}var result=void 0;if(elements.length===1){result=new Vector3(elements[0],elements[0],elements[0]);}else{result=new Vector3(elements[0],elements[1],elements[2]);}if(parseResult.needNormalize){result=result.normalizeThis();}if(parseResult.coefficient){result=result.multiplyWith(parseResult.coefficient);}if(parseResult.needNegate){result=result.negateThis();}return result;}},{key:"XUnit",get:function get(){return new Vector3(1,0,0);}},{key:"YUnit",get:function get(){return new Vector3(0,1,0);}},{key:"ZUnit",get:function get(){return new Vector3(0,0,1);}},{key:"Zero",get:function get(){return new Vector3(0,0,0);}},{key:"One",get:function get(){return new Vector3(1,1,1);}}]);return Vector3;}(VectorBase);var Vector4=function(_VectorBase2){_inherits(Vector4,_VectorBase2);function Vector4(x,y,z,w){_classCallCheck(this,Vector4);var _this20=_possibleConstructorReturn(this,(Vector4.__proto__||Object.getPrototypeOf(Vector4)).call(this));if(typeof y==="undefined"){_this20.rawElements=x;return _possibleConstructorReturn(_this20);}_this20.rawElements=[x,y,z,w];return _this20;}_createClass(Vector4,[{key:"normalizeThis",value:function normalizeThis(){return Vector4.normalize(this);}},{key:"dotWith",value:function dotWith(v){return Vector4.dot(this,v);}},{key:"addWith",value:function addWith(v){return Vector4.add(this,v);}},{key:"subtractWith",value:function subtractWith(v){return Vector4.subtract(this,v);}},{key:"multiplyWith",value:function multiplyWith(s){return Vector4.multiply(s,this);}},{key:"negateThis",value:function negateThis(){return Vector4.negate(this);}},{key:"equalWith",value:function equalWith(v){return Vector4.equals(this,v);}},{key:"nearlyEqualWith",value:function nearlyEqualWith(v){return Vector4.nearlyEquals(this,v);}},{key:"toString",value:function toString(){return"("+this.X+", "+this.Y+", "+this.Z+", "+this.W+")";}},{key:"toDisplayString",value:function toDisplayString(){return"Vector4"+this.toString();}},{key:"toMathematicaString",value:function toMathematicaString(){return"{"+this.X+","+this.Y+","+this.Z+","+this.W+"}";}},{key:"normalized",get:function get(){return this.multiplyWith(1/this.magnitude);}},{key:"X",get:function get(){return this.rawElements[0];},set:function set(x){this.rawElements[0]=+x;}},{key:"Y",get:function get(){return this.rawElements[1];},set:function set(y){this.rawElements[1]=+y;}},{key:"Z",get:function get(){return this.rawElements[2];},set:function set(z){this.rawElements[2]=+z;}},{key:"W",get:function get(){return this.rawElements[3];},set:function set(w){this.rawElements[3]=+w;}},{key:"ElementCount",get:function get(){return 4;}}],[{key:"copy",value:function copy(vec){return new Vector4(vec.X,vec.Y,vec.Z,vec.W);}},{key:"dot",value:function dot(v1,v2){return vec4.dot(v1.rawElements,v2.rawElements);}},{key:"add",value:function add(v1,v2){var newVec=vec4.create();return new Vector4(vec4.add(newVec,v1.rawElements,v2.rawElements));}},{key:"subtract",value:function subtract(v1,v2){var newVec=vec4.create();return new Vector4(vec4.sub(newVec,v1.rawElements,v2.rawElements));}},{key:"multiply",value:function multiply(s,v){var newVec=vec4.create();return new Vector4(vec4.scale(newVec,v.rawElements,s));}},{key:"negate",value:function negate(v1){return Vector4.multiply(-1,v1);}},{key:"equals",value:function equals(v1,v2){return VectorBase.__elementEquals(v1,v2);}},{key:"nearlyEquals",value:function nearlyEquals(v1,v2){return VectorBase.__nearlyElementEquals(v1,v2);}},{key:"normalize",value:function normalize(v1){var newVec=vec4.create();return new Vector4(vec4.normalize(newVec,v1.rawElements));}},{key:"min",value:function min(v1,v2){return new Vector4(VectorBase.__fromGenerationFunction(v1,v2,function(i,_v1,_v2){return Math.min(_v1.rawElements[i],_v2.rawElements[i]);}));}},{key:"max",value:function max(v1,v2){return new Vector4(VectorBase.__fromGenerationFunction(v1,v2,function(i,_v1,_v2){return Math.max(_v1.rawElements[i],_v2.rawElements[i]);}));}},{key:"angle",value:function angle(v1,v2){return Math.acos(Vector4.dot(v1.normalized,v2.normalized));}},{key:"parse",value:function parse(str){var parseResult=VectorBase.__parse(str);var elements=parseResult.elements;if(!elements||elements.length!==1&&elements.length!==4){return undefined;}var result=void 0;if(elements.length===1){result=new Vector4(elements[0],elements[0],elements[0],elements[0]);}else{result=new Vector4(elements[0],elements[1],elements[2],elements[3]);}if(parseResult.needNormalize){result=result.normalizeThis();}if(parseResult.coefficient){result=result.multiplyWith(parseResult.coefficient);}if(parseResult.needNegate){result=result.negateThis();}return result;}},{key:"XUnit",get:function get(){return new Vector4(1,0,0,0);}},{key:"YUnit",get:function get(){return new Vector4(0,1,0,0);}},{key:"ZUnit",get:function get(){return new Vector4(0,0,1,0);}},{key:"WUnit",get:function get(){return new Vector4(0,0,0,1);}},{key:"One",get:function get(){return new Vector4(1,1,1,1);}},{key:"Zero",get:function get(){return new Vector4(0,0,0,0);}}]);return Vector4;}(VectorBase);var Colors={"aliceblue":"#F0F8FF","antiquewhite":"#FAEBD7","aqua":"#00FFFF","aquamarine":"#7FFFD4","azure":"#F0FFFF","beige":"#F5F5DC","bisque":"#FFE4C4","black":"#000000","blanchedalmond":"#FFEBCD","blue":"#0000FF","blueviolet":"#8A2BE2","brown":"#A52A2A","burlywood":"#DEB887","cadetblue":"#5F9EA0","chartreuse":"#7FFF00","chocolate":"#D2691E","coral":"#FF7F50","cornflowerblue":"#6495ED","cornsilk":"#FFF8DC","crimson":"#DC143C","cyan":"#00FFFF","darkblue":"#00008B","darkcyan":"#008B8B","darkgoldenrod":"#B8860B","darkgray":"#A9A9A9","darkgreen":"#006400","darkgrey":"#A9A9A9","darkkhaki":"#BDB76B","darkmagenta":"#8B008B","darkolivegreen":"#556B2F","darkorange":"#FF8C00","darkorchid":"#9932CC","darkred":"#8B0000","darksalmon":"#E9967A","darkseagreen":"#8FBC8F","darkslateblue":"#483D8B","darkslategray":"#2F4F4F","darkslategrey":"#2F4F4F","darkturquoise":"#00CED1","darkviolet":"#9400D3","deeppink":"#FF1493","deepskyblue":"#00BFFF","dimgray":"#696969","dimgrey":"#696969","dodgerblue":"#1E90FF","firebrick":"#B22222","floralwhite":"#FFFAF0","forestgreen":"#228B22","fuchsia":"#FF00FF","gainsboro":"#DCDCDC","ghostwhite":"#F8F8FF","gold":"#FFD700","goldenrod":"#DAA520","gray":"#808080","green":"#008000","greenyellow":"#ADFF2F","grey":"#808080","honeydew":"#F0FFF0","hotpink":"#FF69B4","indianred":"#CD5C5C","indigo":"#4B0082","ivory":"#FFFFF0","khaki":"#F0E68C","lavender":"#E6E6FA","lavenderblush":"#FFF0F5","lawngreen":"#7CFC00","lemonchiffon":"#FFFACD","lightblue":"#ADD8E6","lightcoral":"#F08080","lightcyan":"#E0FFFF","lightgoldenrodyellow":"#FAFAD2","lightgray":"#D3D3D3","lightgreen":"#90EE90","lightgrey":"#D3D3D3","lightpink":"#FFB6C1","lightsalmon":"#FFA07A","lightseagreen":"#20B2AA","lightskyblue":"#87CEFA","lightslategray":"#778899","lightslategrey":"#778899","lightsteelblue":"#B0C4DE","lightyellow":"#FFFFE0","lime":"#00FF00","limegreen":"#32CD32","linen":"#FAF0E6","magenta":"#FF00FF","maroon":"#800000","mediumaquamarine":"#66CDAA","mediumblue":"#0000CD","mediumorchid":"#BA55D3","mediumpurple":"#9370DB","mediumseagreen":"#3CB371","mediumslateblue":"#7B68EE","mediumspringgreen":"#00FA9A","mediumturquoise":"#48D1CC","mediumvioletred":"#C71585","midnightblue":"#191970","mintcream":"#F5FFFA","mistyrose":"#FFE4E1","moccasin":"#FFE4B5","navajowhite":"#FFDEAD","navy":"#000080","oldlace":"#FDF5E6","olive":"#808000","olivedrab":"#6B8E23","orange":"#FFA500","orangered":"#FF4500","orchid":"#DA70D6","palegoldenrod":"#EEE8AA","palegreen":"#98FB98","paleturquoise":"#AFEEEE","palevioletred":"#DB7093","papayawhip":"#FFEFD5","peachpuff":"#FFDAB9","peru":"#CD853F","pink":"#FFC0CB","plum":"#DDA0DD","powderblue":"#B0E0E6","purple":"#800080","red":"#FF0000","rosybrown":"#BC8F8F","royalblue":"#4169E1","saddlebrown":"#8B4513","salmon":"#FA8072","sandybrown":"#F4A460","seagreen":"#2E8B57","seashell":"#FFF5EE","sienna":"#A0522D","silver":"#C0C0C0","skyblue":"#87CEEB","slateblue":"#6A5ACD","slategray":"#708090","slategrey":"#708090","snow":"#FFFAFA","springgreen":"#00FF7F","steelblue":"#4682B4","tan":"#D2B48C","teal":"#008080","thistle":"#D8BFD8","tomato":"#FF6347","turquoise":"#40E0D0","violet":"#EE82EE","wheat":"#F5DEB3","white":"#FFFFFF","whitesmoke":"#F5F5F5","yellow":"#FFFF00","yellowgreen":"#9ACD32"};var Color4=function(_VectorBase3){_inherits(Color4,_VectorBase3);function Color4(r,g,b,a){_classCallCheck(this,Color4);var _this21=_possibleConstructorReturn(this,(Color4.__proto__||Object.getPrototypeOf(Color4)).call(this));_this21.rawElements=[r,g,b,a];return _this21;}/// Color parser for css like syntax
_createClass(Color4,[{key:"toVector",value:function toVector(){return new Vector4(this.R,this.G,this.B,this.A);}},{key:"equalWith",value:function equalWith(col){return Color4.equals(col,this);}},{key:"toString",value:function toString(){return"rgba("+Math.round(this.R*255)+", "+Math.round(this.G*255)+", "+Math.round(this.B*255)+", "+Math.round(this.A*255)+")";}},{key:"toDisplayString",value:function toDisplayString(){var st="#";st+=Math.round(this.R*0xff).toString(16).toUpperCase();st+=Math.round(this.G*0xff).toString(16).toUpperCase();st+=Math.round(this.B*0xff).toString(16).toUpperCase();st+=Math.round(this.A*0xff).toString(16).toUpperCase();return"Color4("+this.R+", "+this.G+", "+this.B+", "+this.A+", "+st+")";}},{key:"R",get:function get(){return this.rawElements[0];}},{key:"G",get:function get(){return this.rawElements[1];}},{key:"B",get:function get(){return this.rawElements[2];}},{key:"A",get:function get(){return this.rawElements[3];}},{key:"ElementCount",get:function get(){return 4;}}],[{key:"internalParse",value:function internalParse(color,isFirst,tryParse){if(isFirst&&Colors[color]){return Color4.internalParse(Colors[color],false);}var m=void 0;if(isFirst){m=color.match(/^#([0-9a-f]{3})$/i);// #fff
if(m){var s=m[1];return new Color4(parseInt(s.charAt(0),16)/0xf,parseInt(s.charAt(1),16)/0xf,parseInt(s.charAt(2),16)/0xf,1);}}if(isFirst){m=color.match(/^#([0-9a-f]{4})$/i);// #ffff
if(m){var _s=m[1];return new Color4(parseInt(_s.charAt(0),16)/0xf,parseInt(_s.charAt(1),16)/0xf,parseInt(_s.charAt(2),16)/0xf,parseInt(_s.charAt(3),16)/0xf);}}// #ffffff
m=color.match(/^#([0-9a-f]{6})$/i);if(m){var _s2=m[1];return new Color4(parseInt(_s2.substr(0,2),16)/0xff,parseInt(_s2.substr(2,2),16)/0xff,parseInt(_s2.substr(4,2),16)/0xff,1);}// #ffffffff
if(isFirst){m=color.match(/^#([0-9a-f]{8})$/i);if(m){var _s3=m[1];return new Color4(parseInt(_s3.substr(0,2),16)/0xff,parseInt(_s3.substr(2,2),16)/0xff,parseInt(_s3.substr(4,2),16)/0xff,parseInt(_s3.substr(6,2),16)/0xff);}}var n=color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n&&isFirst){return new Color4(parseInt(n[1],10)/0xff,parseInt(n[2],10)/0xff,parseInt(n[3],10)/0xff,1);}n=color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*(\d+)\s*\)$/i);if(n&&isFirst){var d=parseInt(n[4],10);d=d<=1?d:d/0xff;return new Color4(parseInt(n[1],10)/0xff,parseInt(n[2],10)/0xff,parseInt(n[3],10)/0xff,parseInt(n[4],10));}if(tryParse){return undefined;}throw new Error("Unexpected color string"+color);}},{key:"parse",value:function parse(color,tryParse){return Color4.internalParse(color,true,tryParse);}},{key:"equals",value:function equals(col1,col2){return VectorBase.__elementEquals(col1,col2);}}]);return Color4;}(VectorBase);var Color3=function(_VectorBase4){_inherits(Color3,_VectorBase4);function Color3(r,g,b){_classCallCheck(this,Color3);var _this22=_possibleConstructorReturn(this,(Color3.__proto__||Object.getPrototypeOf(Color3)).call(this));_this22.rawElements=[r,g,b];return _this22;}_createClass(Color3,[{key:"toVector",value:function toVector(){return new Vector3(this.R,this.G,this.B);}},{key:"toVector4",value:function toVector4(a){if(typeof a==="undefined"){a=0;}return new Vector4(this.R,this.G,this.B,a);}},{key:"equalWith",value:function equalWith(col){return Color3.equals(col,this);}},{key:"toString",value:function toString(){return"rgb("+Math.round(this.R*255)+", "+Math.round(this.G*255)+", "+Math.round(this.B*255)+")";}},{key:"toDisplayString",value:function toDisplayString(){var st="#";st+=Math.round(this.R*0xff).toString(16).toUpperCase();st+=Math.round(this.G*0xff).toString(16).toUpperCase();st+=Math.round(this.B*0xff).toString(16).toUpperCase();return"Color3("+this.R+", "+this.G+", "+this.B+", "+st+")";}},{key:"R",get:function get(){return this.rawElements[0];}},{key:"G",get:function get(){return this.rawElements[1];}},{key:"B",get:function get(){return this.rawElements[2];}},{key:"ElementCount",get:function get(){return 3;}}],[{key:"fromColor4",value:function fromColor4(col){return new Color3(col.R,col.G,col.B);}},{key:"parse",value:function parse(color,tryParse){return Color3.internalParse(color,true,tryParse);}/// Color parser for css like syntax
},{key:"internalParse",value:function internalParse(color,isFirst,tryParse){if(isFirst&&Colors[color]){var col=Color4.internalParse(Colors[color],false,tryParse);return Color3.fromColor4(col);}var m=void 0;if(isFirst){m=color.match(/^#([0-9a-f]{3})$/i);// #fff
if(m){var s=m[1];return new Color3(parseInt(s.charAt(0),16)/0xf,parseInt(s.charAt(1),16)/0xf,parseInt(s.charAt(2),16)/0xf);}}// #ffffff
m=color.match(/^#([0-9a-f]{6})$/i);if(m){var _s4=m[1];return new Color3(parseInt(_s4.substr(0,2),16)/0xff,parseInt(_s4.substr(2,2),16)/0xff,parseInt(_s4.substr(4,2),16)/0xff);}var n=color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n&&isFirst){return new Color3(parseInt(n[1],10)/0xff,parseInt(n[2],10)/0xff,parseInt(n[3],10)/0xff);}if(tryParse){return undefined;}throw new Error("Unexpected color string"+color);}},{key:"equals",value:function equals(col1,col2){return VectorBase.__elementEquals(col1,col2);}}]);return Color3;}(VectorBase);var Vector2=function(_VectorBase5){_inherits(Vector2,_VectorBase5);function Vector2(x,y){_classCallCheck(this,Vector2);var _this23=_possibleConstructorReturn(this,(Vector2.__proto__||Object.getPrototypeOf(Vector2)).call(this));if(typeof y==="undefined"){_this23.rawElements=x;return _possibleConstructorReturn(_this23);}_this23.rawElements=[x,y];return _this23;}_createClass(Vector2,[{key:"dotWith",value:function dotWith(v){return Vector2.dot(this,v);}},{key:"addWith",value:function addWith(v){return Vector2.add(this,v);}},{key:"subtractWith",value:function subtractWith(v){return Vector2.subtract(v,this);}},{key:"multiplyWith",value:function multiplyWith(s){return Vector2.multiply(s,this);}},{key:"negateThis",value:function negateThis(){return Vector2.negate(this);}},{key:"equalWith",value:function equalWith(v){return Vector2.equals(this,v);}},{key:"nearlyEqualWith",value:function nearlyEqualWith(v){return Vector2.nearlyEquals(this,v);}},{key:"normalizeThis",value:function normalizeThis(){return Vector2.normalize(this);}},{key:"toString",value:function toString(){return"("+this.X+", "+this.Y+")";}},{key:"toDisplayString",value:function toDisplayString(){return"Vector2"+this.toString();}},{key:"toMathematicaString",value:function toMathematicaString(){return"{"+this.X+", "+this.Y+"}";}},{key:"normalized",get:function get(){return this.multiplyWith(1/this.magnitude);}},{key:"X",get:function get(){return this.rawElements[0];},set:function set(x){this.rawElements[0]=+x;}},{key:"Y",get:function get(){return this.rawElements[1];},set:function set(y){this.rawElements[1]=+y;}},{key:"ElementCount",get:function get(){return 2;}}],[{key:"copy",value:function copy(vec){return new Vector2(vec.X,vec.Y);}},{key:"parse",value:function parse(str){var parseResult=VectorBase.__parse(str);var elements=parseResult.elements;if(elements.length!==1&&elements.length!==2){return undefined;}var result=void 0;if(elements.length===1){result=new Vector2(elements[0],elements[0]);}else{result=new Vector2(elements[0],elements[1]);}if(parseResult.needNormalize){result=result.normalizeThis();}if(parseResult.coefficient){result=result.multiplyWith(parseResult.coefficient);}if(parseResult.needNegate){result=result.negateThis();}return result;}},{key:"dot",value:function dot(v1,v2){return vec2.dot(v1.rawElements,v2.rawElements);}},{key:"add",value:function add(v1,v2){var newVec=vec2.create();return new Vector2(vec2.add(newVec,v1.rawElements,v2.rawElements));}},{key:"subtract",value:function subtract(v1,v2){var newVec=vec2.create();return new Vector2(vec2.sub(newVec,v1.rawElements,v2.rawElements));}},{key:"multiply",value:function multiply(s,v){var newVec=vec2.create();return new Vector2(vec2.scale(newVec,v.rawElements,s));}},{key:"negate",value:function negate(v1){return Vector2.multiply(-1,v1);}},{key:"equals",value:function equals(v1,v2){return VectorBase.__elementEquals(v1,v2);}},{key:"nearlyEquals",value:function nearlyEquals(v1,v2){return VectorBase.__nearlyElementEquals(v1,v2);}},{key:"normalize",value:function normalize(v1){var newVec=vec2.create();return new Vector2(vec2.normalize(newVec,v1.rawElements));}},{key:"min",value:function min(v1,v2){return new Vector2(VectorBase.__fromGenerationFunction(v1,v2,function(i,v1_,v2_){return Math.min(v1_.rawElements[i],v2_.rawElements[i]);}));}},{key:"max",value:function max(v1,v2){return new Vector2(VectorBase.__fromGenerationFunction(v1,v2,function(i,v1_,v2_){return Math.max(v1_.rawElements[i],v2_.rawElements[i]);}));}},{key:"angle",value:function angle(v1,v2){return Math.acos(Vector2.dot(v1.normalized,v2.normalized));}},{key:"XUnit",get:function get(){return new Vector2(1,0);}},{key:"YUnit",get:function get(){return new Vector2(0,1);}},{key:"One",get:function get(){return new Vector2(1,1);}},{key:"Zero",get:function get(){return new Vector2(0,0);}}]);return Vector2;}(VectorBase);var MatrixBase=function(){function MatrixBase(){_classCallCheck(this,MatrixBase);}_createClass(MatrixBase,[{key:"getAt",value:function getAt(row,colmun){throw new Error("Not implemented");}},{key:"getBySingleIndex",value:function getBySingleIndex(index){throw new Error("Not implemented");}},{key:"RowCount",get:function get(){return 0;}},{key:"ColmunCount",get:function get(){return 0;}}],[{key:"__elementEquals",value:function __elementEquals(m1,m2){if(m1.RowCount!==m2.RowCount||m1.ColmunCount!==m2.ColmunCount){return false;}var count=m1.RowCount*m2.ColmunCount;for(var i=0;i<count;i++){if(m1.getBySingleIndex(i)!==m2.getBySingleIndex(i)){return false;}}return true;}}]);return MatrixBase;}();var Matrix=function(_MatrixBase){_inherits(Matrix,_MatrixBase);function Matrix(arr){_classCallCheck(this,Matrix);var _this24=_possibleConstructorReturn(this,(Matrix.__proto__||Object.getPrototypeOf(Matrix)).call(this));if(arr){_this24.rawElements=arr;}else{_this24.rawElements=mat4.create();}return _this24;}_createClass(Matrix,[{key:"getAt",value:function getAt(row,colmun){return this.rawElements[colmun*4+row];}},{key:"setAt",value:function setAt(row,colmun,val){this.rawElements[colmun*4+row]=val;}},{key:"getBySingleIndex",value:function getBySingleIndex(index){return this.rawElements[index];}},{key:"getColmun",value:function getColmun(col){return new Vector4(this.rawElements[col*4],this.rawElements[col*4+1],this.rawElements[col*4+2],this.rawElements[col*4+3]);}/**
    * Get row
    * @params row [0-3]
    */},{key:"getRow",value:function getRow(row){return new Vector4(this.rawElements[row],this.rawElements[row+4],this.rawElements[row+8],this.rawElements[row+12]);}},{key:"multiplyWith",value:function multiplyWith(m){return Matrix.multiply(this,m);}},{key:"equalWith",value:function equalWith(m){return Matrix.equals(m,this);}},{key:"toString",value:function toString(){return"|"+this.getBySingleIndex(0)+" "+this.getBySingleIndex(4)+" "+this.getBySingleIndex(8)+" "+this.getBySingleIndex(12)+"|\n\n                 |"+this.getBySingleIndex(1)+" "+this.getBySingleIndex(5)+" "+this.getBySingleIndex(9)+" "+this.getBySingleIndex(13)+"|\n\n                 |"+this.getBySingleIndex(2)+" "+this.getBySingleIndex(6)+" "+this.getBySingleIndex(10)+" "+this.getBySingleIndex(14)+"|\n\n                 |"+this.getBySingleIndex(3)+" "+this.getBySingleIndex(7)+" "+this.getBySingleIndex(11)+" "+this.getBySingleIndex(15)+"|";}},{key:"toMathematicaString",value:function toMathematicaString(){return"{{"+this.getBySingleIndex(0)+","+this.getBySingleIndex(4)+","+this.getBySingleIndex(8)+","+this.getBySingleIndex(12)+"},\n                  {"+this.getBySingleIndex(1)+","+this.getBySingleIndex(5)+","+this.getBySingleIndex(9)+","+this.getBySingleIndex(13)+"},\n                  {"+this.getBySingleIndex(2)+","+this.getBySingleIndex(6)+","+this.getBySingleIndex(10)+","+this.getBySingleIndex(14)+"},\n                  {"+this.getBySingleIndex(3)+","+this.getBySingleIndex(7)+","+this.getBySingleIndex(11)+","+this.getBySingleIndex(15)+"}}";}},{key:"ElementCount",get:function get(){return 16;}},{key:"RowCount",get:function get(){return 4;}},{key:"ColmunCount",get:function get(){return 4;}}],[{key:"zero",value:function zero(){return new Matrix([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);}},{key:"identity",value:function identity(){return new Matrix(mat4.create());}},{key:"fromElements",value:function fromElements(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){return new Matrix([m00,m10,m20,m30,m01,m11,m21,m31,m02,m12,m22,m32,m03,m13,m23,m33]);}},{key:"fromFunc",value:function fromFunc(f){return new Matrix([f(0,0),f(1,0),f(2,0),f(3,0),f(0,1),f(1,1),f(2,1),f(3,1),f(0,2),f(1,2),f(2,2),f(3,2),f(0,3),f(1,3),f(2,3),f(3,3)]);}},{key:"equals",value:function equals(m1,m2){return Matrix.__elementEquals(m1,m2);}},{key:"add",value:function add(m1,m2){var mat=mat4.create();for(var i=0;i<16;i++){mat[i]=m1.rawElements[i]+m2.rawElements[i];}return new Matrix(mat);}},{key:"subtract",value:function subtract(m1,m2){return Matrix.add(m1,Matrix.negate(m2));}},{key:"scalarMultiply",value:function scalarMultiply(s,m){var newMat=mat4.create();mat4.multiply(newMat,[s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,s],m.rawElements);return new Matrix(newMat);}},{key:"multiply",value:function multiply(m1,m2){var newMat=mat4.create();return new Matrix(mat4.mul(newMat,m1.rawElements,m2.rawElements));}},{key:"trs",value:function trs(t,rot,s){var newMat=mat4.create();var cacheMat=mat4.create();mat4.mul(newMat,mat4.translate(newMat,mat4.create(),t.rawElements),mat4.fromQuat(cacheMat,rot.rawElements));mat4.scale(newMat,newMat,s.rawElements);return new Matrix(newMat);}},{key:"negate",value:function negate(m){return this.scalarMultiply(-1,m);}},{key:"transpose",value:function transpose(m){var newMat=mat4.create();return new Matrix(mat4.transpose(newMat,m.rawElements));}},{key:"transformPoint",value:function transformPoint(m,t){var newVec=vec3.create();vec3.transformMat4(newVec,t.rawElements,m.rawElements);return new Vector3(newVec);}},{key:"transformNormal",value:function transformNormal(m,t){var newVec=vec4.create();var trans=vec4.create();trans[0]=t.X;trans[1]=t.Y;trans[2]=t.Z;trans[3]=0;vec4.transformMat4(newVec,trans,m.rawElements);return new Vector3(newVec[0],newVec[1],newVec[2]);}},{key:"transform",value:function transform(m,t){var newVec=vec4.create();var trans=vec4.create();trans[0]=t.X;trans[1]=t.Y;trans[2]=t.Z;trans[3]=t.W;vec4.transformMat4(newVec,trans,m.rawElements);return new Vector4(newVec[0],newVec[1],newVec[2],newVec[3]);}/**
     * Retrieve determinant of passed matrix
     */},{key:"determinant",value:function determinant(m){return mat4.determinant(m.rawElements);}/**
     * Compute inverted passed matrix.
     */},{key:"inverse",value:function inverse(m){var newMat=mat4.create();return new Matrix(mat4.invert(newMat,m.rawElements));}/**
     * Generate linear translation transform matrix.
     */},{key:"translate",value:function translate(v){var newMat=mat4.create();mat4.translate(newMat,newMat,v.rawElements);return new Matrix(newMat);}/**
     * Generate linear scaling transform matrix.
     */},{key:"scale",value:function scale(v){var newMat=mat4.create();mat4.scale(newMat,newMat,v.rawElements);return new Matrix(newMat);}},{key:"rotateX",value:function rotateX(angle){var newMat=mat4.create();mat4.rotateX(newMat,newMat,angle);return new Matrix(newMat);}},{key:"rotateY",value:function rotateY(angle){var newMat=mat4.create();mat4.rotateY(newMat,newMat,angle);return new Matrix(newMat);}},{key:"rotateZ",value:function rotateZ(angle){var newMat=mat4.create();mat4.rotateZ(newMat,newMat,angle);return new Matrix(newMat);}},{key:"rotationQuaternion",value:function rotationQuaternion(quat_){var quaternion=quat.create();var newMat=mat4.create();quat.normalize(quaternion,quat_.rawElements);mat4.fromQuat(newMat,quaternion);return new Matrix(newMat);}},{key:"frustum",value:function frustum(left,right,bottom,top,near,far){var newMat=mat4.create();mat4.frustum(newMat,left,right,bottom,top,near,far);return new Matrix(newMat);}},{key:"ortho",value:function ortho(left,right,bottom,top,near,far){var newMat=mat4.create();mat4.ortho(newMat,left,right,bottom,top,near,far);return new Matrix(newMat);}},{key:"perspective",value:function perspective(fovy,aspect,near,far){var newMat=mat4.create();mat4.perspective(newMat,fovy,aspect,near,far);return new Matrix(newMat);}},{key:"lookAt",value:function lookAt(eye,_lookAt,up){var newMat=mat4.create();mat4.lookAt(newMat,eye.rawElements,_lookAt.rawElements,up.rawElements);return new Matrix(newMat);}}]);return Matrix;}(MatrixBase);/**
* The class to maniplate quaternion.
* Basically,you don't need to operate raw element.
* You consider to use some of useful methods without editing raw element forcelly.
* Each element will be represented as (w;x,y,z)
* (1,i,j,k) is base axis for quaternion. (i,j,k is pure imaginary number)
* (w;x,y,z) means w*1+x*i+y*j+z*k
*
*/var Quaternion=function(){/**
    * Constructor by specifing each elements.
    */function Quaternion(rawElements){_classCallCheck(this,Quaternion);this.rawElements=rawElements;}_createClass(Quaternion,[{key:"equalWith",value:function equalWith(q){return Quaternion.equals(this,q);}/**
    * Get normalized quaternion
    */},{key:"normalize",value:function normalize(){var newQuat=quat.create();return new Quaternion(quat.normalize(newQuat,this.rawElements));}},{key:"inverse",value:function inverse(){var newQuat=quat.create();return new Quaternion(quat.invert(newQuat,this.rawElements));}},{key:"toAngleAxisString",value:function toAngleAxisString(){var angle=2*Math.acos(this.W);var imm=Math.sqrt(1-this.W*this.W);if(angle!==180&&angle!==0){return"axis("+angle+","+this.X/imm+","+this.Y/imm+","+this.Z/imm+")";}else if(angle===0){return"axis("+angle+",0,1,0)";}else{return"axis(180d,"+this.X+","+this.Y+","+this.Z+")";}}},{key:"toString",value:function toString(){return this.toAngleAxisString();}},{key:"factoringQuaternionZXY",value:function factoringQuaternionZXY(){var result={x:0,y:0,z:0};var mat=Matrix.rotationQuaternion(this);var sx=mat.rawElements[6];if(Math.abs(sx)<1-1.0E-4){result.x=Math.asin(sx);result.z=Math.atan2(-mat.rawElements[4],mat.rawElements[5]);result.y=Math.atan2(-mat.rawElements[2],mat.rawElements[10]);}else{result.y=0;result.x=Math.PI/2*sx;result.z=Math.atan2(mat.rawElements[1],mat.rawElements[0]);}return result;}},{key:"factoringQuaternionXYZ",value:function factoringQuaternionXYZ(){var result={x:0,y:0,z:0};var mat=Matrix.rotationQuaternion(this);var sy=-mat.rawElements[2];if(Math.abs(sy)<1-1.0E-4){result.x=Math.atan2(mat.rawElements[6],mat.rawElements[10]);result.y=Math.asin(sy);result.z=Math.atan2(mat.rawElements[1],mat.rawElements[0]);}else{result.x=0;result.y=Math.PI/2*sy;result.z=Math.atan2(-mat.rawElements[4],mat.rawElements[5]);}return result;}},{key:"eularAngles",get:function get(){var eular=this.factoringQuaternionZXY();return new Vector3(eular.x,eular.y,eular.z);},set:function set(v){this.rawElements=Quaternion.euler(v.X,v.Y,v.Z).rawElements;}/**
    * Getter for X.
    */},{key:"X",get:function get(){return this.rawElements[0];}/**
    * Getter for Y.
    */},{key:"Y",get:function get(){return this.rawElements[1];}/**
    * Getter for Z.
    */},{key:"Z",get:function get(){return this.rawElements[2];}/**
    * Getter for W.
    */},{key:"W",get:function get(){return this.rawElements[3];}/**
    * Getter for imaginary part vector.
    * It returns the vector (x,y,z)
    */},{key:"ImaginaryPart",get:function get(){return new Vector3(this.X,this.Y,this.Z);}/**
    * Get the conjugate of this quaternion
    */},{key:"Conjugate",get:function get(){var newQuat=quat.create();return new Quaternion(quat.conjugate(newQuat,this.rawElements));}/**
    * Get the length
    */},{key:"Length",get:function get(){return quat.len(this.rawElements);}}],[{key:"equals",value:function equals(q1,q2){for(var i=0;i<4;i++){if(q1.rawElements[i]!==q2.rawElements[i]){return false;}}return true;}/**
    * Calculate add result of two quaternion
    */},{key:"add",value:function add(q1,q2){var newQuat=quat.create();return new Quaternion(quat.add(newQuat,q1.rawElements,q2.rawElements));}/**
    * Calculate multiply result of two quaternion
    */},{key:"multiply",value:function multiply(q1,q2){var newQuat=quat.create();return new Quaternion(quat.mul(newQuat,q1.rawElements,q2.rawElements));}/**
    * Calculate the rotation quaternion represented as pair of angle and axis.
    */},{key:"angleAxis",value:function angleAxis(angle,axis){var axisVec=vec3.create();axisVec[0]=axis.X;axisVec[1]=axis.Y;axisVec[2]=axis.Z;var newQuat=quat.create();return new Quaternion(quat.setAxisAngle(newQuat,axisVec,+angle));}},{key:"euler",value:function euler(x,y,z){return Quaternion.multiply(Quaternion.angleAxis(z,Vector3.ZUnit),Quaternion.multiply(Quaternion.angleAxis(x,Vector3.XUnit),Quaternion.angleAxis(y,Vector3.YUnit)));}},{key:"eulerXYZ",value:function eulerXYZ(x,y,z){return Quaternion.multiply(Quaternion.angleAxis(z,Vector3.ZUnit),Quaternion.multiply(Quaternion.angleAxis(y,Vector3.YUnit),Quaternion.angleAxis(x,Vector3.XUnit)));}},{key:"slerp",value:function slerp(q1,q2,t){var newQuat=quat.create();return new Quaternion(quat.slerp(newQuat,q1.rawElements,q2.rawElements,+t));}/**
     * Returns the angle in degrees between two rotations q1 and q2.
     * @param q1 the quaternion represents begin angle.
     * @param q2 the quaternion represents end angle.
     * @returns {number} angle represented in radians.
     */},{key:"angle",value:function angle(q1,q2){var delta=Quaternion.multiply(q2,q1.inverse());delta=delta.normalize();return 2*Math.acos(delta.W);}},{key:"fromToRotation",value:function fromToRotation(from,to){var crossed=Vector3.cross(from.normalized,to.normalized);var angle=Vector3.dot(from.normalized,to.normalized);return Quaternion.angleAxis(angle,crossed);}},{key:"lookRotation",value:function lookRotation(forward,upVec){upVec=upVec||Vector3.YUnit;var normalizedForward=forward.normalized;var upForwardCross=Vector3.cross(upVec,normalizedForward).normalized;var thirdAxis=Vector3.cross(normalizedForward,upForwardCross);var m00=upForwardCross.X;var m01=upForwardCross.Y;var m02=upForwardCross.Z;var m10=thirdAxis.X;var m11=thirdAxis.Y;var m12=thirdAxis.Z;var m20=normalizedForward.X;var m21=normalizedForward.Y;var m22=normalizedForward.Z;var num8=m00+m11+m22;if(num8>0){var num=Math.sqrt(1+num8);return new Quaternion([(m12-m21)*0.5/num,(m20-m02)*0.5/num,(m01-m10)*0.5/num,num/2]);}if(m00>=m11&&m00>=m22){var num7=Math.sqrt(1+m00-m11-m22);return new Quaternion([(m01+m10)*0.5/num7,(m02+m20)*0.5/num7,(m12-m21)*0.5/num7,num7/2]);}if(m11>m22){var num6=Math.sqrt(1+m11-m00-m22);return new Quaternion([(m10+m01)*0,5/num6,0.5*num6,(m21+m12)*0.5/num6,(m20-m02)*0.5/num6]);}var num5=Math.sqrt(1+m22-m00-m11);return new Quaternion([(m20+m02)*0.5/num5,(m21+m12)*0.5/num5,0.5*num5,(m01-m10)*0.5/num5]);}},{key:"Identity",get:function get(){return new Quaternion(quat.create());}}]);return Quaternion;}();var Rectangle=function(){function Rectangle(left,top,width,height){_classCallCheck(this,Rectangle);this._left=left;this._top=top;this._width=width;this._height=height;}_createClass(Rectangle,[{key:"contains",value:function contains(xOrPoint,y){var x=void 0;if(xOrPoint instanceof Vector2){x=xOrPoint.X;y=xOrPoint.Y;}else{x=xOrPoint;}return this.Left<=x&&this.Right>=x&&this.Top<=y&&this.Bottom>=y;}},{key:"toLocal",value:function toLocal(xOrPoint,y){var x=void 0;if(xOrPoint instanceof Vector2){x=xOrPoint.X;y=xOrPoint.Y;}else{x=xOrPoint;}x-=this.Left;y-=this.Top;return xOrPoint instanceof Vector2?new Vector2(x,y):[x,y];}},{key:"toString",value:function toString(){return"Rectangle("+this.Left+","+this.Top+"-"+this.Right+","+this.Bottom+")";}},{key:"Left",get:function get(){return this._left;}},{key:"Right",get:function get(){return this.Left+this.Width;}},{key:"Top",get:function get(){return this._top;}},{key:"Bottom",get:function get(){return this._top+this._height;}},{key:"Width",get:function get(){return this._width;}},{key:"Height",get:function get(){return this._height;}}],[{key:"equals",value:function equals(r1,r2){return r1.Left===r2.Left&&r1.Right===r2.Right&&r1.Top===r2.Top&&r1.Bottom===r2.Bottom;}},{key:"edgeSizeEquals",value:function edgeSizeEquals(r1,r2){return r1.Width===r2.Width&&r1.Height===r2.Height;}}]);return Rectangle;}();///<reference path="../lib-ts/gl-matrix.d.ts"/>
var GeometryUtility=function(){function GeometryUtility(){_classCallCheck(this,GeometryUtility);}_createClass(GeometryUtility,null,[{key:"fromArray",/**
     * Generateor wrap for array
     * @param  {number[]}                 array [description]
     * @return {IterableIterator<number>}       [description]
     */value:regeneratorRuntime.mark(function fromArray(array){var i;return regeneratorRuntime.wrap(function fromArray$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:i=0;case 1:if(!(i<array.length)){_context5.next=7;break;}_context5.next=4;return array[i];case 4:i++;_context5.next=1;break;case 7:case"end":return _context5.stop();}}},fromArray,this);})/**
     * Convert triangles topology to lines. Basically uses for making wireframes.
     * @param  {IterableIterator<number>} indicies [description]
     * @return {IterableIterator<number>}          [description]
     */},{key:"linesFromTriangles",value:regeneratorRuntime.mark(function linesFromTriangles(indicies){var ic,i,_iteratorNormalCompletion4,_didIteratorError4,_iteratorError4,_iterator4,_step4,_index2,a,b,c;return regeneratorRuntime.wrap(function linesFromTriangles$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:ic=new Array(3);i=0;_iteratorNormalCompletion4=true;_didIteratorError4=false;_iteratorError4=undefined;_context6.prev=5;_iterator4=indicies[Symbol.iterator]();case 7:if(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done){_context6.next=17;break;}_index2=_step4.value;ic[i%3]=_index2;if(!(i%3===2)){_context6.next=13;break;}a=ic[0],b=ic[1],c=ic[2];return _context6.delegateYield([a,b,b,c,c,a],"t0",13);case 13:i++;case 14:_iteratorNormalCompletion4=true;_context6.next=7;break;case 17:_context6.next=23;break;case 19:_context6.prev=19;_context6.t1=_context6["catch"](5);_didIteratorError4=true;_iteratorError4=_context6.t1;case 23:_context6.prev=23;_context6.prev=24;if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}case 26:_context6.prev=26;if(!_didIteratorError4){_context6.next=29;break;}throw _iteratorError4;case 29:return _context6.finish(26);case 30:return _context6.finish(23);case 31:case"end":return _context6.stop();}}},linesFromTriangles,this,[[5,19,23,31],[24,,26,30]]);})/**
     * Generator for ellipse positions
     * @param  {Vector3}                  center [the center position of ellipse]
     * @param  {Vector3}                  up     [up vector for ellipse]
     * @param  {Vector3}                  right  [right vector for ellipse]
     * @param  {number}                   divide [how many triangles should consists in the ellipse]
     * @return {IterableIterator<number>}        [Generated iterator for position]
     */},{key:"ellipsePosition",value:regeneratorRuntime.mark(function ellipsePosition(center,up,right,divide){var step,i,theta,sin,cos;return regeneratorRuntime.wrap(function ellipsePosition$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return center.X;case 2:_context7.next=4;return center.Y;case 4:_context7.next=6;return center.Z;case 6:step=2*Math.PI/divide;i=0;case 8:if(!(i<divide)){_context7.next=21;break;}theta=step*i;sin=Math.sin(Math.PI*2-theta);cos=Math.cos(Math.PI*2-theta);_context7.next=14;return center.X+cos*up.X+sin*right.X;case 14:_context7.next=16;return center.Y+cos*up.Y+sin*right.Y;case 16:_context7.next=18;return center.Z+cos*up.Z+sin*right.Z;case 18:i++;_context7.next=8;break;case 21:case"end":return _context7.stop();}}},ellipsePosition,this);})},{key:"trianglePosition",value:regeneratorRuntime.mark(function trianglePosition(center,up,right){var p0,p1,p2;return regeneratorRuntime.wrap(function trianglePosition$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:p0=center.addWith(up);p1=center.subtractWith(up).addWith(right);p2=center.subtractWith(up).subtractWith(right);return _context8.delegateYield(p0.rawElements,"t0",4);case 4:return _context8.delegateYield(p1.rawElements,"t1",5);case 5:return _context8.delegateYield(p2.rawElements,"t2",6);case 6:case"end":return _context8.stop();}}},trianglePosition,this);})},{key:"cubePosition",value:regeneratorRuntime.mark(function cubePosition(center,up,right,forward){return regeneratorRuntime.wrap(function cubePosition$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:return _context9.delegateYield(GeometryUtility.quadPosition(center.subtractWith(forward),up,right),"t0",1);case 1:return _context9.delegateYield(GeometryUtility.quadPosition(center.addWith(forward),up,right.negateThis()),"t1",2);case 2:return _context9.delegateYield(GeometryUtility.quadPosition(center.addWith(up),forward,right),"t2",3);case 3:return _context9.delegateYield(GeometryUtility.quadPosition(center.addWith(right),forward,up.negateThis()),"t3",4);case 4:return _context9.delegateYield(GeometryUtility.quadPosition(center.subtractWith(up),forward,right.negateThis()),"t4",5);case 5:return _context9.delegateYield(GeometryUtility.quadPosition(center.subtractWith(right),forward,up),"t5",6);case 6:case"end":return _context9.stop();}}},cubePosition,this);})},{key:"quadPosition",value:regeneratorRuntime.mark(function quadPosition(center,up,right){var p0,p1,p2,p3;return regeneratorRuntime.wrap(function quadPosition$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:p0=center.subtractWith(right).addWith(up);p1=center.addWith(right).addWith(up);p2=center.addWith(right).subtractWith(up);p3=center.subtractWith(right).subtractWith(up);return _context10.delegateYield(p0.rawElements,"t0",5);case 5:return _context10.delegateYield(p1.rawElements,"t1",6);case 6:return _context10.delegateYield(p2.rawElements,"t2",7);case 7:return _context10.delegateYield(p3.rawElements,"t3",8);case 8:case"end":return _context10.stop();}}},quadPosition,this);})},{key:"planePosition",value:regeneratorRuntime.mark(function planePosition(center,up,right,divide){var i,j,vec;return regeneratorRuntime.wrap(function planePosition$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:i=0;case 1:if(!(i<divide)){_context11.next=13;break;}j=0;case 3:if(!(j<divide)){_context11.next=10;break;}vec=center.addWith(Vector3.multiply(divide/4-j*2/divide,up)).addWith(Vector3.multiply(divide/4-i*2/divide,right));return _context11.delegateYield(GeometryUtility.quadPosition(vec,Vector3.multiply(1/divide,up),Vector3.multiply(1/divide,right)),"t0",6);case 6:return _context11.delegateYield(GeometryUtility.quadPosition(vec,Vector3.multiply(1/divide,up),Vector3.multiply(1/divide,right.negateThis())),"t1",7);case 7:j++;_context11.next=3;break;case 10:i++;_context11.next=1;break;case 13:case"end":return _context11.stop();}}},planePosition,this);})},{key:"cylinderPosition",value:regeneratorRuntime.mark(function cylinderPosition(center,up,right,forward,divide){var step,d,d2,temp,i,theta,sin,cos,currentCenter,currentRight;return regeneratorRuntime.wrap(function cylinderPosition$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:return _context12.delegateYield(GeometryUtility.ellipsePosition(center.addWith(up),forward,right,divide),"t0",1);case 1:return _context12.delegateYield(GeometryUtility.ellipsePosition(center.subtractWith(up),forward,Vector3.negate(right),divide),"t1",2);case 2:step=2*Math.PI/divide;d=Math.cos(step/2);d2=Math.sin(step/2);temp=divide%2==0?step/2:0;i=0;case 7:if(!(i<divide)){_context12.next=17;break;}theta=step/2+step*i;sin=Math.sin((Math.PI-step)/2-theta);cos=Math.cos((Math.PI-step)/2-theta);currentCenter=new Vector3(d*cos,center.Y,d*sin);currentRight=new Vector3(Math.cos(-step/2-theta),center.Y,Math.sin(-step/2-theta));return _context12.delegateYield(GeometryUtility.quadPosition(currentCenter,up,Vector3.multiply(d2,currentRight)),"t2",14);case 14:i++;_context12.next=7;break;case 17:case"end":return _context12.stop();}}},cylinderPosition,this);})},{key:"conePosition",value:regeneratorRuntime.mark(function conePosition(center,up,right,forward,divide){var step,d,d2,i,theta,sin,cos,currentCenter,currentRight;return regeneratorRuntime.wrap(function conePosition$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:return _context13.delegateYield(GeometryUtility.ellipsePosition(center.subtractWith(up),forward,Vector3.negate(right),divide),"t0",1);case 1:step=2*Math.PI/divide;d=Math.cos(step/2)/2;d2=Math.sin(step/2);i=0;case 5:if(!(i<divide)){_context13.next=15;break;}theta=step*i;sin=Math.sin((Math.PI-step)/2-theta);cos=Math.cos((Math.PI-step)/2-theta);currentCenter=new Vector3(d*cos,center.Y,d*sin);currentRight=new Vector3(Math.cos(-step/2-theta),center.Y,Math.sin(-step/2-theta));return _context13.delegateYield(GeometryUtility.trianglePosition(currentCenter,up.subtractWith(currentCenter),Vector3.multiply(d2,currentRight)),"t1",12);case 12:i++;_context13.next=5;break;case 15:case"end":return _context13.stop();}}},conePosition,this);})},{key:"spherePosition",value:regeneratorRuntime.mark(function spherePosition(center,up,right,forward,rowDiv,circleDiv){var ia,ja,j,phi,sinPhi,upVector,i,theta;return regeneratorRuntime.wrap(function spherePosition$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:return _context14.delegateYield(center.addWith(up).rawElements,"t0",1);case 1:return _context14.delegateYield(center.subtractWith(up).rawElements,"t1",2);case 2:ia=2*Math.PI/circleDiv;ja=Math.PI/(rowDiv+1);j=1;case 5:if(!(j<=rowDiv)){_context14.next=19;break;}phi=ja*j;sinPhi=Math.sin(phi);upVector=up.multiplyWith(Math.cos(phi));i=0;case 10:if(!(i<=circleDiv)){_context14.next=16;break;}theta=ia*i;return _context14.delegateYield(right.multiplyWith(Math.cos(theta)).addWith(forward.multiplyWith(Math.sin(theta))).multiplyWith(sinPhi).addWith(upVector).rawElements,"t2",13);case 13:i++;_context14.next=10;break;case 16:j++;_context14.next=5;break;case 19:case"end":return _context14.stop();}}},spherePosition,this);})},{key:"quadNormal",value:regeneratorRuntime.mark(function quadNormal(normal){return regeneratorRuntime.wrap(function quadNormal$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:return _context15.delegateYield(normal.rawElements,"t0",1);case 1:return _context15.delegateYield(normal.rawElements,"t1",2);case 2:return _context15.delegateYield(normal.rawElements,"t2",3);case 3:return _context15.delegateYield(normal.rawElements,"t3",4);case 4:case"end":return _context15.stop();}}},quadNormal,this);})},{key:"ellipseNormal",value:regeneratorRuntime.mark(function ellipseNormal(normal,divide){var i;return regeneratorRuntime.wrap(function ellipseNormal$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:i=0;case 1:if(!(i<divide+1)){_context16.next=6;break;}return _context16.delegateYield(normal.rawElements,"t0",3);case 3:i++;_context16.next=1;break;case 6:case"end":return _context16.stop();}}},ellipseNormal,this);})},{key:"triangleNormal",value:regeneratorRuntime.mark(function triangleNormal(normal){return regeneratorRuntime.wrap(function triangleNormal$(_context17){while(1){switch(_context17.prev=_context17.next){case 0:return _context17.delegateYield(normal.rawElements,"t0",1);case 1:return _context17.delegateYield(normal.rawElements,"t1",2);case 2:return _context17.delegateYield(normal.rawElements,"t2",3);case 3:case"end":return _context17.stop();}}},triangleNormal,this);})},{key:"cubeNormal",value:regeneratorRuntime.mark(function cubeNormal(center,up,right,forward){return regeneratorRuntime.wrap(function cubeNormal$(_context18){while(1){switch(_context18.prev=_context18.next){case 0:return _context18.delegateYield(GeometryUtility.quadNormal(forward.negateThis()),"t0",1);case 1:return _context18.delegateYield(GeometryUtility.quadNormal(forward),"t1",2);case 2:return _context18.delegateYield(GeometryUtility.quadNormal(up),"t2",3);case 3:return _context18.delegateYield(GeometryUtility.quadNormal(right),"t3",4);case 4:return _context18.delegateYield(GeometryUtility.quadNormal(up.negateThis()),"t4",5);case 5:return _context18.delegateYield(GeometryUtility.quadNormal(right.negateThis()),"t5",6);case 6:case"end":return _context18.stop();}}},cubeNormal,this);})},{key:"cylinderNormal",value:regeneratorRuntime.mark(function cylinderNormal(center,up,right,forward,divide){var step,lastRight,i,theta,sin,cos,currentRight;return regeneratorRuntime.wrap(function cylinderNormal$(_context19){while(1){switch(_context19.prev=_context19.next){case 0:return _context19.delegateYield(GeometryUtility.ellipseNormal(up,divide),"t0",1);case 1:return _context19.delegateYield(GeometryUtility.ellipseNormal(up.negateThis(),divide),"t1",2);case 2:step=2*Math.PI/divide;lastRight=new Vector3(Math.cos(-step/2),center.Y,Math.sin(-step/2));i=0;case 5:if(!(i<divide)){_context19.next=18;break;}theta=step*(i+1);sin=Math.sin(Math.PI/2-theta);cos=Math.cos(Math.PI/2-theta);currentRight=new Vector3(Math.cos(-step/2-theta),center.Y,Math.sin(-step/2-theta));return _context19.delegateYield(Vector3.cross(lastRight,up).rawElements,"t2",11);case 11:return _context19.delegateYield(Vector3.cross(currentRight,up).rawElements,"t3",12);case 12:return _context19.delegateYield(Vector3.cross(currentRight,up).rawElements,"t4",13);case 13:return _context19.delegateYield(Vector3.cross(lastRight,up).rawElements,"t5",14);case 14:lastRight=currentRight;case 15:i++;_context19.next=5;break;case 18:case"end":return _context19.stop();}}},cylinderNormal,this);})},{key:"coneNormal",value:regeneratorRuntime.mark(function coneNormal(center,up,right,forward,divide){var step,d,i,theta,sin,cos,currentCenter,currentRight;return regeneratorRuntime.wrap(function coneNormal$(_context20){while(1){switch(_context20.prev=_context20.next){case 0:return _context20.delegateYield(GeometryUtility.ellipseNormal(up.negateThis(),divide),"t0",1);case 1:step=2*Math.PI/divide;d=Math.cos(step/2)/2;i=0;case 4:if(!(i<divide)){_context20.next=14;break;}theta=step*i;sin=Math.sin((Math.PI-step)/2-theta);cos=Math.cos((Math.PI-step)/2-theta);currentCenter=new Vector3(d*cos,center.Y,d*sin);currentRight=new Vector3(Math.cos(-step/2-theta),center.Y,Math.sin(-step/2-theta));return _context20.delegateYield(GeometryUtility.triangleNormal(Vector3.cross(currentRight,up.subtractWith(currentCenter))),"t1",11);case 11:i++;_context20.next=4;break;case 14:case"end":return _context20.stop();}}},coneNormal,this);})},{key:"planeNormal",value:regeneratorRuntime.mark(function planeNormal(normal,divide){var i,j;return regeneratorRuntime.wrap(function planeNormal$(_context21){while(1){switch(_context21.prev=_context21.next){case 0:i=0;case 1:if(!(i<divide)){_context21.next=12;break;}j=0;case 3:if(!(j<divide)){_context21.next=9;break;}return _context21.delegateYield(GeometryUtility.quadNormal(normal),"t0",5);case 5:return _context21.delegateYield(GeometryUtility.quadNormal(normal.negateThis()),"t1",6);case 6:j++;_context21.next=3;break;case 9:i++;_context21.next=1;break;case 12:case"end":return _context21.stop();}}},planeNormal,this);})},{key:"sphereNormal",value:regeneratorRuntime.mark(function sphereNormal(up,right,forward,rowDiv,circleDiv){return regeneratorRuntime.wrap(function sphereNormal$(_context22){while(1){switch(_context22.prev=_context22.next){case 0:return _context22.delegateYield(GeometryUtility.spherePosition(Vector3.Zero,up,right,forward,rowDiv,circleDiv),"t0",1);case 1:case"end":return _context22.stop();}}},sphereNormal,this);})},{key:"sphereUV",value:regeneratorRuntime.mark(function sphereUV(rowDiv,circleDiv){var ia,ja,j,phi,sinPhi,i,theta;return regeneratorRuntime.wrap(function sphereUV$(_context23){while(1){switch(_context23.prev=_context23.next){case 0:return _context23.delegateYield([0,0,0,1],"t0",1);case 1:ia=2*Math.PI/circleDiv;ja=Math.PI/(rowDiv+1);j=1;case 4:if(!(j<=rowDiv)){_context23.next=17;break;}phi=ja*j;sinPhi=Math.sin(phi);i=0;case 8:if(!(i<=circleDiv)){_context23.next=14;break;}theta=ia*i;return _context23.delegateYield([theta/Math.PI/2,phi/Math.PI],"t1",11);case 11:i++;_context23.next=8;break;case 14:j++;_context23.next=4;break;case 17:case"end":return _context23.stop();}}},sphereUV,this);})},{key:"quadUV",value:regeneratorRuntime.mark(function quadUV(){return regeneratorRuntime.wrap(function quadUV$(_context24){while(1){switch(_context24.prev=_context24.next){case 0:return _context24.delegateYield([0,0],"t0",1);case 1:return _context24.delegateYield([1,0],"t1",2);case 2:return _context24.delegateYield([1,1],"t2",3);case 3:return _context24.delegateYield([0,1],"t3",4);case 4:case"end":return _context24.stop();}}},quadUV,this);})},{key:"cubeUV",value:regeneratorRuntime.mark(function cubeUV(){var i;return regeneratorRuntime.wrap(function cubeUV$(_context25){while(1){switch(_context25.prev=_context25.next){case 0:i=0;case 1:if(!(i<6)){_context25.next=6;break;}return _context25.delegateYield(GeometryUtility.quadUV(),"t0",3);case 3:i++;_context25.next=1;break;case 6:case"end":return _context25.stop();}}},cubeUV,this);})},{key:"triangleUV",value:regeneratorRuntime.mark(function triangleUV(){return regeneratorRuntime.wrap(function triangleUV$(_context26){while(1){switch(_context26.prev=_context26.next){case 0:return _context26.delegateYield([0,0],"t0",1);case 1:return _context26.delegateYield([1,0],"t1",2);case 2:return _context26.delegateYield([0,1],"t2",3);case 3:case"end":return _context26.stop();}}},triangleUV,this);})},{key:"ellipseUV",value:regeneratorRuntime.mark(function ellipseUV(divide){var step,i,theta;return regeneratorRuntime.wrap(function ellipseUV$(_context27){while(1){switch(_context27.prev=_context27.next){case 0:return _context27.delegateYield([0.5,0.5],"t0",1);case 1:step=2*Math.PI/divide;i=0;case 3:if(!(i<divide)){_context27.next=9;break;}theta=step*i;return _context27.delegateYield([0.5+Math.cos(theta+Math.PI)/2,0.5+Math.sin(theta+Math.PI)/2],"t1",6);case 6:i++;_context27.next=3;break;case 9:case"end":return _context27.stop();}}},ellipseUV,this);})},{key:"planeUV",value:regeneratorRuntime.mark(function planeUV(divide){var p,i,j;return regeneratorRuntime.wrap(function planeUV$(_context28){while(1){switch(_context28.prev=_context28.next){case 0:p=1/divide;i=0;case 2:if(!(i<divide)){_context28.next=13;break;}j=0;case 4:if(!(j<divide)){_context28.next=10;break;}return _context28.delegateYield(GeometryUtility.quadUV(),"t0",6);case 6:return _context28.delegateYield(GeometryUtility.quadUV(),"t1",7);case 7:j++;_context28.next=4;break;case 10:i++;_context28.next=2;break;case 13:case"end":return _context28.stop();}}},planeUV,this);})},{key:"cylinderUV",value:regeneratorRuntime.mark(function cylinderUV(divide){var p,i,j;return regeneratorRuntime.wrap(function cylinderUV$(_context29){while(1){switch(_context29.prev=_context29.next){case 0:return _context29.delegateYield(GeometryUtility.ellipseUV(divide),"t0",1);case 1:return _context29.delegateYield(GeometryUtility.ellipseUV(divide),"t1",2);case 2:p=1/divide;i=0;case 4:if(!(i<divide)){_context29.next=18;break;}return _context29.delegateYield(GeometryUtility.quadUV(),"t2",6);case 6:j=0;case 7:if(!(j<divide)){_context29.next=15;break;}return _context29.delegateYield([p*j,0],"t3",9);case 9:return _context29.delegateYield([p*(j+1),0],"t4",10);case 10:return _context29.delegateYield([p*(j+1),1],"t5",11);case 11:return _context29.delegateYield([p*j,1],"t6",12);case 12:j++;_context29.next=7;break;case 15:i++;_context29.next=4;break;case 18:case"end":return _context29.stop();}}},cylinderUV,this);})},{key:"coneUV",value:regeneratorRuntime.mark(function coneUV(divide){var step,i,theta;return regeneratorRuntime.wrap(function coneUV$(_context30){while(1){switch(_context30.prev=_context30.next){case 0:return _context30.delegateYield(GeometryUtility.ellipseUV(divide),"t0",1);case 1:step=Math.PI/2/divide;i=0;case 3:if(!(i<divide)){_context30.next=11;break;}theta=step*i;return _context30.delegateYield([0,0],"t1",6);case 6:return _context30.delegateYield([Math.cos(theta),Math.sin(theta)],"t2",7);case 7:return _context30.delegateYield([Math.cos(theta+step),Math.sin(theta+step)],"t3",8);case 8:i++;_context30.next=3;break;case 11:case"end":return _context30.stop();}}},coneUV,this);})},{key:"triangleIndex",value:regeneratorRuntime.mark(function triangleIndex(offset){var o;return regeneratorRuntime.wrap(function triangleIndex$(_context31){while(1){switch(_context31.prev=_context31.next){case 0:o=offset;return _context31.delegateYield([o,o+2,o+1],"t0",2);case 2:case"end":return _context31.stop();}}},triangleIndex,this);})},{key:"quadIndex",value:regeneratorRuntime.mark(function quadIndex(offset){var o;return regeneratorRuntime.wrap(function quadIndex$(_context32){while(1){switch(_context32.prev=_context32.next){case 0:o=offset;return _context32.delegateYield([o,o+2,o+1,o,o+3,o+2],"t0",2);case 2:case"end":return _context32.stop();}}},quadIndex,this);})},{key:"cubeIndex",value:regeneratorRuntime.mark(function cubeIndex(offset){var s,i;return regeneratorRuntime.wrap(function cubeIndex$(_context33){while(1){switch(_context33.prev=_context33.next){case 0:s=GeometryUtility.quadSize();i=0;case 2:if(!(i<6)){_context33.next=7;break;}return _context33.delegateYield(GeometryUtility.quadIndex(offset+s*i),"t0",4);case 4:i++;_context33.next=2;break;case 7:case"end":return _context33.stop();}}},cubeIndex,this);})},{key:"sphereIndex",value:regeneratorRuntime.mark(function sphereIndex(offset,rowDiv,circleDiv){var getIndex,top,bottom,i,j,_i4,_i5;return regeneratorRuntime.wrap(function sphereIndex$(_context34){while(1){switch(_context34.prev=_context34.next){case 0:getIndex=function getIndex(i,j){return offset+(circleDiv+1)*j+2+i;};top=offset;bottom=offset+1;// upper side
i=0;case 4:if(!(i<circleDiv)){_context34.next=14;break;}_context34.next=7;return top;case 7:_context34.next=9;return getIndex(i,0);case 9:_context34.next=11;return getIndex(i+1,0);case 11:i++;_context34.next=4;break;case 14:j=0;case 15:if(!(j<rowDiv-1)){_context34.next=36;break;}_i4=0;case 17:if(!(_i4<circleDiv)){_context34.next=33;break;}_context34.next=20;return getIndex(_i4,j);case 20:_context34.next=22;return getIndex(_i4,j+1);case 22:_context34.next=24;return getIndex(_i4+1,j);case 24:_context34.next=26;return getIndex(_i4,j+1);case 26:_context34.next=28;return getIndex(_i4+1,j+1);case 28:_context34.next=30;return getIndex(_i4+1,j);case 30:_i4++;_context34.next=17;break;case 33:j++;_context34.next=15;break;case 36:_i5=0;case 37:if(!(_i5<circleDiv)){_context34.next=47;break;}_context34.next=40;return bottom;case 40:_context34.next=42;return getIndex(_i5+1,rowDiv-1);case 42:_context34.next=44;return getIndex(_i5,rowDiv-1);case 44:_i5++;_context34.next=37;break;case 47:case"end":return _context34.stop();}}},sphereIndex,this);})},{key:"cylinderIndex",value:regeneratorRuntime.mark(function cylinderIndex(offset,divide){var s,t,i;return regeneratorRuntime.wrap(function cylinderIndex$(_context35){while(1){switch(_context35.prev=_context35.next){case 0:s=GeometryUtility.ellipseSize(divide);t=GeometryUtility.quadSize();return _context35.delegateYield(GeometryUtility.ellipseIndex(offset,divide),"t0",3);case 3:return _context35.delegateYield(GeometryUtility.ellipseIndex(offset+s,divide),"t1",4);case 4:i=0;case 5:if(!(i<divide)){_context35.next=10;break;}return _context35.delegateYield(GeometryUtility.quadIndex(offset+s*2+t*i),"t2",7);case 7:i++;_context35.next=5;break;case 10:case"end":return _context35.stop();}}},cylinderIndex,this);})},{key:"coneIndex",value:regeneratorRuntime.mark(function coneIndex(offset,divide){var s,t,i;return regeneratorRuntime.wrap(function coneIndex$(_context36){while(1){switch(_context36.prev=_context36.next){case 0:s=GeometryUtility.ellipseSize(divide);t=GeometryUtility.triangleSize();return _context36.delegateYield(GeometryUtility.ellipseIndex(offset,divide),"t0",3);case 3:i=0;case 4:if(!(i<divide)){_context36.next=9;break;}return _context36.delegateYield(GeometryUtility.triangleIndex(offset+s+i*t),"t1",6);case 6:i++;_context36.next=4;break;case 9:case"end":return _context36.stop();}}},coneIndex,this);})},{key:"planeIndex",value:regeneratorRuntime.mark(function planeIndex(offset,divide){var s,i;return regeneratorRuntime.wrap(function planeIndex$(_context37){while(1){switch(_context37.prev=_context37.next){case 0:s=GeometryUtility.quadSize();i=0;case 2:if(!(i<2*divide*divide)){_context37.next=7;break;}return _context37.delegateYield(GeometryUtility.quadIndex(offset+s*i),"t0",4);case 4:i++;_context37.next=2;break;case 7:case"end":return _context37.stop();}}},planeIndex,this);})},{key:"ellipseIndex",value:regeneratorRuntime.mark(function ellipseIndex(offset,divide){var i;return regeneratorRuntime.wrap(function ellipseIndex$(_context38){while(1){switch(_context38.prev=_context38.next){case 0:i=0;case 1:if(!(i<divide-1)){_context38.next=6;break;}return _context38.delegateYield([offset,offset+1+i,offset+2+i],"t0",3);case 3:i++;_context38.next=1;break;case 6:return _context38.delegateYield([offset,offset+divide,offset+1],"t1",7);case 7:case"end":return _context38.stop();}}},ellipseIndex,this);})},{key:"quadSize",value:function quadSize(){return 4;}},{key:"triangleSize",value:function triangleSize(){return 3;}},{key:"cubeSize",value:function cubeSize(){return 6*GeometryUtility.quadSize();}},{key:"sphereSize",value:function sphereSize(rowDiv,circleDiv){return 2+rowDiv*(circleDiv+1);}},{key:"cylinderSize",value:function cylinderSize(divide){return GeometryUtility.ellipseSize(divide)*2+divide*GeometryUtility.quadSize();}},{key:"coneSize",value:function coneSize(divide){return GeometryUtility.ellipseSize(divide)+divide*GeometryUtility.triangleSize();}},{key:"planeSize",value:function planeSize(divide){return 2*divide*divide*GeometryUtility.quadSize();}},{key:"ellipseSize",value:function ellipseSize(divide){return divide+1;}}]);return GeometryUtility;}();/**
 * Provides the feature to instanciate primitive geometry.
 */var GeometryFactory=function(){function GeometryFactory(gl){_classCallCheck(this,GeometryFactory);this.gl=gl;}/**
     * Add new type geometry
     * @param {string}                   typeName        [description]
     * @param {IAttributeDeclaration }}             argumentDeclarations [description]
     * @param {IGeometryFactoryDelegate} factoryDelegate [description]
     */_createClass(GeometryFactory,[{key:"instanciate",value:function instanciate(type,args){var factoryDelegate=GeometryFactory.factoryDelegates[type];if(!factoryDelegate){throw new Error("Can not instanciate unknown geometry type "+type);}return factoryDelegate(this.gl,args);}},{key:"instanciateAsDefault",value:function instanciateAsDefault(type){var decl=GeometryFactory.factoryArgumentDeclarations[type];var args={};for(var attr in decl){var attrDecl=decl[attr];args[attr]=attrDecl.defaultValue;}return this.instanciate(type,args);}}],[{key:"addType",value:function addType(typeName,argumentDeclarations,factoryDelegate){GeometryFactory.factoryDelegates[typeName]=factoryDelegate;GeometryFactory.factoryArgumentDeclarations[typeName]=argumentDeclarations;}}]);return GeometryFactory;}();/**
 * Delegates to be used as factory
 */GeometryFactory.factoryDelegates={};/**
 * Argument inputs to be used for construction of geometry.
 */GeometryFactory.factoryArgumentDeclarations={};var ResourceBase=function(_IDObject3){_inherits(ResourceBase,_IDObject3);function ResourceBase(gl){_classCallCheck(this,ResourceBase);var _this25=_possibleConstructorReturn(this,(ResourceBase.__proto__||Object.getPrototypeOf(ResourceBase)).call(this));_this25.gl=gl;_this25.destroyed=false;_this25.valid=false;return _this25;}_createClass(ResourceBase,[{key:"destroy",value:function destroy(){this.destroyed=true;}},{key:"valid",get:function get(){return this._valid;},set:function set(val){var _this26=this;if(this._valid===val){return;}this._valid=val;if(this._valid){this._validResolve(this);}else{this.validPromise=new Promise(function(resolve){_this26._validResolve=resolve;});}}}]);return ResourceBase;}(IDObject);var Buffer=function(_ResourceBase){_inherits(Buffer,_ResourceBase);function Buffer(gl,target,usage){_classCallCheck(this,Buffer);var _this27=_possibleConstructorReturn(this,(Buffer.__proto__||Object.getPrototypeOf(Buffer)).call(this,gl));_this27.target=target;_this27.usage=usage;_this27.buffer=gl.createBuffer();return _this27;}_createClass(Buffer,[{key:"update",value:function update(length,subBuffer){this.bind();if(subBuffer){if(!this.valid){this.gl.bufferData(this.target,length+subBuffer.byteLength,this.usage);}this.gl.bufferSubData(this.target,length,subBuffer);}else{if(typeof length==="number"){this.gl.bufferData(this.target,length,this.usage);}else{this.gl.bufferData(this.target,length,this.usage);}}this.valid=true;}},{key:"bind",value:function bind(){this.gl.bindBuffer(this.target,this.buffer);}},{key:"destroy",value:function destroy(){_get(Buffer.prototype.__proto__||Object.getPrototypeOf(Buffer.prototype),"destroy",this).call(this);this.gl.deleteBuffer(this.buffer);}}]);return Buffer;}(ResourceBase);/**
 * The geometry class for managing buffer resource
 */var Geometry=function(){function Geometry(verticies,attribInfo,indicies){_classCallCheck(this,Geometry);this.verticies=verticies;this.attribInfo=attribInfo;this.indicies=indicies;this._validateGLContext();// check all buffers requested by attribute variables are all contained in verticies
for(var attrKey in attribInfo){if(typeof verticies[attribInfo[attrKey].bufferName]==="undefined"){throw new Error("The buffer request by "+attribInfo[attrKey].bufferName+" is not contained in geometry.");}}}_createClass(Geometry,[{key:"draw",value:function draw(indexName,attribNames,program){var _this28=this;var count=arguments.length<=3||arguments[3]===undefined?Number.MAX_VALUE:arguments[3];var offset=arguments.length<=4||arguments[4]===undefined?0:arguments[4];var targetIndex=this.indicies[indexName];attribNames.forEach(function(name){var attribInfo=_this28.attribInfo[name];if(!attribInfo){throw new Error("There is no such vertex buffer");}var index=program.findAttributeLocation(name);if(index<0){return;}var buffer=_this28.verticies[attribInfo.bufferName];buffer.bind();_this28._gl.vertexAttribPointer(index,attribInfo.size,attribInfo.type,false,attribInfo.stride,attribInfo.offset);});targetIndex.index.bind();this._gl.drawElements(targetIndex.topology,Math.min(targetIndex.count,count),targetIndex.type,Math.min(offset*targetIndex.byteSize,(targetIndex.count-1)*targetIndex.byteSize));}},{key:"_validateGLContext",value:function _validateGLContext(){// Check for index buffers
for(var indexName in this.indicies){var _index3=this.indicies[indexName];if(!this._gl){this._gl=_index3.index.gl;}if(this._gl!==_index3.index.gl){throw new Error("All index buffers should be initialized with same context");}}// Check for vertex buffers
for(var vertexName in this.verticies){var vertex=this.verticies[vertexName];if(this._gl!==vertex.gl){throw new Error("All vertex buffers should be initialized with same context");}}}}]);return Geometry;}();/**
 * Helper class to instanciate Geometry easily.
 */var GeometryBuilder=function(){function GeometryBuilder(){_classCallCheck(this,GeometryBuilder);}_createClass(GeometryBuilder,null,[{key:"build",value:function build(gl,info){var buffers={};var attribs={};for(var bufferKey in info.verticies){var byteWidth=4;var buffer=info.verticies[bufferKey];var sizeSum=0;for(var attribKey in buffer.size){if(attribs[attribKey]){throw new Error("Attribute variable name was dupelicated");}var size=buffer.size[attribKey];attribs[attribKey]={size:size,offset:sizeSum*byteWidth,bufferName:bufferKey,type:buffer.type?buffer.type:WebGLRenderingContext.FLOAT,stride:0};sizeSum+=size;}for(var _attribKey in buffer.size){attribs[_attribKey].stride=sizeSum*byteWidth;}// generate source array of vertex buffer
var bufferSource=new Array(sizeSum*buffer.count);var bufferGenerator=buffer.getGenerators();var generators=[];var sizes=[];var beforeEach=bufferGenerator.beforeEach?bufferGenerator.beforeEach():undefined;for(var _attribKey2 in buffer.size){if(_attribKey2==="beforeEach"){continue;}var generator=bufferGenerator[_attribKey2];generators.push(generator());sizes.push(buffer.size[_attribKey2]);}var i=0;for(var vertCount=0;vertCount<buffer.count;vertCount++){if(beforeEach&&beforeEach.next().done){throw new Error("before each was ended before reaching count.");}for(var genIndex=0;genIndex<generators.length;genIndex++){var _generator=generators[genIndex];for(var sizeIndex=0;sizeIndex<sizes[genIndex];sizeIndex++){var genResult=_generator.next();if(genResult.done){throw new Error("Generator function finished before reaching specified count");}bufferSource[i]=genResult.value;i++;}}}// instanciate buffers
buffers[bufferKey]=new Buffer(gl,WebGLRenderingContext.ARRAY_BUFFER,buffer.usage?buffer.usage:WebGLRenderingContext.STATIC_DRAW);buffers[bufferKey].update(new Float32Array(bufferSource));}return new Geometry(buffers,attribs,this._generateIndicies(gl,info.indicies));}},{key:"_generateIndicies",value:function _generateIndicies(gl,indexGenerator){var indexMap={};for(var indexName in indexGenerator){var indicies=[];var generatorInfo=indexGenerator[indexName];var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=generatorInfo.generator()[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var variable=_step5.value;indicies.push(variable);}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}var bufferType=this._getIndexType(indicies.length);var buffer=new Buffer(gl,WebGLRenderingContext.ELEMENT_ARRAY_BUFFER,WebGLRenderingContext.STATIC_DRAW);buffer.update(new bufferType.ctor(indicies));indexMap[indexName]={count:indicies.length,index:buffer,type:bufferType.format,byteSize:bufferType.byteSize,topology:generatorInfo.topology?generatorInfo.topology:WebGLRenderingContext.TRIANGLES};}return indexMap;}/**
     * Determine which index type should be used
     * @param  {number} length [description]
     * @return {[type]}        [description]
     */},{key:"_getIndexType",value:function _getIndexType(length){var format=WebGLRenderingContext.UNSIGNED_INT;var arrayConstructor=Uint32Array;var byteSize=4;if(length<256){format=WebGLRenderingContext.UNSIGNED_BYTE;arrayConstructor=Uint8Array;byteSize=1;}else if(length<65535){format=WebGLRenderingContext.UNSIGNED_SHORT;arrayConstructor=Uint16Array;byteSize=2;}else if(length>=4294967296){throw new Error("Too many index of geometry!");}return{format:format,ctor:arrayConstructor,byteSize:byteSize};}}]);return GeometryBuilder;}();// TODO add normal and uvs
// TODO apply attributes
var DefaultPrimitives=function(){function DefaultPrimitives(){_classCallCheck(this,DefaultPrimitives);}_createClass(DefaultPrimitives,null,[{key:"register",value:function register(){DefaultPrimitives._registerTriangle();DefaultPrimitives._registerQuad();DefaultPrimitives._registerCube();DefaultPrimitives._registerSphere();DefaultPrimitives._registerCircle();DefaultPrimitives._registerCylinder();DefaultPrimitives._registerCone();DefaultPrimitives._registerPlane();}},{key:"_registerTriangle",value:function _registerTriangle(){GeometryFactory.addType("triangle",{},function(gl,attrs){return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context39){while(1){switch(_context39.prev=_context39.next){case 0:return _context39.delegateYield(GeometryUtility.triangleIndex(0),"t0",1);case 1:case"end":return _context39.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context40){while(1){switch(_context40.prev=_context40.next){case 0:return _context40.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.triangleIndex(0)),"t0",1);case 1:case"end":return _context40.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.triangleSize(),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context41){while(1){switch(_context41.prev=_context41.next){case 0:return _context41.delegateYield(GeometryUtility.trianglePosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit),"t0",1);case 1:case"end":return _context41.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context42){while(1){switch(_context42.prev=_context42.next){case 0:return _context42.delegateYield(GeometryUtility.triangleNormal(Vector3.ZUnit),"t0",1);case 1:case"end":return _context42.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context43){while(1){switch(_context43.prev=_context43.next){case 0:return _context43.delegateYield(GeometryUtility.triangleUV(),"t0",1);case 1:case"end":return _context43.stop();}}},uv,this);})};}}}});});}},{key:"_registerQuad",value:function _registerQuad(){GeometryFactory.addType("quad",{},function(gl,attrs){return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context44){while(1){switch(_context44.prev=_context44.next){case 0:return _context44.delegateYield(GeometryUtility.quadIndex(0),"t0",1);case 1:case"end":return _context44.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context45){while(1){switch(_context45.prev=_context45.next){case 0:return _context45.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.quadIndex(0)),"t0",1);case 1:case"end":return _context45.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.quadSize(),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context46){while(1){switch(_context46.prev=_context46.next){case 0:return _context46.delegateYield(GeometryUtility.quadPosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit),"t0",1);case 1:case"end":return _context46.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context47){while(1){switch(_context47.prev=_context47.next){case 0:return _context47.delegateYield(GeometryUtility.quadNormal(Vector3.ZUnit),"t0",1);case 1:case"end":return _context47.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context48){while(1){switch(_context48.prev=_context48.next){case 0:return _context48.delegateYield(GeometryUtility.quadUV(),"t0",1);case 1:case"end":return _context48.stop();}}},uv,this);})};}}}});});}},{key:"_registerCube",value:function _registerCube(){GeometryFactory.addType("cube",{},function(gl,attrs){return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context49){while(1){switch(_context49.prev=_context49.next){case 0:return _context49.delegateYield(GeometryUtility.cubeIndex(0),"t0",1);case 1:case"end":return _context49.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context50){while(1){switch(_context50.prev=_context50.next){case 0:return _context50.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.cubeIndex(0)),"t0",1);case 1:case"end":return _context50.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.cubeSize(),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context51){while(1){switch(_context51.prev=_context51.next){case 0:return _context51.delegateYield(GeometryUtility.cubePosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis()),"t0",1);case 1:case"end":return _context51.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context52){while(1){switch(_context52.prev=_context52.next){case 0:return _context52.delegateYield(GeometryUtility.cubeNormal(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis()),"t0",1);case 1:case"end":return _context52.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context53){while(1){switch(_context53.prev=_context53.next){case 0:return _context53.delegateYield(GeometryUtility.cubeUV(),"t0",1);case 1:case"end":return _context53.stop();}}},uv,this);})};}}}});});}},{key:"_registerSphere",value:function _registerSphere(){GeometryFactory.addType("sphere",{divVertical:{converter:"Number",defaultValue:10},divHorizontal:{converter:"Number",defaultValue:10}},function(gl,attrs){var dH=attrs["divHorizontal"];var dV=attrs["divVertical"];return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context54){while(1){switch(_context54.prev=_context54.next){case 0:return _context54.delegateYield(GeometryUtility.sphereIndex(0,dH,dV),"t0",1);case 1:case"end":return _context54.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context55){while(1){switch(_context55.prev=_context55.next){case 0:return _context55.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.sphereIndex(0,dH,dV)),"t0",1);case 1:case"end":return _context55.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.sphereSize(dH,dV),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context56){while(1){switch(_context56.prev=_context56.next){case 0:return _context56.delegateYield(GeometryUtility.spherePosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis(),dH,dV),"t0",1);case 1:case"end":return _context56.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context57){while(1){switch(_context57.prev=_context57.next){case 0:return _context57.delegateYield(GeometryUtility.sphereNormal(Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis(),dH,dV),"t0",1);case 1:case"end":return _context57.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context58){while(1){switch(_context58.prev=_context58.next){case 0:return _context58.delegateYield(GeometryUtility.sphereUV(dH,dV),"t0",1);case 1:case"end":return _context58.stop();}}},uv,this);})};}}}});});}},{key:"_registerCircle",value:function _registerCircle(){GeometryFactory.addType("circle",{divide:{converter:"Number",defaultValue:50}},function(gl,attrs){var div=attrs["divide"];return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context59){while(1){switch(_context59.prev=_context59.next){case 0:return _context59.delegateYield(GeometryUtility.ellipseIndex(0,div),"t0",1);case 1:case"end":return _context59.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context60){while(1){switch(_context60.prev=_context60.next){case 0:return _context60.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.ellipseIndex(0,div)),"t0",1);case 1:case"end":return _context60.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.ellipseSize(div),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context61){while(1){switch(_context61.prev=_context61.next){case 0:return _context61.delegateYield(GeometryUtility.ellipsePosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,div),"t0",1);case 1:case"end":return _context61.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context62){while(1){switch(_context62.prev=_context62.next){case 0:return _context62.delegateYield(GeometryUtility.ellipseNormal(Vector3.ZUnit,div),"t0",1);case 1:case"end":return _context62.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context63){while(1){switch(_context63.prev=_context63.next){case 0:return _context63.delegateYield(GeometryUtility.ellipseUV(div),"t0",1);case 1:case"end":return _context63.stop();}}},uv,this);})};}}}});});}},{key:"_registerCylinder",value:function _registerCylinder(){GeometryFactory.addType("cylinder",{divide:{converter:"Number",defaultValue:50}},function(gl,attrs){var div=attrs["divide"];return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context64){while(1){switch(_context64.prev=_context64.next){case 0:return _context64.delegateYield(GeometryUtility.cylinderIndex(0,div),"t0",1);case 1:case"end":return _context64.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context65){while(1){switch(_context65.prev=_context65.next){case 0:return _context65.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.cylinderIndex(0,div)),"t0",1);case 1:case"end":return _context65.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.cylinderSize(div),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context66){while(1){switch(_context66.prev=_context66.next){case 0:return _context66.delegateYield(GeometryUtility.cylinderPosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis(),div),"t0",1);case 1:case"end":return _context66.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context67){while(1){switch(_context67.prev=_context67.next){case 0:return _context67.delegateYield(GeometryUtility.cylinderNormal(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis(),div),"t0",1);case 1:case"end":return _context67.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context68){while(1){switch(_context68.prev=_context68.next){case 0:return _context68.delegateYield(GeometryUtility.cylinderUV(div),"t0",1);case 1:case"end":return _context68.stop();}}},uv,this);})};}}}});});}},{key:"_registerCone",value:function _registerCone(){GeometryFactory.addType("cone",{divide:{converter:"Number",defaultValue:50}},function(gl,attrs){var div=attrs["divide"];return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context69){while(1){switch(_context69.prev=_context69.next){case 0:return _context69.delegateYield(GeometryUtility.coneIndex(0,div),"t0",1);case 1:case"end":return _context69.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context70){while(1){switch(_context70.prev=_context70.next){case 0:return _context70.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.coneIndex(0,div)),"t0",1);case 1:case"end":return _context70.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.coneSize(div),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context71){while(1){switch(_context71.prev=_context71.next){case 0:return _context71.delegateYield(GeometryUtility.conePosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis(),div),"t0",1);case 1:case"end":return _context71.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context72){while(1){switch(_context72.prev=_context72.next){case 0:return _context72.delegateYield(GeometryUtility.coneNormal(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,Vector3.ZUnit.negateThis(),div),"t0",1);case 1:case"end":return _context72.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context73){while(1){switch(_context73.prev=_context73.next){case 0:return _context73.delegateYield(GeometryUtility.coneUV(div),"t0",1);case 1:case"end":return _context73.stop();}}},uv,this);})};}}}});});}},{key:"_registerPlane",value:function _registerPlane(){GeometryFactory.addType("plane",{divide:{converter:"Number",defaultValue:10}},function(gl,attrs){var div=attrs["divide"];return GeometryBuilder.build(gl,{indicies:{default:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context74){while(1){switch(_context74.prev=_context74.next){case 0:return _context74.delegateYield(GeometryUtility.planeIndex(0,div),"t0",1);case 1:case"end":return _context74.stop();}}},generator,this);}),topology:WebGLRenderingContext.TRIANGLES},wireframe:{generator:regeneratorRuntime.mark(function generator(){return regeneratorRuntime.wrap(function generator$(_context75){while(1){switch(_context75.prev=_context75.next){case 0:return _context75.delegateYield(GeometryUtility.linesFromTriangles(GeometryUtility.planeIndex(0,div)),"t0",1);case 1:case"end":return _context75.stop();}}},generator,this);}),topology:WebGLRenderingContext.LINES}},verticies:{main:{size:{position:3,normal:3,uv:2},count:GeometryUtility.planeSize(div),getGenerators:function getGenerators(){return{position:regeneratorRuntime.mark(function position(){return regeneratorRuntime.wrap(function position$(_context76){while(1){switch(_context76.prev=_context76.next){case 0:return _context76.delegateYield(GeometryUtility.planePosition(Vector3.Zero,Vector3.YUnit,Vector3.XUnit,div),"t0",1);case 1:case"end":return _context76.stop();}}},position,this);}),normal:regeneratorRuntime.mark(function normal(){return regeneratorRuntime.wrap(function normal$(_context77){while(1){switch(_context77.prev=_context77.next){case 0:return _context77.delegateYield(GeometryUtility.planeNormal(Vector3.ZUnit,div),"t0",1);case 1:case"end":return _context77.stop();}}},normal,this);}),uv:regeneratorRuntime.mark(function uv(){return regeneratorRuntime.wrap(function uv$(_context78){while(1){switch(_context78.prev=_context78.next){case 0:return _context78.delegateYield(GeometryUtility.planeUV(div),"t0",1);case 1:case"end":return _context78.stop();}}},uv,this);})};}}}});});}}]);return DefaultPrimitives;}();/**
 * Provides managing all promise on initializing resources.
 */var AssetLoader=function(_EEObject2){_inherits(AssetLoader,_EEObject2);function AssetLoader(){_classCallCheck(this,AssetLoader);/**
         * Promise count registered.
         * @type {number}
         */var _this29=_possibleConstructorReturn(this,(AssetLoader.__proto__||Object.getPrototypeOf(AssetLoader)).apply(this,arguments));_this29.registerCount=0;/**
         * Promise count finished successfully.
         * @type {number}
         */_this29.loadCount=0;/**
         * Promise count completed(success and errored)
         * @type {number}
         */_this29.completeCount=0;/**
         * Promise count errored
         * @type {number}
         */_this29.errorCount=0;/**
         * Main promise to provide tasks for waiting for all resource loading.
         * @type {Promise<void>}
         */_this29.promise=new Promise(function(resolve){_this29._resolve=resolve;});return _this29;}/**
     * Register an promise to be waited until finished.
     */_createClass(AssetLoader,[{key:"register",value:function register(promise){var _this30=this;this.registerCount++;return new Promise(function(resolve,reject){(function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee5(){return regeneratorRuntime.wrap(function _callee5$(_context79){while(1){switch(_context79.prev=_context79.next){case 0:_context79.prev=0;_context79.next=3;return promise;case 3:_context79.t0=_context79.sent;resolve(_context79.t0);this.loadCount++;_context79.next=12;break;case 8:_context79.prev=8;_context79.t1=_context79["catch"](0);reject(_context79.t1);this.errorCount++;case 12:this.completeCount++;this._checkLoadCompleted();case 14:case"end":return _context79.stop();}}},_callee5,this,[[0,8]]);}));}).bind(_this30)();});}/**
     * Verify all promises are completed.
     */},{key:"_checkLoadCompleted",value:function _checkLoadCompleted(){this.emit("progress",this);if(this.registerCount===this.completeCount){this._resolve();}}}]);return AssetLoader;}(EEObject);var DefaultLoaderChunk="<div style=\"width:100%;height:100%;position: relative;\">\n    <div style=\"width: 55px;height: 55px;border-radius: 100%;border: 5px solid #381794;border-right-color: #FC659D;animation: rotate 1s linear infinite;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\"></div>\n</div>\n<style type=\"text/css\">\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n";var AssetLoadingManagerComponent=function(_Component2){_inherits(AssetLoadingManagerComponent,_Component2);function AssetLoadingManagerComponent(){_classCallCheck(this,AssetLoadingManagerComponent);var _this31=_possibleConstructorReturn(this,(AssetLoadingManagerComponent.__proto__||Object.getPrototypeOf(AssetLoadingManagerComponent)).apply(this,arguments));_this31.loader=new AssetLoader();return _this31;}_createClass(AssetLoadingManagerComponent,[{key:"$treeInitialized",value:function $treeInitialized(){if(this.attributes.get("autoStart").Value){this._autoStart();}this._documentResolver();}},{key:"$awake",value:function $awake(){var _this32=this;this.companion.set(obtainGomlInterface.ns(this.name.ns)("loader"),this.loader);this.loader.register(new Promise(function(resolve){_this32._documentResolver=resolve;}));var canvas=this.companion.get("canvasElement");canvas.style.position="absolute";canvas.style.top="0px";var canvasContainer=document.createElement("div");canvasContainer.style.width=canvas.width+"px";canvasContainer.style.height=canvas.height+"px";canvasContainer.style.position="relative";var loaderContainer=document.createElement("div");loaderContainer.innerHTML=DefaultLoaderChunk;loaderContainer.style.width=loaderContainer.style.height="100%";canvasContainer.appendChild(loaderContainer);canvas.parentElement.replaceChild(canvasContainer,canvas);canvasContainer.appendChild(canvas);this._loaderElement=loaderContainer;}},{key:"_autoStart",value:function _autoStart(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee6(){return regeneratorRuntime.wrap(function _callee6$(_context80){while(1){switch(_context80.prev=_context80.next){case 0:_context80.next=2;return this.loader.promise;case 2:this._loaderElement.remove();this.tree("goml").attr("loopEnabled",true);case 4:case"end":return _context80.stop();}}},_callee6,this);}));}}]);return AssetLoadingManagerComponent;}(Component);AssetLoadingManagerComponent.attributes={loadingProgress:{defaultValue:0,converter:"Number"},autoStart:{defaultValue:true,converter:"Boolean"}};/**
 * Provides perspective camera as implementation of ICamera.
 */var PerspectiveCamera=function(){function PerspectiveCamera(){_classCallCheck(this,PerspectiveCamera);this._viewMatrix=new Matrix();this._projectionMatrix=new Matrix();this._invProjectionMatrix=new Matrix();this._projectionViewMatrix=new Matrix();this._eyeCache=Vector3.Zero;this._lookAtCache=Vector3.Zero;this._upCache=Vector3.Zero;}_createClass(PerspectiveCamera,[{key:"getViewMatrix",value:function getViewMatrix(){return this._viewMatrix;}},{key:"getProjectionMatrix",value:function getProjectionMatrix(){return this._projectionMatrix;}},{key:"getInvProjectionMatrix",value:function getInvProjectionMatrix(){return this._invProjectionMatrix;}},{key:"getProjectionViewMatrix",value:function getProjectionViewMatrix(){return this._projectionViewMatrix;}},{key:"getFar",value:function getFar(){return this._far;}},{key:"setFar",value:function setFar(far){this._far=far;this._recalculateProjection();}},{key:"getNear",value:function getNear(){return this._near;}},{key:"setNear",value:function setNear(near){this._near=near;this._recalculateProjection();}},{key:"getAspect",value:function getAspect(){return this._aspect;}},{key:"setAspect",value:function setAspect(aspect){this._aspect=aspect;this._recalculateProjection();}},{key:"getFovy",value:function getFovy(){return this._fovy;}},{key:"setFovy",value:function setFovy(fov){this._fovy=fov;this._recalculateProjection();}},{key:"updateTransform",value:function updateTransform(transform){vec3.transformMat4(this._eyeCache.rawElements,Vector3.Zero.rawElements,transform.globalTransform.rawElements);vec4.transformMat4(this._lookAtCache.rawElements,PerspectiveCamera._frontOrigin.rawElements,transform.globalTransform.rawElements);vec3.add(this._lookAtCache.rawElements,this._lookAtCache.rawElements,this._eyeCache.rawElements);vec4.transformMat4(this._upCache.rawElements,PerspectiveCamera._upOrigin.rawElements,transform.globalTransform.rawElements);mat4.lookAt(this._viewMatrix.rawElements,this._eyeCache.rawElements,this._lookAtCache.rawElements,this._upCache.rawElements);mat4.mul(this._projectionViewMatrix.rawElements,this._projectionMatrix.rawElements,this._viewMatrix.rawElements);}},{key:"_recalculateProjection",value:function _recalculateProjection(){mat4.perspective(this._projectionMatrix.rawElements,this._fovy,this._aspect,this._near,this._far);mat4.mul(this._projectionViewMatrix.rawElements,this._projectionMatrix.rawElements,this._viewMatrix.rawElements);mat4.invert(this._invProjectionMatrix.rawElements,this._projectionMatrix.rawElements);}}]);return PerspectiveCamera;}();PerspectiveCamera._frontOrigin=new Vector4(0,0,-1,0);PerspectiveCamera._upOrigin=new Vector4(0,1,0,0);var SceneComponent=function(_Component3){_inherits(SceneComponent,_Component3);function SceneComponent(){_classCallCheck(this,SceneComponent);var _this33=_possibleConstructorReturn(this,(SceneComponent.__proto__||Object.getPrototypeOf(SceneComponent)).apply(this,arguments));_this33.sceneDescription={};return _this33;}/**
     * Notify update scene only when send update message is needed.
     * @param {number} loopIndex [description]
     */_createClass(SceneComponent,[{key:"updateScene",value:function updateScene(loopIndex){if(this._lastUpdateIndex!==loopIndex){this.node.broadcastMessage("update",this.sceneDescription);this._lastUpdateIndex=loopIndex;}}}]);return SceneComponent;}(Component);SceneComponent.attributes={};var CameraComponent=function(_Component4){_inherits(CameraComponent,_Component4);function CameraComponent(){_classCallCheck(this,CameraComponent);return _possibleConstructorReturn(this,(CameraComponent.__proto__||Object.getPrototypeOf(CameraComponent)).apply(this,arguments));}_createClass(CameraComponent,[{key:"$awake",value:function $awake(){this.containedScene=CameraComponent._findContainedScene(this.node);var c=this.camera=new PerspectiveCamera();this.transform=this.node.getComponent("Transform");this.$transformUpdated(this.transform);c.setFar(this.attributes.get("far").Value);c.setNear(this.attributes.get("near").Value);c.setFovy(this.attributes.get("fovy").Value);c.setAspect(this.attributes.get("aspect").Value);}},{key:"updateContainedScene",value:function updateContainedScene(loopIndex){if(this.containedScene){this.containedScene.updateScene(loopIndex);}}},{key:"renderScene",value:function renderScene(args){if(this.containedScene){args.sceneDescription=this.containedScene.sceneDescription;this.containedScene.node.broadcastMessage("render",args);}}},{key:"$transformUpdated",value:function $transformUpdated(t){if(this.camera){this.camera.updateTransform(t);}}}],[{key:"_findContainedScene",/**
   * Find scene tag recursively.
   * @param  {GomlNode}       node [the node to searching currently]
   * @return {SceneComponent}      [the scene component found]
   */value:function _findContainedScene(node){if(node.parent){var scene=node.parent.getComponent("Scene");if(scene&&scene instanceof SceneComponent){return scene;}else{return CameraComponent._findContainedScene(node.parent);}}else{return null;}}}]);return CameraComponent;}(Component);CameraComponent.attributes={fovy:{defaultValue:0.3,converter:"Number"},near:{defaultValue:0.01,converter:"Number"},far:{defaultValue:10,converter:"Number"},aspect:{defaultValue:1.6,converter:"Number"}};var GLExtRequestor=function(){function GLExtRequestor(gl){_classCallCheck(this,GLExtRequestor);this.gl=gl;this.extensions={};this._readyExtensions={};this._resolveRequested();GLExtRequestor._requestObserver.push(this._resolveExtensionSafely);}/**
     * Request extension to use.
     * @param {string} str [description]
     */_createClass(GLExtRequestor,[{key:"_resolveRequested",/**
     * Resolve all extension requested already.
     */value:function _resolveRequested(){var _this35=this;GLExtRequestor._requestedExtensions.forEach(function(e){_this35._resolveExtensionSafely(e.extensionName);});}},{key:"_resolveExtensionSafely",value:function _resolveExtensionSafely(extName){var e=GLExtRequestor._requestedExtensions[GLExtRequestor._requestIndexOf(extName)];if(!this._resolveExtension(e.extensionName)&&e.isNecessary){throw new Error("A WebGL extension '"+e.extensionName+"' was requested. But that is not supported on this device.");}}},{key:"_resolveExtension",value:function _resolveExtension(name){if(this._readyExtensions[name]){return true;}var ext=void 0;if(typeof GLExtRequestor._customExtensionResolvers[name]==="undefined"){ext=this.extensions[name]=this.gl.getExtension(name);}else{ext=this.extensions[name]=GLExtRequestor._customExtensionResolvers[name](this.gl);}this._readyExtensions[name]=this.extensions[name]!==void 0;return!!this._readyExtensions[name];}}],[{key:"request",value:function request(extName){var isNecessary=arguments.length<=1||arguments[1]===undefined?false:arguments[1];var index=GLExtRequestor._requestIndexOf(extName);if(index>-1&&isNecessary){GLExtRequestor._requestedExtensions[index]={extensionName:extName,isNecessary:isNecessary};}else if(index===-1){GLExtRequestor._requestedExtensions.push({extensionName:extName,isNecessary:isNecessary});}GLExtRequestor._requestObserver.forEach(function(o){return o(extName);});}},{key:"_requestIndexOf",value:function _requestIndexOf(extName){for(var i=0;i<GLExtRequestor._requestedExtensions.length;i++){if(GLExtRequestor._requestedExtensions[i].extensionName===extName){return i;}}return-1;}}]);return GLExtRequestor;}();/**
 * Extension list requested to use.
 * @type {string[]}
 */GLExtRequestor._requestedExtensions=[];/**
 * Some of extensions needed to override resolving extensions by this.
 */GLExtRequestor._customExtensionResolvers={};GLExtRequestor._requestObserver=[];GLExtRequestor._customExtensionResolvers["WEBGL_color_buffer_float"]=function(gl){var isSupported=void 0;if(gl.getExtension("WEBGL_color_buffer_float")===null){var fbo=gl.createFramebuffer();var tex=gl.createTexture();gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);gl.bindTexture(gl.TEXTURE_2D,tex);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.FLOAT,null);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tex,0);if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE){isSupported=false;}else{isSupported=true;}gl.deleteTexture(tex);gl.deleteFramebuffer(fbo);}else{isSupported=true;}return isSupported;};var ns=obtainGomlInterface.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");var CanvasInitializerComponent=function(_Component5){_inherits(CanvasInitializerComponent,_Component5);function CanvasInitializerComponent(){_classCallCheck(this,CanvasInitializerComponent);return _possibleConstructorReturn(this,(CanvasInitializerComponent.__proto__||Object.getPrototypeOf(CanvasInitializerComponent)).apply(this,arguments));}_createClass(CanvasInitializerComponent,[{key:"$awake",value:function $awake(){var _this37=this;this._scriptTag=this.companion.get("scriptElement");if(this._isContainedInBody(this._scriptTag)){// canvas should be placed siblings of the script tag
this._generateCanvas(this._scriptTag);}else{}// apply sizes on changed
this.attributes.get("width").addObserver(function(v){_this37.canvas.width=v.Value;});this.attributes.get("height").addObserver(function(v){_this37.canvas.height=v.Value;});}/**
     * Generate canvas element
     * @param  {Element}           parent [description]
     * @return {HTMLCanvasElement}        [description]
     */},{key:"_generateCanvas",value:function _generateCanvas(scriptTag){var generatedCanvas=document.createElement("canvas");generatedCanvas.width=this.attributes.get("width").Value;generatedCanvas.height=this.attributes.get("height").Value;var gl=this._getContext(generatedCanvas);this.companion.set(ns("gl"),gl);this.companion.set(ns("canvasElement"),generatedCanvas);this.companion.set(ns("GLExtRequestor"),new GLExtRequestor(gl));scriptTag.parentElement.insertBefore(generatedCanvas,scriptTag.nextSibling);this.canvas=generatedCanvas;return generatedCanvas;}},{key:"_getContext",value:function _getContext(canvas){var context=canvas.getContext("webgl");if(!context){context=canvas.getContext("webgl-experimental");}return context;}/**
     * Check the tag is included in the body
     * @param  {Element} tag [description]
     * @return {boolean}     [description]
     */},{key:"_isContainedInBody",value:function _isContainedInBody(tag){if(!tag.parentElement){return false;}if(tag.parentNode.nodeName==="BODY"){return true;}return this._isContainedInBody(tag.parentElement);}}]);return CanvasInitializerComponent;}(Component);CanvasInitializerComponent.attributes={width:{defaultValue:640,converter:"Number"},height:{defaultValue:480,converter:"Number"}};var GeometryComponent=function(_Component6){_inherits(GeometryComponent,_Component6);function GeometryComponent(){_classCallCheck(this,GeometryComponent);return _possibleConstructorReturn(this,(GeometryComponent.__proto__||Object.getPrototypeOf(GeometryComponent)).apply(this,arguments));}_createClass(GeometryComponent,[{key:"$mount",value:function $mount(){var type=this.getValue("type");if(type){var gf=this.companion.get("GeometryFactory");var attrs=GeometryFactory.factoryArgumentDeclarations[type];var geometryArgument={};for(var key in attrs){this.__addAtribute(key,attrs[key]);geometryArgument[key]=this.getValue(key);}this.geometry=gf.instanciate(type,geometryArgument);var gr=this.companion.get("GeometryRegistory");var name=this.getValue("name");if(!name){throw new Error("Name was not specified");}gr.addGeometry(name,this.geometry);}}}]);return GeometryComponent;}(Component);GeometryComponent.attributes={type:{converter:"String",defaultValue:undefined},name:{converter:"String",defaultValue:undefined}};var GeometryRegistoryComponent=function(_Component7){_inherits(GeometryRegistoryComponent,_Component7);function GeometryRegistoryComponent(){_classCallCheck(this,GeometryRegistoryComponent);var _this39=_possibleConstructorReturn(this,(GeometryRegistoryComponent.__proto__||Object.getPrototypeOf(GeometryRegistoryComponent)).apply(this,arguments));_this39._geometries={};return _this39;}_createClass(GeometryRegistoryComponent,[{key:"$awake",value:function $awake(){this._factory=new GeometryFactory(this.companion.get("gl"));this.companion.set(this.name,this);this.companion.set(obtainGomlInterface.ns(this.name.ns)("GeometryFactory"),this._factory);var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=this.getValue("defaultGeometry")[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var geometry=_step6.value;this.addGeometry(geometry,this._factory.instanciateAsDefault(geometry));}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}}},{key:"addGeometry",value:function addGeometry(name,geometry){this._geometries[name]=geometry;}},{key:"removeGeometry",value:function removeGeometry(name){if(this._geometries[name]){delete this._geometries[name];}}},{key:"getGeometry",value:function getGeometry(name){return this._geometries[name];}}]);return GeometryRegistoryComponent;}(Component);GeometryRegistoryComponent.attributes={defaultGeometry:{converter:"StringArray",defaultValue:["quad","cube","sphere"]}};var LoopManagerComponent=function(_Component8){_inherits(LoopManagerComponent,_Component8);function LoopManagerComponent(){_classCallCheck(this,LoopManagerComponent);var _this40=_possibleConstructorReturn(this,(LoopManagerComponent.__proto__||Object.getPrototypeOf(LoopManagerComponent)).apply(this,arguments));_this40._loopActions=[];_this40._loopIndex=0;return _this40;}_createClass(LoopManagerComponent,[{key:"$awake",value:function $awake(){var _this41=this;this.attributes.get("loopEnabled").addObserver(function(attr){_this41._begin();});this._registerNextLoop=window.requestAnimationFrame// if window.requestAnimationFrame is defined or undefined
?function(){window.requestAnimationFrame(_this41._loop.bind(_this41));}:function(){window.setTimeout(_this41._loop.bind(_this41),1000/60);};}},{key:"register",value:function register(action,priorty){this._loopActions.push({action:action,priorty:priorty});this._loopActions.sort(function(a,b){return a.priorty-b.priorty;});}},{key:"_begin",value:function _begin(){this._registerNextLoop();}},{key:"_loop",value:function _loop(){var _this42=this;this._loopActions.forEach(function(a){return a.action(_this42._loopIndex);});this._loopIndex++;this._registerNextLoop();}}]);return LoopManagerComponent;}(Component);LoopManagerComponent.attributes={loopEnabled:{defaultValue:false,converter:"Boolean"}};var Pass=function(){function Pass(program,attributes,beforeDraw){_classCallCheck(this,Pass);this.program=program;this.attributes=attributes;this.beforeDraw=beforeDraw;}_createClass(Pass,[{key:"draw",value:function draw(arg){this.program.use();for(var i=0;i<this.beforeDraw.length;i++){this.beforeDraw[i](this,arg);}arg.geometry.draw(arg.targetBuffer,this.attributes,this.program,arg.drawCount,arg.drawOffset);}}]);return Pass;}();var SORTPass=function(_Pass){_inherits(SORTPass,_Pass);function SORTPass(program,attributes,beforeDraw,programInfo){_classCallCheck(this,SORTPass);var _this43=_possibleConstructorReturn(this,(SORTPass.__proto__||Object.getPrototypeOf(SORTPass)).call(this,program,attributes,beforeDraw));_this43.programInfo=programInfo;return _this43;}return SORTPass;}(Pass);var MaterialComponent=function(_Component9){_inherits(MaterialComponent,_Component9);function MaterialComponent(){_classCallCheck(this,MaterialComponent);var _this44=_possibleConstructorReturn(this,(MaterialComponent.__proto__||Object.getPrototypeOf(MaterialComponent)).apply(this,arguments));_this44.materialArgs={};return _this44;}_createClass(MaterialComponent,[{key:"$mount",value:function $mount(){var typeName=this.getValue("type");if(typeName){this.materialPromise=this.companion.get("MaterialFactory").instanciate(typeName);this._registerAttributes();}}},{key:"_registerAttributes",value:function _registerAttributes(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee7(){var _this45=this;var promises;return regeneratorRuntime.wrap(function _callee7$(_context81){while(1){switch(_context81.prev=_context81.next){case 0:_context81.next=2;return this.materialPromise;case 2:this.material=_context81.sent;promises=[];this.material.pass.forEach(function(p){if(p instanceof SORTPass){var _loop2=function _loop2(key){_this45.__addAtribute(key,p.programInfo.gomlAttributes[key]);_this45.attributes.get(key).addObserver(function(v){_this45.materialArgs[key]=v.Value;});var value=_this45.materialArgs[key]=_this45.getValue(key);if(value instanceof ResourceBase){promises.push(value.validPromise);}};for(var key in p.programInfo.gomlAttributes){_loop2(key);}}});_context81.next=7;return Promise.all(promises);case 7:this.ready=true;case 8:case"end":return _context81.stop();}}},_callee7,this);}));}}]);return MaterialComponent;}(Component);MaterialComponent.attributes={type:{converter:"String",defaultValue:undefined}};var MaterialContainerComponent=function(_Component10){_inherits(MaterialContainerComponent,_Component10);function MaterialContainerComponent(){_classCallCheck(this,MaterialContainerComponent);var _this46=_possibleConstructorReturn(this,(MaterialContainerComponent.__proto__||Object.getPrototypeOf(MaterialContainerComponent)).apply(this,arguments));_this46.materialArgs={};_this46.ready=false;return _this46;}_createClass(MaterialContainerComponent,[{key:"$mount",value:function $mount(){this.attributes.get("material").addObserver(this._onMaterialChanged);this.companion.get("loader").register(this._onMaterialChanged());}/**
     * When the material attribute is changed.
     */},{key:"_onMaterialChanged",value:function _onMaterialChanged(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee8(){var materialPromise;return regeneratorRuntime.wrap(function _callee8$(_context82){while(1){switch(_context82.prev=_context82.next){case 0:materialPromise=this.getValue("material");if(!this._materialComponent){this._prepareInternalMaterial(materialPromise);}else{this._prepareExternalMaterial(materialPromise);}case 2:case"end":return _context82.stop();}}},_callee8,this);}));}/**
     * Resolve materials only when the material required from external material component.
     * @return {Promise<void>} [description]
     */},{key:"_prepareExternalMaterial",value:function _prepareExternalMaterial(materialPromise){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee9(){var loader,material;return regeneratorRuntime.wrap(function _callee9$(_context83){while(1){switch(_context83.prev=_context83.next){case 0:loader=this.companion.get("loader");loader.register(materialPromise);_context83.next=4;return materialPromise;case 4:material=_context83.sent;this.material=material;this.materialArgs=this._materialComponent.materialArgs;this.ready=true;case 8:case"end":return _context83.stop();}}},_callee9,this);}));}},{key:"_prepareInternalMaterial",value:function _prepareInternalMaterial(materialPromise){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee10(){var _this47=this;var loader,material,promises;return regeneratorRuntime.wrap(function _callee10$(_context84){while(1){switch(_context84.prev=_context84.next){case 0:// obtain promise of instanciating material
loader=this.companion.get("loader");loader.register(materialPromise);if(materialPromise){_context84.next=4;break;}return _context84.abrupt("return");case 4:_context84.next=6;return materialPromise;case 6:material=_context84.sent;promises=[];material.pass.forEach(function(p){if(p instanceof SORTPass){var _loop3=function _loop3(key){var val=p.programInfo.gomlAttributes[key];_this47.__addAtribute(key,val);_this47.attributes.get(key).addObserver(function(v){_this47.materialArgs[key]=v.Value;});_this47.materialArgs[key]=_this47.getValue(key);};for(var key in p.programInfo.gomlAttributes){_loop3(key);}}});_context84.next=11;return Promise.all(promises);case 11:this.material=material;this.ready=true;case 13:case"end":return _context84.stop();}}},_callee10,this);}));}}]);return MaterialContainerComponent;}(Component);MaterialContainerComponent.attributes={material:{converter:"Material",defaultValue:undefined,componentBoundTo:"_materialComponent"// When the material was specified with the other material tag, this field would be assigned.
}};/**
 * Resolve resources with caching.
 */var CacheResolver=function(){function CacheResolver(toAbsolute){_classCallCheck(this,CacheResolver);this.toAbsolute=toAbsolute;this.cache={};this.resolvers={};}_createClass(CacheResolver,[{key:"resolve",value:function resolve(src,resolver){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee11(){var abs,result;return regeneratorRuntime.wrap(function _callee11$(_context85){while(1){switch(_context85.prev=_context85.next){case 0:abs=this.toAbsolute(src);if(!this._cached(abs)){_context85.next=5;break;}return _context85.abrupt("return",this.cache[abs]);case 5:if(!this._resolving(abs)){_context85.next=11;break;}_context85.next=8;return this.resolvers[abs];case 8:return _context85.abrupt("return",_context85.sent);case 11:this.resolvers[abs]=resolver(abs);_context85.next=14;return this.resolvers[abs];case 14:result=_context85.sent;this._resolved(abs,result);return _context85.abrupt("return",result);case 17:case"end":return _context85.stop();}}},_callee11,this);}));}},{key:"_cached",value:function _cached(abs){return typeof this.cache[abs]!=="undefined";}},{key:"_resolving",value:function _resolving(abs){return typeof this.resolvers[abs]!=="undefined";}},{key:"_resolved",value:function _resolved(abs,result){delete this.resolvers[abs];this.cache[abs]=result;}}]);return CacheResolver;}();var SORTPassInfoResolver=function(_CacheResolver){_inherits(SORTPassInfoResolver,_CacheResolver);function SORTPassInfoResolver(){_classCallCheck(this,SORTPassInfoResolver);return _possibleConstructorReturn(this,(SORTPassInfoResolver.__proto__||Object.getPrototypeOf(SORTPassInfoResolver)).call(this,function(r){return r;}));}return SORTPassInfoResolver;}(CacheResolver);var UniformProxy=function(){function UniformProxy(program){_classCallCheck(this,UniformProxy);this.program=program;this._currentTextureRegister=0;this._gl=program.gl;}_createClass(UniformProxy,[{key:"uniformBool",value:function uniformBool(variableName,val){var _this49=this;this._pass(variableName,function(l){return _this49._gl.uniform1i(l,val?1:0);});}},{key:"uniformMatrix",value:function uniformMatrix(variableName,mat){var _this50=this;this._pass(variableName,function(l){return _this50._gl.uniformMatrix4fv(l,false,mat.rawElements);});}},{key:"uniformFloat",value:function uniformFloat(variableName,val){var _this51=this;this._pass(variableName,function(l){return _this51._gl.uniform1f(l,val);});}},{key:"uniformFloatArray",value:function uniformFloatArray(variableName,val){var _this52=this;this._pass(variableName,function(l){return _this52._gl.uniform1fv(l,val);});}},{key:"uniformInt",value:function uniformInt(variableName,val){var _this53=this;this._pass(variableName,function(l){return _this53._gl.uniform1i(l,val);});}},{key:"uniformVector2",value:function uniformVector2(variableName,val){var _this54=this;this._pass(variableName,function(l){return _this54._gl.uniform2f(l,val.X,val.Y);});}},{key:"uniformVector2Array",value:function uniformVector2Array(variableName,val){var _this55=this;this._pass(variableName,function(l){return _this55._gl.uniform2fv(l,val);});}},{key:"uniformVector3",value:function uniformVector3(variableName,val){var _this56=this;this._pass(variableName,function(l){return _this56._gl.uniform3f(l,val.X,val.Y,val.Z);});}},{key:"uniformVector3Array",value:function uniformVector3Array(variableName,val){var _this57=this;this._pass(variableName,function(l){return _this57._gl.uniform3fv(l,val);});}},{key:"uniformColor3",value:function uniformColor3(variableName,val){var _this58=this;this._pass(variableName,function(l){return _this58._gl.uniform3f(l,val.R,val.G,val.B);});}},{key:"uniformVector4",value:function uniformVector4(variableName,val){var _this59=this;this._pass(variableName,function(l){return _this59._gl.uniform4f(l,val.X,val.Y,val.Z,val.W);});}},{key:"uniformVector4Array",value:function uniformVector4Array(variableName,val){var _this60=this;this._pass(variableName,function(l){return _this60._gl.uniform4fv(l,val);});}},{key:"uniformColor4",value:function uniformColor4(variableName,val){var _this61=this;this._pass(variableName,function(l){return _this61._gl.uniform4f(l,val.R,val.G,val.B,val.A);});}},{key:"uniformTexture2D",value:function uniformTexture2D(variableName,val){if(val.valid){val.register(this._currentTextureRegister);this.uniformInt(variableName,this._currentTextureRegister);this._currentTextureRegister++;}else{console.warn("The texture assigned to '"+variableName+"' is not valid.");}}},{key:"onUse",value:function onUse(){this._currentTextureRegister=0;}},{key:"_pass",value:function _pass(variableName,act){var location=this.program.findUniformLocation(variableName);if(location){act(location);}}}]);return UniformProxy;}();var Program=function(_ResourceBase2){_inherits(Program,_ResourceBase2);function Program(gl){_classCallCheck(this,Program);var _this62=_possibleConstructorReturn(this,(Program.__proto__||Object.getPrototypeOf(Program)).call(this,gl));_this62._uniformLocations={};_this62._attributeLocations={};_this62.uniforms=new UniformProxy(_this62);_this62.program=gl.createProgram();return _this62;}_createClass(Program,[{key:"update",value:function update(shaders){var _this63=this;if(this.valid){// detach all attached shaders previously
var preciousShaders=this.gl.getAttachedShaders(this.program);preciousShaders.forEach(function(s){return _this63.gl.detachShader(_this63.program,s);});}shaders.forEach(function(shader){_this63.gl.attachShader(_this63.program,shader.shader);});this.gl.linkProgram(this.program);if(!this.gl.getProgramParameter(this.program,WebGLRenderingContext.LINK_STATUS)){var errorLog=this.gl.getProgramInfoLog(this.program);throw new Error("LINK FAILED\n"+errorLog);}this.valid=true;}},{key:"use",value:function use(){this.gl.useProgram(this.program);this.uniforms.onUse();}},{key:"destroy",value:function destroy(){_get(Program.prototype.__proto__||Object.getPrototypeOf(Program.prototype),"destroy",this).call(this);this.gl.deleteProgram(this.program);}},{key:"findAttributeLocation",value:function findAttributeLocation(variableName){if(typeof this._attributeLocations[variableName]==="undefined"){this._attributeLocations[variableName]=this.gl.getAttribLocation(this.program,variableName);this.gl.enableVertexAttribArray(this._attributeLocations[variableName]);return this._attributeLocations[variableName];}else{return this._attributeLocations[variableName];}}},{key:"findUniformLocation",value:function findUniformLocation(variableName){if(typeof this._uniformLocations[variableName]==="undefined"){return this._uniformLocations[variableName]=this.gl.getUniformLocation(this.program,variableName);}else{return this._uniformLocations[variableName];}}}]);return Program;}(ResourceBase);var Shader=function(_ResourceBase3){_inherits(Shader,_ResourceBase3);function Shader(gl,type,sourceCode){_classCallCheck(this,Shader);var _this64=_possibleConstructorReturn(this,(Shader.__proto__||Object.getPrototypeOf(Shader)).call(this,gl));_this64.type=type;_this64.sourceCode=sourceCode;_this64.shader=gl.createShader(type);if(sourceCode){_this64.update(sourceCode);}return _this64;}_createClass(Shader,[{key:"update",value:function update(source){this.gl.shaderSource(this.shader,source);this.gl.compileShader(this.shader);if(!this.gl.getShaderParameter(this.shader,WebGLRenderingContext.COMPILE_STATUS)){throw new Error("Compiling shader failed.\nSourceCode:\n"+this.sourceCode+"\n\nErrorCode:"+this.gl.getShaderInfoLog(this.shader));}this.valid=true;}},{key:"destroy",value:function destroy(){_get(Shader.prototype.__proto__||Object.getPrototypeOf(Shader.prototype),"destroy",this).call(this);this.gl.deleteShader(this.shader);}}]);return Shader;}(ResourceBase);var GLSLUtil=function(){function GLSLUtil(){_classCallCheck(this,GLSLUtil);}_createClass(GLSLUtil,null,[{key:"isPrimitive",value:function isPrimitive(type){return GLSLUtil._primitives.indexOf(type)>=0;}}]);return GLSLUtil;}();GLSLUtil._primitives=["float","bool","int","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","mat2","mat3","mat4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow"];/**
 * Environment uniform value resolver
 */var EnvUniformValueResolver=function(){function EnvUniformValueResolver(){_classCallCheck(this,EnvUniformValueResolver);}_createClass(EnvUniformValueResolver,null,[{key:"addResolver",/**
     * Add static environment uniform value resolver to specified name.
     * @param  {string} name     [description]
     * @param  {string} resolver [description]
     * @return {[type]}          [description]
     */value:function addResolver(name,resolver){EnvUniformValueResolver.resolvers[name]=resolver;}/**
     * Add dynamic environment uniform value resolver.
     * When pasased variable are not resolved by a resolver, that resolver should return null or undefined.
     * @param  {string} resolver [description]
     * @return {[type]}          [description]
     */},{key:"addDynamicResolver",value:function addDynamicResolver(resolver){EnvUniformValueResolver.dynamicResolvers.push(resolver);}},{key:"resolve",value:function resolve(name,valInfo){if(EnvUniformValueResolver.resolvers[name]){return EnvUniformValueResolver.resolvers[name](valInfo,name);}else{var targetResolver=null;for(var i=0;i<EnvUniformValueResolver.dynamicResolvers.length;i++){targetResolver=EnvUniformValueResolver.dynamicResolvers[i](valInfo,name);if(targetResolver!=null){return targetResolver;}}}}}]);return EnvUniformValueResolver;}();/**
 * Static environment uniform value resolvers which names are already known.
 * @type {IVariableInfo}
 */EnvUniformValueResolver.resolvers={};/**
 * Dynamic environment uniform value resolvers which names are not known yet.
 * @type {IVariableInfo}
 */EnvUniformValueResolver.dynamicResolvers=[];// Matricies
EnvUniformValueResolver.addResolver("_matPVM",function(valInfo,name){return function(proxy,args){return proxy.uniformMatrix(name,args.transform.calcPVM(args.camera.camera));};});EnvUniformValueResolver.addResolver("_matP",function(valInfo,name){return function(proxy,args){return proxy.uniformMatrix(name,args.camera.camera.getProjectionMatrix());};});EnvUniformValueResolver.addResolver("_matV",function(valInfo,name){return function(proxy,args){return proxy.uniformMatrix(name,args.camera.camera.getViewMatrix());};});EnvUniformValueResolver.addResolver("_matM",function(valInfo,name){return function(proxy,args){return proxy.uniformMatrix(name,args.transform.globalTransform);};});EnvUniformValueResolver.addResolver("_matVM",function(valInfo,name){return function(proxy,args){return proxy.uniformMatrix(name,args.transform.calcVM(args.camera.camera));};});EnvUniformValueResolver.addResolver("_matPV",function(valInfo,name){return function(proxy,args){return proxy.uniformMatrix(name,args.camera.camera.getProjectionViewMatrix());};});// Misc
EnvUniformValueResolver.addResolver("_time",function(valInfo,name){return function(proxy,args){return proxy.uniformFloat(name,Date.now()%1000000);};});EnvUniformValueResolver.addResolver("_viewportSize",function(valInfo,name){var cacheVec=new Vector2(0,0);return function(proxy,args){cacheVec.X=args.viewport.Width;cacheVec.Y=args.viewport.Height;proxy.uniformVector2(name,cacheVec);};});EnvUniformValueResolver.addResolver("_cameraPosition",function(valInfo,name){return function(proxy,args){return proxy.uniformVector3(name,args.camera.transform.globalPosition);};});EnvUniformValueResolver.addResolver("_cameraDirection",function(valInfo,name){return function(proxy,args){return proxy.uniformVector3(name,args.camera.transform.forward);};});EnvUniformValueResolver.addDynamicResolver(function(valInfo,name){if(valInfo.variableType==="sampler2D"&&valInfo.variableAnnotation["type"]==="backbuffer"){return function(proxy,mat){proxy.uniformTexture2D(name,mat.buffers[valInfo.variableAnnotation["name"]]);};}});function _getDecl(converter,defaultValue,register){return{converter:converter,defaultValue:defaultValue,register:register};}// return default value if annotation containing default value. if not, return provided default value.
function _resolveDefault(vi,defaultValue){if(vi.variableAnnotation.default){return vi.variableAnnotation.default;}else{return defaultValue;}}function _registerUserUniforms(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee12(){var promises,attributes,_loop4,variableName,_ret4;return regeneratorRuntime.wrap(function _callee12$(_context86){while(1){switch(_context86.prev=_context86.next){case 0:promises=[];attributes=input.info.gomlAttributes;_loop4=function _loop4(variableName){if(variableName.charAt(0)==="_"){// this should not assigned by material argument
return"continue";}var valName=variableName;var uniforms=input.info.uniforms;var variableInfo=uniforms[variableName];var annotations=variableInfo.variableAnnotation;if(GLSLUtil.isPrimitive(variableInfo.variableType)){if(variableInfo.isArray){switch(variableInfo.variableType){case"float":var defaultArray=new Array(variableInfo.arrayLength);defaultArray=defaultArray.map(function(p){return 0;});attributes[valName]=_getDecl("NumberArray",_resolveDefault(variableInfo,defaultArray),function(proxy,matArg){proxy.uniformFloatArray(valName,matArg.attributeValues[valName]);});break;default:throw new Error("Unsupported array type "+variableInfo.variableType);}}else{(function(){switch(variableInfo.variableType){case"bool":attributes[valName]=_getDecl("Boolean",_resolveDefault(variableInfo,false),function(proxy,matArg){proxy.uniformBool(valName,matArg.attributeValues[valName]);});break;case"float":attributes[valName]=_getDecl("Number",_resolveDefault(variableInfo,0),function(proxy,matArg){proxy.uniformFloat(valName,matArg.attributeValues[valName]);});break;case"vec2":attributes[valName]=_getDecl("Vector2",_resolveDefault(variableInfo,"0,0"),function(proxy,matArg){proxy.uniformVector2(valName,matArg.attributeValues[valName]);});break;case"vec3":if(annotations["type"]==="color"){attributes[valName]=_getDecl("Color3",_resolveDefault(variableInfo,"#000"),function(proxy,matArg){proxy.uniformColor3(valName,matArg.attributeValues[valName]);});}else{attributes[valName]=_getDecl("Vector3",_resolveDefault(variableInfo,"0,0,0"),function(proxy,matArg){proxy.uniformVector3(valName,matArg.attributeValues[valName]);});}break;case"vec4":if(annotations["type"]==="color"){attributes[valName]=_getDecl("Color4",_resolveDefault(variableInfo,"#0000"),function(proxy,matArg){proxy.uniformColor4(valName,matArg.attributeValues[valName]);});}else{attributes[valName]=_getDecl("Vector4",_resolveDefault(variableInfo,"0,0,0,0"),function(proxy,matArg){proxy.uniformVector4(valName,matArg.attributeValues[valName]);});}break;case"sampler2D":var flagAssignTo=undefined;// check used flag is existing
if(annotations["usedFlag"]){if(annotations["usedFlag"]!==void 0){flagAssignTo=annotations["usedFlag"];}}attributes[valName]=_getDecl("MaterialTexture",_resolveDefault(variableInfo,undefined),function(proxy,matArgs){if(matArgs.attributeValues[valName]){proxy.uniformTexture2D(valName,matArgs.attributeValues[valName](matArgs.buffers));if(flagAssignTo){proxy.uniformBool(flagAssignTo,true);}}else{if(flagAssignTo){proxy.uniformBool(flagAssignTo,false);}}});break;default:throw new Error("Unsupported type was found");}})();}}else{debugger;}};_context86.t0=regeneratorRuntime.keys(input.info.uniforms);case 4:if((_context86.t1=_context86.t0()).done){_context86.next=11;break;}variableName=_context86.t1.value;_ret4=_loop4(variableName);if(!(_ret4==="continue")){_context86.next=9;break;}return _context86.abrupt("continue",4);case 9:_context86.next=4;break;case 11:_context86.next=13;return Promise.all(promises);case 13:case"end":return _context86.stop();}}},_callee12,this);}));}/**
 * Register system shader variables whose name starts with _.
 * @param  {ITransformingArgument} input [description]
 * @return {Promise<void>}           [description]
 */function _registerEnvUniforms(input){var registerers=input.info.systemRegisterers;for(var variableName in input.info.uniforms){if(variableName.charAt(0)==="_"){var _variableInfo=input.info.uniforms[variableName];var resolver=EnvUniformValueResolver.resolve(variableName,_variableInfo);if(resolver){registerers.push(resolver);continue;}throw new Error("Unknown environment uniform variable "+variableName);}}}var UniformRegisterer=function UniformRegisterer(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee13(){return regeneratorRuntime.wrap(function _callee13$(_context87){while(1){switch(_context87.prev=_context87.next){case 0:_context87.next=2;return _registerUserUniforms(input);case 2:_registerEnvUniforms(input);return _context87.abrupt("return",input);case 4:case"end":return _context87.stop();}}},_callee13,this);}));};function _removeComment(source){var text="";var isLineComment=false;var isMultiLineComment=false;for(var i=0;i<source.length;i++){var c=source.charAt(i);if(c==="/"){if(i+1<source.length){if(source.charAt(i+1)==="/"&&!isMultiLineComment){isLineComment=true;i++;continue;}else if(source.charAt(i+1)==="*"&&!isLineComment){isMultiLineComment=true;i++;continue;}}}if(c==="*"&&isMultiLineComment&&i+1<source.length&&source.charAt(i+1)==="/"){isMultiLineComment=false;i++;continue;}if(c==="\n"&&isLineComment){isLineComment=false;continue;}if(!isLineComment&&!isMultiLineComment){text+=c;}}return text;}var CommentRemover=function CommentRemover(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee14(){return regeneratorRuntime.wrap(function _callee14$(_context88){while(1){switch(_context88.prev=_context88.next){case 0:input.transforming=_removeComment(input.transforming);return _context88.abrupt("return",input);case 2:case"end":return _context88.stop();}}},_callee14,this);}));};var ImportResolver=function(_CacheResolver2){_inherits(ImportResolver,_CacheResolver2);function ImportResolver(){_classCallCheck(this,ImportResolver);var _this65=_possibleConstructorReturn(this,(ImportResolver.__proto__||Object.getPrototypeOf(ImportResolver)).call(this,function(str){var regex=/^https?:\/\/.*/gm;return regex.test(str)?ImportResolver._toAbsolute(str):str;}));_this65.staticImports={};return _this65;}_createClass(ImportResolver,[{key:"resolve",value:function resolve(path){var _this66=this;return _get(ImportResolver.prototype.__proto__||Object.getPrototypeOf(ImportResolver.prototype),"resolve",this).call(this,path,function(abs){return _this66._resolve(path);});}},{key:"_resolve",value:function _resolve(path){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee15(){return regeneratorRuntime.wrap(function _callee15$(_context89){while(1){switch(_context89.prev=_context89.next){case 0:if(!this.staticImports[path]){_context89.next=4;break;}return _context89.abrupt("return",this.staticImports[path]);case 4:_context89.next=6;return this._fromExternal(path);case 6:return _context89.abrupt("return",_context89.sent);case 7:case"end":return _context89.stop();}}},_callee15,this);}));}},{key:"_fromExternal",value:function _fromExternal(path){return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest();xhr.open("GET",path);xhr.onload=function(v){resolve(xhr.responseText);};xhr.onerror=function(e){reject(e);};xhr.send();});}}],[{key:"_toAbsolute",value:function _toAbsolute(href){var link=document.createElement("a");link.href=href;return link.protocol+"//"+link.host+link.pathname+link.search+link.hash;}}]);return ImportResolver;}(CacheResolver);var ImportResolver$1=new ImportResolver();function _parseImport(source){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee16(){var regexResult,importContent;return regeneratorRuntime.wrap(function _callee16$(_context90){while(1){switch(_context90.prev=_context90.next){case 0:if(!true){_context90.next=16;break;}regexResult=/\s*@import\s+"([^"]+)"/.exec(source);if(regexResult){_context90.next=4;break;}return _context90.abrupt("break",16);case 4:importContent=void 0;_context90.next=7;return ImportResolver$1.resolve(regexResult[1]);case 7:_context90.t0=_context90.sent;_context90.next=10;return _parseImport(_context90.t0);case 10:importContent=_context90.sent;if(importContent){_context90.next=13;break;}throw new Error("Required shader chunk '"+regexResult[1]+"' was not found!!");case 13:source=source.replace(regexResult[0],"\n"+importContent+"\n");_context90.next=0;break;case 16:return _context90.abrupt("return",source);case 17:case"end":return _context90.stop();}}},_callee16,this);}));}var ImportTransformer=function ImportTransformer(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee17(){var transformed;return regeneratorRuntime.wrap(function _callee17$(_context91){while(1){switch(_context91.prev=_context91.next){case 0:_context91.next=2;return _parseImport(input.transforming);case 2:transformed=_context91.sent;input.transforming=transformed;return _context91.abrupt("return",input);case 5:case"end":return _context91.stop();}}},_callee17,this);}));};var json5=createCommonjsModule(function(module,exports){// json5.js
// Modern JSON. See README.md for details.
//
// This file is based directly off of Douglas Crockford's json_parse.js:
// https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js
var JSON5=(typeof exports==="undefined"?"undefined":_typeof(exports))==='object'?exports:{};JSON5.parse=function(){"use strict";// This is a function that can parse a JSON5 text, producing a JavaScript
// data structure. It is a simple, recursive descent parser. It does not use
// eval or regular expressions, so it can be used as a model for implementing
// a JSON5 parser in other languages.
// We are defining the function inside of another function to avoid creating
// global variables.
var at,// The index of the current character
lineNumber,// The current line number
columnNumber,// The current column number
ch,// The current character
escapee={"'":"'",'"':'"','\\':'\\','/':'/','\n':'',// Replace escaped newlines in strings w/ empty string
b:'\b',f:'\f',n:'\n',r:'\r',t:'\t'},ws=[' ','\t','\r','\n','\v','\f','\xA0',"﻿"],text,renderChar=function renderChar(chr){return chr===''?'EOF':"'"+chr+"'";},error=function error(m){// Call error when something is wrong.
var error=new SyntaxError();// beginning of message suffix to agree with that provided by Gecko - see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
error.message=m+" at line "+lineNumber+" column "+columnNumber+" of the JSON5 data. Still to read: "+JSON.stringify(text.substring(at-1,at+19));error.at=at;// These two property names have been chosen to agree with the ones in Gecko, the only popular
// environment which seems to supply this info on JSON.parse
error.lineNumber=lineNumber;error.columnNumber=columnNumber;throw error;},next=function next(c){// If a c parameter is provided, verify that it matches the current character.
if(c&&c!==ch){error("Expected "+renderChar(c)+" instead of "+renderChar(ch));}// Get the next character. When there are no more characters,
// return the empty string.
ch=text.charAt(at);at++;columnNumber++;if(ch==='\n'||ch==='\r'&&peek()!=='\n'){lineNumber++;columnNumber=0;}return ch;},peek=function peek(){// Get the next character without consuming it or
// assigning it to the ch varaible.
return text.charAt(at);},identifier=function identifier(){// Parse an identifier. Normally, reserved words are disallowed here, but we
// only use this for unquoted object keys, where reserved words are allowed,
// so we don't check for those here. References:
// - http://es5.github.com/#x7.6
// - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
// - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
// TODO Identifiers can have Unicode "letters" in them; add support for those.
var key=ch;// Identifiers must start with a letter, _ or $.
if(ch!=='_'&&ch!=='$'&&(ch<'a'||ch>'z')&&(ch<'A'||ch>'Z')){error("Bad identifier as unquoted key");}// Subsequent characters can contain digits.
while(next()&&(ch==='_'||ch==='$'||ch>='a'&&ch<='z'||ch>='A'&&ch<='Z'||ch>='0'&&ch<='9')){key+=ch;}return key;},number=function number(){// Parse a number value.
var number,sign='',string='',base=10;if(ch==='-'||ch==='+'){sign=ch;next(ch);}// support for Infinity (could tweak to allow other words):
if(ch==='I'){number=word();if(typeof number!=='number'||isNaN(number)){error('Unexpected word for number');}return sign==='-'?-number:number;}// support for NaN
if(ch==='N'){number=word();if(!isNaN(number)){error('expected word to be NaN');}// ignore sign as -NaN also is NaN
return number;}if(ch==='0'){string+=ch;next();if(ch==='x'||ch==='X'){string+=ch;next();base=16;}else if(ch>='0'&&ch<='9'){error('Octal literal');}}switch(base){case 10:while(ch>='0'&&ch<='9'){string+=ch;next();}if(ch==='.'){string+='.';while(next()&&ch>='0'&&ch<='9'){string+=ch;}}if(ch==='e'||ch==='E'){string+=ch;next();if(ch==='-'||ch==='+'){string+=ch;next();}while(ch>='0'&&ch<='9'){string+=ch;next();}}break;case 16:while(ch>='0'&&ch<='9'||ch>='A'&&ch<='F'||ch>='a'&&ch<='f'){string+=ch;next();}break;}if(sign==='-'){number=-string;}else{number=+string;}if(!isFinite(number)){error("Bad number");}else{return number;}},string=function string(){// Parse a string value.
var hex,i,string='',delim,// double quote or single quote
uffff;// When parsing for string values, we must look for ' or " and \ characters.
if(ch==='"'||ch==="'"){delim=ch;while(next()){if(ch===delim){next();return string;}else if(ch==='\\'){next();if(ch==='u'){uffff=0;for(i=0;i<4;i+=1){hex=parseInt(next(),16);if(!isFinite(hex)){break;}uffff=uffff*16+hex;}string+=String.fromCharCode(uffff);}else if(ch==='\r'){if(peek()==='\n'){next();}}else if(typeof escapee[ch]==='string'){string+=escapee[ch];}else{break;}}else if(ch==='\n'){// unescaped newlines are invalid; see:
// https://github.com/aseemk/json5/issues/24
// TODO this feels special-cased; are there other
// invalid unescaped chars?
break;}else{string+=ch;}}}error("Bad string");},inlineComment=function inlineComment(){// Skip an inline comment, assuming this is one. The current character should
// be the second / character in the // pair that begins this inline comment.
// To finish the inline comment, we look for a newline or the end of the text.
if(ch!=='/'){error("Not an inline comment");}do{next();if(ch==='\n'||ch==='\r'){next();return;}}while(ch);},blockComment=function blockComment(){// Skip a block comment, assuming this is one. The current character should be
// the * character in the /* pair that begins this block comment.
// To finish the block comment, we look for an ending */ pair of characters,
// but we also watch for the end of text before the comment is terminated.
if(ch!=='*'){error("Not a block comment");}do{next();while(ch==='*'){next('*');if(ch==='/'){next('/');return;}}}while(ch);error("Unterminated block comment");},comment=function comment(){// Skip a comment, whether inline or block-level, assuming this is one.
// Comments always begin with a / character.
if(ch!=='/'){error("Not a comment");}next('/');if(ch==='/'){inlineComment();}else if(ch==='*'){blockComment();}else{error("Unrecognized comment");}},white=function white(){// Skip whitespace and comments.
// Note that we're detecting comments by only a single / character.
// This works since regular expressions are not valid JSON(5), but this will
// break if there are other valid values that begin with a / character!
while(ch){if(ch==='/'){comment();}else if(ws.indexOf(ch)>=0){next();}else{return;}}},word=function word(){// true, false, or null.
switch(ch){case't':next('t');next('r');next('u');next('e');return true;case'f':next('f');next('a');next('l');next('s');next('e');return false;case'n':next('n');next('u');next('l');next('l');return null;case'I':next('I');next('n');next('f');next('i');next('n');next('i');next('t');next('y');return Infinity;case'N':next('N');next('a');next('N');return NaN;}error("Unexpected "+renderChar(ch));},value,// Place holder for the value function.
array=function array(){// Parse an array value.
var array=[];if(ch==='['){next('[');white();while(ch){if(ch===']'){next(']');return array;// Potentially empty array
}// ES5 allows omitting elements in arrays, e.g. [,] and
// [,null]. We don't allow this in JSON5.
if(ch===','){error("Missing array element");}else{array.push(value());}white();// If there's no comma after this value, this needs to
// be the end of the array.
if(ch!==','){next(']');return array;}next(',');white();}}error("Bad array");},object=function object(){// Parse an object value.
var key,object={};if(ch==='{'){next('{');white();while(ch){if(ch==='}'){next('}');return object;// Potentially empty object
}// Keys can be unquoted. If they are, they need to be
// valid JS identifiers.
if(ch==='"'||ch==="'"){key=string();}else{key=identifier();}white();next(':');object[key]=value();white();// If there's no comma after this pair, this needs to be
// the end of the object.
if(ch!==','){next('}');return object;}next(',');white();}}error("Bad object");};value=function value(){// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.
white();switch(ch){case'{':return object();case'[':return array();case'"':case"'":return string();case'-':case'+':case'.':return number();default:return ch>='0'&&ch<='9'?number():word();}};// Return the json_parse function. It will have access to all of the above
// functions and variables.
return function(source,reviver){var result;text=String(source);at=0;lineNumber=1;columnNumber=1;ch=' ';result=value();white();if(ch){error("Syntax error");}// If there is a reviver function, we recursively walk the new structure,
// passing each name/value pair to the reviver function for possible
// transformation, starting with a temporary root object that holds the result
// in an empty key. If there is not a reviver function, we simply return the
// result.
return typeof reviver==='function'?function walk(holder,key){var k,v,value=holder[key];if(value&&(typeof value==="undefined"?"undefined":_typeof(value))==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}({'':result},''):result;};}();// JSON5 stringify will not quote keys where appropriate
JSON5.stringify=function(obj,replacer,space){if(replacer&&typeof replacer!=="function"&&!isArray(replacer)){throw new Error('Replacer must be a function or an array');}var getReplacedValueOrUndefined=function getReplacedValueOrUndefined(holder,key,isTopLevel){var value=holder[key];// Replace the value with its toJSON value first, if possible
if(value&&value.toJSON&&typeof value.toJSON==="function"){value=value.toJSON();}// If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
// presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
if(typeof replacer==="function"){return replacer.call(holder,key,value);}else if(replacer){if(isTopLevel||isArray(holder)||replacer.indexOf(key)>=0){return value;}else{return undefined;}}else{return value;}};function isWordChar(c){return c>='a'&&c<='z'||c>='A'&&c<='Z'||c>='0'&&c<='9'||c==='_'||c==='$';}function isWordStart(c){return c>='a'&&c<='z'||c>='A'&&c<='Z'||c==='_'||c==='$';}function isWord(key){if(typeof key!=='string'){return false;}if(!isWordStart(key[0])){return false;}var i=1,length=key.length;while(i<length){if(!isWordChar(key[i])){return false;}i++;}return true;}// export for use in tests
JSON5.isWord=isWord;// polyfills
function isArray(obj){if(Array.isArray){return Array.isArray(obj);}else{return Object.prototype.toString.call(obj)==='[object Array]';}}function isDate(obj){return Object.prototype.toString.call(obj)==='[object Date]';}var objStack=[];function checkForCircular(obj){for(var i=0;i<objStack.length;i++){if(objStack[i]===obj){throw new TypeError("Converting circular structure to JSON");}}}function makeIndent(str,num,noNewLine){if(!str){return"";}// indentation no more than 10 chars
if(str.length>10){str=str.substring(0,10);}var indent=noNewLine?"":"\n";for(var i=0;i<num;i++){indent+=str;}return indent;}var indentStr;if(space){if(typeof space==="string"){indentStr=space;}else if(typeof space==="number"&&space>=0){indentStr=makeIndent(" ",space,true);}else{// ignore space parameter
}}// Copied from Crokford's implementation of JSON
// See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
// Begin
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={// table of character substitutions
'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};function escapeString(string){// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:"\\u"+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}// End
function internalStringify(holder,key,isTopLevel){var buffer,res;// Replace the value, if necessary
var obj_part=getReplacedValueOrUndefined(holder,key,isTopLevel);if(obj_part&&!isDate(obj_part)){// unbox objects
// don't unbox dates, since will turn it into number
obj_part=obj_part.valueOf();}switch(typeof obj_part==="undefined"?"undefined":_typeof(obj_part)){case"boolean":return obj_part.toString();case"number":if(isNaN(obj_part)||!isFinite(obj_part)){return"null";}return obj_part.toString();case"string":return escapeString(obj_part.toString());case"object":if(obj_part===null){return"null";}else if(isArray(obj_part)){checkForCircular(obj_part);buffer="[";objStack.push(obj_part);for(var i=0;i<obj_part.length;i++){res=internalStringify(obj_part,i,false);buffer+=makeIndent(indentStr,objStack.length);if(res===null||typeof res==="undefined"){buffer+="null";}else{buffer+=res;}if(i<obj_part.length-1){buffer+=",";}else if(indentStr){buffer+="\n";}}objStack.pop();buffer+=makeIndent(indentStr,objStack.length,true)+"]";}else{checkForCircular(obj_part);buffer="{";var nonEmpty=false;objStack.push(obj_part);for(var prop in obj_part){if(obj_part.hasOwnProperty(prop)){var value=internalStringify(obj_part,prop,false);isTopLevel=false;if(typeof value!=="undefined"&&value!==null){buffer+=makeIndent(indentStr,objStack.length);nonEmpty=true;key=isWord(prop)?prop:escapeString(prop);buffer+=key+":"+(indentStr?' ':'')+value+",";}}}objStack.pop();if(nonEmpty){buffer=buffer.substring(0,buffer.length-1)+makeIndent(indentStr,objStack.length)+"}";}else{buffer='{}';}}return buffer;default:// functions and undefined should be ignored
return undefined;}}// special case...when undefined is used inside of
// a compound object/array, return null.
// but when top-level, return undefined
var topLevelHolder={"":obj};if(obj===undefined){return getReplacedValueOrUndefined(topLevelHolder,'',true);}return internalStringify(topLevelHolder,'',true);};});function _parseVariableAttributes(attributes){return json5.parse(attributes);}function _generateVariableFetchRegex(variableType){return new RegExp("(?:@(\\{.+\\}))?\\s*"+variableType+"\\s+(?:(lowp|mediump|highp)\\s+)?([a-z0-9A-Z]+)\\s+([a-zA-Z0-9_]+)(?:\\s*\\[\\s*(\\d+)\\s*\\]\\s*)?\\s*;","g");}function _parseVariables(source,variableType){var result={};var regex=_generateVariableFetchRegex(variableType);var regexResult=void 0;while(regexResult=regex.exec(source)){var name=regexResult[4];var type=regexResult[3];var precision=regexResult[2];var rawAnnotations=regexResult[1];var isArray=regexResult[5]!==void 0;var arrayCount=undefined;if(isArray){arrayCount=parseInt(regexResult[5],10);if(isNaN(arrayCount)){}}result[name]={variableName:name,variableType:type,variablePrecision:precision,variableAnnotation:rawAnnotations?_parseVariableAttributes(rawAnnotations):{},isArray:isArray,arrayLength:arrayCount};}return result;}var VariableParser=function VariableParser(type){return function(info){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee18(){var variables;return regeneratorRuntime.wrap(function _callee18$(_context92){while(1){switch(_context92.prev=_context92.next){case 0:variables=_parseVariables(info.transforming,type);_context92.t0=type;_context92.next=_context92.t0==="uniform"?4:_context92.t0==="attribute"?6:8;break;case 4:info.info.uniforms=variables;return _context92.abrupt("break",9);case 6:info.info.attributes=variables;return _context92.abrupt("break",9);case 8:throw new Error("Unknown variable type!!");case 9:return _context92.abrupt("return",info);case 10:case"end":return _context92.stop();}}},_callee18,this);}));};};function _removeOtherPart(source,partFlag){var regex=new RegExp("s*(?://+)?s*@"+partFlag,"g");while(true){var found=regex.exec(source);if(!found){break;// When there was no more found
}var beginPoint=found.index;var _index4=source.indexOf("{",beginPoint);// ignore next {
var endPoint=_getEndBracketIndex(source,_index4,"{","}")+1;if(endPoint<1){// error no bracket matching
console.error("Invalid bracket matching!");return source;}source=source.substr(0,beginPoint)+source.substring(endPoint,source.length);}return source;}function _removeSelfOnlyTag(source,partFlag){var regex=new RegExp("(s*(?://+)?s*@"+partFlag+")","g");while(true){var found=regex.exec(source);if(!found){break;// When there was no more found
}var _index5=source.indexOf("{",found.index);// ignore next {
var beginPoint=_index5;var endPoint=_getEndBracketIndex(source,_index5,"{","}")+1;if(endPoint<1){// error no bracket matching
console.error("Invalid bracket matching!");return source;}source=source.substr(0,found.index)+source.substring(beginPoint+1,endPoint-1)+source.substring(endPoint+1,source.length);}return source;}function _getEndBracketIndex(source,startIndex,beginBracket,endBracket){// get index of matching endBracket
var index=startIndex;var bracketCount=1;while(true){if(bracketCount===0){break;}index++;var nextEndBlacket=source.indexOf(endBracket,index);var nextBeginBlacket=source.indexOf(beginBracket,index);if(nextEndBlacket<0){// error no bracket matching
console.error("Invalid bracket matching!");return-1;}if(nextBeginBlacket<0){index=nextEndBlacket;bracketCount--;continue;}if(nextEndBlacket<nextBeginBlacket){index=nextEndBlacket;bracketCount--;continue;}else{index=nextBeginBlacket;bracketCount++;continue;}}return index;}var ShaderSeparator=function ShaderSeparator(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee19(){var fragment,vertex;return regeneratorRuntime.wrap(function _callee19$(_context93){while(1){switch(_context93.prev=_context93.next){case 0:fragment=_removeSelfOnlyTag(_removeOtherPart(input.transforming,"vert"),"frag");vertex=_removeSelfOnlyTag(_removeOtherPart(input.transforming,"frag"),"vert");input.info.fragment=fragment;input.info.vertex=vertex;return _context93.abrupt("return",input);case 5:case"end":return _context93.stop();}}},_callee19,this);}));};function _removeAttributeVariables(source){var regex=/(\s*attribute\s+[a-zA-Z0-9_]+\s+[a-zA-Z0-9_]+;)/;while(true){var found=regex.exec(source);if(!found){break;}source=source.replace(found[0],"");}return source;}var AttributeVariableRemover=function AttributeVariableRemover(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee20(){return regeneratorRuntime.wrap(function _callee20$(_context94){while(1){switch(_context94.prev=_context94.next){case 0:input.info.fragment=_removeAttributeVariables(input.info.fragment);return _context94.abrupt("return",input);case 2:case"end":return _context94.stop();}}},_callee20,this);}));};function _removeVariableAnnotations(source){var regexResult=void 0;while(regexResult=/@\{.+\}/g.exec(source)){source=source.substr(0,regexResult.index)+source.substring(regexResult.index+regexResult[0].length,source.length);}return source;}var VariableAnnotationRemover=function VariableAnnotationRemover(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee21(){return regeneratorRuntime.wrap(function _callee21$(_context95){while(1){switch(_context95.prev=_context95.next){case 0:input.info.fragment=_removeVariableAnnotations(input.info.fragment);input.info.vertex=_removeVariableAnnotations(input.info.vertex);return _context95.abrupt("return",input);case 3:case"end":return _context95.stop();}}},_callee21,this);}));};function _obtainPrecisions(source){var regex=/\s*precision\s+([a-z]+)\s+([a-z0-9]+)/g;var result={};while(true){var found=regex.exec(source);if(!found){break;}result[found[2]]=found[1];}return result;}var PrecisionParser=function PrecisionParser(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee22(){return regeneratorRuntime.wrap(function _callee22$(_context96){while(1){switch(_context96.prev=_context96.next){case 0:input.info.fragmentPrecision=_obtainPrecisions(input.info.fragment);input.info.vertexPrecision=_obtainPrecisions(input.info.vertex);return _context96.abrupt("return",input);case 3:case"end":return _context96.stop();}}},_callee22,this);}));};function _addPrecision(source,targetType,precision){return"precision "+precision+" "+targetType+";\n"+source;}var PrecisionComplementer=function PrecisionComplementer(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee23(){return regeneratorRuntime.wrap(function _callee23$(_context97){while(1){switch(_context97.prev=_context97.next){case 0:if(!input.info.fragmentPrecision["float"]){input.info.fragment=_addPrecision(input.info.fragment,"float","mediump");input.info.fragmentPrecision["float"]="mediump";}return _context97.abrupt("return",input);case 2:case"end":return _context97.stop();}}},_callee23,this);}));};function _regexGLConfigs(source){var regex,regexResult;return regeneratorRuntime.wrap(function _regexGLConfigs$(_context98){while(1){switch(_context98.prev=_context98.next){case 0:regex=/@([a-zA-Z]+)\(([^)]*)\)/g;regexResult=void 0;case 2:if(!(regexResult=regex.exec(source))){_context98.next=7;break;}_context98.next=5;return{name:regexResult[1],args:regexResult[2].split(",")};case 5:_context98.next=2;break;case 7:case"end":return _context98.stop();}}},_marked[0],this);}function _enablingFunc(target,enabled){if(enabled){return function(gl){gl.enable(target);};}else{return function(gl){gl.disable(target);};}}function _asGLConstants(args,length){if(args.length!==length){throw new Error("The arguments should contain "+length+" of items but there was "+args.length);}return args.map(function(arg){var value=WebGLRenderingContext[arg.toUpperCase().trim()];if(value){return value;}else{throw new Error("Specified WebGL constant "+arg+" was not found");}});}function _parseGLConfigs(source){var configs=_regexGLConfigs(source);var configResult=void 0;var result=[];var depthEnabled=true,blendEnabled=true,cullEnabled=true;while(configResult=configs.next()){if(configResult.done){break;}var config=configResult.value;(function(){switch(config.name){case"NoDepth":depthEnabled=false;break;case"DepthFunc":depthEnabled=true;var depth=_asGLConstants(config.args,1);result.push(function(gl){gl.depthFunc(depth[0]);});break;case"NoBlend":blendEnabled=false;break;case"NoCull":cullEnabled=false;break;case"CullFace":cullEnabled=true;var cullConfig=_asGLConstants(config.args,1);result.push(function(gl){gl.cullFace(cullConfig[0]);});break;case"BlendFunc":blendEnabled=true;var blendFuncConfig=_asGLConstants(config.args,2);result.push(function(gl){gl.blendFunc(blendFuncConfig[0],blendFuncConfig[1]);});break;case"BlendFuncSeparate":blendEnabled=true;var blendFuncSeparate=_asGLConstants(config.args,4);result.push(function(gl){gl.blendFuncSeparate(blendFuncSeparate[0],blendFuncSeparate[1],blendFuncSeparate[2],blendFuncSeparate[3]);});break;case"BlendEquation":blendEnabled=true;var blendEquation=_asGLConstants(config.args,1);result.push(function(gl){gl.blendEquation(blendEquation[0]);});break;case"BlendEquationSeparate":blendEnabled=true;var blendEquationSeparate=_asGLConstants(config.args,2);result.push(function(gl){gl.blendEquationSeparate(blendEquationSeparate[0],blendEquationSeparate[1]);});break;}})();}result.unshift(_enablingFunc(WebGLRenderingContext.DEPTH_TEST,depthEnabled));result.unshift(_enablingFunc(WebGLRenderingContext.BLEND,blendEnabled));result.unshift(_enablingFunc(WebGLRenderingContext.CULL_FACE,cullEnabled));return result;}var BasicGLConfigParser=function BasicGLConfigParser(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee24(){return regeneratorRuntime.wrap(function _callee24$(_context99){while(1){switch(_context99.prev=_context99.next){case 0:input.info.configurator=_parseGLConfigs(input.transforming);return _context99.abrupt("return",input);case 2:case"end":return _context99.stop();}}},_callee24,this);}));};function _removeAnnotations(source){var regex=/(\s*@[a-zA-Z]*\([^)]*\))/;while(true){var found=regex.exec(source);if(!found){break;}source=source.replace(found[0],"");}return source;}var AnnotationRemover=function AnnotationRemover(input){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee25(){return regeneratorRuntime.wrap(function _callee25$(_context100){while(1){switch(_context100.prev=_context100.next){case 0:input.transforming=_removeAnnotations(input.transforming);return _context100.abrupt("return",input);case 2:case"end":return _context100.stop();}}},_callee25,this);}));};var SORTPassParser=function(){function SORTPassParser(){_classCallCheck(this,SORTPassParser);}_createClass(SORTPassParser,null,[{key:"parse",value:function parse(source){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee26(){var transformingInfo,i;return regeneratorRuntime.wrap(function _callee26$(_context101){while(1){switch(_context101.prev=_context101.next){case 0:transformingInfo={origin:source,transforming:source,info:{fragment:"",vertex:"",uniforms:{},attributes:{},vertexPrecision:{},fragmentPrecision:{},configurator:[],systemRegisterers:[],gomlAttributes:{}}};i=0;case 2:if(!(i<SORTPassParser.transformers.length)){_context101.next=9;break;}_context101.next=5;return SORTPassParser.transformers[i](transformingInfo);case 5:transformingInfo=_context101.sent;case 6:i++;_context101.next=2;break;case 9:return _context101.abrupt("return",transformingInfo.info);case 10:case"end":return _context101.stop();}}},_callee26,this);}));}}]);return SORTPassParser;}();SORTPassParser.transformers=[CommentRemover,ImportTransformer,VariableParser("uniform"),VariableParser("attribute"),BasicGLConfigParser,AnnotationRemover,ShaderSeparator,AttributeVariableRemover,VariableAnnotationRemover,PrecisionParser,PrecisionComplementer,UniformRegisterer];var PassFactory=function(){function PassFactory(){_classCallCheck(this,PassFactory);}_createClass(PassFactory,null,[{key:"fromSORTPassInfo",/**
     * [Instanciate SORT pass from ISORTPassInfo]
     * @param  {WebGLRenderingContext} gl       [description]
     * @param  {ISORTPassInfo}         passInfo [description]
     * @return {Promise<SORTPass>}              [description]
     */value:function fromSORTPassInfo(gl,passInfo){var vs=new Shader(gl,WebGLRenderingContext.VERTEX_SHADER,passInfo.vertex);var fs=new Shader(gl,WebGLRenderingContext.FRAGMENT_SHADER,passInfo.fragment);var program=new Program(gl);var tasks=[];program.update([vs,fs]);var _loop5=function _loop5(key){var registerer=passInfo.gomlAttributes[key].register;tasks.push(function(p,m){return registerer(p.program.uniforms,m);});};for(var key in passInfo.gomlAttributes){_loop5(key);}var attributes=[];for(var _key in passInfo.attributes){attributes.push(_key);}var configurators=passInfo.configurator;var _loop6=function _loop6(i){tasks.push(function(p){return configurators[i](p.program.gl);});};for(var i=0;i<configurators.length;i++){_loop6(i);}var _loop7=function _loop7(_i6){tasks.push(function(p,args){return passInfo.systemRegisterers[_i6](p.program.uniforms,args);});};for(var _i6=0;_i6<passInfo.systemRegisterers.length;_i6++){_loop7(_i6);}return new SORTPass(program,attributes,tasks,passInfo);}},{key:"fromSinglePassSORT",value:function fromSinglePassSORT(gl,src){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee27(){var passInfo;return regeneratorRuntime.wrap(function _callee27$(_context102){while(1){switch(_context102.prev=_context102.next){case 0:_context102.next=2;return PassFactory._sortPassResolver.resolve(src,function(){return SORTPassParser.parse(src);});case 2:passInfo=_context102.sent;return _context102.abrupt("return",PassFactory.fromSORTPassInfo(gl,passInfo));case 4:case"end":return _context102.stop();}}},_callee27,this);}));}},{key:"passInfoFromSORT",value:function passInfoFromSORT(source){var passes=source.split("@Pass").filter(function(p){return p.indexOf("@")>=0;});// Separate with @Pass and if there was some pass without containing @, that would be skipped since that is assumed as empty.
return Promise.all(passes.map(function(p){return SORTPassParser.parse(p);}));}}]);return PassFactory;}();PassFactory._sortPassResolver=new SORTPassInfoResolver();var ExternalResourceResolver=function(_CacheResolver3){_inherits(ExternalResourceResolver,_CacheResolver3);function ExternalResourceResolver(){_classCallCheck(this,ExternalResourceResolver);return _possibleConstructorReturn(this,(ExternalResourceResolver.__proto__||Object.getPrototypeOf(ExternalResourceResolver)).call(this,ExternalResourceResolver._toAbsolute));}_createClass(ExternalResourceResolver,null,[{key:"_toAbsolute",value:function _toAbsolute(href){var link=document.createElement("a");link.href=href;return link.protocol+"//"+link.host+link.pathname+link.search+link.hash;}}]);return ExternalResourceResolver;}(CacheResolver);var TextFileResolver=function(_ExternalResourceReso){_inherits(TextFileResolver,_ExternalResourceReso);function TextFileResolver(){_classCallCheck(this,TextFileResolver);return _possibleConstructorReturn(this,(TextFileResolver.__proto__||Object.getPrototypeOf(TextFileResolver)).apply(this,arguments));}_createClass(TextFileResolver,[{key:"resolve",value:function resolve(path){return _get(TextFileResolver.prototype.__proto__||Object.getPrototypeOf(TextFileResolver.prototype),"resolve",this).call(this,path,function(abs){return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest();xhr.open("GET",abs);xhr.onload=function(v){resolve(xhr.responseText);};xhr.onerror=function(e){reject(e);};xhr.send();});});}}]);return TextFileResolver;}(ExternalResourceResolver);var TextFileResolver$1=new TextFileResolver();var Material=function(){function Material(pass){_classCallCheck(this,Material);this.pass=pass;}_createClass(Material,[{key:"draw",value:function draw(arg){this.pass.forEach(function(p){return p.draw(arg);});}}]);return Material;}();/**
 * Manage factories for materials.
 * Materials can be instanciated with this instance.
 */var MaterialFactory=function(){function MaterialFactory(gl){_classCallCheck(this,MaterialFactory);this.gl=gl;}_createClass(MaterialFactory,[{key:"instanciate",value:function instanciate(typeName){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee28(){return regeneratorRuntime.wrap(function _callee28$(_context103){while(1){switch(_context103.prev=_context103.next){case 0:if(!MaterialFactory.factories[typeName]){_context103.next=4;break;}return _context103.abrupt("return",MaterialFactory.factories[typeName](this.gl));case 4:_context103.next=6;return this._waitForRegistered(typeName);case 6:return _context103.abrupt("return",_context103.sent);case 7:case"end":return _context103.stop();}}},_callee28,this);}));}},{key:"_waitForRegistered",value:function _waitForRegistered(typeName){var _this69=this;return new Promise(function(resolve){MaterialFactory._onRegister(typeName,function(){resolve(MaterialFactory.factories[typeName](_this69.gl));});});}}],[{key:"addMaterialType",value:function addMaterialType(typeName,factory){MaterialFactory.factories[typeName]=factory;if(MaterialFactory.registerdHandlers[typeName]){MaterialFactory.registerdHandlers[typeName].forEach(function(t){return t();});}}},{key:"addSORTMaterial",value:function addSORTMaterial(typeName,source){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee29(){var sortInfos;return regeneratorRuntime.wrap(function _callee29$(_context104){while(1){switch(_context104.prev=_context104.next){case 0:_context104.next=2;return PassFactory.passInfoFromSORT(source);case 2:sortInfos=_context104.sent;MaterialFactory.addMaterialType(typeName,function(gl){var sorts=sortInfos.map(function(p){return PassFactory.fromSORTPassInfo(gl,p);});return new Material(sorts);});case 4:case"end":return _context104.stop();}}},_callee29,this);}));}},{key:"addSORTMaterialFromURL",value:function addSORTMaterialFromURL(typeName,url){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee30(){var source;return regeneratorRuntime.wrap(function _callee30$(_context105){while(1){switch(_context105.prev=_context105.next){case 0:_context105.next=2;return TextFileResolver$1.resolve(url);case 2:source=_context105.sent;_context105.next=5;return MaterialFactory.addSORTMaterial(typeName,source);case 5:case"end":return _context105.stop();}}},_callee30,this);}));}},{key:"_onRegister",value:function _onRegister(factoryName,handler){if(MaterialFactory.registerdHandlers[factoryName]){MaterialFactory.registerdHandlers[factoryName].push(handler);}else{MaterialFactory.registerdHandlers[factoryName]=[handler];}}}]);return MaterialFactory;}();MaterialFactory.factories={};MaterialFactory.registerdHandlers={};var MaterialImporterComponent=function(_Component11){_inherits(MaterialImporterComponent,_Component11);function MaterialImporterComponent(){_classCallCheck(this,MaterialImporterComponent);return _possibleConstructorReturn(this,(MaterialImporterComponent.__proto__||Object.getPrototypeOf(MaterialImporterComponent)).apply(this,arguments));}_createClass(MaterialImporterComponent,[{key:"$mount",value:function $mount(){if(!this.getValue("type")||!this.getValue("src")){throw new Error("type or src cannot be null in material importer");}else{MaterialFactory.addSORTMaterialFromURL(this.getValue("type"),this.getValue("src"));}}}]);return MaterialImporterComponent;}(Component);MaterialImporterComponent.attributes={type:{defaultValue:undefined,converter:"String"},src:{defaultValue:undefined,converter:"String"}};var MaterialManagerComponent=function(_Component12){_inherits(MaterialManagerComponent,_Component12);function MaterialManagerComponent(){_classCallCheck(this,MaterialManagerComponent);return _possibleConstructorReturn(this,(MaterialManagerComponent.__proto__||Object.getPrototypeOf(MaterialManagerComponent)).apply(this,arguments));}_createClass(MaterialManagerComponent,[{key:"$awake",value:function $awake(){var ns=obtainGomlInterface.ns(this.name.ns);this.companion.set(ns("MaterialFactory"),new MaterialFactory(this.companion.get("gl")));}}]);return MaterialManagerComponent;}(Component);MaterialManagerComponent.attributes={};var MeshRenderer=function(_Component13){_inherits(MeshRenderer,_Component13);function MeshRenderer(){_classCallCheck(this,MeshRenderer);return _possibleConstructorReturn(this,(MeshRenderer.__proto__||Object.getPrototypeOf(MeshRenderer)).apply(this,arguments));}_createClass(MeshRenderer,[{key:"$awake",value:function $awake(){this.getAttribute("targetBuffer").boundTo("_targetBuffer");this.getAttribute("layer").boundTo("_layer");this.getAttribute("drawOffset").boundTo("_drawOffset");this.getAttribute("drawCount").boundTo("_drawCount");this.getAttribute("geometry").boundTo("_geometry");}},{key:"$mount",value:function $mount(){this._transformComponent=this.node.getComponent("Transform");this._materialContainer=this.node.getComponent("MaterialContainer");}},{key:"$render",value:function $render(args){if(this._layer!==args.layer){return;}if(!this._geometry||!args.material&&!this._materialContainer.ready){return;// material is not instanciated yet.
}var renderArgs={targetBuffer:this._targetBuffer,geometry:this._geometry,attributeValues:null,camera:args.camera,transform:this._transformComponent,buffers:args.buffers,viewport:args.viewport,drawCount:this._drawCount,drawOffset:this._drawOffset,sceneDescription:args.sceneDescription};if(args.material){renderArgs.attributeValues=args.materialArgs;args.material.draw(renderArgs);}else{renderArgs.attributeValues=this._materialContainer.materialArgs;this._materialContainer.material.draw(renderArgs);}this.companion.get("gl").flush();}}]);return MeshRenderer;}(Component);MeshRenderer.attributes={geometry:{converter:"Geometry",defaultValue:"quad"},targetBuffer:{converter:"String",defaultValue:"default"},layer:{converter:"String",defaultValue:"default"},drawCount:{converter:"Number",defaultValue:Number.MAX_VALUE},drawOffset:{converter:"Number",defaultValue:0}};var MouseCameraControlComponent=function(_Component14){_inherits(MouseCameraControlComponent,_Component14);function MouseCameraControlComponent(){_classCallCheck(this,MouseCameraControlComponent);var _this73=_possibleConstructorReturn(this,(MouseCameraControlComponent.__proto__||Object.getPrototypeOf(MouseCameraControlComponent)).apply(this,arguments));_this73._lastScreenPos={x:NaN,y:NaN};_this73._origin=new Vector3(0,0,0);_this73._xsum=0;_this73._ysum=0;return _this73;}_createClass(MouseCameraControlComponent,[{key:"$awake",value:function $awake(){this.getAttribute("rotateX").boundTo("_rotateX");this.getAttribute("rotateY").boundTo("_rotateY");this.getAttribute("moveZ").boundTo("_moveZ");this.getAttribute("moveSpeed").boundTo("_moveSpeed");this._transform=this.node.getComponent("Transform");this._scriptTag=this.companion.get("canvasElement");}},{key:"$mount",value:function $mount(){this._scriptTag.addEventListener("mousemove",this._mouseMove.bind(this));this._scriptTag.addEventListener("contextmenu",this._contextMenu.bind(this));this._scriptTag.addEventListener("mousewheel",this._mouseWheel.bind(this));this._distance=Math.sqrt(Vector3.dot(this._transform.localPosition.subtractWith(this._origin),this._transform.localPosition.subtractWith(this._origin)));}},{key:"_contextMenu",value:function _contextMenu(m){m.preventDefault();}},{key:"_mouseMove",value:function _mouseMove(m){if(isNaN(this._lastScreenPos.x)){this._initialDirection=this._transform.localPosition.subtractWith(this._origin);this._initialRotation=this._transform.localRotation;this._lastScreenPos={x:m.screenX,y:m.screenY};}var updated=false;var diffX=m.screenX-this._lastScreenPos.x,diffY=m.screenY-this._lastScreenPos.y;if((m.buttons&1)>0){this._xsum+=diffX;this._ysum+=diffY;updated=true;}if((m.buttons&2)>0){this._origin=this._origin.addWith(this._transform.right.multiplyWith(-diffX*0.05*this._moveSpeed)).addWith(this._transform.up.multiplyWith(diffY*0.05*this._moveSpeed));updated=true;this._distance=Math.sqrt(Vector3.dot(this._transform.localPosition.subtractWith(this._origin),this._transform.localPosition.subtractWith(this._origin)));}if(updated){var rotation=Quaternion.euler(this._ysum*0.01,this._xsum*0.01,0);var rotationMat=Matrix.rotationQuaternion(rotation);var direction=Matrix.transformNormal(rotationMat,this._initialDirection);this._transform.localPosition=this._origin.addWith(Vector3.normalize(direction).multiplyWith(this._distance));this._transform.localRotation=Quaternion.multiply(this._initialRotation,rotation);}this._lastScreenPos={x:m.screenX,y:m.screenY};}},{key:"_mouseWheel",value:function _mouseWheel(m){this._distance-=m.deltaY*this._moveZ*MouseCameraControlComponent.moveCoefficient;this._transform.localPosition=this._transform.localPosition.addWith(this._transform.forward.multiplyWith(m.deltaY*this._moveZ*MouseCameraControlComponent.moveCoefficient));m.preventDefault();}}]);return MouseCameraControlComponent;}(Component);MouseCameraControlComponent.rotateCoefficient=0.003;MouseCameraControlComponent.moveCoefficient=0.05;MouseCameraControlComponent.attributes={// Specify the attributes user can intaract
rotateX:{defaultValue:1,converter:"Number"},rotateY:{defaultValue:1,converter:"Number"},moveZ:{defaultValue:1,converter:"Number"},moveSpeed:{defaultValue:1,converter:"Number"}};var RenderBuffer=function(_ResourceBase4){_inherits(RenderBuffer,_ResourceBase4);function RenderBuffer(gl){_classCallCheck(this,RenderBuffer);var _this74=_possibleConstructorReturn(this,(RenderBuffer.__proto__||Object.getPrototypeOf(RenderBuffer)).call(this,gl));_this74.renderBuffer=gl.createRenderbuffer();return _this74;}_createClass(RenderBuffer,[{key:"update",value:function update(format,width,height){this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER,this.renderBuffer);this.gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER,format,width,height);this.valid=true;}},{key:"bind",value:function bind(){this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER,this.renderBuffer);}},{key:"destroy",value:function destroy(){this.gl.deleteRenderbuffer(this.renderBuffer);_get(RenderBuffer.prototype.__proto__||Object.getPrototypeOf(RenderBuffer.prototype),"destroy",this).call(this);}}]);return RenderBuffer;}(ResourceBase);var RenderBufferComponent=function(_Component15){_inherits(RenderBufferComponent,_Component15);function RenderBufferComponent(){_classCallCheck(this,RenderBufferComponent);return _possibleConstructorReturn(this,(RenderBufferComponent.__proto__||Object.getPrototypeOf(RenderBufferComponent)).apply(this,arguments));}_createClass(RenderBufferComponent,[{key:"$mount",value:function $mount(){this.buffer=new RenderBuffer(this.companion.get("gl"));}},{key:"$unmount",value:function $unmount(){this.buffer.destroy();this.buffer=null;}},{key:"$resizeBuffer",value:function $resizeBuffer(arg){if(!this.getValue("name")){throw new Error("Attribute 'name' must be specified.");}this.buffer.update(WebGLRenderingContext.DEPTH_COMPONENT16,arg.width,arg.height);arg.buffers[this.getValue("name")]=this.buffer;}}]);return RenderBufferComponent;}(Component);RenderBufferComponent.attributes={name:{converter:"String",defaultValue:undefined}};var RendererComponent=function(_Component16){_inherits(RendererComponent,_Component16);function RendererComponent(){_classCallCheck(this,RendererComponent);var _this76=_possibleConstructorReturn(this,(RendererComponent.__proto__||Object.getPrototypeOf(RendererComponent)).apply(this,arguments));_this76._buffers={};return _this76;}_createClass(RendererComponent,[{key:"$mount",value:function $mount(){var _this77=this;this._gl=this.companion.get("gl");this._canvas=this.companion.get("canvasElement");this._camera=this.getValue("camera");this.attributes.get("camera").addObserver(function(v){return _this77._camera=v.Value;});this._viewport=this.getValue("viewport");this.attributes.get("viewport").addObserver(function(v){return _this77._viewport=v.Value;});}},{key:"$treeInitialized",value:function $treeInitialized(){if(this.node.children.length===0){this.node.addNode("render-scene",{});}this.node.broadcastMessage("resizeBuffer",{width:this._viewport.Width,height:this._viewport.Height,buffers:this._buffers});this.node.broadcastMessage("bufferUpdated",{buffers:this._buffers});}},{key:"$renderViewport",value:function $renderViewport(args){this.node.broadcastMessage("render",{camera:this._camera,viewport:this._viewport,buffers:this._buffers,loopIndex:args.loopIndex});}}]);return RendererComponent;}(Component);RendererComponent.attributes={camera:{converter:"Component",defaultValue:"camera",target:"Camera"},viewport:{converter:"Viewport",defaultValue:"auto"}};var RendererManagerComponent=function(_Component17){_inherits(RendererManagerComponent,_Component17);function RendererManagerComponent(){_classCallCheck(this,RendererManagerComponent);return _possibleConstructorReturn(this,(RendererManagerComponent.__proto__||Object.getPrototypeOf(RendererManagerComponent)).apply(this,arguments));}_createClass(RendererManagerComponent,[{key:"$awake",value:function $awake(){this.getAttribute("bgColor").boundTo("_bgColor");this.getAttribute("clearDepth").boundTo("_clearDepth");}},{key:"$mount",value:function $mount(){this.gl=this.companion.get("gl");}},{key:"$treeInitialized",value:function $treeInitialized(){this.node.getComponent("LoopManager").register(this.onloop.bind(this),1000);if(this.getValue("complementRenderer")&&this.node.getChildrenByNodeName("renderer").length===0){this.node.addNode("renderer",{});}}},{key:"onloop",value:function onloop(loopIndex){if(this.enabled){var c=this._bgColor;this.gl.clearColor(c.R,c.G,c.B,c.A);this.gl.clearDepth(this._clearDepth);this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT|WebGLRenderingContext.DEPTH_BUFFER_BIT);this.node.broadcastMessage(1,"renderViewport",{loopIndex:loopIndex});}}}]);return RendererManagerComponent;}(Component);RendererManagerComponent.attributes={bgColor:{defaultValue:new Color4(0,0,0,0),converter:"Color4"},clearDepth:{defaultValue:1.0,converter:"Number"},complementRenderer:{defaultValue:true,converter:"Boolean"}};var Texture2D=function(_ResourceBase5){_inherits(Texture2D,_ResourceBase5);function Texture2D(gl){_classCallCheck(this,Texture2D);var _this79=_possibleConstructorReturn(this,(Texture2D.__proto__||Object.getPrototypeOf(Texture2D)).call(this,gl));_this79._texParameterChanged=true;_this79._magFilter=WebGLRenderingContext.LINEAR;_this79._minFilter=WebGLRenderingContext.LINEAR;_this79._wrapS=WebGLRenderingContext.REPEAT;_this79._wrapT=WebGLRenderingContext.REPEAT;_this79.texture=gl.createTexture();return _this79;}_createClass(Texture2D,[{key:"update",value:function update(levelOrImage,widthOrFlipY,height,border,format,type,pixels,flipYForBuffer){this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D,this.texture);var flipY=false;var image=void 0;var width=void 0;var level=void 0;if(typeof height==="undefined"){flipY=widthOrFlipY?true:false;image=levelOrImage;}else{level=levelOrImage;width=widthOrFlipY;}this.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL,flipY?1:0);if(typeof height==="undefined"){this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D,0,WebGLRenderingContext.RGBA,WebGLRenderingContext.RGBA,WebGLRenderingContext.UNSIGNED_BYTE,this._checkSize(image));}else{if(typeof pixels==="undefined"){pixels=null;}this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D,level,format,width,height,border,format,type,pixels);}this.valid=true;}},{key:"register",value:function register(registerNumber){this.gl.activeTexture(WebGLRenderingContext.TEXTURE0+registerNumber);this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D,this.texture);if(this._texParameterChanged){this._updateTexParameter();}}},{key:"destroy",value:function destroy(){_get(Texture2D.prototype.__proto__||Object.getPrototypeOf(Texture2D.prototype),"destroy",this).call(this);this.gl.deleteTexture(this.texture);}// There should be more effective way to resize texture
},{key:"_checkSize",value:function _checkSize(img){var w=img.naturalWidth,h=img.naturalHeight;var size=Math.pow(2,Math.log(Math.min(w,h))/Math.LN2|0);// largest 2^n integer that does not exceed s
if(w!==h||w!==size){var canv=document.createElement("canvas");canv.height=canv.width=size;canv.getContext("2d").drawImage(img,0,0,w,h,0,0,size,size);return canv;}return img;}},{key:"_updateTexParameter",value:function _updateTexParameter(){this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D,WebGLRenderingContext.TEXTURE_MIN_FILTER,this._minFilter);this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D,WebGLRenderingContext.TEXTURE_MAG_FILTER,this._magFilter);this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D,WebGLRenderingContext.TEXTURE_WRAP_S,this._wrapS);this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D,WebGLRenderingContext.TEXTURE_WRAP_T,this._wrapT);this._texParameterChanged=false;}},{key:"magFilter",get:function get(){return this._magFilter;},set:function set(filter){if(this._magFilter!==filter){this._texParameterChanged=true;this._magFilter=filter;}}},{key:"minFilter",get:function get(){return this._minFilter;},set:function set(filter){if(this._minFilter!==filter){this._texParameterChanged=true;this._minFilter=filter;}}},{key:"wrapS",get:function get(){return this._wrapS;},set:function set(filter){if(this._wrapS!==filter){this._texParameterChanged=true;this._wrapS=filter;}}},{key:"wrapT",get:function get(){return this._wrapT;},set:function set(filter){if(this._wrapT!==filter){this._texParameterChanged=true;this._wrapT=filter;}}}]);return Texture2D;}(ResourceBase);var FrameBuffer=function(_ResourceBase6){_inherits(FrameBuffer,_ResourceBase6);function FrameBuffer(gl){_classCallCheck(this,FrameBuffer);var _this80=_possibleConstructorReturn(this,(FrameBuffer.__proto__||Object.getPrototypeOf(FrameBuffer)).call(this,gl));_this80.fbo=gl.createFramebuffer();return _this80;}_createClass(FrameBuffer,[{key:"update",value:function update(boundTo,level,bindIndex){this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,this.fbo);if(boundTo instanceof Texture2D){if(typeof bindIndex==="undefined"){bindIndex=0;}if(typeof level==="undefined"){level=0;}this.gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER,WebGLRenderingContext.COLOR_ATTACHMENT0+bindIndex,WebGLRenderingContext.TEXTURE_2D,boundTo.texture,level);if(this.gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER)!==WebGLRenderingContext.FRAMEBUFFER_COMPLETE){throw new Error("INCOMPLETE framebuffer");}}else if(boundTo instanceof RenderBuffer){var registerTarget=level;if(typeof level==="undefined"){registerTarget=WebGLRenderingContext.DEPTH_ATTACHMENT;}this.gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER,registerTarget,WebGLRenderingContext.RENDERBUFFER,boundTo.renderBuffer);}this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null);}},{key:"bind",value:function bind(){this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,this.fbo);}},{key:"destroy",value:function destroy(){_get(FrameBuffer.prototype.__proto__||Object.getPrototypeOf(FrameBuffer.prototype),"destroy",this).call(this);this.gl.deleteFramebuffer(this.fbo);}}]);return FrameBuffer;}(ResourceBase);var RenderQuadComponent=function(_Component18){_inherits(RenderQuadComponent,_Component18);function RenderQuadComponent(){_classCallCheck(this,RenderQuadComponent);return _possibleConstructorReturn(this,(RenderQuadComponent.__proto__||Object.getPrototypeOf(RenderQuadComponent)).apply(this,arguments));}_createClass(RenderQuadComponent,[{key:"$awake",value:function $awake(){this.getAttribute("targetBuffer").boundTo("_targetBuffer");this.getAttribute("clearColor").boundTo("_clearColor");this.getAttribute("clearColorEnabled").boundTo("_clearColorEnabled");this.getAttribute("clearDepthEnabled").boundTo("_clearDepthEnabled");this.getAttribute("clearDepth").boundTo("_clearDepth");}},{key:"$mount",value:function $mount(){this._gl=this.companion.get("gl");this._canvas=this.companion.get("canvasElement");var gr=this.companion.get("GeometryRegistory");this._geom=gr.getGeometry("quad");this._materialContainer=this.node.getComponent("MaterialContainer");}},{key:"$bufferUpdated",value:function $bufferUpdated(args){var out=this.getValue("out");if(out!=="default"){this._fbo=new FrameBuffer(this.companion.get("gl"));this._fbo.update(args.buffers[out]);}var depthBuffer=this.getValue("depthBuffer");if(depthBuffer&&this._fbo){this._fbo.update(args.buffers[depthBuffer]);}}},{key:"$render",value:function $render(args){if(!this._materialContainer.ready){return;}// bound render target
if(this._fbo){this._fbo.bind();this._gl.viewport(0,0,args.viewport.Width,args.viewport.Height);}else{this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null);this._gl.viewport(args.viewport.Left,this._canvas.height-args.viewport.Bottom,args.viewport.Width,args.viewport.Height);}// clear buffer if needed
if(this._fbo&&this._clearColorEnabled){this._gl.clearColor(this._clearColor.R,this._clearColor.G,this._clearColor.B,this._clearColor.A);this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);}if(this._clearDepthEnabled){this._gl.clearDepth(this._clearDepth);this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);}// make rendering argument
var renderArgs={targetBuffer:this._targetBuffer,geometry:this._geom,attributeValues:{},camera:null,transform:null,buffers:args.buffers,viewport:args.viewport};renderArgs.attributeValues=this._materialContainer.materialArgs;// do render
this._materialContainer.material.draw(renderArgs);this._gl.flush();}}]);return RenderQuadComponent;}(Component);RenderQuadComponent.attributes={out:{defaultValue:"default",converter:"String"},depthBuffer:{defaultValue:undefined,converter:"String"},targetBuffer:{defaultValue:"default",converter:"String"},clearColor:{defaultValue:"#0000",converter:"Color4"},clearColorEnabled:{defaultValue:true,converter:"Boolean"},clearDepthEnabled:{defaultValue:true,converter:"Boolean"},clearDepth:{defaultValue:1.0,converter:"Number"}};var RenderSceneComponent=function(_Component19){_inherits(RenderSceneComponent,_Component19);function RenderSceneComponent(){_classCallCheck(this,RenderSceneComponent);var _this82=_possibleConstructorReturn(this,(RenderSceneComponent.__proto__||Object.getPrototypeOf(RenderSceneComponent)).apply(this,arguments));_this82._useMaterial=false;_this82._materialArgs={};return _this82;}// messages
_createClass(RenderSceneComponent,[{key:"$awake",value:function $awake(){this.getAttribute("layer").boundTo("_layer");this.getAttribute("clearColor").boundTo("_clearColor");this.getAttribute("clearColorEnabled").boundTo("_clearColorEnabled");this.getAttribute("clearDepthEnabled").boundTo("_clearDepthEnabled");this.getAttribute("clearDepth").boundTo("_clearDepth");this.getAttribute("camera").boundTo("_camera");}},{key:"$mount",value:function $mount(){this._gl=this.companion.get("gl");this._canvas=this.companion.get("canvasElement");if(typeof this.getValue("material")!=="undefined"){this._onMaterialChanged();this._useMaterial=true;}}},{key:"$bufferUpdated",value:function $bufferUpdated(args){var out=this.getValue("out");if(out!=="default"){this._fbo=new FrameBuffer(this.companion.get("gl"));this._fbo.update(args.buffers[out]);}var depthBuffer=this.getValue("depthBuffer");if(depthBuffer&&this._fbo){this._fbo.update(args.buffers[depthBuffer]);}}},{key:"$render",value:function $render(args){var camera=this._camera?this._camera:args.camera;if(!camera){return;}if(this._fbo){this._fbo.bind();this._gl.viewport(0,0,args.viewport.Width,args.viewport.Height);}else{this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER,null);this._gl.viewport(args.viewport.Left,this._canvas.height-args.viewport.Bottom,args.viewport.Width,args.viewport.Height);}// clear buffer if needed
if(this._fbo&&this._clearColorEnabled){this._gl.clearColor(this._clearColor.R,this._clearColor.G,this._clearColor.B,this._clearColor.A);this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);}if(this._clearDepthEnabled){this._gl.clearDepth(this._clearDepth);this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);}args.camera.updateContainedScene(args.loopIndex);args.camera.renderScene({camera:camera,buffers:args.buffers,layer:this._layer,viewport:args.viewport,material:this._useMaterial?this._material:undefined,materialArgs:this._useMaterial?this._materialArgs:undefined,loopIndex:args.loopIndex});}},{key:"_onMaterialChanged",value:function _onMaterialChanged(){if(!this._materialComponent){this._prepareInternalMaterial();}else{this._prepareExternalMaterial();}}},{key:"_prepareExternalMaterial",value:function _prepareExternalMaterial(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee31(){var materialPromise,loader,material;return regeneratorRuntime.wrap(function _callee31$(_context106){while(1){switch(_context106.prev=_context106.next){case 0:materialPromise=this.getValue("material");loader=this.companion.get("loader");loader.register(materialPromise);_context106.next=5;return materialPromise;case 5:material=_context106.sent;this._material=material;case 7:case"end":return _context106.stop();}}},_callee31,this);}));}},{key:"_prepareInternalMaterial",value:function _prepareInternalMaterial(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee32(){var _this83=this;var materialPromise,loader,material,promises;return regeneratorRuntime.wrap(function _callee32$(_context107){while(1){switch(_context107.prev=_context107.next){case 0:// obtain promise of instanciating material
materialPromise=this.getValue("material");loader=this.companion.get("loader");loader.register(materialPromise);if(materialPromise){_context107.next=5;break;}return _context107.abrupt("return");case 5:_context107.next=7;return materialPromise;case 7:material=_context107.sent;promises=[];material.pass.forEach(function(p){if(p instanceof SORTPass){var _loop8=function _loop8(key){var val=p.programInfo.gomlAttributes[key];_this83.__addAtribute(key,val);_this83.attributes.get(key).addObserver(function(v){_this83._materialArgs[key]=v.Value;});var value=_this83._materialArgs[key]=_this83.getValue(key);if(value instanceof ResourceBase){promises.push(value.validPromise);}};for(var key in p.programInfo.gomlAttributes){_loop8(key);}}});_context107.next=12;return Promise.all(promises);case 12:this._material=material;case 13:case"end":return _context107.stop();}}},_callee32,this);}));}}]);return RenderSceneComponent;}(Component);RenderSceneComponent.attributes={layer:{converter:"String",defaultValue:"default"},depthBuffer:{defaultValue:undefined,converter:"String"},out:{converter:"String",defaultValue:"default"},clearColor:{defaultValue:"#0000",converter:"Color4"},clearColorEnabled:{defaultValue:true,converter:"Boolean"},clearDepthEnabled:{defaultValue:true,converter:"Boolean"},clearDepth:{defaultValue:1.0,converter:"Number"},material:{defaultValue:undefined,converter:"Material",componentBoundTo:"_materialComponent"},camera:{defaultValue:undefined,converter:"Component",target:"CAMERA"}};var TextureBufferComponent=function(_Component20){_inherits(TextureBufferComponent,_Component20);function TextureBufferComponent(){_classCallCheck(this,TextureBufferComponent);return _possibleConstructorReturn(this,(TextureBufferComponent.__proto__||Object.getPrototypeOf(TextureBufferComponent)).apply(this,arguments));}_createClass(TextureBufferComponent,[{key:"$mount",value:function $mount(){this.buffer=new Texture2D(this.companion.get("gl"));}},{key:"$unmount",value:function $unmount(){this.buffer.destroy();this.buffer=null;}},{key:"$resizeBuffer",value:function $resizeBuffer(arg){if(!this.getValue("name")){throw new Error("Attribute 'name' must be specified.");}this.buffer.update(0,arg.width,arg.height,0,WebGLRenderingContext.RGBA,WebGLRenderingContext.UNSIGNED_BYTE,null);arg.buffers[this.getValue("name")]=this.buffer;}}]);return TextureBufferComponent;}(Component);TextureBufferComponent.attributes={name:{converter:"String",defaultValue:undefined},format:{converter:"Enum",defaultValue:WebGLRenderingContext.RGBA,table:{RGBA:WebGLRenderingContext.RGBA,RGB:WebGLRenderingContext.RGB}}};var ImageResolver=function(_ExternalResourceReso2){_inherits(ImageResolver,_ExternalResourceReso2);function ImageResolver(){_classCallCheck(this,ImageResolver);return _possibleConstructorReturn(this,(ImageResolver.__proto__||Object.getPrototypeOf(ImageResolver)).apply(this,arguments));}_createClass(ImageResolver,[{key:"resolve",value:function resolve(path){return _get(ImageResolver.prototype.__proto__||Object.getPrototypeOf(ImageResolver.prototype),"resolve",this).call(this,path,function(abs){return new Promise(function(resolve,reject){var imgTag=new Image();imgTag.onload=function(){resolve(imgTag);};imgTag.onerror=function(e){reject(e);};imgTag.src=abs;});});}}]);return ImageResolver;}(ExternalResourceResolver);var ImageResolver$1=new ImageResolver();var TextureComponent=function(_Component21){_inherits(TextureComponent,_Component21);function TextureComponent(){_classCallCheck(this,TextureComponent);return _possibleConstructorReturn(this,(TextureComponent.__proto__||Object.getPrototypeOf(TextureComponent)).apply(this,arguments));}_createClass(TextureComponent,[{key:"$mount",value:function $mount(){var _this87=this;var src=this.getValue("src");this._texture=new Texture2D(this.companion.get("gl"));this._texture.magFilter=this.getValue("magFilter");this._texture.minFilter=this.getValue("minFilter");this._texture.wrapT=this.getValue("wrapT");this._texture.wrapS=this.getValue("wrapS");this.attributes.get("magFilter").addObserver(function(v){return _this87._texture.magFilter=v.Value;});this.attributes.get("minFilter").addObserver(function(v){return _this87._texture.minFilter=v.Value;});this.attributes.get("wrapS").addObserver(function(v){return _this87._texture.wrapS=v.Value;});this.attributes.get("wrapT").addObserver(function(v){return _this87._texture.wrapT=v.Value;});if(src){this._loadTask(src);}}},{key:"_loadTask",value:function _loadTask(src){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function _callee33(){var img;return regeneratorRuntime.wrap(function _callee33$(_context108){while(1){switch(_context108.prev=_context108.next){case 0:_context108.next=2;return ImageResolver$1.resolve(src);case 2:img=_context108.sent;this._texture.update(img);case 4:case"end":return _context108.stop();}}},_callee33,this);}));}}]);return TextureComponent;}(Component);TextureComponent.attributes={src:{converter:"String",defaultValue:undefined},minFilter:{converter:"Enum",defaultValue:"LINEAR",table:{LINEAR:WebGLRenderingContext.LINEAR,NEAREST:WebGLRenderingContext.NEAREST,NEAREST_MIPMAP_NEAREST:WebGLRenderingContext.NEAREST_MIPMAP_NEAREST,NEAREST_MIPMAP_LINEAR:WebGLRenderingContext.NEAREST_MIPMAP_LINEAR,LINEAR_MIPMAP_NEAREST:WebGLRenderingContext.LINEAR_MIPMAP_NEAREST,LINEAR_MIPMAP_LINEAR:WebGLRenderingContext.LINEAR_MIPMAP_LINEAR}},magFilter:{converter:"Enum",defaultValue:"LINEAR",table:{LINEAR:WebGLRenderingContext.LINEAR,NEAREST:WebGLRenderingContext.NEAREST}},wrapS:{converter:"Enum",defaultValue:"REPEAT",table:{REPEAT:WebGLRenderingContext.REPEAT,MIRRORED_REPEAT:WebGLRenderingContext.MIRRORED_REPEAT,CLAMP_TO_EDGE:WebGLRenderingContext.CLAMP_TO_EDGE}},wrapT:{converter:"Enum",defaultValue:"REPEAT",table:{REPEAT:WebGLRenderingContext.REPEAT,MIRRORED_REPEAT:WebGLRenderingContext.MIRRORED_REPEAT,CLAMP_TO_EDGE:WebGLRenderingContext.CLAMP_TO_EDGE}}};/**
 * Provides object transformation like translation,rotation,scaling.
 */var TransformComponent=function(_Component22){_inherits(TransformComponent,_Component22);function TransformComponent(){_classCallCheck(this,TransformComponent);/**
         * Local transform matrix representing scaling,rotation and translation of attached object.
         * @return {[type]} [description]
         */var _this88=_possibleConstructorReturn(this,(TransformComponent.__proto__||Object.getPrototypeOf(TransformComponent)).apply(this,arguments));_this88.localTransform=new Matrix();/**
         * Global transform that consider parent transform and local transform
         * @return {[type]} [description]
         */_this88.globalTransform=new Matrix();/**
         * The children transform should be notified when this transform was updated.
         * @type {TransformComponent[]}
         */_this88._children=[];/**
         * Calculation cache to
         * @return {[type]} [description]
         */_this88._cachePVM=new Matrix();_this88._cacheVM=new Matrix();/**
         * Cache of forward direction of this object
         */_this88._forward=new Vector3([0,0,-1,0]);/**
         * Cache of up direction of this object.
         */_this88._up=new Vector3([0,1,0,0]);/**
         * Cache of right direction of this object.
         */_this88._right=new Vector3([1,0,0,0]);_this88._globalPosition=new Vector3([0,0,0]);_this88._globalScale=new Vector3([1,1,1]);return _this88;}_createClass(TransformComponent,[{key:"calcPVM",value:function calcPVM(camera){mat4.mul(this._cachePVM.rawElements,camera.getProjectionViewMatrix().rawElements,this.globalTransform.rawElements);return this._cachePVM;}},{key:"calcVM",value:function calcVM(camera){mat4.mul(this._cacheVM.rawElements,camera.getViewMatrix().rawElements,this.globalTransform.rawElements);return this._cacheVM;}},{key:"$awake",value:function $awake(){var _this89=this;// register observers
this.attributes.get("position").addObserver(function(){_this89._localPosition=_this89.attributes.get("position").Value;_this89.updateTransform();});this.attributes.get("rotation").addObserver(function(){_this89._localRotation=_this89.attributes.get("rotation").Value;_this89.updateTransform();});this.attributes.get("scale").addObserver(function(){_this89._localScale=_this89.attributes.get("scale").Value;_this89.updateTransform();});// assign attribute values to field
this._localPosition=this.attributes.get("position").Value;this._localRotation=this.attributes.get("rotation").Value;this._localScale=this.attributes.get("scale").Value;this.updateTransform();}},{key:"$mount",value:function $mount(){this._parentTransform=this.node.parent.getComponent("Transform");if(this._parentTransform){this._parentTransform._children.push(this);}this.updateTransform();}},{key:"$unmount",value:function $unmount(){if(this._parentTransform){this._parentTransform._children.splice(this._parentTransform._children.indexOf(this),1);this._parentTransform=null;}}/**
     * update local transform and global transform.
     * This need to be called if you manually edit raw elements of scale,position or rotation to recalculate transform matricies.
     */},{key:"updateTransform",value:function updateTransform(){mat4.fromRotationTranslationScale(this.localTransform.rawElements,this._localRotation.rawElements,this._localPosition.rawElements,this._localScale.rawElements);this.updateGlobalTransform();}/**
     * Update global transoform.
     */},{key:"updateGlobalTransform",value:function updateGlobalTransform(){if(!this._parentTransform){mat4.copy(this.globalTransform.rawElements,this.localTransform.rawElements);}else{mat4.mul(this.globalTransform.rawElements,this._parentTransform.globalTransform.rawElements,this.localTransform.rawElements);}this._updateDirections();this._updateGlobalProperty();this.node.sendMessage("transformUpdated",this);this._children.forEach(function(v){return v.updateGlobalTransform();});}},{key:"_updateDirections",value:function _updateDirections(){vec4.transformMat4(this._forward.rawElements,TransformComponent._forwardBase.rawElements,this.globalTransform.rawElements);vec4.transformMat4(this._up.rawElements,TransformComponent._upBase.rawElements,this.globalTransform.rawElements);vec4.transformMat4(this._right.rawElements,TransformComponent._rightBase.rawElements,this.globalTransform.rawElements);}},{key:"_updateGlobalProperty",value:function _updateGlobalProperty(){if(!this._parentTransform){vec3.copy(this._globalPosition.rawElements,this._localPosition.rawElements);vec3.copy(this._globalScale.rawElements,this._localScale.rawElements);}else{vec3.transformMat4(this._globalPosition.rawElements,this._localPosition.rawElements,this._parentTransform.globalTransform.rawElements);vec3.transformMat4(this._globalScale.rawElements,this._localScale.rawElements,this._parentTransform.globalTransform.rawElements);// TODO buggy
}}},{key:"globalPosition",get:function get(){return this._globalPosition;}},{key:"localPosition",get:function get(){return this._localPosition;},set:function set(val){this._localPosition=val;this.attributes.get("position").Value=val;}},{key:"localRotation",get:function get(){return this._localRotation;},set:function set(val){this._localRotation=val;this.attributes.get("rotation").Value=val;}},{key:"globalScale",get:function get(){return this._globalScale;}},{key:"localScale",get:function get(){return this._localScale;},set:function set(val){this._localScale=val;this.attributes.get("scale").Value=val;}},{key:"forward",get:function get(){return this._forward;}},{key:"up",get:function get(){return this._up;}},{key:"right",get:function get(){return this._right;}}]);return TransformComponent;}(Component);TransformComponent.attributes={"position":{converter:"Vector3",defaultValue:Vector3.Zero},"rotation":{converter:"Rotation3",defaultValue:Quaternion.Identity},"scale":{converter:"Vector3",defaultValue:Vector3.One}};/**
 * Source vector to be multiplied with global transform to calculate forward direction of attached object.
 */TransformComponent._forwardBase=new Vector4(0,0,-1,0);/**
 * Source vector to be multiplied with global transform to calculate up direction of attached object.
 */TransformComponent._upBase=new Vector4(0,1,0,0);/**
 * Source vector to be multiplied with global transform to calculate right direction of attached object.
 */TransformComponent._rightBase=new Vector4(1,0,0,0);/**
 * Utility class to parse the arguments of attributes.
 */var RotationParser=function(){function RotationParser(){_classCallCheck(this,RotationParser);}_createClass(RotationParser,null,[{key:"parseAngle",/**
     * Parse angle strings.
     * "p" means Pi. Ex) 3/4 p
     * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
     * @param input the string to parse.
     * @returns {number} parsed angle in radians.
     */value:function parseAngle(input){var regex=/^ *(-? *(?:0|[1-9]\d*)(?: *\.\d+)?) *(?:\/ *((?:0|[1-9]\d*)(?: *\.\d+)?))? *(p|prad|deg|d|r|rad)? *$/gm;var result=regex.exec(input);if(result==null){throw new Error("faild parse Angle string:'"+input+"'");}var numerator=parseFloat(result[1]);if(result[2]){numerator/=parseFloat(result[2]);}var unit=result[3];if(unit==null){unit="d";}if(unit==="r"||unit==="rad"){return numerator;}if(unit==="p"||unit==="prad"){return numerator*Math.PI;}return numerator/180*Math.PI;}/**
     * Parse angle string in 3D.
     * "p" means Pi. Ex) 3/4 p
     * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
     * "eular(x,y,z)" means rotation in eular. This means Z-X-Y rotation like Unity.
     * "axis(angle,x,y,z)" means rotation around specified axis. This means angle radians will be rotated around the axis (x,y,z).
     * This angle can be specified with the character "p" or "d".
     * "x(angle)","y(angle)" or "z(angle)" means rotation around unit axis.
     * This angle can be specified with the character "p" or "d".
     * @param input the string to be parsed as angle in 3D.
     * @returns {Quaternion} parsed rotation in Quaternion.
     */},{key:"parseRotation3D",value:function parseRotation3D(input){var reg1=/^ *(x|y|z) *\(([^\(\)]+)\) *$/gm;var reg2=/^ *axis *\(([^\(\),]+),([^\(\),]+),([^\(\),]+),([^\(\),]+)\) *$/gm;var reg3=/^ *([^\(\),]+),([^\(\),]+),([^\(\),]+) *$/gm;var result=reg1.exec(input);if(result){if(result[1]==="x"){return Quaternion.angleAxis(RotationParser.parseAngle(result[2]),Vector3.XUnit);}if(result[1]==="y"){return Quaternion.angleAxis(RotationParser.parseAngle(result[2]),Vector3.YUnit);}if(result[1]==="z"){return Quaternion.angleAxis(RotationParser.parseAngle(result[2]),Vector3.ZUnit);}}var res2=reg2.exec(input);if(res2){var rotation=RotationParser.parseAngle(res2[1]);var x=parseFloat(res2[2]);var y=parseFloat(res2[3]);var z=parseFloat(res2[4]);return Quaternion.angleAxis(rotation,new Vector3(x,y,z));}var res3=reg3.exec(input);if(res3){return Quaternion.euler(RotationParser.parseAngle(res3[1]),RotationParser.parseAngle(res3[2]),RotationParser.parseAngle(res3[3]));}throw new Error("Unknown format for rotation3D:'"+input+"'");}}]);return RotationParser;}();function Angle2DConverter(val){return RotationParser.parseAngle(val);}function BooleanConverter$2(val){if(typeof val==="boolean"){return val;}else if(typeof val==="string"){switch(val){case"true":return true;case"false":return false;default:throw new Error("Invalid string "+val+" for parsing as boolean");}}throw new Error("Parsing failed");}function Color3Converter(val){if(val instanceof Color3){return val;}else if(val instanceof Color4){return new Color3(val.R,val.G,val.B);}else if(typeof val==="string"){return Color3.parse(val);}else{throw new Error(val+" can not be parsed as Color4.");}}function Color4Converter(val){if(val instanceof Color4){return val;}else if(val instanceof Color3){return new Color4(val.R,val.G,val.B,1.0);}else if(typeof val==="string"){return Color4.parse(val);}else{throw new Error(val+" can not be parsed as Color4.");}}function ComponentConverter(val){if(!this.declaration["target"]){throw new Error("Component converter require to be specified target");}if(val instanceof GomlNode){return val.getComponent(this.declaration["target"]);}else if(val instanceof Component){if(val.name===this.declaration["target"]){return val;// check component type?
}else{throw new Error("Specified component must be "+this.declaration["target"]);}}else{return this.tree(val)(this.declaration["target"]).get(0,0,0);}}function EnumConverter(val){if(!this.declaration["table"]){throw new Error("Enum converter needs to be specified table in attribute dictionary");}if(typeof val==="number"){return val;}if(typeof val==="string"){var result=this.declaration["table"][val];if(!result){throw new Error("Specified value is not exisiting in the relation table");}else{return result;}}}function GeometryConverter(val){if(typeof val==="string"){return this.companion.get("GeometryRegistory").getGeometry(val);}else if(val instanceof Geometry){return val;}}function MaterialConverter(val){if(typeof val==="string"){var regex=/\s*new\s*\(\s*([a-zA-Z\d\-]+)\s*\)/;var regexResult=void 0;if(regexResult=regex.exec(val)){this.component[this.declaration["componentBoundTo"]]=null;return this.companion.get("MaterialFactory").instanciate(regexResult[1]);}else{var mc=this.tree(val)("Material").get();this.component[this.declaration["componentBoundTo"]]=mc;return mc.materialPromise;}}}function MaterialTextureConverter(val){var _this90=this;if(val instanceof Texture2D){return function(){return val;};}if(typeof val==="string"){var _ret11=function(){var queryRegex=/^query\((.*)\)$/m;var regexResult=void 0;// Query texture element
if(regexResult=queryRegex.exec(val)){var queried=_this90.tree(regexResult[1]);throw new Error("Not implemeneted yet");}// from backbuffer
var backbufferRegex=/^backbuffer\((.*)\)$/m;if(regexResult=backbufferRegex.exec(val)){return{v:function v(buffers){return buffers[regexResult[1]];}};}var tex=new Texture2D(_this90.companion.get("gl"));ImageResolver$1.resolve(val).then(function(t){tex.update(t);});_this90.companion.get("loader").register(tex.validPromise);return{v:function v(){return tex;}};}();if((typeof _ret11==="undefined"?"undefined":_typeof(_ret11))==="object")return _ret11.v;}}function NumberArrayConverter(val){if(val instanceof Array){return val;}if(typeof val==="string"){var splitted=val.split(",");return splitted.map(function(s){return Number.parseFloat(s);});}}function NumberConverter(val){return Number.parseFloat(val);}function ObjectConverter(val){return val;}function Rotation3Converter(val){if(val instanceof Quaternion){return val;}return RotationParser.parseRotation3D(val);}function StringArrayConverter$2(val){if(Array.isArray(val)){return val;// should we check the elements are actualy string?
}else if(typeof val==="string"){var splitted=val.split(",");return splitted.map(function(s){return s;});}}function StringConverter$2(val){if(typeof val==="string"){return val;}else if(typeof val==="undefined"){return val;}else if(typeof val.toString==="function"){return val.toString();}}function Texture2DConverter(val){var _this91=this;if(typeof val==="string"){var regex=/^query\((.*)\)$/m;var regexResult=void 0;if(regexResult=regex.exec(val)){var queried=this.tree(regexResult[1]);}else{var _ret12=function(){var tex=new Texture2D(_this91.companion.get("gl"));ImageResolver$1.resolve(val).then(function(t){tex.update(t);});return{v:tex};}();if((typeof _ret12==="undefined"?"undefined":_typeof(_ret12))==="object")return _ret12.v;}}}function Vector2Converter(val){if(val instanceof Vector2){return val;}else{return Vector2.parse(val);}}function Vector3Converter(val){if(val instanceof Vector3){return val;}else{return Vector3.parse(val);}}function Vector4Converter(val){if(val instanceof Vector4){return val;}else{return Vector4.parse(val);}}function _toPixel(parentSize,rep){var regex=/(\d+)\s*%/;var regexResult=void 0;if(regexResult=regex.exec(rep)){var percentage=Number.parseFloat(regexResult[1]);return Math.floor(parentSize*percentage*0.01);}else{return Math.floor(Number.parseFloat(rep));}}function ViewportConverter(val){if(val instanceof Rectangle){return val;}if(typeof val==="string"){var canvas=this.companion.get("canvasElement");if(val==="auto"){return new Rectangle(0,0,canvas.width,canvas.height);}else{var sizes=val.split(",");if(sizes.length!==4){throw new Error("Invalid viewport size was specified.");}else{return new Rectangle(_toPixel(canvas.width,sizes[0]),_toPixel(canvas.height,sizes[1]),_toPixel(canvas.width,sizes[2]),_toPixel(canvas.height,sizes[3]));}}}throw new Error(val+" could not be parsed");}obtainGomlInterface.register(function(){return __awaiter(undefined,void 0,void 0,regeneratorRuntime.mark(function _callee34(){var _$ns;return regeneratorRuntime.wrap(function _callee34$(_context109){while(1){switch(_context109.prev=_context109.next){case 0:_$ns=obtainGomlInterface.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");obtainGomlInterface.registerComponent(_$ns("AssetLoadingManager"),AssetLoadingManagerComponent);obtainGomlInterface.registerComponent(_$ns("Camera"),CameraComponent);obtainGomlInterface.registerComponent(_$ns("CanvasInitializer"),CanvasInitializerComponent);obtainGomlInterface.registerComponent(_$ns("Geometry"),GeometryComponent);obtainGomlInterface.registerComponent(_$ns("GeometryRegistory"),GeometryRegistoryComponent);obtainGomlInterface.registerComponent(_$ns("LoopManager"),LoopManagerComponent);obtainGomlInterface.registerComponent(_$ns("Material"),MaterialComponent);obtainGomlInterface.registerComponent(_$ns("MaterialContainer"),MaterialContainerComponent);obtainGomlInterface.registerComponent(_$ns("MaterialImporter"),MaterialImporterComponent);obtainGomlInterface.registerComponent(_$ns("MaterialManager"),MaterialManagerComponent);obtainGomlInterface.registerComponent(_$ns("MeshRenderer"),MeshRenderer);obtainGomlInterface.registerComponent(_$ns("MouseCameraControl"),MouseCameraControlComponent);obtainGomlInterface.registerComponent(_$ns("RenderBuffer"),RenderBufferComponent);obtainGomlInterface.registerComponent(_$ns("Renderer"),RendererComponent);obtainGomlInterface.registerComponent(_$ns("RendererManager"),RendererManagerComponent);obtainGomlInterface.registerComponent(_$ns("RenderQuad"),RenderQuadComponent);obtainGomlInterface.registerComponent(_$ns("RenderScene"),RenderSceneComponent);obtainGomlInterface.registerComponent(_$ns("Scene"),SceneComponent);obtainGomlInterface.registerComponent(_$ns("TextureBuffer"),TextureBufferComponent);obtainGomlInterface.registerComponent(_$ns("Texture"),TextureComponent);obtainGomlInterface.registerComponent(_$ns("Transform"),TransformComponent);obtainGomlInterface.registerConverter(_$ns("Angle2D"),Angle2DConverter);obtainGomlInterface.registerConverter(_$ns("Boolean"),BooleanConverter$2);obtainGomlInterface.registerConverter(_$ns("Color3"),Color3Converter);obtainGomlInterface.registerConverter(_$ns("Color4"),Color4Converter);obtainGomlInterface.registerConverter(_$ns("Component"),ComponentConverter);obtainGomlInterface.registerConverter(_$ns("Enum"),EnumConverter);obtainGomlInterface.registerConverter(_$ns("Geometry"),GeometryConverter);obtainGomlInterface.registerConverter(_$ns("Material"),MaterialConverter);obtainGomlInterface.registerConverter(_$ns("MaterialTexture"),MaterialTextureConverter);obtainGomlInterface.registerConverter(_$ns("NumberArray"),NumberArrayConverter);obtainGomlInterface.registerConverter(_$ns("Number"),NumberConverter);obtainGomlInterface.registerConverter(_$ns("Object"),ObjectConverter);obtainGomlInterface.registerConverter(_$ns("Rotation3"),Rotation3Converter);obtainGomlInterface.registerConverter(_$ns("StringArray"),StringArrayConverter$2);obtainGomlInterface.registerConverter(_$ns("String"),StringConverter$2);obtainGomlInterface.registerConverter(_$ns("Texture2D"),Texture2DConverter);obtainGomlInterface.registerConverter(_$ns("Vector2"),Vector2Converter);obtainGomlInterface.registerConverter(_$ns("Vector3"),Vector3Converter);obtainGomlInterface.registerConverter(_$ns("Vector4"),Vector4Converter);obtainGomlInterface.registerConverter(_$ns("Viewport"),ViewportConverter);obtainGomlInterface.registerNode("goml",["CanvasInitializer","LoopManager","AssetLoadingManager","GeometryRegistory","MaterialManager","RendererManager"]);obtainGomlInterface.registerNode("renderer",["Renderer"]);obtainGomlInterface.registerNode("scene",["Scene"]);obtainGomlInterface.registerNode("camera",["Transform","Camera"]);obtainGomlInterface.registerNode("empty",[]);obtainGomlInterface.registerNode("geometry",["Geometry"]);obtainGomlInterface.registerNode("texture",["Texture"]);obtainGomlInterface.registerNode("mesh",["Transform","MaterialContainer","MeshRenderer"]);obtainGomlInterface.registerNode("material",["Material"]);obtainGomlInterface.registerNode("import-material",["MaterialImporter"]);obtainGomlInterface.registerNode("texture-buffer",["TextureBuffer"]);obtainGomlInterface.registerNode("render-buffer",["RenderBuffer"]);obtainGomlInterface.registerNode("render-scene",["MaterialContainer","RenderScene"]);obtainGomlInterface.registerNode("render-quad",["MaterialContainer","RenderQuad"]);DefaultPrimitives.register();case 57:case"end":return _context109.stop();}}},_callee34,this);}));});obtainGomlInterface.register(function(){return __awaiter(undefined,void 0,void 0,regeneratorRuntime.mark(function _callee35(){var _$ns;return regeneratorRuntime.wrap(function _callee35$(_context110){while(1){switch(_context110.prev=_context110.next){case 0:// REGISTER would be replaced to actual codes to register components.
_$ns=obtainGomlInterface.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");// You can edit code here.
case 1:case"end":return _context110.stop();}}},_callee35,this);}));});//# sourceMappingURL=grimoire.es2016.js.map

//# sourceMappingURL=grimoire.js.map