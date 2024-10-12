
var clipboard = new ClipboardJS('.copy-email, .copy-phone', {
    text: function(trigger) {
        return trigger.getAttribute('data-clipboard-text');
    }
});


