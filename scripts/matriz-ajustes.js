const EVENTOS = {
    init() {
        this.irErrorDetectable();
        this.irErrorNoDetectable();
    },
    irErrorDetectable() {
        $("body").on("click", "#btn_error_detectable", (evento) => {
            location = "./error-detectable.html"
        });
    },
    irErrorNoDetectable() {
        $("body").on("click", "#btn_error_no_detectable", (evento) => {
            location = "./error-no-detectable.html"
        });
    }
};

(() => {
    EVENTOS.init();
})();