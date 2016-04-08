define([], () => {
    // 定义所有相关的vmodel
    let home = avalon.define({
        $id : 'home',
        title : '首页'
    });

    return avalon.controller(($ctrl) => {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = () => {
        }
        // 进入视图
        $ctrl.$onEnter = () => {
        }
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = () => {}
        // 指定一个avalon.scan视图的vmodels，vmodels = $ctrl.$vmodels.concact(DOM树上下文vmodels)
        $ctrl.$vmodels = []
    })
})