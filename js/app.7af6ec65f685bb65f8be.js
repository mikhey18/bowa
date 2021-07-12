!(function (e) {
    function t(t) {
        for (var o, i, d = t[0], s = t[1], a = t[2], l = 0, m = []; l < d.length; l++) (i = d[l]), Object.prototype.hasOwnProperty.call(c, i) && c[i] && m.push(c[i][0]), (c[i] = 0);
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
        for (u && u(t); m.length; ) m.shift()();
        return r.push.apply(r, a || []), n();
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, d = 1; d < n.length; d++) {
                var s = n[d];
                0 !== c[s] && (o = !1);
            }
            o && (r.splice(t--, 1), (e = i((i.s = n[0]))));
        }
        return e;
    }
    var o = {},
        c = { 0: 0 },
        r = [];
    function i(t) {
        if (o[t]) return o[t].exports;
        var n = (o[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    (i.m = e),
        (i.c = o),
        (i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    i.d(
                        n,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return n;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = "");
    var d = (window.webpackJsonp = window.webpackJsonp || []),
        s = d.push.bind(d);
    (d.push = t), (d = d.slice());
    for (var a = 0; a < d.length; a++) t(d[a]);
    var u = s;
    r.push([24, 1]), n();
})([
    ,
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {

                 // для кнопк вверх
            if(document.querySelector('.js_button_up')) {
                let buttonUp = document.querySelector('.js_button_up');
                buttonUp.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            }

            // POPUP ДЛЯ ВИДЕО
            if(document.querySelector('.popoup-video')) {
                let openPopupVideo = document.querySelectorAll('.open-popoup-video');//класс для открытия попап
                let popoupVideo = document.querySelector('.popoup-video');//popup
                let popoupVideoContent = popoupVideo.querySelector('.popoup-video__content');
                let popoupVideoClose = popoupVideo.querySelector('.popoup-video__close');//кнопка закрыть Х

                openPopupVideo.forEach(elem => {
                    elem.addEventListener('click', (e) => {
                        popoupVideo.classList.add('active');
                        e.preventDefault();
                    });                    
                });



                popoupVideoClose.addEventListener('click', () => {
                    popoupVideo.classList.remove('active');
                    
                }); 

                popoupVideo.addEventListener('click', () => {
                    popoupVideo.classList.remove('active');
                });

                popoupVideoContent.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                });

            }

            // POPUP ДЛЯ ФОТО
            if(document.querySelector('.js_popup_photo')) {
                let openPopupPhoto = document.querySelectorAll('.open-popoup-photo');//класс для открытия попап
                let popoupPhoto = document.querySelector('.js_popup_photo');//popup
                let popoupPhotoClose = popoupPhoto.querySelector('.js_popup_photo_close');//кнопка закрыть Х

                openPopupPhoto.forEach(elem => {
                    elem.addEventListener('click', (e) => {
                        e.preventDefault();
                        popoupPhoto.classList.add('active');
                    });                    
                });

                popoupPhotoClose.addEventListener('click', () => {
                    popoupPhoto.classList.remove('active');
                }); 

                popoupPhoto.addEventListener('click', () => {
                    popoupPhoto.classList.remove('active');
                });


            }

            // POPUP ДЛЯ СВЯЗАТЬСЯ СО МНОЙ(форма с инпутами)
            if(document.querySelector('.popup-to-contact-form')) {

                let openPopupToContactForm = document.querySelectorAll('.js_open_popup_to_contact_form');//класс для открытия popup
                let popupToContactForm = document.querySelector('.js_popup_to_contact_form');//popup с инпутами
                let popupToContactFormContent = popupToContactForm.querySelector('.js_popup_to_contact_form_content');//контентная часть
                let popupToContactFormContentClose = popupToContactForm.querySelector('.js_popup_to_contact_form_content_close');//кнопка закрыть

                openPopupToContactForm.forEach(elem => {
                    elem.addEventListener('click', () => {
                        popupToContactForm.classList.add('active');
                    });                    
                });



                popupToContactFormContentClose.addEventListener('click', () => {
                    popupToContactForm.classList.remove('active');
                }); 

                popupToContactForm.addEventListener('click', () => {
                    popupToContactForm.classList.remove('active');
                });

                popupToContactFormContent.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                });

            }


            // POPUP ДЛЯ СВЯЗАТЬСЯ СО МНОЙ
            if(document.querySelector('.popup-to-contact')) {
                let openPopupToContact = document.querySelectorAll('.open-popup-to-contact');//класс для открытия попап
                let popoupToContact = document.querySelector('.popup-to-contact');//popup
                let popoupToContactContent = popoupToContact.querySelector('.popup-to-contact__content');
                let popoupToContactClose = popoupToContact.querySelector('.popup-to-contact__close');//кнопка закрыть Х

                let popupToContactForm = document.querySelector('.js_popup_to_contact_form');//popup с инпутами

                openPopupToContact.forEach(elem => {
                    elem.addEventListener('click', () => {
                        popoupToContact.classList.add('active');
                        popupToContactForm.classList.remove('active');
                    });                    
                });



                popoupToContactClose.addEventListener('click', () => {
                    popoupToContact.classList.remove('active');
                }); 

                popoupToContact.addEventListener('click', () => {
                    popoupToContact.classList.remove('active');
                });

                popoupToContactContent.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                });

            }


                var e = document.querySelector(".header");
                if (e) {

                    if(document.querySelector(".product-lvl-01_main")) {
                        e.classList.add('dark');
                    }


                    document.onscroll = function () {
                        window.scrollY > 0 && !e.classList.contains("fixed-header") && e.classList.add("fixed-header"), window.scrollY <= 0 && e.classList.contains("fixed-header") && e.classList.remove("fixed-header");
                    };

                    // мобильное меню
                    let openMobileMenu = document.querySelector('.open-mobile-menu');//бургер для мобилки
                    let headerMenuMobile = document.querySelector('.header-menu-mobile');//меню для мобилки

                    // при клике на бургер открывается меню
                    openMobileMenu.addEventListener('click', () => {
                        headerMenuMobile.classList.toggle('hidden');
                    });

                    let headerMenuMobileListItem = document.querySelectorAll('.header-menu-mobile__list-item');

                    // показывает submenu
                    headerMenuMobileListItem.forEach(elem => {
                        elem.addEventListener('click', () => {
                            elem.classList.toggle('active');
                        });
                    });

                    // при клике на поиск в header
                    let headerButtonsSearch = document.querySelector('.header__buttons_search');//кнопка поиска в header
                    let headerMenuDesktopSearch = document.querySelector('.header-menu__desktop-search');//popup поиска
                    let headerMenuDesktopSearchButton = document.querySelector('.header-menu__desktop-search-button');
                    
                    // открытие input поиска
                    headerButtonsSearch.addEventListener('click', () => {
                        headerMenuDesktopSearch.classList.add('active');
                    });
                    // закрытие input поиска
                    headerMenuDesktopSearchButton.addEventListener('click', () => {
                        headerMenuDesktopSearch.classList.remove('active');
                    });


                    // скрывает cookie
                    let popupCookie = document.querySelector('.popup-cookie');//popup cookie
                    let popupCookieButton = document.querySelector('.popup-cookie__button');//кнопка ОК в popup cookie

                    if(popupCookie) { 
                        popupCookieButton.addEventListener('click', () => {
                            popupCookie.classList.remove('active');
                        });
                    }

                    // открывает подменю при наведении на продукты
                    var t = document.querySelector(".list__item_product"),
                        n = document.querySelector(".header__product-dropdown");

                    let o = function () {
                            n.classList.contains("hidden") && r.classList.contains("hidden") ? e.classList.remove("paint-menu") : e.classList.add("paint-menu");
                        };

                    let i = function (e, t) {
                        n.classList.contains("hidden") ? e.classList.remove("list__item--active") : e.classList.add("list__item--active"),
                        r.classList.contains("hidden") ? t.classList.remove("list__item--active") : t.classList.add("list__item--active");
                    };

                    (t.onmouseover = function () {
                        n.classList.remove("hidden"), i(t, c), o();
            
                    }),
                        (t.onmouseout = function () {
                            n.classList.add("hidden"), i(t, c), o();
                        }),
                        (n.onmouseover = function () {
                            n.classList.remove("hidden"), i(t, c), o();
                        }),
                        (n.onmouseout = function () {
                            n.classList.add("hidden"), i(t, c), o();
                        });



                    // открывает подменю при наведении на применение
                    var c = document.querySelector(".list__item_application"),
                        r = document.querySelector(".header__application-dropdown");

                    (c.onmouseover = function () {
                        r.classList.remove("hidden"), i(t, c), o();

                    }),
                    (c.onmouseout = function () {
                        r.classList.add("hidden"), i(t, c), o();
                    }),
                    (r.onmouseover = function () {
                        r.classList.remove("hidden"), i(t, c), o();
                    }),
                    (r.onmouseout = function () {
                        r.classList.add("hidden"), i(t, c), o();
                    });

                    

                }

            })()

           
        );
    },
    function (e, t) {},
    function (e, t, n) {
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            var e = document.querySelector(".popup-default");
            if (e) {
                var t = document.querySelectorAll(".close-default-popup"),
                    n = document.querySelectorAll(".open-default-popup"),
                    o = function () {
                        e.classList.add("hidden");
                    },
                    c = function (ev) {
                        e.classList.remove("hidden");
                        // ev.preventDefault();

                    };
                    
                /*n.forEach(function (e) {
                    e.addEventListener("click", c);

                }),*/
                    t.forEach(function (e) {
                        e.addEventListener("click", o);
                    });

                let openDeliveryAddressSuccess = document.querySelector('.open-delivery-address-success');//POPUP ДАННЫЕ ЮР.ЛИЦА
                if(openDeliveryAddressSuccess) {
                    let deliveryAddressSuccess = document.querySelector('.delivery-address-success');//POPUP ДАННЫЕ ЮР.ЛИЦА УСПЕХ
                    let deliveryAddressSuccessClose = deliveryAddressSuccess.querySelectorAll('.close-default-popup');//POPUP ДАННЫЕ ЮР.ЛИЦА кнопка закрыть

                    openDeliveryAddressSuccess.addEventListener('click', () => {
                        deliveryAddressSuccess.classList.remove('hidden');
                        openDeliveryAddressSuccess.classList.add('hidden');
                    });

                    deliveryAddressSuccessClose.forEach(elem => {
                        elem.addEventListener('click', () => {
                            deliveryAddressSuccess.classList.add('hidden');
                        });
                    });
                }
                

                let popupDeliveryAddressIE = document.querySelector('.popup-delivery-address__IE');//POPUP ДАННЫЕ ИП

                if(popupDeliveryAddressIE) {
                    let popupDeliveryAddressIEButton = popupDeliveryAddressIE.querySelector('.address-confirm-button_IE');//POPUP ДАННЫЕ ИП кнопка сохранить
                    let popupDeliveryAddressIESuccess = document.querySelector('.popup-delivery-address__IE-success');//POPUP ДАННЫЕ ИП УСПЕХ
                    let popupDeliveryAddressIESuccessClose = popupDeliveryAddressIESuccess.querySelectorAll('.close-default-popup');

                    popupDeliveryAddressIEButton.addEventListener('click', () => {
                        popupDeliveryAddressIESuccess.classList.remove('hidden');
                        popupDeliveryAddressIE.classList.add('hidden');
                    });

                    popupDeliveryAddressIESuccessClose.forEach(elem => {
                        elem.addEventListener('click', () => {
                            popupDeliveryAddressIESuccess.classList.add('hidden');
                        });
                    });
                }
                
               
            }


            // маска для номера телефона
            if(document.querySelector('.number-phone')) {

                // маска для ввода номера телфона
                function setCursorPosition(pos, elem) {
                    elem.focus();
                    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
                    else if (elem.createTextRange) {
                        var range = elem.createTextRange();
                        range.collapse(true);
                        range.moveEnd("character", pos);
                        range.moveStart("character", pos);
                        range.select()
                    }
                }
                
                function mask(event) {
                    var matrix = "+_ (___) ___-__-__",
                        i = 0,
                        def = matrix.replace(/\D/g, ""),
                        val = this.value.replace(/\D/g, "");
                    if (def.length >= val.length) val = def;
                    this.value = matrix.replace(/./g, function(a) {
                        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
                    });
                    if (event.type == "blur") {
                        if (this.value.length == 2) this.value = ""
                    } else setCursorPosition(this.value.length, this)
                };
            
                let input = document.querySelector(".number-phone");
                
                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false); 

             

            }

            // ПРОВЕРКА INPUT РЕГИСТРАЦИЯ НА МЕРОПРИЯТИЕ
            if(document.querySelector(".registration-page")) {

                let inputNeumorLight = document.querySelectorAll('.input-neumor_light');
                // console.log(inputNeumorLight);

                // маска для ввода номера телфона
                function setCursorPosition(pos, elem) {
                    elem.focus();
                    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
                    else if (elem.createTextRange) {
                        var range = elem.createTextRange();
                        range.collapse(true);
                        range.moveEnd("character", pos);
                        range.moveStart("character", pos);
                        range.select()
                    }
                }
                
                function mask(event) {
                    var matrix = "+_ (___) ___-__-__",
                        i = 0,
                        def = matrix.replace(/\D/g, ""),
                        val = this.value.replace(/\D/g, "");
                    if (def.length >= val.length) val = def;
                    this.value = matrix.replace(/./g, function(a) {
                        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
                    });
                    if (event.type == "blur") {
                        if (this.value.length == 2) this.value = ""
                    } else setCursorPosition(this.value.length, this)
                };
            
                let input = document.querySelector("#tel-user");

                if (input) {
                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false); 

                }

            }
            
        });
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            var e = document.querySelectorAll(".popup__add-to-basket");
            if (e) {
                var t = document.querySelectorAll(".close-add-to-basket-popup"),
                    n = document.querySelectorAll(".open-add-to-basket-popup"),
                    o = function () {
                        e.forEach(function (e) {
                            e.classList.add("hidden");
                        });
                    },
                    c = function () {
                        e.forEach(function (e) {
                            e.classList.remove("hidden");
                        });
                    };
                n.forEach(function (e, t) {
                    n[t].addEventListener("click", c);
                }),
                    t.forEach(function (e, n) {
                        t[n].addEventListener("click", o);
                    });
            }
        });
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                var e = document.querySelector(".popup-delivery-address__entry");
                if (e) {
                    document.querySelector(".close-delivery-address-popup__entry").addEventListener("click", function () {
                        e.classList.add("hidden");
                    });
                    var t = document.querySelector("#entry-name "),
                        n = document.querySelector("#INN"),
                        o = document.querySelector("#KPP"),
                        c = document.querySelector("#RS"),
                        r = document.querySelector("#BIC"),
                        i = document.querySelector("#OKPO"),
                        d = document.querySelector("#KS"),
                        s = document.querySelector("#OKVED"),
                        a = document.querySelector("#OKATO"),
                        u = document.querySelector("#OGRN"),
                        l = document.querySelector("#entryAddress"),
                        m = document.querySelector("#director"),
                        v = document.querySelector("#eMail"),
                        f = document.querySelector("#phone"),
                        y = document.querySelector(".address-confirm-button_entry"),
                        p = document.querySelector("#checkbox-entry"),
                        L = function () {
                            p.checked && e.classList.remove("hidden");
                        };
                    p.addEventListener("change", L);
                    var S = [t, n, o, c, r, i, d, s, a, u, l, m, v, f];
                    window.addEventListener("keydown", function () {
                        S.some(function (e) {
                            return "" === e.value;
                        })
                            ? y.setAttribute("disabled", "disabled")
                            : y.removeAttribute("disabled");
                    });
                    y.addEventListener("click", function () {
                        e.classList.add("hidden");
                    });
                    var q = document.querySelectorAll(".address-of-delivery"),
                        h = document.querySelectorAll(".form_question_confirmed-form"),
                        b = document.createElement("button");
                    b.addEventListener("click", L),
                        y.addEventListener("click", function () {
                            "" === q[0].innerHTML
                                ? S.map(function (e) {
                                      var t = document.createElement("li");
                                      (t.className = "address-items"), (t.innerHTML = e.value), q[0].appendChild(t);
                                  })
                                : document.querySelectorAll(".address-items").forEach(function (e, t) {
                                      e.innerHTML = S[t].value;
                                  });
                            var e = document.querySelector("#icon-pencil");
                            b.append(e), e.classList.remove("hidden"), h[0].append(b);
                        });
                }
            })()
        );
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                var e = document.querySelector(".popup-delivery-address__IE");
                if (e) {
                    document.querySelector(".close-delivery-address-popup__IE").addEventListener("click", function () {
                        e.classList.add("hidden");
                    });
                    var t = document.querySelector(".entry-name "),
                        n = document.querySelector(".INN"),
                        o = document.querySelector(".KPP"),
                        c = document.querySelector(".RS"),
                        r = document.querySelector(".BIC"),
                        i = document.querySelector(".OKPO"),
                        d = document.querySelector(".KS"),
                        s = document.querySelector(".OKVED"),
                        a = document.querySelector(".OKATO"),
                        u = document.querySelector(".OGRN"),
                        l = document.querySelector(".entryAddress"),
                        m = document.querySelector(".director"),
                        v = document.querySelector(".eMail"),
                        f = document.querySelector(".phone"),
                        y = document.querySelector(".address-confirm-button_IE"),
                        p = document.querySelector("#checkbox-IE"),
                        L = function () {
                            p.checked && e.classList.remove("hidden");
                        };
                    p.addEventListener("change", L);
                    var S = [t, n, o, c, r, i, d, s, a, u, l, m, v, f];
                    window.addEventListener("keydown", function () {
                        S.some(function (e) {
                            return "" === e.value;
                        })
                            ? y.setAttribute("disabled", "disabled")
                            : y.removeAttribute("disabled");
                    });
                    y.addEventListener("click", function () {
                        e.classList.add("hidden");
                    });
                    var q = document.querySelectorAll(".address-of-delivery"),
                        h = document.querySelectorAll(".form_question_confirmed-form"),
                        b = document.createElement("button");
                    b.addEventListener("click", L),
                        y.addEventListener("click", function () {
                            "" === q[1].innerHTML
                                ? S.map(function (e) {
                                      var t = document.createElement("li");
                                      (t.className = "address-items"), (t.innerHTML = e.value), q[1].appendChild(t);
                                  })
                                : document.querySelectorAll(".address-items").forEach(function (e, t) {
                                      e.innerHTML = S[t].value;
                                  });
                            var e = document.querySelector(".edit-IE");
                            b.append(e), e.classList.remove("hidden"), h[1].append(b);
                        });
                }
            })()
        );
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector(".content__toggle")) {
                var e = document.querySelector(".content__toggle_button-left"),
                    t = document.querySelector(".content__toggle_button-right"),
                    n = document.querySelector(".content__toggle_block-01"),
                    o = document.querySelector(".content__toggle_block-02");
                e.addEventListener("click", function () {
                    n.classList.remove("hidden"), o.classList.add("hidden"), t.classList.remove("toggle--active"), e.classList.add("toggle--active");
                }),
                    t.addEventListener("click", function () {
                        o.classList.remove("hidden"), n.classList.add("hidden"), t.classList.add("toggle--active"), e.classList.remove("toggle--active");
                    });
            }
        });
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                var e = document.querySelector(".sidebar");
                if (e) {
                    var t = document.querySelectorAll(".sidebar__item_toggle"),
                        n = document.querySelectorAll(".sidebar__item_spoiler"),
                        o = document.querySelectorAll(".slider-icon-arrow");
                    t.forEach(function (e, t) {
                        n.forEach(function (e) {
                            (e.style.height = 0), (e.style.border = "none");
                        }),
                            e.addEventListener("click", function () {
                                "0px" === n[t].style.height
                                    ? 
                                    (
                                        (n[t].style.height = n[t].scrollHeight + 0 + "px"),
                                    //   (n[t].style.margin = "14px 0px 16px 0px"),
                                      e.classList.add("sidebar__item_toggle--active"),
                                      
                                      (o[t].style.transform = "rotate(270deg)"))
                                    : ((n[t].style.height = 0), e.classList.remove("sidebar__item_toggle--active"), (n[t].style.border = "none"), (o[t].style.transform = "rotate(360deg)"));
                            });
                    });
                    var c = document.querySelector("#product-lvl-02-content"),
                        r = document.querySelector("#product-lvl-02_section-main"),
                        i = function () {
                            window.matchMedia("(max-width: 1024px)").matches ? c.prepend(e) : r.prepend(e);
                        };
                    window.addEventListener("resize", i), window.addEventListener("DOMContentLoaded", i);
                    var d = document.querySelector(".product-lvl-02__mobile-menu_button"),
                        s = document.querySelector(".sidebar__button-close");
                    d.addEventListener("click", function () {
                        e.style.display = "block";
                    }),
                        s.addEventListener("click", function () {
                            e.style.display = "none";
                        });
                }
            })()
        );
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                var e = document.querySelector(".content__toggle__big-buttons"),
                    t = document.querySelector(".triple-toggle");
                if (e && !t) {
                    // страница КАТАЛОГ переключение в мобилке
                    let buttonSortСonformity = document.querySelector(".content__toggle_button-left");//сортировка по соответствию
                    let buttonSortAlphabet = document.querySelector(".content__toggle_button-right");//сортировка по алфавиту



                    if(document.querySelector(".application-typical__content")) {

                        if(window.innerWidth > 1024) {

                            buttonSortСonformity.addEventListener("click", function () {
                                buttonSortСonformity.classList.add("toggle--active"), buttonSortAlphabet.classList.remove("toggle--active");
                            }),

                            buttonSortAlphabet.addEventListener("click", function () {
                                buttonSortAlphabet.classList.add("toggle--active"), buttonSortСonformity.classList.remove("toggle--active");
                            });

                        } else {

                            buttonSortСonformity.addEventListener('click', () => {
                                buttonSortAlphabet.classList.add("toggle--active"), buttonSortСonformity.classList.remove("toggle--active");
                                });

                                buttonSortAlphabet.addEventListener('click', () => {
                                    buttonSortСonformity.classList.add("toggle--active"), buttonSortAlphabet.classList.remove("toggle--active");
                                });

                            }   
                    } else {

                        if(window.innerWidth > 1024) {

                            buttonSortСonformity.addEventListener("click", function () {
                                buttonSortСonformity.classList.add("toggle--active"), buttonSortAlphabet.classList.remove("toggle--active");
                                window.location.href=$(this).data('href');
                            }),

                            buttonSortAlphabet.addEventListener("click", function () {
                                buttonSortAlphabet.classList.add("toggle--active"), buttonSortСonformity.classList.remove("toggle--active");
                                window.location.href=$(this).data('href');
                            });

                        } else {

                            buttonSortСonformity.addEventListener('click', () => {
                                buttonSortAlphabet.classList.add("toggle--active"), buttonSortСonformity.classList.remove("toggle--active");
                                });

                                buttonSortAlphabet.addEventListener('click', () => {
                                    buttonSortСonformity.classList.add("toggle--active"), buttonSortAlphabet.classList.remove("toggle--active");
                                });

                            }
                    }

                }
            })()
        );
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector(".number-input")) {
                var e = document.querySelectorAll(".input-btn-minus"),
                    t = document.querySelectorAll(".number-input_main");
                document.querySelectorAll(".input-btn-plus").forEach(function (e, n) {
                    e.addEventListener("click", function () {
                        t[n].stepUp();
                    });
                }),
                    e.forEach(function (e, n) {
                        e.addEventListener("click", function () {
                            t[n].stepDown();
                        });
                    });
            }
        });
    },
    function (e, t, n) {
        /*"use strict";
        document.addEventListener(
            "DOMContentLoaded",
            void (
                document.querySelector("#map") &&
                ymaps.ready(function () {
                    var e = new ymaps.Map("map", { center: [55.751574, 37.573856], zoom: 15, controls: [] }, { searchControlProvider: "yandex#search" }),
                        t = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
                        n = new ymaps.Placemark(
                            e.getCenter(),
                            { hintContent: "Собственный значок метки с контентом", balloonContent: "А эта — новогодняя", iconContent: "" },
                            { iconLayout: "default#imageWithContent", iconImageHref: "/local/assets/img/map-mark.png", iconImageSize: [31, 50], iconImageOffset: [-24, -24], iconContentOffset: [15, 15], iconContentLayout: t }
                        );
                    e.geoObjects.add(n);
                })
            )
        );*/
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                var e = document.querySelector(".popup-delivery-address");
                if (e) {
                    document.querySelector(".close-delivery-address-popup").addEventListener("click", function () {
                        e.classList.add("hidden");
                    });
                    var t = document.querySelector("#country"),
                        n = document.querySelector("#region"),
                        o = document.querySelector("#district"),
                        c = document.querySelector("#city"),
                        r = document.querySelector("#street"),
                        i = document.querySelector("#house"),
                        d = document.querySelector("#flat"),
                        s = document.querySelector(".address-confirm-button"),
                        a = document.querySelector(".delivery-address__button-back"),
                        u = document.querySelector(".form__show-on-map"),
                        l = document.querySelector(".map-block");
                    document.querySelector(".map-block__close-map").addEventListener("click", function () {
                        l.style.display = "none";
                    }),
                        u.addEventListener("click", function () {
                            l.style.display = "block";
                            $('#city').trigger('change');
                        });
                    var m = document.querySelector("#checkbox-courier"),
                        v = function () {
                            m.checked && e.classList.remove("hidden");
                        };
                    m.addEventListener("change", v);
                    var f = function () {
                        e.classList.add("hidden");
                    };
                    //a.addEventListener("click", f);
                    var y = [t, n, o, c, r, i, d];
                    window.addEventListener("keydown", function () {
                        y.some(function (e) {
                            return "" === e.value;
                        })
                            ? s.setAttribute("disabled", "disabled")
                            : s.removeAttribute("disabled");
                    }),
                        s.addEventListener("click", f);
                    var p = document.querySelectorAll(".address-of-delivery"),
                        L = document.querySelectorAll(".form_question_confirmed-form"),
                        S = document.createElement("button");
                    S.addEventListener("click", v),
                        s.addEventListener("click", function () {
                            "" === p[2].innerHTML
                                ? y.map(function (e) {
                                      var t = document.createElement("li");
                                      (t.className = "address-items"), (t.innerHTML = e.value), p[2].appendChild(t);
                                  })
                                : document.querySelectorAll(".address-items").forEach(function (e, t) {
                                      e.innerHTML = y[t].value;
                                  });
                            var e = document.querySelector("#icon-pencil");
                            S.append(e), e.classList.remove("hidden"), L[2].append(S);
                        });
                }
            })()
        );
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                if (document.querySelector(".main-connect__content")) {
                    var e = document.querySelector("#nameInput"),
                        t = document.querySelector("#mailInput"),
                        n = document.querySelector("#phoneInput"),
                        o = document.querySelector(".main-connect__confirm-button"),
                        c = [e, t, n];
                    window.addEventListener("keydown", function () {
                        c.some(function (e) {
                            return "" === e.value;
                        })
                            ? o.setAttribute("disabled", "disabled")
                            : o.removeAttribute("disabled");
                    });
                }
            })()
        );
    },
    function (e, t) {
        // document.addEventListener(
        //     "DOMContentLoaded",
        //     void (
        //         document.querySelector(".main-banner") &&
        //         document.querySelector(".main-banner__button_scroll").addEventListener("click", function (e) {
        //             e.preventDefault();
        //             var t = document.getElementById("target").getBoundingClientRect().top - 60;
        //             window.scrollBy({ top: t, behavior: "smooth" });
        //         })
        //     )
        // );
    },
    function (e, t, n) {
        "use strict";
        
        // document.addEventListener(
        //     "DOMContentLoaded",
        //     (function () {
        //         if (document.querySelector(".main-banner")) {
        //             var e = document.querySelector(".main-banner__background"),
        //                 t = document.querySelector(".main-banner__button");
        //             (t.onmouseover = function () {
        //                 e.style.transform = "scale(1.1)";
        //             }),
        //                 (t.onmouseout = function () {
        //                     e.style.transform = "scale(1)";
        //                 });
        //         }
        //     })()
        // );
    },

    
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            
            "DOMContentLoaded",
            (function () {
                if (document.querySelector(".main-products")) {

                    let mainArc = document.querySelector("#main-arc");
                    let mainLotus = document.querySelector("#main-lotus");
                    let mainTrans = document.querySelector("#main-trans");
                    let mainDoro = document.querySelector("#main-doro");

                    if (mainArc) {
                        let popupMainArc = mainArc.querySelector('.main-products__popup');
                        mainArc.addEventListener('mouseenter', () => {
                            popupMainArc.classList.remove('hidden');
                        });

                        mainArc.addEventListener('mouseleave', () => {
                            popupMainArc.classList.add('hidden');
                        });
                    }

                    if (mainLotus) {
                        let popupMainLotus = mainLotus.querySelector('.main-products__popup');
                        mainLotus.addEventListener('mouseenter', () => {
                            popupMainLotus.classList.remove('hidden');
                        });

                        popupMainLotus.addEventListener('mouseleave', () => {
                            popupMainLotus.classList.add('hidden');
                        });
                    }

                    if (mainTrans) {
                        let popupMainTrans = mainTrans.querySelector('.main-products__popup');
                        mainTrans.addEventListener('mouseenter', () => {
                            popupMainTrans.classList.remove('hidden');
                        });

                        popupMainTrans.addEventListener('mouseleave', () => {
                            popupMainTrans.classList.add('hidden');
                        });
                    }

                    if (mainDoro) {
                        let popupMainDoro = mainDoro.querySelector('.main-products__popup');
                        mainDoro.addEventListener('mouseenter', () => {
                            popupMainDoro.classList.remove('hidden');
                        });

                        popupMainDoro.addEventListener('mouseleave', () => {
                            popupMainDoro.classList.add('hidden');
                        });
                    }


                    /*
                    var e = document.querySelector("#main-arc"),
                        t = document.querySelector("#main-lotus"),
                        n = document.querySelector("#main-trans"),
                        o = document.querySelector("#main-doro"),
                        c = document.querySelector("#main-arc-hover"),
                        r = document.querySelector("#main-lotus-hover"),
                        i = document.querySelector("#main-trans-hover"),
                        d = document.querySelector("#main-doro-hover");
                    (e.onmouseover = function () {
                        c.style.opacity = "1";
                    }),
                        (e.onmouseout = function () {
                            c.style.opacity = "0";
                        }),
                        (t.onmouseover = function () {
                            r.style.opacity = "1";
                        }),
                        (t.onmouseout = function () {
                            r.style.opacity = "0";
                        }),
                        (n.onmouseover = function () {
                            i.style.opacity = "1";
                        }),
                        (n.onmouseout = function () {
                            i.style.opacity = "0";
                        }),
                        (o.onmouseover = function () {
                            d.style.opacity = "1";
                        }),
                        (o.onmouseout = function () {
                            d.style.opacity = "0";
                        });

                        */
                }
            })()
            
        );
        
    },

    
    function (e, t, n) {
        "use strict";
        var o, c;
        (o = document.querySelectorAll(".item__desc_hover")),
            (c = document.querySelectorAll(".main-events__content_img")),
            o.forEach(function (e, t) {
                (e.onmouseover = function () {
                    c[t].style.transform = "scale(1.1)";
                }),
                    (e.onmouseout = function () {
                        c[t].style.transform = "scale(1)";
                    });
            });
    },
    
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                if (document.querySelector(".main-contacts")) {
                    var e = document.querySelector(".russia1"),//
                        t = document.querySelector(".ukraine1"),
                        n = document.querySelector(".kazakhstan-asia"),
                        o = document.querySelector("#map-card-01"),
                        c = document.querySelector("#map-card-02"),
                        r = document.querySelector("#map-card-03");
                    let mainContactsItemRussia = document.querySelector('.main-contacts__item.russia');
                    let mainContactsItemKazakhstan = document.querySelector('.main-contacts__item.kazakhstan');
                    let mainContactsItemUkraine = document.querySelector('.main-contacts__item.ukraine');
                    
                    // определяет ширину экрана
                    if(window.innerWidth > 1024) {
                         // при клике на карту
                        e.addEventListener('click', () => {
                            if(document.querySelector('.contacts-page')) {
                                window.scrollTo(0, 800);
                            } else{
                                window.scrollTo(0, 4500);
                            }
                            o.classList.add('map-card-active');
                            e.classList.add("map-active");

                            // удаляет активный класс с карты
                            t.classList.remove("map-active");
                            n.classList.remove("map-active");

                            // удаляет активный класс с карточек 
                            c.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');
                        });
                        t.addEventListener('click', () => {
                            if(document.querySelector('.contacts-page')) {
                                window.scrollTo(0, 800);
                            } else{
                                window.scrollTo(0, 4500);
                            }
                            c.classList.add('map-card-active');
                            t.classList.add("map-active");

                            // удаляет активный класс с карты
                            e.classList.remove("map-active");
                            n.classList.remove("map-active");
                            // удаляет активный класс с карточек 
                            o.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');
                        });
                        n.addEventListener('click', () => {
                            if(document.querySelector('.contacts-page')) {
                                window.scrollTo(0, 800);
                            } else{
                                window.scrollTo(0, 4500);
                            }
                            r.classList.add('map-card-active');
                            n.classList.add("map-active");

                            // удаляет активный класс с карты
                            e.classList.remove("map-active");
                            t.classList.remove("map-active");
                            // удаляет активный класс с карточек
                            o.classList.remove('map-card-active');
                            c.classList.remove('map-card-active');
                        });

                        // при клике на карточки
                        o.addEventListener('click', () => {
                            o.classList.add('map-card-active');
                            e.classList.add("map-active");

                            // удаляет активный класс с карты
                            t.classList.remove("map-active");
                            n.classList.remove("map-active");

                            // удаляет активный класс с карточек 
                            c.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');

                        });

                        c.addEventListener('click', () => {
                            c.classList.add('map-card-active');
                            t.classList.add("map-active");

                            // удаляет активный класс с карты
                            e.classList.remove("map-active");
                            n.classList.remove("map-active");
                            // удаляет активный класс с карточек 
                            o.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');

                        });

                        r.addEventListener('click', () => {
                            r.classList.add('map-card-active');
                            n.classList.add("map-active");

                            // удаляет активный класс с карты
                            e.classList.remove("map-active");
                            t.classList.remove("map-active");
                            // удаляет активный класс с карточек
                            o.classList.remove('map-card-active');
                            c.classList.remove('map-card-active');

                        });
                    } else {
                        o.classList.remove('map-card-active');
                        c.classList.remove('map-card-active');
                        r.classList.remove('map-card-active');

                        // при клике на карточки
                        o.addEventListener('click', () => {
                            o.classList.add('map-card-active');
                            e.classList.remove("map-active");

                            // удаляет активный класс с карты
                            t.classList.remove("map-active");
                            n.classList.remove("map-active");

                            // удаляет активный класс с карточек 
                            c.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');

                        });

                        c.addEventListener('click', () => {
                            c.classList.add('map-card-active');
                            t.classList.remove("map-active");

                            // удаляет активный класс с карты
                            e.classList.remove("map-active");
                            n.classList.remove("map-active");
                            // удаляет активный класс с карточек 
                            o.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');

                        });

                        r.addEventListener('click', () => {
                            r.classList.add('map-card-active');
                            n.classList.remove("map-active");

                            // удаляет активный класс с карты
                            e.classList.remove("map-active");
                            t.classList.remove("map-active");
                            // удаляет активный класс с карточек
                            o.classList.remove('map-card-active');
                            c.classList.remove('map-card-active');

                        });
                    }

                    window.addEventListener('resize', () => {
                        // console.log(window.innerWidth);
                        // определяет ширину экрана
                        if(window.innerWidth > 1024) {
                            
                            // при клике на карту
                            e.addEventListener('click', () => {
                                if(document.querySelector('.contacts-page')) {
                                    window.scrollTo(0, 800);
                                } else{
                                    window.scrollTo(0, 4500);
                                }
                                o.classList.add('map-card-active');
                                e.classList.add("map-active");

                                // удаляет активный класс с карты
                                t.classList.remove("map-active");
                                n.classList.remove("map-active");

                                // удаляет активный класс с карточек 
                                c.classList.remove('map-card-active');
                                r.classList.remove('map-card-active');
                            });
                            t.addEventListener('click', () => {
                                if(document.querySelector('.contacts-page')) {
                                    window.scrollTo(0, 800);
                                } else{
                                    window.scrollTo(0, 4500);
                                }
                                c.classList.add('map-card-active');
                                t.classList.add("map-active");

                                // удаляет активный класс с карты
                                e.classList.remove("map-active");
                                n.classList.remove("map-active");
                                // удаляет активный класс с карточек 
                                o.classList.remove('map-card-active');
                                r.classList.remove('map-card-active');
                            });
                            n.addEventListener('click', () => {
                                if(document.querySelector('.contacts-page')) {
                                    window.scrollTo(0, 800);
                                } else{
                                    window.scrollTo(0, 4500);
                                }
                                r.classList.add('map-card-active');
                                n.classList.add("map-active");

                                // удаляет активный класс с карты
                                e.classList.remove("map-active");
                                t.classList.remove("map-active");
                                // удаляет активный класс с карточек
                                o.classList.remove('map-card-active');
                                c.classList.remove('map-card-active');
                            });

                            // при клике на карточки
                            o.addEventListener('click', () => {
                                o.classList.add('map-card-active');
                                e.classList.add("map-active");

                                // удаляет активный класс с карты
                                t.classList.remove("map-active");
                                n.classList.remove("map-active");

                                // удаляет активный класс с карточек 
                                c.classList.remove('map-card-active');
                                r.classList.remove('map-card-active');

                            });

                            c.addEventListener('click', () => {
                                c.classList.add('map-card-active');
                                t.classList.add("map-active");

                                // удаляет активный класс с карты
                                e.classList.remove("map-active");
                                n.classList.remove("map-active");
                                // удаляет активный класс с карточек 
                                o.classList.remove('map-card-active');
                                r.classList.remove('map-card-active');

                            });

                            r.addEventListener('click', () => {
                                r.classList.add('map-card-active');
                                n.classList.add("map-active");

                                // удаляет активный класс с карты
                                e.classList.remove("map-active");
                                t.classList.remove("map-active");
                                // удаляет активный класс с карточек
                                o.classList.remove('map-card-active');
                                c.classList.remove('map-card-active');

                            });
                        } else {
                            o.classList.remove('map-card-active');
                            c.classList.remove('map-card-active');
                            r.classList.remove('map-card-active');

                            // при клике на карточки
                            o.addEventListener('click', () => {
                                o.classList.add('map-card-active');
                                e.classList.remove("map-active");

                                // удаляет активный класс с карты
                                t.classList.remove("map-active");
                                n.classList.remove("map-active");

                                // удаляет активный класс с карточек 
                                c.classList.remove('map-card-active');
                                r.classList.remove('map-card-active');

                            });

                            c.addEventListener('click', () => {
                                c.classList.add('map-card-active');
                                t.classList.remove("map-active");

                                // удаляет активный класс с карты
                                e.classList.remove("map-active");
                                n.classList.remove("map-active");
                                // удаляет активный класс с карточек 
                                o.classList.remove('map-card-active');
                                r.classList.remove('map-card-active');

                            });

                            r.addEventListener('click', () => {
                                r.classList.add('map-card-active');
                                n.classList.remove("map-active");

                                // удаляет активный класс с карты
                                e.classList.remove("map-active");
                                t.classList.remove("map-active");
                                // удаляет активный класс с карточек
                                o.classList.remove('map-card-active');
                                c.classList.remove('map-card-active');

                            });
                        }
                    });
                    /*
                    ФУНКЦИОНАЛ ЧТОБЫ РАБОТАЛО ПРИ НАВЕДЕНИИ
                    // карта россиия
                    (e.onmouseover = function () {
                        e.classList.add("map-active");
                        o.classList.add('map-card-active');
                        console.log(o);
                    }),
                    (e.onmouseout = function () {
                        e.classList.remove("map-active");
                        o.classList.remove('map-card-active');
                    }),
                    // карточка россия
                    (o.onmouseover = function () {
                        e.classList.add("map-active");
                        // mainContactsItemRussia.classList.add('active');
                    }),
                    (o.onmouseout = function () {
                        e.classList.remove("map-active");
                        // mainContactsItemRussia.classList.remove('active');
                    }),
                    // карта украина
                    (t.onmouseover = function () {
                        t.classList.add("map-active"), c.classList.add("map-card-active");
                        
                    }),

                    (t.onmouseout = function () {
                        t.classList.remove("map-active"), c.classList.remove("map-card-active");
                    }),
                    // карточка украины
                    (c.onmouseover = function () {
                        t.classList.add("map-active");
                        // mainContactsItemUkraine.classList.add('active');
                    }),
                    (c.onmouseout = function () {
                        t.classList.remove("map-active");
                        // mainContactsItemUkraine.classList.remove('active');
                    }),
                    // карта казахстан
                    (n.onmouseover = function () {
                        n.classList.add("map-active"), r.classList.add("map-card-active");
                    }),
                    (n.onmouseout = function () {
                        n.classList.remove("map-active"), r.classList.remove("map-card-active");
                    }),
                    // карточка казахстан
                    (r.onmouseover = function () {
                        n.classList.add("map-active");
                        // mainContactsItemKazakhstan.classList.add('active');
                    }),
                    (r.onmouseout = function () {
                        n.classList.remove("map-active");
                        // mainContactsItemKazakhstan.classList.remove('active');
                    });
                    */


                }
            })()
        );
    },
    function (e, t, n) { 
        "use strict";
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector(".product-lvl-02-page")) {
                var e = document.querySelector(".lvl2__tile-button"),
                    t = document.querySelector(".lvl2__list-button"),
                    n = document.querySelectorAll(".items__properties"),
                    o = document.querySelector(".product__main_items");
                let widthWindow = document.querySelector('.product__main_items');//ширина экрана
                let itemsPropertiesItem = document.querySelectorAll('.items__properties-item');//блок с картинкой
                let popupItemsPropertiesItem = document.querySelectorAll('.items__properties-item-popup');

                // при наведении показывает вложенный popup c картинкой
                itemsPropertiesItem.forEach(elem => {
                    elem.addEventListener('mouseover', () => {
                        elem.querySelector('.items__properties-item-popup').style.opacity = '1';
                        elem.querySelector('.items__properties-item-popup').style.pointerEvents = 'auto';
                    });
                });

                itemsPropertiesItem.forEach(elem => {
                    elem.addEventListener('mouseout', () => {
                        elem.querySelector('.items__properties-item-popup').style.opacity = '0';
                        elem.querySelector('.items__properties-item-popup').style.pointerEvents = 'none';
                    });
                });



                // при убирании курсора с popup, popup исчезает
                // popupItemsPropertiesItem.forEach(elem => {
                //     elem.addEventListener('mouseout', () => {
                //         elem.style.opacity = '0';
                //         elem.style.pointerEvents = 'none';
                //     });
                // });

                //проверяет ширину экрна
                if (window.innerWidth < 1024) {
                    widthWindow.classList.remove('.product__main_items--list');
                }
                
                //отслеживает ширину экрана
                window.addEventListener('resize', () => {
                    if (window.innerWidth < 1024) {
                        //console.log(widthWindow.dataset);
                        widthWindow.classList.remove('.product__main_items--list');
                    }
                })

                e.addEventListener("click", function () {
                    t.classList.remove("little-button_active"),
                        e.classList.add("little-button_active"),
                        o.classList.remove("product__main_items--list"),
                        n.forEach(function (e) {
                            e.classList.add("hidden");
                        });
                }),

                    t.addEventListener("click", function () {
                        t.classList.add("little-button_active"),
                            e.classList.remove("little-button_active"),
                            o.classList.add("product__main_items--list"),
                            n.forEach(function (e) {
                                e.classList.remove("hidden");
                            });
                    });
            }
        });
    },
    function (e, t, n) {
        "use strict";
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                if (document.querySelector(".triple-toggle")) {
                    var e = document.querySelector(".content__toggle_button-left"),
                        t = document.querySelector(".content__toggle_button-center"),
                        n = document.querySelector(".content__toggle_button-right"),
                        o = document.querySelector(".toggled-block-01"),
                        c = document.querySelector(".toggled-block-02"),
                        r = document.querySelector(".toggled-block-03");
                    e.addEventListener("click", function () {
                        e.classList.add("toggle--active"), n.classList.remove("toggle--active"), t.classList.remove("toggle--active"), o.classList.remove("hidden"), c.classList.add("hidden"), r.classList.add("hidden");
                    }),
                        t.addEventListener("click", function () {
                            e.classList.remove("toggle--active"), n.classList.remove("toggle--active"), t.classList.add("toggle--active"), o.classList.add("hidden"), c.classList.remove("hidden"), r.classList.add("hidden");
                        }),
                        n.addEventListener("click", function () {
                            n.classList.add("toggle--active"), e.classList.remove("toggle--active"), t.classList.remove("toggle--active"), o.classList.add("hidden"), c.classList.add("hidden"), r.classList.remove("hidden");
                        });
                }
            })()
        );
    },
    function (e, t, n) {
        var o = n(22),
            c = n(23);
        "string" == typeof (c = c.__esModule ? c.default : c) && (c = [[e.i, c, ""]]);
        var r = { insert: "head", singleton: !1 };
        o(c, r);
        e.exports = c.locals || {};
    },
    ,
    function (e, t, n) {},
    function (e, t, n) {
        "use strict";
        n.r(t);
        n(1), n(2), n(3), n(4), n(5), n(6);
        var o = n(0);
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector(".videos-slider"))
                new o.a(".videos-slider", {
                    slidesPerView: "4",
                    spaceBetween: 20,
                    a11y: !0,
                    keyboardControl: !0,
                    grabCursor: !0,
                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                    breakpoints: { 1024: { slidesPerView: 4 }, 320: { slidesPerView: "auto" } },
                });
        }),
            document.addEventListener("DOMContentLoaded", function () {
                if (document.querySelector(".achievements-slider"))
                    new o.a(".achievements-slider", {
                        a11y: !0,
                        keyboardControl: !0,
                        grabCursor: !0,
                        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                        breakpoints: { 992: { slidesPerView: 3 }, 320: { slidesPerView: 1 } },
                    });
            });
        n(7);
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector(".brochure-slider"))
                new o.a(".brochure-slider", {
                    slidesPerView: 5,
                    spaceBetween: 43,
                    observer: !0,
                    a11y: !0,
                    keyboardControl: !0,
                    grabCursor: true,
                    breakpoints: { 1024: { slidesPerView: 5, spaceBetween: 30 }, 320: { slidesPerView: "auto", spaceBetween: 30 } },
                });
        });
        n(8), n(9), n(10), n(11), n(12), n(13);

        document.addEventListener(
            "DOMContentLoaded",

            (function () {
                if (document.querySelector(".main-banner")) new o.a(".main-banner-slider", 
                    { pagination: { el: ".swiper-pagination", 
                    clickable: !0 } 
                });

                if (document.querySelector(".main-banner-slider")) {

                    let mainBannerSlider = document.querySelector(".main-banner-slider");//баннер слайдер
                    let mainBannerSliderSlide = mainBannerSlider.querySelectorAll('.swiper-slide');//слайды
                    let mainBannerSliderPagination = mainBannerSlider.querySelector('.swiper-pagination');//пагинация

                    if(mainBannerSliderSlide.length == 1) {
                        mainBannerSliderPagination.style.display = 'none';
                    }

                };
            })()

            

        );

        n(14), n(15), n(16);
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                var e = document.querySelector(".main-application-swiper"),
                    t = document.querySelector(".application-index-page");
                if (e && !t) {
                    var n,
                        c = window.matchMedia("(min-width:1024px)"),
                        r = function () {
                            if (!0 !== c.matches) return !1 === c.matches ? i() : void 0;
                            void 0 !== n && n.destroy(!0, !0);
                        },
                        i = function () {
                            n = new o.a(".main-application-swiper", { 
                                slidesPerView: "auto", 
                                a11y: !0, 
                                keyboardControl: !0, 
                                grabCursor: true,

                                scrollbar: {
                                    el: ".swiper-scrollbar",
                                    // hide: true,
                                },
                            
                            });
                        };

                    c.addListener(r), r();
                }
            })()
        ),

        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                if (document.querySelector(".main-service-swiper")) {
                    var e,
                        t = window.matchMedia("(min-width:1024px)"),
                        n = function () {
                            if (!0 !== t.matches) return !1 === t.matches ? c() : void 0;
                            void 0 !== e && e.destroy(!0, !0);
                        },
                        c = function () {
                            e = new o.a(".main-service-swiper", { slidesPerView: "auto", a11y: !0, keyboardControl: !0, grabCursor: !0 });
                        };
                    t.addListener(n), n();
                }
            })()
        );

        n(17), n(18);
        document.addEventListener(
            "DOMContentLoaded",
            (function () {
                if (document.querySelector(".main-contacts-swiper")) {
                    var e,
                        t = window.matchMedia("(min-width:1024px)"),
                        n = function () {
                            if (!0 !== t.matches) return !1 === t.matches ? c() : void 0;
                            void 0 !== e && e.destroy(!0, !0);
                        },
                        c = function () {
                            e = new o.a(".main-contacts-swiper", { slidesPerView: "auto", a11y: !0, keyboardControl: !0, grabCursor: true, pagination: { el: ".swiper-pagination", clickable: !0 } });
                        };
                    t.addListener(n), n();
                }
            })()
        ),
            document.addEventListener(
                "DOMContentLoaded",
                (function () {
                    if (document.querySelector(".event-page"))
                        new o.a(".event-page_swiper", {
                            slidesPerView: 1,
                            spaceBetween: 50,
                            a11y: !0,
                            keyboardControl: !0,
                            grabCursor: !0,
                            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                            breakpoints: { 1024: { slidesPerView: 3 }, 320: { slidesPerView: 1 } },
                        });
                })()
            );
        n(19), n(20);
        document.addEventListener("DOMContentLoaded", function () {
            if (document.querySelector(".product-slider"))
                new o.a(".product-slider", {
                    slidesPerView: "3",
                    spaceBetween: 20,
                    a11y: !0,
                    keyboardControl: !0,
                    grabCursor: !0,
                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                    breakpoints: { 1024: { slidesPerView: 3 }, 320: { slidesPerView: "auto" } },
                });
        });
        n(21);
    },
]);
