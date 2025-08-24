"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./graph_model-BLJCkqkS.cjs");/**
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
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function D(n,o,t,s){function a(r){return r instanceof t?r:new t(function(c){c(r)})}return new(t||(t=Promise))(function(r,c){function h(l){try{i(s.next(l))}catch(f){c(f)}}function v(l){try{i(s.throw(l))}catch(f){c(f)}}function i(l){l.done?r(l.value):a(l.value).then(h,v)}i((s=s.apply(n,[])).next())})}function _(n,o){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},s,a,r,c;return c={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function h(i){return function(l){return v([i,l])}}function v(i){if(s)throw new TypeError("Generator is already executing.");for(;t;)try{if(s=1,a&&(r=i[0]&2?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[i[0]&2,r.value]),i[0]){case 0:case 1:r=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,a=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!r||i[1]>r[0]&&i[1]<r[3])){t.label=i[1];break}if(i[0]===6&&t.label<r[1]){t.label=r[1],r=i;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(i);break}r[2]&&t.ops.pop(),t.trys.pop();continue}i=o.call(n,t)}catch(l){i=[6,l],a=0}finally{s=r=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 */var q=function(n){n.startEndTensor.dispose(),n.startPoint.dispose(),n.endPoint.dispose()},S=function(n){return{startEndTensor:n,startPoint:e.slice(n,[0,0],[-1,2]),endPoint:e.slice(n,[0,2],[-1,2])}},C=function(n,o){var t=e.mul(n.startPoint,o),s=e.mul(n.endPoint,o),a=e.concat2d([t,s],1);return S(a)};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 */var E={strides:[8,16],anchors:[2,6]},P=6;function I(n,o,t){for(var s=[],a=0;a<t.strides.length;a++)for(var r=t.strides[a],c=Math.floor((o+r-1)/r),h=Math.floor((n+r-1)/r),v=t.anchors[a],i=0;i<c;i++)for(var l=r*(i+.5),f=0;f<h;f++)for(var m=r*(f+.5),u=0;u<v;u++)s.push([m,l]);return s}function O(n,o,t){var s=e.slice(n,[0,1],[-1,2]),a=e.add(s,o),r=e.slice(n,[0,3],[-1,2]),c=e.div(r,t),h=e.div(a,t),v=e.div(c,2),i=e.sub(h,v),l=e.add(h,v),f=e.mul(i,t),m=e.mul(l,t),u=1;return e.concat2d([f,m],u)}function G(n){return n instanceof e.Tensor?[n.shape[0],n.shape[1]]:[n.height,n.width]}function R(n,o){var t,s,a;if(n.topLeft instanceof e.Tensor&&n.bottomRight instanceof e.Tensor){var r=e.tidy(function(){return[e.concat([e.slice(e.sub(o-1,n.topLeft),0,1),e.slice(n.topLeft,1,1)]),e.concat([e.sub(o-1,e.slice(n.bottomRight,0,1)),e.slice(n.bottomRight,1,1)])]}),c=r[0],h=r[1];t=c,s=h,n.landmarks!=null&&(a=e.tidy(function(){var d=e.sub(e.tensor1d([o-1,0]),n.landmarks),x=e.tensor1d([1,-1]),z=e.mul(d,x);return z}))}else{var v=n.topLeft,i=v[0],l=v[1],f=n.bottomRight,m=f[0],u=f[1];t=[o-1-i,l],s=[o-1-m,u],n.landmarks!=null&&(a=n.landmarks.map(function(d){return[o-1-d[0],d[1]]}))}var b={topLeft:t,bottomRight:s};return a!=null&&(b.landmarks=a),n.probability!=null&&(b.probability=n.probability instanceof e.Tensor?n.probability.clone():n.probability),b}function N(n,o){return e.tidy(function(){var t;return n.hasOwnProperty("box")?t=n.box:t=n,e.squeeze(C(t,o).startEndTensor)})}var A=function(){function n(o,t,s,a,r,c){this.blazeFaceModel=o,this.width=t,this.height=s,this.maxFaces=a,this.anchorsData=I(t,s,E),this.anchors=e.tensor2d(this.anchorsData),this.inputSizeData=[t,s],this.inputSize=e.tensor1d([t,s]),this.iouThreshold=r,this.scoreThreshold=c}return n.prototype.getBoundingBoxes=function(o,t,s){return s===void 0&&(s=!0),D(this,void 0,void 0,function(){var a,r,c,h,v,i,l,f,m,u,b,d,x,z,p=this;return _(this,function(F){switch(F.label){case 0:return a=e.tidy(function(){var y=e.image.resizeBilinear(o,[p.width,p.height]),g=e.mul(e.sub(e.div(y,255),.5),2),w=p.blazeFaceModel.predict(g),k=e.squeeze(w),B=O(k,p.anchors,p.inputSize),L=e.slice(k,[0,0],[-1,1]),T=e.squeeze(e.sigmoid(L));return[k,B,T]}),r=a[0],c=a[1],h=a[2],v=console.warn,console.warn=function(){},i=e.image.nonMaxSuppression(c,h,this.maxFaces,this.iouThreshold,this.scoreThreshold),console.warn=v,[4,i.array()];case 1:return l=F.sent(),i.dispose(),f=l.map(function(y){return e.slice(c,[y,0],[1,-1])}),t?[3,3]:[4,Promise.all(f.map(function(y){return D(p,void 0,void 0,function(){var g;return _(this,function(w){switch(w.label){case 0:return[4,y.array()];case 1:return g=w.sent(),y.dispose(),[2,g]}})})}))];case 2:f=F.sent(),F.label=3;case 3:for(m=o.shape[1],u=o.shape[2],t?b=e.div([u,m],this.inputSize):b=[u/this.inputSizeData[0],m/this.inputSizeData[1]],d=[],x=function(y){var g=f[y],w=e.tidy(function(){var k=g instanceof e.Tensor?S(g):S(e.tensor2d(g));if(!s)return k;var B=l[y],L;t?L=e.slice(p.anchors,[B,0],[1,2]):L=p.anchorsData[B];var T=e.reshape(e.squeeze(e.slice(r,[B,P-1],[1,-1])),[P,-1]),M=e.slice(h,[B],[1]);return{box:k,landmarks:T,probability:M,anchor:L}});d.push(w)},z=0;z<f.length;z++)x(z);return c.dispose(),h.dispose(),r.dispose(),[2,{boxes:d,scaleFactor:b}]}})})},n.prototype.estimateFaces=function(o,t,s,a){return t===void 0&&(t=!1),s===void 0&&(s=!1),a===void 0&&(a=!0),D(this,void 0,void 0,function(){var r,c,h,v,i,l,f=this;return _(this,function(m){switch(m.label){case 0:return r=G(o),c=r[1],h=e.tidy(function(){return o instanceof e.Tensor||(o=e.fromPixels(o)),e.expandDims(e.cast(o,"float32"),0)}),[4,this.getBoundingBoxes(h,t,a)];case 1:return v=m.sent(),i=v.boxes,l=v.scaleFactor,h.dispose(),t?[2,i.map(function(u){var b=N(u,l),d={topLeft:e.slice(b,[0],[2]),bottomRight:e.slice(b,[2],[2])};if(a){var x=u,z=x.landmarks,p=x.probability,F=x.anchor,y=e.mul(e.add(z,F),l);d.landmarks=y,d.probability=p}return s&&(d=R(d,c)),d})]:[2,Promise.all(i.map(function(u){return D(f,void 0,void 0,function(){var b,d,p,x,z,p,F,y,g,w,k,B,L=this;return _(this,function(T){switch(T.label){case 0:return b=N(u,l),a?[3,2]:[4,b.array()];case 1:return p=T.sent(),d={topLeft:p.slice(0,2),bottomRight:p.slice(2)},[3,4];case 2:return[4,Promise.all([u.landmarks,b,u.probability].map(function(M){return D(L,void 0,void 0,function(){return _(this,function(j){return[2,M.array()]})})}))];case 3:x=T.sent(),z=x[0],p=x[1],F=x[2],y=u.anchor,g=l,w=g[0],k=g[1],B=z.map(function(M){return[(M[0]+y[0])*w,(M[1]+y[1])*k]}),d={topLeft:p.slice(0,2),bottomRight:p.slice(2),landmarks:B,probability:F},q(u.box),u.landmarks.dispose(),u.probability.dispose(),T.label=4;case 4:return b.dispose(),s&&(d=R(d,c)),[2,d]}})})}))]}})})},n.prototype.dispose=function(){this.blazeFaceModel.dispose(),this.anchors.dispose(),this.inputSize.dispose()},n}();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 */var U="https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1";function H(n){var o=n===void 0?{}:n,t=o.maxFaces,s=t===void 0?10:t,a=o.inputWidth,r=a===void 0?128:a,c=o.inputHeight,h=c===void 0?128:c,v=o.iouThreshold,i=v===void 0?.3:v,l=o.scoreThreshold,f=l===void 0?.75:l,m=o.modelUrl;return D(this,void 0,void 0,function(){var u,b;return _(this,function(d){switch(d.label){case 0:return m==null?[3,2]:[4,e.loadGraphModel(m)];case 1:return u=d.sent(),[3,4];case 2:return[4,e.loadGraphModel(U,{fromTFHub:!0})];case 3:u=d.sent(),d.label=4;case 4:return b=new A(u,r,h,s,i,f),[2,b]}})})}exports.BlazeFaceModel=A;exports.load=H;
