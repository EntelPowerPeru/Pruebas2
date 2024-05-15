const INICIAR_COMPONENTES = {
    init() {
        this.popovers();
    },
    popovers() {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    }
};

const EVENTOS = {
    init() {
        this.errorDetectable();
        this.clienteSolucion();
        this.escenarios();
        this.autonomia();
        this.tipificacion();
        this.tipificacionPortal();
    },
    errorDetectable() {
        $("body").on("click", "#btn_error_detectable", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_error_detectable").addClass("active");
            
            $(".container_error_detectable").removeClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
            $(".container_tipificacion_portal").addClass("d-none");
        });
    },
    clienteSolucion() {
        $("body").on("click", "#btn_cliente_solucion", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_cliente_solucion").addClass("active");

            $(".container_error_detectable").addClass("d-none");
            $(".container_cliente_solucion").removeClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
            $(".container_tipificacion_portal").addClass("d-none");
        });
    },
    escenarios() {
        $("body").on("click", "#btn_escenarios", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_escenarios").addClass("active");

            $(".container_error_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").removeClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
            $(".container_tipificacion_portal").addClass("d-none");
        });
    },
    autonomia() {
        $("body").on("click", "#btn_autonomia", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_autonomia").addClass("active");

            $(".container_error_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").removeClass("d-none");
            $(".container_tipificacion").addClass("d-none");
            $(".container_tipificacion_portal").addClass("d-none");
        });
    },
    tipificacion() {
        $("body").on("click", "#btn_tipificacion", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_tipificacion").addClass("active");

            $(".container_error_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").removeClass("d-none");
            $(".container_tipificacion_portal").addClass("d-none");
        });
    },
    tipificacionPortal() {
        $("body").on("click", "#btn_tipificacion_portal", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_tipificacion_portal").addClass("active");

            $(".container_error_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
            $(".container_tipificacion_portal").removeClass("d-none");
        });
    }
};

(() => {
    INICIAR_COMPONENTES.init();
    EVENTOS.init();
})();