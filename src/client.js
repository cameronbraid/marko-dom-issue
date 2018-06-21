if (!window.initDone) {
    // debugger
    window.initDone = true
    require('src/components/App.marko');
    require('marko/components').init();
}