(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{232:function(e,t,r){var content=r(256);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("30bd29cb",content,!0,{sourceMap:!1})},233:function(e,t,r){var content=r(258);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("a26c745e",content,!0,{sourceMap:!1})},234:function(e,t,r){var content=r(260);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("5e5eab38",content,!0,{sourceMap:!1})},235:function(e,t,r){var content=r(262);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("431c8352",content,!0,{sourceMap:!1})},255:function(e,t,r){"use strict";var n=r(232);r.n(n).a},256:function(e,t,r){(t=r(21)(!1)).push([e.i,".chat[data-v-c9121d80]{flex:1}",""]),e.exports=t},257:function(e,t,r){"use strict";var n=r(233);r.n(n).a},258:function(e,t,r){(t=r(21)(!1)).push([e.i,".quality-change[data-v-4c8343a0]{position:absolute;bottom:0;left:0;right:0;background-color:#000;z-index:10}.quality[data-v-4c8343a0]{padding:5px 20px;color:#fff;cursor:pointer}.quality.active[data-v-4c8343a0]{color:#000;background-color:#fff}",""]),e.exports=t},259:function(e,t,r){"use strict";var n=r(234);r.n(n).a},260:function(e,t,r){(t=r(21)(!1)).push([e.i,".player-wrapper[data-v-6daaf2cd]{position:relative;width:70%}@media (max-width:575px){.player-wrapper[data-v-6daaf2cd]{width:100%}}.player-wrapper.full[data-v-6daaf2cd]{width:100%}.player[data-v-6daaf2cd]{height:100%}.player .player-video .avap-ads-container[data-v-6daaf2cd],.player .player-video .ima-ads-container[data-v-6daaf2cd]{display:none!important}.player__controls-wrap[data-v-6daaf2cd]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;z-index:1;justify-content:flex-end}.player__controls[data-v-6daaf2cd],.player__controls-wrap[data-v-6daaf2cd]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player__controls[data-v-6daaf2cd]{opacity:0;transition:.25s;height:100%;width:100%;pointer-events:none}.player__controls.active[data-v-6daaf2cd]{opacity:1;-webkit-user-select:all;-moz-user-select:all;-ms-user-select:all;user-select:all;pointer-events:all}.player__change-quality[data-v-6daaf2cd]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;bottom:10px;right:10px;cursor:pointer}.player__change-quality i[data-v-6daaf2cd]{font-size:30px}.player__back[data-v-6daaf2cd]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;left:10px;top:10px;cursor:pointer;z-index:4}.player__back i[data-v-6daaf2cd]{font-size:30px}.player__follow[data-v-6daaf2cd],.player__unfollow[data-v-6daaf2cd]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;right:10px;top:10px;cursor:pointer;z-index:4}.player__follow i[data-v-6daaf2cd],.player__unfollow i[data-v-6daaf2cd]{font-size:30px}.player__loading[data-v-6daaf2cd]{top:0;z-index:3;background-color:rgba(0,0,0,.5);align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:30px}.player__loading[data-v-6daaf2cd],.stream__info[data-v-6daaf2cd]{position:absolute;right:0;bottom:0;left:0;display:flex;color:#fff}.stream__info[data-v-6daaf2cd]{background-color:#000;padding:10px;align-items:flex-start;flex-wrap:wrap;z-index:5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.stream__info-logo-col[data-v-6daaf2cd]{padding:0 10px}.stream__info-info-col[data-v-6daaf2cd]{flex:1;padding:0 10px}.stream__logo[data-v-6daaf2cd]{width:50px;height:50px;background-size:cover;background-position:50%;border-radius:100%}",""]),e.exports=t},261:function(e,t,r){"use strict";var n=r(235);r.n(n).a},262:function(e,t,r){(t=r(21)(!1)).push([e.i,".stream[data-v-c88d337e]{display:flex;position:relative;height:100vh}",""]),e.exports=t},272:function(e,t,r){"use strict";r.r(t);var n={props:{userName:{type:String,default:null}}},o=(r(255),r(13)),l=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chat"},[t("iframe",{attrs:{src:"https://www.twitch.tv/embed/"+this.userName+"/chat?darkpopout",frameborder:"0",scrolling:"no",height:"100%",width:"100%"}})])}),[],!1,null,"c9121d80",null).exports,c=(r(8),r(1)),d={props:{qualities:{type:Array,default:null},isShow:{type:Boolean,default:!1},changeQuality:{type:Function,default:null},currQuality:{type:String,default:null}}},f=(r(257),Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isShow?r("div",{staticClass:"quality-change"},e._l(e.qualities,(function(t){return r("div",{key:t.group,staticClass:"quality",class:{active:e.currQuality===t.group},on:{click:function(r){return e.changeQuality(t.group)}}},[e._v("\n    "+e._s(t.name)+"\n  ")])})),0):e._e()}),[],!1,null,"4c8343a0",null).exports),_=r(7),h={components:{QualityChange:f},props:{userName:{type:String,default:""},streamerID:{type:String,default:""},changePlayerSize:{type:Function,default:function(){}}},data:function(){return{isShowControls:!1,isFollowed:!1,streamInfo:null,isPlayerLoading:!1,player:null,qualities:null,currQuality:null,showQualityChange:!1,isPlayerFull:!0}},mounted:function(){var e=this;this.isPlayerLoading=!0;var t={channel:this.userName,width:"100%",height:"100%",theme:"dark",controls:!1};this.player=new Twitch.Player(this.$refs.player,t),this.player.addEventListener(Twitch.Player.PLAYING,(function(){e.qualities=e.player.getQualities(),e.isPlayerLoading=!1,e.currQuality=e.player.getQuality(),e.player.setMuted(!1)})),this.__getStreamInfo(),this.__checkFollowChannel()},methods:{__dblClickHandler:function(){this.isPlayerFull=!this.isPlayerFull},__closeQualities:function(){this.showQualityChange=!1},__toggleControls:function(){this.isShowControls?this.isShowControls=!1:this.isShowControls=!0},__back:function(){this.$router.back()},__unFollow:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("Вы уверены, что хотите отписаться?")){t.next=8;break}return r=e.$store.state.auth.userID,n=localStorage.getItem("myTwitchToken"),t.next=6,Object(_.k)(r,e.streamerID,n);case 6:t.sent&&(e.isFollowed=!1);case 8:case"end":return t.stop()}}),t)})))()},__follow:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$store.state.auth.userID,n=localStorage.getItem("myTwitchToken"),t.next=4,Object(_.c)(r,e.streamerID,n);case 4:t.sent&&(e.isFollowed=!0);case 6:case"end":return t.stop()}}),t)})))()},__showQualities:function(){this.showQualityChange=!0},__changeQuality:function(q){this.player.setQuality(q),this.showQualityChange=!1},__getStreamInfo:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.e)(e.streamerID);case 2:r=t.sent,data=r.data,e.streamInfo=data.stream;case 5:case"end":return t.stop()}}),t)})))()},__checkFollowChannel:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("auth/validateAuth");case 2:return r=e.$store.state.auth.userID,n=localStorage.getItem("myTwitchToken"),t.next=6,Object(_.a)(r,e.streamerID,n);case 6:t.sent&&(e.isFollowed=!0);case 8:case"end":return t.stop()}}),t)})))()}}},v=(r(259),{layout:"stream-page",components:{Player:Object(o.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"playerWrapper",staticClass:"player-wrapper",class:e.isPlayerFull?"full":""},[r("div",{staticClass:"player__controls-wrap",on:{dblclick:e.__dblClickHandler,click:function(t){e.__closeQualities(),e.__toggleControls()}}},[r("div",{staticClass:"player__controls",class:{active:e.isShowControls}},[r("div",{staticClass:"player__back",on:{click:function(t){return t.stopPropagation(),e.__back()}}},[r("i",{staticClass:"fas fa-arrow-left"})]),e._v(" "),e.isFollowed?r("div",{staticClass:"player__follow",on:{click:function(t){return t.stopPropagation(),e.__unFollow()}}},[r("i",{staticClass:"fas fa-heart"})]):e._e(),e._v(" "),e.isFollowed?e._e():r("div",{staticClass:"player__unfollow",on:{click:function(t){return t.stopPropagation(),e.__follow()}}},[r("i",{staticClass:"far fa-heart"})]),e._v(" "),e.streamInfo?r("div",{staticClass:"stream__info"},[r("div",{staticClass:"stream__info-logo-col"},[r("div",{staticClass:"stream__logo",style:"background-image: url("+e.streamInfo.channel.logo+")"})]),e._v(" "),r("div",{staticClass:"stream__info-info-col"},[r("div",{staticClass:"stream__streamer"},[e._v("\n            "+e._s(e.streamInfo.channel.display_name)+"\n          ")]),e._v(" "),r("div",{staticClass:"stream__title"},[e._v(e._s(e.streamInfo.channel.status))]),e._v(" "),r("div",{staticClass:"stream__game"},[e._v(e._s(e.streamInfo.game))]),e._v(" "),r("div",{staticClass:"stream__viewers"},[e._v(e._s(e.streamInfo.viewers)+" зрителей")])]),e._v(" "),r("div",{staticClass:"player__change-quality",on:{click:function(t){return t.stopPropagation(),e.__showQualities()}}},[r("i",{staticClass:"fas fa-cog"})])]):e._e()])]),e._v(" "),e.isPlayerLoading?r("div",{staticClass:"player__loading"},[e._v("\n    Loading...\n  ")]):e._e(),e._v(" "),e.qualities?r("QualityChange",{attrs:{qualities:e.qualities,isShow:e.showQualityChange,changeQuality:e.__changeQuality,currQuality:e.currQuality}}):e._e(),e._v(" "),r("div",{ref:"player",staticClass:"player"})],1)}),[],!1,null,"6daaf2cd",null).exports,Chat:l},data:function(){return{userName:null,streamerID:null}},created:function(){this.userName=this.$route.query.channel,this.streamerID=this.$route.query.id}}),y=(r(261),Object(o.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"stream"},[t("Player",{attrs:{userName:this.userName,streamerID:this.streamerID}}),this._v(" "),t("Chat",{attrs:{userName:this.userName}})],1)}),[],!1,null,"c88d337e",null));t.default=y.exports}}]);