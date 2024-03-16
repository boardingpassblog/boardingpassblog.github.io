---
layout: page
title: Nosotros
permalink: /nosotros/
image: /assets/images/acerca.jpg
---

{% include pages/title.html %}

<h3 class="font-weight-light">Hola, somos <span class="font-weight-bold">{{site.author.name}}</span></h3>

Nuestro principal objetivo es brindar una fuente confiable y segura de información a todos aquellos quienes deseen aventurarse a conocer el país, relacionarse con nuestra cultura, o simplemente traspasar nuestras fronteras para conocer nuevos horizontes.

Queremos abrir un canal de comunicación con los principales protagonistas del sector para que nuestra audiencia pueda obtener de primera mano las buenas nuevas y alternativas para hacer turismo.

Queremos compartir experiencias valiosas que se conviertan en inspiración y motivos de viajes para otros.

Finalmente, queremos reseñar lugares, actividades, ideas e interesantes productos autóctonos al viajero nacional y extranjero, que les sirva de referencia y conocimiento.

Para esto, además de reseñar artículos, noticias y notas más relevantes, estamos elaborando un directorio completo que aglutine a todos los actores del área: Líneas Aéreas, Operadores, Mayoristas, Agencias de Viajes, Hospedaje y demás empresas de servicios para viajeros que permita a los cibernautas acceder a la información de forma más expedita.

<h3 class="font-weight-light pt-3">Presentación corporativa</h3>

{%
 include carousel.html
%}

<h3 class="font-weight-light pt-3">Tarifario</h3>
{%
 include tarifario.html
%}

<h3 class="font-weight-light pt-3">Contacto</h3>
<p class="mb-5">
Desde <span class="font-weight-bold">BoardingPass.Network</span> creemos que las comunicaciones son la forma más efectiva 
de unir a las personas, y cuando tenemos las mismas inquietudes resulta mucho más fácil.
<br><br>
Así que estamos muy contentos de tener tu mensaje, para darte una respuesta. 
<br><br>
Gracias por confiar en <span class="font-weight-bold">BoardingPass.Network</span>.
</p>

<form action="https://formspree.io/{{ site.contact-form }}" method="POST" class="row" id="formId">
  <div class="col-lg-6">
    <input type="text" class="form-control mb-4" name="name" id="name" placeholder="Nombre">
  </div>
  <div class="col-lg-6">
    <input type="email" class="form-control mb-4" name="_replyto" id="email" placeholder="Email">
  </div>
  <div class="col-12">
    <textarea name="message" id="message" class="form-control mb-4" placeholder="Mensaje..."></textarea>
  </div>
  <div id="recaptchaContainer" class="g-recaptcha recaptcha-none" data-sitekey="6Le0AtAnAAAAAFr5iSQ3h_rIBH9nMpq3q88fd7di"></div>
  <div class="col-12 line-break">
    <button class="btn btn-primary" type="submit">Enviar</button>
  </div>
</form>

<script>
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
      el.setAttribute('required', 'required'); 
    } 
  }

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  var recaptchaContainer = document.getElementById("recaptchaContainer");

  function checkFormFields() {
    if (nameInput.value === "" && emailInput.value === "" && messageInput.value === "") {
      recaptchaContainer.style.display = "none"; // Hide the reCAPTCHA
    } else {
      recaptchaContainer.style.display = "block"; // Show the reCAPTCHA
    }
  }

  nameInput.addEventListener("input", checkFormFields);
  emailInput.addEventListener("input", checkFormFields);
  messageInput.addEventListener("input", checkFormFields);
</script>