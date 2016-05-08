import avalon from 'avalon';
import 'mmState';

// 定义一个顶层的vmodel，用来放置全局共享数据
const root = avalon.define({
    $id : "root",
    footer : ''
});

// 定义一个全局抽象状态，用来渲染通用不会改变的视图，比如header，footer
avalon.state("home", {
    url: "/",
    views: {
        "content@": {
            templateProvider: function () {
                return new Promise(function (rs) {
                    require.ensure([], function (tt) {
                        rs(require("text!./home/home.html"))
                    })
                })
            },
            controllerProvider  : function(){
                return new Promise(function (rs) {
                    require.ensure([], function (tt) {
                        require(["./home/home.es6"], function($ctrl) {
                            rs($ctrl)
                        })
                    })
                })
            }
        }, 
        "footer@": { // 视图名字的语法请仔细查阅文档
            template: function() {
                return "<div style='text-align:center;'>this is footer</div>"
            } // 指定一个返回字符串的函数来获取模板
        }
    }
}).state("personCenter",{
    url : "/personCenter",
    views : {
      "content": {
            templateProvider: function () {
                return new Promise(function (rs) {
                    require.ensure([], function (tt) {
                        rs(require("text!./personCenter/personCenter.html"))
                    })
                })
            },
            controllerProvider  : function(){
                return new Promise(function (rs) {
                    require.ensure([], function (tt) {
                        require(["./personCenter/personCenter.es6"], function($ctrl) {
                            rs($ctrl)
                        })
                    })
                })
            }
        },"footer": { // 视图名字的语法请仔细查阅文档
            template: function() {
                return "<div style='text-align:center;'>fsad</div>"
            } // 指定一个返回字符串的函数来获取模板
        }
    }
})
avalon.state.config({
    onError: function() {
        console.error(arguments)
    } // 强烈打开错误配置
})
avalon.history.start();
avalon.scan(0,root);