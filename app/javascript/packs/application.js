// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("semantic-ui-sass")
//= require semantic-ui
//= require jquery

//= require jquery_ujs
// require turbolinks

scroll_bottom = function() {
    let messageComponent = $('#messages')
    if (messageComponent.length > 0) {
        messageComponent.scrollTop(messageComponent[0].scrollHeight)
    }
}

submit_message = function() {
    let messageBody = $('#message_body');
    messageBody.on('keydown', function(event) {
        if (event.keyCode == 13) {
            $('button').click();
            event.target.value = "";
        }
    });
}

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
    scroll_bottom();
    submit_message();
})


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
