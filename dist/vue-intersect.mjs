var e={threshold:0,root:null,rootMargin:"0px"};export default{install:function(n,t){n.directive("intersect",{inserted:function(n,t){var c,r,i=function(n){return"function"==typeof n?Object.assign({},e,{callback:n}):Object.assign({},e,n)}(t.value);new IntersectionObserver(function(e){i.callback(e[0])},(c=i,r=["callback"],Object.keys(c).reduce(function(e,n){return r.includes(n)||(e[n]=c[n]),e},{}))).observe(n)}})}};
//# sourceMappingURL=vue-intersect.mjs.map
