(function($){
    $(document).ready(function(){
        /*
      $(".ctpopup-xtracer-container").click(function(){
        $(this).removeClass("active");
      });

      // Verifique se o popup jÃ¡ foi mostrado hoje
      var lastPopupDate = localStorage.getItem('lastPopupDate');
      var today = new Date().toLocaleDateString();

      if (lastPopupDate !== today) {
          // Mostrar o popup

          // Seu cÃ³digo para mostrar o popup aqui

          // Adicione a classe 'active' ao elemento
          $('.ctpopup-xtracer-container').addClass('active');

          // Atualize a data do Ãºltimo popup mostrado para hoje
          localStorage.setItem('lastPopupDate', today);
      }
        */
      var currentURL = window.location.href;

      if( currentURL.includes("https://www.xtracer.com.br/loja/contato") ){
        var boards = document.querySelectorAll('.board');
            boards.forEach(function(board) {
            var formElement = board.querySelector('form');
            
            if (formElement) {
                board.style.display = 'block';
            } else {
                board.style.display = 'none';
            }
        });
      

        $('#nome_contato').attr('placeholder', 'Nome Completo:');
        $('#empresa').attr('placeholder', 'Empresa:');
        $('#email_contato').attr('placeholder', 'E-mail*:');
        $('#telefone_contato').attr('placeholder', 'Telefone*:');
        $('#assunto').attr('placeholder', 'Assunto:');
        $('#mensagem_contato').attr('placeholder', 'Mensagem:');

        $(".page-content .layout-spacing-st-1").prepend('<div class="custom-page-container-st-1"> <div class="col-12 custom-page-bg-st-1"> <div class="col-12"><img src="https://images.tcdn.com.br/files/1227304/themes/170/img/custom-page/img-titulo-1.PNG?291.5684757773395" height="98" width="920" class="img-custom-page-1"></div><div class="col-12 mt-100 mt-mob-30 custom-page-list-st-1 d-flex justify-content-between"> <ul> <li> <p>Com sede em S&atilde;o Paulo, a XT Racer &eacute; uma empresa que atua nos segmentos de cadeiras e m&oacute;veis para Gaming e Office. Acreditamos com veem&ecirc;ncia que pagar um alto valor n&atilde;o &eacute; garantia de que se estar&aacute; adquirindo um item de qualidade. E, guiados por essa premissa, buscamos oferecer produtos com qualidade, e que, ao mesmo tempo, apresentem um custo justo. Ou seja, a jun&ccedil;&atilde;o perfeita de custo-benef&iacute;cio. Primando pela ergonomia e durabilidade do que produzimos, apresentamos ao mercado nacional uma linha de produtos elaborados com materiais premium, altamente resistentes e com revestimentos que proporcionam extremo conforto. A XT Racer est&aacute; sempre em busca de produtos inovadores, com design diferenciado e de alt&iacute;ssima qualidade. Os modelos, al&eacute;m de proporcionar conforto, contam com in&uacute;meros ajustes dentre os quais, podemos elencar: recl&iacute;nio do encosto,</p></li></ul> <ul> <li> <p>regulagem de alturas do assento, regulagem das almofadas e dos bra&ccedil;os, base refor&ccedil;ada com rodas resistentes e silenciosas. Tendo em mente que o primordial &eacute; o bem estar de nossos clientes, buscamos essencialmente, o alinhamento exato do corpo e da mente, tornando assim, o dia a dia mais prazeroso, produtivo e com muito mais conforto ao longo das extensas horas no computador a trabalho ou em momentos de lazer. Convidamos todos a navegar por nossa p&aacute;gina, interagir conosco para obter as melhores informa&ccedil;&otilde;es sobre os produtos, a fim de que se adquira exatamente o que est&aacute; buscando, para ent&atilde;o, poder usufruir desta experi&ecirc;ncia &uacute;nica, que &eacute; fazer parte do mundo XT Racer. Nossa equipe &eacute; altamente treinada e est&aacute; preparada para atender-lhes em diversos canais. Caso exista qualquer d&uacute;vida, n&atilde;o hesite em nos chamar.</p></li></ul> </div><div class="col-12 mt-100 mt-mob-30"> <div class="slick custom-page-slick-st-1 custom-page-arrows-st-1"> <div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/x1.png?692.6368984662362" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/1.jpg?716.6454107075721" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/3.jpg?161.34869148479248" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/4.jpg?865.0818256598519" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/5.jpg?492.53404262301837" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/6.jpg?432.32500210130974" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/7.jpg?487.7778813169299" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/8.jpg?749.6185776691083" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/9.jpg?976.01834795818" width="100%" height="auto"></div></div><div> <div class="custom-page-carousel-img-1"><img src="https://images.tcdn.com.br/files/1227304/themes/184/img/carousel/fale-conosco/10.jpg?69.08326000817245" width="100%" height="auto"></div></div></div></div><div class="col-12 mt-100 mt-mob-30 custom-page-list-st-2"> <ul> <li> <h4>CONHE&Ccedil;A NOSSA LOJA F&Iacute;SICA</h4> </li><li class="mt-20 mt-mob-20"> <h5>Avenida Washington Lu&iacute;s, 946 - Santo Amaro, S&atilde;o Paulo - SP</h5> </li><li class="mt-20 mt-mob-20"> <h3>Hor&aacute;rio de atendimento da loja f&iacute;sica</h3> </li><li class="mt-20 mt-mob-20"> <p>Segunda &agrave; Sexta-feira - 09h &agrave;s 18h</p></li><li> <p>(exceto feriados)</p></li><li> <p>S&aacute;bado - 10h &agrave;s 16h</p></li><li class="mt-20 mt-mob-20"> <h3>Telefone / Whatsapp</h3> </li><li class="mt-20 mt-mob-20"><a href="tel:01155240068">(11) 5524-0068 (Comercial)</a></li><li class="mt-20 mt-mob-20"><a href="tel:01155242882">(11) 5524-2882 (SAC)</a></li></ul> </div></div></div><style type="text/css"> .page-contact .page-content .block span.block, .msg-obriga.block{color: #fff !important;}.page-contact .page-content .block span.block{display: none!important;}.page-content{padding-top: 0px !important;}.container2{padding: 0px !important;}.layout-spacing-st-1{background: #000 !important;}.container3 form{padding-bottom: 50px !important;}.page-contact .blocoSucesso{font-size: 17px!important;max-width: 1200px!important;margin: 0 auto!important;}</style>');

      }

      if( $(".custom-page-slick-st-1").length ){
        $(".custom-page-slick-st-1").slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          fade: false,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            }
          }
        ]
        });
      }

      if( $(window).width() > 768 ){
        $(window).load(function(){
          var imgHeight = $(".container-banner-home-2 img").height();
          $(".container-banner-home-2-1 img").css({"height":imgHeight});
        });
      }

      $(".submenu-toggle-category").click(function(){
        if($(this).closest(".submenu-toggle").hasClass("active")){
          $(this).closest(".submenu-toggle").removeClass("active");
        }else{
          $(this).closest(".submenu-toggle").addClass("active");
        }
      });
      
      if ($(window).width() > 768) {
        $(".dropdown-menu-container > ul").each(function () {
          var $ul = $(this);
          var $liCount = $ul.find("> li").length;

          if ($liCount > 8) {
            var columnCount = Math.ceil($liCount / 8);
            $ul.css("column-count", columnCount);
          }
        });
      }

      var getCurrentTotalSlides = 0;      

      if($(".slick-fotos-produtos-pointer.zoom").length){
        $(".slick-fotos-produtos-pointer.zoom").zoom();
      }

      $(window).load(function(){
        var count = 1;
        $(".fotos-produtos-row-2 .slick-dots li").each(function(){
          $(this).attr("data-pointer",count);
          count++;
        });
        getCurrentTotalSlides = count;
      });

      var checkCarousel = 1;

      $(".fotos-produtos-col-list-img").on("click", function() {
        $(".fotos-produtos-col-list-img").removeClass("active");
        
        $(this).addClass("active");
        
        var dataListValue = $(this).data("list");
        
        $(".fotos-produtos-row-2 .slick-dots li[data-pointer='" + dataListValue + "']").click();
      });

      $('.slick-fotos-produtos-1').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(".fotos-produtos-col-list-img").removeClass("active");

        var dataPointerValue = $(".fotos-produtos-row-2 .slick-dots li.slick-active").data("pointer");

        $(".fotos-produtos-col-list-img[data-list='" + dataPointerValue + "']").addClass("active");

        var currentScrollTop = $(".fotos-produtos-col-list").scrollTop();           

        if(dataPointerValue > checkCarousel){
          var scrollAmount = 125;
          var targetScrollTop = currentScrollTop + scrollAmount;  
        }else{
          var scrollAmount = -125;
          var targetScrollTop = currentScrollTop + scrollAmount;
        }

        $(".fotos-produtos-col-list").animate({ scrollTop: targetScrollTop }, 300);

        checkCarousel = dataPointerValue;

      });

      $(".fotos-produtos-col-button-1").click(function(){
        var btnFotos = 0;
        if(checkCarousel > 1){
          btnFotos = checkCarousel - 1;
          $(".fotos-produtos-col-list-img[data-list='" + btnFotos + "']").click();
        }
      });

      $(".fotos-produtos-col-button-2").click(function(){
        var btnFotos = checkCarousel + 1;
        if(btnFotos < getCurrentTotalSlides){
          $(".fotos-produtos-col-list-img[data-list='" + btnFotos + "']").click();
        }
      });

      if( $(".slick-fotos-produtos-1").length ){
          $(".slick-fotos-produtos-1").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            dots: true,
            centerMode: false,
            autoplay: false,
            speed: 1000,
          });
      }

      $(".button-open-mobile-menu, .close-mobile-menu").click(function(){
        if( $(".mobile-menu-container").hasClass("active") ){
          $(".mobile-menu-container").removeClass("active");    
        }else{
          $(".mobile-menu-container").addClass("active"); 
        }
      });

      $(".arrow-left-hcp").click(function(){
        $(".slick-carousel-produtos-1").children(".slick-prev.slick-arrow").click();
      });

      $(".arrow-right-hcp").click(function(){
        $(".slick-carousel-produtos-1").children(".slick-next.slick-arrow").click();
      });

      /*
      if ($(window).width() > 768) {
        resetHeighAllCarousel();
      }
      
      
      function resetHeighAllCarousel(){
        var maxHeightContainer1 = 0;
        $(".carousel-produto-content").each(function(){
          if( $(this).height() > maxHeightContainer1 ){
            maxHeightContainer1 = $(this).height();
          }
        });

        $(".carousel-produto-content").each(function(){
            $(this).css({"height":maxHeightContainer1});
        });
      }
      */

      
        $(".slick-mobile-st-1").slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          fade: false,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,        
        });
           

      $('.slick-carousel-produtos-1').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      if ($(window).scrollTop() >= 50){
        $('.desktop-header').addClass('scrollHeader');
      }else{
        $('.desktop-header').removeClass('scrollHeader');
      } 

      var lastScrollTop = 0;
      var header = $('.desktop-header');
      
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        if (scroll > lastScrollTop && scroll >= 50) {
          header.addClass('scrollHeader');
        } else {
          header.removeClass('scrollHeader');
        }
        
        lastScrollTop = scroll;
      });

      // Set the date we're counting down to
      var countDownDate = new Date("Dec 5, 2023 15:37:25").getTime();

      // Update the count down every 1 second
      var x = setInterval(function() {

          // Get today's date and time
          var now = new Date().getTime();

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the .countdown elements
          $("#daysCounter").text(days + "d");
          $("#hoursCounter").text(hours + "h");
          $("#minutesCounter").text(minutes + "m");
          $("#secondsCounter").text(seconds + "s");

          // If the count down is finished, clear the interval and update text
          if (distance < 0) {
              clearInterval(x);
              $(".countdown").text("EXPIRED");
          }
      }, 1000);

      if($('.banners-home-st-1').length){
        $('.banners-home-st-1').slick({
          dots: false,
          arrows: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 50000,          
        });
      }
      
      $(window).load(function(){
        $("body").css({"opacity":"1"});
      });

      $(".desktop-header-icon-cart").click(function(){
        $(".carrinho-lateral").removeClass("active");
        showProdutosCart();
      });

      $(".carrinho-lateral-fechar, .carrinho-lateral-continuar-comprando").click(function(){
        $(".carrinho-lateral").removeClass("active");
      });

      formatCurrency = function (total) {        
        var resultado = total.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
        return resultado;
      }

      showProdutosCart = function(){
          var dataSession =  $("html").attr("data-session");
          $(".carrinho-lateral-row").remove();
          $(".carrinho-lateral-corpo").append("<div class='carrinho-lateral-row'></div>");
          var QtdProducts1 = 0;
          var QtdProducts2 = 0;
          var Total = 0;
          $.ajax({
              method: "GET",
              url: "/web_api/cart/"+dataSession
          }).done(function( response, textStatus, jqXHR ){
            var count = 1;                   
            $.each(response, function(index){
              if(response[index].Cart.variant_id == 0){
                $(".carrinho-lateral-row").append('<div class="xtracer-carrinho-item d-flex align-items-center"><div class="xtracer-carrinho-item-imagem d-flex align-items-center"><img src="'+response[index].Cart.product_image.https+'" height="57" width="57"></div><div class="xtracer-carrinho-item-nome"><div class="col-12"><h2>'+response[index].Cart.product_name+'</h2></div><div class="col-12 mt-2"><h4>Quantidade: '+response[index].Cart.quantity+'</h4></div><div class="col-12 mt-2"><p>Pre&ccedil;o Unit&aacute;rio: <span>'+formatCurrency(response[index].Cart.price * 1)+'</span></p></div></div><div class="xtracer-carrinho-item-total"><strong><span>'+formatCurrency(response[index].Cart.price * response[index].Cart.quantity)+'</span></strong><div class="xtracer-carrinho-remover-item" onclick="removeProductCart('+response[index].Cart.product_id+')">Remover</div></div></div>');                
              }else{
                $(".carrinho-lateral-row").append('<div class="xtracer-carrinho-item d-flex align-items-center"><div class="xtracer-carrinho-item-imagem d-flex align-items-center"><img src="'+response[index].Cart.product_image.https+'" height="57" width="57"></div><div class="xtracer-carrinho-item-nome"><div class="col-12"><h2>'+response[index].Cart.product_name+'</h2></div><div class="col-12 mt-2"><h4>Quantidade: '+response[index].Cart.quantity+'</h4></div><div class="col-12 mt-2"><p>Pre&ccedil;o Unit&aacute;rio: <span>'+formatCurrency(response[index].Cart.price * 1)+'</span></p></div></div><div class="xtracer-carrinho-item-total"><strong><span>'+formatCurrency(response[index].Cart.price * response[index].Cart.quantity)+'</span></strong><div class="xtracer-carrinho-remover-item" onclick="removeProductCartVariation('+response[index].Cart.product_id+','+response[index].Cart.variant_id+')">Remover</div></div></div>');               
              }              
              Total+=(response[index].Cart.price * response[index].Cart.quantity);
              QtdProducts1++;
              QtdProducts2 = parseInt(QtdProducts2) + parseInt(response[index].Cart.quantity);
            });

            if(QtdProducts1 > 0){
              $(".carrinho-lateral-total-produtos").html(QtdProducts1+" Item ("+QtdProducts2+" Produtos)");
              $(".carrinho-lateral-total-valor strong").html(formatCurrency(Total));
            }

            $(".carrinho-lateral").addClass("active");

          }).fail(function( jqXHR, status, errorThrown ){
            $(".carrinho-lateral").addClass("active");
          }); 
        }  

        removeProductCart = function(productID){
          var dataSession =  $("html").attr("data-session");
          var productID = productID;
          jQuery.ajax({
            method: "DELETE",
            url: "https://www.xtracer.com.br/web_api/carts/"+dataSession+"/"+productID
          }).done(function( response, textStatus, jqXHR ){            
              $(".carrinho-lateral-total-produtos").html("Sem itens");
              $(".carrinho-lateral-total-valor strong").html("R$ 0,00");
              $(".carrinho-lateral").removeClass("active");
              showProdutosCart();
          }).fail(function( jqXHR, status, errorThrown ){
              var response = jQuery.parseJSON( jqXHR.responseText );
              $(".carrinho-lateral-total-produtos").html("Sem itens");
              $(".carrinho-lateral-total-valor strong").html("R$ 0,00");
              $(".carrinho-lateral").removeClass("active");
              showProdutosCart();
          });
        }

        removeProductCartVariation = function(productID, variant_id){
          var dataSession = $("html").attr("data-session");
          var productID = productID;
          var variant = variant_id;
          jQuery.ajax({
            method: "DELETE",
            url: "https://www.xtracer.com.br/web_api/carts/"+dataSession+"/"+productID+"/"+variant_id+"/0",
            contentType: "application/json; charset=utf-8",
          }).done(function(response, textStatus, jqXHR){
              $(".carrinho-lateral-total-produtos").html("Sem itens");
              $(".carrinho-lateral-total-valor strong").html("R$ 0,00");
              $(".carrinho-lateral").removeClass("active");
              showProdutosCart();
          }).fail(function( jqXHR, status, errorThrown ){
            var response = jQuery.parseJSON( jqXHR.responseText );
            $(".carrinho-lateral-total-produtos").html("Sem itens");
            $(".carrinho-lateral-total-valor strong").html("R$ 0,00");
            $(".carrinho-lateral").removeClass("active");
            showProdutosCart();
          });
        }

      var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
      };

      $(".btn-carrinho-comprar.with-variants").click(function(){
        var productID = $(this).attr("data-product-id");            
        var dataSession =  $("html").attr("data-session");
        var productQTD = $(".comprar-produto-controls input").val();
        if( $(".cor_variacao.passo2").length ){
          var variant_id = $(".cor_variacao.passo2").children("ul").children("li").children("img.cor_selecionada").closest("li").attr("data-id");
        }else{
          var variant_id = getUrlParameter('variant_id');             
        }

        if(!variant_id){
          alert("Selecione a varia&ccedil;&atilde;o para adicionar ao carrinho.");
        }else{       
          $.ajax({
            method: "POST",
            url: "https://www.xtracer.com.br/web_api/cart/",
            contentType: "application/json; charset=utf-8",
            data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+productID+'","quantity":"'+productQTD+'","variant_id":"'+variant_id+'"}}'
          }).done(function( response, textStatus, jqXHR ) {
            $(".carrinho-lateral").removeClass("active");
            showProdutosCart();
          }).fail(function( jqXHR, status, errorThrown ){
            $(".carrinho-lateral").removeClass("active");
          });      
        }             
      });
      
      $(".btn-carrinho-comprar.no-variants").click(function(){
        
        var dataSession =  $("html").attr("data-session");
        var productID = $(this).attr("data-product-id");
        var productQTD = 1;
        $.ajax({
          method: "POST",
          url: "https://www.xtracer.com.br/web_api/cart/",
          contentType: "application/json; charset=utf-8",
          data: '{"Cart":{"session_id":"'+dataSession+'","product_id":"'+productID+'","quantity":"'+productQTD+'"}}'
        }).done(function( response, textStatus, jqXHR ) {
          $(".carrinho-lateral").removeClass("active");
          showProdutosCart();
        }).fail(function( jqXHR, status, errorThrown ){
          $(".carrinho-lateral").removeClass("active");
          alert("Aten&ccedil;&atilde;o Estoque insuficiente para a quantidade solicitada.");
        });
      });



    });
})(jQuery);