(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1379:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__),classnames_bind__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(36),classnames_bind__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(30),hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),_comment_scss__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1420),_comment_scss__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_comment_scss__WEBPACK_IMPORTED_MODULE_7__),store_modules_base__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(32),store_modules_comment__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(573),query_string__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(269),query_string__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_10__),_constants__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(12),cx=classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_comment_scss__WEBPACK_IMPORTED_MODULE_7___default.a);__webpack_exports__.default=isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_comment_scss__WEBPACK_IMPORTED_MODULE_7___default.a)((function CommentPage(props){var _useReactRouter=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.g)(),history=_useReactRouter.history,location=_useReactRouter.location,match=_useReactRouter.match,query=query_string__WEBPACK_IMPORTED_MODULE_10___default.a.parse(location.search),dispatch=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.c)(),comment=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.j)((function(state){return{comment:state.comment}})).comment,channelId=match.params.channelId,_useState=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.k)("recommend"===query.orderBy?"recommend":"recent"),_useState2=Object(C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),orderby=_useState2[0],setOrderby=_useState2[1];Object(hooks__WEBPACK_IMPORTED_MODULE_5__.d)((function(){console.log("CommentPage useEffect => ",channelId,orderby),dispatch(store_modules_comment__WEBPACK_IMPORTED_MODULE_9__.getCommentList(channelId,orderby)).then((function(){}))}),[channelId,orderby,dispatch]);var isHit=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.i)({threshold:100}),_useState3=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.k)((function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__.createRef)()})),_useState4=Object(C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),commentListReference=_useState4[0],isPendingPaging=(_useState4[1],Object(hooks__WEBPACK_IMPORTED_MODULE_5__.h)(!1)),currentLength=comment.commentList.length,hasNext=currentLength<comment.commentTotalCount;Object(hooks__WEBPACK_IMPORTED_MODULE_5__.e)((function(){isHit&&hasNext&&!isPendingPaging.current&&(console.log("isHit => ",isHit,channelId,currentLength,hasNext,orderby,isPendingPaging),isPendingPaging.current=!0,dispatch(store_modules_comment__WEBPACK_IMPORTED_MODULE_9__.getCommentPaging(channelId,orderby,currentLength+1,20)).then((function(){isPendingPaging.current=!1})))}),[isHit,channelId,currentLength,hasNext,orderby,dispatch]);var handleCommentSort=function handleCommentSort(newOrderby){newOrderby="recommend"===newOrderby?"recommend":"recent",console.log(history),history.replace(history.location.pathname+"?orderBy="+newOrderby),setOrderby(newOrderby),dispatch(store_modules_base__WEBPACK_IMPORTED_MODULE_8__.openPopup({title:"title",detail:"detail",firstBtnNm:"예",checkBtnNm:"다시보지않기",onEvent:function onEvent(eventName,state,event){console.log("CommentPage -> openPopup onEvent",eventName,state)}}))},_useState5=Object(hooks__WEBPACK_IMPORTED_MODULE_5__.k)(0),_useState6=Object(C_work_react_sample01_builder20_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),aaaCount=_useState6[0],setAaaCount=_useState6[1];return _constants__WEBPACK_IMPORTED_MODULE_11__.logConfig.render&&console.log("%r CommentPage",comment),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_6__.DisplayTemplate,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_6__.BooksHelmet,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title",null,"unknown-댓글"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"keywords",content:"unknown-댓글"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"description",content:"unknown-댓글"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:cx("commentsep")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:cx("header","detail")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"header-co"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"header-title"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"댓글"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.a,{className:cx("btn-header","btn-header-mycomment"),to:"/comment/"+channelId+"/my"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"내 댓글")))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container",ref:commentListReference},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{className:"layout-list-sort-wrap"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"layout-list-sort-inner cboth"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"layout-list-sort-left"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:"layout-list-sort-text"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:"js-comment-total","data-comment-total":comment.commentList.length},"총 ",comment.commentList.length,"개 == ",comment.commentTotalCount))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"layout-list-sort-right"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"recent"===orderby?"selected":"",onClick:function onClick(){return handleCommentSort("recent")}},"최신순")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{className:"recommend"===orderby?"selected":"",onClick:function onClick(){return handleCommentSort("recommend")}},"추천순")))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_6__.CommentListOld,{commentList:comment.commentList,pageNm:"comment",onEvent:function handleEvent(event,eventName,params){console.log(eventName,params),"handleMoveReplyPage"===eventName?history.push("/comment/"+params.commentSeq+"/reply"):"handleMenuClick"===eventName&&(setAaaCount(aaaCount+1),dispatch(store_modules_base__WEBPACK_IMPORTED_MODULE_8__.addToast({type:"bot",text:"제어창 오픈 => "+aaaCount})))}}))))}))},1420:function(module,exports,__webpack_require__){var css=__webpack_require__(1421),insertCss=__webpack_require__(8),content="string"==typeof css?[[module.i,css,""]]:css;(exports=module.exports=css.locals||{})._getContent=function(){return content},exports._getCss=function(){return""+css},exports._insertCss=function(options){return insertCss(content,options)}},1421:function(module,exports,__webpack_require__){var content=__webpack_require__(1422);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(7)(content,options);content.locals&&(module.exports=content.locals)},1422:function(module,exports,__webpack_require__){(exports=__webpack_require__(6)(!1)).push([module.i,".commentsep {\n  position: relative;\n  min-width: 320px;\n  z-index: 2; }\n  .commentsep .header {\n    position: relative;\n    width: 100%;\n    background: #f7f5f2;\n    z-index: 100; }\n    .commentsep .header .header-co {\n      position: relative;\n      padding: 0 75px 0 44px;\n      height: 48px; }\n      .commentsep .header .header-co a.btn-header {\n        position: absolute;\n        top: 0;\n        width: 32px;\n        height: 48px;\n        display: block; }\n      .commentsep .header .header-co a.btn-header-mycomment {\n        right: 5px;\n        width: auto; }\n        .commentsep .header .header-co a.btn-header-mycomment span {\n          padding: 11px 10px 11px 10px;\n          font-size: 15px;\n          line-height: 21px;\n          color: #271801;\n          display: block; }\n    .commentsep .header h2 {\n      height: 48px;\n      display: block; }\n      .commentsep .header h2 .header-title {\n        position: relative;\n        padding: 3px 0 5px 32px;\n        display: block; }\n  .commentsep .header.detail {\n    background: #fff; }\n    .commentsep .header.detail .header-co {\n      padding-left: 2px;\n      padding-right: 45px; }\n      .commentsep .header.detail .header-co h2 .header-title {\n        padding-left: 13px; }\n        .commentsep .header.detail .header-co h2 .header-title span {\n          font-size: 19px;\n          line-height: 38px;\n          display: block;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis; }\n\n.layout-list-sort-wrap {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0; }\n  .layout-list-sort-wrap .layout-list-sort-inner {\n    position: relative;\n    margin: 0;\n    padding: 0;\n    background: #f8f8f8; }\n  .layout-list-sort-wrap .layout-list-sort-left {\n    float: left; }\n    .layout-list-sort-wrap .layout-list-sort-left ul {\n      padding: 8px 0 7px 15px; }\n      .layout-list-sort-wrap .layout-list-sort-left ul li {\n        display: inline-block; }\n    .layout-list-sort-wrap .layout-list-sort-left ul.layout-list-sort-text {\n      padding: 7px 0 6px 15px; }\n      .layout-list-sort-wrap .layout-list-sort-left ul.layout-list-sort-text li {\n        font-size: 12px;\n        line-height: 24px; }\n  .layout-list-sort-wrap .layout-list-sort-right {\n    float: right; }\n    .layout-list-sort-wrap .layout-list-sort-right ul {\n      padding: 7px 10px 9px 0; }\n      .layout-list-sort-wrap .layout-list-sort-right ul li {\n        display: inline-block; }\n        .layout-list-sort-wrap .layout-list-sort-right ul li a {\n          position: relative;\n          padding: 0 6px 0 8px;\n          font-size: 13px;\n          color: #89816b;\n          line-height: 24px;\n          display: block; }\n        .layout-list-sort-wrap .layout-list-sort-right ul li a.selected {\n          color: #c39a31;\n          font-weight: 700; }\n        .layout-list-sort-wrap .layout-list-sort-right ul li a:before {\n          position: absolute;\n          content: '';\n          left: 0;\n          top: 7px;\n          width: 1px;\n          height: 9px;\n          background: #e5e5e4;\n          display: block; }\n",""]),module.exports=exports}}]);
//# sourceMappingURL=3.7936adb329237083da02.bundle.js.map