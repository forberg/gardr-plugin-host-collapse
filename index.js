var validateOpts = require('define-options')({
    collapseIfWidthLessThan: '?|number    - minimum width in pixels (default 10)',
    collapseIfHeightLessThan: '?|number    - minimum height in pixels (default 10)'
});

var minWidth, minHeight;

function collapsePlugin(gardrPluginApi, options) {
    options = options || {};
    validateOpts(options);
    minWidth = options.collapseIfWidthLessThan || 10;
    minHeight = options.collapseIfHeightLessThan || 10;


    gardrPluginApi.on('item:afterrender', function(item) {
        if (isEmpty(item.rendered)) {
            item.options.container.style.display = "none";
        }
    });
};

function isEmpty(rendered) {
    return rendered.width < minWidth || rendered.height < minHeight;
}

module.exports = collapsePlugin;
