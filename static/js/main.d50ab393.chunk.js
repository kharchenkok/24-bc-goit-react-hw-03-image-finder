(this["webpackJsonp24-bc-goit-react-hw-03-image-finder"]=this["webpackJsonp24-bc-goit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3RR9z",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1b9Ug"}},12:function(e,t,a){e.exports={Button:"LoadMoreButton_Button__y3eUW",Button__load:"LoadMoreButton_Button__load__8YPqd"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2Qftz",Modal:"Modal_Modal__2Df29"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2QhU2"}},27:function(e,t,a){e.exports={loader:"LoaderSpiner_loader__3MVdu"}},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),o=a(23),i=a.n(o),u=a(4),l=a(5),s=a(7),m=a(6),h=a(14),g=a(24),d=a.n(g);function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0;return d.a.get("https://pixabay.com/api/?key=".concat("17935343-c69abdbb5347cbe1498525dc9","&q=").concat(e,"&page=").concat(t,"&per_page=").concat(a,"&image_type=photo")).then((function(e){return e.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))}))}var p=a(76),j=a(25),_=a.n(j),f=a(10),y=a.n(f);function O(e){var t=e.image,a=e.setLargeImage,n=t.webformatURL,c=t.largeImageURL;return Object(r.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:n,alt:"super-gallery",className:y.a.ImageGalleryItem__image,onClick:function(){return a(c)}})})}var v=function(e){var t=e.images,a=e.setLargeImage;return Object(r.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){return Object(r.jsx)(O,{image:e,setLargeImage:a},Object(p.a)())}))})},S=a(26),I=a.n(S),x=a(27),F=a.n(x),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(I.a,{className:F.a.loader,type:"Watch",color:"#536488",height:120,width:120,timeout:3e3})}}]),a}(n.Component),L=a(11),C=a.n(L),k=a(28),P=a(12),U=a.n(P),G=function(e){var t=e.loadMore,a=e.setCurrentPage,n=function(){var e=Object(k.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:t();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)("button",{className:[U.a.Button,U.a.Button__load].join(" "),type:"button",onClick:n,children:"Load more"})},M=a(13),N=a.n(M),B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t){"overlay"===t.target.dataset.name&&e.props.onClose(null)},e.handleKey=function(t){"Escape"===t.code&&e.props.onClose(null)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){return Object(r.jsx)("div",{className:N.a.Overlay,"data-name":"overlay",onClick:this.handleClick,children:Object(r.jsx)("div",{className:N.a.Modal,"data-name":"modal",children:Object(r.jsx)("img",{src:this.props.src,alt:"large"})})})}}]),a}(n.Component),R=a(8),Q=a.n(R),V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={inputValue:""},e.handleInput=function(t){e.setState({inputValue:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.handleSearchFormSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)("header",{className:Q.a.Searchbar,children:Object(r.jsxs)("form",{className:Q.a.SearchForm,onSubmit:this.handleFormSubmit,children:[Object(r.jsx)("button",{type:"submit",className:Q.a.SearchForm__button,children:Object(r.jsx)("span",{className:Q.a.SearchForm__buttonLabel,children:"Search"})}),Object(r.jsx)("input",{onChange:this.handleInput,className:Q.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],loading:!1,error:null,currentPage:1,itemsPerPage:12,userQuery:"",largeImageUrl:null},e.getImageFetch=function(){var t=e.state;b(t.userQuery,t.currentPage,t.itemsPerPage).then((function(t){return e.setState((function(e){return{images:[].concat(Object(h.a)(e.images),Object(h.a)(t))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({images:[],userQuery:t,currentPage:1})},e.setLargeImage=function(t){e.setState({largeImageUrl:t})},e.setCurrentPage=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,r=a.images,n=a.userQuery;t.userQuery!==n&&(this.setState({loading:!0}),this.getImageFetch()),t.images.length!==r.length&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.error,c=e.itemsPerPage,o=e.largeImageUrl;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{handleSearchFormSubmit:this.handleSearchFormSubmit}),n&&Object(r.jsxs)("div",{children:["Sorry, something went wrong:",n.message]}),a&&Object(r.jsx)(w,{}),t.length>0&&Object(r.jsx)(v,{images:t,setLargeImage:this.setLargeImage}),t.length>=c&&Object(r.jsx)(G,{loadMore:this.getImageFetch,setCurrentPage:this.setCurrentPage}),o&&Object(r.jsx)(B,{onClose:this.setLargeImage,src:o})]})}}]),a}(n.Component),E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(A,{})})}}]),a}(n.Component);a(73);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__R3VAC",SearchForm:"Searchbar_SearchForm__3_LPS",SearchForm__button:"Searchbar_SearchForm__button__3FP31",SearchForm__buttonLabel:"Searchbar_SearchForm__buttonLabel__2K5fA",SearchForm__input:"Searchbar_SearchForm__input__97wYK"}}},[[74,1,2]]]);
//# sourceMappingURL=main.d50ab393.chunk.js.map