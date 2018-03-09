//Coded by A.R - Powered by Vue.js
//Images card must be 1280x720
//Init components
var item = Vue.component('nav-obj', {
    props: ['nav'],
    template: '<a href= "#" v-on:click="toggleActive(nav)" v-bind:id="nav.id" class="btn btn-dark col-xs-12 col-md-3" style="margin-left:5px; font-family:Assistant; border-radius:0;">{{ nav.text }}</a>',
    methods: {
        toggleActive: function (nav) {
            $(function () {
                $(".navElements").each(function (index) {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    }
                });

                if (nav.active) nav.active = false;
                else nav.active = true;
            });               
        }
    }
});

var tag = Vue.component('tag-obj', {
    props: ['tag'],
    template: '<small class="text-muted tag-small"><i class="fa fa-tags"></i> {{ tag.tagName }}</small>'
});

var aside = Vue.component('aside-product', {
    props: ['aside'],
    template: '<p><span class="aside-tag" v-bind:class="aside.class"><i class="fa fa-tags"></i> {{ aside.tagName }}</span> <label> {{ aside.name }} </label></p>'
});

//Main Control
new Vue({
    el: '#app',
    data: {
        // all global variables here
        img_path: "img/logo2.png",
        assemblaggio: "assemblaggio incluso nel prezzo!",
        title1: 'Scopri i nostri prodotti!',
        pageDescription: 'Respawn Zone è partner ufficiale MSI ed oltre ad essere un gaming bar, è fornitore di attrezzature per PC da gaming ed altro ancora.',
        menuOptions: [
            { id: "nav-item-all", text: 'Sfoglia il catalogo', active: false }
            /*{ id: "nav-item-pc", text: 'Sfoglia Gaming PC', active: false },
            { id: "nav-item-cpm", text: 'Sfoglia Componenti', active: false }*/
        ],
        catalog: [
            { href: "pages/pc/smasher.html", image: "img/pc/sharkoon.jpg", name: "The Smasher", price: "700€", assembly: true, description: "Questo computer è il prodotto ideale per qualità/prezzo.", tagName: "GAMING PC", class: "tag-pc"}
            ,
            { href: "pages/pc/smasher.html", image: "img/pc/sharkoon.jpg", name: "The Glitcher", price: "959€", assembly: true, description: "Questo computer è il prodotto ideale per qualità/prezzo.", tagName: "GAMING PC", class: "tag-pc" }
            ,
            { href: "pages/pc/smasher.html", image: "img/com/razer-head.jpg", name: "Razer Headphones", price: "55€", assembly: false, description: "Il silenzio e la qualità sono assicurate.", tagName: "COMPONENTI", class: "tag-com" }
            ,
            { href: "pages/pc/smasher.html", image: "img/com/razer-mouse.jpg", name: "Razer Mouse", price: "35€", assembly: false, description: "Un grip mai visto su un mouse.", tagName: "COMPONENTI", class: "tag-com" }

        ]
    }
});

$(function () {
    $("#nav-item-all").click(function () {
        $(".jumbotron").addClass("animated fadeOut");
        setTimeout(function () {

        $("body").css("background", "#f8f9fa");
        $("#app").addClass("animated fadeIn");
        $("#app").load("respawn/pages/catalog.html");
        }, 750);
        
    });

    $(".logo-size-small").click(function () { location.reload(); })
});

//e bravi cinesi finocchi
