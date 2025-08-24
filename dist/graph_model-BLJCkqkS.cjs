"use strict";function qh(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var At=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Mh(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gh=1e-7,Kh=1e-4;class Hh{constructor(e,n){this.backend=e,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,n){this.dataIdsCount++,this.data.set(e,n)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class Ha{refCount(e){return fe("refCount")}incRef(e){return fe("incRef")}timerAvailable(){return!0}time(e){return fe("time")}read(e){return fe("read")}readSync(e){return fe("readSync")}readToGPU(e,n){return fe("readToGPU")}numDataIds(){return fe("numDataIds")}disposeData(e,n){return fe("disposeData")}write(e,n,r){return fe("write")}move(e,n,r,s,a){return fe("move")}createTensorFromGPUData(e,n,r){return fe("createTensorFromGPUData")}memory(){return fe("memory")}floatPrecision(){return fe("floatPrecision")}epsilon(){return this.floatPrecision()===32?Gh:Kh}dispose(){return fe("dispose")}}function fe(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ns(t){let e=t.length,n=0;for(;e>0;)n=Math.random()*e|0,e--,pn(t,e,n)}function Xh(t,e){if(t.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${t.length}Second array length was ${e.length}`);let n=t.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,pn(t,n,r),pn(e,n,r)}function Xa(t,e,n){return Math.max(t,Math.min(e,n))}function Za(t){return t%2===0?t:t+1}function pn(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function Ja(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function Zh(t,e){const n=Math.random();return e*n+(1-n)*t}function Jh(t,e){let n=0;for(let r=0;r<t.length;r++){const s=Number(t[r])-Number(e[r]);n+=s*s}return n}function g(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function ue(t,e,n=""){g(Ce(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function Dt(t){g(t!=null,()=>"The input to the tensor constructor must be a non-null value.")}function J(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function Yh(t){return t.length===0}function Ya(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==null&&e[n]!==null&&t[n]!==e[n])return!1;return!0}function Ce(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t){return t%1===0}function Qh(t){if(Math.tanh!=null)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;{const e=Math.exp(2*t);return(e-1)/(e+1)}}function Qa(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function ef(t){const e=new Uint32Array(t);for(let n=0;n<t;++n)e[n]=n;return ns(e),e}function zt(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function eo(t,e=s=>0,n,r){return new Promise((s,a)=>{let o=0;const i=()=>{if(t()){s();return}o++;const u=e(o);if(n!=null&&o>=n){a();return}r!=null?r(i,u):setTimeout(i,u)};i()})}function to(t,e){let n=1,r=-1;for(let a=0;a<t.length;++a)if(t[a]>=0)n*=t[a];else if(t[a]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${a}`);r=a}else if(t[a]<0)throw Error(`Shapes can not be < 0. Found ${t[a]} at dim ${a}`);if(r===-1){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(n===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const s=t.slice();return s[r]=e/n,s}function Qt(t,e){const n=e.length;return t=t==null?e.map((r,s)=>s):[].concat(t),g(t.every(r=>r>=-n&&r<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),g(t.every(r=>Tt(r)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(r=>r<0?n+r:r)}function rs(t,e){const n=[],r=[],s=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||s?null:Qt(e,t).sort();let o=0;for(let i=0;i<t.length;++i){if(a!=null){if(a[o]===i&&t[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${t[i]}' is not 1`);(a[o]==null||a[o]>i)&&t[i]===1&&(n.push(t[i]),r.push(i)),a[o]<=i&&o++}t[i]!==1&&(n.push(t[i]),r.push(i))}return{newShape:n,keptDims:r}}function ss(t,e){return nr(t,e)}function nr(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function no(t,e){for(let n=0;n<t.length;n++){const r=t[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${e} being uploaded contains ${r}.`)}}function ro(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function so(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function hn(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function ao(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function kn(t){return typeof t=="string"||t instanceof String}function oo(t){return typeof t=="boolean"}function as(t){return typeof t=="number"}function en(t){return Array.isArray(t)?en(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":as(t)?"float32":kn(t)?"string":oo(t)?"bool":"float32"}function at(t){return!!(t&&t.constructor&&t.call&&t.apply)}function io(t,e){for(let n=e;n<t;++n)if(t%n===0)return n;return t}function tn(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n}function uo(t,e,n,r=!1){const s=new Array;if(e.length===1){const a=e[0]*(r?2:1);for(let o=0;o<a;o++)s[o]=n[t+o]}else{const a=e[0],o=e.slice(1),i=o.reduce((u,c)=>u*c)*(r?2:1);for(let u=0;u<a;u++)s[u]=uo(t+u*i,o,n,r)}return s}function rt(t,e,n=!1){if(t.length===0)return e[0];const r=t.reduce((s,a)=>s*a)*(n?2:1);if(r===0)return[];if(r!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return uo(0,t,e,n)}function co(t,e){if(Array.isArray(t))return t;if(e==="float32")return t instanceof Float32Array?t:new Float32Array(t);if(e==="int32")return t instanceof Int32Array?t:new Int32Array(t);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(t));throw new Error(`Unknown dtype ${e}`)}function rr(t,e){const n=En(t,e);for(let r=0;r<n.length;r++)n[r]=1;return n}function En(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function lo(t,e){const n=t.reduce((r,s)=>r*s,1);if(e==null||e==="float32")return rt(t,new Float32Array(n));if(e==="int32")return rt(t,new Int32Array(n));if(e==="bool")return rt(t,new Uint8Array(n));throw new Error(`Unknown data type ${e}`)}function Ne(t){t.forEach(e=>{g(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function po(t,e,n){if(e===0)return 0;if(e===1)return t[0];let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=n[s]*t[s];return r}function ho(t,e,n){if(e===0)return[];if(e===1)return[t];const r=new Array(e);for(let s=0;s<r.length-1;++s)r[s]=Math.floor(t/n[s]),t-=r[s]*n[s];return r[r.length-1]=t,r}function Xe(t){return t&&t.then&&typeof t.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ta="tfjsflags";class fo{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=tf,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&(C().getBool("IS_TEST")||C().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,r){if(this.flagRegistry[e]={evaluationFn:n,setHook:r},this.urlFlags[e]!=null){const s=this.urlFlags[e];C().getBool("IS_TEST")||C().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${s}.`),this.set(e,s)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(Xe(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);Ta in e&&e[Ta].split(",").forEach(r=>{const[s,a]=r.split(":");this.urlFlags[s]=rf(s,a)})}}function tf(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...r)=>(nf(e,r[0],r[1]),r.join("="))),e}function nf(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function rf(t,e){const n=e.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:e}function C(){return exports.ENV}exports.ENV=null;function sf(t){exports.ENV=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Tr;function mo(){if(Tr==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");Tr=t}return Tr}function af(){const t=mo();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function os(t,e){const n=af();if(n.has(t))return n.get(t);{const r=e();return n.set(t,r),n.get(t)}}const go="Abs",yo="Acos",bo="Acosh",is="Add",wo="AddN",No="All",To="Any",So="ArgMax",vo="ArgMin",ko="Asin",Eo="Asinh",$o="Atan",_o="Atanh",xo="Atan2",Io="AvgPool",of="AvgPoolGrad",Ao="AvgPool3D",uf="AvgPool3DGrad",Do="BatchMatMul",Oo="BatchToSpaceND",Fo="Bincount",Co="BitwiseAnd",cf="BroadcastTo",Bo="BroadcastArgs",us="Cast",Ro="Ceil",Po="ClipByValue",Lo="Complex",zo="ComplexAbs",Vo="Concat",Uo="Conv2D",jo="Conv2DBackpropFilter",qo="Conv2DBackpropInput",Wo="Conv3D",lf="Conv3DBackpropFilterV2",Mo="Conv3DBackpropInputV2",Go="Cos",Ko="Cosh",Ho="Cumprod",Xo="Cumsum",Zo="CropAndResize",Jo="DenseBincount",Yo="DepthToSpace",Qo="DepthwiseConv2dNative",ei="DepthwiseConv2dNativeBackpropFilter",ti="DepthwiseConv2dNativeBackpropInput",ni="Diag",ri="Dilation2D",pf="Dilation2DBackpropInput",hf="Dilation2DBackpropFilter",cs="Draw",si="RealDiv",ai="Einsum",oi="Elu",ff="EluGrad",ii="Erf",ui="Equal",ci="Exp",li="ExpandDims",pi="Expm1",hi="FFT",fi="Fill",mi="FlipLeftRight",di="Floor",gi="FloorDiv",yi="FusedBatchNorm",bi="GatherV2",wi="GatherNd",Ni="Greater",Ti="GreaterEqual",ls="Identity",Si="IFFT",vi="Imag",ki="IsFinite",Ei="IsInf",$i="IsNan",_i="LeakyRelu",xi="Less",Ii="LessEqual",Ai="LinSpace",Di="Log",Oi="Log1p",Fi="LogicalAnd",Ci="LogicalNot",Bi="LogicalOr",mf="LogicalXor",df="LogSoftmax",gf="LowerBound",Ri="LRN",yf="LRNGrad",bf="MatrixBandPart",Pi="Max",Li="Maximum",zi="MaxPool",wf="MaxPoolGrad",Vi="MaxPool3D",Nf="MaxPool3DGrad",Ui="MaxPoolWithArgmax",ji="Mean",qi="Min",Wi="Minimum",Mi="MirrorPad",Gi="Mod",Ki="Multinomial",Hi="Multiply",Xi="Neg",Zi="NotEqual",Ji="NonMaxSuppressionV3",Yi="NonMaxSuppressionV4",Qi="NonMaxSuppressionV5",eu="OnesLike",tu="OneHot",nu="Pack",ru="PadV2",Tf="Pool",su="Pow",au="Prelu",ou="Prod",iu="RaggedGather",uu="RaggedRange",cu="RaggedTensorToTensor",lu="Range",pu="Real",hu="Reciprocal",fu="Relu",mu="Reshape",du="ResizeNearestNeighbor",Sf="ResizeNearestNeighborGrad",gu="ResizeBilinear",vf="ResizeBilinearGrad",yu="Relu6",bu="Reverse",wu="Round",Nu="Rsqrt",Tu="ScatterNd",Su="TensorScatterUpdate",vu="SearchSorted",ku="Select",Eu="Selu",$u="Slice",_u="Sin",xu="Sinh",Iu="Sign",Au="Sigmoid",Du="Softplus",Ou="Sqrt",Fu="Sum",Cu="SpaceToBatchND",Bu="SplitV",Ru="Softmax",Pu="SparseFillEmptyRows",Lu="SparseReshape",zu="SparseSegmentMean",Vu="SparseSegmentSum",Uu="SparseToDense",ju="SquaredDifference",kf="Square",qu="StaticRegexReplace",Wu="StridedSlice",Mu="StringNGrams",Gu="StringSplit",Ku="StringToHashBucketFast",Hu="Sub",Xu="Tan",Zu="Tanh",ps="Tile",Ju="TopK",Yu="Transform",Vn="Transpose",Qu="Unique",ec="Unpack",tc="UnsortedSegmentSum",Ef="UpperBound",nc="ZerosLike",rc="Step",_r="FromPixels",sc="RotateWithOffset",xr="_FusedMatMul",Ir="FusedConv2D",Ar="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function et(...t){C().getBool("IS_TEST")||C().getBool("PROD")||console.warn(...t)}function $f(...t){C().getBool("IS_TEST")||C().getBool("PROD")||console.log(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wt=os("kernelRegistry",()=>new Map),fn=os("gradRegistry",()=>new Map);function mn(t,e){const n=hs(t,e);return Wt.get(n)}function Dr(t){return fn.get(t)}function Wn(t){const e=Wt.entries(),n=[];for(;;){const{done:r,value:s}=e.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===t&&n.push(o)}return n}function ac(t){const{kernelName:e,backendName:n}=t,r=hs(e,n);Wt.has(r)&&et(`The kernel '${e}' for backend '${n}' is already registered`),Wt.set(r,t)}function _f(t){const{kernelName:e}=t;fn.has(e)&&C().getBool("DEBUG")&&et(`Overriding the gradient for '${e}'`),fn.set(e,t)}function xf(t,e){const n=hs(t,e);if(!Wt.has(n))throw new Error(`The kernel '${t}' for backend '${e}' is not registered`);Wt.delete(n)}function If(t){if(!fn.has(t))throw new Error(`The gradient '${t}' for backend is not registered`);fn.delete(t)}function Af(t,e){Wn(t).forEach(r=>{const s=Object.assign({},r,{backendName:e});ac(s)})}function hs(t,e){return`${e}_${t}`}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oc(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}var ic=H,Ee=null;try{Ee=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function H(t,e,n){this.low=t|0,this.high=e|0,this.unsigned=!!n}H.prototype.__isLong__;Object.defineProperty(H.prototype,"__isLong__",{value:!0});function Te(t){return(t&&t.__isLong__)===!0}H.isLong=Te;var Sa={},va={};function Ot(t,e){var n,r,s;return e?(t>>>=0,(s=0<=t&&t<256)&&(r=va[t],r)?r:(n=X(t,(t|0)<0?-1:0,!0),s&&(va[t]=n),n)):(t|=0,(s=-128<=t&&t<128)&&(r=Sa[t],r)?r:(n=X(t,t<0?-1:0,!1),s&&(Sa[t]=n),n))}H.fromInt=Ot;function $e(t,e){if(isNaN(t))return e?yt:_e;if(e){if(t<0)return yt;if(t>=uc)return pc}else{if(t<=-Ea)return ye;if(t+1>=Ea)return lc}return t<0?$e(-t,e).neg():X(t%Mt|0,t/Mt|0,e)}H.fromNumber=$e;function X(t,e,n){return new H(t,e,n)}H.fromBits=X;var Mn=Math.pow;function fs(t,e,n){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return _e;if(typeof e=="number"?(n=e,e=!1):e=!!e,n=n||10,n<2||36<n)throw RangeError("radix");var r;if((r=t.indexOf("-"))>0)throw Error("interior hyphen");if(r===0)return fs(t.substring(1),e,n).neg();for(var s=$e(Mn(n,8)),a=_e,o=0;o<t.length;o+=8){var i=Math.min(8,t.length-o),u=parseInt(t.substring(o,o+i),n);if(i<8){var c=$e(Mn(n,i));a=a.mul(c).add($e(u))}else a=a.mul(s),a=a.add($e(u))}return a.unsigned=e,a}H.fromString=fs;function Be(t,e){return typeof t=="number"?$e(t,e):typeof t=="string"?fs(t,e):X(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}H.fromValue=Be;var ka=65536,Df=1<<24,Mt=ka*ka,uc=Mt*Mt,Ea=uc/2,$a=Ot(Df),_e=Ot(0);H.ZERO=_e;var yt=Ot(0,!0);H.UZERO=yt;var Lt=Ot(1);H.ONE=Lt;var cc=Ot(1,!0);H.UONE=cc;var Or=Ot(-1);H.NEG_ONE=Or;var lc=X(-1,2147483647,!1);H.MAX_VALUE=lc;var pc=X(-1,-1,!0);H.MAX_UNSIGNED_VALUE=pc;var ye=X(0,-2147483648,!1);H.MIN_VALUE=ye;var E=H.prototype;E.toInt=function(){return this.unsigned?this.low>>>0:this.low};E.toNumber=function(){return this.unsigned?(this.high>>>0)*Mt+(this.low>>>0):this.high*Mt+(this.low>>>0)};E.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ye)){var n=$e(e),r=this.div(n),s=r.mul(n).sub(this);return r.toString(e)+s.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var a=$e(Mn(e,6),this.unsigned),o=this,i="";;){var u=o.div(a),c=o.sub(u.mul(a)).toInt()>>>0,p=c.toString(e);if(o=u,o.isZero())return p+i;for(;p.length<6;)p="0"+p;i=""+p+i}};E.getHighBits=function(){return this.high};E.getHighBitsUnsigned=function(){return this.high>>>0};E.getLowBits=function(){return this.low};E.getLowBitsUnsigned=function(){return this.low>>>0};E.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ye)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,n=31;n>0&&!(e&1<<n);n--);return this.high!=0?n+33:n+1};E.isZero=function(){return this.high===0&&this.low===0};E.eqz=E.isZero;E.isNegative=function(){return!this.unsigned&&this.high<0};E.isPositive=function(){return this.unsigned||this.high>=0};E.isOdd=function(){return(this.low&1)===1};E.isEven=function(){return(this.low&1)===0};E.equals=function(e){return Te(e)||(e=Be(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};E.eq=E.equals;E.notEquals=function(e){return!this.eq(e)};E.neq=E.notEquals;E.ne=E.notEquals;E.lessThan=function(e){return this.comp(e)<0};E.lt=E.lessThan;E.lessThanOrEqual=function(e){return this.comp(e)<=0};E.lte=E.lessThanOrEqual;E.le=E.lessThanOrEqual;E.greaterThan=function(e){return this.comp(e)>0};E.gt=E.greaterThan;E.greaterThanOrEqual=function(e){return this.comp(e)>=0};E.gte=E.greaterThanOrEqual;E.ge=E.greaterThanOrEqual;E.compare=function(e){if(Te(e)||(e=Be(e)),this.eq(e))return 0;var n=this.isNegative(),r=e.isNegative();return n&&!r?-1:!n&&r?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};E.comp=E.compare;E.negate=function(){return!this.unsigned&&this.eq(ye)?ye:this.not().add(Lt)};E.neg=E.negate;E.add=function(e){Te(e)||(e=Be(e));var n=this.high>>>16,r=this.high&65535,s=this.low>>>16,a=this.low&65535,o=e.high>>>16,i=e.high&65535,u=e.low>>>16,c=e.low&65535,p=0,h=0,f=0,d=0;return d+=a+c,f+=d>>>16,d&=65535,f+=s+u,h+=f>>>16,f&=65535,h+=r+i,p+=h>>>16,h&=65535,p+=n+o,p&=65535,X(f<<16|d,p<<16|h,this.unsigned)};E.subtract=function(e){return Te(e)||(e=Be(e)),this.add(e.neg())};E.sub=E.subtract;E.multiply=function(e){if(this.isZero())return _e;if(Te(e)||(e=Be(e)),Ee){var n=Ee.mul(this.low,this.high,e.low,e.high);return X(n,Ee.get_high(),this.unsigned)}if(e.isZero())return _e;if(this.eq(ye))return e.isOdd()?ye:_e;if(e.eq(ye))return this.isOdd()?ye:_e;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt($a)&&e.lt($a))return $e(this.toNumber()*e.toNumber(),this.unsigned);var r=this.high>>>16,s=this.high&65535,a=this.low>>>16,o=this.low&65535,i=e.high>>>16,u=e.high&65535,c=e.low>>>16,p=e.low&65535,h=0,f=0,d=0,y=0;return y+=o*p,d+=y>>>16,y&=65535,d+=a*p,f+=d>>>16,d&=65535,d+=o*c,f+=d>>>16,d&=65535,f+=s*p,h+=f>>>16,f&=65535,f+=a*c,h+=f>>>16,f&=65535,f+=o*u,h+=f>>>16,f&=65535,h+=r*p+s*c+a*u+o*i,h&=65535,X(d<<16|y,h<<16|f,this.unsigned)};E.mul=E.multiply;E.divide=function(e){if(Te(e)||(e=Be(e)),e.isZero())throw Error("division by zero");if(Ee){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var n=(this.unsigned?Ee.div_u:Ee.div_s)(this.low,this.high,e.low,e.high);return X(n,Ee.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?yt:_e;var r,s,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return yt;if(e.gt(this.shru(1)))return cc;a=yt}else{if(this.eq(ye)){if(e.eq(Lt)||e.eq(Or))return ye;if(e.eq(ye))return Lt;var o=this.shr(1);return r=o.div(e).shl(1),r.eq(_e)?e.isNegative()?Lt:Or:(s=this.sub(e.mul(r)),a=r.add(s.div(e)),a)}else if(e.eq(ye))return this.unsigned?yt:_e;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=_e}for(s=this;s.gte(e);){r=Math.max(1,Math.floor(s.toNumber()/e.toNumber()));for(var i=Math.ceil(Math.log(r)/Math.LN2),u=i<=48?1:Mn(2,i-48),c=$e(r),p=c.mul(e);p.isNegative()||p.gt(s);)r-=u,c=$e(r,this.unsigned),p=c.mul(e);c.isZero()&&(c=Lt),a=a.add(c),s=s.sub(p)}return a};E.div=E.divide;E.modulo=function(e){if(Te(e)||(e=Be(e)),Ee){var n=(this.unsigned?Ee.rem_u:Ee.rem_s)(this.low,this.high,e.low,e.high);return X(n,Ee.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};E.mod=E.modulo;E.rem=E.modulo;E.not=function(){return X(~this.low,~this.high,this.unsigned)};E.and=function(e){return Te(e)||(e=Be(e)),X(this.low&e.low,this.high&e.high,this.unsigned)};E.or=function(e){return Te(e)||(e=Be(e)),X(this.low|e.low,this.high|e.high,this.unsigned)};E.xor=function(e){return Te(e)||(e=Be(e)),X(this.low^e.low,this.high^e.high,this.unsigned)};E.shiftLeft=function(e){return Te(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?X(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):X(0,this.low<<e-32,this.unsigned)};E.shl=E.shiftLeft;E.shiftRight=function(e){return Te(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?X(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):X(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};E.shr=E.shiftRight;E.shiftRightUnsigned=function(e){if(Te(e)&&(e=e.toInt()),e&=63,e===0)return this;var n=this.high;if(e<32){var r=this.low;return X(r>>>e|n<<32-e,n>>>e,this.unsigned)}else return e===32?X(n,0,this.unsigned):X(n>>>e-32,0,this.unsigned)};E.shru=E.shiftRightUnsigned;E.shr_u=E.shiftRightUnsigned;E.toSigned=function(){return this.unsigned?X(this.low,this.high,!1):this};E.toUnsigned=function(){return this.unsigned?this:X(this.low,this.high,!0)};E.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};E.toBytesLE=function(){var e=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};E.toBytesBE=function(){var e=this.high,n=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};H.fromBytes=function(e,n,r){return r?H.fromBytesLE(e,n):H.fromBytesBE(e,n)};H.fromBytesLE=function(e,n){return new H(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)};H.fromBytesBE=function(e,n){return new H(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)};const hc=Wh(ic),Of=qh({__proto__:null,default:hc},[ic]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mt=hc||Of;function $n(t){return mt.fromString(t,!0,16)}const fc=$n("c3a5c85c97cb3127"),ft=$n("b492b66fbe98f273"),le=$n("9ae16a3b2f90404f");function Fr(t){return t.xor(t.shru(47))}function mc(t,e,n){const r=t.slice(e,e+n);return mt.fromBytes(Array.from(r),!0,!0)}function W(t,e){return mc(t,e,8)}function _a(t,e){return mc(t,e,4)}function se(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function st(t,e,n=$n("9ddfea08eb382d69")){let r=t.xor(e).mul(n);r=r.xor(r.shru(47));let s=e.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function Ff(t,e,n,r,s,a){s=s.add(t),a=se(a.add(s).add(r),21);const o=s;return s=s.add(e),s=s.add(n),a=a.add(se(s,44)),[s.add(r),a.add(o)]}function Pn(t,e,n,r){return Ff(W(t,e),W(t,e+8),W(t,e+16),W(t,e+24),n,r)}function Cf(t,e=t.length){if(e>=8){const n=le.add(e*2),r=W(t,0).add(le),s=W(t,e-8),a=se(s,37).mul(n).add(r),o=se(r,25).add(s).mul(n);return st(a,o,n)}if(e>=4){const n=le.add(e*2),r=_a(t,0);return st(r.shl(3).add(e),_a(t,e-4),n)}if(e>0){const n=t[0],r=t[e>>1],s=t[e-1],a=n+(r<<8),o=e+(s<<2);return Fr(le.mul(a).xor(fc.mul(o))).mul(le)}return le}function Bf(t,e=t.length){const n=le.add(e*2),r=W(t,0).mul(ft),s=W(t,8),a=W(t,e-8).mul(n),o=W(t,e-16).mul(le);return st(se(r.add(s),43).add(se(a,30)).add(o),r.add(se(s.add(le),18)).add(a),n)}function Rf(t,e=t.length){const n=le.add(e*2),r=W(t,0).mul(le),s=W(t,8),a=W(t,e-8).mul(n),o=W(t,e-16).mul(le),i=se(r.add(s),43).add(se(a,30)).add(o),u=st(i,r.add(se(s.add(le),18)).add(a),n),c=W(t,16).mul(n),p=W(t,24),h=i.add(W(t,e-32)).mul(n),f=u.add(W(t,e-24)).mul(n);return st(se(c.add(p),43).add(se(h,30)).add(f),c.add(se(p.add(r),18)).add(h),n)}function dc(t,e=t.length){const n=mt.fromNumber(81,!0);if(e<=32)return e<=16?Cf(t,e):Bf(t,e);if(e<=64)return Rf(t,e);let r=n,s=n.mul(ft).add(113),a=Fr(s.mul(le).add(113)).mul(le),o=[mt.UZERO,mt.UZERO],i=[mt.UZERO,mt.UZERO];r=r.mul(le).add(W(t,0));let u=0;const c=(e-1>>6)*64,p=c+(e-1&63)-63;do r=se(r.add(s).add(o[0]).add(W(t,u+8)),37).mul(ft),s=se(s.add(o[1]).add(W(t,u+48)),42).mul(ft),r=r.xor(i[1]),s=s.add(o[0]).add(W(t,u+40)),a=se(a.add(i[0]),33).mul(ft),o=Pn(t,u,o[1].mul(ft),r.add(i[0])),i=Pn(t,u+32,a.add(i[1]),s.add(W(t,u+16))),[a,r]=[r,a],u+=64;while(u!==c);const h=ft.add(a.and(255).shl(1));return u=p,i[0]=i[0].add(e-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=se(r.add(s).add(o[0]).add(W(t,u+8)),37).mul(h),s=se(s.add(o[1]).add(W(t,u+48)),42).mul(h),r=r.xor(i[1].mul(9)),s=s.add(o[0].mul(9).add(W(t,u+40))),a=se(a.add(i[0]),33).mul(h),o=Pn(t,u,o[1].mul(h),r.add(i[0])),i=Pn(t,u+32,a.add(i[1]),s.add(W(t,u+16))),[a,r]=[r,a],st(st(o[0],i[0],h).add(Fr(s).mul(fc)).add(a),st(o[1],i[1],h).add(r),h)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gc(t,e){return e==="string"?sr(t):_n([t],e)}function Pf(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function _n(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=St(t)),C().getBool("DEBUG")&&no(t,e),Pf(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let r=0;r<n.length;++r)Math.round(t[r])!==0&&(n[r]=1);return n}else throw new Error(`Unknown data type ${e}`)}function Gt(){return C().platform.now()}function yc(t,e){return C().platform.fetch(t,e)}function sr(t,e="utf-8"){return e=e||"utf-8",C().platform.encode(t,e)}function Gn(t,e="utf-8"){return e=e||"utf-8",C().platform.decode(t,e)}function we(t){return C().platform.isTypedArray!=null?C().platform.isTypedArray(t):oc(t)}function St(t,e=[],n=!1){if(e==null&&(e=[]),typeof t=="boolean"||typeof t=="number"||typeof t=="string"||Xe(t)||t==null||we(t)&&n)e.push(t);else if(Array.isArray(t)||we(t))for(let r=0;r<t.length;++r)St(t[r],e,n);else{let r=-1;for(const s of Object.keys(t))/^([1-9]+[0-9]*|0)$/.test(s)&&(r=Math.max(r,Number(s)));for(let s=0;s<=r;s++)St(t[s],e,n)}return e}const Lf=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Ce,arraysEqualWithNull:Ya,assert:g,assertNonNegativeIntegerDimensions:Ne,assertNonNull:Dt,assertShapesMatch:ue,bytesFromStringArray:ao,bytesPerElement:hn,checkConversionForErrors:no,clamp:Xa,computeStrides:tn,convertBackendValuesAndArrayBuffer:co,createScalarValue:gc,createShuffledIndices:ef,decodeString:Gn,distSquared:Jh,encodeString:sr,fetch:yc,fingerPrint64:dc,flatten:St,getArrayFromDType:nr,getTypedArrayFromDType:ss,hasEncodingLoss:so,hexToLong:$n,indexToLoc:ho,inferDtype:en,inferFromImplicitShape:to,isBoolean:oo,isFunction:at,isInt:Tt,isNumber:as,isPromise:Xe,isScalarShape:Yh,isString:kn,isTypedArray:we,isValidDtype:ro,locToIndex:po,makeOnesTypedArray:rr,makeZerosNestedTypedArray:lo,makeZerosTypedArray:En,nearestDivisor:io,nearestLargerEven:Za,now:Gt,parseAxisParam:Qt,randUniform:Zh,repeatedTry:eo,rightPad:zt,shuffle:ns,shuffleCombo:Xh,sizeFromShape:J,sizeToSquarishShape:Qa,squeezeShape:rs,sum:Ja,swap:pn,tanh:Qh,toNestedArray:rt,toTypedArray:_n},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zf{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new Uf)}profileKernel(e,n,r){let s;const a=()=>{s=r()};let o;const i=Gt();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const c of s)c.dataSync();o=Promise.resolve({kernelMs:Gt()-i})}if(C().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<s.length;c++){const p=s[c];p.data().then(h=>{Vf(h,p.dtype,e)})}return{kernelName:e,outputs:s,inputs:n,timeMs:o.then(c=>c.kernelMs),extraInfo:o.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:r,timeMs:s,inputs:a,extraInfo:o}=e;r.forEach(i=>{Promise.all([i.data(),s,o]).then(u=>{this.logger.logKernelProfile(n,i,u[0],u[1],a,u[2])})})}}function Vf(t,e,n){if(e!=="float32")return!1;for(let r=0;r<t.length;r++){const s=t[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${n}'`),!0}return!1}class Uf{logKernelProfile(e,n,r,s,a,o){const i=typeof s=="number"?zt(`${s}ms`,9):s.error,u=zt(e,25),c=n.rank,p=n.size,h=zt(n.shape.toString(),14);let f="";for(const d in a){const y=a[d];if(y!=null){const T=y.shape||n.shape,N=T.length;f+=`${d}: ${N}D ${N>0?T:""} `}}console.log(`%c${u}	%c${i}	%c${c}D ${h}	%c${p}	%c${f}	%c${o}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jf(t,e,n){const r={},s={};for(let u=0;u<e.length;u++)r[e[u].id]=!0;for(let u=0;u<t.length;u++){const c=t[u],p=c.inputs;for(const h in p){const f=p[h];let d=!1;for(let y=0;y<e.length;y++)if(r[f.id]){c.outputs.forEach(T=>r[T.id]=!0),d=!0,s[c.id]=!0;break}if(d)break}}const a={};a[n.id]=!0;const o={};for(let u=t.length-1;u>=0;u--){const c=t[u],p=c.inputs;for(let h=0;h<c.outputs.length;h++)if(a[c.outputs[h].id]){for(const f in p)a[p[f].id]=!0,o[c.id]=!0;break}}const i=[];for(let u=0;u<t.length;u++){const c=t[u];if(s[c.id]&&o[c.id]){const p={};for(const f in c.inputs){const d=c.inputs[f];r[d.id]&&(p[f]=d)}const h=Object.assign({},c);h.inputs=p,h.outputs=c.outputs,i.push(h)}}return i}function qf(t,e,n,r){for(let s=e.length-1;s>=0;s--){const a=e[s],o=[];if(a.outputs.forEach(u=>{const c=t[u.id];c!=null?o.push(c):o.push(null)}),a.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const u in a.inputs){if(!(u in i))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(i)}.`);const c=n(()=>i[u]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${c.dtype}'`);const p=a.inputs[u];if(!Ce(c.shape,p.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${u}' has shape '${c.shape}', which does not match the shape of the input '${p.shape}'`);if(t[p.id]==null)t[p.id]=c;else{const h=t[p.id];t[p.id]=r(h,c),h.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xa=20,an=3,Sr=7;function Wf(t,e,n,r){const s=tn(e),a=Mf(t,e,n,s),o=e.length,i=Un(t,e,n,s,a),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(i.map(c=>"    "+c).join(`
`)),u.join(`
`)}function Mf(t,e,n,r){const s=J(e),a=r[r.length-1],o=new Array(a).fill(0),i=e.length,u=n==="complex64"?cn(t):t;if(i>1)for(let c=0;c<s/a;c++){const p=c*a;for(let h=0;h<a;h++)o[h]=Math.max(o[h],un(u[p+h],0,n).length)}return o}function un(t,e,n){let r;return Array.isArray(t)?r=`${parseFloat(t[0].toFixed(Sr))} + ${parseFloat(t[1].toFixed(Sr))}j`:kn(t)?r=`'${t}'`:n==="bool"?r=bc(t):r=parseFloat(t.toFixed(Sr)).toString(),zt(r,e)}function bc(t){return t===0?"false":"true"}function Un(t,e,n,r,s,a=!0){const o=n==="complex64"?2:1,i=e[0],u=e.length;if(u===0){if(n==="complex64"){const T=cn(t);return[un(T[0],0,n)]}return n==="bool"?[bc(t[0])]:[t[0].toString()]}if(u===1){if(i>xa){const N=an*o;let S=Array.from(t.slice(0,N)),I=Array.from(t.slice((i-an)*o,i*o));return n==="complex64"&&(S=cn(S),I=cn(I)),["["+S.map((A,k)=>un(A,s[k],n)).join(", ")+", ..., "+I.map((A,k)=>un(A,s[i-an+k],n)).join(", ")+"]"]}return["["+(n==="complex64"?cn(t):Array.from(t)).map((N,S)=>un(N,s[S],n)).join(", ")+"]"]}const c=e.slice(1),p=r.slice(1),h=r[0]*o,f=[];if(i>xa){for(let T=0;T<an;T++){const N=T*h,S=N+h;f.push(...Un(t.slice(N,S),c,n,p,s,!1))}f.push("...");for(let T=i-an;T<i;T++){const N=T*h,S=N+h;f.push(...Un(t.slice(N,S),c,n,p,s,T===i-1))}}else for(let T=0;T<i;T++){const N=T*h,S=N+h;f.push(...Un(t.slice(N,S),c,n,p,s,T===i-1))}const d=u===2?",":"";f[0]="["+(i>0?f[0]+d:"");for(let T=1;T<f.length-1;T++)f[T]=" "+f[T]+d;let y=`,
`;for(let T=2;T<u;T++)y+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(a?"":y),f}function cn(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kn{constructor(e,n,r){if(this.dtype=n,this.shape=e.slice(),this.size=J(e),r!=null){const s=r.length;g(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||nr(n,this.size),this.strides=tn(e)}set(e,...n){n.length===0&&(n=[0]),g(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const r=this.locToIndex(n);this.values[r]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const s of e){if(s<0||s>=this.shape[n]){const a=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(a)}n++}let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=this.strides[s]*e[s];return this.values[r]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let r=0;r<n.length-1;++r)n[r]=Math.floor(e/this.strides[r]),e-=n[r]*this.strides[r];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return Ae().makeTensor(this.values,this.shape,this.dtype)}}let Ae=null,Rt=null;function Gf(t){Ae=t}function Kf(t){Rt=t}class te{constructor(e,n,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=J(e),this.strides=tn(e),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return Rt.buffer(this.shape,this.dtype,e)}bufferSync(){return Rt.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return rt(this.shape,e,this.dtype==="complex64")}arraySync(){return rt(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=Ae().read(this.dataId);if(this.dtype==="string"){const n=await e;try{return n.map(r=>Gn(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Ae().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Ae().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>Gn(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await Ae().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Ae().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Rt.print(this,e)}clone(){return this.throwIfDisposed(),Rt.clone(this)}toString(e=!1){const n=this.dataSync();return Wf(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Rt.cast(this,e)}variable(e=!0,n,r){return this.throwIfDisposed(),Ae().makeVariable(this,e,n,r)}}Object.defineProperty(te,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function ms(){return os("Tensor",()=>te)}ms();class dn extends te{constructor(e,n,r,s){super(e.shape,e.dtype,e.dataId,s),this.trainable=n,this.name=r}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Ce(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Ae().disposeTensor(this),this.dataId=e.dataId,Ae().incRef(this,null)}dispose(){Ae().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(dn,Symbol.hasInstance,{value:t=>t instanceof te&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */exports.Rank=void 0;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(exports.Rank||(exports.Rank={}));var Cr;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(Cr||(Cr={}));var Br;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(Br||(Br={}));var Rr;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(Rr||(Rr={}));var Pr;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(Pr||(Pr={}));const Hf={float32:Rr,int32:Cr,bool:Br,complex64:Pr};function ds(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return Hf[t][e]}function Xf(t){return ds(t,"int32")}function wc(t){return t!=null&&typeof t=="object"&&"texture"in t&&t.texture instanceof WebGLTexture}function Nc(t){return typeof GPUBuffer<"u"&&t!=null&&typeof t=="object"&&"buffer"in t&&t.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ee(t,e){if(t.dtype===e.dtype)return[t,e];const n=ds(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function Tc(t,e){g(t.dtype===e.dtype,()=>`The dtypes of the first(${t.dtype}) and second(${e.dtype}) input must match`)}function Sc(t,e){return e.some(n=>n.id===t.id)}function ar(t){const e=[];return vc(t,e,new Set),e}function vc(t,e,n){if(t==null)return;if(t instanceof te){e.push(t);return}if(!Zf(t))return;const r=t;for(const s in r){const a=r[s];n.has(a)||(n.add(a),vc(a,e,n))}}function Zf(t){return Array.isArray(t)||typeof t=="object"}const Jf=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:Tc,getTensorsInContainer:ar,isTensorInList:Sc,makeTypesMatch:ee},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vr(t){return t.kernelName!=null}class Ia{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Kt{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ia}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,r=1){return e in this.registryFactory?(et(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:r},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:r}=this.initializeBackend(e);if(!(r?await n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new zf(this.backendInstance),!0}setupRegisteredKernels(){Wn(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){Wn(e).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const r=n.factory();if(r&&!(r instanceof Ha)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,a=r.then(o=>s<this.pendingBackendInitId?!1:(this.registry[e]=o,this.pendingBackendInit=null,!0)).catch(o=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,et(`Initialization of backend ${e} failed`),et(o.stack||o.message)),!1));return this.pendingBackendInit=a,{success:a,asyncInit:!0}}else return this.registry[e]=r,{success:!0,asyncInit:!1}}catch(r){return et(`Initialization of backend ${e} failed`),et(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const r=e[n],{success:s,asyncInit:a}=this.initializeBackend(r);if(a||s)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const r=this.state.tensorInfo.get(n),s=r.backend,a=this.readSync(n),o=s.refCount(n);s.disposeData(n,!0),r.backend=e,e.move(n,a,r.shape,r.dtype,o),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let r=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=n(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(e,n,r){e();try{const s=r();return n(),s}catch(s){throw n(),s}}nextTensorId(){return Kt.nextTensorId++}nextVariableId(){return Kt.nextVariableId++}clone(e){const n=w.runKernel(ls,{x:e}),r={x:e},s=o=>({x:()=>{const i="float32",u={x:o},c={dtype:i};return w.runKernel(us,u,c)}}),a=[];return this.addTapeNode(this.state.activeScope.name,r,[n],s,a,{}),n}runKernel(e,n,r){if(this.backendName==null&&this.backend,!(mn(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,r){const s=this.backend.numDataIds();let a=0;r.forEach(u=>{a+=u.dtype==="complex64"?3:1});const o=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=s-n-a-o;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let n,r=[];const s=this.isTapeOn(),a=this.state.numBytes,o=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let u;const c=vr(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(vr(e)){const{kernelName:y,inputs:T,attrs:N}=e;this.backendName==null&&this.backend;const S=mn(y,this.backendName);g(S!=null,()=>`Cannot find registered kernel '${y}' for backend '${this.backendName}'`),i=()=>{const I=this.backend.numDataIds();u=S.kernelFunc({inputs:T,attrs:N,backend:this.backend});const A=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(y,I,A);const k=A.map(_=>_.rank!=null?_:this.makeTensorFromTensorInfo(_));if(s){const _=this.getTensorsForGradient(y,T,k);r=this.saveTensorsForBackwardMode(_)}return k}}else{const{forwardFunc:y}=e,T=N=>{s&&(r=N.map(S=>this.keep(this.clone(S))))};i=()=>{const N=this.backend.numDataIds();u=this.tidy(()=>y(this.backend,T));const S=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,N,S),S}}const{inputs:p,attrs:h}=e,f=vr(e)?null:e.backwardsFunc;let d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(d=this.profiler.profileKernel(c,p,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),n=d.outputs)}),s&&this.addTapeNode(c,p,n,f,r,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-a,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-o,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(y=>p[y]!=null?p[y].shape:null),outputShapes:n.map(y=>y.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(u)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(e,n,r){const s=Dr(e);if(s!=null){const a=s.inputsToSave||[],o=s.outputsToSave||[];let i;s.saveAllInputs?(g(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(c=>n[c])):i=a.map(c=>n[c]);const u=r.filter((c,p)=>o[p]);return i.concat(u)}return[]}makeTensor(e,n,r,s){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let a=e;r==="string"&&kn(e[0])&&(a=e.map(u=>sr(u)));const o=s.write(a,n,r),i=new te(n,r,o,this.nextTensorId());if(this.trackTensor(i,s),r==="string"){const u=this.state.tensorInfo.get(o),c=ao(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return i}makeTensorFromDataId(e,n,r,s){r=r||"float32";const a={dataId:e,shape:n,dtype:r};return this.makeTensorFromTensorInfo(a,s)}makeTensorFromTensorInfo(e,n){const{dataId:r,shape:s,dtype:a}=e,o=new te(s,a,r,this.nextTensorId());return this.trackTensor(o,n),o}makeVariable(e,n=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==e.dtype&&(e=e.cast(s));const a=new dn(e,n,r,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let r=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(r=e.size*hn(e.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:r})),e instanceof dn||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const r=e.size*hn(e.dtype);this.state.numBytes-=r}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const n=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,r,s,a,o){const i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:r,saved:a},u=Dr(e);u!=null&&(s=u.gradFunc),s!=null&&(i.gradient=c=>(c=c.map((p,h)=>{if(p==null){const f=r[h],d=En(f.size,f.dtype);return this.makeTensor(d,f.shape,f.dtype)}return p}),s(c.length>1?c:c[0],a,o))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=ar(e),r=new Set(n.map(a=>a.id));for(let a=0;a<this.state.activeScope.track.length;a++){const o=this.state.activeScope.track[a];!o.kept&&!r.has(o.id)&&o.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(a=>{!a.kept&&a.scopeId===s.id&&this.track(a)})}gradients(e,n,r,s=!1){if(g(n.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));g(a instanceof te,()=>"The result y returned by f() must be a tensor.");const o=jf(this.state.activeTape,n,a);if(!s&&o.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[a.id]=r??Yf(a.shape),qf(i,o,c=>this.tidy(c),Qf);const u=n.map(c=>i[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const p of c.saved)p.dispose()}),this.state.activeTape=null),{value:a,grads:u}})}customGrad(e){return g(at(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{g(n.every(i=>i instanceof te),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};n.forEach((i,u)=>{s[u]=i});const a=(i,u)=>(r=e(...n,u),g(r.value instanceof te,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),g(at(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),o=(i,u)=>{const c=r.gradFunc(i,u),p=Array.isArray(c)?c:[c];g(p.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),g(p.every(f=>f instanceof te),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const h={};return p.forEach((f,d)=>{h[d]=()=>f}),h};return this.runKernelFunc({forwardFunc:a,backwardsFunc:o,inputs:s})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}async time(e){const n=Gt(),r=await this.backend.time(e);return r.wallMs=Gt()-n,r}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ia;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Kt.nextTensorId=0;Kt.nextVariableId=0;function Yf(t){const e=rr(J(t),"float32");return w.makeTensor(e,t,"float32")}function kc(){const t=mo();if(t._tfengine==null){const e=new fo(t);t._tfengine=new Kt(e)}return sf(t._tfengine.ENV),Gf(()=>t._tfengine),t._tfengine}const w=kc();function Qf(t,e){const n={a:t,b:e};return w.runKernel(is,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(){return typeof navigator<"u"&&navigator!=null}let Lr;function tm(t){Lr=t}function Ec(t){if(Lr!==void 0)return Lr;if(t||em()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function gs(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const nm=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:gs,isMobile:Ec,mockIsMobile:tm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const he=C();he.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});he.registerFlag("IS_BROWSER",()=>gs());he.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");he.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));he.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));he.registerFlag("PROD",()=>!1);he.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>he.getBool("DEBUG"));he.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);he.registerFlag("IS_TEST",()=>!1);he.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>he.getBool("DEBUG"));he.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);he.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);he.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Je(t,e){let n=t;if(we(t))return e==="string"?[]:[t.length];if(wc(t)){const s=t.channels||"RGBA";return[t.height,t.width*s.length]}else if(Nc(t))return[t.buffer.size/(e==null?4:hn(e))];if(!Array.isArray(t))return[];const r=[];for(;Array.isArray(n)||we(n)&&e!=="string";)r.push(n.length),n=n[0];return Array.isArray(t)&&C().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&$c(t,r,[]),r}function $c(t,e,n){if(n=n||[],!Array.isArray(t)&&!we(t)){g(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}g(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),g(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const r=e.slice(1);for(let s=0;s<t.length;++s)$c(t[s],r,n.concat(s))}function Aa(t,e,n,r){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${r}' must be ${t} tensor, but got ${e} tensor`)}}function m(t,e,n,r="numeric"){if(t instanceof ms())return Aa(r,t.dtype,e,n),t;let s=en(t);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Aa(r,s,e,n),t==null||!we(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const u=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${u}'`)}const a=Je(t,s);!we(t)&&!Array.isArray(t)&&(t=[t]);const i=s!=="string"?_n(t,s):St(t,[],!0);return w.makeTensor(i,a,s)}function gn(t,e,n,r="numeric"){if(!Array.isArray(t))throw new Error(`Argument ${e} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return t.map((a,o)=>m(a,`${e}[${o}]`,n,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys="__op";function b(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const r=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+ys;const s=(...a)=>{w.startScope(n);try{const o=r(...a);return Xe(o)&&console.error("Cannot return a Promise inside of tidy."),w.endScope(o),o}catch(o){throw w.endScope(null),o}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(t,e){const n=m(t,"real","complex"),r=m(e,"imag","complex");ue(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return w.runKernel(Lo,s)}const Ze=b({complex_:rm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ct(t,e,n,r){if(r==null)r=en(t);else if(r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Nc(t)||wc(t)){if(r!=="float32"&&r!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return w.backend.createTensorFromGPUData(t,e||n,r)}if(!we(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Ne(e);const s=J(e),a=J(n);g(s===a,()=>`Based on the provided shape, [${e}], the tensor should have ${s} values but has ${a}`);for(let o=0;o<n.length;++o){const i=n[o],u=o===n.length-1?i!==J(e.slice(o)):!0;g(n[o]===e[o]||!u,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!we(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=r!=="string"?_n(t,r):St(t,[],!0),w.makeTensor(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oe(t,e,n){const r=Je(t,n);return ct(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vt={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Re{static join(e){return new Re(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(r=>we(r)?r.buffer:r),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let n=0;for(let r=0;r<e.length;r++){const s=e[r];r!==e.length-1&&s.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const a=n+s.byteLength;this.shards.push({buffer:s,start:n,end:a}),n=a}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,n=isNaN(Number(n))?0:n,e=Math.max(0,e),n=Math.min(this.byteLength,n),n<=e)return new ArrayBuffer(0);const r=this.findShardForByte(e);if(r===-1)throw new Error(`Could not find start shard for byte ${e}`);const s=n-e,a=new ArrayBuffer(s),o=new Uint8Array(a);let i=0;for(let u=r;u<this.shards.length;u++){const c=this.shards[u],h=e+i-c.start,f=i,y=Math.min(n,c.end)-c.start,T=new Uint8Array(c.buffer,h,y-h);if(o.set(T,f),i+=T.length,n<c.end)break}return a}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function n(s){return e<s.start?-1:e>=s.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const r=sm(this.shards,n);return r===-1?-1:(this.previousShardIndex=r,this.previousShardIndex)}}function sm(t,e){let n=0,r=t.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,a=e(t[s]);if(a===0)return s;a<0?r=s:n=s+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(){C().set("PROD",!0)}function om(){C().set("DEBUG",!0)}function im(){C().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function um(t){C().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(t+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function cm(){w.disposeVariables()}function lm(){return w}function pm(){return w.memory()}function hm(t){return w.profile(t)}function V(t,e){return w.tidy(t,e)}function pe(t){ar(t).forEach(n=>n.dispose())}function De(t){return w.keep(t)}function fm(t){return w.time(t)}function mm(t){return w.setBackend(t)}function dm(){return w.ready()}function _c(){return w.backendName}function gm(t){w.removeBackend(t)}function ym(t){return w.findBackend(t)}function bm(t){return w.findBackendFactory(t)}function wm(t,e,n=1){return w.registerBackend(t,e,n)}function xc(){return w.backend}function Nm(t,e){C().setPlatform(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ot=4;async function Ic(t,e){const n=[],r=[],s=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);for(let o=0;o<s.length;++o){const i=s[o],u=Array.isArray(t)?t[o].tensor:t[i];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${u.dtype}`);const c={name:i,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){const p=new Promise(async h=>{const f=await u.bytes(),d=f.reduce((N,S)=>N+S.length,0)+ot*f.length,y=new Uint8Array(d);let T=0;for(let N=0;N<f.length;N++){const S=f[N],I=new Uint8Array(new Uint32Array([S.length]).buffer);y.set(I,T),T+=ot,y.set(S,T),T+=S.length}h(y)});r.push(p)}else r.push(u.data());e!=null&&(c.group=e),n.push(c)}const a=await Promise.all(r);return{data:vm(a),specs:n}}function bs(t,e){const n=new Re(t),r={};let s=0;for(const a of e){const o=Tm(a,(i,u)=>n.slice(s+i,s+u));r[a.name]=Ac(a,n.slice(s,s+o)),s+=o}return r}function Tm(t,e){const n=J(t.shape);let r;if("quantization"in t){const s=t.quantization;r=vt[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=ot+new Uint32Array(e(s,s+ot))[0];return s}else r=vt[t.dtype];return n*r}async function Sm(t,e){const n=J(t.shape);let r;if("quantization"in t){const s=t.quantization;r=vt[s.dtype]}else if(t.dtype==="string"){let s=0;for(let a=0;a<n;a++)s+=ot+new Uint32Array(await e(s,s+ot))[0];return s}else r=vt[t.dtype];return n*r}function Ac(t,e){const n=t.name,r=t.dtype,s=t.shape,a=J(s);let o,i=0;if("quantization"in t){const u=t.quantization;if(u.dtype==="uint8"||u.dtype==="uint16"){if(!("min"in u&&"scale"in u))throw new Error(`Weight ${t.name} with quantization ${u.dtype} doesn't have corresponding metadata min and scale.`)}else if(u.dtype==="float16"){if(r!=="float32")throw new Error(`Weight ${t.name} is quantized with ${u.dtype} which only supports weights of type float32 not ${r}.`)}else throw new Error(`Weight ${t.name} has unknown quantization dtype ${u.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const c=vt[u.dtype],p=u.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(r==="float32")if(u.dtype==="uint8"||u.dtype==="uint16"){o=new Float32Array(p.length);for(let h=0;h<p.length;h++){const f=p[h];o[h]=f*u.scale+u.min}}else if(u.dtype==="float16")o=Im()(p);else throw new Error(`Unsupported quantization type ${u.dtype} for weight type float32.`);else if(r==="int32"){if(u.dtype!=="uint8"&&u.dtype!=="uint16")throw new Error(`Unsupported quantization type ${u.dtype} for weight type int32.`);o=new Int32Array(p.length);for(let h=0;h<p.length;h++){const f=p[h];o[h]=Math.round(f*u.scale+u.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*c}else if(r==="string"){const u=J(t.shape);o=[];for(let c=0;c<u;c++){const p=new Uint32Array(e.slice(i,i+ot))[0];i+=ot;const h=new Uint8Array(e.slice(i,i+p));o.push(h),i+=p}}else{const u=vt[r];if(r==="float32")o=new Float32Array(e);else if(r==="int32")o=new Int32Array(e);else if(r==="bool")o=new Uint8Array(e);else if(r==="complex64"){o=new Float32Array(e);const c=new Float32Array(o.length/2),p=new Float32Array(o.length/2);for(let y=0;y<c.length;y++)c[y]=o[y*2],p[y]=o[y*2+1];const h=Oe(c,s,"float32"),f=Oe(p,s,"float32"),d=Ze(h,f);return h.dispose(),f.dispose(),d}else throw new Error(`Unsupported dtype in weight '${n}': ${r}`);i+=a*u}return Oe(o,s,r)}async function Da(t,e,n){let r=new Uint8Array(e);for(;r.byteLength<n;){const{done:s,value:a}=await t.read();if(s&&a==null){const i=n-r.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const o=new Uint8Array(r.length+a.byteLength);o.set(r,0),o.set(new Uint8Array(a),r.length),r=o}return r.buffer}async function Dc(t,e){const n={},r=t.getReader();let s=new ArrayBuffer(0);for(const a of e){const o=await Sm(a,async(c,p)=>(s=await Da(r,s,p),s.slice(c,p)));s=await Da(r,s,o);const i=s.slice(0,o);s=s.slice(o);const u=Ac(a,i);if(n[a.name]=u,_c()==="webgpu"){const c=xc();"uploadToGPU"in c&&J(u.shape)>=C().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&c.uploadToGPU(u.dataId)}}return n}function vm(t){if(t===null)throw new Error(`Invalid input value: ${JSON.stringify(t)}`);let e=0;const n=[];t.forEach(a=>{if(e+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${a.constructor.name}`)});const r=new Uint8Array(e);let s=0;return n.forEach(a=>{r.set(new Uint8Array(a.buffer),s),s+=a.byteLength}),r.buffer}const ws=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Oa(t){return ws?Buffer.byteLength(t,"utf8"):new Blob([t]).size}function km(t){if(ws)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let r=0,s=e.length;r<s;r++)n+=String.fromCharCode(e[r]);return btoa(n)}function Em(t){if(ws){const r=Buffer.from(t,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;++r)n.set([e.charCodeAt(r)],r);return n.buffer}function Oc(t){return Re.join(t)}function Fa(t){const e="/";for(t=t.trim();t.endsWith(e);)t=t.slice(0,t.length-1);const n=t.split(e);return n[n.length-1]}function Fc(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(n.initializerSignature=t.initializerSignature),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}function Ns(t,e,n){const r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(r.trainingConfig=t.trainingConfig),t.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=e,r.weightData=n}return t.signature!=null&&(r.signature=t.signature),t.userDefinedMetadata!=null&&(r.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(r.modelInitializer=t.modelInitializer),t.initializerSignature!=null&&(r.initializerSignature=t.initializerSignature),r}async function Ts(t,e){let n,r;return t.weightsManifest!=null&&([n,r]=await e(t.weightsManifest)),Ns(t,n,r)}function xn(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:Oa(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:Oa(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:new Re(t.weightData).byteLength}}function Hn(t){const e=[];for(const n of t)e.push(...n.weights);return e}function $m(){const t=n=>{let r=n<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},e=new Uint32Array(2048);e[0]=0;for(let n=1;n<1024;n++)e[n]=t(n);for(let n=1024;n<2048;n++)e[n]=939524096+(n-1024<<13);return e}function _m(){const t=new Uint32Array(64);t[0]=0,t[31]=1199570944,t[32]=2147483648,t[63]=3347054592;for(let e=1;e<31;e++)t[e]=e<<23;for(let e=33;e<63;e++)t[e]=2147483648+(e-32<<23);return t}function xm(){const t=new Uint32Array(64);for(let e=0;e<64;e++)t[e]=1024;return t[0]=t[32]=0,t}function Im(){const t=$m(),e=_m(),n=xm();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const i=r[o],u=t[n[i>>10]+(i&1023)]+e[i>>10];a[o]=u}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Y.instance==null&&(Y.instance=new Y),Y.instance}static registerSaveRouter(e){Y.getInstance().saveRouters.push(e)}static registerLoadRouter(e){Y.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return Y.getHandlers(e,"save")}static getLoadHandlers(e,n){return Y.getHandlers(e,"load",n)}static getHandlers(e,n,r){const s=[];return(n==="load"?Y.getInstance().loadRouters:Y.getInstance().saveRouters).forEach(o=>{const i=o(e,r);i!==null&&s.push(i)}),s}}const Am=t=>Y.registerSaveRouter(t),Dm=t=>Y.registerLoadRouter(t),Cc=t=>Y.getSaveHandlers(t),Bc=(t,e)=>Y.getLoadHandlers(t,e);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zr="tensorflowjs",Vr=1,bt="models_store",tt="model_info_store";function Rc(){if(!C().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Ur(t){const e=t.result;e.createObjectStore(bt,{keyPath:"modelPath"}),e.createObjectStore(tt,{keyPath:"modelPath"})}class kt{constructor(e){if(this.indexedDB=Rc(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,n){return new Promise((r,s)=>{const a=this.indexedDB.open(zr,Vr);a.onupgradeneeded=()=>Ur(a),a.onsuccess=()=>{const o=a.result;if(n==null){const i=o.transaction(bt,"readonly"),c=i.objectStore(bt).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return o.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(c.result.modelArtifacts)},c.onerror=p=>(o.close(),s(c.error)),i.oncomplete=()=>o.close()}else{n.weightData=Re.join(n.weightData);const i=xn(n),u=o.transaction(tt,"readwrite");let c=u.objectStore(tt),p;try{p=c.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(f){return s(f)}let h;p.onsuccess=()=>{h=o.transaction(bt,"readwrite");const f=h.objectStore(bt);let d;try{d=f.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(y){return s(y)}d.onsuccess=()=>r({modelArtifactsInfo:i}),d.onerror=y=>{c=u.objectStore(tt);const T=c.delete(this.modelPath);T.onsuccess=()=>(o.close(),s(d.error)),T.onerror=N=>(o.close(),s(d.error))}},p.onerror=f=>(o.close(),s(p.error)),u.oncomplete=()=>{h==null?o.close():h.oncomplete=()=>o.close()}}},a.onerror=o=>s(a.error)})}}kt.URL_SCHEME="indexeddb://";const Pc=t=>C().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(kt.URL_SCHEME)?Om(t.slice(kt.URL_SCHEME.length)):null;Y.registerSaveRouter(Pc);Y.registerLoadRouter(Pc);function Om(t){return new kt(t)}function Fm(t){return t.startsWith(kt.URL_SCHEME)?t.slice(kt.URL_SCHEME.length):t}class Cm{constructor(){this.indexedDB=Rc()}async listModels(){return new Promise((e,n)=>{const r=this.indexedDB.open(zr,Vr);r.onupgradeneeded=()=>Ur(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(tt,"readonly"),i=a.objectStore(tt).getAll();i.onsuccess=()=>{const u={};for(const c of i.result)u[c.modelPath]=c.modelArtifactsInfo;e(u)},i.onerror=u=>(s.close(),n(i.error)),a.oncomplete=()=>s.close()},r.onerror=s=>n(r.error)})}async removeModel(e){return e=Fm(e),new Promise((n,r)=>{const s=this.indexedDB.open(zr,Vr);s.onupgradeneeded=()=>Ur(s),s.onsuccess=()=>{const a=s.result,o=a.transaction(tt,"readwrite"),i=o.objectStore(tt),u=i.get(e);let c;u.onsuccess=()=>{if(u.result==null)return a.close(),r(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const p=i.delete(e),h=()=>{c=a.transaction(bt,"readwrite");const d=c.objectStore(bt).delete(e);d.onsuccess=()=>n(u.result.modelArtifactsInfo),d.onerror=y=>r(u.error)};p.onsuccess=h,p.onerror=f=>(h(),a.close(),r(u.error))}},u.onerror=p=>(a.close(),r(u.error)),o.oncomplete=()=>{c==null?a.close():c.oncomplete=()=>a.close()}},s.onerror=a=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Me="/",Pt="tensorflowjs_models",Lc="info",Bm="model_topology",Rm="weight_specs",Pm="weight_data",Lm="model_metadata";function zc(t){return{info:[Pt,t,Lc].join(Me),topology:[Pt,t,Bm].join(Me),weightSpecs:[Pt,t,Rm].join(Me),weightData:[Pt,t,Pm].join(Me),modelMetadata:[Pt,t,Lm].join(Me)}}function Vc(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function zm(t){const e=t.split(Me);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(Me)}function Vm(t){return t.startsWith(Et.URL_SCHEME)?t.slice(Et.URL_SCHEME.length):t}class Et{constructor(e){if(!C().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=zc(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),r=JSON.stringify(e.weightSpecs),s=xn(e),a=Re.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,km(a));const o={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:s}}catch{throw Vc(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=s;const a=this.LS.getItem(this.keys.modelMetadata);if(a!=null){const i=JSON.parse(a);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const o=this.LS.getItem(this.keys.weightData);if(o==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Em(o),n}}Et.URL_SCHEME="localstorage://";const Uc=t=>C().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(Et.URL_SCHEME)?Um(t.slice(Et.URL_SCHEME.length)):null;Y.registerSaveRouter(Uc);Y.registerLoadRouter(Uc);function Um(t){return new Et(t)}class jm{constructor(){g(C().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),g(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},n=Pt+Me,r=Me+Lc;for(let s=0;s<this.LS.length;++s){const a=this.LS.key(s);if(a.startsWith(n)&&a.endsWith(r)){const o=zm(a);e[o]=JSON.parse(this.LS.getItem(a))}}return e}async removeModel(e){e=Vm(e);const n=zc(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return Vc(n),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vt="://";class ce{constructor(){this.managers={}}static getInstance(){return ce.instance==null&&(ce.instance=new ce),ce.instance}static registerManager(e,n){g(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Vt)&&(e=e.slice(0,e.indexOf(Vt))),g(e.length>0,()=>"scheme must not be an empty string.");const r=ce.getInstance();g(r.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),r.managers[e]=n}static getManager(e){const n=ce.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(ce.getInstance().managers)}}function jn(t){if(t.indexOf(Vt)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ce.getSchemes().join(",")}`);return{scheme:t.split(Vt)[0],path:t.split(Vt)[1]}}async function jc(t,e,n=!1){g(t!==e,()=>`Old path and new path are the same: '${t}'`);const r=Y.getLoadHandlers(t);g(r.length>0,()=>`Copying failed because no load handler is found for source URL ${t}.`),g(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${t}.`);const s=r[0],a=Y.getSaveHandlers(e);g(a.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),g(a.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${e}.`);const o=a[0],i=jn(t).scheme,u=jn(t).path,c=i===jn(t).scheme,p=await s.load();n&&c&&await ce.getManager(i).removeModel(u);const h=await o.save(p);return n&&!c&&await ce.getManager(i).removeModel(u),h.modelArtifactsInfo}async function qm(){const t=ce.getSchemes(),e={};for(const n of t){const r=await ce.getManager(n).listModels();for(const s in r){const a=n+Vt+s;e[a]=r[s]}}return e}async function Wm(t){const e=jn(t);return ce.getManager(e.scheme).removeModel(e.path)}async function Mm(t,e){return jc(t,e,!1)}async function Gm(t,e){return jc(t,e,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Km{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}setTimeoutCustom(e,n){if(typeof window>"u"||!C().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,n);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return oc(e)}}if(C().get("IS_BROWSER")){C().setPlatform("browser",new Km);try{ce.registerManager(Et.URL_SCHEME,new jm)}catch{}try{ce.registerManager(kt.URL_SCHEME,new Cm)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hm={importFetch:()=>require("node-fetch")};let kr;class Xm{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return C().global.fetch!=null?C().global.fetch(e,n):(kr==null&&(kr=Hm.importFetch()),kr(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}C().get("IS_NODE")&&!C().get("IS_BROWSER")&&C().setPlatform("node",new Xm);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pe(t,e="float32",n){return e=e||"float32",Ne(t),new Kn(t,e,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zm(t,e){const n=m(t,"x","cast");if(!ro(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:e};return w.runKernel(us,r,s)}const Q=b({cast_:Zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jm(t){const n={x:m(t,"x","clone","string_or_numeric")};return w.runKernel(ls,n)}const Ke=b({clone_:Jm});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ss(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */kc();const Ym={buffer:Pe,cast:Q,clone:Ke,print:Ss};Kf(Ym);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(t,e){let n=m(t,"a","add"),r=m(e,"b","add");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(is,s)}const F=b({add_:Qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(t,e){let n=m(t,"a","floorDiv"),r=m(e,"b","floorDiv");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(gi,s)}const vs=b({floorDiv_:ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(t,e){let n=m(t,"a","div"),r=m(e,"b","div");if([n,r]=ee(n,r),n.dtype==="int32"&&r.dtype==="int32")return vs(n,r);const s={a:n,b:r},a={};return w.runKernel(si,s,a)}const G=b({div_:td});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(t,e){let n=m(t,"a","mul"),r=m(e,"b","mul");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(Hi,s)}const $=b({mul_:nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rd(t){const e=m(t,"x","abs");if(e.dtype==="complex64"){const n={x:e};return w.runKernel(zo,n)}else{const n={x:e};return w.runKernel(go,n)}}const ge=b({abs_:rd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(t){const n={x:m(t,"x","acos")};return w.runKernel(yo,n)}const qc=b({acos_:sd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(t){const n={x:m(t,"x","acosh")};return w.runKernel(bo,n)}const Wc=b({acosh_:ad});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(t){g(Array.isArray(t),()=>"The argument passed to tf.addN() must be a list of tensors"),g(t.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${t.length}`);const e=t.map((s,a)=>m(s,`tensors${a}`,"addN")),n=e[0];e.forEach(s=>{if(s.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(s=>{if(!Ce(s.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=e;return w.runKernel(wo,r)}const Mc=b({addN_:od});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(t,e=null,n=!1){const s={x:m(t,"x","all","bool")},a={axis:e,keepDims:n};return w.runKernel(No,s,a)}const Gc=b({all_:id});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ud(t,e=null,n=!1){const s={x:m(t,"x","any","bool")},a={axis:e,keepDims:n};return w.runKernel(To,s,a)}const Kc=b({any_:ud});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(t,e=0){const r={x:m(t,"x","argMax")},s={axis:e};return w.runKernel(So,r,s)}const Hc=b({argMax_:cd});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ld(t,e=0){const r={x:m(t,"x","argMin")},s={axis:e};return w.runKernel(vo,r,s)}const Xc=b({argMin_:ld});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(t){const n={x:m(t,"x","asin")};return w.runKernel(ko,n)}const Zc=b({asin_:pd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hd(t){const n={x:m(t,"x","asinh")};return w.runKernel(Eo,n)}const Jc=b({asinh_:hd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(t){const n={x:m(t,"x","atan")};return w.runKernel($o,n)}const Yc=b({atan_:fd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(t,e){let n=m(t,"a","atan2"),r=m(e,"b","atan2");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(xo,s)}const Qc=b({atan2_:md});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(t){const n={x:m(t,"x","atanh")};return w.runKernel(_o,n)}const el=b({atanh_:dd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gd(t,e,n,r,s="NHWC",a){const o=t[3],i=[...e,o],u=rl(s);return In(t,i,n,a,r,null,null,u)}function tl(t,e,n,r,s,a,o="channelsLast"){const[i,u]=yn(e);let c;if(o==="channelsLast")c=[i,u,t[3],t[3]];else if(o==="channelsFirst")c=[i,u,t[1],t[1]];else throw new Error(`Unknown dataFormat ${o}`);return In(t,c,n,r,s,a,!1,o)}function yd(t,e,n,r,s,a,o="NDHWC"){const[i,u,c]=jr(e);let p,h;if(o==="NDHWC")h="channelsLast",p=[i,u,c,t[4],t[4]];else if(o==="NCDHW")h="channelsFirst",p=[i,u,c,t[1],t[1]];else throw new Error(`Unknown dataFormat ${o}`);return nl(t,p,n,r,s,!1,h,a)}function In(t,e,n,r,s,a,o=!1,i="channelsLast"){let[u,c,p,h]=[-1,-1,-1,-1];if(i==="channelsLast")[u,c,p,h]=t;else if(i==="channelsFirst")[u,h,c,p]=t;else throw new Error(`Unknown dataFormat ${i}`);const[f,d,,y]=e,[T,N]=yn(n),[S,I]=yn(r),A=Ut(f,S),k=Ut(d,I),{padInfo:_,outHeight:x,outWidth:D}=Nd(s,c,p,T,N,A,k,a,i),O=o?y*h:y;let B;return i==="channelsFirst"?B=[u,O,x,D]:i==="channelsLast"&&(B=[u,x,D,O]),{batchSize:u,dataFormat:i,inHeight:c,inWidth:p,inChannels:h,outHeight:x,outWidth:D,outChannels:O,padInfo:_,strideHeight:T,strideWidth:N,filterHeight:f,filterWidth:d,effectiveFilterHeight:A,effectiveFilterWidth:k,dilationHeight:S,dilationWidth:I,inShape:t,outShape:B,filterShape:e}}function nl(t,e,n,r,s,a=!1,o="channelsLast",i){let[u,c,p,h,f]=[-1,-1,-1,-1,-1];if(o==="channelsLast")[u,c,p,h,f]=t;else if(o==="channelsFirst")[u,f,c,p,h]=t;else throw new Error(`Unknown dataFormat ${o}`);const[d,y,T,,N]=e,[S,I,A]=jr(n),[k,_,x]=jr(r),D=Ut(d,k),O=Ut(y,_),B=Ut(T,x),{padInfo:L,outDepth:P,outHeight:K,outWidth:j}=Td(s,c,p,h,S,I,A,D,O,B,i),Z=a?N*f:N;let re;return o==="channelsFirst"?re=[u,Z,P,K,j]:o==="channelsLast"&&(re=[u,P,K,j,Z]),{batchSize:u,dataFormat:o,inDepth:c,inHeight:p,inWidth:h,inChannels:f,outDepth:P,outHeight:K,outWidth:j,outChannels:Z,padInfo:L,strideDepth:S,strideHeight:I,strideWidth:A,filterDepth:d,filterHeight:y,filterWidth:T,effectiveFilterDepth:D,effectiveFilterHeight:O,effectiveFilterWidth:B,dilationDepth:k,dilationHeight:_,dilationWidth:x,inShape:t,outShape:re,filterShape:e}}function bd(t,e,n,r,s){r==null&&(r=ks(t,e,n));const a=t[0],o=t[1],i=bn((a-e+2*r)/n+1,s),u=bn((o-e+2*r)/n+1,s);return[i,u]}function wd(t,e,n,r,s,a){s==null&&(s=ks(t,e[0],r[0]));const o=[0,0,0,n];for(let i=0;i<3;i++)t[i]+2*s>=e[i]&&(o[i]=bn((t[i]-e[i]+2*s)/r[i]+1,a));return o}function ks(t,e,n,r=1){const s=Ut(e,r);return Math.floor((t[0]*(n-1)-n+s)/2)}function yn(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function jr(t){return typeof t=="number"?[t,t,t]:t}function Ut(t,e){return e<=1?t:t+(t-1)*(e-1)}function Nd(t,e,n,r,s,a,o,i,u){let c,p,h;if(typeof t=="number"){c={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const d=bd([e,n],a,r,t,i);p=d[0],h=d[1]}else if(t==="same"){p=Math.ceil(e/r),h=Math.ceil(n/s);const f=Math.max(0,(p-1)*r+a-e),d=Math.max(0,(h-1)*s+o-n),y=Math.floor(f/2),T=f-y,N=Math.floor(d/2),S=d-N;c={top:y,bottom:T,left:N,right:S,type:"SAME"}}else if(t==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((e-a+1)/r),h=Math.ceil((n-o+1)/s);else if(typeof t=="object"){const f=u==="channelsLast"?t[1][0]:t[2][0],d=u==="channelsLast"?t[1][1]:t[2][1],y=u==="channelsLast"?t[2][0]:t[3][0],T=u==="channelsLast"?t[2][1]:t[3][1];c={top:f,bottom:d,left:y,right:T,type:f===0&&d===0&&y===0&&T===0?"VALID":"EXPLICIT"},p=bn((e-a+f+d)/r+1,i),h=bn((n-o+y+T)/s+1,i)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:c,outHeight:p,outWidth:h}}function Td(t,e,n,r,s,a,o,i,u,c,p){let h,f,d,y;if(t==="valid"&&(t=0),typeof t=="number"){h={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const N=wd([e,n,r,1],[i,u,c],1,[s,a,o],t,p);f=N[0],d=N[1],y=N[2]}else if(t==="same"){f=Math.ceil(e/s),d=Math.ceil(n/a),y=Math.ceil(r/o);const T=(f-1)*s+i-e,N=(d-1)*a+u-n,S=(y-1)*o+c-r,I=Math.floor(T/2),A=T-I,k=Math.floor(N/2),_=N-k,x=Math.floor(S/2),D=S-x;h={top:k,bottom:_,left:x,right:D,front:I,back:A,type:"SAME"}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:h,outDepth:f,outHeight:d,outWidth:y}}function bn(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function wn(t){const[e,n,r]=yn(t);return e===1&&n===1&&r===1}function Ye(t,e){return wn(t)||wn(e)}function $t(t){return yn(t).every(e=>e>0)}function rl(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function Ie(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")g(Tt(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(r=>{r.forEach(s=>{g(Tt(s),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${s}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sd(t,e){const r={x:m(t,"x","reshape","string_or_numeric")},s={shape:e};return w.runKernel(mu,r,s)}const v=b({reshape_:Sd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vd(t,e,n,r,s){const a=m(t,"x","avgPool","float32"),o=1;g(Ye(n,o),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);let i=a,u=!1;a.rank===3&&(u=!0,i=v(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Ie("avgPool",r,s);const c={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s};let h=w.runKernel(Io,c,p);return h=Q(h,a.dtype),u?v(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const Es=b({avgPool_:vd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(t,e,n,r,s,a="NDHWC"){const o=m(t,"x","avgPool3d","float32");let i=o,u=!1;o.rank===4&&(u=!0,i=v(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),g(a==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),g(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),Ie("avgPool3d",r,s);const c={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a};let h=w.runKernel(Ao,c,p);return h=Q(h,i.dtype),u?v(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const sl=b({avgPool3d_:kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(t,e=0){g(t.length>=1,()=>"Pass at least one tensor to concat");const n=gn(t,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(a=>{if(a.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${a.dtype}. `)}),n.length===1)return Ke(n[0]);const r=n,s={axis:e};return w.runKernel(Vo,r,s)}const ie=b({concat_:Ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(t,e,n=!1,r=!1){let s=m(t,"a","matMul"),a=m(e,"b","matMul");[s,a]=ee(s,a);const o={a:s,b:a},i={transposeA:n,transposeB:r};return w.runKernel(Do,o,i)}const U=b({matMul_:$d});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _d(t){const n={x:m(t,"x","sigmoid","float32")};return w.runKernel(Au,n)}const wt=b({sigmoid_:_d});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xd(t,e,n){const r=m(t,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:e,size:n};return w.runKernel($u,s,a)}const q=b({slice_:xd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Id(t){const n={x:m(t,"x","tanh","float32")};return w.runKernel(Zu,n)}const Xn=b({tanh_:Id});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(t,e,n,r,s,a){const o=m(t,"forgetBias","basicLSTMCell"),i=m(e,"lstmKernel","basicLSTMCell"),u=m(n,"lstmBias","basicLSTMCell"),c=m(r,"data","basicLSTMCell"),p=m(s,"c","basicLSTMCell"),h=m(a,"h","basicLSTMCell"),f=ie([c,h],1),d=U(f,i),y=F(d,u),T=y.shape[0],N=y.shape[1]/4,S=[T,N],I=q(y,[0,0],S),A=q(y,[0,N],S),k=q(y,[0,N*2],S),_=q(y,[0,N*3],S),x=F($(wt(I),Xn(A)),$(p,wt(F(o,k)))),D=$(Xn(x),wt(_));return[x,D]}const al=b({basicLSTMCell_:Ad});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dd(t,e,n){const r=m(t,"x","batchToSpaceND"),s=e.reduce((i,u)=>i*u);g(r.rank>=1+e.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${e.length}`),g(n.length===e.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${e.length}`),g(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${s}`);const a={x:r},o={blockShape:e,crops:n};return w.runKernel(Oo,a,o)}const $s=b({batchToSpaceND_:Dd});function Od(t){let e;return t.rank===0||t.rank===1?e=v(t,[1,1,1,t.size]):t.rank===2?e=v(t,[1,1,t.shape[0],t.shape[1]]):t.rank===3?e=v(t,[1,t.shape[0],t.shape[1],t.shape[2]]):e=t,e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fd(t,e,n,r,s,a){a==null&&(a=.001);const o=m(t,"x","batchNorm"),i=m(e,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;s!=null&&(c=m(s,"scale","batchNorm"));let p;r!=null&&(p=m(r,"offset","batchNorm")),g(i.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g(p==null||i.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g(c==null||i.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:Od(o),scale:c,offset:p,mean:i,variance:u},d={varianceEpsilon:a},y=w.runKernel(yi,f,d);return v(y,o.shape)}const An=b({batchNorm_:Fd});function Cd(t,e,n,r,s,a){const o=m(t,"x","batchNorm"),i=m(e,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;s!=null&&(c=m(s,"scale","batchNorm"));let p;return r!=null&&(p=m(r,"offset","batchNorm")),g(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),g(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),g(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),p!=null&&g(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),An(o,i,u,p,c,a)}const ol=b({batchNorm2d_:Cd});function Bd(t,e,n,r,s,a){const o=m(t,"x","batchNorm"),i=m(e,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;s!=null&&(c=m(s,"scale","batchNorm"));let p;return r!=null&&(p=m(r,"offset","batchNorm")),g(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),g(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),g(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),p!=null&&g(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),An(o,i,u,p,c,a)}const il=b({batchNorm3d_:Bd});function Rd(t,e,n,r,s,a){const o=m(t,"x","batchNorm"),i=m(e,"mean","batchNorm"),u=m(n,"variance","batchNorm");let c;s!=null&&(c=m(s,"scale","batchNorm"));let p;return r!=null&&(p=m(r,"offset","batchNorm")),g(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),g(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),g(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&g(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),p!=null&&g(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),An(o,i,u,p,c,a)}const ul=b({batchNorm4d_:Rd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(t,e,n){const r=m(t,"x","bincount"),s=m(e,"weights","bincount");g(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),g(n>=0,()=>`size must be non-negative, but got ${n}.`),g(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const a={x:r,weights:s},o={size:n};return w.runKernel(Fo,a,o)}const _s=b({bincount_:Pd});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(t,e){const n=m(t,"x","bitwiseAnd"),r=m(e,"y","bitwiseAnd");if(!Ce(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if(n.dtype!=="int32"||r.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return w.runKernel(Co,s)}const cl=b({bitwiseAnd_:Ld});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(t,e){const n=m(t,"s0","broadcastArgs","int32"),r=m(e,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return w.runKernel(Bo,s)}const ll=b({broadcastArgs_:zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vd(t,e){let n=m(t,"broadcastTo","x");const r=n.shape;if(Ne(e),e.length<n.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${n.rank}.`);if(e.length>n.rank){const c=n.shape.slice();for(;c.length<e.length;)c.unshift(1);n=v(n,c)}const s=n.shape,a=Array.from(e);for(let c=e.length-1;c>=0;c--)if(s[c]===e[c])a[c]=1;else if(n.shape[c]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${e}].`);if(a.map((c,p)=>c>1?p:-1).filter(c=>c>=0).length===0)return Ke(n);const i={x:n},u={reps:a};return w.runKernel(ps,i,u)}const ln=b({broadcastTo_:Vd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ud(t){const n={x:m(t,"x","ceil","float32")};return w.runKernel(Ro,n)}const pl=b({ceil_:Ud});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nn(t,e,n){Ne(t),n=n||en(e);const r={shape:t,value:e,dtype:n};return w.runKernel(fi,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(t,e,n){const r=m(t,"x","clipByValue");if(g(e<=n,()=>`Error in clip: min (${e}) must be less than or equal to max (${n}).`),e===n)return nn(r.shape,e,r.dtype);const s={x:r},a={clipValueMin:e,clipValueMax:n};return w.runKernel(Po,s,a)}const hl=b({clipByValue_:jd});function qd(t){return ie(t,0)}const fl=b({concat1d_:qd});function Wd(t,e){return ie(t,e)}const ml=b({concat2d_:Wd});function Md(t,e){return ie(t,e)}const dl=b({concat3d_:Md});function Gd(t,e){return ie(t,e)}const gl=b({concat4d_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(t,e,n,r,s="NHWC",a=[1,1],o){const i=m(t,"x","conv2d","float32"),u=m(e,"filter","conv2d","float32");let c=i,p=!1;i.rank===3&&(p=!0,c=v(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),g(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Ie("conv2d",r,o);const h=s==="NHWC"?c.shape[3]:c.shape[1];g(h===u.shape[2],()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${u.shape[2]}.`),g(Ye(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),g($t(a),()=>"Error in conv2D: Dilated rates should be larger than 0."),g($t(n),()=>"Error in conv2D: Strides should be larger than 0.");const f={x:c,filter:u},d={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},y=w.runKernel(Uo,f,d);return p?v(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const Dn=b({conv2d_:Kd});function Hd(t,e,n,r,s="NWC",a=1,o){const i=m(t,"x","conv1d"),u=m(e,"filter","conv1d");let c=i,p=!1;i.rank===2&&(p=!0,c=v(i,[1,i.shape[0],i.shape[1]])),g(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),g(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Ie("conv1d",r,o),g(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),g(Ye(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),g($t(a),()=>"Error in conv1D: Dilated rates should be larger than 0."),g($t(n),()=>"Error in conv1D: Stride should be larger than 0."),g(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const h=v(u,[1,u.shape[0],u.shape[1],u.shape[2]]),f=v(c,[c.shape[0],1,c.shape[1],c.shape[2]]),N=Dn(f,h,[1,n],r,"NHWC",[1,a],o);return p?v(N,[N.shape[2],N.shape[3]]):v(N,[N.shape[0],N.shape[2],N.shape[3]])}const yl=b({conv1d_:Hd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(t,e,n,r,s,a="NHWC",o){g(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let i=t,u=e,c=!1;e.rank===3&&(c=!0,u=v(e,[1,e.shape[0],e.shape[1],e.shape[2]]),i=[1,t[0],t[1],t[2]]),g(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),g(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),g(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const p=a==="NHWC"?i[3]:i[1],h=a==="NHWC"?u.shape[3]:u.shape[1];g(p===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${n.shape[2]}.`),g(h===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[3]}.`),Ie("conv2dDerInput",s,o);const f={dy:u,filter:n},d={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},y=w.runKernel(qo,f,d);return c?v(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const xs=b({conv2DBackpropInput_:Xd});function Zd(t,e,n,r,s,a){const o=m(t,"x","conv2dTranspose"),i=m(e,"filter","conv2dTranspose");return xs(n,o,i,r,s,"NHWC",a)}const bl=b({conv2dTranspose_:Zd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(t,e,n,r,s="NDHWC",a=[1,1,1]){const o=m(t,"x","conv3d"),i=m(e,"filter","conv3d");let u=o,c=!1;o.rank===4&&(c=!0,u=v(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),g(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),g(u.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`),g(Ye(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),g(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`),g($t(a),()=>"Error in conv3D: Dilated rates should be larger than 0."),g($t(n),()=>"Error in conv3D: Strides should be larger than 0.");const p={x:u,filter:i},h={strides:n,pad:r,dataFormat:s,dilations:a},f=w.runKernel(Wo,p,h);return c?v(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const wl=b({conv3d_:Jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yd(t,e,n,r,s){g(t.length===e.rank,()=>`Length of inShape (${t.length}) and rank of dy (${e.rank}) must match`);let a=t,o=e,i=!1;e.rank===4&&(i=!0,o=v(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),a=[1,t[0],t[1],t[2],t[3]]);const u=a[4],c=o.shape[4];g(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),g(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),g(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),g(u===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`),g(c===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${n.shape[4]}.`);const p={dy:o,filter:n},h={pad:s,strides:r,inputShape:a},f=w.runKernel(Mo,p,h);return i?v(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Nl=b({conv3DBackpropInput_:Yd});function Qd(t,e,n,r,s){const a=m(t,"x","conv3dTranspose"),o=m(e,"filter","conv3dTranspose");return Nl(n,a,o,r,s)}const Tl=b({conv3dTranspose_:Qd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(t){const n={x:m(t,"x","cos","float32")};return w.runKernel(Go,n)}const Sl=b({cos_:eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(t){const n={x:m(t,"x","cosh","float32")};return w.runKernel(Ko,n)}const vl=b({cosh_:tg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ng(t,e=0,n=!1,r=!1){const a={x:m(t,"x","cumprod")},o={axis:e,exclusive:n,reverse:r};return w.runKernel(Ho,a,o)}const kl=b({cumprod_:ng});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(t,e=0,n=!1,r=!1){const a={x:m(t,"x","cumsum")},o={axis:e,exclusive:n,reverse:r};return w.runKernel(Xo,a,o)}const El=b({cumsum_:rg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sg(t,e,n,r=!1){const s=m(t,"x","denseBincount"),a=m(e,"weights","denseBincount");g(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),g(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),g(n>=0,()=>`size must be non-negative, but got ${n}.`),g(a.size===s.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`);const o={x:s,weights:a},i={size:n,binaryOutput:r};return w.runKernel(Jo,o,i)}const $l=b({denseBincount_:sg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ag(t,e,n="NHWC"){const r=m(t,"x","depthToSpace","float32"),s=n==="NHWC"?r.shape[1]:r.shape[2],a=n==="NHWC"?r.shape[2]:r.shape[3],o=n==="NHWC"?r.shape[3]:r.shape[1];g(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),g(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e}  for depthToSpace with input shape
    ${r.shape}`),g(a*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${e} for depthToSpace with input shape
        ${r.shape}`),g(o%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${o} for depthToSpace with input shape ${r.shape}`);const i={x:r},u={blockSize:e,dataFormat:n};return w.runKernel(Yo,i,u)}const _l=b({depthToSpace_:ag});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(t,e,n,r,s="NHWC",a=[1,1],o){const i=m(t,"x","depthwiseConv2d","float32"),u=m(e,"filter","depthwiseConv2d","float32");let c=i,p=!1;i.rank===3&&(p=!0,c=v(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),g(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);const h=s==="NHWC"?c.shape[3]:c.shape[1];g(h===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${h}) must match the inChannels dimension in filter ${u.shape[2]}.`),Ie("depthwiseConv2d",r,o);const f={x:c,filter:u},d={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},y=w.runKernel(Qo,f,d);return p?v(y,[y.shape[1],y.shape[2],y.shape[3]]):y}const or=b({depthwiseConv2d_:og});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(t){const n={x:m(t,"x","diag")};return w.runKernel(ni,n)}const xl=b({diag_:ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(t,e,n,r,s=[1,1],a="NHWC"){const o=m(t,"x","dilation2d"),i=m(e,"filter","dilation2d");g(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),g(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),g(a==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let u=o,c=!1;o.rank===3&&(u=v(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=!0),g(u.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${i.shape[2]}`);const p={x:u,filter:i},h={strides:n,pad:r,dilations:s},f=w.runKernel(ri,p,h);return c?v(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Il=b({dilation2d_:ug});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Al(t,e){const n=t.length,r=[];for(let s=0;s<n;s++){const a=n-1-s,o=t[a]||1;(e[e.length-1-s]||1)>1&&o===1&&r.unshift(a)}return r}function Is(t,e){const n=[];for(let r=0;r<e.length;r++){const s=t[t.length-r-1],a=e.length-r-1,o=e[a];(s==null||s===1&&o>1)&&n.unshift(a)}return n}function ne(t,e){const n=Math.max(t.length,e.length),r=new Array(n);for(let s=0;s<n;s++){let a=t[t.length-s-1];a==null&&(a=1);let o=e[e.length-s-1];if(o==null&&(o=1),a===1)r[n-s-1]=o;else if(o===1)r[n-s-1]=a;else if(a!==o){const i=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(i)}else r[n-s-1]=a}return r}const cg=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:ne,getBroadcastDims:Al,getReductionAxes:Is},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lg(t,e){let n=m(t,"a","equal","string_or_numeric"),r=m(e,"b","equal","string_or_numeric");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(ui,s)}const As=b({equal_:lg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pg(t,e,n){const r=m(e,"a","where"),s=m(n,"b","where"),a=m(t,"condition","where","bool"),o=ne(ne(a.shape,r.shape),s.shape),i=ln(a,o),u=ln(r,o),c=ln(s,o),p={condition:i,t:u,e:c};return w.runKernel(ku,p)}const He=b({where_:pg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(t){const n={x:m(t,"x","zerosLike")};return w.runKernel(nc,n)}const be=b({zerosLike_:hg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(t,e){let n=m(t,"a","div"),r=m(e,"b","div");[n,r]=ee(n,r);const s=G(n,r),a=be(s),o=As(r,a);return He(o,a,s)}const Dl=b({divNoNan_:fg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(t,e){const n=m(t,"t1","dot"),r=m(e,"t2","dot");g((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);const s=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(g(s===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`),n.rank===1&&r.rank===1){const o=v(n,[1,-1]),i=v(r,[-1,1]),u=U(o,i);return v(u,[])}else if(n.rank===1&&r.rank===2){const o=v(n,[1,-1]),i=v(r,[r.shape[0],r.shape[1]]),u=U(o,i);return v(u,[u.size])}else if(n.rank===2&&r.rank===1){const o=v(r,[-1,1]),i=U(n,o);return v(i,[i.size])}else{const o=v(r,[r.shape[0],r.shape[1]]);return U(n,o)}}const Ol=b({dot_:mg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(t,...e){const n=e.map((s,a)=>m(s,`tensors${a}`,"einsum")),r={equation:t};return w.runKernel(ai,n,r)}const dt=b({einsum_:dg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(t){const n={x:m(t,"x","elu","float32")};return w.runKernel(oi,n)}const Ds=b({elu_:gg});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(t,e){const n=m(t,"x","ensureShape","string_or_numeric");if(!Ya(n.shape,e))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${e}`);return t}const Fl=b({ensureShape_:yg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bg(t){let e=m(t,"x","erf");g(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=Q(e,"float32"));const n={x:e};return w.runKernel(ii,n)}const Cl=b({erf_:bg});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Os(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function Bl(t,e,n){const r=t.length+e.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)n.indexOf(i)===-1?s.push(t[a++]):s.push(e[o++]);return s}function wg(t,e){const n=[],r=t.length;for(let a=0;a<r;a++)e.indexOf(a)===-1&&n.push(t[a]);const s=e.map(a=>t[a]);return[n,s]}function On(t,e){const n=e.map(r=>1);return Bl(t,n,e)}function Ng(t,e,n){g(Os(e,n),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`)}function Tg(t,e){if(Os(t,e))return null;const n=[];for(let r=0;r<e;++r)t.indexOf(r)===-1&&n.push(r);return t.forEach(r=>n.push(r)),n}function Sg(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}function vg(t,e){const n=[];for(let r=e-t;r<e;++r)n.push(r);return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(t,e=null,n=!1){const s={x:m(t,"x","max")},a={reductionIndices:e,keepDims:n};return w.runKernel(Pi,s,a)}const Nt=b({max_:kg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(t,e=null,n=!1){const s={x:m(t,"x","min")},a={axis:e,keepDims:n};return w.runKernel(qi,s,a)}const Zn=b({min_:Eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(t,e){let n=m(t,"base","pow"),r=m(e,"exp","pow");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(su,s)}const Ht=b({pow_:$g});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z(t,e){if((we(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&we(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ct(t,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(t){const n={x:m(t,"x","sqrt","float32")};return w.runKernel(Ou,n)}const Le=b({sqrt_:_g});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xg(t){const e=m(t,"x","square"),n={};return w.runKernel("Square",{x:e},n)}const xe=b({square_:xg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(t,e=null,n=!1){let r=m(t,"x","sum");r.dtype==="bool"&&(r=Q(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return w.runKernel(Fu,s,a)}const M=b({sum_:Ig});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(t,e="euclidean",n=null,r=!1){t=m(t,"x","norm");const s=Rl(t,e,n);let a=s.shape;if(r){const o=Qt(n,t.shape);a=On(s.shape,o)}return v(s,a)}function Rl(t,e,n=null){if(t.rank===0)return ge(t);if(t.rank!==1&&n===null)return Rl(v(t,[-1]),e,n);if(t.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(e===1)return M(ge(t),n);if(e===1/0)return Nt(ge(t),n);if(e===-1/0)return Zn(ge(t),n);if(e==="euclidean"||e===2)return Le(M(Ht(ge(t),z(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(n)&&n.length===2){if(e===1)return Nt(M(ge(t),n[0]),n[1]-1);if(e===1/0)return Nt(M(ge(t),n[1]),n[0]);if(e===-1/0)return Zn(M(ge(t),n[1]),n[0]);if(e==="fro"||e==="euclidean")return Le(M(xe(t),n));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Fn=b({norm_:Ag});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(t,e=null,n=!1){return Fn(t,"euclidean",e,n)}const Pl=b({euclideanNorm_:Dg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Og(t){const n={x:m(t,"x","exp")};return w.runKernel(ci,n)}const it=b({exp_:Og});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(t,e=0){const n=m(t,"x","expandDims","string_or_numeric");g(e<=n.rank,()=>"Axis must be <= rank of the tensor");const r={input:n},s={dim:e};return w.runKernel(li,r,s)}const je=b({expandDims_:Fg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cg(t){const n={x:m(t,"x","expm1")};return w.runKernel(pi,n)}const Ll=b({expm1_:Cg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(t,e){const n=m(t,"x","tile","string_or_numeric");g(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${e}.`);const r={x:n},s={reps:e};return w.runKernel(ps,r,s)}const jt=b({tile_:Bg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rg(t,e,n,r="float32"){e==null&&(e=t);const s=Pe([t,e],r),a=t<=e?t:e;for(let i=0;i<a;++i)s.set(1,i,i);const o=v(s.toTensor(),[t,e]);if(n==null)return o;if(n.length===1)return jt(je(o,0),[n[0],1,1]);if(n.length===2)return jt(je(je(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return jt(je(je(je(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Fs=b({eye_:Rg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pg(t){const n={x:m(t,"x","floor","float32")};return w.runKernel(di,n)}const Cs=b({floor_:Pg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lg(t,e,n=0,r=0){const s=m(t,"x","gather"),a=m(e,"indices","gather","int32"),o={x:s,indices:a},i={axis:n,batchDims:r};return w.runKernel(bi,o,i)}const Bs=b({gather_:Lg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(t,e){let n=m(t,"a","greater","string_or_numeric"),r=m(e,"b","greater","string_or_numeric");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Ni,s)}const Cn=b({greater_:zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(t,e){let n=m(t,"a","greaterEqual","string_or_numeric"),r=m(e,"b","greaterEqual","string_or_numeric");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Ti,s)}const Rs=b({greaterEqual_:Vg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ug(t){const n={input:m(t,"input","imag")};return w.runKernel(vi,n)}const Bn=b({imag_:Ug});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(t){const n={x:m(t,"x","isFinite")};return w.runKernel(ki,n)}const zl=b({isFinite_:jg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(t){const n={x:m(t,"x","isInf")};return w.runKernel(Ei,n)}const Vl=b({isInf_:qg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(t){const n={x:m(t,"x","isNaN")};return w.runKernel($i,n)}const Ul=b({isNaN_:Wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mg(t,e=.2){const r={x:m(t,"x","leakyRelu")},s={alpha:e};return w.runKernel(_i,r,s)}const Ps=b({leakyRelu_:Mg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gg(t,e){let n=m(t,"a","less","string_or_numeric"),r=m(e,"b","less","string_or_numeric");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(xi,s)}const Jn=b({less_:Gg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kg(t,e){let n=m(t,"a","lessEqual","string_or_numeric"),r=m(e,"b","lessEqual","string_or_numeric");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Ii,s)}const ir=b({lessEqual_:Kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jl(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:t,stop:e,num:n};return w.runKernel(Ai,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hg(t,e=5,n=1,r=1,s=.5){const a=m(t,"x","localResponseNormalization");g(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),g(Tt(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let o=a,i=!1;a.rank===3&&(i=!0,o=v(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:o},c={depthRadius:e,bias:n,alpha:r,beta:s},p=w.runKernel(Ri,u,c);return i?v(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const ql=b({localResponseNormalization_:Hg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xg(t){const n={x:m(t,"x","log","float32")};return w.runKernel(Di,n)}const Xt=b({log_:Xg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(t){const n={x:m(t,"x","log1p")};return w.runKernel(Oi,n)}const Ls=b({log1p_:Zg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(t){return g(at(t),()=>"The f passed in grad(f) must be a function"),(e,n)=>{const r=m(e,"x","tf.grad","string_or_numeric"),s=n!=null?m(n,"dy","tf.grad"):null;return w.tidy(()=>{const{value:a,grads:o}=w.gradients(()=>t(r),[r],s);return s!=null&&ue(a.shape,s.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),ur(o),o[0]})}}function Yg(t){return g(at(t),()=>"The f passed in grads(f) must be a function"),(e,n)=>{g(Array.isArray(e),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const r=gn(e,"args","tf.grads","string_or_numeric"),s=n!=null?m(n,"dy","tf.grads"):null;return w.tidy(()=>{const{value:a,grads:o}=w.gradients(()=>t(...r),r,s);return s!=null&&ue(a.shape,s.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),ur(o),o})}}function Qg(t){return g(at(t),()=>"The f passed in valueAndGrad(f) must be a function"),(e,n)=>{g(e instanceof te,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),g(n==null||n instanceof te,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:r,value:s}=w.gradients(()=>t(e),[e],n);return ur(r),{grad:r[0],value:s}}}function ey(t){return g(at(t),()=>"The f passed in valueAndGrads(f) must be a function"),(e,n)=>{g(Array.isArray(e)&&e.every(s=>s instanceof te),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),g(n==null||n instanceof te,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const r=w.gradients(()=>t(...e),e,n);return n!=null&&ue(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),ur(r.grads),r}}function Wl(t,e){g(at(t),()=>"The f passed in variableGrads(f) must be a function"),g(e==null||Array.isArray(e)&&e.every(c=>c instanceof dn),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=e!=null;if(!n){e=[];for(const c in w.registeredVariables)e.push(w.registeredVariables[c])}const r=n?e.filter(c=>!c.trainable):null,s=e.length;e=e.filter(c=>c.trainable),g(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`);const a=!0,{value:o,grads:i}=w.gradients(t,e,null,a);g(i.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),g(o.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${o.rank} tensor`);const u={};return e.forEach((c,p)=>{i[p]!=null&&(u[c.name]=i[p])}),r?.forEach(c=>u[c.name]=null),{value:o,grads:u}}function ze(t){return w.customGrad(t)}function ur(t){if(t.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(t){const n={x:m(t,"x","neg")};return w.runKernel(Xi,n)}const Fe=b({neg_:ty});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ny(t){const n={x:m(t,"x","softplus")};return w.runKernel(Du,n)}const zs=b({softplus_:ny});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ry(t){const e=m(t,"x","logSigmoid");return ze(r=>({value:Fe(zs(Fe(r))),gradFunc:o=>$(o,wt(Fe(r)))}))(e)}const Ml=b({logSigmoid_:ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sy(t,e){let n=m(t,"a","sub"),r=m(e,"b","sub");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(Hu,s)}const R=b({sub_:sy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(t,e=-1){const n=m(t,"logits","logSoftmax");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${e}`);return ze((s,a)=>{const i=Nt(s,e,!0),u=R(s,i),c=R(Q(u,"float32"),Xt(M(it(u),e,!0)));return a([c]),{value:c,gradFunc:(h,f)=>{const[d]=f,y=!0,T=it(d);return R(h,$(M(h,e,y),T))}}})(n)}const Gl=b({logSoftmax_:ay});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oy(t,e=null,n=!1){const r=m(t,"x","logSumExp"),s=Qt(e,r.shape),a=Nt(r,s,!0),o=R(r,a),i=it(o),u=M(i,s),c=Xt(u),p=F(v(a,c.shape),c);if(n){const h=On(p.shape,s);return v(p,h)}return p}const Vs=b({logSumExp_:oy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(t,e){const n=m(t,"a","logicalAnd","bool"),r=m(e,"b","logicalAnd","bool");ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Fi,s)}const Nn=b({logicalAnd_:iy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uy(t){const n={x:m(t,"x","logicalNot","bool")};return w.runKernel(Ci,n)}const Us=b({logicalNot_:uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cy(t,e){const n=m(t,"a","logicalOr","bool"),r=m(e,"b","logicalOr","bool");ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Bi,s)}const js=b({logicalOr_:cy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ly(t,e){const n=m(t,"a","logicalXor","bool"),r=m(e,"b","logicalXor","bool");return ne(n.shape,r.shape),Nn(js(t,e),Us(Nn(t,e)))}const Kl=b({logicalXor_:ly});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ln=2147483648;function py(t,e,n="left"){const r=m(t,"sortedSequence","searchSorted"),s=m(e,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=v(r,[-1,a]),u=v(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(J(u.shape)>=Ln)throw new Error(`values tensor size must less than ${Ln}`);if(i.shape[1]>=Ln)throw new Error(`trailing dim_size must less than ${Ln} for int32 output type, was ${i.shape[1]}`);const c={sortedSequence:i,values:u},p={side:n};return w.runKernel(vu,c,p)}const cr=b({searchSorted_:py});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hl(t,e){return cr(t,e,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hy(t,e,n,r,s){const a=m(t,"x","maxPool"),o=1;let i=a,u=!1;a.rank===3&&(u=!0,i=v(a,[1,a.shape[0],a.shape[1],a.shape[2]])),g(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),g(Ye(n,o),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),Ie("maxPool",r,s);const c={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s},h=w.runKernel(zi,c,p);return u?v(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const qs=b({maxPool_:hy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fy(t,e=[1,1,1],n,r,s,a="NDHWC"){const o=m(t,"x","maxPool3d");let i=o,u=!1;o.rank===4&&(u=!0,i=v(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),g(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),g(a==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),Ie("maxPool3d",r,s);const c={x:i},p={filterSize:e,strides:n,pad:r,dimRoundingMode:s,dataFormat:a},h=w.runKernel(Vi,c,p);return u?v(h,[h.shape[1],h.shape[2],h.shape[3],h.shape[4]]):h}const Xl=b({maxPool3d_:fy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(t,e,n,r,s=!1){const o={x:m(t,"x","maxPoolWithArgmax")},i={filterSize:e,strides:n,pad:r,includeBatchInIndex:s},u=w.runKernel(Ui,o,i);return{result:u[0],indexes:u[1]}}const Zl=b({maxPoolWithArgmax_:my});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(t,e){let n=m(t,"a","maximum"),r=m(e,"b","maximum");[n,r]=ee(n,r),n.dtype==="bool"&&(n=Q(n,"int32"),r=Q(r,"int32")),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Li,s)}const Ws=b({maximum_:dy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gy(t,e=null,n=!1){const s={x:m(t,"x","mean")},a={axis:e,keepDims:n};return w.runKernel(ji,s,a)}const Tn=b({mean_:gy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _t(t,e="float32"){if(Ne(t),e==="complex64"){const r=_t(t,"float32"),s=_t(t,"float32");return Ze(r,s)}const n=En(J(t),e);return w.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nt(t,e="float32"){if(Ne(t),e==="complex64"){const r=nt(t,"float32"),s=_t(t,"float32");return Ze(r,s)}const n=rr(J(t),e);return w.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jl(t,e,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(t===void 0)return[];let r=m(t,"x","meshgrid",t instanceof te?t.dtype:"float32");if(e===void 0)return[r];let s=m(e,"y","meshgrid",e instanceof te?e.dtype:"float32");const a=J(r.shape),o=J(s.shape);return n==="xy"?(r=v(r,[1,-1]),s=v(s,[-1,1]),[U(nt([o,1],r.dtype),r),U(s,nt([1,a],s.dtype))]):(r=v(r,[-1,1]),s=v(s,[1,-1]),[U(r,nt([1,o],r.dtype)),U(nt([a,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yy(t,e){let n=m(t,"a","minimum"),r=m(e,"b","minimum");[n,r]=ee(n,r),n.dtype==="bool"&&(n=Q(n,"int32"),r=Q(r,"int32")),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Wi,s)}const Sn=b({minimum_:yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(t,e,n){g(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const r=m(t,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");g(e.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${e.length}.`);const s=n==="reflect"?1:0;for(let i=0;i<r.rank;i++)g(e[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),g(e[i][0]>=0&&e[i][0]<=r.shape[i]-s&&e[i][1]>=0&&e[i][1]<=r.shape[i]-s,()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`);const a={paddings:e,mode:n},o={x:r};return w.runKernel(Mi,o,a)}const Yl=b({mirrorPad_:by});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(t,e){let n=m(t,"a","mod"),r=m(e,"b","mod");[n,r]=ee(n,r);const s={a:n,b:r};return w.runKernel(Gi,s)}const Ql=b({mod_:wy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ny(t,e=null,n=!1){t=m(t,"x","moments");const r=Qt(e,t.shape),s=Tn(t,r,n);let a=s.shape;n||(a=On(s.shape,r));const o=xe(R(Q(t,"float32"),v(s,a))),i=Tn(o,r,n);return{mean:s,variance:i}}const ep=b({moments_:Ny});function Ty(t,e,n,r){const s=m(e,"data","multiRNNCell"),a=gn(n,"c","multiRNNCell"),o=gn(r,"h","multiRNNCell");let i=s;const u=[];for(let h=0;h<t.length;h++){const f=t[h](i,a[h],o[h]);u.push(f[0]),u.push(f[1]),i=f[1]}const c=[],p=[];for(let h=0;h<u.length;h+=2)c.push(u[h]),p.push(u[h+1]);return[c,p]}const tp=b({multiRNNCell_:Ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sy(t,e,n,r=!1){const s=m(t,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const u={logits:o===1?v(s,[1,-1]):s},c={numSamples:e,seed:n,normalized:r},p=w.runKernel(Ki,u,c);return o===1?v(p,[p.size]):p}const np=b({multinomial_:Sy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(t,e){let n=m(t,"a","notEqual","string_or_numeric"),r=m(e,"b","notEqual","string_or_numeric");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r};return w.runKernel(Zi,s)}const Ms=b({notEqual_:vy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ky(t,e,n=1,r=0,s="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);const o={indices:m(t,"indices","oneHot","int32")},i={dtype:s,depth:e,onValue:n,offValue:r};return w.runKernel(tu,o,i)}const rp=b({oneHot_:ky});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(t){const n={x:m(t,"x","onesLike")};return w.runKernel(eu,n)}const sp=b({onesLike_:Ey});function $y(t,e){const n=m(t,"v1","outerProduct"),r=m(e,"v2","outerProduct");g(n.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`);const s=v(n,[-1,1]),a=v(r,[1,-1]);return U(s,a)}const ap=b({outerProduct_:$y});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _y(t,e,n=0){const r=m(t,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:e,constantValue:n},a={x:r};return w.runKernel(ru,a,s)}const rn=b({pad_:_y});function xy(t,e,n=0){return g(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),rn(t,[e],n)}const op=b({pad1d_:xy});function Iy(t,e,n=0){return g(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),rn(t,e,n)}const ip=b({pad2d_:Iy});function Ay(t,e,n=0){return g(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),rn(t,e,n)}const up=b({pad3d_:Ay});function Dy(t,e,n=0){return g(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),rn(t,e,n)}const cp=b({pad4d_:Dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oy(t,e,n){const r=m(t,"x","spaceToBatchND");g(r.rank>=1+e.length,()=>`input rank ${r.rank} should be > than [blockShape] ${e.length}`),g(n.length===e.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${e.length}`),g(r.shape.reduce((o,i,u)=>u>0&&u<=e.length?o&&(i+n[u-1][0]+n[u-1][1])%e[u-1]===0:o,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${e.toString()}`);const s={x:r},a={blockShape:e,paddings:n};return w.runKernel(Cu,s,a)}const Gs=b({spaceToBatchND_:Oy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fy(t,e,n,r,s,a,o){s==null&&(s=[1,1]),a==null&&(a=1),r===0&&(r="valid");const i=m(t,"x","maxPool");let u=i,c=!1;i.rank===3&&(c=!0,u=v(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(Ye(a,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`);const p=tl(u.shape,e,a,s,r),h=[p.dilationHeight,p.dilationWidth];let f;r==="same"?f=By([p.filterHeight,p.filterWidth],h):f=[[0,0],[0,0]];const d=h[0]===1&&h[1]===1,[y,T]=Cy([p.inHeight,p.inWidth],h,f),N=d?r:"valid",S=d?u:Gs(u,h,y),A=(n==="avg"?()=>Es(S,e,a,N,o):()=>qs(S,e,a,N,o))(),k=d?A:$s(A,h,T);return c?v(k,[k.shape[1],k.shape[2],k.shape[3]]):k}function Cy(t,e,n){const r=n.map(p=>p[0]),s=n.map(p=>p[1]),a=t.concat(r,s),o=e.map((p,h)=>(p-a[h]%p)%p),i=s.map((p,h)=>p+o[h]),u=e.map((p,h)=>[r[h],i[h]]),c=e.map((p,h)=>[0,o[h]]);return[u,c]}function By(t,e){const r=t.map((o,i)=>o+(o-1)*(e[i]-1)).map(o=>o-1),s=r.map(o=>Math.floor(o/2)),a=r.map((o,i)=>o-s[i]);return r.map((o,i)=>[s[i],a[i]])}const lp=b({pool_:Fy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ry(t,e){const n=m(t,"x","prelu"),r=m(e,"alpha","prelu"),s={x:n,alpha:r};return w.runKernel(au,s)}const Ks=b({prelu_:Ry});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Py(t,e=null,n=!1){let r=m(t,"x","prod");r.dtype==="bool"&&(r=Q(r,"int32"));const s={x:r},a={axis:e,keepDims:n};return w.runKernel(ou,s,a)}const pp=b({prod_:Py});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ly(t,e,n,r){const s=t.map((p,h)=>m(p,`tensors${h}`,"raggedGather","int32")),a=m(e,"paramsDenseValues","raggedGather"),o=m(n,"indices","raggedGather","int32"),i={paramsNestedSplits:s,paramsDenseValues:a,indices:o},u={outputRaggedRank:r},c=w.runKernel(iu,i,u);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}const hp=b({raggedGather_:Ly});/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(t,e,n){const r=m(t,"starts","raggedRange"),s=m(e,"limits","raggedRange",r.dtype),a=m(n,"deltas","raggedRange",r.dtype),o={starts:r,limits:s,deltas:a},i=w.runKernel(uu,o);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const fp=b({raggedRange_:zy});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(t,e,n,r,s){const a=m(t,"shape","raggedTensorToTensor","int32"),o=m(e,"values","raggedTensorToTensor"),i=m(n,"defaultValue","raggedTensorToTensor",o.dtype),u=r.map((h,f)=>m(h,`tensors${f}`,"raggedTensorToTensor","int32")),c={shape:a,values:o,defaultValue:i,rowPartitionTensors:u},p={rowPartitionTypes:s};return w.runKernel(cu,c,p)}const mp=b({raggedTensorToTensor_:Vy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uy(t,e,n){Ne(t);const r=J(t);let s=null;if(n==null||n==="float32")s=new Float32Array(r);else if(n==="int32")s=new Int32Array(r);else if(n==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${n}`);for(let a=0;a<r;a++)s[a]=e();return w.makeTensor(s,t,n)}const dp=b({rand_:Uy});var Hs={exports:{}};Hs.exports;(function(t){(function(e,n,r){function s(u){var c=this,p=i();c.next=function(){var h=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=h|0)},c.c=1,c.s0=p(" "),c.s1=p(" "),c.s2=p(" "),c.s0-=p(u),c.s0<0&&(c.s0+=1),c.s1-=p(u),c.s1<0&&(c.s1+=1),c.s2-=p(u),c.s2<0&&(c.s2+=1),p=null}function a(u,c){return c.c=u.c,c.s0=u.s0,c.s1=u.s1,c.s2=u.s2,c}function o(u,c){var p=new s(u),h=c&&c.state,f=p.next;return f.int32=function(){return p.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,h&&(typeof h=="object"&&a(h,p),f.state=function(){return a(p,{})}),f}function i(){var u=4022871197,c=function(p){p=String(p);for(var h=0;h<p.length;h++){u+=p.charCodeAt(h);var f=.02519603282416938*u;u=f>>>0,f-=u,f*=u,u=f>>>0,f-=u,u+=f*4294967296}return(u>>>0)*23283064365386963e-26};return c}n&&n.exports?n.exports=o:this.alea=o})(At,t)})(Hs);var jy=Hs.exports,Xs={exports:{}};Xs.exports;(function(t){(function(e,n,r){function s(i){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},i===(i|0)?u.x=i:c+=i;for(var p=0;p<c.length+64;p++)u.x^=c.charCodeAt(p)|0,u.next()}function a(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u}function o(i,u){var c=new s(i),p=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,y=(f+d)/(1<<21);while(y===0);return y},h.int32=c.next,h.quick=h,p&&(typeof p=="object"&&a(p,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=o:this.xor128=o})(At,t)})(Xs);var qy=Xs.exports,Zs={exports:{}};Zs.exports;(function(t){(function(e,n,r){function s(i){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^(h^h<<1))|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,i===(i|0)?u.x=i:c+=i;for(var p=0;p<c.length+64;p++)u.x^=c.charCodeAt(p)|0,p==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(i,u){return u.x=i.x,u.y=i.y,u.z=i.z,u.w=i.w,u.v=i.v,u.d=i.d,u}function o(i,u){var c=new s(i),p=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,y=(f+d)/(1<<21);while(y===0);return y},h.int32=c.next,h.quick=h,p&&(typeof p=="object"&&a(p,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=o:this.xorwow=o})(At,t)})(Zs);var Wy=Zs.exports,Js={exports:{}};Js.exports;(function(t){(function(e,n,r){function s(i){var u=this;u.next=function(){var p=u.x,h=u.i,f,d;return f=p[h],f^=f>>>7,d=f^f<<24,f=p[h+1&7],d^=f^f>>>10,f=p[h+3&7],d^=f^f>>>3,f=p[h+4&7],d^=f^f<<7,f=p[h+7&7],f=f^f<<13,d^=f^f<<9,p[h]=d,u.i=h+1&7,d};function c(p,h){var f,d=[];if(h===(h|0))d[0]=h;else for(h=""+h,f=0;f<h.length;++f)d[f&7]=d[f&7]<<15^h.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],p.x=d,p.i=0,f=256;f>0;--f)p.next()}c(u,i)}function a(i,u){return u.x=i.x.slice(),u.i=i.i,u}function o(i,u){i==null&&(i=+new Date);var c=new s(i),p=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,y=(f+d)/(1<<21);while(y===0);return y},h.int32=c.next,h.quick=h,p&&(p.x&&a(p,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=o:this.xorshift7=o})(At,t)})(Js);var My=Js.exports,Ys={exports:{}};Ys.exports;(function(t){(function(e,n,r){function s(i){var u=this;u.next=function(){var p=u.w,h=u.X,f=u.i,d,y;return u.w=p=p+1640531527|0,y=h[f+34&127],d=h[f=f+1&127],y^=y<<13,d^=d<<17,y^=y>>>15,d^=d>>>12,y=h[f]=y^d,u.i=f,y+(p^p>>>16)|0};function c(p,h){var f,d,y,T,N,S=[],I=128;for(h===(h|0)?(d=h,h=null):(h=h+"\0",d=0,I=Math.max(I,h.length)),y=0,T=-32;T<I;++T)h&&(d^=h.charCodeAt((T+32)%h.length)),T===0&&(N=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,T>=0&&(N=N+1640531527|0,f=S[T&127]^=d+N,y=f==0?y+1:0);for(y>=128&&(S[(h&&h.length||0)&127]=-1),y=127,T=4*128;T>0;--T)d=S[y+34&127],f=S[y=y+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,S[y]=d^f;p.w=N,p.X=S,p.i=y}c(u,i)}function a(i,u){return u.i=i.i,u.w=i.w,u.X=i.X.slice(),u}function o(i,u){i==null&&(i=+new Date);var c=new s(i),p=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,y=(f+d)/(1<<21);while(y===0);return y},h.int32=c.next,h.quick=h,p&&(p.X&&a(p,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=o:this.xor4096=o})(At,t)})(Ys);var Gy=Ys.exports,Qs={exports:{}};Qs.exports;(function(t){(function(e,n,r){function s(i){var u=this,c="";u.next=function(){var h=u.b,f=u.c,d=u.d,y=u.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^y,y=y-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-d|0,u.d=d<<16^f>>>16^y,u.a=y-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,i===Math.floor(i)?(u.a=i/4294967296|0,u.b=i|0):c+=i;for(var p=0;p<c.length+20;p++)u.b^=c.charCodeAt(p)|0,u.next()}function a(i,u){return u.a=i.a,u.b=i.b,u.c=i.c,u.d=i.d,u}function o(i,u){var c=new s(i),p=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=c.next()>>>11,d=(c.next()>>>0)/4294967296,y=(f+d)/(1<<21);while(y===0);return y},h.int32=c.next,h.quick=h,p&&(typeof p=="object"&&a(p,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=o:this.tychei=o})(At,t)})(Qs);var Ky=Qs.exports,gp={exports:{}};const Hy={},Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Hy},Symbol.toStringTag,{value:"Module"})),Zy=Mh(Xy);(function(t){(function(e,n,r){var s=256,a=6,o=52,i="random",u=r.pow(s,a),c=r.pow(2,o),p=c*2,h=s-1,f;function d(k,_,x){var D=[];_=_==!0?{entropy:!0}:_||{};var O=S(N(_.entropy?[k,A(n)]:k??I(),3),D),B=new y(D),L=function(){for(var P=B.g(a),K=u,j=0;P<c;)P=(P+j)*s,K*=s,j=B.g(1);for(;P>=p;)P/=2,K/=2,j>>>=1;return(P+j)/K};return L.int32=function(){return B.g(4)|0},L.quick=function(){return B.g(4)/4294967296},L.double=L,S(A(B.S),n),(_.pass||x||function(P,K,j,Z){return Z&&(Z.S&&T(Z,B),P.state=function(){return T(B,{})}),j?(r[i]=P,K):P})(L,O,"global"in _?_.global:this==r,_.state)}function y(k){var _,x=k.length,D=this,O=0,B=D.i=D.j=0,L=D.S=[];for(x||(k=[x++]);O<s;)L[O]=O++;for(O=0;O<s;O++)L[O]=L[B=h&B+k[O%x]+(_=L[O])],L[B]=_;(D.g=function(P){for(var K,j=0,Z=D.i,re=D.j,ve=D.S;P--;)K=ve[Z=h&Z+1],j=j*s+ve[h&(ve[Z]=ve[re=h&re+K])+(ve[re]=K)];return D.i=Z,D.j=re,j})(s)}function T(k,_){return _.i=k.i,_.j=k.j,_.S=k.S.slice(),_}function N(k,_){var x=[],D=typeof k,O;if(_&&D=="object")for(O in k)try{x.push(N(k[O],_-1))}catch{}return x.length?x:D=="string"?k:k+"\0"}function S(k,_){for(var x=k+"",D,O=0;O<x.length;)_[h&O]=h&(D^=_[h&O]*19)+x.charCodeAt(O++);return A(_)}function I(){try{var k;return f&&(k=f.randomBytes)?k=k(s):(k=new Uint8Array(s),(e.crypto||e.msCrypto).getRandomValues(k)),A(k)}catch{var _=e.navigator,x=_&&_.plugins;return[+new Date,e,x,e.screen,A(n)]}}function A(k){return String.fromCharCode.apply(0,k)}if(S(r.random(),n),t.exports){t.exports=d;try{f=Zy}catch{}}else r["seed"+i]=d})(typeof self<"u"?self:At,[],Math)})(gp);var Jy=gp.exports,Yy=jy,Qy=qy,eb=Wy,tb=My,nb=Gy,rb=Ky,Ft=Jy;Ft.alea=Yy;Ft.xor128=Qy;Ft.xorwow=eb;Ft.xorshift7=tb;Ft.xor4096=nb;Ft.tychei=rb;var lr=Ft;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ea{constructor(e,n,r,s,a){this.mean=e,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const o=a||Math.random();this.random=lr.alea(o.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let e,n,r=!1;for(;!r;){let s,a,o;do s=2*this.random()-1,a=2*this.random()-1,o=s*s+a*a;while(o>=1||o===0);const i=Math.sqrt(-2*Math.log(o)/o);e=this.mean+this.stdDev*s*i,n=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(e))&&(r=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class sb{constructor(e,n,r,s){this.alpha=e,this.beta=1/n,this.dtype=r;const a=s||Math.random();this.randu=lr.alea(a.toString()),this.randn=new ea(0,1,r,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,n,r,s,a,o;for(;;){do s=this.randn.nextValue(),o=1+this.c*s;while(o<=0);if(o*=o*o,e=s*s,n=1-.331*e*e,r=.5*e+this.d*(1-o+Math.log(o)),a=this.randu(),a<n||Math.log(a)<r)break}return o=1/this.beta*this.d*o,this.alpha<1&&(o*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(o)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}}class ab{constructor(e=0,n=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=n-e,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${n} <= 1 and dtype is not float`);this.random=lr.alea(s)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ob(t,e,n=1,r="float32",s){if(Ne(t),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const a=new sb(e,n,r,s),o=Pe(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const yp=b({randomGamma_:ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ib(t,e=0,n=1,r,s){if(Ne(t),r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const a=new ea(e,n,r,!1,s),o=Pe(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const ta=b({randomNormal_:ib});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ub(t,e,n){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return ta(t,0,1,e,n)}const bp=b({randomStandardNormal_:ub});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cb(t,e=0,n=1,r="float32",s){Ne(t);const a=Pe(t,r),o=new ab(e,n,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const pr=b({randomUniform_:cb});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lb(t,e,n,r){return pr(t,e,n,"int32",r)}const wp=b({randomUniformInt_:lb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(t,e,n=1,r="float32"){if(n===0)throw new Error("Cannot have a step of zero");const s={start:t,stop:e,step:n,dtype:r};return w.runKernel(lu,{},s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pb(t){const n={input:m(t,"input","real")};return w.runKernel(pu,n)}const Jt=b({real_:pb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hb(t){const n={x:m(t,"x","reciprocal")};return w.runKernel(hu,n)}const Np=b({reciprocal_:hb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fb(t){const n={x:m(t,"x","relu")};return w.runKernel(fu,n)}const Rn=b({relu_:fb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mb(t){const n={x:m(t,"x","relu6")};return w.runKernel(yu,n)}const na=b({relu6_:mb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function db(t,e){const r={x:m(t,"x","reverse")},s={dims:e};return w.runKernel(bu,r,s)}const ut=b({reverse_:db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gb(t){const e=m(t,"x","reverse");return g(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),ut(e,0)}const Tp=b({reverse1d_:gb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(t,e){const n=m(t,"x","reverse");return g(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),ut(n,e)}const Sp=b({reverse2d_:yb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bb(t,e){const n=m(t,"x","reverse");return g(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),ut(n,e)}const vp=b({reverse3d_:bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(t,e){const n=m(t,"x","reverse");return g(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),ut(n,e)}const kp=b({reverse4d_:wb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nb(t){const n={x:m(t,"x","round")};return w.runKernel(wu,n)}const ra=b({round_:Nb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(t){const n={x:m(t,"x","rsqrt","float32")};return w.runKernel(Nu,n)}const Ep=b({rsqrt_:Tb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sb(t){const n={x:m(t,"x","selu")};return w.runKernel(Eu,n)}const $p=b({selu_:Sb});function vb(t,e,n,r,s,a=[1,1],o="NHWC"){const i=m(t,"x","separableConv2d"),u=m(e,"depthwiseFilter","separableConv2d"),c=m(n,"pointwiseFilter","separableConv2d");let p=i,h=!1;if(i.rank===3&&(h=!0,p=v(i,[1,i.shape[0],i.shape[1],i.shape[2]])),o==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),g(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),g(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),g(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),g(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const f=u.shape[2],d=u.shape[3];g(c.shape[2]===f*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*d}, but got ${c.shape[2]}.`);const y=or(p,u,r,s,o,a),N=Dn(y,c,1,"valid",o);return h?v(N,[N.shape[1],N.shape[2],N.shape[3]]):N}const _p=b({separableConv2d_:vb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function kb(t,e){const n=m(t,"x","setdiff1d"),r=m(e,"y","setdiff1d");g(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),g(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),g(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await n.data(),a=await r.data(),o=new Set(a);let i=0;for(let p=0;p<s.length;p++)o.has(s[p])||i++;const u=new Kn([i],n.dtype),c=new Kn([i],"int32");for(let p=0,h=0;p<s.length;p++)o.has(s[p])||(u.values[h]=s[p],c.values[h]=p,h++);return[u.toTensor(),c.toTensor()]}const xp=kb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(t){const n={x:m(t,"x","sign")};return w.runKernel(Iu,n)}const Ip=b({sign_:Eb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(t){const n={x:m(t,"x","sin","float32")};return w.runKernel(_u,n)}const Ap=b({sin_:$b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(t){const n={x:m(t,"x","sinh")};return w.runKernel(xu,n)}const Dp=b({sinh_:_b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(t,e,n){const r=m(t,"x","slice1d");return g(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),q(r,[e],[n])}const Op=b({slice1d_:xb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(t,e,n){const r=m(t,"x","slice2d");return g(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),q(r,e,n)}const Fp=b({slice2d_:Ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ab(t,e,n){const r=m(t,"x","slice3d");return g(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),q(r,e,n)}const Cp=b({slice3d_:Ab});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(t,e,n){const r=m(t,"x","slice4d");return g(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),q(r,e,n)}const Bp=b({slice4d_:Db});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ob(t,e=-1){const n=m(t,"logits","softmax","float32");if(e===-1&&(e=n.rank-1),e!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${e}`);const r={logits:n},s={dim:e};return w.runKernel(Ru,r,s)}const Rp=b({softmax_:Ob});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(t){g(t.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${t.dtype}.`);const e={input:t};return w.runKernel(hi,e)}const hr=b({fft_:Fb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cb(t){g(t.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${t.dtype}.`);const e={input:t};return w.runKernel(Si,e)}const vn=b({ifft_:Cb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(t){const e=t.shape[t.shape.length-1],n=t.size/e;let r;if(e<=2){const s=v(t,[n,e]);r=vn(s)}else{const s=[n,2*(e-1)],a=v(Jt(t),[n,e]),o=v(Bn(t),[n,e]),i=ut(q(a,[0,1],[n,e-2]),1),u=$(ut(q(o,[0,1],[n,e-2]),1),z(-1)),c=ie([a,i],1),p=ie([o,u],1),h=v(Ze(c,p),[s[0],s[1]]);r=vn(h)}if(r=Jt(r),t.rank===3&&t.shape[0]!==0){const s=r,a=t.shape[0];r=v(r,[a,r.shape[0]/a,r.shape[1]]),s.dispose()}return r}const sa=b({irfft_:Bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rb(t,e,n=0){const s={x:m(t,"x","split")},a={numOrSizeSplits:e,axis:n};return w.runKernel(Bu,s,a)}const Yt=b({split_:Rb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb(t,e){g(t.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${t.dtype}`);let n=t.shape[t.shape.length-1];const r=t.size/n;let s;if(e!=null&&e<n){const y=t.shape.map(N=>0),T=t.shape.map(N=>N);T[t.shape.length-1]=e,s=q(t,y,T),n=e}else if(e!=null&&e>n){const y=t.shape.map(T=>T);y[t.shape.length-1]=e-n,s=ie([t,_t(y)],t.shape.length-1),n=e}else s=t;const a=be(s),o=v(Ze(s,a),[r,n]),i=hr(o),u=Math.floor(n/2)+1,c=Jt(i),p=Bn(i),h=Yt(c,[u,n-u],c.shape.length-1),f=Yt(p,[u,n-u],p.shape.length-1),d=s.shape.slice();return d[s.shape.length-1]=u,v(Ze(h[0],f[0]),d)}const fr=b({rfft_:Pb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lb(t,e){let n=m(t,"a","squaredDifference"),r=m(e,"b","squaredDifference");[n,r]=ee(n,r),ne(n.shape,r.shape);const s={a:n,b:r},a={};return w.runKernel(ju,s,a)}const aa=b({squaredDifference_:Lb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(t,e){const n=m(t,"x","squeeze","string_or_numeric");return v(n,rs(n.shape,e).newShape)}const mr=b({squeeze_:zb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(t,e=0){const n=gn(t,"tensors","stack","string_or_numeric");g(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&g(e<=n[0].rank,()=>"Axis must be <= rank of the tensor");const r=n,s={axis:e};return w.runKernel(nu,r,s)}const Ve=b({stack_:Vb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ub(t,e=0){const r={x:m(t,"x","step")},s={alpha:e};return w.runKernel(rc,r,s)}const oa=b({step_:Ub});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jb(t,e,n,r,s=0,a=0,o=0,i=0,u=0){const p={x:m(t,"x","stridedSlice","string_or_numeric")},h={begin:e,end:n,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return w.runKernel(Wu,p,h)}const Pp=b({stridedSlice_:jb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qb(t){const n={x:m(t,"x","tan","float32")};return w.runKernel(Xu,n)}const Lp=b({tan_:qb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Se(t,e){Dt(t);const n=Je(t,e);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ct(t,null,n,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qt(t,e,n){if(Dt(t),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Je(t,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ct(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ia(t,e,n){if(Dt(t),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Je(t,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ct(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zp(t,e,n){if(Dt(t),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Je(t,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ct(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(t,e,n){if(Dt(t),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Je(t,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ct(t,e,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(t,e,n){if(Dt(t),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Je(t,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||r,ct(t,e,r,n)}function ua(t,e,n){const r=e.rank>1?e.shape[e.rank-1]:1,s=e.rank>1?e.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(t.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+t.length-r)throw new Error(a+` update.rank != ${s+t.length-r}`);for(let o=0;o<s;++o)if(n.shape[o]!==e.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${e.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==t[o+r])throw new Error(a+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${t[o+s]})`)}function dr(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}ua(n,e,t)}function jp(t,e,n){const r=e.shape.length,s=r>1?e.shape[r-1]:1,a=n.length;let o=1;for(let h=s;h<a;++h)o*=n[h];const i=s<1?1:s,u=J(e.shape)/i,c=[...tn(n.slice(0,s)),1],p=J(n);return{sliceRank:s,numUpdates:u,sliceSize:o,strides:c,outputSize:p}}const Wb=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:jp,validateInput:dr,validateUpdateShape:ua},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(t,e,n){const r=m(t,"tensor","tensorScatterupdate"),s=m(e,"indices","tensorScatterupdate","int32"),a=m(n,"updates","tensorScatterupdate");if(dr(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const o={tensor:r,indices:s,updates:a},i={};return w.runKernel(Su,o,i)}const qp=b({tensorScatterUpdate_:Mb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gb(t,e=1,n=!0){const r=m(t,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${e}`);const a={x:r},o={k:e,sorted:n},[i,u]=w.runKernel(Ju,a,o);return{values:i,indices:u}}const Wp=b({topk_:Gb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(t,e=0,n=1,r,s){if(Ne(t),r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const a=new ea(e,n,r,!0,s),o=Pe(t,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const Mp=b({truncatedNormal_:Kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hb(t,e=0){const n=m(t,"x","unique","string_or_numeric");g(n.rank>0,()=>"The input tensor must be at least 1D");const r={x:n},s={axis:e},[a,o]=w.runKernel(Qu,r,s);return{values:a,indices:o}}const Gp=b({unique_:Hb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xb(t,e,n){const r=m(t,"x","unsortedSegmentSum"),s=m(e,"segmentIds","unsortedSegmentSum","int32");g(Tt(n),()=>"numSegments must be of dtype int");const a={x:r,segmentIds:s},o={numSegments:n};return w.runKernel(tc,a,o)}const Kp=b({unsortedSegmentSum_:Xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zb(t,e=0){const n=m(t,"x","unstack","string_or_numeric");g(e>=-n.shape.length&&e<n.shape.length,()=>`Axis = ${e} is not in [-${n.shape.length}, ${n.shape.length})`);const r={value:n},s={axis:e};return w.runKernel(ec,r,s)}const lt=b({unstack_:Zb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(t,e){return cr(t,e,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(t,e=!0,n,r){return w.makeVariable(t,e,n,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(t,e){const n=[];for(let a=0;a<e.length;a++)e[a]&&n.push(a);const r=Pe(t,"int32"),s=Pe([n.length,t.length],"int32");for(let a=0;a<n.length;a++){const o=r.indexToLoc(n[a]),i=a*t.length;s.values.set(o,i)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Jb(t){const e=m(t,"condition","whereAsync","bool"),n=await e.data(),r=Zp(e.shape,n);return t!==e&&e.dispose(),r}const ca=Jb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Yb(t,e,n){const r=m(t,"tensor","boolMask"),s=m(e,"mask","boolMask","bool"),a=n??0,o=s.rank,i=r.shape;g(o>0,()=>"mask cannot be scalar"),ue(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let T=a;T<a+o;T++)u*=i[T];const c=i.slice(0,a).concat([u],i.slice(a+o)),p=v(r,c),h=v(s,[-1]),f=await ca(h),d=mr(f,[1]),y=Bs(p,d,a);return t!==r&&r.dispose(),e!==s&&s.dispose(),d.dispose(),p.dispose(),h.dispose(),f.dispose(),y}const Jp=Yb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(t,e,n){const r=m(t,"x","transpose");if(e==null&&(e=r.shape.map((o,i)=>i).reverse()),g(r.rank===e.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${e}.`),e.forEach(o=>{g(o>=0&&o<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${e}`)}),r.rank<=1)return r.clone();const s={x:r},a={perm:e};return r.dtype==="complex64"?V(()=>{let o=Jt(r),i=Bn(r);return o=w.runKernel(Vn,{x:o},a),i=w.runKernel(Vn,{x:i},a),n&&(i=Fe(i)),Ze(o,i)}):w.runKernel(Vn,s,a)}const Yn=b({transpose_:Qb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ew(t,e,n,r,s=!0){const a=m(t,"v","movingAverage"),o=m(e,"x","movingAverage"),i=m(n,"decay","movingAverage");Tc(a,o),g(Ce(a.shape,o.shape),()=>"Shape mismatch in v and x");const u=z(1),c=R(u,i);let p=$(R(o,a),c);if(s){g(r!=null,()=>"When using zeroDebias: true, step is required.");const h=m(r,"step","movingAverage");p=G(p,R(u,Ht(i,h)))}return F(a,p)}const Yp=b({movingAverage_:ew});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw(t,e,n){Ne(n);const r=m(t,"indices","scatterND","int32"),s=m(e,"updates","scatterND");dr(s,r,n);const a={indices:r,updates:s},o={shape:n};return w.runKernel(Tu,a,o)}const Qp=b({scatterND_:tw});function nw(t,e,n,r){if(t.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${t.shape}.`);const s=t.rank>0?t.shape[0]:1,a=t.rank>1?t.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=e.size;if(!(e.rank===0||e.rank===1&&o===s))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${s}]`);if(e.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rw(t,e,n,r=0){Ne(n);const s=m(t,"sparseIndices","sparseToDense","int32"),a=m(e,"sparseValues","sparseToDense","string_or_numeric"),o=m(r,"defaultValue","sparseToDense",a.dtype);nw(s,a,n,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},u={outputShape:n};return w.runKernel(Uu,i,u)}const eh=b({sparseToDense_:rw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(t,e){const n=m(e,"indices","gatherND","int32"),s={params:m(t,"x","gatherND","string_or_numeric"),indices:n};return w.runKernel(wi,s)}const th=b({gatherND_:sw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw(t,e){if(e==null)return t.shape.slice();if(Ce(t.shape,e))return e;if(t.shape.length===e.length){const n=[];for(let r=0;r<t.shape.length;r++)e[r]==null&&t.shape[r]!=null?n.push(t.shape[r]):n.push(e[r]);return n}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ow(t,e,n,r){const s=m(t,"x","dropout");if(g(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),g(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return t instanceof te?s.clone():s;const a=aw(s,n),o=1-e,i=G(Cs(F(pr(a,0,1,"float32",r),o)),o);return $(s,i)}const nh=b({dropout_:ow});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function la(t){return Math.floor(Math.pow(2,Math.ceil(Math.log(t)/Math.log(2))))}function gr(t,e,n){const r=1-t%2,s=new Float32Array(t);for(let a=0;a<t;++a){const o=2*Math.PI*a/(t+r-1);s[a]=e-n*Math.cos(o)}return Se(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function iw(t,e,n=1){const r=m(t,"predictions","inTopK"),s=m(e,"targets","inTopK");g(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),g(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),ue(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];g(n>0&&n<=a,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`);const o=await r.data(),i=await s.data(),[u,c]=[o.length/a,a],p=ss("bool",u);for(let h=0;h<u;h++){const f=h*c,d=o.subarray(f,f+c),y=[];for(let T=0;T<d.length;T++)y.push({value:d[T],index:T});y.sort((T,N)=>N.value-T.value),p[h]=0;for(let T=0;T<n;T++)if(y[T].index===i[h]){p[h]=1;break}}return t!==r&&r.dispose(),e!==s&&s.dispose(),Oe(p,s.shape,"bool")}const rh=iw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw(t,e,n,r,s,a="NHWC",o){let i=t;t.rank===3&&(i=v(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u=e;u.rank===3&&(u=v(e,[1,e.shape[0],e.shape[1],e.shape[2]])),g(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),g(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),g(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const c=a==="NHWC"?i.shape[3]:i.shape[1],p=a==="NHWC"?u.shape[3]:u.shape[1];g(c===n[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${n[2]}.`),g(p===n[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${n[3]}).`),Ie("conv2dDerFilter",s,o);const h={x:i,dy:u},f={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:n};return w.runKernel(jo,h,f)}const sh=b({conv2DBackpropFilter_:uw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yr(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return $(t,oa(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function br(t,e){let n=e;const r=Is(t.shape,e.shape);return r.length>0&&(n=M(n,r)),v(n,t.shape)}function wr(t,e,n,r){if(e==="linear")return t;if(e==="relu")return Rn(t);if(e==="elu")return Ds(t);if(e==="relu6")return na(t);if(e==="prelu")return Ks(t,n);if(e==="leakyrelu")return Ps(t,r);if(e==="sigmoid")return wt(t);throw new Error(`Unknown fused activation ${e}.`)}const Nr=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cw({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:p}){if(u=u||"linear",Nr(w.state.gradientDepth,u)===!1){g(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let x=Dn(t,e,n,r,s,a,o);return i!=null&&(x=F(x,i)),wr(x,u,c,p)}const h=m(t,"x","conv2d","float32"),f=m(e,"filter","conv2d","float32");let d=h,y=!1;h.rank===3&&(y=!0,d=v(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g(d.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`),g(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),Ie("fused conv2d",r,o);const T=s==="NHWC"?d.shape[3]:d.shape[1];g(f.shape[2]===T,()=>`Error in conv2d: depth of input (${T}) must match input depth for filter ${f.shape[2]}.`),g(Ye(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);const N=In(d.shape,f.shape,n,a,r,o);let S;i!=null&&(S=m(i,"bias","fused conv2d"),[S]=ee(S,h),s==="NHWC"?ne(N.outShape,S.shape):(g(S.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${S.shape.length}.`),g(S.shape.length===0||S.shape[0]===N.outChannels||S.shape[0]===1,()=>`Error in fused conv2d: bias shape (${S.shape}) is not compatible with the number of output channels (${N.outChannels})`)));let I;if(c!=null){const x=c.shape;if(g(x.length<=1||x.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${x.length}.`),x.length===1)g(x[0]===1||x[0]===N.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${x}) is not compatible with the number of output channels (${N.outChannels}).`);else if(x.length===3)try{ne(x,N.outShape)}catch{const O=`Error in fused conv2d: PReLU activation weights (${x}) is not compatible with the output shape of the conv2d (${N.outShape}).`;throw Error(O)}I=m(c,"prelu weights","fused conv2d")}const A=(x,D)=>{g(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[O,B,L,P]=D,K=yr(x,L,u);g(wn(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);const j=xs(B.shape,K,O,n,r),Z=sh(B,K,O.shape,n,r),re=[j,Z];if(P!=null){const ve=br(P,K);re.push(ve)}return re},k={x:d,filter:f,bias:S,preluActivationWeights:I},_={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:p};return i==null?ze((D,O,B)=>{let L=w.runKernel(Ir,k,_);return B([O,D,L]),y&&(L=v(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:A}})(d,f):ze((D,O,B,L)=>{let P=w.runKernel(Ir,k,_);return L([O,D,P,B]),y&&(P=v(P,[P.shape[1],P.shape[2],P.shape[3]])),{value:P,gradFunc:A}})(d,f,S)}const ah=b({fusedConv2d_:cw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lw(t,e,n,r,s,a=[1,1],o){let i=t;t.rank===3&&(i=v(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u=e;u.rank===3&&(u=v(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={x:i,dy:u},p={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:n};return w.runKernel(ei,c,p)}const oh=b({depthwiseConv2dNativeBackpropFilter_:lw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pw(t,e,n,r,s,a=[1,1],o){let i=e,u=!1;e.rank===3&&(u=!0,i=v(e,[1,e.shape[0],e.shape[1],e.shape[2]]));const c={dy:i,filter:n},p={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:t},h=w.runKernel(ti,c,p);return u?v(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const ih=b({depthwiseConv2dNativeBackpropInput_:pw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw({x:t,filter:e,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:p}){if(Nr(w.state.gradientDepth,u)===!1){let _=or(t,e,n,r,s,a,o);return i!=null&&(_=F(_,i)),wr(_,u,c,p)}const h=m(t,"x","depthwiseConv2d","float32"),f=m(e,"filter","depthwiseConv2d","float32");let d=h,y=!1;h.rank===3&&(y=!0,d=v(h,[1,h.shape[0],h.shape[1],h.shape[2]])),g(d.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),g(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),g(d.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),a==null&&(a=[1,1]),g(Ye(n,a),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),Ie("fused depthwiseConv2d",r,o);const T=In(d.shape,f.shape,n,a,r,o,!0);let N;i!=null&&(N=m(i,"bias","fused conv2d"),[N]=ee(N,h),ne(T.outShape,N.shape));let S;c!=null&&(S=m(c,"prelu weights","fused depthwiseConv2d"));const I=(_,x)=>{g(wn(a),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);const[D,O,B,L]=x,P=yr(_,B,u),K=ih(O.shape,P,D,n,r,a,o),j=oh(O,P,D.shape,n,r,a,o);if(L!=null){const Z=br(N,P);return[K,j,Z]}return[K,j]},A={x:d,filter:f,bias:N,preluActivationWeights:S},k={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:p};return i==null?ze((x,D,O)=>{let B=w.runKernel(Ar,A,k);return O([D,x,B]),y&&(B=v(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:I}})(d,f):ze((x,D,O,B)=>{let L=w.runKernel(Ar,A,k);return B([D,x,L,O]),y&&(L=v(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:I}})(d,f,N)}const fw=b({fusedDepthwiseConv2d_:hw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw({a:t,b:e,transposeA:n=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(Nr(w.state.gradientDepth,a)===!1){let P=U(t,e,n,r);return s!=null&&(P=F(P,s)),wr(P,a,o,i)}let u=m(t,"a","fused matMul"),c=m(e,"b","fused matMul");[u,c]=ee(u,c);const p=n?u.shape[u.rank-2]:u.shape[u.rank-1],h=r?c.shape[c.rank-1]:c.shape[c.rank-2],f=n?u.shape[u.rank-1]:u.shape[u.rank-2],d=r?c.shape[c.rank-2]:c.shape[c.rank-1],y=u.shape.slice(0,-2),T=c.shape.slice(0,-2),N=J(y),S=J(T);g(p===h,()=>`Error in fused matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${n} and transposeB=${r} must match.`);const A=ne(u.shape.slice(0,-2),c.shape.slice(0,-2)).concat([f,d]),k=n?v(u,[N,p,f]):v(u,[N,f,p]),_=r?v(c,[S,d,h]):v(c,[S,h,d]);let x;s!=null&&(x=m(s,"bias","fused matMul"),[x]=ee(x,u),ne(A,x.shape));let D;o!=null&&(D=m(o,"prelu weights","fused matMul"));const O=(P,K)=>{const[j,Z,re,ve]=K,Ue=yr(v(P,re.shape),re,a);let Ct,Bt;if(!n&&!r?(Ct=U(Ue,Z,!1,!0),Bt=U(j,Ue,!0,!1)):!n&&r?(Ct=U(Ue,Z,!1,!1),Bt=U(Ue,j,!0,!1)):n&&!r?(Ct=U(Z,Ue,!1,!0),Bt=U(j,Ue,!1,!1)):(Ct=U(Z,Ue,!0,!0),Bt=U(Ue,j,!0,!0)),s!=null){const jh=br(ve,Ue);return[Ct,Bt,jh]}else return[Ct,Bt]},B={a:k,b:_,bias:x,preluActivationWeights:D},L={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:i};return s==null?ze((K,j,Z)=>{const re=w.runKernel(xr,B,L);return Z([K,j,re]),{value:v(re,A),gradFunc:O}})(k,_):ze((K,j,Z,re)=>{const ve=w.runKernel(xr,B,L);return re([K,j,ve,Z]),{value:v(ve,A),gradFunc:O}})(k,_,x)}const uh=b({fusedMatMul_:mw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ch=Object.freeze(Object.defineProperty({__proto__:null,conv2d:ah,depthwiseConv2d:fw,matMul:uh},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(t){return gr(t,.54,.46)}const gw=b({hammingWindow_:dw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yw(t){return gr(t,.5,.5)}const lh=b({hannWindow_:yw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bw(t,e,n,r=!1,s=0){let a=0;const o=[];for(;a+e<=t.size;)o.push(q(t,a,e)),a+=n;if(r)for(;a<t.size;){const i=a+e-t.size,u=ie([q(t,a,e-i),nn([i],s)]);o.push(u),a+=n}return o.length===0?qt([],[0,e]):v(ie(o),[o.length,e])}const ph=b({frame_:bw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(t,e,n,r,s=lh){r==null&&(r=la(e));const a=ph(t,e,n),o=$(a,s(e));return fr(o,r)}const Nw=b({stft_:ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tw(t,e,n,r,s="bilinear",a=0){const o=m(t,"image","cropAndResize"),i=m(e,"boxes","cropAndResize","float32"),u=m(n,"boxInd","cropAndResize","int32"),c=i.shape[0];g(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),g(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${i.shape}.`),g(u.rank===1&&u.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${i.shape}.`),g(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),g(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),g(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const p={image:o,boxes:i,boxInd:u},h={method:s,extrapolationValue:a,cropSize:r};return w.runKernel(Zo,p,h)}const Sw=b({cropAndResize_:Tw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(t){const e=m(t,"image","flipLeftRight","float32");g(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);const n={image:e};return w.runKernel(mi,n,{})}const kw=b({flipLeftRight_:vw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ew(t){const e=m(t,"image","grayscaleToRGB"),n=e.rank-1,r=e.shape[n];g(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),g(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(e.rank);return s.fill(1,0,n),s[n]=3,jt(e,s)}const $w=b({grayscaleToRGB_:Ew});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _w(t){const e=m(t,"image","RGBToGrayscale"),n=e.rank-1,r=e.shape[n];g(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),g(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);const s=e.dtype,a=Q(e,"float32"),o=Se([.2989,.587,.114]);let i;switch(e.rank){case 2:i=dt("ij,j->i",a,o);break;case 3:i=dt("ijk,k->ij",a,o);break;case 4:i=dt("ijkl,l->ijk",a,o);break;case 5:i=dt("ijklm,m->ijkl",a,o);break;case 6:i=dt("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return i=je(i,-1),Q(i,s)}const xw=b({rgbToGrayscale_:_w});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iw(t,e,n=0,r=.5){const s=m(t,"image","rotateWithOffset","float32");g(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const a={image:s},o={radians:e,fillValue:n,center:r};return w.runKernel(sc,a,o)}const Aw=b({rotateWithOffset_:Iw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sn(t,e,n,r,s,a){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),a==null&&(a=0);const o=t.shape[0];return n=Math.min(n,o),g(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),g(t.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${t.rank}'`),g(t.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${t.shape[1]}`),g(e.rank===1,()=>"scores must be a 1D tensor"),g(e.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${e.shape[0]}`),g(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dw(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=m(t,"boxes","nonMaxSuppression","float32"),o=m(e,"scores","nonMaxSuppression","float32"),i=sn(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const u={maxOutputSize:n,iouThreshold:r,scoreThreshold:s};return w.runKernel(Ji,{boxes:a,scores:o},u)}const Ow=b({nonMaxSuppression_:Dw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fw(t,e,n){const r=Cw(t,e,n),s=r<0?-(r+1):r;t.splice(s,0,e)}function Cw(t,e,n){return Rw(t,e,n||Bw)}function Bw(t,e){return t>e?1:t<e?-1:0}function Rw(t,e,n){let r=0,s=t.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(e,t[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hh(t,e,n,r,s){return pa(t,e,n,r,s,0)}function fh(t,e,n,r,s,a){return pa(t,e,n,r,s,0,!1,a,!0)}function mh(t,e,n,r,s,a){return pa(t,e,n,r,s,a,!0)}function pa(t,e,n,r,s,a,o=!1,i=!1,u=!1){const c=[];for(let N=0;N<e.length;N++)e[N]>s&&c.push({score:e[N],boxIndex:N,suppressBeginIndex:0});c.sort(Ca);const p=a>0?-.5/a:0,h=[],f=[];for(;h.length<n&&c.length>0;){const N=c.pop(),{score:S,boxIndex:I,suppressBeginIndex:A}=N;if(S<s)break;let k=!1;for(let _=h.length-1;_>=A;--_){const x=Pw(t,I,h[_]);if(x>=r){k=!0;break}if(N.score=N.score*Lw(r,p,x),N.score<=s)break}N.suppressBeginIndex=h.length,k||(N.score===S?(h.push(I),f.push(N.score)):N.score>s&&Fw(c,N,Ca))}const d=h.length,y=n-d;i&&y>0&&(h.push(...new Array(y).fill(0)),f.push(...new Array(y).fill(0)));const T={selectedIndices:h};return o&&(T.selectedScores=f),u&&(T.validOutputs=d),T}function Pw(t,e,n){const r=t.subarray(e*4,e*4+4),s=t.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(s[0],s[2]),p=Math.min(s[1],s[3]),h=Math.max(s[0],s[2]),f=Math.max(s[1],s[3]),d=(i-a)*(u-o),y=(h-c)*(f-p);if(d<=0||y<=0)return 0;const T=Math.max(a,c),N=Math.max(o,p),S=Math.min(i,h),I=Math.min(u,f),A=Math.max(S-T,0)*Math.max(I-N,0);return A/(d+y-A)}function Lw(t,e,n){const r=Math.exp(e*n*n);return n<=t?r:0}function Ca(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function zw(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=m(t,"boxes","nonMaxSuppressionAsync"),o=m(e,"scores","nonMaxSuppressionAsync"),i=sn(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const u=await Promise.all([a.data(),o.data()]),c=u[0],p=u[1],{selectedIndices:h}=hh(c,p,n,r,s);return a!==t&&a.dispose(),o!==e&&o.dispose(),Se(h,"int32")}const Vw=zw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uw(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=m(t,"boxes","nonMaxSuppression"),i=m(e,"scores","nonMaxSuppression"),u=sn(o,i,n,r,s,a);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c={boxes:o,scores:i},p={maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a},h=w.runKernel(Qi,c,p);return{selectedIndices:h[0],selectedScores:h[1]}}const jw=b({nonMaxSuppressionWithScore_:Uw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function qw(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=m(t,"boxes","nonMaxSuppressionAsync"),i=m(e,"scores","nonMaxSuppressionAsync"),u=sn(o,i,n,r,s,a);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c=await Promise.all([o.data(),i.data()]),p=c[0],h=c[1],{selectedIndices:f,selectedScores:d}=mh(p,h,n,r,s,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:Se(f,"int32"),selectedScores:Se(d)}}const Ww=qw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=m(t,"boxes","nonMaxSuppression"),i=m(e,"scores","nonMaxSuppression"),u=sn(o,i,n,r,s,null),c=u.maxOutputSize,p=u.iouThreshold,h=u.scoreThreshold,f={boxes:o,scores:i},d={maxOutputSize:c,iouThreshold:p,scoreThreshold:h,padToMaxOutputSize:a},y=w.runKernel(Yi,f,d);return{selectedIndices:y[0],validOutputs:y[1]}}const Gw=b({nonMaxSuppressionPadded_:Mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Kw(t,e,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=m(t,"boxes","nonMaxSuppressionAsync"),i=m(e,"scores","nonMaxSuppressionAsync"),u=sn(o,i,n,r,s,null),c=u.maxOutputSize,p=u.iouThreshold,h=u.scoreThreshold,[f,d]=await Promise.all([o.data(),i.data()]),{selectedIndices:y,validOutputs:T}=fh(f,d,c,p,h,a);return o!==t&&o.dispose(),i!==e&&i.dispose(),{selectedIndices:Se(y,"int32"),validOutputs:z(T,"int32")}}const Hw=Kw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xw(t,e,n=!1,r=!1){const s=m(t,"images","resizeBilinear");g(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),g(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),g(r===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=v(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:r,size:e},c=w.runKernel(gu,i,u);return o?v(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const dh=b({resizeBilinear_:Xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zw(t,e,n=!1,r=!1){const s=m(t,"images","resizeNearestNeighbor");g(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),g(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),g(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),g(r===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let a=s,o=!1;s.rank===3&&(o=!0,a=v(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:r,size:e},c=w.runKernel(du,i,u);return o?v(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const gh=b({resizeNearestNeighbor_:Zw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jw(t,e="binary",n=!1,r=.5){const s=m(t,"image","threshold"),a=.2989,o=.587,i=.114,u=s.shape[0]*s.shape[1];let c=$(Se([r]),255),p,h,f,d;if(g(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),g(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),g(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),g(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),s.shape[2]===3){[p,h,f]=Yt(s,[1,1,1],-1);const N=$(p,a),S=$(h,o),I=$(f,i);d=F(F(N,S),I)}else d=t;if(e==="otsu"){const N=_s(Q(ra(d),"int32"),Oe([]),256);c=Yw(N,u)}const y=n?ir(d,c):Cn(d,c);return Q($(y,255),"int32")}function Yw(t,e){let n=Se([-1]),r=Se([0]),s=Se([0]),a,o,i,u,c,p;for(let h=0;h<t.size-1;h++){a=q(t,0,h+1),o=q(t,h+1),c=G(M(a),e),p=G(M(o),e);const f=M($(a,Zt(0,a.size)));i=G(f,M(a));const d=nn(o.shape,a.size),y=F(Zt(0,o.size),d),T=$(o,y);u=G(M(T),M(o));const N=R(i,u),S=R(i,u),I=$(c,p);s=$($(I,N),S);const A=Cn(s,r);r=He(A,s,r),n=He(A,Se([h]),n)}return n}const Qw=b({threshold_:Jw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e0(t,e,n="nearest",r="constant",s=0,a){const o=m(t,"image","transform","float32"),i=m(e,"transforms","transform","float32");g(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),g(i.rank===2&&(i.shape[0]===o.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),g(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);const u={image:o,transforms:i},c={interpolation:n,fillMode:r,fillValue:s,outputShape:a};return w.runKernel(Yu,u,c)}const t0=b({transform_:e0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function n0(t,e,n){const r=m(t,"a","bandPart");g(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[a,o]=r.shape.slice(-2);let i,u;typeof e=="number"?(g(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),g(e<=a,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${a}).`),i=m(e<0?a:e,"numLower","bandPart")):(g(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=He(Jn(e,0),a,Sn(e,a))),typeof n=="number"?(g(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),g(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),u=m(n<0?o:n,"numUpper","bandPart")):(g(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),u=He(Jn(n,0),o,Sn(n,o)));const c=v(Zt(0,a,1,"int32"),[-1,1]),p=Zt(0,o,1,"int32"),h=R(c,p),f=Nn(ir(h,i),Rs(h,Fe(u))),d=_t([a,o],r.dtype);return v(Ve(lt(v(r,[-1,a,o])).map(y=>He(f,y,d))),s)}const r0=b({bandPart_:n0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s0(t){let e;if(Array.isArray(t)){e=!1,g(t!=null&&t.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=t[0].shape[0];for(let a=1;a<t.length;++a)g(t[a].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${t[a].shape[0]} vs. ${s})`)}else e=!0,t=Yt(t,t.shape[0],0).map(s=>mr(s,[0]));g(t.length<=t[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${t.length}) exceeds number of dimensions (${t[0].shape[0]}).`);const n=[],r=t;for(let s=0;s<t.length;++s)n.push(w.tidy(()=>{let a=r[s];if(s>0)for(let o=0;o<s;++o){const i=$(M($(n[o],a)),n[o]);a=R(a,i)}return G(a,Fn(a,"euclidean"))}));return e?Ve(n,0):n}const a0=b({gramSchmidt_:s0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o0(t,e=!1){if(g(t.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${t.rank}`),t.rank===2)return Ba(t,e);{const n=t.shape.slice(0,t.shape.length-2).reduce((u,c)=>u*c),r=lt(v(t,[n,t.shape[t.shape.length-2],t.shape[t.shape.length-1]]),0),s=[],a=[];r.forEach(u=>{const[c,p]=Ba(u,e);s.push(c),a.push(p)});const o=v(Ve(s,0),t.shape),i=v(Ve(a,0),t.shape);return[o,i]}}function Ba(t,e=!1){return w.tidy(()=>{g(t.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${t.shape.length}D Tensor.`);const n=t.shape[0],r=t.shape[1];let s=Fs(n),a=Ke(t);const o=qt([[1]],[1,1]);let i=Ke(o);const u=n>=r?r:n;for(let c=0;c<u;++c){const p=a,h=i,f=s;[i,a,s]=w.tidy(()=>{const d=q(a,[c,c],[n-c,1]),y=Fn(d),T=q(a,[c,c],[1,1]),N=He(Cn(T,0),qt([[-1]]),qt([[1]])),S=R(T,$(N,y)),I=G(d,S);I.shape[0]===1?i=Ke(o):i=ie([o,q(I,[1,0],[I.shape[0]-1,I.shape[1]])],0);const A=Fe(G(U(N,S),y)),k=q(a,[c,0],[n-c,r]),_=$(A,i),x=Yn(i);if(c===0)a=R(k,U(_,U(x,k)));else{const B=R(k,U(_,U(x,k)));a=ie([q(a,[0,0],[c,r]),B],0)}const D=Yn(_),O=q(s,[0,c],[n,s.shape[1]-c]);if(c===0)s=R(O,U(U(O,i),D));else{const B=R(O,U(U(O,i),D));s=ie([q(s,[0,0],[n,c]),B],1)}return[i,a,s]}),pe([p,h,f])}return!e&&n>r&&(s=q(s,[0,0],[n,r]),a=q(a,[0,0],[r,r])),[s,a]})}const i0=b({qr_:o0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */exports.Reduction=void 0;(function(t){t[t.NONE=0]="NONE",t[t.MEAN=1]="MEAN",t[t.SUM=2]="SUM",t[t.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(exports.Reduction||(exports.Reduction={}));function u0(t,e,n=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){const r=m(t,"losses","computeWeightedLoss");let s=null;e!=null&&(s=m(e,"weights","computeWeightedLoss"));const a=s==null?r:$(r,s);if(n===exports.Reduction.NONE)return a;if(n===exports.Reduction.SUM)return M(a);if(n===exports.Reduction.MEAN){if(s==null)return Tn(a);{const o=r.size/s.size,i=G(M(a),M(s));return o>1?G(i,z(o)):i}}if(n===exports.Reduction.SUM_BY_NONZERO_WEIGHTS){if(s==null)return G(M(a),z(r.size));{const o=$(s,nt(r.shape)),i=Q(M(Ms(o,z(0))),"float32");return G(M(a),i)}}throw Error(`Unknown reduction: ${n}`)}const Qe=b({computeWeightedLoss_:u0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c0(t,e,n,r=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){const s=m(t,"labels","absoluteDifference"),a=m(e,"predictions","absoluteDifference");let o=null;n!=null&&(o=m(n,"weights","absoluteDifference")),ue(s.shape,a.shape,"Error in absoluteDifference: ");const i=ge(R(s,a));return Qe(i,o,r)}const l0=b({absoluteDifference_:c0});function p0(t,e,n,r,s=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){const a=m(t,"labels","cosineDistance"),o=m(e,"predictions","cosineDistance");let i=null;r!=null&&(i=m(r,"weights","cosineDistance")),ue(a.shape,o.shape,"Error in cosineDistance: ");const u=z(1),c=R(u,M($(a,o),n,!0));return Qe(c,i,s)}const h0=b({cosineDistance_:p0});function f0(t,e,n,r=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){let s=m(t,"labels","hingeLoss");const a=m(e,"predictions","hingeLoss");let o=null;n!=null&&(o=m(n,"weights","hingeLoss")),ue(s.shape,a.shape,"Error in hingeLoss: ");const i=z(1);s=R($(z(2),s),i);const u=Rn(R(i,$(s,a)));return Qe(u,o,r)}const m0=b({hingeLoss_:f0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(t,e,n,r=1,s=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){const a=m(t,"labels","huberLoss"),o=m(e,"predictions","huberLoss");let i=null;n!=null&&(i=m(n,"weights","huberLoss")),ue(a.shape,o.shape,"Error in huberLoss: ");const u=z(r),c=ge(R(o,a)),p=Sn(c,u),h=R(c,p),f=F($(z(.5),xe(p)),$(u,h));return Qe(f,i,s)}const g0=b({huberLoss_:d0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function y0(t,e,n,r=1e-7,s=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){const a=m(t,"labels","logLoss"),o=m(e,"predictions","logLoss");let i=null;n!=null&&(i=m(n,"weights","logLoss")),ue(a.shape,o.shape,"Error in logLoss: ");const u=z(1),c=z(r),p=Fe($(a,Xt(F(o,c)))),h=$(R(u,a),Xt(F(R(u,o),c))),f=R(p,h);return Qe(f,i,s)}const b0=b({logLoss_:y0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function w0(t,e,n,r=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){const s=m(t,"labels","meanSquaredError"),a=m(e,"predictions","meanSquaredError");let o=null;n!=null&&(o=m(n,"weights","meanSquaredError")),ue(s.shape,a.shape,"Error in meanSquaredError: ");const i=aa(s,a);return Qe(i,o,r)}const N0=b({meanSquaredError_:w0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T0(t,e){const n=m(t,"labels","sigmoidCrossEntropyWithLogits"),r=m(e,"logits","sigmoidCrossEntropyWithLogits");ue(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Rn(r),a=$(r,n),o=Ls(it(Fe(ge(r))));return F(R(s,a),o)}function S0(t,e,n,r=0,s=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){let a=m(t,"multiClassLabels","sigmoidCrossEntropy");const o=m(e,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=m(n,"weights","sigmoidCrossEntropy")),ue(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const c=z(r),p=z(1),h=z(.5);a=F($(a,R(p,c)),$(h,c))}const u=T0(a,o);return Qe(u,i,s)}const v0=b({sigmoidCrossEntropy_:S0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k0(t,e,n=-1){if(n===-1&&(n=e.rank-1),n!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${n}`);return ze((s,a,o)=>{const u=Vs(a,[n],!0),c=R(Q(a,"float32"),u);o([s,c]);const p=Fe($(c,s));return{value:M(p,[n]),gradFunc:(d,y)=>{const[T,N]=y,S=On(d.shape,[n]);return[$(v(d,S),R(Q(T,"float32"),it(N))),$(v(d,S),R(it(N),Q(T,"float32")))]}}})(t,e)}function E0(t,e,n,r=0,s=exports.Reduction.SUM_BY_NONZERO_WEIGHTS){let a=m(t,"onehotLabels","softmaxCrossEntropy");const o=m(e,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=m(n,"weights","softmaxCrossEntropy")),ue(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const c=z(r),p=z(1),h=z(a.shape[1]);a=F($(a,R(p,c)),G(c,h))}const u=k0(a,o);return Qe(u,i,s)}const $0=b({softmaxCrossEntropy_:E0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _0(t,e,n,r){const s=m(t,"indices","sparseFillEmptyRows","int32"),a=m(e,"values","sparseFillEmptyRows"),o=m(n,"denseShape","sparseFillEmptyRows","int32"),i=m(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(a.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(o.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:s,values:a,denseShape:o,defaultValue:i},c=w.runKernel(Pu,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const x0=b({sparseFillEmptyRows_:_0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function I0(t,e,n){const r=m(t,"inputIndices","sparseReshape","int32"),s=m(e,"inputShape","sparseReshape","int32"),a=m(n,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=w.runKernel(Lu,o);return{outputIndices:i[0],outputShape:i[1]}}const A0=b({sparseReshape_:I0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D0(t,e,n){const r=m(t,"data","sparseSegmentMean"),s=m(e,"indices","sparseSegmentMean","int32"),a=m(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return w.runKernel(zu,o)}const O0=b({sparseSegmentMean_:D0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F0(t,e,n){const r=m(t,"data","sparseSegmentSum"),s=m(e,"indices","sparseSegmentSum","int32"),a=m(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(a.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return w.runKernel(Vu,o)}const C0=b({sparseSegmentSum_:F0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B0(t,e,n,r,s,a,o,i){const u=m(t,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);const c=m(e,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const p={separator:n,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},h={data:u,dataSplits:c},f=w.runKernel(Mu,h,p);return{nGrams:f[0],nGramsSplits:f[1]}}const R0=b({stringNGrams_:B0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P0(t,e,n=!0){const r=m(t,"input","stringSplit","string"),s=m(e,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:n},o={input:r,delimiter:s},i=w.runKernel(Gu,o,a);return{indices:i[0],values:i[1],shape:i[2]}}const L0=b({stringSplit_:P0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function z0(t,e){const n=m(t,"input","stringToHashBucketFast","string"),r={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return w.runKernel(Ku,s,r)}const V0=b({stringToHashBucketFast_:z0});/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U0(t,e,n,r=!0){const s=m(t,"input","staticRegexReplace","string"),a={pattern:e,rewrite:n,replaceGlobal:r};return w.runKernel(qu,{x:s},a)}const j0=b({staticRegexReplace_:U0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yh={fft:hr,ifft:vn,rfft:fr,irfft:sa},bh={hammingWindow:gw,hannWindow:lh,frame:ph,stft:Nw},wh={flipLeftRight:kw,grayscaleToRGB:$w,resizeNearestNeighbor:gh,resizeBilinear:dh,rgbToGrayscale:xw,rotateWithOffset:Aw,cropAndResize:Sw,nonMaxSuppression:Ow,nonMaxSuppressionAsync:Vw,nonMaxSuppressionWithScore:jw,nonMaxSuppressionWithScoreAsync:Ww,nonMaxSuppressionPadded:Gw,nonMaxSuppressionPaddedAsync:Hw,threshold:Qw,transform:t0},Nh={bandPart:r0,gramSchmidt:a0,qr:i0},Th={absoluteDifference:l0,computeWeightedLoss:Qe,cosineDistance:h0,hingeLoss:m0,huberLoss:g0,logLoss:b0,meanSquaredError:N0,sigmoidCrossEntropy:v0,softmaxCrossEntropy:$0},Sh={sparseFillEmptyRows:x0,sparseReshape:A0,sparseSegmentMean:O0,sparseSegmentSum:C0},vh={stringNGrams:R0,stringSplit:L0,stringToHashBucketFast:V0,staticRegexReplace:j0};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q0=new Map,qr=new Map;class ha{getClassName(){return this.constructor.className}static fromConfig(e,n){return new e(n)}}class Ge{constructor(){this.classNameMap={}}static getMap(){return Ge.instance==null&&(Ge.instance=new Ge),Ge.instance}static register(e){Ge.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function fa(t,e,n){g(t.className!=null,()=>"Class being registered does not have the static className property defined."),g(typeof t.className=="string",()=>"className is required to be a string, but got type "+typeof t.className),g(t.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof n>"u"&&(n=t.className);const r=n,s=e+">"+r;return Ge.register(t),q0.set(s,t),qr.set(t,s),t}function W0(t){return qr.has(t)?qr.get(t):t.className}const M0=Object.freeze(Object.defineProperty({__proto__:null,Serializable:ha,SerializationMap:Ge,getRegisteredName:W0,registerClass:fa},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pt extends ha{minimize(e,n=!1,r){const{value:s,grads:a}=this.computeGradients(e,r);if(r!=null){const o=r.map(i=>({name:i.name,tensor:a[i.name]}));this.applyGradients(o)}else this.applyGradients(a);return pe(a),n?s:(s.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,n){return Wl(e,n)}dispose(){this.iterations_!=null&&pe(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:z(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(pt,Symbol.hasInstance,{value:t=>t.minimize!=null&&t.computeGradients!=null&&t.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kh extends pt{static get className(){return"Adadelta"}constructor(e,n,r=null){super(),this.learningRate=e,this.rho=n,this.epsilon=r,this.accumulatedGrads=[],this.accumulatedUpdates=[],r==null&&(this.epsilon=w.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=w.registeredVariables[r],o=!1;this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accum_grad`,variable:V(()=>be(a).variable(o))}),this.accumulatedUpdates[s]==null&&(this.accumulatedUpdates[s]={originalName:`${r}/accum_var`,variable:V(()=>be(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const u=this.accumulatedGrads[s].variable,c=this.accumulatedUpdates[s].variable;V(()=>{const p=F($(u,this.rho),$(xe(i),1-this.rho)),h=$(G(Le(F(c,this.epsilon)),Le(F(u,this.epsilon))),i),f=F($(c,this.rho),$(xe(h),1-this.rho));u.assign(p),c.assign(f);const d=F($(h,-this.learningRate),a);a.assign(d)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(pe(this.accumulatedGrads.map(e=>e.variable)),pe(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=e.length/2,r=!1;this.accumulatedGrads=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedUpdates=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Eh extends pt{static get className(){return"Adagrad"}constructor(e,n=.1){super(),this.learningRate=e,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=w.registeredVariables[r];this.accumulatedGrads[s]==null&&(this.accumulatedGrads[s]={originalName:`${r}/accumulator`,variable:V(()=>nn(a.shape,this.initialAccumulatorValue).variable(!1))});const o=Array.isArray(e)?e[s].tensor:e[r];if(o==null)return;const i=this.accumulatedGrads[s].variable;V(()=>{const u=F(i,xe(o));i.assign(u);const c=F($(G(o,Le(F(u,w.backend.epsilon()))),-this.learningRate),a);a.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&pe(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulatedGrads=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,n){return new e(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $h extends pt{static get className(){return"Adam"}constructor(e,n,r,s=null){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],V(()=>{this.accBeta1=z(n).variable(),this.accBeta2=z(r).variable()}),s==null&&(this.epsilon=w.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);V(()=>{const r=R(1,this.accBeta1),s=R(1,this.accBeta2);n.forEach((a,o)=>{const i=w.registeredVariables[a],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:V(()=>be(i).variable(u))}),this.accumulatedSecondMoment[o]==null&&(this.accumulatedSecondMoment[o]={originalName:`${a}/v`,variable:V(()=>be(i).variable(u))});const c=Array.isArray(e)?e[o].tensor:e[a];if(c==null)return;const p=this.accumulatedFirstMoment[o].variable,h=this.accumulatedSecondMoment[o].variable,f=F($(p,this.beta1),$(c,1-this.beta1)),d=F($(h,this.beta2),$(xe(c),1-this.beta2)),y=G(f,r),T=G(d,s);p.assign(f),h.assign(d);const N=F($(G(y,F(Le(T),this.epsilon)),-this.learningRate),i);i.assign(N)}),this.accBeta1.assign($(this.accBeta1,this.beta1)),this.accBeta2.assign($(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&pe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&pe(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e),V(()=>{this.accBeta1.assign(Ht(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ht(this.beta2,this.iterations_+1))});const n=e.length/2,r=!1;this.accumulatedFirstMoment=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedSecondMoment=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _h extends pt{static get className(){return"Adamax"}constructor(e,n,r,s=null,a=0){super(),this.learningRate=e,this.beta1=n,this.beta2=r,this.epsilon=s,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],V(()=>{this.iteration=z(0).variable(),this.accBeta1=z(n).variable()}),s==null&&(this.epsilon=w.backend.epsilon())}applyGradients(e){const n=Array.isArray(e)?e.map(r=>r.name):Object.keys(e);V(()=>{const r=R(1,this.accBeta1),s=G(-this.learningRate,F($(this.iteration,this.decay),1));n.forEach((a,o)=>{const i=w.registeredVariables[a],u=!1;this.accumulatedFirstMoment[o]==null&&(this.accumulatedFirstMoment[o]={originalName:`${a}/m`,variable:be(i).variable(u)}),this.accumulatedWeightedInfNorm[o]==null&&(this.accumulatedWeightedInfNorm[o]={originalName:`${a}/v`,variable:be(i).variable(u)});const c=Array.isArray(e)?e[o].tensor:e[a];if(c==null)return;const p=this.accumulatedFirstMoment[o].variable,h=this.accumulatedWeightedInfNorm[o].variable,f=F($(p,this.beta1),$(c,1-this.beta1)),d=$(h,this.beta2),y=ge(c),T=Ws(d,y);p.assign(f),h.assign(T);const N=F($(G(s,r),G(f,F(T,this.epsilon))),i);i.assign(N)}),this.iteration.assign(F(this.iteration,1)),this.accBeta1.assign($(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&pe(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&pe(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ma extends pt{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=Array.isArray(e)?e[s].tensor:e[r];if(a==null)return;const o=w.registeredVariables[r];V(()=>{const i=F($(this.c,a),o);o.assign(i)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=De(z(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,n){return new e(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xh extends ma{static get className(){return"Momentum"}constructor(e,n,r=!1){super(e),this.learningRate=e,this.momentum=n,this.useNesterov=r,this.accumulations=[],this.m=z(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=w.registeredVariables[r];this.accumulations[s]==null&&(this.accumulations[s]={originalName:`${r}/momentum`,variable:V(()=>be(a).variable(!1))});const o=this.accumulations[s].variable,i=Array.isArray(e)?e[s].tensor:e[r];i!=null&&V(()=>{let u;const c=F($(this.m,o),i);this.useNesterov?u=F($(this.c,F(i,$(c,this.m))),a):u=F($(this.c,c),a),o.assign(c),a.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&pe(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=!1;this.accumulations=e.map(r=>({originalName:r.name,variable:r.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ih extends pt{static get className(){return"RMSProp"}constructor(e,n=.9,r=0,s=null,a=!1){if(super(),this.learningRate=e,this.decay=n,this.momentum=r,this.epsilon=s,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,s==null&&(this.epsilon=w.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(r=>r.name):Object.keys(e)).forEach((r,s)=>{const a=w.registeredVariables[r],o=!1;this.accumulatedMeanSquares[s]==null&&(this.accumulatedMeanSquares[s]={originalName:`${r}/rms`,variable:V(()=>be(a).variable(o))}),this.accumulatedMoments[s]==null&&(this.accumulatedMoments[s]={originalName:`${r}/momentum`,variable:V(()=>be(a).variable(o))}),this.accumulatedMeanGrads[s]==null&&this.centered&&(this.accumulatedMeanGrads[s]={originalName:`${r}/mg`,variable:V(()=>be(a).variable(o))});const i=Array.isArray(e)?e[s].tensor:e[r];if(i==null)return;const u=this.accumulatedMeanSquares[s].variable,c=this.accumulatedMoments[s].variable;V(()=>{const p=F($(u,this.decay),$(xe(i),1-this.decay));if(this.centered){const h=this.accumulatedMeanGrads[s].variable,f=F($(h,this.decay),$(i,1-this.decay)),d=G($(i,this.learningRate),Le(R(p,F(xe(f),this.epsilon)))),y=F($(c,this.momentum),d);u.assign(p),h.assign(f),c.assign(y);const T=R(a,y);a.assign(T)}else{const h=F($(u,this.decay),$(xe(i),1-this.decay)),f=F($(c,this.momentum),G($(i,this.learningRate),Le(F(h,this.epsilon))));u.assign(h),c.assign(f);const d=R(a,f);a.assign(d)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&pe(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&pe(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&pe(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(e){e=await this.extractIterations(e);const n=this.centered?e.length/3:e.length/2,r=!1;this.accumulatedMeanSquares=e.slice(0,n).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.accumulatedMoments=e.slice(n,n*2).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})),this.centered&&(this.accumulatedMeanGrads=e.slice(n*2,n*3).map(s=>({originalName:s.name,variable:s.tensor.variable(r)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G0=[kh,Eh,$h,_h,xh,Ih,ma];function K0(){for(const t of G0)fa(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const H0="model",X0=".json",Z0=".weights.bin";function Ra(t){return new Promise(e=>setTimeout(e)).then(t)}class xt{constructor(e){if(!C().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(xt.URL_SCHEME)&&(e=e.slice(xt.URL_SCHEME.length)),(e==null||e.length===0)&&(e=H0),this.modelJsonFileName=e+X0,this.weightDataFileName=e+Z0}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=Re.join(e.weightData),r=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],a=Fc(e,s),o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=o,await Ra(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=r,await Ra(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:xn(e)}}}}xt.URL_SCHEME="downloads://";class J0{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,n)=>{const r=new FileReader;r.onload=s=>{const a=JSON.parse(s.target.result),o=a.modelTopology;if(o==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(a.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:o});return}const u=Ts(a,c=>this.loadWeights(c));e(u)},r.onerror=s=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(e){const n=[],r=[];for(const o of e)n.push(...o.weights),r.push(...o.paths);const s=this.checkManifestAndWeightFiles(e),a=r.map(o=>this.loadWeightsFile(o,s[o]));return Promise.all(a).then(o=>[n,o])}loadWeightsFile(e,n){return new Promise((r,s)=>{const a=new FileReader;a.onload=o=>{const i=o.target.result;r(i)},a.onerror=o=>s(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(e){const n=[],r=this.weightsFiles.map(a=>Fa(a.name)),s={};for(const a of e)a.paths.forEach(o=>{const i=Fa(o);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),r.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);s[o]=this.weightsFiles[r.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const Y0=t=>C().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(xt.URL_SCHEME)?Q0(t.slice(xt.URL_SCHEME.length)):null;Y.registerSaveRouter(Y0);function Q0(t="model"){return new xt(t)}function e1(t){return new J0(t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pa(t,e,n,r){o(t),n=n??0,r=r??1,i(n,r);let s=0;const a=u=>(u.then(c=>{const p=n+ ++s/t.length*(r-n);return e(p),c}),u);function o(u){g(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function i(u,c){g(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),g(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),g(c>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${c}`)}return Promise.all(t.map(a))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Ah(t,e){e==null&&(e={});const n=e.fetchFunc==null?C().platform.fetch:e.fetchFunc,r=t.map(h=>n(h,e.requestInit,{isBinary:!0})),i=(e.onProgress==null?await Promise.all(r):await Pa(r,e.onProgress,0,.5)).map(h=>h.arrayBuffer());return e.onProgress==null?await Promise.all(i):await Pa(i,e.onProgress,.5,1)}function t1(t,e){var n;const r=e.fetchFunc==null?C().platform.fetch:e.fetchFunc;let s=0,a;return(n=e.onProgress)===null||n===void 0||n.call(e,0),new ReadableStream({pull:async o=>{for(var i;s<t.length;){a||(a=(await r(t[s],e.requestInit,{isBinary:!0})).body.getReader());const{done:u,value:c}=await a.read();if(u){s++,a=void 0,(i=e.onProgress)===null||i===void 0||i.call(e,s/t.length);continue}o.enqueue(c);return}o.close()}})}async function Dh(t,e="",n,r){return Oh(o=>Ah(o,{requestInit:r}))(t,e,n)}function Oh(t){return async(e,n="",r)=>{const s=e.map(()=>!1),a={},o=r!=null?r.map(()=>!1):[],i=[];if(e.forEach((d,y)=>{let T=0;d.weights.forEach(N=>{const S="quantization"in N?N.quantization.dtype:N.dtype,I=vt[S]*J(N.shape),A=()=>{s[y]=!0,a[y]==null&&(a[y]=[]),a[y].push({manifestEntry:N,groupOffset:T,sizeBytes:I})};r!=null?r.forEach((k,_)=>{k===N.name&&(A(),o[_]=!0)}):A(),i.push(N.name),T+=I})}),!o.every(d=>d)){const d=r.filter((y,T)=>!o[T]);throw new Error(`Could not find weights in manifest with names: ${d.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const u=s.reduce((d,y,T)=>(y&&d.push(T),d),[]),c=[];u.forEach(d=>{e[d].paths.forEach(y=>{const T=n+(n.endsWith("/")?"":"/")+y;c.push(T)})});const p=await t(c),h={};let f=0;return u.forEach(d=>{const y=e[d].paths.length,T=new Re(p.slice(f,f+y));a[d].forEach(S=>{const I=T.slice(S.groupOffset,S.groupOffset+S.sizeBytes),A=bs(I,[S.manifestEntry]);for(const k in A)h[k]=A[k]}),f+=y}),h}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const n1="application/octet-stream",r1="application/json";class da{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(g(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=C().platform.fetch,g(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&g(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],s=Fc(e,r);if(n.body.append("model.json",new Blob([JSON.stringify(s)],{type:r1}),"model.json"),e.weightData!=null){const o=Re.join(e.weightData);n.body.append("model.weights.bin",new Blob([o],{type:n1}),"model.weights.bin")}const a=await this.fetch(this.path,n);if(a.ok)return{modelArtifactsInfo:xn(e),responses:[a]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await e.json()}catch{let o=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?o+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":o+=" Please make sure the server is serving valid JSON for this request.",new Error(o)}const r=n.modelTopology,s=n.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return Ts(e,n=>this.loadWeights(n))}async loadStream(){const e=await this.loadModelJSON(),n=await this.getWeightUrls(e.weightsManifest),r=Hn(e.weightsManifest),s=()=>t1(n,this.loadOptions);return Object.assign(Object.assign({},e),{weightSpecs:r,getWeightStream:s})}async getWeightUrls(e){const n=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=s1(n),a=this.weightPathPrefix||r,o=[],i=[];for(const u of e)for(const c of u.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(c)):o.push(a+c+s);return this.weightUrlConverter&&o.push(...await Promise.all(i)),o}async loadWeights(e){const n=await this.getWeightUrls(e),r=Hn(e),s=await Ah(n,this.loadOptions);return[r,s]}}da.URL_SCHEME_REGEX=/^https?:\/\//;function s1(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),r=t.substring(0,e),s=n>e?t.substring(n):"";return[r+"/",s]}function Wr(t){return t.match(da.URL_SCHEME_REGEX)!=null}const Fh=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(r=>Wr(r)):n=Wr(t),n)return ga(t,e)}return null};Y.registerSaveRouter(Fh);Y.registerLoadRouter(Fh);function ga(t,e){return new da(t,e)}function Ch(t,e){return ga(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Er{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Bh{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class a1{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=n=>Promise.resolve(e.save(n)))}}function o1(t,e,n,r){const s=arguments;return new a1(Qn(...s))}function Qn(t,e,n,r){return arguments.length===1?t.modelTopology!=null||t.weightSpecs!=null?new Er(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Er({modelTopology:t})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Er({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r}))}function i1(t){return new Bh(t)}function u1(t){return new Bh(t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ya=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Re,browserFiles:e1,browserHTTPRequest:Ch,concatenateArrayBuffers:Oc,copyModel:Mm,decodeWeights:bs,decodeWeightsStream:Dc,encodeWeights:Ic,fromMemory:o1,fromMemorySync:Qn,getLoadHandlers:Bc,getModelArtifactsForJSON:Ts,getModelArtifactsForJSONSync:Ns,getModelArtifactsInfoForJSON:xn,getSaveHandlers:Cc,getWeightSpecs:Hn,http:ga,isHTTPScheme:Wr,listModels:qm,loadWeights:Dh,moveModel:Gm,registerLoadRouter:Dm,registerSaveRouter:Am,removeModel:Wm,weightsLoaderFactory:Oh,withSaveHandler:i1,withSaveHandlerSync:u1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ht,La=!1;function Rh(t,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(t==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(t.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&t instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement)a=!0;else if(t.getContext!=null)o=!0;else if(typeof ImageBitmap<"u"&&t instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${t.constructor.name}`);if(mn(_r,w.backendName)!=null){const y={pixels:t},T={numChannels:e};return w.runKernel(_r,y,T)}const[c,p]=s?[t.videoWidth,t.videoHeight]:[t.width,t.height];let h;if(o)h=t.getContext("2d").getImageData(0,0,c,p).data;else if(r||n)h=t.data;else if(a||s||i){if(ht==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")ht=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else ht=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});ht.canvas.width=c,ht.canvas.height=p,ht.drawImage(t,0,0,c,p),h=ht.getImageData(0,0,c,p).data}let f;if(e===4)f=new Int32Array(h);else{const y=c*p;f=new Int32Array(y*e);for(let T=0;T<y;T++)for(let N=0;N<e;++N)f[T*e+N]=h[T*4+N]}return ia(f,[p,c,e],"int32")}function c1(t){return t!=null&&t.data instanceof Uint8Array}function l1(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function p1(t){return t!=null&&t.width!==0&&t.height!==0}function h1(t){return l1()&&!(t instanceof ImageBitmap)&&p1(t)&&!c1(t)}async function f1(t,e=3){let n=null;if(C().getBool("WRAP_TO_IMAGEBITMAP")&&h1(t)){let r;try{r=await createImageBitmap(t,{premultiplyAlpha:"none"})}catch{r=null}r!=null&&r.width===t.width&&r.height===t.height?n=r:n=t}else n=t;return Rh(n,e)}function Ph(t){if(t.rank!==2&&t.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${t.rank}.`);const e=t.rank===2?1:t.shape[2];if(e>4||e===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);if(t.dtype!=="float32"&&t.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${t.dtype}. Please use float32 or int32 tensors.`)}function m1(t){const e=t?.alpha||1;if(e>1||e<0)throw new Error(`Alpha value ${e} is suppoed to be in range [0 - 1].`)}async function d1(t,e){let n=m(t,"img","toPixels");if(!(t instanceof te)){const c=n;n=Q(c,"int32"),c.dispose()}Ph(n);const[r,s]=n.shape.slice(0,2),a=n.rank===2?1:n.shape[2],o=await n.data(),i=n.dtype==="float32"?255:1,u=new Uint8ClampedArray(s*r*4);for(let c=0;c<r*s;++c){const p=[0,0,0,255];for(let f=0;f<a;f++){const d=o[c*a+f];if(n.dtype==="float32"){if(d<0||d>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if(n.dtype==="int32"&&(d<0||d>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);a===1?(p[0]=d*i,p[1]=d*i,p[2]=d*i):p[f]=d*i}const h=c*4;u[h+0]=Math.round(p[0]),u[h+1]=Math.round(p[1]),u[h+2]=Math.round(p[2]),u[h+3]=Math.round(p[3])}if(e!=null){La||mn(cs,w.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),La=!0),e.width=s,e.height=r;const c=e.getContext("2d"),p=new ImageData(u,s,r);c.putImageData(p,0,0)}return n!==t&&n.dispose(),u}function g1(t,e,n){let r=m(t,"img","draw");if(!(t instanceof te)){const o=r;r=Q(o,"int32"),o.dispose()}Ph(r),m1(n?.imageOptions);const s={image:r},a={canvas:e,options:n};w.runKernel(cs,s,a)}const Lh=b({fromPixels_:Rh}),y1=Object.freeze(Object.defineProperty({__proto__:null,draw:g1,fromPixels:Lh,fromPixelsAsync:f1,toPixels:d1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */K0();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const b1=C();b1.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var me;(function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"})(me||(me={}));var za;(function(t){(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))})(za||(za={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ba={};function w1(t,e){const n={tfOpName:t,category:"custom",inputs:[],attrs:[],customExecutor:e};ba[t]=n}function zh(t){return ba[t]}function N1(t){delete ba[t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l(t,e,n,r,s){const a=e.inputParams[t];if(a&&a.inputIndexStart!==void 0){const i=a.inputIndexStart,u=a.inputIndexEnd===0?void 0:a.inputIndexEnd===void 0?i+1:a.inputIndexEnd,c=i<0?e.inputNames.length+i:i;if(a.type==="tensor")return ae(e.inputNames[c],n,r,s);if(a.type==="tensors"){const f=e.inputs.slice(i,u);return e.inputNames.slice(i,u).filter((y,T)=>{var N;return((N=f[T])===null||N===void 0?void 0:N.op)!=="NoOp"}).map(y=>ae(y,n,r,s))}const p=ae(e.inputNames[c],n,r,s),h=p.dataSync();return a.type==="number"?h[0]:rt(p.shape,h)}const o=e.attrParams[t];return o&&o.value}function ae(t,e,n,r){const[s,a]=de(t,n);if(r!=null){const i=r.getHashTableHandleByName(s);if(i!=null)return i}const o=n.currentContextIds.find(i=>!!e[er(s,i)]);return o!==void 0?e[er(s,o)][a]:void 0}function Va(t,e,n){return e[er(t,n.currentContextId)]}function qe(t,e){const[n,r,s]=de(t,e);return[er(n,e&&e.currentContextId),r,s]}function er(t,e){return e?`${t}-${e}`:t}function de(t,e){if(t==="")return["",0,void 0];const n=e!=null&&e.parseNodeNameCache!=null;if(n){const a=e.parseNodeNameCache.get(t);if(a!=null)return a}const r=t.split(":");let s;if(r.length===1)s=[t,0,void 0];else{const a=r[0],o=r.length===3?r[1]:void 0,i=Number(r[r.length-1]);s=[a,i,o]}return n&&e.parseNodeNameCache.set(t,s),s}function qn(t,e,n){let r=l("pad",t,e,n);if(r==="explicit"){r=l("explicitPaddings",t,e,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let a=0;a<4;a++)s[a][0]=r[a*2],s[a][1]=r[a*2+1];return s}return r}function We(t){return t.kept?t:Ke(t)}/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const T1=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],S1=Object.freeze(Object.defineProperty({__proto__:null,json:T1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const v1=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],k1=Object.freeze(Object.defineProperty({__proto__:null,json:v1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E1=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],$1=Object.freeze(Object.defineProperty({__proto__:null,json:E1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _1=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],x1=Object.freeze(Object.defineProperty({__proto__:null,json:_1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I1=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],A1=Object.freeze(Object.defineProperty({__proto__:null,json:I1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const D1=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],O1=Object.freeze(Object.defineProperty({__proto__:null,json:D1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F1=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],C1=Object.freeze(Object.defineProperty({__proto__:null,json:F1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B1=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],R1=Object.freeze(Object.defineProperty({__proto__:null,json:B1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P1=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],L1=Object.freeze(Object.defineProperty({__proto__:null,json:P1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z1=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],V1=Object.freeze(Object.defineProperty({__proto__:null,json:z1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U1=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],j1=Object.freeze(Object.defineProperty({__proto__:null,json:U1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q1=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],W1=Object.freeze(Object.defineProperty({__proto__:null,json:q1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M1=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],G1=Object.freeze(Object.defineProperty({__proto__:null,json:M1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const K1=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],H1=Object.freeze(Object.defineProperty({__proto__:null,json:K1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X1=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],Z1=Object.freeze(Object.defineProperty({__proto__:null,json:X1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J1=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],Y1=Object.freeze(Object.defineProperty({__proto__:null,json:J1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q1=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],eN=Object.freeze(Object.defineProperty({__proto__:null,json:Q1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tN=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],nN=Object.freeze(Object.defineProperty({__proto__:null,json:tN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rN=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],sN=Object.freeze(Object.defineProperty({__proto__:null,json:rN},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ua{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[S1,k1,$1,x1,A1,O1,C1,R1,L1,V1,j1,W1,G1,H1,Z1,Y1,eN,nN,sN],n=[].concat(...e.map(r=>r.json));this.opMappers=n.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(e,n={}){const r=e.node,s=[],a=[],o=[],i=r.reduce((T,N)=>(T[N.name]=this.mapNode(N),N.op.startsWith("Placeholder")?s.push(T[N.name]):N.op==="Const"?a.push(T[N.name]):(N.input==null||N.input.length===0)&&o.push(T[N.name]),T),{});let u=[];const c=[];let p={},h={};n!=null&&(p=this.mapSignatureEntries(n.inputs),h=this.mapSignatureEntries(n.outputs));const f=Object.keys(i);f.forEach(T=>{const N=i[T];N.inputNames.forEach((S,I)=>{const[A,,k]=qe(S),_=i[A];if(_.outputs!=null){const x=_.outputs.indexOf(k);if(x!==-1){const D=`${A}:${x}`;N.inputNames[I]=D}}N.inputs.push(_),_.children.push(N)})}),Object.keys(h).length===0?f.forEach(T=>{const N=i[T];N.children.length===0&&c.push(N)}):Object.keys(h).forEach(T=>{const[N]=qe(T),S=i[N];S!=null&&(S.signatureKey=h[T],c.push(S))}),Object.keys(p).length>0?Object.keys(p).forEach(T=>{const[N]=qe(T),S=i[N];S&&(S.signatureKey=p[T],u.push(S))}):u=s;let d={};e.library!=null&&e.library.function!=null&&(d=e.library.function.reduce((T,N)=>(T[N.signature.name]=this.mapFunction(N),T),{}));const y={nodes:i,inputs:u,outputs:c,weights:a,placeholders:s,signature:n,functions:d};return o.length>0&&(y.initNodes=o),y}mapSignatureEntries(e){return Object.keys(e||{}).reduce((n,r)=>(n[e[r].name]=r,n),{})}mapNode(e){const n=zh(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});const r={name:e.name,op:e.op,category:n.category,inputNames:(e.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:n.outputs};return n.inputs!=null&&(r.inputParams=n.inputs.reduce((s,a)=>(s[a.name]={type:a.type,inputIndexStart:a.start,inputIndexEnd:a.end},s),{})),n.attrs!=null&&(r.attrParams=n.attrs.reduce((s,a)=>{const o=a.type;let i;switch(a.type){case"string":i=Mr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Mr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"string[]":i=Yr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Yr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number":i=Kr(e.attr,a.tfName,a.defaultValue||0),i===void 0&&a.tfDeprecatedName&&(i=Kr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"number[]":i=Jr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Jr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool":i=Gr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Gr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"bool[]":i=es(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=es(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape":i=Zr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Zr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"shape[]":i=Qr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Qr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype":i=Hr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Hr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"dtype[]":i=Xr(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=Xr(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"func":i=ja(e.attr,a.tfName,a.defaultValue),i===void 0&&a.tfDeprecatedName&&(i=ja(e.attr,a.tfDeprecatedName,a.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${a.type} for op: ${e.op}`)}return s[a.name]={value:i,type:o},s},{})),r}mapFunction(e){const n=e.nodeDef,r=[],s=[];let a={};n!=null&&(a=n.reduce((h,f)=>(h[f.name]=this.mapNode(f),f.op==="Const"&&s.push(h[f.name]),h),{}));const o=[],i=[];e.signature.inputArg.forEach(h=>{const[f]=qe(h.name),d={name:f,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:wa(h.type),type:"dtype"}},children:[]};d.signatureKey=h.name,o.push(d),a[f]=d}),Object.keys(a).forEach(h=>{const f=a[h];f.inputNames.forEach((d,y)=>{const[T,,N]=qe(d),S=a[T];if(S.outputs!=null){const I=S.outputs.indexOf(N);if(I!==-1){const A=`${T}:${I}`;f.inputNames[y]=A}}f.inputs.push(S),S.children.push(f)})});const c=e.ret;e.signature.outputArg.forEach(h=>{const[f,d]=qe(c[h.name]),y=a[f];y!=null&&(y.defaultOutput=d,i.push(y))});const p=this.mapArgsToSignature(e);return{nodes:a,inputs:o,outputs:i,weights:s,placeholders:r,signature:p}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r),n),{}),outputs:e.signature.outputArg.reduce((n,r)=>(n[r.name]=this.mapArgToTensorInfo(r,e.ret),n),{})}}mapArgToTensorInfo(e,n){let r=e.name;return n!=null&&(r=n[r]),{name:r,dtype:e.type}}}function aN(t){const e=C().global;if(typeof e.atob<"u")return e.atob(t);if(typeof Buffer<"u")return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Vh(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):aN(t);return e?n:n.toLowerCase()}function Mr(t,e,n,r=!1){const s=t[e];return s!=null?Vh(s.s,r):n}function Gr(t,e,n){const r=t[e];return r?r.b:n}function Kr(t,e,n){const r=t[e]||{},s=r.i!=null?r.i:r.f!=null?r.f:n;return typeof s=="number"?s:parseInt(s,10)}function wa(t){switch(typeof t=="string"&&(t=me[t]),t){case me.DT_FLOAT:case me.DT_HALF:return"float32";case me.DT_INT32:case me.DT_INT64:case me.DT_INT8:case me.DT_UINT8:return"int32";case me.DT_BOOL:return"bool";case me.DT_DOUBLE:return"float32";case me.DT_STRING:return"string";case me.DT_COMPLEX64:case me.DT_COMPLEX128:return"complex64";default:return null}}function ja(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function Hr(t,e,n){const r=t[e];return r&&r.type?wa(r.type):n}function Xr(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map(s=>wa(s)):n}function Uh(t){if(!t.unknownRank)return t.dim!=null?t.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Zr(t,e,n){const r=t[e];return r&&r.shape?Uh(r.shape):n}function Jr(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):n}function Yr(t,e,n,r=!1){const s=t[e];return s&&s.list&&s.list.s?s.list.s.map(a=>Vh(a,r)):n}function Qr(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Uh(s)):n}function es(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class oN{constructor(e,n,r){this.node=e,this.tensorMap=n,this.context=r,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(s=>this.getInput(s)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((s,a)=>(s[a]=this.getAttr(a),s),{}))}getInput(e){return ae(e,this.tensorMap,this.context)}getAttr(e,n){const r=this.node.rawAttrs[e];if(r.tensor!=null)return ae(e,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Kr(this.node.rawAttrs,e,n);if(r.s!=null)return Mr(this.node.rawAttrs,e,n);if(r.b!=null)return Gr(this.node.rawAttrs,e,n);if(r.shape!=null)return Zr(this.node.rawAttrs,e,n);if(r.type!=null)return Hr(this.node.rawAttrs,e,n);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return Jr(this.node.rawAttrs,e,n);if(r.list.s!=null)return Yr(this.node.rawAttrs,e,n);if(r.list.shape!=null)return Qr(this.node.rawAttrs,e,n);if(r.list.b!=null)return es(this.node.rawAttrs,e,n);if(r.list.type!=null)return Xr(this.node.rawAttrs,e,n)}return n}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oe=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:ys,abs:ge,acos:qc,acosh:Wc,add:F,addN:Mc,all:Gc,any:Kc,argMax:Hc,argMin:Xc,asin:Zc,asinh:Jc,atan:Yc,atan2:Qc,atanh:el,avgPool:Es,avgPool3d:sl,basicLSTMCell:al,batchNorm:An,batchNorm2d:ol,batchNorm3d:il,batchNorm4d:ul,batchToSpaceND:$s,bincount:_s,bitwiseAnd:cl,booleanMaskAsync:Jp,broadcastArgs:ll,broadcastTo:ln,buffer:Pe,cast:Q,ceil:pl,clipByValue:hl,clone:Ke,complex:Ze,concat:ie,concat1d:fl,concat2d:ml,concat3d:dl,concat4d:gl,conv1d:yl,conv2d:Dn,conv2dTranspose:bl,conv3d:wl,conv3dTranspose:Tl,cos:Sl,cosh:vl,cosineWindow:gr,cumprod:kl,cumsum:El,denseBincount:$l,depthToSpace:_l,depthwiseConv2d:or,diag:xl,dilation2d:Il,div:G,divNoNan:Dl,dot:Ol,dropout:nh,einsum:dt,elu:Ds,enclosingPowerOfTwo:la,ensureShape:Fl,equal:As,erf:Cl,euclideanNorm:Pl,exp:it,expandDims:je,expm1:Ll,eye:Fs,fft:hr,fill:nn,floor:Cs,floorDiv:vs,fused:ch,gather:Bs,gatherND:th,greater:Cn,greaterEqual:Rs,ifft:vn,imag:Bn,image:wh,inTopKAsync:rh,irfft:sa,isFinite:zl,isInf:Vl,isNaN:Ul,leakyRelu:Ps,less:Jn,lessEqual:ir,linalg:Nh,linspace:jl,localResponseNormalization:ql,log:Xt,log1p:Ls,logSigmoid:Ml,logSoftmax:Gl,logSumExp:Vs,logicalAnd:Nn,logicalNot:Us,logicalOr:js,logicalXor:Kl,losses:Th,lowerBound:Hl,matMul:U,max:Nt,maxPool:qs,maxPool3d:Xl,maxPoolWithArgmax:Zl,maximum:Ws,mean:Tn,meshgrid:Jl,min:Zn,minimum:Sn,mirrorPad:Yl,mod:Ql,moments:ep,movingAverage:Yp,mul:$,multiRNNCell:tp,multinomial:np,neg:Fe,norm:Fn,notEqual:Ms,oneHot:rp,ones:nt,onesLike:sp,op:b,outerProduct:ap,pad:rn,pad1d:op,pad2d:ip,pad3d:up,pad4d:cp,pool:lp,pow:Ht,prelu:Ks,print:Ss,prod:pp,raggedGather:hp,raggedRange:fp,raggedTensorToTensor:mp,rand:dp,randomGamma:yp,randomNormal:ta,randomStandardNormal:bp,randomUniform:pr,randomUniformInt:wp,range:Zt,real:Jt,reciprocal:Np,relu:Rn,relu6:na,reshape:v,reverse:ut,reverse1d:Tp,reverse2d:Sp,reverse3d:vp,reverse4d:kp,rfft:fr,round:ra,rsqrt:Ep,scalar:z,scatterND:Qp,searchSorted:cr,selu:$p,separableConv2d:_p,setdiff1dAsync:xp,sigmoid:wt,sign:Ip,signal:bh,sin:Ap,sinh:Dp,slice:q,slice1d:Op,slice2d:Fp,slice3d:Cp,slice4d:Bp,softmax:Rp,softplus:zs,spaceToBatchND:Gs,sparse:Sh,sparseToDense:eh,spectral:yh,split:Yt,sqrt:Le,square:xe,squaredDifference:aa,squeeze:mr,stack:Ve,step:oa,stridedSlice:Pp,string:vh,sub:R,sum:M,tan:Lp,tanh:Xn,tensor:Oe,tensor1d:Se,tensor2d:qt,tensor3d:ia,tensor4d:zp,tensor5d:Vp,tensor6d:Up,tensorScatterUpdate:qp,tile:jt,topk:Wp,transpose:Yn,truncatedNormal:Mp,unique:Gp,unsortedSegmentSum:Kp,unstack:lt,upperBound:Hp,variable:Xp,where:He,whereAsync:ca,zeros:_t,zerosLike:be},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iN=(t,e,n,r=oe)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(l("a",t,e,n),l("b",t,e,n))];case"AddN":return[r.addN(l("tensors",t,e,n))];case"FloorMod":case"Mod":return[r.mod(l("a",t,e,n),l("b",t,e,n))];case"Mul":return[r.mul(l("a",t,e,n),l("b",t,e,n))];case"RealDiv":case"Div":return[r.div(l("a",t,e,n),l("b",t,e,n))];case"DivNoNan":return[r.divNoNan(l("a",t,e,n),l("b",t,e,n))];case"FloorDiv":return[r.floorDiv(l("a",t,e,n),l("b",t,e,n))];case"Sub":return[r.sub(l("a",t,e,n),l("b",t,e,n))];case"Minimum":return[r.minimum(l("a",t,e,n),l("b",t,e,n))];case"Maximum":return[r.maximum(l("a",t,e,n),l("b",t,e,n))];case"Pow":return[r.pow(l("a",t,e,n),l("b",t,e,n))];case"SquaredDifference":return[r.squaredDifference(l("a",t,e,n),l("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uN=(t,e,n,r=oe)=>{switch(t.op){case"Abs":case"ComplexAbs":return[r.abs(l("x",t,e,n))];case"Acos":return[r.acos(l("x",t,e,n))];case"Acosh":return[r.acosh(l("x",t,e,n))];case"Asin":return[r.asin(l("x",t,e,n))];case"Asinh":return[r.asinh(l("x",t,e,n))];case"Atan":return[r.atan(l("x",t,e,n))];case"Atan2":return[r.atan2(l("x",t,e,n),l("y",t,e,n))];case"Atanh":return[r.atanh(l("x",t,e,n))];case"Ceil":return[r.ceil(l("x",t,e,n))];case"Complex":return[r.complex(l("real",t,e,n),l("imag",t,e,n))];case"Cos":return[r.cos(l("x",t,e,n))];case"Cosh":return[r.cosh(l("x",t,e,n))];case"Elu":return[r.elu(l("x",t,e,n))];case"Erf":return[r.erf(l("x",t,e,n))];case"Exp":return[r.exp(l("x",t,e,n))];case"Expm1":return[r.expm1(l("x",t,e,n))];case"Floor":return[r.floor(l("x",t,e,n))];case"Log":return[r.log(l("x",t,e,n))];case"Log1p":return[r.log1p(l("x",t,e,n))];case"Imag":return[r.imag(l("x",t,e,n))];case"Neg":return[r.neg(l("x",t,e,n))];case"Reciprocal":return[r.reciprocal(l("x",t,e,n))];case"Real":return[r.real(l("x",t,e,n))];case"Relu":return[r.relu(l("x",t,e,n))];case"Round":return[r.round(l("x",t,e,n))];case"Selu":return[r.selu(l("x",t,e,n))];case"Sigmoid":return[r.sigmoid(l("x",t,e,n))];case"Sin":return[r.sin(l("x",t,e,n))];case"Sign":return[r.sign(l("x",t,e,n))];case"Sinh":return[r.sinh(l("x",t,e,n))];case"Softplus":return[r.softplus(l("x",t,e,n))];case"Sqrt":return[r.sqrt(l("x",t,e,n))];case"Square":return[r.square(l("x",t,e,n))];case"Tanh":return[r.tanh(l("x",t,e,n))];case"Tan":return[r.tan(l("x",t,e,n))];case"ClipByValue":return[r.clipByValue(l("x",t,e,n),l("clipValueMin",t,e,n),l("clipValueMax",t,e,n))];case"Relu6":return[r.relu6(l("x",t,e,n))];case"Rsqrt":return[r.rsqrt(ae(t.inputNames[0],e,n))];case"LeakyRelu":return[r.leakyRelu(l("x",t,e,n),l("alpha",t,e,n))];case"Prelu":return[r.prelu(l("x",t,e,n),l("alpha",t,e,n))];case"IsNan":return[r.isNaN(ae(t.inputNames[0],e,n))];case"IsInf":return[r.isInf(ae(t.inputNames[0],e,n))];case"IsFinite":return[r.isFinite(ae(t.inputNames[0],e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ke(t,e,n=""){if(!(typeof t=="number"||typeof e=="number")){g(t.length===e.length,()=>n+` Shapes ${t} and ${e} must match`);for(let r=0;r<t.length;r++){const s=t[r],a=e[r];g(s<0||a<0||s===a,()=>n+` Shapes ${t} and ${e} must match`)}}}function qa(t){return!(typeof t=="number"||t.some(e=>e<0))}function on(t,e,n){let r=ts(t,n);const s=!qa(r);if(s&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&e.forEach(a=>{r=ts(a.shape,r)}),!qa(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function ts(t,e){if(typeof t=="number")return e;if(typeof e=="number")return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let r=0;r<t.length;++r){const s=t[r],a=e[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[r]=s>=0?s:a}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cN{constructor(e,n,r,s,a,o,i){this.name=e,this.dtype=n,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=a,this.dynamicSize=o,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=z(0),De(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.tensor.id))&&n.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const n=this.tensors[e];if(n.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(n.cleared=!0),n.read=!0,n.tensor}readMany(e){return e.map(n=>this.read(n))}write(e,n){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[e]||{};if(n.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${n.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=n.shape),ke(this.elementShape,n.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);r.tensor=n,De(n),r.written=!0,this.tensors[e]=r}writeMany(e,n){if(e.length!==n.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${n.length}.`);e.forEach((r,s)=>this.write(r,n[s]))}gather(e,n){if(n&&n!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${n}`);if(e)e=e.slice(0,this.size());else{e=[];for(let s=0;s<this.size();s++)e.push(s)}if(e.length===0)return Oe([],[0].concat(this.elementShape));const r=this.readMany(e);return ke(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),Ve(r,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Oe([],[0].concat(this.elementShape));const n=[];for(let s=0;s<this.size();s++)n.push(s);const r=this.readMany(n);return ke(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),ie(r,0)}scatter(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);if(e.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${n.shape[0]}`);const r=Math.max(...e);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(e,lt(n,0))}split(e,n){if(n.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${n.dtype}`);let r=0;const s=e.map(u=>(r+=u,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const a=r===0?0:n.size/r,o=[];V(()=>{n=v(n,[1,r,a]);for(let u=0;u<e.length;++u){const p=[0,u===0?0:s[u-1],0],h=[1,e[u],a];o[u]=v(q(n,p,h),this.elementShape)}return o});const i=[];for(let u=0;u<e.length;u++)i[u]=u;this.writeMany(i,o)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class It{get id(){return this.idTensor.id}constructor(e,n,r,s=-1){this.tensors=e,this.elementShape=n,this.elementDtype=r,e?.forEach(a=>{if(r!==a.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${a.dtype}`);ke(n,a.shape,"TensorList shape mismatch: "),De(a)}),this.idTensor=z(0),this.maxNumElements=s,De(this.idTensor)}copy(){return new It([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(n=>{(e==null||!e.has(n.id))&&n.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,n,r=-1){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);ke(e,this.elementShape,"TensorList shape mismatch: ");const s=on(this.elementShape,this.tensors,e);return V(()=>{const a=this.tensors.map(o=>v(o,s));return Ve(a,0)})}popBack(e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=on(this.elementShape,this.tensors,e),s=this.tensors.pop();return s.kept=!1,ke(s.shape,e,"TensorList shape mismatch: "),v(s,r)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(ke(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");De(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const n=new It([],this.elementShape,this.elementDtype,this.maxNumElements);n.tensors.length=e;for(let r=0;r<Math.min(this.tensors.length,e);++r)n.tensors[r]=this.tensors[r];return n}getItem(e,n,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);ke(this.tensors[e].shape,n,"TensorList shape mismatch: ");const s=on(this.elementShape,this.tensors,n);return v(this.tensors[e],s)}setItem(e,n){if(n.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);ke(this.elementShape,n.shape,"TensorList shape mismatch: "),De(n),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=n}gather(e,n,r){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);ke(this.elementShape,r,"TensorList shape mismatch: "),e=e.slice(0,this.size());const s=on(this.elementShape,this.tensors,r);return e.length===0?Oe([],[0].concat(s)):V(()=>{const a=e.map(o=>v(this.tensors[o],s));return Ve(a,0)})}concat(e,n){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);ke(this.elementShape,n,"TensorList shape mismatch: ");const r=on(this.elementShape,this.tensors,n);return this.size()===0?Oe([],[0].concat(r)):V(()=>{const s=this.tensors.map(a=>v(a,r));return ie(s,0)})}}function lN(t,e,n){const r=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);const s=t.shape.slice(1);ke(s,e,"TensorList shape mismatch: ");const a=lt(t);return new It(a,e,r)}function pN(t,e,n,r){return new It([],t,e,r)}function hN(t,e,n,r){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const s=Math.max(...e);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new It([],n,t.dtype,r),o=lt(t,0);return e.forEach((i,u)=>{a.setItem(i,o[u])}),a}function fN(t,e,n){let r=0;const s=e.map(p=>(r+=p,r));if(r!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${t.shape}`);const a=t.shape.slice(1),o=ts(a,n),i=r===0?0:t.size/r,u=V(()=>{const p=[];t=v(t,[1,r,i]);for(let h=0;h<e.length;++h){const d=[0,h===0?0:s[h-1],0],y=[1,e[h],i];p[h]=v(q(t,d,y),o)}return t.dispose(),p}),c=new It([],n,t.dtype,e.length);for(let p=0;p<u.length;p++)c.setItem(p,u[p]);return c}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mN=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const r=l("thenBranch",t,e,n),s=l("elseBranch",t,e,n),a=l("cond",t,e,n),o=l("args",t,e,n);return(await a.data())[0]?n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[s].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const r=l("body",t,e,n),s=l("cond",t,e,n),a=l("args",t,e,n),o=await n.functionMap[s].executeFunctionAsync(a,n.tensorArrayMap,n.tensorListMap),i=a.map(p=>p.id);let u=await o[0].data();o.forEach(p=>{!p.kept&&i.indexOf(p.id)===-1&&p.dispose()});let c=a;for(;u[0];){const p=c;c=await n.functionMap[r].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap);const h=c.map(d=>d.id);p.forEach(d=>{!d.kept&&i.indexOf(d.id)===-1&&h.indexOf(d.id)===-1&&d.dispose()});const f=await n.functionMap[s].executeFunctionAsync(c,n.tensorArrayMap,n.tensorListMap);u=await f[0].data(),f.forEach(d=>{!d.kept&&i.indexOf(d.id)===-1&&h.indexOf(d.id)===-1&&d.dispose()})}return c}case"LoopCond":{const r=l("pred",t,e,n);return[We(r)]}case"Switch":{const r=l("pred",t,e,n);let s=l("data",t,e,n);return s.kept||(s=We(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=t.inputNames.find(s=>ae(s,e,n)!==void 0);if(r){const s=ae(r,e,n);return[We(s)]}return}case"Enter":{const r=l("frameName",t,e,n),s=l("tensor",t,e,n);return n.enterFrame(r),[We(s)]}case"Exit":{const r=l("tensor",t,e,n);return n.exitFrame(),[We(r)]}case"NextIteration":{const r=l("tensor",t,e,n);return n.nextIteration(),[We(r)]}case"TensorArrayV3":{const r=l("size",t,e,n),s=l("dtype",t,e,n),a=l("elementShape",t,e,n),o=l("dynamicSize",t,e,n),i=l("clearAfterRead",t,e,n),u=l("identicalElementShapes",t,e,n),c=l("name",t,e,n),p=new cN(c,s,r,a,u,o,i);return n.addTensorArray(p),[p.idTensor,z(1)]}case"TensorArrayWriteV3":{const r=l("tensorArrayId",t,e,n),s=l("index",t,e,n),a=l("tensor",t,e,n),o=n.getTensorArray(r.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const r=l("tensorArrayId",t,e,n),s=l("index",t,e,n);return[n.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=l("tensorArrayId",t,e,n),s=l("indices",t,e,n),a=l("dtype",t,e,n);return[n.getTensorArray(r.id).gather(s,a)]}case"TensorArrayScatterV3":{const r=l("tensorArrayId",t,e,n),s=l("indices",t,e,n),a=l("tensor",t,e,n),o=n.getTensorArray(r.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const r=l("tensorArrayId",t,e,n),s=n.getTensorArray(r.id),a=l("dtype",t,e,n);return[s.concat(a)]}case"TensorArraySplitV3":{const r=l("tensorArrayId",t,e,n),s=l("tensor",t,e,n),a=l("lengths",t,e,n),o=n.getTensorArray(r.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const r=l("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return[z(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=l("tensorArrayId",t,e,n),s=n.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=l("tensorListId",t,e,n),s=l("index",t,e,n),a=l("tensor",t,e,n),o=n.getTensorList(r.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const r=l("tensorListId",t,e,n),s=l("index",t,e,n),a=l("elementShape",t,e,n),o=l("elementDType",t,e,n);return[n.getTensorList(r.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const r=l("indices",t,e,n),s=l("tensor",t,e,n),a=l("elementShape",t,e,n),o=l("numElements",t,e,n),i=hN(s,r,a,o);return n.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=l("elementShape",t,e,n),s=l("elementDType",t,e,n);let a;t.op==="TensorListReserve"?a="numElements":a="maxNumElements";const o=l(a,t,e,n),i=t.op==="TensorListReserve"?-1:o,u=pN(r,s,o,i);return n.addTensorList(u),[u.idTensor]}case"TensorListGather":{const r=l("tensorListId",t,e,n),s=l("indices",t,e,n),a=l("elementShape",t,e,n),o=l("elementDType",t,e,n);return[n.getTensorList(r.id).gather(s,o,a)]}case"TensorListStack":{const r=l("tensorListId",t,e,n),s=l("elementShape",t,e,n),a=l("elementDType",t,e,n),o=l("numElements",t,e,n);return[n.getTensorList(r.id).stack(s,a,o)]}case"TensorListFromTensor":{const r=l("tensor",t,e,n),s=l("elementShape",t,e,n),a=l("elementDType",t,e,n),o=lN(r,s,a);return n.addTensorList(o),[o.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=l("tensorListId",t,e,n),s=n.getTensorList(r.id),a=l("dtype",t,e,n),o=l("elementShape",t,e,n);return[s.concat(a,o)]}case"TensorListPushBack":{const r=l("tensorListId",t,e,n),s=l("tensor",t,e,n),a=n.getTensorList(r.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const r=l("tensorListId",t,e,n),s=l("elementShape",t,e,n),a=l("elementDType",t,e,n);return[n.getTensorList(r.id).popBack(s,a)]}case"TensorListSplit":{const r=l("tensor",t,e,n),s=l("elementShape",t,e,n),a=l("lengths",t,e,n),o=fN(r,a,s);return n.addTensorList(o),[o.idTensor]}case"TensorListLength":{const r=l("tensorListId",t,e,n),s=n.getTensorList(r.id);return[z(s.size(),"int32")]}case"TensorListResize":{const r=l("tensorListId",t,e,n),s=l("size",t,e,n),o=n.getTensorList(r.id).resize(s);return n.addTensorList(o),[o.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wa(t,e,n){const[r,s]=l("fusedOps",t,e,n),a=r==="biasadd",o=!a,i=s==="prelu",u=r==="fusedbatchnorm",c=l("numArgs",t,e,n);if(a){if(i&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const p=l("strides",t,e,n),h=qn(t,e,n),f=l("dataFormat",t,e,n).toUpperCase(),d=l("dilations",t,e,n);let[y,T]=l("args",t,e,n);o&&(T=y,y=void 0);const N=l("leakyreluAlpha",t,e,n);return{stride:p,pad:h,dataFormat:f,dilations:d,biasArg:y,preluArg:T,activationFunc:s,leakyreluAlpha:N}}const dN=(t,e,n,r=oe)=>{switch(t.op){case"Conv1D":{const s=l("stride",t,e,n),a=l("pad",t,e,n),o=l("dataFormat",t,e,n).toUpperCase(),i=l("dilation",t,e,n);return[r.conv1d(l("x",t,e,n),l("filter",t,e,n),s,a,o,i)]}case"Conv2D":{const s=l("strides",t,e,n),a=qn(t,e,n),o=l("dataFormat",t,e,n).toUpperCase(),i=l("dilations",t,e,n);return[r.conv2d(l("x",t,e,n),l("filter",t,e,n),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:c,activationFunc:p,leakyreluAlpha:h}=Wa(t,e,n);return[r.fused.conv2d({x:l("x",t,e,n),filter:l("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:p,preluActivationWeights:c,leakyreluAlpha:h})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:c,activationFunc:p,leakyreluAlpha:h}=Wa(t,e,n);return[r.fused.depthwiseConv2d({x:l("x",t,e,n),filter:l("filter",t,e,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:p,preluActivationWeights:c,leakyreluAlpha:h})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=l("outputShape",t,e,n),a=l("strides",t,e,n),o=qn(t,e,n);return[r.conv2dTranspose(l("x",t,e,n),l("filter",t,e,n),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=l("strides",t,e,n),a=qn(t,e,n),o=l("dilations",t,e,n),i=l("dataFormat",t,e,n).toUpperCase();return[r.depthwiseConv2d(l("input",t,e,n),l("filter",t,e,n),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("dataFormat",t,e,n).toUpperCase(),i=l("dilations",t,e,n);return[r.conv3d(l("x",t,e,n),l("filter",t,e,n),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("kernelSize",t,e,n);return[r.avgPool(l("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("kernelSize",t,e,n);return[r.maxPool(l("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("kernelSize",t,e,n),i=l("includeBatchInIndex",t,e,n),{result:u,indexes:c}=r.maxPoolWithArgmax(l("x",t,e,n),[o[1],o[2]],[s[1],s[2]],a,i);return[u,c]}case"AvgPool3D":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("kernelSize",t,e,n);return[r.avgPool3d(l("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("kernelSize",t,e,n);return[r.maxPool3d(l("x",t,e,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=l("strides",t,e,n),a=l("pad",t,e,n),o=l("dilations",t,e,n),i=s[1],u=s[2],c=o[1],p=o[2];return[r.dilation2d(l("x",t,e,n),l("filter",t,e,n),[i,u],a,[c,p],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gN=(t,e,n,r=oe)=>{switch(t.op){case"Fill":{const s=l("shape",t,e,n),a=l("dtype",t,e,n),o=l("value",t,e,n);return[r.fill(s,o,a)]}case"LinSpace":{const s=l("start",t,e,n),a=l("stop",t,e,n),o=l("num",t,e,n);return[r.linspace(s,a,o)]}case"Multinomial":{const s=l("logits",t,e,n),a=l("numSamples",t,e,n),o=l("seed",t,e,n);return[r.multinomial(s,a,o)]}case"OneHot":{const s=l("indices",t,e,n),a=l("depth",t,e,n),o=l("onValue",t,e,n),i=l("offValue",t,e,n),u=l("dtype",t,e,n);return[r.oneHot(s,a,o,i,u)]}case"Ones":return[r.ones(l("shape",t,e,n),l("dtype",t,e,n))];case"OnesLike":return[r.onesLike(l("x",t,e,n))];case"RandomStandardNormal":return[r.randomStandardNormal(l("shape",t,e,n),l("dtype",t,e,n),l("seed",t,e,n))];case"RandomUniform":return[r.randomUniform(l("shape",t,e,n),l("minval",t,e,n),l("maxval",t,e,n),l("dtype",t,e,n))];case"RandomUniformInt":return[r.randomUniformInt(l("shape",t,e,n),l("minval",t,e,n),l("maxval",t,e,n),l("seed",t,e,n))];case"Range":{const s=l("start",t,e,n),a=l("stop",t,e,n),o=l("step",t,e,n);return[r.range(s,a,o,l("dtype",t,e,n))]}case"TruncatedNormal":{const s=l("shape",t,e,n),a=l("mean",t,e,n),o=l("stdDev",t,e,n),i=l("seed",t,e,n);return[r.truncatedNormal(s,a,o,l("dtype",t,e,n),i)]}case"Zeros":return[r.zeros(l("shape",t,e,n),l("dtype",t,e,n))];case"ZerosLike":return[r.zerosLike(l("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $r(t,e,n){const r=l("boxes",t,e,n),s=l("scores",t,e,n),a=l("maxOutputSize",t,e,n),o=l("iouThreshold",t,e,n),i=l("scoreThreshold",t,e,n),u=l("softNmsSigma",t,e,n);return{boxes:r,scores:s,maxOutputSize:a,iouThreshold:o,scoreThreshold:i,softNmsSigma:u}}const yN=async(t,e,n,r,s=oe)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:c,softNmsSigma:p}=$r(t,e,n),h=await s.image.nonMaxSuppressionWithScoreAsync(a,o,i,u,c,p);return[h.selectedIndices,h.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=$r(t,e,n),p=l("padToMaxOutputSize",t,e,n),h=await s.image.nonMaxSuppressionPaddedAsync(a,o,i,u,c,p);return[h.selectedIndices,h.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:o,maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=$r(t,e,n);return[await s.image.nonMaxSuppressionAsync(a,o,i,u,c)]}case"Where":{const a=s.cast(l("condition",t,e,n),"bool"),o=[await s.whereAsync(a)];return a.dispose(),o}case"ListDiff":return s.setdiff1dAsync(l("x",t,e,n),l("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bN=(t,e,n,r=oe)=>{switch(t.op){case"LowerBound":{const s=l("sortedSequence",t,e,n),a=l("values",t,e,n);return[r.lowerBound(s,a)]}case"TopKV2":{const s=l("x",t,e,n),a=l("k",t,e,n),o=l("sorted",t,e,n),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=l("sortedSequence",t,e,n),a=l("values",t,e,n);return[r.upperBound(s,a)]}case"Unique":{const s=l("x",t,e,n),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=l("x",t,e,n),a=l("axis",t,e,n),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wN=(t,e,n,r=oe)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const s=l("default",t,e,n);return[ae(t.name,e,n)||s];case"Placeholder":return[ae(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const p=l("x",t,e,n);return[We(p)]}case"IdentityN":return l("x",t,e,n).map(p=>We(p));case"Snapshot":const a=l("x",t,e,n);return[We(a)];case"Shape":return[r.tensor1d(l("x",t,e,n).shape,"int32")];case"ShapeN":return l("x",t,e,n).map(p=>r.tensor1d(p.shape));case"Size":return[r.scalar(l("x",t,e,n).size,"int32")];case"Rank":return[r.scalar(l("x",t,e,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const o=l("x",t,e,n),i=l("data",t,e,n),u=l("message",t,e,n),c=l("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let p=0;p<i.length;p++)console.log(Array.prototype.slice.call(i[p].dataSync()).slice(0,c));return[o];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class NN{get id(){return this.handle.id}constructor(e,n){this.keyDType=e,this.valueDType=n,this.handle=z(0),this.tensorMap=new Map,De(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return z(this.size(),"int32")}async import(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),V(()=>{const s=lt(n),a=r.length,o=s.length;g(a===o,()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${o} elements.`);for(let i=0;i<a;i++){const u=r[i],c=s[i];De(c),this.tensorMap.set(u,c)}return this.handle})}async find(e,n){this.checkKeyAndValueTensor(e,n);const r=await e.data();return V(()=>{const s=[];for(let a=0;a<r.length;a++){const o=r[a],i=this.findWithDefault(o,n);s.push(i)}return Ve(s)})}findWithDefault(e,n){const r=this.tensorMap.get(e);return r??n}checkKeyAndValueTensor(e,n){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(n.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${n.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const TN=async(t,e,n,r)=>{switch(t.op){case"HashTable":case"HashTableV2":{const s=r.getHashTableHandleByName(t.name);if(s!=null)return[s];{const a=l("keyDType",t,e,n),o=l("valueDType",t,e,n),i=new NN(a,o);return r.addHashTable(t.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const s=l("tableHandle",t,e,n,r),a=l("keys",t,e,n),o=l("values",t,e,n);return[await r.getHashTableById(s.id).import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const s=l("tableHandle",t,e,n,r),a=l("keys",t,e,n),o=l("defaultValue",t,e,n);return[await r.getHashTableById(s.id).find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=l("tableHandle",t,e,n,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const SN=(t,e,n,r=oe)=>{switch(t.op){case"ResizeBilinear":{const s=l("images",t,e,n),a=l("size",t,e,n),o=l("alignCorners",t,e,n),i=l("halfPixelCenters",t,e,n);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=l("images",t,e,n),a=l("size",t,e,n),o=l("alignCorners",t,e,n),i=l("halfPixelCenters",t,e,n);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=l("image",t,e,n),a=l("boxes",t,e,n),o=l("boxInd",t,e,n),i=l("cropSize",t,e,n),u=l("method",t,e,n),c=l("extrapolationValue",t,e,n);return[r.image.cropAndResize(s,a,o,i,u,c)]}case"ImageProjectiveTransformV3":{const s=l("images",t,e,n),a=l("transforms",t,e,n),o=l("outputShape",t,e,n),i=l("fillValue",t,e,n),u=l("interpolation",t,e,n),c=l("fillMode",t,e,n);return[r.image.transform(s,a,u.toLowerCase(),c.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vN=(t,e,n,r=oe)=>{switch(t.op){case"Equal":return[r.equal(l("a",t,e,n),l("b",t,e,n))];case"NotEqual":return[r.notEqual(l("a",t,e,n),l("b",t,e,n))];case"Greater":return[r.greater(l("a",t,e,n),l("b",t,e,n))];case"GreaterEqual":return[r.greaterEqual(l("a",t,e,n),l("b",t,e,n))];case"Less":return[r.less(l("a",t,e,n),l("b",t,e,n))];case"LessEqual":return[r.lessEqual(l("a",t,e,n),l("b",t,e,n))];case"LogicalAnd":return[r.logicalAnd(l("a",t,e,n),l("b",t,e,n))];case"LogicalNot":return[r.logicalNot(l("a",t,e,n))];case"LogicalOr":return[r.logicalOr(l("a",t,e,n),l("b",t,e,n))];case"Select":case"SelectV2":return[r.where(l("condition",t,e,n),l("a",t,e,n),l("b",t,e,n))];case"BitwiseAnd":return[r.bitwiseAnd(l("a",t,e,n),l("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kN=(t,e,n,r=oe)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(l("a",t,e,n),l("b",t,e,n),l("transposeA",t,e,n),l("transposeB",t,e,n))];case"Einsum":return[r.einsum(l("equation",t,e,n),...l("tensors",t,e,n))];case"Transpose":return[r.transpose(l("x",t,e,n),l("perm",t,e,n))];case"_FusedMatMul":const[s,a]=l("fusedOps",t,e,n),o=s==="biasadd",i=a==="prelu",u=l("numArgs",t,e,n),c=l("leakyreluAlpha",t,e,n);if(o){if(i&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[p,h]=l("args",t,e,n);return[r.fused.matMul({a:l("a",t,e,n),b:l("b",t,e,n),transposeA:l("transposeA",t,e,n),transposeB:l("transposeB",t,e,n),bias:p,activation:a,preluActivationWeights:h,leakyreluAlpha:c})];case"MatrixBandPart":return[r.linalg.bandPart(l("a",t,e,n),l("numLower",t,e,n),l("numUpper",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const EN=(t,e,n,r=oe)=>{switch(t.op){case"EuclideanNorm":return[r.euclideanNorm(l("x",t,e,n),l("axis",t,e,n),l("keepDims",t,e,n))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(l("x",t,e,n),l("mean",t,e,n),l("variance",t,e,n),l("offset",t,e,n),l("scale",t,e,n),l("epsilon",t,e,n))];case"FusedBatchNormV3":return[r.batchNorm(l("x",t,e,n),l("mean",t,e,n),l("variance",t,e,n),l("offset",t,e,n),l("scale",t,e,n),l("epsilon",t,e,n))];case"LRN":return[r.localResponseNormalization(l("x",t,e,n),l("radius",t,e,n),l("bias",t,e,n),l("alpha",t,e,n),l("beta",t,e,n))];case"Softmax":return[r.softmax(l("x",t,e,n))];case"LogSoftmax":return[r.logSoftmax(l("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $N=(t,e,n,r=oe)=>{switch(t.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(l("paramsNestedSplits",t,e,n),l("paramsDenseValues",t,e,n),l("indices",t,e,n),l("outputRaggedRank",t,e,n));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(l("starts",t,e,n),l("limits",t,e,n),l("splits",t,e,n));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(l("shape",t,e,n),l("values",t,e,n),l("defaultValue",t,e,n),l("rowPartitionTensors",t,e,n),l("rowPartitionTypes",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _N=(t,e,n,r=oe)=>{switch(t.op){case"Max":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.max(l("x",t,e,n),i,u)]}case"Mean":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.mean(l("x",t,e,n),i,u)]}case"Min":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.min(l("x",t,e,n),i,u)]}case"Sum":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.sum(l("x",t,e,n),i,u)]}case"All":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.all(l("x",t,e,n),i,u)]}case"Any":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.any(l("x",t,e,n),i,u)]}case"ArgMax":{const i=l("axis",t,e,n);return[r.argMax(l("x",t,e,n),i)]}case"ArgMin":{const i=l("axis",t,e,n);return[r.argMin(l("x",t,e,n),i)]}case"Prod":{const i=l("axis",t,e,n),u=l("keepDims",t,e,n);return[r.prod(l("x",t,e,n),i,u)]}case"Cumprod":{const i=l("axis",t,e,n),u=l("exclusive",t,e,n),c=l("reverse",t,e,n);return[r.cumprod(l("x",t,e,n),i,u,c)]}case"Cumsum":{const i=l("axis",t,e,n),u=l("exclusive",t,e,n),c=l("reverse",t,e,n);return[r.cumsum(l("x",t,e,n),i,u,c)]}case"Bincount":const s=l("x",t,e,n),a=l("weights",t,e,n),o=l("size",t,e,n);return[r.bincount(s,a,o)];case"DenseBincount":{const i=l("x",t,e,n),u=l("weights",t,e,n),c=l("size",t,e,n),p=l("binaryOutput",t,e,n);return[r.denseBincount(i,u,c,p)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xN=(t,e,n,r=oe)=>{switch(t.op){case"ConcatV2":case"Concat":{const s=l("n",t,e,n),a=l("axis",t,e,n);let o=l("tensors",t,e,n);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=l("x",t,e,n),a=l("indices",t,e,n);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=l("axis",t,e,n),a=l("batchDims",t,e,n),o=l("x",t,e,n),i=l("indices",t,e,n);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=l("dims",t,e,n),a=[];for(let i=0;i<s.length;i++)s[i]&&a.push(i);const o=l("x",t,e,n);return[r.reverse(o,a)]}case"ReverseV2":{const s=l("axis",t,e,n),a=l("x",t,e,n);return[r.reverse(a,s)]}case"Slice":{const s=l("begin",t,e,n),a=l("size",t,e,n);return[r.slice(l("x",t,e,n),s,a)]}case"StridedSlice":{const s=l("begin",t,e,n),a=l("end",t,e,n),o=l("strides",t,e,n),i=l("beginMask",t,e,n),u=l("endMask",t,e,n),c=l("ellipsisMask",t,e,n),p=l("newAxisMask",t,e,n),h=l("shrinkAxisMask",t,e,n),f=l("x",t,e,n);return[r.stridedSlice(f,s,a,o,i,u,c,p,h)]}case"Pack":return V(()=>{const s=l("axis",t,e,n),a=l("tensors",t,e,n),o=a[0].shape,i=r.squeeze(a[0]).shape,u=a.map(c=>{const p=Ce(c.shape,o);if(!p&&!Ce(r.squeeze(c).shape,i))throw new Error("the input tensors shape does not match");return p?c:r.reshape(c,o)});return[r.stack(u,s)]});case"Unpack":{const s=l("axis",t,e,n),a=l("tensor",t,e,n);return r.unstack(a,s)}case"Tile":{const s=l("reps",t,e,n);return[r.tile(l("x",t,e,n),s)]}case"Split":case"SplitV":{const s=l("axis",t,e,n),a=l("numOrSizeSplits",t,e,n),o=l("x",t,e,n);return r.split(o,a,s)}case"ScatterNd":{const s=l("indices",t,e,n),a=l("values",t,e,n),o=l("shape",t,e,n);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=l("x",t,e,n),a=l("indices",t,e,n);return[r.gatherND(s,a)]}case"SparseToDense":{const s=l("sparseIndices",t,e,n),a=l("outputShape",t,e,n),o=l("sparseValues",t,e,n),i=l("defaultValue",t,e,n);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}case"TensorScatterUpdate":{const s=l("indices",t,e,n),a=l("values",t,e,n),o=l("tensor",t,e,n);return[r.tensorScatterUpdate(o,s,a)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const IN=(t,e,n,r=oe)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(l("indices",t,e,n),l("values",t,e,n),l("denseShape",t,e,n),l("defaultValue",t,e,n));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(l("inputIndices",t,e,n),l("inputShape",t,e,n),l("newShape",t,e,n));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(l("data",t,e,n),l("indices",t,e,n),l("segmentIds",t,e,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(l("data",t,e,n),l("indices",t,e,n),l("segmentIds",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const AN=(t,e,n,r=oe)=>{switch(t.op){case"FFT":return[r.fft(l("x",t,e,n))];case"IFFT":return[r.ifft(l("x",t,e,n))];case"RFFT":return[r.rfft(l("x",t,e,n))];case"IRFFT":return[r.irfft(l("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const DN=(t,e,n,r=oe)=>{switch(t.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(l("input",t,e,n),l("pattern",t,e,n),l("rewrite",t,e,n),l("replaceGlobal",t,e,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(l("data",t,e,n),l("dataSplits",t,e,n),l("separator",t,e,n),l("nGramWidths",t,e,n),l("leftPad",t,e,n),l("rightPad",t,e,n),l("padWidth",t,e,n),l("preserveShortSequences",t,e,n));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(l("input",t,e,n),l("delimiter",t,e,n),l("skipEmpty",t,e,n));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(l("input",t,e,n),l("numBuckets",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ON=(t,e,n,r=oe)=>{switch(t.op){case"Cast":return[r.cast(l("x",t,e,n),l("dtype",t,e,n))];case"ExpandDims":{const s=l("axis",t,e,n);return[r.expandDims(l("x",t,e,n),s)]}case"Squeeze":{const s=l("axis",t,e,n);return[r.squeeze(l("x",t,e,n),s)]}case"Reshape":return[r.reshape(l("x",t,e,n),l("shape",t,e,n))];case"EnsureShape":return[r.ensureShape(l("x",t,e,n),l("shape",t,e,n))];case"MirrorPad":return[r.mirrorPad(l("x",t,e,n),l("padding",t,e,n),l("mode",t,e,n))];case"PadV2":case"Pad":return[r.pad(l("x",t,e,n),l("padding",t,e,n),l("constantValue",t,e,n))];case"SpaceToBatchND":{const s=l("blockShape",t,e,n),a=l("paddings",t,e,n);return[r.spaceToBatchND(l("x",t,e,n),s,a)]}case"BatchToSpaceND":{const s=l("blockShape",t,e,n),a=l("crops",t,e,n);return[r.batchToSpaceND(l("x",t,e,n),s,a)]}case"DepthToSpace":{const s=l("blockSize",t,e,n),a=l("dataFormat",t,e,n).toUpperCase();return[r.depthToSpace(l("x",t,e,n),s,a)]}case"BroadcastTo":return[r.broadcastTo(l("x",t,e,n),l("shape",t,e,n))];case"BroadcastArgs":return[r.broadcastArgs(l("s0",t,e,n),l("s1",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ma(t,e,n,r,s=V){const a=((o,i,u)=>{switch(o.category){case"arithmetic":return s(()=>iN(o,i,u));case"basic_math":return s(()=>uN(o,i,u));case"control":return mN(o,i,u);case"convolution":return s(()=>dN(o,i,u));case"creation":return s(()=>gN(o,i,u));case"dynamic":return yN(o,i,u);case"evaluation":return s(()=>bN(o,i,u));case"image":return s(()=>SN(o,i,u));case"graph":return s(()=>wN(o,i,u));case"logical":return s(()=>vN(o,i,u));case"matrices":return s(()=>kN(o,i,u));case"normalization":return s(()=>EN(o,i,u));case"ragged":return s(()=>$N(o,i,u));case"reduction":return s(()=>_N(o,i,u));case"slice_join":return s(()=>xN(o,i,u));case"sparse":return s(()=>IN(o,i,u));case"spectral":return s(()=>AN(o,i,u));case"string":return s(()=>DN(o,i,u));case"transformation":return s(()=>ON(o,i,u));case"hash_table":return TN(o,i,u,r);case"custom":const c=zh(o.op);if(c&&c.customExecutor)return c.customExecutor(new oN(o,i,u));throw TypeError(`Custom op ${o.op} is not registered.`);default:throw TypeError(`Unknown op '${o.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return Xe(a)?a.then(o=>[].concat(o)):[].concat(a)}class Ga{constructor(e={},n={},r={},s={},a){this.weightMap=e,this.tensorArrayMap=n,this.tensorListMap=r,this.functionMap=s,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,n){return{id:e,frameName:n,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let n=0;n<this.contexts.length-1;n++){const r=this.contexts.slice(0,this.contexts.length-n);e.push(this.contextIdforContexts(r))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(n=>n.id===0&&n.iterationId===0?"":`${n.frameName}-${n.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const n in this.tensorArrayMap)this.tensorArrayMap[n].clearAndClose(e);for(const n in this.tensorListMap)this.tensorListMap[n].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ka(t,e,n,r){const s=new Set,a=[];let o=null,i=null;const u=new Set,c=new Set(Object.keys(t).map(f=>de(f)[0]));r=r||[];const p=new Set(r.map(f=>de(f.name)[0])),h=[...e];for(;h.length>0;){const f=h.pop();if((gt(f)||VN(f)||UN(f))&&o==null&&(o=f,i=o.children.map(d=>d.name).filter(d=>s.has(d))),s.add(f.name),n[f.name]==null&&!c.has(f.name)&&!p.has(f.name)){if(f.inputs.length===0){a.push(f.name);continue}f.inputs.forEach(d=>{u.has(d.name)||(u.add(d.name),h.push(d))})}}return{inputs:t,outputs:e,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function FN(t,e){const{usedNodes:n,inputs:r}=e,s=Object.keys(r).map(N=>de(N)[0]).map(N=>t.nodes[N]),a=t.initNodes||[],o=N=>n.has(typeof N=="string"?N:N.name);function i(N){return[...new Map(N.map(S=>[S.name,S])).values()]}const u=i([...s,...t.weights,...a]).filter(o),c=i([...u,...Object.values(t.nodes)]).filter(o),p=new Map(c.map(N=>[N.name,N])),h={};for(const N of c){h[N.name]=h[N.name]||0;for(const S of N.children)o(S)||(h[S.name]=Number.POSITIVE_INFINITY),h[S.name]=(h[S.name]||0)+1}const f=Object.entries(h).filter(([,N])=>N===0).map(([N])=>N),d=[...f];for(;f.length>0;){const N=f.pop(),S=p.get(N);for(const I of S.children.filter(o))--h[I.name]===0&&(d.push(I.name),f.push(I.name))}const y=d.map(N=>p.get(N)),T=CN(y,u);return BN(T,u),T}function CN(t,e){const n=new Map(t.map(o=>[o.name,o])),r=e.map(o=>o.name),s=new Set(r);for(;r.length>0;){const o=r.pop(),i=n.get(o);for(const u of i.children)!n.has(u.name)||s.has(u.name)||(s.add(u.name),r.push(u.name))}return t.filter(o=>s.has(o.name))}class zn extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}function BN(t,e){const n=new Map(t.map((i,u)=>[i.name,u])),r=new Set(e.map(i=>i.name)),s=i=>r.has(typeof i=="string"?i:i.name),a=new Set(t.map(i=>i.name)),o=i=>a.has(typeof i=="string"?i:i.name);for(const i of t){for(const u of i.children.filter(o)){if(!n.has(u.name))throw new zn(`Child ${u.name} of node ${i.name} is unreachable.`);if(n.get(i.name)>n.get(u.name))throw new zn(`Node ${i.name} is scheduled to run after its child ${u.name}.`)}if(!s(i))for(const u of i.inputs){if(!n.has(u.name))throw new zn(`Input ${u.name} of node ${i.name} is unreachable.`);if(n.get(u.name)>n.get(i.name))throw new zn(`Node ${i.name} is scheduled to run before its input ${u.name}.`)}}}function RN(t){const e=new Map(t.map((i,u)=>[i.name,u])),n=Number.MAX_SAFE_INTEGER,r=t.map((i,u)=>gt(i)?n:u),s=i=>{const u=r[e.get(i.name)];return u??-1},a=t.map((i,u)=>i.children.map(s).reduce((c,p)=>Math.max(c,p),r[u])),o=new Map;for(let i=0;i<t.length;++i){const u=a[i];if(u===n)continue;const c=t[i],p=t[u];o.has(p.name)||o.set(p.name,[]),o.get(p.name).push(c)}return o}const PN=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),LN=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),zN=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function gt(t){return PN.has(t.op)}function VN(t){return LN.has(t.op)}function UN(t){return zN.has(t.op)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tr{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const n=Object.keys(e).map(r=>e[r].map(s=>s.id));this._weightIds=[].concat(...n),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{const n=e.signatureKey||e.name;return e.defaultOutput?`${n}:${e.defaultOutput}`:n})}get functions(){return Object.keys(this._functions).reduce((e,n)=>(e[n]=this._functions[n].signature,e),{})}constructor(e,n){this.graph=e,this.parent=n,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(r=>{this._functionExecutorMap[r]=new tr(e.functions[r],this)})}getCompilationKey(e,n){const r=e.map(a=>a.name).sort(),s=n.map(a=>a.name).sort();return r.join(this.SEPARATOR)+"--"+s.join(this.SEPARATOR)}compile(e,n){const r=Ka(e,n,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:a,syncInputs:o}=r;if(a!=null)throw new Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${o}]`);if(s.length>0){const c=n.map(h=>h.name),p=Object.keys(e);throw new Error(`Cannot compute the outputs [${c}] from the provided inputs [${p}]. Missing the following inputs: [${s}]`)}const i=FN(this.graph,r),u=RN(i);return{orderedNodes:i,nodeLiveUntilMap:u}}cloneAndKeepTensor(e){if(e==null)return null;const n=e.clone();return De(n),n}cloneTensorList(e){return e?e.map(r=>this.cloneAndKeepTensor(r)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([n,r])=>[n,this.cloneTensorList(r)]))}execute(e,n){this.disposeIntermediateTensors(),e=this.mapInputs(e);const r=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n);const s=r.map(f=>this.graph.nodes[de(f)[0]]),a=n.map(f=>de(f)[0]),o=new Set(a);let i=a.map(f=>this.graph.nodes[f]);i.length===0&&(i=this._outputs);const u=this.getCompilationKey(s,i);let c=this.compiledMap.get(u);c==null&&(c=this.compile(e,i),this.compiledMap.set(u,c));try{this.keepIntermediateTensors=C().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}const p={},h={};return V(()=>{const f=new Ga(this.weightMap,p,h,this.functionExecutorMap,this.parseNodeNameCache),d=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(S=>{const[I,A]=de(S,f),k=[];k[A]=e[S],d[I]=k,this.keepIntermediateTensors&&(this.clonedTensorsMap[I]=this.cloneTensorList(k))});const y=this.getFrozenTensorIds(d),{orderedNodes:T,nodeLiveUntilMap:N}=c;for(const S of T){if(d[S.name])continue;const I=Ma(S,d,f,this._resourceManager);if(Xe(I))throw new Error(`The execution of the op '${S.op}' returned a promise. Please use model.executeAsync() instead.`);d[S.name]=I,this.keepIntermediateTensors&&(this.clonedTensorsMap[S.name]=this.cloneTensorList(I)),this.checkTensorForDisposalWithNodeLiveUntilInfo(S,d,f,y,o,N.get(S.name))}return this.parent==null&&f.dispose(y),n.map(S=>ae(S,d,f))})}getFrozenTensorIds(e){const n=[].concat.apply([],Object.keys(e).map(r=>e[r]).map(r=>r.map(s=>s.id)));return new Set(n)}checkTensorForDisposal(e,n,r,s,a,o,i){if(!(gt(n)||o.has(e))){for(const u of r[e])u!=null&&(i[u.id]=(i[u.id]||0)+n.children.length);for(const u of n.inputs){if(gt(u))continue;const c=Va(u.name,r,s);if(c!=null)for(const p of c){if(!p||p.kept||a.has(p.id))continue;const h=i[p.id];h===1?(p.dispose(),delete i[p.id]):h!=null&&i[p.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,n,r,s,a,o){function i(u){return gt(u)||a.has(u.name)}if(!(gt(e)||o==null))for(const u of o){if(i(u))continue;const c=Va(u.name,n,r);for(const p of c)!p||p.kept||s.has(p.id)||p.dispose()}}async executeAsync(e,n){return this._executeAsync(e,n)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(const n of e)n&&!n.isDisposed&&n.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,n,r=!1,s={},a={}){this.disposeIntermediateTensors(),r||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),n=this.mapOutputs(n),this.checkOutputs(n));try{this.keepIntermediateTensors=C().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}const o=new Ga(this.weightMap,s,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const i=await this.executeWithControlFlow(e,o,n,r),u=n.map(f=>ae(f,i,o)),c=u.map(f=>f.id),p=Object.keys(e).map(f=>e[f].id),h=new Set([...c,...p,...this.weightIds]);return Object.values(i).forEach(f=>{f.forEach(d=>{d&&!d.isDisposed&&!h.has(d.id)&&d.dispose()})}),this.parent==null&&o.dispose(h),u}async executeFunctionAsync(e,n,r){const s=e.reduce((a,o,i)=>(a[this.inputs[i].name]=o,a),{});return this._executeAsync(s,this.outputNodes,!0,n,r)}async executeWithControlFlow(e,n,r,s){const a=Object.keys(e),o=a.map(k=>this.graph.nodes[de(k)[0]]),i=r.map(k=>de(k)[0]),u=new Set(i);let c=i.map(k=>this.graph.nodes[k]);c.length===0&&(c=this._outputs);const{usedNodes:p,missingInputs:h,dynamicNode:f,syncInputs:d}=Ka(e,c,this.weightMap,this._initNodes),y=[...o,...this.graph.weights,...this._initNodes||[]].map(k=>({node:k,contexts:n.currentContext})),T=Object.assign({},this.weightMap);Object.keys(e).forEach(k=>{const[_,x]=de(k),D=[];D[x]=e[k],T[_]=D});const N={},S=this.getFrozenTensorIds(T),I={};for(;y.length>0;){const k=this.processStack(o,y,n,T,I,S,u,N,p);await Promise.all(k)}f==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const A=c.filter(k=>!gt(k)&&!ae(k.name,T,n)).map(k=>k.name);if(A.length>0){let k="";throw f!=null&&(k=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),new Error(`Cannot compute the outputs [${A}] from the provided inputs [${a}]. Consider providing the following inputs: [${h}]. ${k}`)}return T}processStack(e,n,r,s,a,o,i,u,c){const p=[];for(;n.length>0;){const h=n.pop();r.currentContext=h.contexts;let f="";if(h.node.op==="Enter"&&l("isConstant",h.node,s,r)&&([f]=qe(h.node.name,r)),s[h.node.name]==null){const d=Ma(h.node,s,r,this._resourceManager);f||([f]=qe(h.node.name,r));const y=r.currentContext;Xe(d)?p.push(d.then(T=>(s[f]=T,this.keepIntermediateTensors&&(this.clonedTensorsMap[f]=this.cloneTensorList(T)),r.currentContext=y,this.checkTensorForDisposal(f,h.node,s,r,o,i,u),this.processChildNodes(h.node,n,r,s,a,c),T))):(s[f]=d,this.keepIntermediateTensors&&(this.clonedTensorsMap[f]=this.cloneTensorList(d)),this.checkTensorForDisposal(f,h.node,s,r,o,i,u),this.processChildNodes(h.node,n,r,s,a,c))}else this.processChildNodes(h.node,n,r,s,a,c)}return p}processChildNodes(e,n,r,s,a,o){e.children.forEach(i=>{const[u]=qe(i.name,r);a[u]||!o.has(i.name)||(i.op==="Merge"?i.inputNames.some(c=>!!ae(c,s,r))&&(a[u]=!0,n.push({contexts:r.currentContext,node:i})):i.inputNames.every(c=>!!ae(c,s,r))&&(a[u]=!0,n.push({contexts:r.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(n=>n.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(n=>{const r=e[n],[s]=de(n),a=this.graph.nodes[s];if(a.attrParams.shape&&a.attrParams.shape.value){const o=a.attrParams.shape.value,i=o.length===r.shape.length&&r.shape.every((u,c)=>o[c]===-1||o[c]===u);g(i,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${o}], but was [${r.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&g(r.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(e){var n,r;const s={};for(const a in e){const o=(r=(n=this._signature)===null||n===void 0?void 0:n.inputs)===null||r===void 0?void 0:r[a];o!=null?s[o.name]=e[a]:s[a]=e[a]}return s}checkInputs(e){const n=Object.keys(e).filter(r=>{const[s]=de(r);return this.graph.nodes[s]==null});if(n.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${n}] that are not part of graph`)}mapOutputs(e){return e.map(n=>{var r,s;const a=(s=(r=this._signature)===null||r===void 0?void 0:r.outputs)===null||s===void 0?void 0:s[n];return a!=null?a.name:n},{})}checkOutputs(e){e.forEach(n=>{const[r]=de(n);if(!this.graph.nodes[r])throw new Error(`The output '${n}' is not found in the graph`)})}}class jN{constructor(e={},n={}){this.hashTableNameToHandle=e,this.hashTableMap=n}addHashTable(e,n){this.hashTableNameToHandle[e]=n.handle,this.hashTableMap[n.id]=n}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qN="?tfjs-format=file",WN="model.json";class Na{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,n={},r=ya){this.modelUrl=e,this.loadOptions=n,this.version="n/a",this.io=r,n==null&&(this.loadOptions={}),this.resourceManager=new jN}findIOHandler(){const e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const n=this.io.getLoadHandlers(e,this.loadOptions);if(n.length===0)n.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(n.length>1)throw new Error(`Found more than one (${n.length}) load handlers for URL '${[e]}'`);this.handler=n[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return Xe(e)?e.then(n=>n.getWeightStream==null?this.loadSync(n):this.loadStreaming(n)):this.loadSync(e)}loadSync(e){const n=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,n)}async loadStreaming(e){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");const n=await Dc(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,n)}loadWithWeightMap(e,n){this.artifacts=e;const r=this.artifacts.modelTopology;let s=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const a=this.artifacts.userDefinedMetadata;a.signature!=null&&(s=a.signature),a.structuredOutputKeys!=null&&(this.structuredOutputKeys=a.structuredOutputKeys)}if(this.signature=s,this.version=`${r.versions.producer}.${r.versions.minConsumer}`,this.executor=new tr(Ua.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){const a=Ua.Instance.transformGraph(e.modelInitializer);this.initializer=new tr(a),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,n){if(typeof e=="string"){const r=this.io.getSaveHandlers(e);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${e}'`);e=r[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){const n=e instanceof te?[e]:e,r={};return n.forEach((s,a)=>r[this.structuredOutputKeys[a]]=s),r}return e}predict(e,n){const r=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(r)}async predictAsync(e,n){const r=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(r)}normalizeInputs(e){var n;if(!(e instanceof te)&&!Array.isArray(e)){const a=(n=this.signature)===null||n===void 0?void 0:n.inputs;if(a!=null)for(const o in a){const i=a[o];i.resourceId!=null&&(e[o]=this.resourceIdToCapturedInput[i.resourceId])}return e}e=Array.isArray(e)?e:[e];const r=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+r!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-r} non-resource placeholders, while there are ${e.length} input tensors provided.`);let s=0;return this.inputNodes.reduce((a,o)=>{var i,u,c;const p=(c=(u=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||u===void 0?void 0:u[o])===null||c===void 0?void 0:c.resourceId;return p!=null?a[o]=this.resourceIdToCapturedInput[p]:a[o]=e[s++],a},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const n=this.initializerSignature.outputs,r=Object.keys(n);for(let s=0;s<r.length;s++){const a=r[s],o=n[a];this.resourceIdToCapturedInput[o.resourceId]=e[s]}}}execute(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=this.executor.execute(e,n);return r.length>1?r:r[0]}async executeAsync(e,n){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),n=this.normalizeOutputs(n);const r=await this.executor.executeAsync(e,n);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((n,r)=>(n[r]=[e[r]],n),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&pe(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function MN(t,e={},n=ya){if(t==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof t=="string"&&(t=KN(t));const r=new Na(t,e,n);return await r.load(),r}function GN(t){if(t==null)throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");let e;if(t instanceof Array){const[r,s]=t;if(!r)throw new Error("modelJSON must be the first element of the array");if(!s||!(s instanceof ArrayBuffer))throw new Error("An ArrayBuffer of weights must be the second element of the array");if(!("modelTopology"in r))throw new Error("Model JSON is missing 'modelTopology'");if(!("weightsManifest"in r))throw new Error("Model JSON is missing 'weightsManifest'");const a=Hn(r.weightsManifest),o=Ns(r,a,s);e=Qn(o)}else if("load"in t)e=t;else if("modelTopology"in t&&"weightSpecs"in t&&"weightData"in t)e=Qn(t);else throw new Error("Unknown model format");const n=new Na(e);return n.load(),n}function KN(t){return t.endsWith("/")||(t=t+"/"),`${t}${WN}${qN}`}exports.Abs=go;exports.Acos=yo;exports.Acosh=bo;exports.AdadeltaOptimizer=kh;exports.AdagradOptimizer=Eh;exports.AdamOptimizer=$h;exports.AdamaxOptimizer=_h;exports.Add=is;exports.AddN=wo;exports.All=No;exports.Any=To;exports.ArgMax=So;exports.ArgMin=vo;exports.Asin=ko;exports.Asinh=Eo;exports.Atan=$o;exports.Atan2=xo;exports.Atanh=_o;exports.AvgPool=Io;exports.AvgPool3D=Ao;exports.AvgPool3DGrad=uf;exports.AvgPoolGrad=of;exports.BatchMatMul=Do;exports.BatchToSpaceND=Oo;exports.Bincount=Fo;exports.BitwiseAnd=Co;exports.BroadcastArgs=Bo;exports.BroadcastTo=cf;exports.Cast=us;exports.Ceil=Ro;exports.ClipByValue=Po;exports.Complex=Lo;exports.ComplexAbs=zo;exports.Concat=Vo;exports.Conv2D=Uo;exports.Conv2DBackpropFilter=jo;exports.Conv2DBackpropInput=qo;exports.Conv3D=Wo;exports.Conv3DBackpropFilterV2=lf;exports.Conv3DBackpropInputV2=Mo;exports.Cos=Go;exports.Cosh=Ko;exports.CropAndResize=Zo;exports.Cumprod=Ho;exports.Cumsum=Xo;exports.DataStorage=Hh;exports.DenseBincount=Jo;exports.DepthToSpace=Yo;exports.DepthwiseConv2dNative=Qo;exports.DepthwiseConv2dNativeBackpropFilter=ei;exports.DepthwiseConv2dNativeBackpropInput=ti;exports.Diag=ni;exports.Dilation2D=ri;exports.Dilation2DBackpropFilter=hf;exports.Dilation2DBackpropInput=pf;exports.Draw=cs;exports.ENGINE=w;exports.Einsum=ai;exports.Elu=oi;exports.EluGrad=ff;exports.Environment=fo;exports.Equal=ui;exports.Erf=ii;exports.Exp=ci;exports.ExpandDims=li;exports.Expm1=pi;exports.FFT=hi;exports.Fill=fi;exports.FlipLeftRight=mi;exports.Floor=di;exports.FloorDiv=gi;exports.FromPixels=_r;exports.FusedBatchNorm=yi;exports.FusedConv2D=Ir;exports.FusedDepthwiseConv2D=Ar;exports.GatherNd=wi;exports.GatherV2=bi;exports.GraphModel=Na;exports.Greater=Ni;exports.GreaterEqual=Ti;exports.IFFT=Si;exports.Identity=ls;exports.Imag=vi;exports.IsFinite=ki;exports.IsInf=Ei;exports.IsNan=$i;exports.KernelBackend=Ha;exports.LRN=Ri;exports.LRNGrad=yf;exports.LeakyRelu=_i;exports.Less=xi;exports.LessEqual=Ii;exports.LinSpace=Ai;exports.Log=Di;exports.Log1p=Oi;exports.LogSoftmax=df;exports.LogicalAnd=Fi;exports.LogicalNot=Ci;exports.LogicalOr=Bi;exports.LogicalXor=mf;exports.LowerBound=gf;exports.MatrixBandPart=bf;exports.Max=Pi;exports.MaxPool=zi;exports.MaxPool3D=Vi;exports.MaxPool3DGrad=Nf;exports.MaxPoolGrad=wf;exports.MaxPoolWithArgmax=Ui;exports.Maximum=Li;exports.Mean=ji;exports.Min=qi;exports.Minimum=Wi;exports.MirrorPad=Mi;exports.Mod=Gi;exports.MomentumOptimizer=xh;exports.Multinomial=Ki;exports.Multiply=Hi;exports.Neg=Xi;exports.NonMaxSuppressionV3=Ji;exports.NonMaxSuppressionV4=Yi;exports.NonMaxSuppressionV5=Qi;exports.NotEqual=Zi;exports.OP_SCOPE_SUFFIX=ys;exports.OneHot=tu;exports.OnesLike=eu;exports.Optimizer=pt;exports.Pack=nu;exports.PadV2=ru;exports.Pool=Tf;exports.Pow=su;exports.Prelu=au;exports.Prod=ou;exports.RMSPropOptimizer=Ih;exports.RaggedGather=iu;exports.RaggedRange=uu;exports.RaggedTensorToTensor=cu;exports.Range=lu;exports.Real=pu;exports.RealDiv=si;exports.Reciprocal=hu;exports.Relu=fu;exports.Relu6=yu;exports.Reshape=mu;exports.ResizeBilinear=gu;exports.ResizeBilinearGrad=vf;exports.ResizeNearestNeighbor=du;exports.ResizeNearestNeighborGrad=Sf;exports.Reverse=bu;exports.RotateWithOffset=sc;exports.Round=wu;exports.Rsqrt=Nu;exports.SGDOptimizer=ma;exports.ScatterNd=Tu;exports.SearchSorted=vu;exports.Select=ku;exports.Selu=Eu;exports.Serializable=ha;exports.SerializationMap=Ge;exports.Sigmoid=Au;exports.Sign=Iu;exports.Sin=_u;exports.Sinh=xu;exports.Slice=$u;exports.Softmax=Ru;exports.Softplus=Du;exports.SpaceToBatchND=Cu;exports.SparseFillEmptyRows=Pu;exports.SparseReshape=Lu;exports.SparseSegmentMean=zu;exports.SparseSegmentSum=Vu;exports.SparseToDense=Uu;exports.SplitV=Bu;exports.Sqrt=Ou;exports.Square=kf;exports.SquaredDifference=ju;exports.StaticRegexReplace=qu;exports.Step=rc;exports.StridedSlice=Wu;exports.StringNGrams=Mu;exports.StringSplit=Gu;exports.StringToHashBucketFast=Ku;exports.Sub=Hu;exports.Sum=Fu;exports.Tan=Xu;exports.Tanh=Zu;exports.Tensor=te;exports.TensorBuffer=Kn;exports.TensorScatterUpdate=Su;exports.Tile=ps;exports.TopK=Ju;exports.Transform=Yu;exports.Transpose=Vn;exports.Unique=Qu;exports.Unpack=ec;exports.UnsortedSegmentSum=tc;exports.UpperBound=Ef;exports.Variable=dn;exports.ZerosLike=nc;exports._FusedMatMul=xr;exports.abs=ge;exports.acos=qc;exports.acosh=Wc;exports.add=F;exports.addN=Mc;exports.all=Gc;exports.any=Kc;exports.applyActivation=wr;exports.argMax=Hc;exports.argMin=Xc;exports.arraysEqual=Ce;exports.asin=Zc;exports.asinh=Jc;exports.assert=g;exports.assertAndGetBroadcastShape=ne;exports.assertAxesAreInnerMostDims=Ng;exports.assertShapesMatch=ue;exports.atan=Yc;exports.atan2=Qc;exports.atanh=el;exports.avgPool=Es;exports.avgPool3d=sl;exports.axesAreInnerMostDims=Os;exports.backend=xc;exports.basicLSTMCell=al;exports.batchNorm=An;exports.batchNorm2d=ol;exports.batchNorm3d=il;exports.batchNorm4d=ul;exports.batchToSpaceND=$s;exports.bincount=_s;exports.bitwiseAnd=cl;exports.booleanMaskAsync=Jp;exports.broadcastArgs=ll;exports.broadcastTo=ln;exports.broadcast_util=cg;exports.browser=y1;exports.browserHTTPRequest=Ch;exports.buffer=Pe;exports.bytesPerElement=hn;exports.calculateShapes=jp;exports.cast=Q;exports.ceil=pl;exports.checkPadOnDimRoundingMode=Ie;exports.clamp=Xa;exports.clipByValue=hl;exports.clone=Ke;exports.combineLocations=Bl;exports.complex=Ze;exports.computeConv2DInfo=In;exports.computeConv3DInfo=nl;exports.computeDefaultPad=ks;exports.computeDilation2DInfo=gd;exports.computeOutAndReduceShapes=wg;exports.computePool2DInfo=tl;exports.computePool3DInfo=yd;exports.computeStrides=tn;exports.concat=ie;exports.concat1d=fl;exports.concat2d=ml;exports.concat3d=dl;exports.concat4d=gl;exports.concatenateArrayBuffers=Oc;exports.conv1d=yl;exports.conv2DBackpropFilter=sh;exports.conv2DBackpropInput=xs;exports.conv2d=Dn;exports.conv2d$1=ah;exports.conv2dTranspose=bl;exports.conv3DBackpropInput=Nl;exports.conv3d=wl;exports.conv3dTranspose=Tl;exports.convertBackendValuesAndArrayBuffer=co;exports.convertConv2DDataFormat=rl;exports.convertToTensor=m;exports.copyRegisteredKernels=Af;exports.cos=Sl;exports.cosh=vl;exports.cosineWindow=gr;exports.createScalarValue=gc;exports.cumprod=kl;exports.cumsum=El;exports.customGrad=ze;exports.decodeString=Gn;exports.decodeWeights=bs;exports.denseBincount=$l;exports.deprecationWarn=um;exports.depthToSpace=_l;exports.depthwiseConv2d=or;exports.depthwiseConv2dNativeBackpropFilter=oh;exports.depthwiseConv2dNativeBackpropInput=ih;exports.deregisterOp=N1;exports.device_util=nm;exports.diag=xl;exports.dilation2d=Il;exports.disableDeprecationWarnings=im;exports.dispose=pe;exports.disposeVariables=cm;exports.div=G;exports.divNoNan=Dl;exports.dot=Ol;exports.dropout=nh;exports.einsum=dt;exports.eitherStridesOrDilationsAreOne=Ye;exports.elu=Ds;exports.enableDebugMode=om;exports.enableProdMode=am;exports.enclosingPowerOfTwo=la;exports.encodeString=sr;exports.encodeWeights=Ic;exports.engine=lm;exports.ensureShape=Fl;exports.env=C;exports.equal=As;exports.erf=Cl;exports.euclideanNorm=Pl;exports.exp=it;exports.expandDims=je;exports.expandShapeToKeepDim=On;exports.expm1=Ll;exports.eye=Fs;exports.fetch=yc;exports.fft=hr;exports.fill=nn;exports.findBackend=ym;exports.findBackendFactory=bm;exports.fingerPrint64=dc;exports.flatten=St;exports.floor=Cs;exports.floorDiv=vs;exports.fromPixels=Lh;exports.fused_ops=ch;exports.gather=Bs;exports.gatherND=th;exports.getArrayFromDType=nr;exports.getAxesPermutation=Tg;exports.getBackend=_c;exports.getBroadcastDims=Al;exports.getFusedBiasGradient=br;exports.getFusedDyActivation=yr;exports.getGlobalTensorClass=ms;exports.getGradient=Dr;exports.getInnerMostAxes=vg;exports.getKernel=mn;exports.getKernelsForBackend=Wn;exports.getLoadHandlers=Bc;exports.getReductionAxes=Is;exports.getSaveHandlers=Cc;exports.getTensorsInContainer=ar;exports.getTypedArrayFromDType=ss;exports.getUndoAxesPermutation=Sg;exports.grad=Jg;exports.grads=Yg;exports.greater=Cn;exports.greaterEqual=Rs;exports.hasEncodingLoss=so;exports.ifft=vn;exports.imag=Bn;exports.image=wh;exports.inTopKAsync=rh;exports.indexToLoc=ho;exports.inferDtype=en;exports.inferFromImplicitShape=to;exports.inferShape=Je;exports.io=ya;exports.irfft=sa;exports.isBrowser=gs;exports.isFinite=zl;exports.isInf=Vl;exports.isInt=Tt;exports.isMobile=Ec;exports.isNaN=Ul;exports.isNumber=as;exports.isPromise=Xe;exports.isString=kn;exports.isTensorInList=Sc;exports.isTypedArray=we;exports.keep=De;exports.leakyRelu=Ps;exports.less=Jn;exports.lessEqual=ir;exports.linalg=Nh;exports.linspace=jl;exports.loadGraphModel=MN;exports.loadGraphModelSync=GN;exports.loadWeights=Dh;exports.locToIndex=po;exports.localResponseNormalization=ql;exports.log=$f;exports.log$1=Xt;exports.log1p=Ls;exports.logSigmoid=Ml;exports.logSoftmax=Gl;exports.logSumExp=Vs;exports.logicalAnd=Nn;exports.logicalNot=Us;exports.logicalOr=js;exports.logicalXor=Kl;exports.losses=Th;exports.lowerBound=Hl;exports.makeOnesTypedArray=rr;exports.makeZerosNestedTypedArray=lo;exports.makeZerosTypedArray=En;exports.matMul=U;exports.matMul$1=uh;exports.max=Nt;exports.maxPool=qs;exports.maxPool3d=Xl;exports.maxPoolWithArgmax=Zl;exports.maximum=Ws;exports.mean=Tn;exports.memory=pm;exports.meshgrid=Jl;exports.min=Zn;exports.minimum=Sn;exports.mirrorPad=Yl;exports.mod=Ql;exports.moments=ep;exports.movingAverage=Yp;exports.mul=$;exports.multiRNNCell=tp;exports.multinomial=np;exports.nearestDivisor=io;exports.nearestLargerEven=Za;exports.neg=Fe;exports.nonMaxSuppressionV3Impl=hh;exports.nonMaxSuppressionV4Impl=fh;exports.nonMaxSuppressionV5Impl=mh;exports.norm=Fn;exports.notEqual=Ms;exports.now=Gt;exports.oneHot=rp;exports.ones=nt;exports.onesLike=sp;exports.op=b;exports.outerProduct=ap;exports.pad=rn;exports.pad1d=op;exports.pad2d=ip;exports.pad3d=up;exports.pad4d=cp;exports.parseAxisParam=Qt;exports.pool=lp;exports.pow=Ht;exports.prelu=Ks;exports.print=Ss;exports.prod=pp;exports.profile=hm;exports.raggedGather=hp;exports.raggedRange=fp;exports.raggedTensorToTensor=mp;exports.rand=dp;exports.randomGamma=yp;exports.randomNormal=ta;exports.randomStandardNormal=bp;exports.randomUniform=pr;exports.randomUniformInt=wp;exports.range=Zt;exports.ready=dm;exports.real=Jt;exports.reciprocal=Np;exports.registerBackend=wm;exports.registerClass=fa;exports.registerGradient=_f;exports.registerKernel=ac;exports.registerOp=w1;exports.relu=Rn;exports.relu6=na;exports.removeBackend=gm;exports.repeatedTry=eo;exports.reshape=v;exports.resizeBilinear=dh;exports.resizeNearestNeighbor=gh;exports.reverse=ut;exports.reverse1d=Tp;exports.reverse2d=Sp;exports.reverse3d=vp;exports.reverse4d=kp;exports.rfft=fr;exports.rightPad=zt;exports.round=ra;exports.rsqrt=Ep;exports.scalar=z;exports.scatterND=Qp;exports.scatter_nd_util=Wb;exports.searchSorted=cr;exports.seedrandom=lr;exports.selu=$p;exports.separableConv2d=_p;exports.serialization=M0;exports.setBackend=mm;exports.setPlatform=Nm;exports.setdiff1dAsync=xp;exports.shouldFuse=Nr;exports.shuffle=ns;exports.sigmoid=wt;exports.sign=Ip;exports.signal=bh;exports.sin=Ap;exports.sinh=Dp;exports.sizeFromShape=J;exports.sizeToSquarishShape=Qa;exports.slice=q;exports.slice1d=Op;exports.slice2d=Fp;exports.slice3d=Cp;exports.slice4d=Bp;exports.softmax=Rp;exports.softplus=zs;exports.spaceToBatchND=Gs;exports.sparse=Sh;exports.sparseToDense=eh;exports.spectral=yh;exports.split=Yt;exports.sqrt=Le;exports.square=xe;exports.squaredDifference=aa;exports.squeeze=mr;exports.squeezeShape=rs;exports.stack=Ve;exports.step=oa;exports.stridedSlice=Pp;exports.stridesOrDilationsArePositive=$t;exports.string=vh;exports.sub=R;exports.sum=M;exports.sum$1=Ja;exports.sumOutType=Xf;exports.swap=pn;exports.tan=Lp;exports.tanh=Xn;exports.tensor=Oe;exports.tensor1d=Se;exports.tensor2d=qt;exports.tensor3d=ia;exports.tensor4d=zp;exports.tensor5d=Vp;exports.tensor6d=Up;exports.tensorScatterUpdate=qp;exports.tensor_util=Jf;exports.tidy=V;exports.tile=jt;exports.time=fm;exports.toNestedArray=rt;exports.toTypedArray=_n;exports.topk=Wp;exports.transpose=Yn;exports.truncatedNormal=Mp;exports.tupleValuesAreOne=wn;exports.unique=Gp;exports.unregisterGradient=If;exports.unregisterKernel=xf;exports.unsortedSegmentSum=Kp;exports.unstack=lt;exports.upcastType=ds;exports.upperBound=Hp;exports.util=Lf;exports.validateInput=dr;exports.validateUpdateShape=ua;exports.valueAndGrad=Qg;exports.valueAndGrads=ey;exports.variable=Xp;exports.variableGrads=Wl;exports.warn=et;exports.where=He;exports.whereAsync=ca;exports.whereImpl=Zp;exports.zeros=_t;exports.zerosLike=be;
